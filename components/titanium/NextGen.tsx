import { Container, Section } from "@/components/ui";
import { Reveal } from "@/components/motion/Reveal";
import { nextGen } from "@/content/titanium";

import { SectionHeading } from "./parts";

/**
 * "Next-Generation Software" — a section heading on the left and an intro
 * paragraph on the right (reference parity, dark theme).
 */
export function NextGen() {
  return (
    <Section className="!pt-[80px] !pb-[80px]" aria-label="Next-Generation Software">
      <Container>
        <Reveal className="grid grid-cols-1 gap-l desktop:grid-cols-[1fr_1fr] desktop:gap-[60px]">
          <SectionHeading className="max-w-[12ch]">{nextGen.heading}</SectionHeading>
          <p className="max-w-[52ch] text-body-lg leading-[1.45] text-white desktop:pt-[6px]">{nextGen.body}</p>
        </Reveal>
      </Container>
    </Section>
  );
}

export default NextGen;
