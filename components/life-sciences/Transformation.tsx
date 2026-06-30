"use client";

import { useState } from "react";

import { Container, Section } from "@/components/ui";
import { Reveal } from "@/components/motion/Reveal";
import { cn } from "@/lib/utils";
import { transformation } from "@/content/life-sciences";

import { GiantHeading, Eyebrow, InkLink, MediaPlaceholder } from "./parts";

/**
 * Real AI Transformation — a giant heading, a row of pill tabs (one per partner),
 * and the active case study in three columns: a big pull-quote + citation on the
 * left; partner, overview, and "examples of our work together" points in the
 * middle; and a media + watch link on the right.
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
          {/* Left: quote + citation */}
          <div className="border-t border-ink pt-l">
            <p className="font-display text-[clamp(1.5rem,1rem+1.4vw,1.889rem)] font-normal leading-[1.18] tracking-[-0.01em] text-ink">
              <span aria-hidden className="text-ink-light">“</span>
              {c.quote.replace(/^“|”$/g, "")}
              <span aria-hidden className="text-ink-light">”</span>
            </p>
            <p className="mt-2xl text-body text-ink-light">
              <span aria-hidden>↳ </span>
              {c.cite}
            </p>
          </div>

          {/* Middle: partner, overview, examples */}
          <div className="flex flex-col gap-l">
            <div className="border-t border-ink/20 pt-m">
              <Eyebrow className="block">Partner</Eyebrow>
              <p className="mt-s text-body-lg text-ink">{c.partner}</p>
            </div>
            <div className="border-t border-ink/20 pt-m">
              <Eyebrow className="block">Overview</Eyebrow>
              <p className="mt-s text-body leading-[1.5] text-ink">{c.overview}</p>
            </div>
            <div className="border-t border-ink/20 pt-m">
              <Eyebrow className="block">{c.pointsLabel}</Eyebrow>
              <div className="mt-s flex flex-col gap-l">
                {c.points.map((p) => (
                  <p key={p.strong} className="text-body leading-[1.5] text-ink">
                    <span className="font-semibold">{p.strong}</span>
                    <span aria-hidden className="text-ink-light"> → </span>
                    {p.body}
                  </p>
                ))}
              </div>
            </div>
          </div>

          {/* Right: media + watch link */}
          <div className="flex flex-col gap-l">
            <div className="aspect-[16/10] w-full overflow-hidden rounded-[2px] bg-ink/[0.06]">
              {c.image ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img src={c.image} alt={c.imageAlt} className="h-full w-full object-cover" loading="lazy" />
              ) : (
                <MediaPlaceholder label={c.imageAlt} className="h-full" />
              )}
            </div>
            <InkLink href="#" className="text-body">
              {c.watchLabel}
            </InkLink>
          </div>
        </div>
      </Container>
    </Section>
  );
}

export default Transformation;
