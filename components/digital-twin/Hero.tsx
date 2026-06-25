import { Container, Section } from "@/components/ui";
import { hero } from "@/content/digital-twin";

import { GiantHeading, InkLink } from "./parts";

/**
 * Hero — light. Giant title on the left, a lead paragraph and "Get a Demo"
 * underlined CTA on the right, with the looping artwork beneath. Server
 * Component; the `.gif` plays on its own.
 */
export function Hero() {
  return (
    <Section className="bg-canvas pt-2xl" aria-label={hero.title}>
      <Container>
        <div className="grid-12 items-start gap-y-xl">
          <GiantHeading as="h1" className="col-span-12 desktop:col-span-7">
            {hero.title}
          </GiantHeading>

          <div className="col-span-12 flex flex-col gap-2xl desktop:col-span-4 desktop:col-start-9">
            <p className="text-[clamp(1.35rem,1rem+1.1vw,1.8rem)] leading-[1.25] text-ink">
              {hero.subcopy}
            </p>
            <InkLink href={hero.cta.href}>{hero.cta.label}</InkLink>
          </div>
        </div>

        <div className="mt-2xl">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={hero.media}
            alt={hero.mediaAlt}
            className="w-full select-none"
            draggable={false}
          />
        </div>
      </Container>
    </Section>
  );
}

export default Hero;
