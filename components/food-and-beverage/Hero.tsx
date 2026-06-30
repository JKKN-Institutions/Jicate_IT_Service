import { Container, Section } from "@/components/ui";
import { Reveal } from "@/components/motion/Reveal";
import { hero } from "@/content/food-and-beverage";

import { GiantHeading } from "./parts";

/**
 * Hero — light. A full-width giant title, then a full-width hero image beneath.
 * The clearance offset sits on the inner wrapper (the Section's own padding is
 * fixed and would otherwise tuck the title under the fixed header).
 */
export function Hero() {
  return (
    <Section className="bg-canvas" aria-label={hero.title}>
      <Container>
        <div className="pt-[70px] desktop:pt-[100px]">
          <GiantHeading as="h1" size="hero" className="max-w-[10ch]">
            {hero.title}
          </GiantHeading>
        </div>

        <Reveal className="mt-2xl">
          <div className="aspect-[16/7] w-full overflow-hidden rounded-[2px] bg-ink/[0.06]">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={hero.image} alt={hero.imageAlt} className="h-full w-full object-cover" loading="lazy" />
          </div>
        </Reveal>
      </Container>
    </Section>
  );
}

export default Hero;
