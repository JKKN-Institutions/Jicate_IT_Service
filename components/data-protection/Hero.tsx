import { Container, Section } from "@/components/ui";
import { Reveal } from "@/components/motion/Reveal";
import { hero } from "@/content/data-protection";

import { GiantHeading } from "./parts";

/**
 * Hero — light. Giant title left, subcopy top-right, with a full-width image
 * beneath (the circuit-board reference image, shipped).
 */
export function Hero() {
  return (
    <Section className="bg-canvas" aria-label={hero.title}>
      <Container>
        <div className="grid-12 items-start gap-y-xl pt-[70px] desktop:pt-[100px]">
          <GiantHeading as="h1" size="hero" className="col-span-12 max-w-[14ch] desktop:col-span-7">
            {hero.title}
          </GiantHeading>
          <div className="col-span-12 desktop:col-span-4 desktop:col-start-9">
            <p className="text-[clamp(1.35rem,1rem+1.1vw,1.8rem)] leading-[1.25] text-ink">
              {hero.subcopy}
            </p>
          </div>
        </div>

        <Reveal className="mt-2xl">
          <div className="aspect-[16/7] w-full overflow-hidden rounded-[2px] bg-ink/[0.06]">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={hero.image}
              alt={hero.imageAlt}
              className="h-full w-full object-cover"
              loading="lazy"
            />
          </div>
        </Reveal>
      </Container>
    </Section>
  );
}

export default Hero;
