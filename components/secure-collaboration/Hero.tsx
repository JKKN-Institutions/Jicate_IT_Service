import { Container, Section } from "@/components/ui";
import { hero } from "@/content/secure-collaboration";

import { GiantHeading } from "./parts";
import { HeroVideo } from "./HeroVideo";

/**
 * Hero — a giant 100px title on the left, a 34px supporting line on the right,
 * then the CSS-built video poster. Dark theme.
 */
export function Hero() {
  return (
    <section aria-label={hero.title} className="bg-[#1e2124]">
      <Section>
        <Container>
          <div className="grid grid-cols-1 gap-x-2xl gap-y-l pt-[70px] desktop:grid-cols-12 desktop:pt-[100px]">
            <GiantHeading as="h1" size="anchor" className="text-offwhite desktop:col-span-7">
              {hero.title}
            </GiantHeading>
            <p className="self-start text-[clamp(1.5rem,1rem+1.4vw,1.889rem)] leading-[1.18] text-offwhite desktop:col-span-4 desktop:col-start-9">
              {hero.right}
            </p>
          </div>
        </Container>
      </Section>

      <Container>
        <HeroVideo />
      </Container>
    </section>
  );
}

export default Hero;
