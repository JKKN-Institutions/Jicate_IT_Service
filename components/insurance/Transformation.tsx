"use client";

import { useState } from "react";

import { Container, Section } from "@/components/ui";
import { Reveal } from "@/components/motion/Reveal";
import { cn } from "@/lib/utils";
import { transformation } from "@/content/insurance";

import { GiantHeading, Eyebrow, InkLink } from "./parts";

/**
 * Real AI Transformation — a giant heading, a row of pill tabs (one per insurer),
 * and the active case study: a big pull-quote on the left, partner/overview in
 * the middle, and a speaker image + watch link on the right, with the outcome
 * points listed beneath.
 */
export function Transformation() {
  const [active, setActive] = useState(0);
  const c = transformation.tabs[active];

  return (
    <Section className="bg-canvas" aria-label={transformation.heading}>
      <Container>
        <Reveal className="mb-2xl">
          <GiantHeading size="anchor" className="text-ink">
            {transformation.heading}
          </GiantHeading>
        </Reveal>

        {/* Pill tabs */}
        <div role="tablist" className="mb-3xl flex flex-wrap gap-m">
          {transformation.tabs.map((t, i) => (
            <button
              key={t.tab}
              role="tab"
              type="button"
              aria-selected={i === active}
              onClick={() => setActive(i)}
              className={cn(
                "rounded-full border px-l py-s text-body transition-colors duration-[var(--duration-micro)]",
                i === active
                  ? "border-ink bg-ink text-canvas"
                  : "border-ink/30 text-ink hover:border-ink",
              )}
            >
              {t.tab}
            </button>
          ))}
        </div>

        {/* Active case study */}
        <div className="grid grid-cols-1 gap-x-2xl gap-y-2xl desktop:grid-cols-3">
          <div className="border-t border-ink pt-l">
            <p className="font-display text-[clamp(1.5rem,1rem+1.4vw,1.889rem)] font-normal leading-[1.18] tracking-[-0.01em] text-ink">
              <span aria-hidden className="text-ink-light">“</span>
              {c.quote.replace(/^“|”$/g, "")}
              <span aria-hidden className="text-ink-light">”</span>
            </p>
          </div>

          <div className="flex flex-col gap-l">
            <div className="border-t border-ink/20 pt-m">
              <Eyebrow className="block">Partner</Eyebrow>
              <p className="mt-s text-body-lg text-ink">{c.partner}</p>
            </div>
            <div className="border-t border-ink/20 pt-m">
              <Eyebrow className="block">Overview</Eyebrow>
              <p className="mt-s text-body leading-[1.5] text-ink">{c.overview}</p>
            </div>
          </div>

          <div className="flex flex-col gap-l">
            <div className="aspect-[16/10] w-full overflow-hidden rounded-[2px] bg-ink/[0.06]">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={c.image} alt={c.imageAlt} className="h-full w-full object-cover" loading="lazy" />
            </div>
            <InkLink href="#" className="text-body">
              {c.watchLabel}
            </InkLink>
          </div>
        </div>

        {/* Outcome points */}
        <div className="mt-3xl grid grid-cols-1 gap-2xl tablet:grid-cols-2 desktop:grid-cols-3">
          {c.points.map((p) => (
            <div key={p.strong} className="flex flex-col gap-s">
              <p className="text-body leading-[1.5] text-ink">
                <span className="font-semibold">{p.strong}</span>
                <span aria-hidden className="text-ink-light"> → </span>
                {p.body}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}

export default Transformation;
