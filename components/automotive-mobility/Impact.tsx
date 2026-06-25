"use client";

import { useState } from "react";

import { Container, Section } from "@/components/ui";
import { LoopingVideo } from "@/components/ai-ml/LoopingVideo";
import { cn } from "@/lib/utils";
import { impact, type ImpactTab } from "@/content/automotive-mobility";

import { SectionHeading, InkLink } from "./parts";

/**
 * "Our Impact" — a section heading, a pill tab rail (one per customer), and the
 * active tab's content: a pull-quote, labelled paragraphs, and the supporting
 * video/image with a link and tags (reference parity). All copy is placeholder.
 */
export function Impact() {
  const [active, setActive] = useState(0);
  const tab = impact.tabs[active];

  return (
    <Section className="!pt-[60px] !pb-[80px]" aria-label="Our Impact">
      <Container>
        <SectionHeading>{impact.heading}</SectionHeading>

        {/* Tab rail */}
        <div role="tablist" className="mt-[40px] flex flex-wrap gap-[12px]">
          {impact.tabs.map((t, i) => (
            <button
              key={t.tab}
              role="tab"
              type="button"
              aria-selected={i === active}
              onClick={() => setActive(i)}
              className={cn(
                "rounded-full border px-[20px] py-[10px] text-body-sm transition-colors duration-[var(--duration-micro)]",
                i === active ? "border-ink bg-ink text-canvas" : "border-ink/25 text-ink hover:border-ink",
              )}
            >
              {t.tab}
            </button>
          ))}
        </div>

        <Panel key={tab.tab} tab={tab} />
      </Container>
    </Section>
  );
}

function Panel({ tab }: { tab: ImpactTab }) {
  return (
    <div className="mt-[48px] grid grid-cols-1 gap-x-[48px] gap-y-[40px] desktop:grid-cols-[1fr_1fr_1fr]">
      {/* Quote */}
      <div className="flex flex-col gap-[16px]">
        <p className="text-[clamp(1.25rem,1.8vw,1.5rem)] leading-[1.35] text-ink">“{tab.quote}”</p>
        <p className="text-body-sm text-ink-light">{tab.attribution}</p>
      </div>

      {/* Labelled paragraphs */}
      <div className="flex flex-col gap-[24px]">
        <LabelledRow label="Partner" body={tab.intro} />
        <LabelledRow label="Challenge" body={tab.challenge} />
        <LabelledRow label="Impact" body={tab.outcome} />
      </div>

      {/* Media + link + tags */}
      <div className="flex flex-col gap-[16px]">
        <div className="aspect-[16/10] w-full overflow-hidden rounded-[2px] bg-band">
          {tab.video ? (
            <LoopingVideo src={tab.video} />
          ) : tab.image ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img src={tab.image} alt={tab.alt} className="h-full w-full object-cover" loading="lazy" />
          ) : null}
        </div>
        {tab.link ? <InkLink href={tab.link.href}>{tab.link.label}</InkLink> : null}
        {tab.tags && tab.tags.length > 0 ? (
          <ul className="flex flex-col gap-[8px]">
            {tab.tags.map((t) => (
              <li key={t} className="flex items-baseline gap-[8px] text-body-sm text-ink">
                <span aria-hidden className="text-ink-light">
                  ↳
                </span>
                {t}
              </li>
            ))}
          </ul>
        ) : null}
      </div>
    </div>
  );
}

function LabelledRow({ label, body }: { label: string; body: string }) {
  return (
    <div className="flex flex-col gap-[6px]">
      <span className="font-mono text-caption uppercase tracking-[0.08em] text-ink-light">{label}</span>
      <p className="text-body leading-[1.5] text-ink">{body}</p>
    </div>
  );
}

export default Impact;
