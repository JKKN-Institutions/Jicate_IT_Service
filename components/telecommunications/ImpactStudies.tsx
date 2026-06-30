"use client";

import { useState } from "react";

import { Container, Section } from "@/components/ui";
import { Reveal } from "@/components/motion/Reveal";
import { cn } from "@/lib/utils";
import { impact } from "@/content/telecommunications";

import { GiantHeading, Eyebrow } from "./parts";

/**
 * Impact Studies — a heading, a row of pill tabs, and the active case study:
 * an eyebrow, lead, and body on the left with a supporting image on the right.
 */
export function ImpactStudies() {
  const [active, setActive] = useState(0);
  const c = impact.tabs[active];

  return (
    <Section className="bg-canvas" aria-label={impact.heading}>
      <Container>
        <Reveal className="mb-2xl">
          <GiantHeading size="band" className="text-ink">
            {impact.heading}
          </GiantHeading>
        </Reveal>

        <div role="tablist" className="mb-3xl flex flex-wrap gap-m">
          {impact.tabs.map((t, i) => (
            <button
              key={t.tab}
              role="tab"
              type="button"
              aria-selected={i === active}
              onClick={() => setActive(i)}
              className={cn(
                "rounded-full border px-l py-s text-body transition-colors duration-[var(--duration-micro)]",
                i === active ? "border-ink bg-ink text-canvas" : "border-ink/30 text-ink hover:border-ink",
              )}
            >
              {t.tab}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 gap-x-2xl gap-y-2xl desktop:grid-cols-2">
          <div className="flex flex-col gap-l">
            <Eyebrow>
              {c.no} — {c.tab.toUpperCase()}
            </Eyebrow>
            <p className="text-[clamp(1.5rem,1rem+1.4vw,1.889rem)] leading-[1.2] text-ink">{c.lead}</p>
            <p className="text-body leading-[1.5] text-ink-light">{c.body}</p>
          </div>
          <div className="aspect-[4/3] w-full overflow-hidden rounded-[2px] bg-ink/[0.06]">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={c.image} alt={c.tab} className="h-full w-full object-cover" loading="lazy" />
          </div>
        </div>
      </Container>
    </Section>
  );
}

export default ImpactStudies;
