import { Container, Section } from "@/components/ui";
import { Reveal } from "@/components/motion/Reveal";
import { opsDataScience } from "@/content/digital-twin";

import { GiantHeading, CapabilityColumns } from "./parts";

/**
 * "Operations and data science. United at last." — giant heading over a
 * three-up capability stack. Light Section.
 */
export function OpsDataScience() {
  return (
    <Section className="bg-canvas" aria-label={opsDataScience.heading}>
      <Container>
        <Reveal>
          <GiantHeading className="max-w-[16ch]">{opsDataScience.heading}</GiantHeading>
        </Reveal>
        <div className="mt-3xl">
          <CapabilityColumns items={opsDataScience.items} />
        </div>
      </Container>
    </Section>
  );
}

export default OpsDataScience;
