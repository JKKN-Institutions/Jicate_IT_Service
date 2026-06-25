import { Container, Section } from "@/components/ui";
import { Reveal } from "@/components/motion/Reveal";
import { referenceArchitecture as ra } from "@/content/process-mining";

import { GiantHeading } from "./parts";

/**
 * Reference Architecture — giant heading over a wide diagram. Light Section.
 */
export function ReferenceArchitecture() {
  return (
    <Section className="bg-canvas" aria-label={ra.heading}>
      <Container>
        <Reveal>
          <GiantHeading className="max-w-[24ch]">{ra.heading}</GiantHeading>
        </Reveal>
        <Reveal index={1} className="mt-2xl">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={ra.image}
            alt={ra.alt}
            className="w-full select-none rounded-[6px]"
            draggable={false}
          />
        </Reveal>
      </Container>
    </Section>
  );
}

export default ReferenceArchitecture;
