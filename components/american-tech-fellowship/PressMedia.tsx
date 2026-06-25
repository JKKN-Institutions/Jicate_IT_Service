"use client";

import { useRef } from "react";

import { Container, Section } from "@/components/ui";
import { pressMedia, type PressItem } from "@/content/american-tech-fellowship";

import { SectionHeading } from "./parts";

/**
 * "Press & Media" — a section heading with left/right carousel controls, and a
 * horizontally-scrolling row of press cards (date, source, title, CTA, image).
 * Images are placeholders (reference parity).
 */
export function PressMedia() {
  const trackRef = useRef<HTMLDivElement | null>(null);

  const scrollBy = (dir: number) => {
    const el = trackRef.current;
    if (!el) return;
    el.scrollBy({ left: dir * (el.clientWidth * 0.6), behavior: "smooth" });
  };

  return (
    <Section className="!pt-[60px] !pb-[100px]" aria-label="Press & Media">
      <Container>
        <div className="flex items-center justify-between gap-l">
          <SectionHeading>{pressMedia.heading}</SectionHeading>
          <div className="flex items-center gap-[10px]">
            <Arrow dir="left" onClick={() => scrollBy(-1)} />
            <Arrow dir="right" onClick={() => scrollBy(1)} />
          </div>
        </div>

        <div
          ref={trackRef}
          className="mt-[40px] flex snap-x gap-[24px] overflow-x-auto pb-[8px] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {pressMedia.items.map((item, i) => (
            <Card key={i} item={item} />
          ))}
        </div>
      </Container>
    </Section>
  );
}

function Card({ item }: { item: PressItem }) {
  return (
    <article className="flex w-[320px] shrink-0 snap-start flex-col gap-[16px] border-t border-ink/15 pt-[20px]">
      <div className="flex flex-col gap-[8px]">
        <span className="font-mono text-caption uppercase tracking-[0.06em] text-ink-light">
          {item.date} · {item.source}
        </span>
        <p className="text-body-lg leading-[1.35] text-ink">{item.title}</p>
        <a
          href="#"
          className="mt-[4px] inline-flex items-baseline gap-[0.4em] text-body-sm text-ink underline decoration-ink/30 underline-offset-[3px] hover:decoration-ink"
        >
          {item.cta} <span aria-hidden>→</span>
        </a>
      </div>
      <div className="aspect-[16/9] w-full overflow-hidden rounded-[2px] bg-band">
        {item.image ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={item.image} alt="" className="h-full w-full object-cover" loading="lazy" />
        ) : (
          <div aria-hidden className="h-full w-full bg-[linear-gradient(160deg,#f3f3f3_0%,#e7e7e7_100%)]" />
        )}
      </div>
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

export default PressMedia;
