import { Container, Section } from "@/components/ui";
import { hero } from "@/content/offerings-page";

import { GiantHeading } from "./parts";

/**
 * Hero — a 100px title on the left, a 34px intro on the right. Dark theme.
 */
export function Hero() {
  return (
    <Section aria-label={hero.title}>
      <Container>
        <div className="grid grid-cols-1 items-start gap-x-2xl gap-y-l py-2xl desktop:grid-cols-12">
          <GiantHeading as="h1" className="text-offwhite desktop:col-span-6">
            {hero.title}
          </GiantHeading>
          <p className="text-[clamp(1.5rem,1rem+1.4vw,1.889rem)] leading-[1.18] text-offwhite desktop:col-span-5 desktop:col-start-8">
            {hero.intro}
          </p>
        </div>
      </Container>
    </Section>
  );
}

export default Hero;
