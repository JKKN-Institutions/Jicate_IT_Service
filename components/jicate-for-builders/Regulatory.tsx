import { Container, Section } from "@/components/ui";
import { Reveal } from "@/components/motion/Reveal";
import { regulatory } from "@/content/jicate-for-builders";

import { GiantHeading } from "./parts";

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
          <div className="aspect-[16/10] w-full max-w-[640px] overflow-hidden rounded-[2px] bg-ink/[0.06]">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={regulatory.image}
              alt={regulatory.logoAlt}
              className="h-full w-full object-cover"
              loading="lazy"
            />
          </div>
        </Reveal>
      </Container>
    </Section>
  );
}

export default Regulatory;
