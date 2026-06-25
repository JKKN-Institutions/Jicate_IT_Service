import { Container, Section } from "@/components/ui";
import { Reveal } from "@/components/motion/Reveal";
import { hero } from "@/content/automotive-mobility";

import { GiantHeading } from "./parts";

/**
 * Hero — two-column split (reference parity): the oversized title fills the
 * left rail; two short lead lines sit top-right.
 */
export function AmHero() {
  return (
    <Section className="!pb-[40px] !pt-[80px] desktop:!pt-[100px]" aria-label="Automotive & Mobility">
      <Container>
        <Reveal className="grid items-start gap-l desktop:grid-cols-[1fr_360px] desktop:gap-[60px]">
          <GiantHeading className="max-w-[11ch]">{hero.title}</GiantHeading>
          <div className="flex flex-col gap-[16px] desktop:pt-[10px]">
            {hero.lines.map((line) => (
              <p key={line} className="max-w-[30ch] text-body-lg leading-[1.4] text-ink">
                {line}
              </p>
            ))}
          </div>
        </Reveal>
      </Container>
    </Section>
  );
}

export default AmHero;
