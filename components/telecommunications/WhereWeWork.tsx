"use client";

import { useState } from "react";

import { Container, Section } from "@/components/ui";
import { Reveal } from "@/components/motion/Reveal";
import { cn } from "@/lib/utils";
import { whereWeWork as www } from "@/content/telecommunications";

import { GiantHeading, Eyebrow } from "./parts";

/**
 * Where we work — a heading and lead, then a vertical-tab walkthrough: a numbered
 * menu on the left selects the active use case shown on the right (lead, body,
 * subhead, and a bulleted capability list).
 */
export function WhereWeWork() {
  const [active, setActive] = useState(0);
  const t = www.tabs[active];

  return (
    <Section className="bg-canvas" aria-label={www.heading}>
      <Container>
        <div className="mb-3xl grid grid-cols-1 gap-x-2xl gap-y-l desktop:grid-cols-12">
          <Reveal className="desktop:col-span-5">
            <GiantHeading size="band" className="text-ink">
              {www.heading}
            </GiantHeading>
          </Reveal>
          <Reveal index={1} className="desktop:col-span-6 desktop:col-start-7">
            <p className="text-[clamp(1.5rem,1rem+1.4vw,1.889rem)] leading-[1.18] text-ink">
              {www.lead}
            </p>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 gap-x-2xl gap-y-2xl desktop:grid-cols-12">
          {/* Left: tab menu */}
          <div role="tablist" className="flex flex-col desktop:col-span-4">
            {www.tabs.map((tb, i) => (
              <button
                key={tb.tab}
                role="tab"
                type="button"
                aria-selected={i === active}
                onClick={() => setActive(i)}
                className={cn(
                  "flex items-start justify-between gap-m border-b border-ink/15 py-l text-left text-body-lg transition-colors duration-[var(--duration-micro)]",
                  i === active ? "text-ink" : "text-ink-light hover:text-ink",
                )}
              >
                <span className="flex items-start gap-s">
                  {tb.tab}
                  <sup className="font-mono text-caption text-ink-light">{tb.no}</sup>
                </span>
                {i === active && <span aria-hidden className="mt-[0.4em] size-[7px] shrink-0 rounded-full bg-ink" />}
              </button>
            ))}
          </div>

          {/* Right: active content */}
          <div className="flex flex-col gap-l desktop:col-span-7 desktop:col-start-6">
            <Eyebrow>
              {t.no} — {t.tab.toUpperCase()}
            </Eyebrow>
            <p className="text-[clamp(1.25rem,1rem+0.7vw,1.5rem)] leading-[1.3] text-ink">{t.lead}</p>
            <p className="text-body leading-[1.5] text-ink-light">{t.body}</p>
            <p className="mt-s font-semibold text-body text-ink">{t.subhead}</p>
            <p className="text-body leading-[1.5] text-ink-light">{t.subleadline}</p>
            <ul className="flex flex-col gap-m">
              {t.bullets.map((b) => (
                <li key={b} className="flex gap-s text-body leading-[1.5] text-ink-light">
                  <span aria-hidden className="text-ink-light">↳</span>
                  <span>{b}</span>
                </li>
              ))}
            </ul>
            <div className="mt-l aspect-[16/9] w-full overflow-hidden rounded-[2px] border border-ink/10 bg-ink/[0.03]">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={www.diagram} alt={www.diagramAlt} className="h-full w-full object-contain" loading="lazy" />
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}

export default WhereWeWork;
