import { Container, Section } from "@/components/ui";
import { Reveal } from "@/components/motion/Reveal";
import { twinsStages } from "@/content/digital-twin";

import { GiantHeading, CapabilityColumns } from "./parts";

/**
 * "Twins for Every Stage of Digital Transformation." — a giant heading over a
 * three-up capability stack. Light Section.
 */
export function TwinsStages() {
  return (
    <Section className="bg-canvas" aria-label={twinsStages.heading}>
      <Container>
        <Reveal>
          <GiantHeading className="max-w-[18ch]">{twinsStages.heading}</GiantHeading>
        </Reveal>
        <div className="mt-3xl">
          <CapabilityColumns items={twinsStages.items} />
        </div>
      </Container>
    </Section>
  );
}

export default TwinsStages;
