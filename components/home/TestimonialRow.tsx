"use client";

import { useCallback, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

import { cn } from "@/lib/utils";
import type { Testimonial } from "@/types";
import { Container, Eyebrow, IconButton } from "@/components/ui";
import { useReducedMotion } from "@/hooks/useReducedMotion";

export interface TestimonialRowProps {
  testimonials: Testimonial[];
  className?: string;
}

/**
 * §7 — Testimonial scroller (design 04 §8, 05 §3.6, 07 §9).
 *
 * A horizontal scroll-snap row of dog-ear cards: native overflow scroll +
 * `scroll-snap` carries the interaction (trackpad / touch / wheel already
 * drag), with real prev/next `<button>`s as a non-drag, keyboard-operable
 * alternative. The track is a real scroll container with `scrollLeft`, so
 * snap and accessible scrolling work without animating any transform.
 *
 * Reduced motion: arrow jumps are instant (`scroll-behavior: auto` and an
 * `instant` programmatic scroll); the row stays fully scrollable. Snapping is
 * positional, not animated, so it is preserved.
 *
 * SSR-safe: the static markup (cards, eyebrows, quotes) renders on the server;
 * the only client behavior is the imperative `scrollBy` wiring in `useEffect`-
 * free event handlers (refs are touched only on user interaction).
 */
export function TestimonialRow({ testimonials, className }: TestimonialRowProps) {
  const trackRef = useRef<HTMLUListElement | null>(null);
  const reduced = useReducedMotion();

  const scrollByCard = useCallback(
    (direction: 1 | -1) => {
      const track = trackRef.current;
      if (!track) return;
      // One card width + gap (spacing `s` = 20px); fall back to ~88% of the
      // viewport-clamped track width when a card can't be measured.
      const firstCard = track.firstElementChild as HTMLElement | null;
      const step = firstCard
        ? firstCard.getBoundingClientRect().width + 20
        : track.clientWidth * 0.9;
      track.scrollBy({
        left: step * direction,
        behavior: reduced ? "auto" : "smooth",
      });
    },
    [reduced],
  );

  return (
    <div role="group" aria-label="Client testimonials" className={cn(className)}>
      <Container>
        <ul
          ref={trackRef}
          className={cn(
            "flex gap-s overflow-x-auto [scroll-snap-type:x_mandatory] [scroll-behavior:smooth] [overscroll-behavior-x:contain] pb-s motion-reduce:[scroll-behavior:auto]",
          )}
        >
          {testimonials.map((t) => (
            <li
              key={t.clientName}
              className="[scroll-snap-align:start] shrink-0 w-[88vw] tablet:w-[420px]"
            >
              <div className="flex h-full flex-col gap-l rounded-none bg-surface-medium p-l">
                <blockquote className="text-body text-ink">
                  {t.quote}
                </blockquote>
                <div className="mt-auto flex flex-col gap-tiny">
                  <Eyebrow as="p" className="text-ink">
                    {t.clientName}
                  </Eyebrow>
                  <cite className="text-caption text-ink-light not-italic">
                    {t.role}
                  </cite>
                </div>
              </div>
            </li>
          ))}
        </ul>

        {/* Non-drag, keyboard-operable scroll controls. */}
        <div className="mt-l flex gap-s">
          <IconButton
            label="Previous testimonials"
            tone="light"
            onClick={() => scrollByCard(-1)}
          >
            <ChevronLeft size={18} aria-hidden />
          </IconButton>
          <IconButton
            label="Next testimonials"
            tone="light"
            onClick={() => scrollByCard(1)}
          >
            <ChevronRight size={18} aria-hidden />
          </IconButton>
        </div>
      </Container>
    </div>
  );
}

export default TestimonialRow;
