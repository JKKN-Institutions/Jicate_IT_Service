import { Container, Section } from "@/components/ui";
import { hero } from "@/content/foundry";

import { GiantHeading } from "./parts";

/**
 * Hero — a 100px title on the left and a 34px subhead on the right. Light theme.
 */
export function Hero() {
  return (
    <section aria-label={hero.title} className="bg-canvas">
      <Section>
        <Container>
          <div className="grid grid-cols-1 items-start gap-x-2xl gap-y-l pt-[60px] desktop:grid-cols-12 desktop:pt-[90px]">
            <GiantHeading as="h1" size="anchor" className="text-ink desktop:col-span-6">
              {hero.title}
            </GiantHeading>
            <p className="text-[clamp(1.5rem,1rem+1.4vw,1.889rem)] leading-[1.18] text-ink desktop:col-span-5 desktop:col-start-8">
              {hero.subcopy}
            </p>
          </div>
        </Container>
      </Section>

    </section>
  );
}

export default Hero;
