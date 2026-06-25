import { Container, Section } from "@/components/ui";
import { Reveal } from "@/components/motion/Reveal";
import { hero } from "@/content/american-tech-fellowship";

import { GiantHeading } from "./parts";

/**
 * Hero — two-column split (reference parity): the oversized title fills the
 * left rail; a short lead sits top-right. A full-width image follows.
 */
export function AtfHero() {
  return (
    <Section className="!pb-[40px] !pt-[80px] desktop:!pt-[100px]" aria-label="The American Tech Fellowship">
      <Container>
        <Reveal className="grid items-start gap-l desktop:grid-cols-[1fr_320px] desktop:gap-[60px]">
          <GiantHeading className="max-w-[12ch]">{hero.title}</GiantHeading>
          <p className="max-w-[28ch] text-body-lg leading-[1.4] text-ink desktop:pt-[10px]">{hero.body}</p>
        </Reveal>

        <Reveal className="mt-[40px] aspect-[16/8] w-full overflow-hidden rounded-[2px] bg-band">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={hero.image} alt={hero.alt} className="h-full w-full object-cover" loading="eager" />
        </Reveal>
      </Container>
    </Section>
  );
}

export default AtfHero;
