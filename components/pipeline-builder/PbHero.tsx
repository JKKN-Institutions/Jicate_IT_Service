import { Container, Section } from "@/components/ui";
import { Reveal } from "@/components/motion/Reveal";
import { hero } from "@/content/pipeline-builder";

import { GiantHeading, InkLink } from "./parts";

/**
 * Hero — two-column split (reference parity): oversized title fills the left
 * rail; a right column holds the lead paragraph, a short note, and the
 * "Get a demo" link.
 */
export function PbHero() {
  return (
    <Section className="!pb-[60px] !pt-[80px] desktop:!pt-[100px]" aria-label="Next-Generation Pipeline Builder">
      <Container>
        <Reveal className="grid items-start gap-l desktop:grid-cols-[1fr_420px] desktop:gap-[60px]">
          <GiantHeading as="h1" className="max-w-[11ch]">
            {hero.title}
          </GiantHeading>

          <div className="flex flex-col gap-[20px] desktop:pt-[10px]">
            <p className="max-w-[36ch] text-body-lg leading-[1.4] text-ink">{hero.body}</p>
            <p className="text-body-lg leading-[1.4] text-ink">{hero.note}</p>
            <InkLink href={hero.cta.href}>{hero.cta.label}</InkLink>
          </div>
        </Reveal>
      </Container>
    </Section>
  );
}

export default PbHero;
