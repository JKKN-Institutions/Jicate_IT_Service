import { Container, Section } from "@/components/ui";
import { hero } from "@/content/streaming";

import { GiantHeading } from "./parts";

/**
 * Hero — light. Giant title left, lead paragraph right, with the hero image
 * full-width beneath.
 */
export function Hero() {
  return (
    <Section className="bg-canvas pt-2xl" aria-label={hero.title}>
      <Container>
        <div className="grid-12 items-start gap-y-xl">
          <GiantHeading as="h1" size="hero" className="col-span-12 desktop:col-span-7">
            {hero.title}
          </GiantHeading>
          <p className="col-span-12 text-[clamp(1.35rem,1rem+1.1vw,1.8rem)] leading-[1.25] text-ink desktop:col-span-4 desktop:col-start-9">
            {hero.subcopy}
          </p>
        </div>

        <div className="mt-2xl">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={hero.image}
            alt={hero.alt}
            className="w-full select-none rounded-[6px]"
            draggable={false}
          />
        </div>
      </Container>
    </Section>
  );
}

export default Hero;
