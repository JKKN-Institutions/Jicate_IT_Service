import { Container, Section } from "@/components/ui";
import { hero } from "@/content/contact";

import { GiantHeading } from "./parts";

/**
 * Hero — light. Giant "Contact Us" title with the collaboration image
 * full-width beneath.
 */
export function Hero() {
  return (
    <Section className="bg-canvas pt-2xl" aria-label={hero.title}>
      <Container>
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
