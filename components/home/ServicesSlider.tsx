"use client";

import { useCallback, useEffect, useRef, useState, useSyncExternalStore } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";

import { cn } from "@/lib/utils";
import { servicesIntro, serviceSlides } from "@/content/home";
import {
  Container,
  EarmarkGlyph,
  Eyebrow,
  IconButton,
  NumberedIndex,
} from "@/components/ui";

/** Hydration flag without a setState-in-effect (same trick as ServicesScrolly):
 *  server snapshot is `false`, client snapshot is `true`. */
const noopSubscribe = () => () => {};
function useHydrated(): boolean {
  return useSyncExternalStore(
    noopSubscribe,
    () => true,
    () => false,
  );
}

/** Master group headings, in slide order (drives the tab strip). */
const groups = Array.from(new Set(serviceSlides.map((s) => s.group)));

/**
 * §7 — "WHAT WE DO" services slider.
 *
 * Slide-format presentation of the AI & Generative AI / AI Automation service
 * catalog. Layout: section intro (eyebrow + statement headline), a group tab
 * strip (the two master service groups), a scroll-snap track of themed slide
 * cards, and a footer rail with a mono slide counter and square prev/next
 * arrows.
 *
 * Progressive enhancement:
 *  - Baseline (no JS): the track is a plain horizontally scrollable snap list;
 *    every card fully legible, nothing dimmed, tabs/arrows simply inert.
 *  - Enhanced: scroll-spy (IntersectionObserver) keeps the active tab and
 *    counter in sync with swipes; tabs jump to the first slide of a group;
 *    arrows step one slide and wrap. Non-active slides dim only after
 *    hydration so SSR/no-JS never traps content at low emphasis.
 *
 * Honors prefers-reduced-motion: programmatic scrolls fall back to instant.
 */
