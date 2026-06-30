import { Container } from "@/components/ui";
import { Reveal } from "@/components/motion/Reveal";
import { hero } from "@/content/semiconductors";

import { GiantHeading } from "./parts";

/**
 * Hero — a LIGHT full-height band. A giant display title sits top-left; a
 * centred sub-statement is framed by two corner brackets (top-left + bottom-
 * right) with a dark filled "Schedule a Demo" button beneath (reference parity).
 */
export function Hero() {
  return (
    <section
      aria-label={hero.title}
      className="relative bg-canvas pt-[120px] pb-[80px] desktop:min-h-[100svh] desktop:pt-[140px]"
    >
      <Container className="flex h-full flex-col">
        <Reveal>
          <GiantHeading as="h1" size="anchor" className="max-w-[12ch] text-ink">
            {hero.title}
          </GiantHeading>
        </Reveal>

        {/* Centred statement + CTA, loosely enclosed by two corner brackets. */}
        <Reveal className="relative mx-auto mt-[clamp(64px,12vh,150px)] flex w-full max-w-[1000px] flex-col items-center px-[clamp(30px,5vw,70px)] py-[clamp(28px,4vw,56px)]">
          {/* corner brackets — loose frame (top-left + bottom-right) */}
          <span
            aria-hidden
            className="pointer-events-none absolute left-0 top-0 h-[52px] w-[52px] border-l border-t border-ink/45"
          />
          <span
            aria-hidden
            className="pointer-events-none absolute bottom-0 right-0 h-[52px] w-[52px] border-b border-r border-ink/45"
          />

          <GiantHeading as="p" size="statement" className="max-w-[880px] text-center text-ink">
            {hero.statement}
          </GiantHeading>

          <a
            href={hero.cta.href}
            className="group mt-[clamp(28px,3.5vw,44px)] inline-flex items-center gap-xs rounded-none bg-ink px-[12px] py-[7px] text-[18px] text-canvas transition-colors duration-200 hover:bg-ink/85 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
          >
            <span>{hero.cta.label}</span>
            <span aria-hidden className="transition-transform duration-[var(--duration-micro)] group-hover:translate-x-[0.22em]">
              →
            </span>
          </a>
        </Reveal>
      </Container>
    </section>
  );
}

export default Hero;
