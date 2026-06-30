import { Container, Section } from "@/components/ui";
import { Reveal } from "@/components/motion/Reveal";
import { hero } from "@/content/palantir-for-builders";

import { GiantHeading, InkLink, MediaPlaceholder } from "./parts";

/**
 * Hero — light. Giant title left; subcopy and a "Build With Us" link top-right;
 * a full-width image placeholder beneath. Clearance offset on the inner wrapper.
 */
export function Hero() {
  return (
    <Section id="overview" className="bg-canvas scroll-mt-[150px]" aria-label={hero.title}>
      <Container>
        <div className="grid-12 items-start gap-y-xl pt-[40px] desktop:pt-[64px]">
          <GiantHeading as="h1" size="hero" className="col-span-12 max-w-[10ch] desktop:col-span-7">
            {hero.title}
          </GiantHeading>
          <div className="col-span-12 flex flex-col gap-3xl desktop:col-span-4 desktop:col-start-9">
            <p className="text-[clamp(1.35rem,1rem+1.1vw,1.8rem)] leading-[1.25] text-ink">
              {hero.subcopy}
            </p>
            <InkLink href={hero.cta.href}>{hero.cta.label}</InkLink>
          </div>
        </div>

        <Reveal className="mt-2xl">
          <MediaPlaceholder label={hero.imageAlt} className="aspect-[16/7]" />
        </Reveal>
      </Container>
    </Section>
  );
}

export default Hero;
