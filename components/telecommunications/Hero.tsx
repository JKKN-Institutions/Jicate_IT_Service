import { Container, Section } from "@/components/ui";
import { hero } from "@/content/telecommunications";

import { GiantHeading, InkLink } from "./parts";

/**
 * Hero — a 100px title with a 34px subcopy on the left and a learn-more link on
 * the right, then a full-width image. Light theme.
 */
export function Hero() {
  return (
    <section aria-label={hero.title} className="bg-canvas">
      <Section>
        <Container>
          <div className="grid grid-cols-1 gap-x-2xl gap-y-l pt-[60px] desktop:grid-cols-12 desktop:pt-[90px]">
            <div className="flex flex-col gap-l desktop:col-span-7">
              <GiantHeading as="h1" size="anchor" className="text-ink">
                {hero.title}
              </GiantHeading>
              <p className="max-w-[30ch] text-[clamp(1.5rem,1rem+1.4vw,1.889rem)] leading-[1.18] text-ink">
                {hero.subcopy}
              </p>
            </div>
            <div className="self-end desktop:col-span-4 desktop:col-start-9">
              <InkLink href="#">{hero.link}</InkLink>
            </div>
          </div>
        </Container>
      </Section>

      <Container>
        <div className="aspect-[16/6] w-full overflow-hidden bg-ink/[0.06]">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={hero.image} alt={hero.imageAlt} className="h-full w-full object-cover" />
        </div>
      </Container>
    </section>
  );
}

export default Hero;
