import { Container, Section } from "@/components/ui";
import { Reveal } from "@/components/motion/Reveal";
import { verifiedSolution } from "@/content/titanium";

import { SectionHeading } from "./parts";

/**
 * "A Verified Solution" — a closing section heading on the left and a summary
 * paragraph on the right (reference parity, dark theme).
 */
export function VerifiedSolution() {
  return (
    <Section className="!pt-[80px] !pb-[100px]" aria-label="A Verified Solution">
      <Container>
        <Reveal className="grid grid-cols-1 gap-l desktop:grid-cols-[1fr_1fr] desktop:gap-[60px]">
          <SectionHeading className="max-w-[12ch]">{verifiedSolution.heading}</SectionHeading>
          <p className="max-w-[52ch] text-body-lg leading-[1.45] text-white desktop:pt-[6px]">
            {verifiedSolution.body}
          </p>
        </Reveal>
      </Container>
    </Section>
  );
}

export default VerifiedSolution;
