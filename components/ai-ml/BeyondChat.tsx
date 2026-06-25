"use client";

import { useState } from "react";

import { Container } from "@/components/ui";
import { beyondChat } from "@/content/ai-ml";
import { cn } from "@/lib/utils";

import { LoopingVideo } from "./LoopingVideo";

/**
 * "Beyond Chat" product band (dark).
 *
 * Left: a left-aligned display heading with a muted sub-line. Right: a row of
 * numbered tab cards (01/02/03) that swap the full-width framed product clip
 * below. Tabs are real buttons in a `tablist`; the active panel crossfades via
 * opacity only. Placeholder copy.
 */
export function BeyondChat() {
  const [active, setActive] = useState(0);

  return (
    <section className="bg-near-black py-[120px] text-offwhite">
      <Container wide className="flex flex-col gap-l">
        {/* Heading row */}
        <div className="flex flex-col items-start justify-between gap-l desktop:flex-row desktop:items-end">
          <div className="flex flex-col gap-tiny">
            <h2 className="font-display text-[clamp(1.875rem,3vw,2.2222rem)] font-normal leading-[1.1] tracking-[-0.02em] text-offwhite">
              {beyondChat.heading}
            </h2>
            <span className="font-display text-[clamp(1.5rem,2.4vw,2.2222rem)] font-normal leading-[1.1] tracking-[-0.02em] text-offwhite/35">
              {beyondChat.subtext}
            </span>
          </div>

          <div
            role="tablist"
            aria-label="Platform capabilities"
            className="flex flex-wrap gap-tiny"
          >
            {beyondChat.tabs.map((tab, i) => (
              <button
                key={tab.key}
                role="tab"
                type="button"
                aria-selected={i === active}
                onClick={() => setActive(i)}
                className={cn(
                  "flex min-w-[150px] flex-col gap-s rounded-none border px-s py-s text-left transition-colors duration-200",
                  i === active
                    ? "border-offwhite/70 bg-offwhite/[0.06]"
                    : "border-offwhite/20 hover:border-offwhite/50",
                )}
              >
                <span className="font-mono text-caption uppercase tracking-[0.05em] text-offwhite">
                  {tab.label}
                </span>
                <span
                  className={cn(
                    "font-display text-body-lg tabular-nums",
                    i === active ? "text-offwhite/80" : "text-offwhite/35",
                  )}
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Full-width framed product clip. */}
        <div className="relative aspect-[16/9] w-full overflow-hidden rounded-none border border-offwhite/10 bg-black">
          {beyondChat.tabs.map((tab, i) => (
            <LoopingVideo
              key={tab.key}
              src={tab.video}
              className={cn(
                "absolute inset-0 transition-opacity duration-[var(--duration-reveal)] ease-[var(--ease-out-quint)]",
                i === active ? "opacity-100" : "pointer-events-none opacity-0",
              )}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}

export default BeyondChat;
