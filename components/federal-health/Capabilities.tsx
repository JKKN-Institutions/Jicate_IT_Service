"use client";

import { useState } from "react";

import { Container, Section } from "@/components/ui";
import { cn } from "@/lib/utils";
import { capabilities } from "@/content/federal-health";

import { SectionHeading, SubHeading } from "./parts";

/**
 * "Our Capabilities" — a two-column header (50px heading left, a large intro
 * right), then a vertical-tab walkthrough: a numbered tab rail on the left
 * (active marked with a dot) and the active tab's eyebrow, heading, body, and
 * bullet list on the right (reference parity).
 */
export function Capabilities() {
  const [active, setActive] = useState(0);
  const tab = capabilities.tabs[active];

  return (
    <Section id="capabilities" aria-label={capabilities.heading}>
      <Container>
        <div className="border-t border-ink/15 pt-[60px]">
          <div className="grid grid-cols-1 gap-[40px] desktop:grid-cols-[1fr_1fr] desktop:gap-[80px]">
            <SectionHeading>{capabilities.heading}</SectionHeading>
            <SubHeading className="max-w-[20ch]">{capabilities.intro}</SubHeading>
          </div>

          <div className="mt-[72px] grid grid-cols-1 gap-x-[80px] gap-y-[48px] desktop:grid-cols-[1fr_1fr]">
            {/* Tab rail */}
            <div role="tablist" aria-orientation="vertical" className="flex flex-col self-start">
              {capabilities.tabs.map((t, i) => (
                <button
                  key={t.number}
                  role="tab"
                  type="button"
                  aria-selected={i === active}
                  onClick={() => setActive(i)}
                  className={cn(
                    "flex items-center justify-between gap-s border-b border-ink/15 py-[18px] text-left text-[clamp(1.15rem,1rem+0.6vw,1.5rem)] leading-[1.2] transition-colors duration-[var(--duration-micro)]",
                    i === active ? "text-ink" : "text-ink-light hover:text-ink",
                  )}
                >
                  <span>
                    {t.tab} <sup className="text-caption text-ink-light">{t.number}</sup>
                  </span>
                  <span
                    aria-hidden
                    className={cn(
                      "size-[7px] shrink-0 rounded-full bg-ink transition-opacity duration-[var(--duration-micro)]",
                      i === active ? "opacity-100" : "opacity-0",
                    )}
                  />
                </button>
              ))}
            </div>

            {/* Active content */}
            <div key={tab.number} className="flex flex-col gap-[20px]">
              <span className="font-mono text-caption uppercase tracking-[0.06em] text-ink-light">{tab.eyebrow}</span>
              <SubHeading className="max-w-[24ch]">{tab.heading}</SubHeading>
              <p className="max-w-[46ch] text-body leading-[1.5] text-ink-light">{tab.body}</p>
              <ul className="mt-[12px] flex flex-col gap-[16px]">
                {tab.bullets.map((b, i) => (
                  <li key={i} className="flex items-baseline gap-[10px] text-body leading-[1.5] text-ink-light">
                    <span aria-hidden className="text-ink-light">
                      ↳
                    </span>
                    {b}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}

export default Capabilities;
