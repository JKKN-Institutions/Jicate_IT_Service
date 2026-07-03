import { Container } from "@/components/ui";
import { Reveal } from "@/components/motion/Reveal";
import { hero, subNav } from "@/content/apollo";

import { GiantHeading } from "./parts";

/**
 * Apollo hero (light). A sticky in-page sub-nav sits under the fixed site
 * header, then a two-column hero: the wordmark, a two-line display heading and
 * a dark "Request a demo" button on the left, the hero image on the right.
 */
export function Hero() {
  return (
    <section id="product" className="bg-canvas pt-[120px]">
      {/* Sticky in-page sub-nav */}
      <div className="sticky top-[88px] z-30 bg-canvas/95 backdrop-blur-sm">
        <Container>
          <nav
            aria-label="Apollo sections"
            className="flex flex-wrap gap-x-l gap-y-xs border-b border-transparent py-s text-body text-ink-light"
          >
            {subNav.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="transition-colors duration-200 hover:text-ink"
              >
                {item.label}
              </a>
            ))}
          </nav>
        </Container>
      </div>

      <Container className="grid items-center gap-l pb-[80px] pt-[64px] desktop:grid-cols-[0.85fr_1.15fr] desktop:gap-2xl desktop:pb-[120px]">
        <Reveal className="flex flex-col gap-l">
          <GiantHeading as="h1" size="hero">
            {hero.title}
          </GiantHeading>
          <p className="whitespace-pre-line font-display text-[clamp(2rem,3.3vw,2.75rem)]/[1.1] font-normal tracking-[-0.02em] text-ink">
            {hero.heading}
          </p>
          <a
            href={hero.cta.href}
            className="mt-[8px] inline-flex h-[56px] w-fit items-center gap-[16px] rounded-[2px] bg-near-black px-[28px] text-body font-normal text-offwhite transition-colors duration-200 hover:bg-ink"
          >
            {hero.cta.label}
            <span aria-hidden>→</span>
          </a>
        </Reveal>

        <Reveal className="w-full">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={hero.image}
            alt={hero.imageAlt}
            className="h-auto w-full object-cover"
          />
        </Reveal>
      </Container>
    </section>
  );
}

export default Hero;
