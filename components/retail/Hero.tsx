import { Container, Section } from "@/components/ui";
import { Reveal } from "@/components/motion/Reveal";
import { hero } from "@/content/retail";

import { GiantHeading } from "./parts";

/**
 * Hero — a two-column split (oversized title left, a lead tagline right), then a
 * full-width image (reference parity).
 */
export function Hero() {
  return (
    <Section className="!pt-[60px] desktop:!pt-[80px]" aria-label={hero.title}>
      <Container>
        <Reveal className="grid grid-cols-1 items-start gap-[40px] desktop:grid-cols-[1.1fr_1fr] desktop:gap-[80px]">
          <GiantHeading as="h1">{hero.title}</GiantHeading>
          <p className="max-w-[24ch] font-display text-[clamp(1.6rem,2.36vw,2.125rem)]/[1.176] text-ink desktop:pt-[6px]">
            {hero.tagline}
          </p>
        </Reveal>
      </Container>

      <Container className="mt-[56px] desktop:mt-[80px]">
        <Reveal className="aspect-[16/6] w-full overflow-hidden rounded-[2px]">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={hero.image} alt={hero.alt} className="h-full w-full object-cover" loading="eager" />
        </Reveal>
      </Container>
    </Section>
  );
}

export default Hero;
