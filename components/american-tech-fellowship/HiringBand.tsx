import { Container, Section } from "@/components/ui";
import { Reveal } from "@/components/motion/Reveal";
import { hiringBand } from "@/content/american-tech-fellowship";

import { SectionHeading, InkLink } from "./parts";

/**
 * "Interested in hiring a Fellow?" — a centered call-to-action band with a
 * "Contact us" link (reference parity).
 */
export function HiringBand() {
  return (
    <Section className="!pt-[60px] !pb-[60px]" aria-label="Interested in hiring a Fellow">
      <Container>
        <Reveal className="flex flex-col items-center gap-[20px] text-center">
          <SectionHeading className="max-w-[18ch]">{hiringBand.heading}</SectionHeading>
          <InkLink href={hiringBand.cta.href}>{hiringBand.cta.label}</InkLink>
        </Reveal>
      </Container>
    </Section>
  );
}

export default HiringBand;
