"use client";

import { useEffect, useRef, useState, useSyncExternalStore } from "react";

import { cn } from "@/lib/utils";
import { offerings, ourSoftwareHeading } from "@/content/offerings";
import { Container, EarmarkGlyph, NumberedIndex } from "@/components/ui";
import { useReducedMotion } from "@/hooks/useReducedMotion";

/** Hydration flag without setState-in-effect: server snapshot `false`,
 *  client snapshot `true` (same trick as the other home sections). */
const noopSubscribe = () => () => {};
function useHydrated(): boolean {
  return useSyncExternalStore(noopSubscribe, () => true, () => false);
}

/**
 * "Our Software" — the numbered offerings list (reference: Palantir homepage
 * "Our Software"). Each row is laid out as: tagline + /0.x index on the left,
 * a preview in the middle, and the large product name on the right.
 *
 * Interaction: hovering (or keyboard-focusing) a product reveals its looping
 * video preview in the middle slot and lights its name + index to ink; the
 * other rows show a quiet earmark glyph in place of the preview. The first
 * product is active by default, so the section is never empty.
 *
 * Progressive enhancement: the active video only auto-plays after hydration
 * and when motion is allowed; under reduced motion / no-JS it sits paused on
 * its first frame and the default (first) product stays selected.
 */
export function OurSoftware() {
  const reducedMotion = useReducedMotion();
  const hydrated = useHydrated();
  const enhanced = hydrated && !reducedMotion;

  const [active, setActive] = useState(0);
  const videoRefs = useRef<Array<HTMLVideoElement | null>>([]);

  // Play the active offering's video; pause the rest. Inert until enhanced.
  useEffect(() => {
    if (!enhanced) return;
    videoRefs.current.forEach((video, i) => {
      if (!video) return;
      if (i === active) {
        void video.play().catch(() => {});
      } else {
        video.pause();
      }
    });
  }, [enhanced, active]);

  return (
    <section className="section bg-canvas" aria-label={ourSoftwareHeading}>
      <Container>
        <h2 className="font-display text-headline-lg font-normal text-ink">
          {ourSoftwareHeading}
        </h2>

        <ul className="mt-2xl flex flex-col">
          {offerings.map((item, i) => {
            const isActive = i === active;
            return (
              <li
                key={item.index}
                className="border-t-[0.8px] border-ink/15 last:border-b-[0.8px]"
                onMouseEnter={() => setActive(i)}
              >
                <a
                  href={item.href}
                  target="_blank"
                  rel="noreferrer"
                  onFocus={() => setActive(i)}
                  className="grid items-center gap-l py-l focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent desktop:grid-cols-[3fr_4fr_5fr]"
                >
                  {/* Left: tagline + numbered index */}
                  <div className="flex flex-col gap-s">
                    <p className="text-body text-ink-medium max-w-[26ch]">
                      {item.tagline}
                    </p>
                    <NumberedIndex value={item.index} active={isActive} />
                  </div>

                  {/* Middle: preview — video on the active row, glyph otherwise */}
                  <div className="relative aspect-video w-full overflow-hidden">
                    <video
                      ref={(el) => {
                        videoRefs.current[i] = el;
                      }}
                      className={cn(
                        "absolute inset-0 h-full w-full bg-near-black object-cover transition-opacity duration-300 ease-[var(--ease-standard)]",
                        isActive ? "opacity-100" : "opacity-0",
                      )}
                      src={item.video}
                      muted
                      loop
                      playsInline
                      preload="metadata"
                      aria-hidden
                    />
                    <span
                      aria-hidden
                      className={cn(
                        "absolute inset-0 flex items-center justify-center text-ink-light transition-opacity duration-300",
                        isActive ? "opacity-0" : "opacity-100",
                      )}
                    >
                      <EarmarkGlyph
                        variant={i % 2 === 0 ? "circle" : "triangle"}
                        size={48}
                      />
                    </span>
                  </div>

                  {/* Right: large product name */}
                  <span
                    className={cn(
                      "text-right font-display text-display font-normal leading-[0.95] tracking-[-0.02em] transition-colors duration-200 desktop:text-hero",
                      isActive ? "text-ink" : "text-ink-light",
                    )}
                  >
                    {item.name}
                  </span>
                </a>
              </li>
            );
          })}
        </ul>
      </Container>
    </section>
  );
}

export default OurSoftware;
