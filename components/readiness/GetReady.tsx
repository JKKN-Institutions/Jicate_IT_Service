import { Container, Section } from "@/components/ui";
import { Reveal } from "@/components/motion/Reveal";
import { getReady } from "@/content/readiness";

import { GiantHeading } from "./parts";

/** Corner bracket marks framing the CTA block. */
const corners = [
  "left-0 top-0 border-l border-t",
  "right-0 top-0 border-r border-t",
  "left-0 bottom-0 border-l border-b",
  "right-0 bottom-0 border-r border-b",
];

/**
 * Get ready... — a centered closing call-to-action, framed by four corner marks,
 * with a heading and a demo-request button.
 */
export function GetReady() {
  return (
    <Section className="bg-canvas" aria-label={getReady.heading}>
      <Container>
        <Reveal className="relative mx-auto flex max-w-[680px] flex-col items-center gap-xl px-2xl py-3xl text-center">
          {corners.map((c) => (
            <span key={c} aria-hidden className={`pointer-events-none absolute size-[28px] border-ink/40 ${c}`} />
          ))}

          <GiantHeading size="band" className="text-ink">
            {getReady.heading}
          </GiantHeading>

          <a
            href="#"
            className="group inline-flex items-center gap-s border-[0.8px] border-ink bg-ink px-l py-s font-mono text-body-sm uppercase tracking-[0.05em] text-canvas transition-colors duration-200 hover:bg-canvas hover:text-ink focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
          >
            {getReady.cta}
            <span aria-hidden className="transition-transform duration-[var(--duration-micro)] group-hover:translate-x-[0.22em] motion-reduce:transform-none">
              →
            </span>
          </a>
        </Reveal>
      </Container>
    </Section>
  );
}

export default GetReady;
