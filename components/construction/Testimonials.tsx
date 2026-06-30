"use client";

import { useRef } from "react";

import { Container } from "@/components/ui";
import { testimonials } from "@/content/construction";

import { MidHeading } from "./parts";

/**
 * Testimonials — a heading, prev/next controls, and a horizontally scrolling
 * rail of notched, numbered quote cards (reference parity). Quotes are
 * placeholder copy.
 */
export function Testimonials() {
  const railRef = useRef<HTMLDivElement>(null);

  const scrollBy = (dir: number) => {
    const rail = railRef.current;
    if (!rail) return;
    const card = rail.querySelector("[data-card]") as HTMLElement | null;
    const amount = card ? card.offsetWidth + 24 : 420;
    rail.scrollBy({ left: dir * amount, behavior: "smooth" });
  };

  return (
    <section aria-label={testimonials.heading} className="pt-[120px] desktop:pt-[180px]">
      <Container>
        <MidHeading className="max-w-[18ch]">{testimonials.heading}</MidHeading>

        {/* Controls */}
        <div className="mt-[40px] flex gap-[16px]">
          {[
            { dir: -1, label: "Previous", glyph: "←" },
            { dir: 1, label: "Next", glyph: "→" },
          ].map((c) => (
            <button
              key={c.label}
              type="button"
              aria-label={c.label}
              onClick={() => scrollBy(c.dir)}
              className="flex h-[64px] w-[64px] items-center justify-center rounded-full border border-white/40 text-[22px] text-white transition-colors duration-[var(--duration-micro)] hover:border-white hover:bg-white hover:text-[#1e2124]"
            >
              {c.glyph}
            </button>
          ))}
        </div>
      </Container>

      {/* Rail */}
      <Container className="mt-[48px]">
        <div
          ref={railRef}
          className="flex gap-[24px] overflow-x-auto pb-[8px] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {testimonials.items.map((t) => (
            <article
              key={t.n}
              data-card
              className="flex min-h-[440px] w-[min(80vw,440px)] shrink-0 flex-col bg-white/[0.06] p-[32px]"
              style={{ clipPath: "polygon(0 0, calc(100% - 28px) 0, 100% 28px, 100% 100%, 0 100%)" }}
            >
              <span className="text-[clamp(1rem,1.25vw,1.125rem)] text-white/45">{t.n}/</span>
              <span className="mt-[16px] block h-px w-full bg-white/20" />
              <span aria-hidden className="mt-[24px] text-[22px] text-white">
                ◎
              </span>
              <span className="mt-[24px] block h-px w-full bg-white/20" />
              <p className="mt-[32px] text-[clamp(1.25rem,1.67vw,1.5rem)]/[1.3] text-white">
                “{t.quote}”
              </p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}

export default Testimonials;
