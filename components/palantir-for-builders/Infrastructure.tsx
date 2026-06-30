import { Container, Section } from "@/components/ui";
import { Reveal } from "@/components/motion/Reveal";
import { infrastructure } from "@/content/palantir-for-builders";

import { GiantHeading, InfraIcon } from "./parts";

/**
 * AI infrastructure — a giant heading and a 3-column grid of capability cards,
 * each a purple icon over a large title on a light tile.
 */
export function Infrastructure() {
  return (
    <Section id="smbs" className="bg-canvas scroll-mt-[150px]" aria-label={infrastructure.heading}>
      <Container>
        <Reveal className="mb-3xl">
          <GiantHeading size="section" className="max-w-[24ch]">
            {infrastructure.heading}
          </GiantHeading>
        </Reveal>

        <div className="grid grid-cols-1 gap-l tablet:grid-cols-2 desktop:grid-cols-3">
          {infrastructure.cards.map((c, i) => (
            <Reveal key={c.title} index={i % 3} className="flex min-h-[280px] flex-col gap-2xl rounded-[2px] bg-ink/[0.03] p-xl">
              <InfraIcon icon={c.icon} />
              <h3 className="font-display text-[clamp(1.5rem,1rem+1.4vw,2rem)] font-normal leading-[1.12] tracking-[-0.01em] text-ink">
                {c.title}
              </h3>
            </Reveal>
          ))}
        </div>
      </Container>
    </Section>
  );
}

export default Infrastructure;
