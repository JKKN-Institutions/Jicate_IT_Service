"use client";

import { Fragment, useState } from "react";

import { Container } from "@/components/ui";
import { featureRows, type FeatureRow } from "@/content/ai-ml";
import { cn } from "@/lib/utils";

import { LoopingVideo } from "./LoopingVideo";

const INDICES = featureRows.map((r) => r.index);

/**
 * Scrolly feature rows on the light band.
 *
 * Each row: a numbered stepper + oversized display heading in a STICKY left
 * column, and a right column with a lead paragraph, a pill VIDEO/DETAILS toggle,
 * and either the framed product clip (VIDEO) or a bordered panel of sub-items
 * (DETAILS). Placeholder copy only.
 */
export function FeatureRows() {
  return (
    <section className="bg-band py-[120px]">
      <Container className="flex flex-col gap-[142px]">
        {featureRows.map((row, i) => (
          <Row key={row.index} row={row} activeIndex={i} />
        ))}
      </Container>
    </section>
  );
}

function Row({ row, activeIndex }: { row: FeatureRow; activeIndex: number }) {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <div className="grid items-start gap-l desktop:grid-cols-[563fr_703fr] desktop:gap-[40px]">
      {/* Sticky left column: stepper + heading */}
      <div className="flex flex-col gap-l desktop:sticky desktop:top-[106px] desktop:self-start">
        <Stepper activeIndex={activeIndex} />
        <h3 className="font-display text-[clamp(2.25rem,5vw,4rem)] font-normal leading-[1.07] tracking-[-0.03em] text-ink">
          {row.title}
        </h3>
      </div>

      {/* Right column: lead + toggle + media/details */}
      <div className="flex flex-col gap-2xl">
        <div className="flex flex-col gap-l">
          <p className="max-w-[42ch] text-[clamp(1.125rem,1.5vw,1.375rem)] leading-[1.3] text-ink">
            {row.lead}
          </p>

          <div className="inline-flex items-center self-start rounded-full border-[0.8px] border-ink/15 bg-canvas p-tiny">
            <Toggle active={!showDetails} onClick={() => setShowDetails(false)}>
              Video
            </Toggle>
            <Toggle active={showDetails} onClick={() => setShowDetails(true)}>
              Details
            </Toggle>
          </div>
        </div>

        {showDetails ? (
          <div className="flex flex-col gap-l rounded-[16px] border border-ink/15 p-l">
            {row.details.map((d) => (
              <div key={d.title} className="flex flex-col gap-tiny">
                <h4 className="font-display text-body-lg font-normal tracking-[-0.01em] text-ink">
                  {d.title}
                </h4>
                <p className="max-w-[52ch] text-body text-ink-medium">{d.body}</p>
              </div>
            ))}
          </div>
        ) : (
          <div className="relative aspect-[16/10] w-full overflow-hidden rounded-[8px] border border-ink/10 bg-surface-medium shadow-[0_24px_60px_-30px_rgba(30,33,36,0.45)]">
            <LoopingVideo src={row.video} />
          </div>
        )}
      </div>
    </div>
  );
}

/**
 * Horizontal numbered stepper: the active index is bracketed and inked, with a
 * long connector after it; the rest are muted with short dashes.
 * e.g. `[0.1] ——— 0.2 — 0.3 — 0.4`.
 */
function Stepper({ activeIndex }: { activeIndex: number }) {
  return (
    <div className="flex items-center gap-xs font-mono text-caption uppercase tracking-[0.05em]">
      {INDICES.map((value, i) => {
        const isActive = i === activeIndex;
        const isLast = i === INDICES.length - 1;
        return (
          <Fragment key={value}>
            <span className={cn(isActive ? "text-ink" : "text-ink-light")}>
              {isActive ? `[${value}]` : value}
            </span>
            {!isLast ? (
              <span
                aria-hidden
                className={cn(
                  "h-px bg-ink/25",
                  isActive ? "flex-1" : "w-5",
                )}
              />
            ) : null}
          </Fragment>
        );
      })}
    </div>
  );
}

function Toggle({
  active,
  onClick,
  children,
}: {
  active: boolean;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={active}
      className={cn(
        "rounded-full px-s py-tiny font-mono text-caption uppercase tracking-[0.05em] transition-colors duration-200",
        active ? "bg-ink text-canvas" : "text-ink-light hover:text-ink",
      )}
    >
      {children}
    </button>
  );
}

export default FeatureRows;