export function ServicesSlider() {
  const hydrated = useHydrated();

  const trackRef = useRef<HTMLDivElement>(null);
  const itemRefs = useRef<Array<HTMLDivElement | null>>([]);
  const [active, setActive] = useState(0);

  const activeGroup = serviceSlides[active]?.group ?? groups[0];

  // Horizontal-only track scroll (NOT scrollIntoView, which also scrolls the
  // page vertically and yanks the viewport when the section is partly visible).
  const scrollToIndex = useCallback((index: number) => {
    const count = serviceSlides.length;
    const clamped = ((index % count) + count) % count;
    setActive(clamped);
    const track = trackRef.current;
    const item = itemRefs.current[clamped];
    if (!track || !item) return;
    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    const left =
      item.getBoundingClientRect().left -
      track.getBoundingClientRect().left +
      track.scrollLeft;
    track.scrollTo({ left, behavior: reduceMotion ? "auto" : "smooth" });
  }, []);

  // Scroll-spy: mark the most-visible slide active as the track scrolls/swipes.
  useEffect(() => {
    const track = trackRef.current;
    const items = itemRefs.current.filter(Boolean) as HTMLElement[];
    if (!track || items.length === 0) return;

    const ratios = new Map<Element, number>();
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          ratios.set(entry.target, entry.intersectionRatio);
        }
        let best = 0;
        let bestRatio = -1;
        items.forEach((el, i) => {
          const ratio = ratios.get(el) ?? 0;
          if (ratio > bestRatio) {
            bestRatio = ratio;
            best = i;
          }
        });
        setActive(best);
      },
      { root: track, threshold: [0.2, 0.4, 0.6, 0.8, 1] },
    );

    items.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const onTabsKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (event.key !== "ArrowRight" && event.key !== "ArrowLeft") return;
    event.preventDefault();
    scrollToIndex(event.key === "ArrowRight" ? active + 1 : active - 1);
  };

  const pad = (n: number) => String(n + 1).padStart(2, "0");

  return (
    <section
      className="section bg-canvas"
      aria-label="What we do — services"
      aria-roledescription="carousel"
    >
      <Container>
        {/* Section intro */}
        <div className="flex flex-col gap-s">
          <Eyebrow size="eyebrow">{servicesIntro.eyebrow}</Eyebrow>
          <h2 className="font-display text-headline-lg font-normal text-ink max-w-[24ch]">
            {servicesIntro.headline}
          </h2>
        </div>

        {/* Group tab strip — the two master service groups */}
        <div className="mt-xl flex flex-wrap items-end justify-between gap-s border-b-[0.8px] border-ink/15">
          <div
            className="flex gap-l overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
            role="group"
            aria-label="Service groups"
            onKeyDown={onTabsKeyDown}
          >
            {groups.map((group) => {
              const isActive = group === activeGroup;
              return (
                <button
                  key={group}
                  type="button"
                  className={cn(
                    "relative shrink-0 cursor-pointer pb-s font-mono text-body-sm uppercase tracking-[0.05em] transition-colors duration-200",
                    "after:absolute after:inset-x-0 after:bottom-[-0.8px] after:h-[2px] after:transition-colors after:duration-200",
                    isActive
                      ? "text-ink after:bg-accent"
                      : "text-ink-light hover:text-ink after:bg-transparent",
                  )}
                  aria-current={isActive ? "true" : undefined}
                  onClick={() =>
                    scrollToIndex(serviceSlides.findIndex((s) => s.group === group))
                  }
                >
                  {group}
                </button>
              );
            })}
          </div>

          {/* Mono slide counter */}
          <p
            className="hidden pb-s font-mono text-caption uppercase tracking-[0.05em] text-ink-light tablet:block"
            aria-hidden
          >
            {pad(active)} / {pad(serviceSlides.length - 1)}
          </p>
        </div>

        {/* Slide track */}
        <div
          ref={trackRef}
          className={cn(
            "mt-l flex snap-x snap-mandatory items-stretch gap-s overflow-x-auto",
            "[scrollbar-width:none] [&::-webkit-scrollbar]:hidden",
          )}
        >
          {serviceSlides.map((slide, i) => (
            <div
              key={slide.index}
              ref={(el) => {
                itemRefs.current[i] = el;
              }}
              className="w-full flex-none snap-start tablet:w-[88%]"
              aria-roledescription="slide"
              aria-label={`${i + 1} of ${serviceSlides.length}: ${slide.title}`}
            >
              <article
                className={cn(
                  "flex h-full flex-col gap-l bg-accent-5-opaque p-l tablet:p-2xl",
                  "transition-opacity duration-[var(--duration-reveal)] ease-[var(--ease-out-quint)] motion-reduce:transition-none",
                  hydrated && i !== active && "opacity-40",
                )}
              >
                {/* Slide header: numbered index + earmark + group label */}
                <div className="flex items-center gap-s">
                  <NumberedIndex value={slide.index} active={i === active} />
                  <span
                    className={cn(
                      "transition-colors duration-200",
                      i === active ? "text-accent" : "text-ink",
                    )}
                  >
                    <EarmarkGlyph variant={slide.earmark} />
                  </span>
                  <span className="font-mono text-caption uppercase tracking-[0.05em] text-ink-light">
                    {slide.group}
                  </span>
                </div>

                <div className="grid gap-l desktop:grid-cols-[2fr_3fr]">
                  <h3 className="font-display text-headline text-ink max-w-[18ch]">
                    {slide.title}
                  </h3>

                  {/* Service list — hairline rows, mono ordinals */}
                  <ul className="grid content-start gap-x-l tablet:grid-cols-2">
                    {slide.services.map((service, j) => (
                      <li
                        key={service}
                        className="flex items-baseline gap-s border-t-[0.8px] border-ink/15 py-s"
                      >
                        <span
                          aria-hidden
                          className="font-mono text-caption uppercase tracking-[0.05em] text-accent"
                        >
                          {pad(j)}
                        </span>
                        <span className="text-body text-ink">{service}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            </div>
          ))}
        </div>

        {/* Footer rail: prev / next */}
        <div className="mt-s flex justify-end gap-xs">
          <IconButton label="Previous slide" onClick={() => scrollToIndex(active - 1)}>
            <ArrowLeft size={18} aria-hidden />
          </IconButton>
          <IconButton label="Next slide" onClick={() => scrollToIndex(active + 1)}>
            <ArrowRight size={18} aria-hidden />
          </IconButton>
        </div>
      </Container>
    </section>
  );
}
