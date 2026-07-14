import { Container, Section } from "@/components/ui";
import { hero } from "@/content/edge-ai";

import { GiantHeading, InkLink } from "./parts";

/**
 * Hero — light. Giant title left, lead + whitepaper CTA right, then a featured
 * image and a "Watch:" lead-in below.
 */
export function Hero() {
  return (
    <Section className="bg-canvas pt-2xl" aria-label={hero.title}>
      <Container className="pt-[96px]">
        <div className="grid-12 items-start gap-y-xl">
          <GiantHeading as="h1" size="hero" className="col-span-12 desktop:col-span-7">
            {hero.title}
          </GiantHeading>

          <div className="col-span-12 flex flex-col gap-2xl desktop:col-span-4 desktop:col-start-9">
            <p className="text-[clamp(1.35rem,1rem+1.1vw,1.8rem)] leading-[1.25] text-ink">
              {hero.subcopy}
            </p>
            <InkLink href={hero.cta.href}>{hero.cta.label}</InkLink>
          </div>
        </div>

        {/* Featured image */}
        <div className="relative mx-auto mt-2xl aspect-[16/8] w-[80%] overflow-hidden rounded-[6px] bg-near-black">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={hero.image}
            alt={hero.alt}
            className="absolute inset-0 h-full w-full object-cover"
            draggable={false}
          />
        </div>

        <p className="mt-2xl max-w-[60ch] font-display text-headline font-normal leading-[1.2] tracking-[-0.01em] text-ink">
          {hero.watch}
        </p>
      </Container>
    </Section>
  );
}

export default Hero;
