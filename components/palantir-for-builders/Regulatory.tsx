import { Container, Section } from "@/components/ui";
import { Reveal } from "@/components/motion/Reveal";
import { regulatory } from "@/content/palantir-for-builders";

import { GiantHeading, MediaPlaceholder } from "./parts";

/**
 * Regulatory band — a giant statement about compliance, with a centered logo
 * placeholder beneath.
 */
export function Regulatory() {
  return (
    <Section id="service-providers" className="bg-canvas scroll-mt-[150px]" aria-label="Regulatory requirements">
      <Container>
        <Reveal>
          <GiantHeading size="section" className="max-w-[26ch]">
            {regulatory.heading}
          </GiantHeading>
        </Reveal>

        <Reveal index={1} className="mt-3xl flex justify-center">
          <MediaPlaceholder label={regulatory.logoAlt} className="aspect-[3/1] max-w-[420px]" />
        </Reveal>
      </Container>
    </Section>
  );
}

export default Regulatory;
