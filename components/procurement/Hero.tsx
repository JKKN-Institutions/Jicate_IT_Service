import { Container, Section } from "@/components/ui";
import { hero } from "@/content/procurement";

import { GiantHeading } from "./parts";

/**
 * Hero — a full-bleed image, then a dark title band with a giant white title and
 * a muted subcopy beneath.
 */
export function Hero() {
  return (
    <section aria-label={hero.title}>
      <div className="aspect-[3/2] w-full overflow-hidden bg-ink/[0.06]">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={hero.image} alt={hero.imageAlt} className="h-full w-full object-cover" />
      </div>

      <Section className="bg-[#1e2124]">
        <Container>
          <GiantHeading as="h1" size="hero" className="text-offwhite">
            {hero.title}
          </GiantHeading>
          <p className="mt-l max-w-[36ch] text-[clamp(1.5rem,1rem+2vw,2.556rem)] leading-[1.2] text-[#b9b9b9]">
            {hero.subcopy}
          </p>
        </Container>
      </Section>
    </section>
  );
}

export default Hero;
