"use client";

import { useState } from "react";

import { Container, Section } from "@/components/ui";
import { cn } from "@/lib/utils";
import { focusAlpha } from "@/content/aip-developers";

import { MediaFrame, FeatureCards } from "./parts";

/**
 * "Focus on alpha, not infra" — a tabbed showcase. Five tabs along the top
 * select a panel (title + body + clip). Below sit a four-up sentence-case card
 * row and a two-up mono card row. Client Component for the tab state.
 *
 * Note: only the default "AI-first" panel copy is sourced; selecting another
 * tab keeps the same panel content until per-tab copy is supplied.
 */
export function FocusAlpha() {
  const [active, setActive] = useState(focusAlpha.tabs[0].id);

  return (
    <Section
      id={focusAlpha.id}
      tone="dark"
      className="bg-near-black"
      aria-label={focusAlpha.heading}
    >
      <Container>
        <div className="flex max-w-[44ch] flex-col gap-s">
          <h2 className="font-display text-display font-normal leading-[1.05] tracking-[-0.02em] text-offwhite">
            {focusAlpha.heading}
          </h2>
          <p className="text-body-lg text-offwhite/65">{focusAlpha.subcopy}</p>
        </div>

        {/* Tab strip */}
        <div
          role="tablist"
          aria-label="Capabilities"
          className="mt-2xl flex flex-wrap gap-x-l gap-y-s border-b border-offwhite/10 pb-s"
        >
          {focusAlpha.tabs.map((tab) => (
            <button
              key={tab.id}
              role="tab"
              type="button"
              aria-selected={active === tab.id}
              onClick={() => setActive(tab.id)}
              className={cn(
                "flex items-baseline gap-xs font-mono text-body-sm uppercase tracking-[0.05em] transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-offwhite",
                active === tab.id ? "text-offwhite" : "text-offwhite/40 hover:text-offwhite/70",
              )}
            >
              {tab.label}
              <span className="text-caption text-offwhite/40">{tab.index}</span>
            </button>
          ))}
        </div>

        {/* Active panel */}
        <div className="mt-2xl grid-12 items-center gap-y-l">
          <div className="col-span-12 flex flex-col gap-s desktop:col-span-4">
            <h3 className="font-display text-headline font-normal leading-[1.12] text-offwhite">
              {focusAlpha.panel.title}
            </h3>
            <p className="text-body-sm text-offwhite/60">{focusAlpha.panel.body}</p>
          </div>
          <div className="col-span-12 desktop:col-span-7 desktop:col-start-6">
            {focusAlpha.panel.video ? <MediaFrame src={focusAlpha.panel.video} /> : null}
          </div>
        </div>

        <div className="mt-3xl">
          <FeatureCards cards={focusAlpha.aiCards} variant="title" cols={4} />
        </div>

        <div className="mt-3xl">
          <FeatureCards cards={focusAlpha.cards} variant="mono" cols={2} />
        </div>
      </Container>
    </Section>
  );
}

export default FocusAlpha;
