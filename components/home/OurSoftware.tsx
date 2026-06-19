"use client";

import { useEffect, useRef, useSyncExternalStore } from "react";

import { cn } from "@/lib/utils";
import { offerings, ourSoftwareHeading } from "@/content/offerings";
import { Container, NumberedIndex } from "@/components/ui";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import { useActiveStep } from "@/hooks/useActiveStep";

/** Hydration flag without setState-in-effect: server snapshot `false`,
 *  client snapshot `true` (same trick as ServicesScrolly / ServicesSlider). */
const noopSubscribe = () => () => {};
function useHydrated(): boolean {
  return useSyncExternalStore(noopSubscribe, () => true, () => false);
}

/**
 * "Our Software" — the numbered /0.1–/0.5 offerings list (reference: Palantir
 * homepage "Our Software"). Each product shows a looping muted video preview.
 *
 * Progressive enhancement:
 *  - Baseline (no JS / prefers-reduced-motion): a plain stacked list; every
 *    product fully legible; videos sit paused on their first frame (preload
 *    "metadata"), nothing dimmed.
 *  - Enhanced: a scroll-spy (useActiveStep, viewport-center band) marks the
 *    centered product active — its index lights to the accent, siblings dim,
 *    and only the active product's video plays (others pause).
 */
export function OurSoftware() {
  const reducedMotion = useReducedMotion();
  const hydrated = useHydrated();
  const { activeIndex, registerStep } = useActiveStep(offerings.length);
  const enhanced = hydrated && !reducedMotion;

  const videoRefs = useRef<Array<HTMLVideoElement | null>>([]);

  // Play the active offering's video; pause the rest. Inert until enhanced.
  useEffect(() => {
    if (!enhanced) return;
    videoRefs.current.forEach((video, i) => {
      if (!video) return;
      if (i === activeIndex) {
        void video.play().catch(() => {});
      } else {
        video.pause();
      }
    });
  }, [enhanced, activeIndex]);

  return (
    <section className="section bg-canvas" aria-label={ourSoftwareHeading}>
      <Container>
        <h2 className="font-display text-headline-lg font-normal text-ink">
          {ourSoftwareHeading}
        </h2>

        <ol className="mt-2xl grid gap-2xl">
          {offerings.map((item, i) => {
            const active = enhanced ? i === activeIndex : undefined;
            const dimmed = active === false;
            return (
              <li
                key={item.index}
                ref={enhanced ? registerStep(i) : undefined}
                className={cn(
                  "grid items-center gap-l desktop:grid-cols-[3fr_4fr]",
                  "transition-opacity duration-[var(--duration-reveal)] ease-[var(--ease-out-quint)] motion-reduce:transition-none",
                  dimmed && "opacity-40",
                )}
              >
                {/* Text */}
                <div className="flex flex-col gap-s">
                  <div className="flex items-center gap-s">
                    <NumberedIndex value={item.index} active={active} />
                    <span className="font-mono text-caption uppercase tracking-[0.05em] text-ink-light">
                      {item.name}
                    </span>
                  </div>
                  <h3 className="font-display text-headline text-ink max-w-[18ch]">
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noreferrer"
                      className="transition-opacity duration-200 hover:opacity-[0.66]"
                    >
                      {item.tagline}
                    </a>
                  </h3>
                </div>

                {/* Video preview */}
                <div className="aspect-video w-full overflow-hidden bg-near-black">
                  <video
                    ref={(el) => {
                      videoRefs.current[i] = el;
                    }}
                    className="h-full w-full object-cover"
                    src={item.video}
                    poster={item.poster}
                    muted
                    loop
                    playsInline
                    preload="metadata"
                    aria-label={`${item.name} preview`}
                  />
                </div>
              </li>
            );
          })}
        </ol>
      </Container>
    </section>
  );
}

export default OurSoftware;
