import { Container, Section } from "@/components/ui";
import { Reveal } from "@/components/motion/Reveal";
import { hero } from "@/content/foundry-rules";

import { GiantHeading } from "./parts";

/**
 * Hero — two-column split (reference parity): the oversized title fills the
 * left rail; a short lead paragraph sits top-right.
 */
export function FrHero() {
  return (
    <Section className="!pb-[60px] !pt-[80px] desktop:!pt-[100px]" aria-label="Foundry Rules & Real-Time Alerting">
      <Container>
        <Reveal className="grid items-start gap-l desktop:grid-cols-[1fr_420px] desktop:gap-[60px]">
          <GiantHeading className="max-w-[12ch]">{hero.title}</GiantHeading>
          <p className="max-w-[34ch] text-body-lg leading-[1.4] text-ink desktop:pt-[10px]">{hero.body}</p>
        </Reveal>
      </Container>
    </Section>
  );
}

export default FrHero;
