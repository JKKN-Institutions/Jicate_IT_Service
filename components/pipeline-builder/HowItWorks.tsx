"use client";

import { useState } from "react";

import { Container, Section } from "@/components/ui";
import { Reveal } from "@/components/motion/Reveal";
import { cn } from "@/lib/utils";
import { howItWorks } from "@/content/pipeline-builder";

import { GiantHeading } from "./parts";

/**
 * "How It Works" — a giant heading, a 34px subheading + body, then a
 * vertical-tab walkthrough: a tab rail on the left selects a step; the right
 * column shows that step's eyebrow, text lines, and image (reference parity).
 */
export function HowItWorks() {
  const [active, setActive] = useState(0);
  const step = howItWorks.steps[active];

  return (
    <Section className="!pt-0 !pb-[100px]" aria-label="How It Works">
      <Container>
        <Reveal>
          <GiantHeading>{howItWorks.heading}</GiantHeading>
        </Reveal>

        <Reveal className="mt-[40px] grid grid-cols-1 gap-l desktop:grid-cols-[1fr_440px] desktop:gap-[60px]">
          <h3 className="max-w-[16ch] font-display text-[clamp(1.6667rem,2.6vw,1.8889rem)] font-normal leading-[1.18] tracking-normal text-ink">
            {howItWorks.subheading}
          </h3>
          <p className="max-w-[44ch] text-body-lg leading-[1.4] text-ink desktop:pt-[6px]">{howItWorks.body}</p>
        </Reveal>

        {/* Vertical-tab walkthrough */}
        <div className="mt-[60px] grid grid-cols-1 gap-x-[60px] gap-y-[40px] desktop:grid-cols-[260px_1fr]">
          {/* Tab rail */}
          <div role="tablist" aria-orientation="vertical" className="flex flex-col">
            {howItWorks.steps.map((s, i) => (
              <button
                key={s.tab}
                role="tab"
                type="button"
                aria-selected={i === active}
                onClick={() => setActive(i)}
                className={cn(
                  "border-t border-ink/12 py-[16px] text-left text-body-lg transition-colors duration-[var(--duration-micro)]",
                  i === active ? "text-ink" : "text-ink-light hover:text-ink",
                )}
              >
                {s.tab}
              </button>
            ))}
          </div>

          {/* Active content */}
          <div className="flex flex-col gap-[28px]">
            <div className="flex flex-col gap-[20px]">
              <span className="font-mono text-caption uppercase tracking-[0.06em] text-ink-light">{step.eyebrow}</span>
              {step.lines.map((line, i) => (
                <p key={i} className="max-w-[60ch] text-body-lg leading-[1.4] text-ink">
                  {line}
                </p>
              ))}
            </div>

            <div className="aspect-[16/9] w-full overflow-hidden rounded-[2px] bg-band">
              {step.image ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img src={step.image} alt={step.alt} className="h-full w-full object-contain" loading="lazy" />
              ) : (
                <div
                  aria-hidden
                  className="flex h-full w-full items-center justify-center bg-[radial-gradient(120%_120%_at_30%_25%,#f5f5f5_0%,#e8e8e8_100%)] text-ink/20"
                >
                  <svg viewBox="0 0 24 24" className="h-[40px] w-[40px]" fill="currentColor">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
              )}
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}

export default HowItWorks;
