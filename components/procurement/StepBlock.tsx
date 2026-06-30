"use client";

import { Fragment, useState } from "react";

import { cn } from "@/lib/utils";
import { Reveal } from "@/components/motion/Reveal";
import type { Step } from "@/content/procurement";

import { GiantHeading } from "./parts";

/**
 * A single step in the "Operationalizing AI" walkthrough. Left column: a
 * [0.1]–[0.4] progress indicator over a giant step title. Right column: an intro
 * line, a segmented toggle, and a bordered card whose body switches per toggle.
 */
export function StepBlock({ step, nos, current }: { step: Step; nos: string[]; current: number }) {
  const [tab, setTab] = useState(0);
  const t = step.toggles[tab];

  return (
    <Reveal className="grid grid-cols-1 gap-x-2xl gap-y-xl desktop:grid-cols-2">
      {/* Left: indicator + title */}
      <div>
        <div className="mb-2xl flex items-center gap-s font-mono text-[1.111rem] text-ink-light">
          {nos.map((n, i) => (
            <Fragment key={n}>
              <span className={i === current ? "text-ink" : "text-ink/40"}>
                {i === current ? `[${n}]` : n}
              </span>
              {i < nos.length - 1 && (
                <span
                  aria-hidden
                  className={cn("h-px bg-ink/30", i === current ? "flex-1" : "w-[28px]")}
                />
              )}
            </Fragment>
          ))}
        </div>
        <GiantHeading as="h3" size="step" className="max-w-[14ch] text-ink">
          {step.title}
        </GiantHeading>
      </div>

      {/* Right: intro + toggle + card */}
      <div className="flex flex-col gap-xl">
        <p className="text-[clamp(1.25rem,1rem+0.7vw,1.333rem)] leading-[1.4] text-ink">
          {step.intro}
        </p>

        <div className="inline-flex self-start rounded-full bg-ink/[0.06] p-[4px]">
          {step.toggles.map((tg, i) => (
            <button
              key={tg.label}
              type="button"
              aria-pressed={i === tab}
              onClick={() => setTab(i)}
              className={cn(
                "rounded-full px-l py-s font-mono text-caption uppercase tracking-[0.06em] transition-colors duration-[var(--duration-micro)]",
                i === tab ? "bg-canvas text-ink shadow-[0_1px_2px_rgba(0,0,0,0.12)]" : "text-ink-light",
              )}
            >
              {tg.label}
            </button>
          ))}
        </div>

        <div className="rounded-[8px] border border-ink/20 p-2xl">
          <div className="flex flex-col gap-l">
            {t.items.map((it) => (
              <p key={it.strong} className="text-body leading-[1.6] text-ink-light">
                {it.strong}: {it.body}
              </p>
            ))}
          </div>
        </div>
      </div>
    </Reveal>
  );
}

export default StepBlock;
