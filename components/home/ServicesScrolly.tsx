"use client";

import { useSyncExternalStore } from "react";

import { cn } from "@/lib/utils";
import { servicesIntro, services } from "@/content/home";
import { Container, Eyebrow } from "@/components/ui";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import { useActiveStep } from "@/hooks/useActiveStep";

import { ServiceItem } from "./ServiceItem";

/** Hydration flag without a setState-in-effect: server snapshot is `false`,
 *  client snapshot is `true`. Never re-subscribes (the value is constant). */
const noopSubscribe = () => () => {};
function useHydrated(): boolean {
  return useSyncExternalStore(
    noopSubscribe,
    () => true,
    () => false,
  );
}

/**
 * §7 — Services numbered scrolly section (design 05 §3.5, 07 §7).
 *
 * Section shell stays light on canvas. Renders a section intro (eyebrow +
 * statement headline) above an ordered list of the five service lines.
 *
 * Progressive enhancement:
 *  - Baseline (no JS, or `prefers-reduced-motion`): a plain, fully-visible
 *    stacked `<ol>` of `ServiceItem`s — every index/earmark/heading shown in
 *    document order, nothing pinned, nothing dimmed.
 *  - Enhanced (JS + motion OK): a tall scroll track with a sticky stage that
 *    pins below the nav. Per-step sentinels feed `useActiveStep`, which marks
 *    the centered item active (accent index + earmark) and dims the rest. The
 *    list lives inside the sticky stage so it pins as a single unit while the
 *    track scrolls; the sentinels measure scroll progress.
 *
 * SSR-safe: both paths render the same semantic `<ol><li>`; `enhanced` starts
 * false (server value) and only flips on after hydration when motion is OK.
 */
export function ServicesScrolly() {
  const reducedMotion = useReducedMotion();
  const hydrated = useHydrated();
  const { activeIndex, registerStep } = useActiveStep(services.length);

  const enhanced = hydrated && !reducedMotion;

  return (
    <section className="section bg-canvas">
      <Container>
        {/* Section intro */}
        <div className="flex flex-col gap-s">
          <Eyebrow size="eyebrow">{servicesIntro.eyebrow}</Eyebrow>
          <h2 className="font-display text-headline-lg font-normal text-ink max-w-[20ch]">
            {servicesIntro.headline}
          </h2>
        </div>

        {enhanced ? (
          /* Enhanced: sticky-pinned scrolly. The track is tall enough to give
             each item a scroll beat; the stage pins below the nav. */
          <div className="relative mt-2xl">
            <div className="sticky top-nav">
              <ol className="grid gap-l">
                {services.map((item, i) => (
                  <li key={item.index}>
                    <ServiceItem item={item} active={i === activeIndex} />
                  </li>
                ))}
              </ol>
            </div>

            {/* Step sentinels: one tall band per item drives the active step.
                Decorative/structural only — the real list is above. */}
            <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
              {services.map((item, i) => (
                <div key={item.index} ref={registerStep(i)} className="h-screen" />
              ))}
            </div>
          </div>
        ) : (
          /* Baseline: plain stacked list (no-JS / reduced-motion fallback). */
          <ol className={cn("mt-2xl grid gap-2xl")}>
            {services.map((item) => (
              <li key={item.index}>
                <ServiceItem item={item} />
              </li>
            ))}
          </ol>
        )}
      </Container>
    </section>
  );
}
