import { Container, Section } from "@/components/ui";
import { hero } from "@/content/process-mining";

import { GiantHeading, InkLink } from "./parts";

/**
 * Hero — light. Giant title left, lead + "Get in touch" CTA right, then a video
 * poster placeholder (no thumbnail shipped) beneath.
 */
export function Hero() {
  return (
    <Section className="bg-canvas pt-2xl" aria-label={hero.title}>
      <Container>
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

        <div className="mt-2xl flex aspect-[16/8] items-center justify-center rounded-[6px] bg-near-black text-offwhite">
          <span className="flex items-center gap-s">
            <span
              aria-hidden
              className="flex h-[64px] w-[64px] items-center justify-center rounded-full border border-offwhite/50 text-headline"
            >
              ▶
            </span>
            <span className="font-mono text-caption uppercase tracking-[0.05em] text-offwhite/70">
              {hero.posterLabel} — Play Video
            </span>
          </span>
        </div>
      </Container>
    </Section>
  );
}

export default Hero;
