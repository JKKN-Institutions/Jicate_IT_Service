import { Container, Section } from "@/components/ui";
import { Reveal } from "@/components/motion/Reveal";
import { applyBand } from "@/content/american-tech-fellowship";

import { SectionHeading, InkLink } from "./parts";

/**
 * "Ready to Build the Future?" — a centered call-to-action band with an eyebrow
 * line, a section heading, and an "Apply Now" link (reference parity).
 */
export function ApplyBand() {
  return (
    <Section className="!pt-[60px] !pb-[60px]" aria-label="Ready to Build the Future">
      <Container>
        <Reveal className="flex flex-col items-center gap-[20px] text-center">
          <span className="font-mono text-caption uppercase tracking-[0.08em] text-ink-light">
            {applyBand.eyebrow}
          </span>
          <SectionHeading className="max-w-[18ch]">{applyBand.heading}</SectionHeading>
          <InkLink href={applyBand.cta.href}>{applyBand.cta.label}</InkLink>
        </Reveal>
      </Container>
    </Section>
  );
}

export default ApplyBand;
