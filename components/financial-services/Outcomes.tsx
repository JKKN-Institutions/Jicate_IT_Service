"use client";

import { useState, type ReactNode } from "react";

import { Container, Section } from "@/components/ui";
import { cn } from "@/lib/utils";
import { outcomes, type OutcomeTab } from "@/content/financial-services";

import { GiantHeading, InkLink } from "./parts";

/**
 * "Driving Industry Outcomes" — a giant heading, a wrapping rail of toggle
 * pills (one per case study), and the active case's content: a pull-quote on
 * the left, PARTNER/CHALLENGE/SOLUTION labelled rows in the middle, and a video
 * thumbnail with a link on the right (reference parity). Placeholder copy.
 */
export function Outcomes() {
  const [active, setActive] = useState(0);
  const tab = outcomes.tabs[active];

  return (
    <Section aria-label={outcomes.heading}>
      <Container>
        <div className="border-t border-ink/15 pt-[60px]">
          <GiantHeading>{outcomes.heading}</GiantHeading>

          {/* Toggle pills */}
          <div role="tablist" className="mt-[48px] flex flex-wrap gap-[16px]">
            {outcomes.tabs.map((t, i) => (
              <button
                key={t.tab}
                role="tab"
                type="button"
                aria-selected={i === active}
                onClick={() => setActive(i)}
                className={cn(
                  "rounded-full border px-[24px] py-[12px] text-[clamp(1rem,1.25vw,1.125rem)] transition-colors duration-[var(--duration-micro)]",
                  i === active ? "border-ink bg-ink text-canvas" : "border-ink/25 text-ink hover:border-ink",
                )}
              >
                {t.tab}
              </button>
            ))}
          </div>

          <Panel key={tab.tab} tab={tab} />
        </div>
      </Container>
    </Section>
  );
}

function Panel({ tab }: { tab: OutcomeTab }) {
  return (
    <div className="mt-[64px] grid grid-cols-1 gap-x-[48px] gap-y-[40px] desktop:grid-cols-3">
      {/* Quote */}
      <div className="flex flex-col gap-[20px]">
        <span aria-hidden className="font-display text-[40px] leading-[0.5] text-ink">
          &ldquo;
        </span>
        <p className="text-[clamp(1.5rem,2.36vw,2.125rem)]/[1.176] text-ink">{tab.quote}</p>
        <p className="flex items-baseline gap-[0.4em] text-body text-ink-light">
          <span aria-hidden>↳</span>
          {tab.attribution}
        </p>
      </div>

      {/* Labelled rows */}
      <div className="flex flex-col">
        <LabelledRow label="Partner" body={tab.partner} />
        <LabelledRow label="Challenge" body={tab.challenge} />
        <LabelledRow label="Solution" body={tab.solution} last>
          <ul className="mt-[16px] flex flex-col gap-[12px]">
            {tab.bullets.map((b, i) => (
              <li key={i} className="flex items-baseline gap-[8px] text-[clamp(0.9375rem,1.1vw,1rem)]/[1.43] text-ink">
                <span aria-hidden className="text-ink-light">
                  ↳
                </span>
                {b}
              </li>
            ))}
          </ul>
        </LabelledRow>
      </div>

      {/* Media + link */}
      <div className="flex flex-col gap-[24px]">
        <div className="aspect-[16/10] w-full overflow-hidden rounded-[2px] bg-ink/[0.06]">
          {tab.image ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img src={tab.image} alt={tab.alt} className="h-full w-full object-cover" loading="lazy" />
          ) : null}
        </div>
        <InkLink href={tab.link.href}>{tab.link.label}</InkLink>
      </div>
    </div>
  );
}

function LabelledRow({
  label,
  body,
  children,
  last,
}: {
  label: string;
  body: string;
  children?: ReactNode;
  last?: boolean;
}) {
  return (
    <div className={cn("grid grid-cols-[100px_1fr] gap-[16px] border-t border-ink/20 py-[24px]", last && "border-b")}>
      <span className="font-mono text-caption uppercase tracking-[0.06em] text-ink-light">{label}</span>
      <div className="flex flex-col">
        <p className="text-[clamp(0.9375rem,1.1vw,1rem)]/[1.43] text-ink">{body}</p>
        {children}
      </div>
    </div>
  );
}

export default Outcomes;
