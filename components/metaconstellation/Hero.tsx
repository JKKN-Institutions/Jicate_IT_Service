import { Container, Section } from "@/components/ui";
import { hero } from "@/content/metaconstellation";

import { GiantHeading, InkLink } from "./parts";

/**
 * Hero — dark. Giant title left, lead + "Request a Demo" CTA right, with the
 * looping constellation clip beneath. Server Component; the video autoplays
 * muted/looping.
 */
export function Hero() {
  return (
    <Section tone="dark" className="bg-near-black pt-2xl" aria-label={hero.title}>
      <Container>
        <div className="grid-12 items-start gap-y-xl">
          <GiantHeading as="h1" size="hero" className="col-span-12 desktop:col-span-7">
            {hero.title}
          </GiantHeading>

          <div className="col-span-12 flex flex-col gap-2xl desktop:col-span-4 desktop:col-start-9">
            <p className="text-[clamp(1.35rem,1rem+1.1vw,1.8rem)] leading-[1.25] text-offwhite">
              {hero.subcopy}
            </p>
            <InkLink href={hero.cta.href}>{hero.cta.label}</InkLink>
          </div>
        </div>

        <div className="mt-2xl">
          <video
            className="w-full rounded-[6px] border border-offwhite/10"
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
          >
            <source src={hero.video} type="video/mp4" />
          </video>
        </div>
      </Container>
    </Section>
  );
}

export default Hero;
