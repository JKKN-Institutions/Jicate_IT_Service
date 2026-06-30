import { Container, Section } from "@/components/ui";
import { Reveal } from "@/components/motion/Reveal";
import { barrier } from "@/content/fedstart";

import { GiantHeading, ArrowItem } from "./parts";

/**
 * Eliminating the Accreditation Barrier — a giant heading, then a 2-column band:
 * a large statement on the left; a supporting statement + ↳ bullets on the right.
 */
export function Barrier() {
  return (
    <Section className="bg-canvas" aria-label={barrier.heading}>
      <Container>
        <Reveal>
          <GiantHeading as="h2" size="anchor" className="max-w-[16ch]">
            {barrier.heading}
          </GiantHeading>
        </Reveal>

        <div className="mt-3xl grid grid-cols-1 gap-x-2xl gap-y-2xl desktop:grid-cols-2">
          <Reveal>
            <p className="max-w-[24ch] font-display text-[clamp(1.5rem,1rem+1.7vw,2.25rem)] font-normal leading-[1.15] tracking-[-0.01em] text-ink">
              {barrier.statement}
            </p>
          </Reveal>
          <Reveal index={1} className="flex flex-col gap-l">
            <p className="text-body-lg leading-[1.4] text-ink">{barrier.supporting}</p>
            <div className="flex flex-col gap-m">
              {barrier.bullets.map((b) => (
                <ArrowItem key={b.slice(0, 24)}>{b}</ArrowItem>
              ))}
            </div>
          </Reveal>
        </div>
      </Container>
    </Section>
  );
}

export default Barrier;
