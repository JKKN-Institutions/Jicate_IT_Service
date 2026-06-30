import { Container, Section } from "@/components/ui";
import { hero } from "@/content/readiness";

import { GiantHeading } from "./parts";

/**
 * Hero — a light header: a giant 100px title on the left, a 34px supporting line
 * on the right, then a full-width 16:9 video below.
 */
export function Hero() {
  return (
    <section aria-label={hero.title} className="bg-canvas">
      <Section>
        <Container>
          <div className="grid grid-cols-1 gap-x-2xl gap-y-l desktop:grid-cols-12">
            <GiantHeading as="h1" size="anchor" className="text-ink desktop:col-span-7">
              {hero.title}
            </GiantHeading>
            <p className="self-end text-[clamp(1.5rem,1rem+1.4vw,1.889rem)] leading-[1.18] text-ink desktop:col-span-4 desktop:col-start-9">
              {hero.right}
            </p>
          </div>
        </Container>
      </Section>

      <Container>
        <div className="aspect-[16/9] w-full overflow-hidden bg-near-black">
          {/* eslint-disable-next-line jsx-a11y/media-has-caption */}
          <video
            className="h-full w-full object-cover"
            src={hero.video}
            autoPlay
            muted
            loop
            playsInline
            aria-label={hero.videoAlt}
          />
        </div>
      </Container>
    </section>
  );
}

export default Hero;
