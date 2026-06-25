import { Container, Section } from "@/components/ui";
import { hero } from "@/content/anti-money-laundering";

import { GiantHeading, InkLink } from "./parts";

/**
 * Hero — light. Giant title left, subcopy + Get Started link right, with a video
 * placeholder full-width beneath (the reference video thumbnail is not shipped).
 */
export function Hero() {
  return (
    <Section className="bg-canvas pt-2xl" aria-label={hero.title}>
      <Container>
        <div className="grid-12 items-start gap-y-xl">
          <GiantHeading as="h1" size="hero" className="col-span-12 desktop:col-span-7">
            {hero.title}
          </GiantHeading>
          <div className="col-span-12 flex flex-col gap-3xl desktop:col-span-4 desktop:col-start-9">
            <p className="text-[clamp(1.35rem,1rem+1.1vw,1.8rem)] leading-[1.25] text-ink">
              {hero.subcopy}
            </p>
            <InkLink href={hero.cta.href}>{hero.cta.label}</InkLink>
          </div>
        </div>

        <div className="relative mt-2xl flex aspect-video w-full items-center justify-center overflow-hidden rounded-[6px] bg-ink/[0.06]">
          <span className="flex items-center gap-s text-body-lg text-ink">
            <span
              aria-hidden
              className="flex size-[44px] items-center justify-center rounded-full border border-ink/40"
            >
              ▶
            </span>
            {hero.videoLabel}
          </span>
        </div>
      </Container>
    </Section>
  );
}

export default Hero;
