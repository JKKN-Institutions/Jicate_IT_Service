import { Container, Section } from "@/components/ui";
import { Reveal } from "@/components/motion/Reveal";
import { intro } from "@/content/telecommunications";

import { GiantHeading, InkLink } from "./parts";

/**
 * Foundry for Telecommunications — a 50px heading on the left, a supporting
 * paragraph and a demo link on the right. Top divider rule.
 */
export function Intro() {
  return (
    <section className="bg-canvas" aria-label={intro.heading}>
      <Container>
        <div className="border-t border-ink/15" />
      </Container>
      <Section>
        <Container>
          <div className="grid grid-cols-1 gap-x-2xl gap-y-l desktop:grid-cols-12">
            <Reveal className="desktop:col-span-5">
              <GiantHeading size="band" className="text-ink">
                {intro.heading}
              </GiantHeading>
            </Reveal>
            <Reveal index={1} className="flex flex-col gap-l desktop:col-span-5 desktop:col-start-7">
              <p className="text-body leading-[1.5] text-ink">{intro.body}</p>
              <InkLink href="#" className="self-start">
                {intro.link}
              </InkLink>
            </Reveal>
          </div>
        </Container>
      </Section>
    </section>
  );
}

export default Intro;
