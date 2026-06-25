import { Container, Section } from "@/components/ui";
import { Reveal } from "@/components/motion/Reveal";
import { hero } from "@/content/data-integration";

import { GiantHeading, InkLink } from "./parts";

/**
 * Hero — two-column split (reference parity): the oversized title fills the
 * left rail, while a right column holds the lead paragraph and a "Get a Demo"
 * link aligned to the top.
 */
export function DiHero() {
  return (
    <Section className="!pb-[40px] !pt-[80px] desktop:!pt-[100px]" aria-label="Foundry Data Integration">
      <Container>
        <Reveal className="grid items-start gap-l desktop:grid-cols-[1fr_460px] desktop:gap-[60px]">
          <GiantHeading as="h1">{hero.title}</GiantHeading>

          <div className="flex flex-col gap-l desktop:pt-[10px]">
            <p className="max-w-[42ch] text-body-lg leading-[1.4] text-ink">{hero.body}</p>
            <InkLink href={hero.cta.href}>{hero.cta.label}</InkLink>
          </div>
        </Reveal>
      </Container>
    </Section>
  );
}

export default DiHero;
