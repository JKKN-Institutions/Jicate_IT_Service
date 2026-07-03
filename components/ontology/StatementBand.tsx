import { Container, Section } from "@/components/ui";
import { Reveal } from "@/components/motion/Reveal";
import { statement } from "@/content/ontology";

import { GiantHeading } from "./parts";

/**
 * Statement band — a centered 50px statement, then a large bordered "system"
 * card holding the composite visual.
 */
export function StatementBand() {
  return (
    <Section className="bg-canvas" aria-label={statement.cardTitle}>
      <Container>
        <Reveal>
          <GiantHeading className="mx-auto mb-3xl max-w-[24ch] text-center text-ink">
            {statement.text}
          </GiantHeading>
        </Reveal>

        <Reveal index={1}>
          <div className="relative overflow-hidden rounded-[16px] border border-ink/15 bg-[#fafafa] p-l desktop:p-2xl">
            <p className="font-display text-[clamp(1.5rem,1rem+1.6vw,2.222rem)] leading-[1.1] tracking-[-0.02em] text-ink">
              {statement.cardTitle}
            </p>
            <div className="mt-l w-full overflow-hidden">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={statement.visual} alt={statement.visualAlt} className="h-auto w-full object-contain" />
            </div>
          </div>
        </Reveal>
      </Container>
    </Section>
  );
}

export default StatementBand;
