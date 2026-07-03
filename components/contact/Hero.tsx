import { Container, Section } from "@/components/ui";
import { hero } from "@/content/contact";

import { GiantHeading } from "./parts";

/**
 * Hero — light. Giant "Contact Us" title with the collaboration image
 * full-width beneath.
 */
export function Hero() {
  return (
    <Section className="bg-canvas" aria-label={hero.title}>
      <Container className="pt-[80px] desktop:pt-[100px]">
        <GiantHeading as="h1" size="hero">
          {hero.title}
        </GiantHeading>

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
