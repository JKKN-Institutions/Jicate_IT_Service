import { Container, Section } from "@/components/ui";
import { hero } from "@/content/process-mining";

import { GiantHeading, InkLink } from "./parts";

/**
 * Hero — light. Giant title left, lead + "Get in touch" CTA right, then a
 * featured image beneath.
 */
export function Hero() {
  return (
    <Section className="bg-canvas pt-2xl" aria-label={hero.title}>
      <Container className="pt-[64px]">
        <div className="grid-12 items-start gap-y-xl">
          <GiantHeading as="h1" size="hero" className="col-span-12 max-w-[14ch] desktop:col-span-7">
            {hero.title}
          </GiantHeading>

          <div className="col-span-12 flex flex-col gap-2xl desktop:col-span-4 desktop:col-start-9">
            <p className="text-[clamp(1.35rem,1rem+1.1vw,1.8rem)] leading-[1.25] text-ink">
              {hero.subcopy}
            </p>
            <InkLink href={hero.cta.href}>{hero.cta.label}</InkLink>
          </div>
        </div>

        <div className="mx-auto mt-2xl w-[80%] overflow-hidden rounded-[6px] bg-near-black">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={hero.image}
            alt={hero.alt}
            className="block w-full"
            draggable={false}
          />
        </div>
      </Container>
    </Section>
  );
}

export default Hero;
