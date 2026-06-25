"use client";

import { useRef } from "react";

import { Container, Section } from "@/components/ui";
import { partners, type PartnerCard } from "@/content/automotive-mobility";

import { SectionHeading } from "./parts";

/**
 * "Our Partners" — a section heading with left/right carousel controls and a
 * horizontally-scrolling row of impact cards (eyebrow, partner, title, body,
 * CTA, image placeholder). Logos/photos are placeholders (reference parity).
 */
export function Partners() {
  const trackRef = useRef<HTMLDivElement | null>(null);

  const scrollBy = (dir: number) => {
    const el = trackRef.current;
    if (!el) return;
    el.scrollBy({ left: dir * (el.clientWidth * 0.6), behavior: "smooth" });
  };

  return (
    <Section className="!pt-[60px] !pb-[80px]" aria-label="Our Partners">
      <Container>
        <div className="flex items-center justify-between gap-l">
          <SectionHeading>{partners.heading}</SectionHeading>
          <div className="flex items-center gap-[10px]">
            <Arrow dir="left" onClick={() => scrollBy(-1)} />
            <Arrow dir="right" onClick={() => scrollBy(1)} />
          </div>
        </div>

        <div
          ref={trackRef}
          className="mt-[40px] flex snap-x gap-[24px] overflow-x-auto pb-[8px] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {partners.cards.map((card, i) => (
            <Card key={i} card={card} />
          ))}
        </div>
      </Container>
    </Section>
  );
}

function Card({ card }: { card: PartnerCard }) {
  return (
    <article className="flex w-[360px] shrink-0 snap-start flex-col overflow-hidden rounded-[2px] border border-ink/12 bg-surface-light">
      <div className="flex flex-1 flex-col gap-[14px] p-[28px]">
        <span className="font-mono text-caption uppercase tracking-[0.08em] text-ink-light">{card.eyebrow}</span>
        <div className="h-[28px] w-[96px] rounded-[2px] bg-ink/10" aria-hidden />
        <p className="text-body-lg font-medium leading-[1.3] text-ink">{card.title}</p>
        <p className="text-body-sm leading-[1.45] text-ink-medium">{card.body}</p>
        <a
          href="#"
          className="mt-auto inline-flex items-baseline gap-[0.4em] text-body-sm text-ink underline decoration-ink/30 underline-offset-[3px] hover:decoration-ink"
        >
          {card.cta} <span aria-hidden>→</span>
        </a>
      </div>
      <div aria-hidden className="aspect-[16/9] w-full bg-[linear-gradient(160deg,#f3f3f3_0%,#e7e7e7_100%)]" />
    </article>
  );
}

function Arrow({ dir, onClick }: { dir: "left" | "right"; onClick: () => void }) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={dir === "left" ? "Previous" : "Next"}
      className="flex h-[40px] w-[40px] items-center justify-center rounded-full border border-ink/20 text-ink transition-colors hover:bg-ink hover:text-canvas"
    >
      <svg viewBox="0 0 24 24" className="h-[16px] w-[16px]" fill="none" stroke="currentColor" strokeWidth="2">
        <path d={dir === "left" ? "M15 6l-6 6 6 6" : "M9 6l6 6-6 6"} strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </button>
  );
}

export default Partners;
