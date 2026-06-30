import { Container, Section } from "@/components/ui";
import { Reveal } from "@/components/motion/Reveal";
import { operatingSystem } from "@/content/palantir-for-hospitals";

import { SectionHeading } from "./parts";

/**
 * "An AI-Powered Operating System for Hospitals" — a two-column heading band,
 * then a full-width operating-system diagram (reference parity).
 */
export function OperatingSystem() {
  return (
    <Section aria-label={operatingSystem.headingLeft}>
      <Container>
        <Reveal className="grid grid-cols-1 gap-[40px] desktop:grid-cols-[1fr_1fr] desktop:gap-[80px]">
          <SectionHeading className="max-w-[16ch]">{operatingSystem.headingLeft}</SectionHeading>
          <SectionHeading as="p" className="max-w-[20ch]">
            {operatingSystem.headingRight}
          </SectionHeading>
        </Reveal>
      </Container>

      <Container className="mt-[64px] desktop:mt-[96px]">
        <Reveal className="w-full overflow-hidden rounded-[4px] bg-ink/[0.03]">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={operatingSystem.diagram} alt={operatingSystem.diagramAlt} className="h-auto w-full" loading="lazy" />
        </Reveal>
      </Container>
    </Section>
  );
}

export default OperatingSystem;
