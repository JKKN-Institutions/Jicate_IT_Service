"use client";

import { useState } from "react";

import { Container } from "@/components/ui";
import { cn } from "@/lib/utils";
import { benefits } from "@/content/mission-manager";

import { SectionHeading } from "./parts";

/**
 * "The Benefits" — a 50px heading, then a vertical-tab walkthrough: a numbered
 * tab rail on the left (active marked with a dot) and the active tab's eyebrow,
 * heading, and arrowed bullet list on the right (reference parity).
 */
export function Benefits() {
  const [active, setActive] = useState(0);
  const tab = benefits.tabs[active];

  return (
    <section aria-label={benefits.heading} className="pt-[100px] desktop:pt-[160px]">
      <Container>
        <div className="border-t border-white/15 pt-[60px]">
          <SectionHeading>{benefits.heading}</SectionHeading>

          <div className="mt-[64px] grid grid-cols-1 gap-x-[80px] gap-y-[48px] desktop:grid-cols-[1fr_1fr]">
            {/* Tab rail */}
            <div role="tablist" aria-orientation="vertical" className="flex flex-col self-start">
              {benefits.tabs.map((t, i) => (
                <button
                  key={t.number}
                  role="tab"
                  type="button"
                  aria-selected={i === active}
                  onClick={() => setActive(i)}
                  className={cn(
                    "flex items-center justify-between gap-s border-b border-white/15 py-[18px] text-left text-[clamp(1.15rem,1rem+0.6vw,1.5rem)] leading-[1.2] transition-colors duration-[var(--duration-micro)]",
                    i === active ? "text-white" : "text-white/45 hover:text-white",
                  )}
                >
                  <span>
                    {t.tab} <sup className="text-caption text-white/45">{t.number}</sup>
                  </span>
                  <span
                    aria-hidden
                    className={cn(
                      "size-[7px] shrink-0 rounded-full bg-white transition-opacity duration-[var(--duration-micro)]",
                      i === active ? "opacity-100" : "opacity-0",
                    )}
                  />
                </button>
              ))}
            </div>

            {/* Active content */}
            <div key={tab.number} className="flex flex-col">
              <span className="font-mono text-caption uppercase tracking-[0.06em] text-white/45">{tab.eyebrow}</span>
              <p className="mt-[16px] max-w-[26ch] text-[clamp(1.125rem,1.4vw,1.25rem)]/[1.3] text-white">
                {tab.heading}
              </p>
              <ul className="mt-[40px] flex flex-col gap-[32px]">
                {tab.bullets.map((b, i) => (
                  <li key={i} className="flex items-baseline gap-[10px] text-[clamp(0.9375rem,1.1vw,1rem)]/[1.43] text-white/75">
                    <span aria-hidden className="text-white/45">
                      ↳
                    </span>
                    <span>
                      <span className="font-semibold text-white">{b.lead}:</span> {b.body}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default Benefits;
