import { Container, Section } from "@/components/ui";
import { Reveal } from "@/components/motion/Reveal";
import { intro } from "@/content/life-sciences";

import { GiantHeading } from "./parts";

/**
 * Intro — three equal columns: a giant statement heading on the left, then two
 * supporting body paragraphs each in its own column.
 */
export function Intro() {
  return (
    <Section className="bg-canvas" aria-label="Overview">
      <Container>
        <div className="grid grid-cols-1 gap-x-2xl gap-y-2xl tablet:grid-cols-2 desktop:grid-cols-3">
          <Reveal>
            <GiantHeading
              size="section"
              className="text-ink text-[clamp(1.5rem,1rem+1.4vw,1.889rem)] leading-[1.18]"
            >
              {intro.heading}
            </GiantHeading>
          </Reveal>
          {intro.statements.map((s, i) => (
            <Reveal key={s.slice(0, 24)} index={i + 1}>
              <p className="text-body leading-[1.5] text-ink">{s}</p>
            </Reveal>
          ))}
        </div>
      </Container>
    </Section>
  );
}

export default Intro;
