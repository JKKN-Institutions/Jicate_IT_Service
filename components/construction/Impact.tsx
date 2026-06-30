"use client";

import { useState } from "react";

import { Container } from "@/components/ui";
import { cn } from "@/lib/utils";
import { impact } from "@/content/construction";

import { BigHeading, StepHeading } from "./parts";

/**
 * Impact — an intro heading and subhead, a numbered step indicator
 * ([0.1] — 0.2 — 0.3 — 0.4), and the active step's content: an oversized label
 * on the left and a bordered stat card on the right (reference parity).
 */
export function Impact() {
  const [active, setActive] = useState(0);
  const step = impact.steps[active];

  return (
    <section aria-label={impact.heading} className="pt-[120px] desktop:pt-[180px]">
      <Container>
        <BigHeading className="max-w-[12ch]">{impact.heading}</BigHeading>
        <p className="mt-[24px] max-w-[34ch] font-display text-[clamp(1.6rem,2.36vw,2.125rem)]/[1.176] text-white">
          {impact.subhead}
        </p>

        {/* Step indicator */}
        <div className="mt-[80px] flex items-center gap-[16px]" role="tablist">
          {impact.steps.map((s, i) => (
            <div key={s.id} className="flex items-center gap-[16px]">
              <button
                role="tab"
                type="button"
                aria-selected={i === active}
                onClick={() => setActive(i)}
                className={cn(
                  "font-display text-[clamp(1.1rem,1.5vw,1.375rem)] transition-colors duration-[var(--duration-micro)]",
                  i === active ? "text-white" : "text-white/40 hover:text-white/70",
                )}
              >
                {i === active ? `[${s.id}]` : s.id}
              </button>
              {i < impact.steps.length - 1 ? (
                <span aria-hidden className="h-px w-[clamp(20px,3vw,48px)] bg-white/25" />
              ) : null}
            </div>
          ))}
        </div>

        {/* Active step */}
        <div
          key={step.id}
          className="mt-[40px] grid grid-cols-1 gap-[40px] desktop:grid-cols-[1fr_1fr] desktop:gap-[80px]"
        >
          <StepHeading className="max-w-[10ch]">{step.label}</StepHeading>
          <div className="flex flex-col gap-[28px] rounded-[14px] border border-white/20 p-[clamp(28px,4vw,56px)]">
            {step.stats.map((s, i) => (
              <p key={i} className="text-[clamp(1.25rem,1.67vw,1.5rem)]/[1.389] text-white">
                {s}
              </p>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}

export default Impact;
