"use client";

import { useState } from "react";

import { Container, Section } from "@/components/ui";
import { cn } from "@/lib/utils";
import { inAction, type CaseTab } from "@/content/retail";

import { SectionHeading, InkLink } from "./parts";

/**
 * "The Platform in Action" — a 50px heading, a wrapping rail of case-study pills,
 * and the active case's content: PARTNER/CHALLENGE/SOLUTION labelled rows on the
 * left and a supporting image with a "View Full Case Study" link on the right
 * (reference parity). Placeholder copy.
 */
export function InAction() {
  const [active, setActive] = useState(0);
  const tab = inAction.tabs[active];

  return (
    <Section aria-label={inAction.heading}>
      <Container>
        <div className="border-t border-ink/15 pt-[60px]">
          <SectionHeading>{inAction.heading}</SectionHeading>

          {/* Pills */}
          <div role="tablist" className="mt-[48px] flex flex-wrap gap-[16px]">
            {inAction.tabs.map((t, i) => (
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

function Panel({ tab }: { tab: CaseTab }) {
  return (
    <div className="mt-[64px] grid grid-cols-1 gap-x-[80px] gap-y-[40px] desktop:grid-cols-[1fr_1fr]">
      {/* Labelled rows */}
      <div className="flex flex-col">
        <Row label="Partner" body={tab.partner} />
        <Row label="Challenge" body={tab.challenge} />
        <Row label="Solution" body={tab.solution} last />
      </div>

      {/* Media + link */}
      <div className="flex flex-col gap-[24px]">
        <div className="aspect-[16/10] w-full overflow-hidden rounded-[2px] bg-ink/[0.04]">
          {tab.image ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img src={tab.image} alt={tab.alt} className="h-full w-full object-cover" loading="lazy" />
          ) : null}
        </div>
        <InkLink href={inAction.caseLink.href}>{inAction.caseLink.label}</InkLink>
      </div>
    </div>
  );
}

function Row({ label, body, last }: { label: string; body: string; last?: boolean }) {
  return (
    <div className={cn("grid grid-cols-[100px_1fr] gap-[16px] border-t border-ink/20 py-[24px]", last && "border-b")}>
      <span className="font-mono text-caption uppercase tracking-[0.06em] text-ink-light">{label}</span>
      <p className="text-[clamp(0.9375rem,1.1vw,1rem)]/[1.43] text-ink">{body}</p>
    </div>
  );
}

export default InAction;
