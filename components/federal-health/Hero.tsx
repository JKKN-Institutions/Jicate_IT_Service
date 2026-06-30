import { Container, Section } from "@/components/ui";
import { Reveal } from "@/components/motion/Reveal";
import { hero } from "@/content/federal-health";

import { GiantHeading, InkLink } from "./parts";

/**
 * Hero — a two-column split (oversized title left, a lead subtitle right), then
 * a full-width image, a "Play Video" poster band, and a right-aligned
 * "Contact Us" link (reference parity).
 */
export function Hero() {
  return (
    <Section className="!pt-[60px] desktop:!pt-[80px]" aria-label="Federal Health">
      <Container>
        <Reveal className="grid grid-cols-1 items-start gap-[40px] desktop:grid-cols-[1fr_1fr] desktop:gap-[80px]">
          <GiantHeading as="h1" className="max-w-[10ch]">
            {hero.title}
          </GiantHeading>
          <p className="max-w-[24ch] font-display text-[clamp(1.6rem,2.36vw,2.125rem)]/[1.176] text-ink">
            {hero.subtitle}
          </p>
        </Reveal>
      </Container>

      {/* Full-width hero image */}
      <Container className="mt-[56px] desktop:mt-[80px]">
        <Reveal className="aspect-[16/6] w-full overflow-hidden rounded-[2px]">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={hero.image} alt={hero.alt} className="h-full w-full object-cover" loading="eager" />
        </Reveal>
      </Container>

      {/* Play-video poster band */}
      <Container className="mt-[24px]">
        <Reveal className="relative aspect-[16/5] w-full overflow-hidden rounded-[2px] bg-ink/[0.04]">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={hero.videoPoster} alt="" className="h-full w-full object-cover" loading="lazy" />
          <button
            type="button"
            className="absolute inset-0 flex items-center gap-[24px] px-[clamp(20px,4vw,56px)] text-left"
            aria-label={hero.videoLabel}
          >
            <span className="flex h-[48px] w-[48px] items-center justify-center bg-ink text-canvas">▶</span>
            <span className="h-px w-[80px] bg-ink" aria-hidden />
            <span className="text-body-lg text-ink">{hero.videoLabel}</span>
          </button>
        </Reveal>
      </Container>

      {/* Contact link */}
      <Container className="mt-[48px]">
        <Reveal className="desktop:ml-auto desktop:w-1/2">
          <InkLink href={hero.contactLink.href}>{hero.contactLink.label}</InkLink>
        </Reveal>
      </Container>
    </Section>
  );
}

export default Hero;
