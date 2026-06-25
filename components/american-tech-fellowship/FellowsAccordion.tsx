"use client";

import { useState } from "react";

import { Container, Section } from "@/components/ui";
import { LoopingVideo } from "@/components/ai-ml/LoopingVideo";
import { cn } from "@/lib/utils";
import { fellows, type Fellow } from "@/content/american-tech-fellowship";

import { MidHeading } from "./parts";

/**
 * The fellows accordion — a stacked list of fellow rows. Each row shows the
 * fellow's name and a "+" / "−" toggle; expanding reveals a placeholder video
 * and bio/quote copy (reference parity). All names and copy are placeholders.
 */
export function FellowsAccordion() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <Section className="!pt-[40px] !pb-[80px]" aria-label="Fellows">
      <Container>
        <div className="flex flex-col border-t border-ink/15">
          {fellows.map((fellow, i) => (
            <Row key={fellow.name} fellow={fellow} open={open === i} onToggle={() => setOpen(open === i ? null : i)} />
          ))}
        </div>
      </Container>
    </Section>
  );
}

function Row({ fellow, open, onToggle }: { fellow: Fellow; open: boolean; onToggle: () => void }) {
  return (
    <div className="border-b border-ink/15">
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={open}
        className="flex w-full items-center justify-between gap-l py-[28px] text-left"
      >
        <MidHeading as="h3">{fellow.name}</MidHeading>
        <span aria-hidden className="text-[1.75rem] leading-none text-ink-light">
          {open ? "−" : "+"}
        </span>
      </button>

      <div className={cn("grid overflow-hidden transition-[grid-template-rows] duration-300", open ? "grid-rows-[1fr]" : "grid-rows-[0fr]")}>
        <div className="min-h-0">
          <div className="grid grid-cols-1 gap-x-[60px] gap-y-[28px] pb-[40px] desktop:grid-cols-2">
            <div className="aspect-[16/10] w-full overflow-hidden rounded-[2px] bg-band">
              {fellow.video ? (
                <LoopingVideo src={fellow.video} />
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

            <div className="flex flex-col gap-[16px]">
              <p className="max-w-[52ch] text-body leading-[1.5] text-ink">{fellow.bio}</p>
              <p className="max-w-[52ch] text-body italic leading-[1.5] text-ink-medium">{fellow.quote}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FellowsAccordion;
