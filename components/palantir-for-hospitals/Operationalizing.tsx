"use client";

import { useState } from "react";

import { Container, Section } from "@/components/ui";
import { cn } from "@/lib/utils";
import { operationalizing } from "@/content/palantir-for-hospitals";

import { GiantHeading, StepHeading } from "./parts";

/**
 * "Operationalizing AI…" — a giant heading, a numbered step indicator
 * ([0.1] — 0.2 — 0.3), and the active step's content: an oversized title on the
 * left and, on the right, a lead paragraph, an Impact/In-Action pill toggle, and
 * a bordered card with the selected view's content (reference parity).
 */
export function Operationalizing() {
  const [active, setActive] = useState(0);
  const [view, setView] = useState(0); // 0 = Impact Generated, 1 = In Action
  const step = operationalizing.steps[active];
  const rows = view === 0 ? step.impact : step.action;

  return (
    <Section aria-label={operationalizing.heading}>
      <Container>
        <div className="border-t border-ink/15 pt-[60px]">
          <GiantHeading className="max-w-[16ch]">{operationalizing.heading}</GiantHeading>

          {/* Step indicator */}
          <div className="mt-[72px] flex items-center gap-[16px]" role="tablist">
            {operationalizing.steps.map((s, i) => (
              <div key={s.id} className="flex items-center gap-[16px]">
                <button
                  role="tab"
                  type="button"
                  aria-selected={i === active}
                  onClick={() => {
                    setActive(i);
                    setView(0);
                  }}
                  className={cn(
                    "font-display text-[clamp(1.1rem,1.5vw,1.375rem)] transition-colors duration-[var(--duration-micro)]",
                    i === active ? "text-ink" : "text-ink-light hover:text-ink",
                  )}
                >
                  {i === active ? `[${s.id}]` : s.id}
                </button>
                {i < operationalizing.steps.length - 1 ? (
                  <span aria-hidden className="h-px w-[clamp(20px,3vw,48px)] bg-ink/25" />
                ) : null}
              </div>
            ))}
          </div>

          {/* Active step */}
          <div
            key={step.id}
            className="mt-[40px] grid grid-cols-1 gap-[40px] desktop:grid-cols-[1fr_1fr] desktop:gap-[80px]"
          >
            <StepHeading className="max-w-[10ch]">{step.title}</StepHeading>

            <div className="flex flex-col gap-[40px]">
              <p className="max-w-[40ch] text-[clamp(1.25rem,1.7vw,1.5rem)]/[1.3] text-ink">{step.body}</p>

              {/* Impact / In-Action toggle */}
              <div className="inline-flex w-fit rounded-full bg-ink/[0.06] p-[4px]">
                {operationalizing.toggles.map((t, i) => (
                  <button
                    key={t}
                    type="button"
                    aria-pressed={i === view}
                    onClick={() => setView(i)}
                    className={cn(
                      "rounded-full px-[20px] py-[10px] font-mono text-caption uppercase tracking-[0.06em] transition-colors duration-[var(--duration-micro)]",
                      i === view ? "bg-ink text-canvas" : "text-ink-light hover:text-ink",
                    )}
                  >
                    {t}
                  </button>
                ))}
              </div>

              {/* Content card */}
              <div className="flex flex-col gap-[28px] rounded-[14px] border border-ink/20 p-[clamp(28px,4vw,48px)]">
                {rows.map((r, i) => (
                  <p key={i} className="text-[clamp(1.125rem,1.4vw,1.25rem)]/[1.389] text-ink-light">
                    {r}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}

export default Operationalizing;
