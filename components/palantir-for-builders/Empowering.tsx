import { Container, Section } from "@/components/ui";
import { Reveal } from "@/components/motion/Reveal";
import { empowering } from "@/content/palantir-for-builders";

import { GiantHeading } from "./parts";

/** Empowering — a full-width giant banner statement. */
export function Empowering() {
  return (
    <Section className="bg-canvas" aria-label="Empowering innovators">
      <Container>
        <Reveal>
          <GiantHeading as="h2" size="banner" className="max-w-[20ch]">
            {empowering.heading}
          </GiantHeading>
        </Reveal>
      </Container>
    </Section>
  );
}

export default Empowering;
