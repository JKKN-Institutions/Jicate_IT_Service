import { Container, Section } from "@/components/ui";
import { Reveal } from "@/components/motion/Reveal";
import { hero, video } from "@/content/supply-chain";

import { GiantHeading, InkLink } from "./parts";

/**
 * Hero — a two-column split (oversized title left; a tagline and a "Schedule a
 * Demo" link right), then a full-width dark video-poster band with an eyebrow,
 * a statement, and a Play-Video control (reference parity).
 */
export function Hero() {
  return (
    <Section className="!pt-[60px] !pb-0 desktop:!pt-[80px]" aria-label={hero.title}>
      <Container>
        <Reveal className="grid grid-cols-1 items-start gap-[40px] desktop:grid-cols-[1.2fr_1fr] desktop:gap-[80px]">
          <GiantHeading as="h1" className="max-w-[11ch]">
            {hero.title}
          </GiantHeading>
          <div className="flex flex-col gap-[64px] desktop:pt-[6px]">
            <p className="max-w-[22ch] font-display text-[clamp(1.6rem,2.36vw,2.125rem)]/[1.176] text-ink">
              {hero.tagline}
            </p>
            <InkLink href={hero.cta.href}>{hero.cta.label}</InkLink>
          </div>
        </Reveal>
      </Container>

      {/* Video poster band */}
      <Container className="mt-[64px] desktop:mt-[96px]">
        <Reveal className="relative aspect-[16/8] w-full overflow-hidden rounded-[2px]">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={video.image} alt={video.alt} className="h-full w-full object-cover" loading="lazy" />
          <div className="absolute inset-0 flex flex-col justify-between p-[clamp(20px,4vw,56px)] text-white">
            <span className="flex items-center gap-[8px] font-mono text-[12px] uppercase tracking-[0.08em]">
              <span aria-hidden>→</span>
              {video.eyebrow}
            </span>
            <p className="max-w-[14ch] font-display text-[clamp(1.6rem,2.36vw,2.125rem)]/[1.176]">{video.text}</p>
            <button type="button" aria-label={video.videoLabel} className="flex items-center gap-[20px] text-left">
              <span className="flex h-[48px] w-[48px] items-center justify-center bg-white text-[#1e2124]">▶</span>
              <span className="h-px w-[80px] bg-white" aria-hidden />
              <span className="text-body-lg">{video.videoLabel}</span>
            </button>
          </div>
        </Reveal>
      </Container>
    </Section>
  );
}

export default Hero;
