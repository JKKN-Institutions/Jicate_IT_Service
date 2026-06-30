"use client";

import { useState } from "react";

import { Container } from "@/components/ui";
import { cn } from "@/lib/utils";
import { capabilities, type CapabilityTab } from "@/content/construction";

import { FeatureHeading } from "./parts";

/**
 * Capabilities — a wrapping rail of toggle pills (one per construction
 * function), then a three-column panel for the active tab: a labelled box, two
 * intro paragraphs, and the tab's feature list (reference parity).
 */
export function Capabilities() {
  const [active, setActive] = useState(0);
  const tab = capabilities.tabs[active];

  return (
    <section aria-label="Capabilities" className="pt-[100px] desktop:pt-[160px]">
      <Container>
        {/* Toggle pills */}
        <div role="tablist" className="flex flex-wrap gap-[16px]">
          {capabilities.tabs.map((t, i) => (
            <button
              key={t.key}
              role="tab"
              type="button"
              aria-selected={i === active}
              onClick={() => setActive(i)}
              className={cn(
                "rounded-full border px-[28px] py-[14px] text-[clamp(1rem,1.25vw,1.125rem)] transition-colors duration-[var(--duration-micro)]",
                i === active
                  ? "border-white bg-white text-[#1e2124]"
                  : "border-white/30 text-white hover:border-white",
              )}
            >
              {t.label}
            </button>
          ))}
        </div>

        <Panel key={tab.key} tab={tab} />
      </Container>
    </section>
  );
}

function Panel({ tab }: { tab: CapabilityTab }) {
  return (
    <div className="mt-[64px] grid grid-cols-1 gap-x-[48px] gap-y-[48px] desktop:grid-cols-[0.85fr_1fr_1fr]">
      {/* Labelled box */}
      <div>
        <div className="inline-flex items-center gap-[16px] rounded-[4px] border border-white/25 px-[24px] py-[20px]">
          <span aria-hidden className="h-[18px] w-[18px] shrink-0 rounded-full bg-white" />
          <span className="font-display text-[clamp(1.8rem,3vw,2.6rem)]/[1.0] tracking-[-0.02em] text-white">
            {tab.label}
          </span>
        </div>
      </div>

      {/* Intro paragraphs */}
      <div className="flex flex-col gap-[24px]">
        {tab.intro.map((p, i) => (
          <p key={i} className="text-[clamp(1rem,1.25vw,1.125rem)]/[1.389] text-white">
            {p}
          </p>
        ))}
      </div>

      {/* Feature list */}
      <div className="flex flex-col gap-[40px]">
        {tab.features.map((f) => (
          <div key={f.name} className="flex flex-col gap-[12px]">
            <FeatureHeading>{f.name}</FeatureHeading>
            <p className="text-[clamp(1rem,1.25vw,1.125rem)]/[1.389] text-white">{f.body}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Capabilities;
