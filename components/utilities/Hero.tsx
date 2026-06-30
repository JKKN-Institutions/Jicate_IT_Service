import { Container, Section } from "@/components/ui";
import { Reveal } from "@/components/motion/Reveal";
import { hero } from "@/content/utilities";

import { GiantHeading, InkLink } from "./parts";
import { LoopVideo } from "./media";

/**
 * Hero — an oversized title on the left with a tagline + "Schedule a Demo" link
 * on the right, then a full-width hero video band with a "Play Video" pill
 * (reference parity). LIGHT.
 */
export function Hero() {
  return (
    <Section className="!pt-[120px] desktop:!pt-[128px]" aria-label={hero.title}>
      <Container>
        <Reveal className="grid grid-cols-1 items-start gap-[40px] desktop:grid-cols-[1fr_440px] desktop:gap-[60px]">
          <GiantHeading as="h1" className="max-w-[10ch]">
            {hero.title}
          </GiantHeading>

          <div className="flex min-h-[200px] flex-col justify-between gap-[40px] desktop:min-h-[330px]">
            <p className="text-[clamp(1.5rem,1rem+1.6vw,2.125rem)]/[1.176] text-ink">{hero.tagline}</p>
            <InkLink href={hero.cta.href}>{hero.cta.label}</InkLink>
          </div>
        </Reveal>

        <Reveal className="relative mt-[clamp(40px,5vw,64px)] aspect-[1382/755] w-full overflow-hidden rounded-[2px] bg-ink">
          <LoopVideo src={hero.video} />

          <span className="pointer-events-none absolute bottom-[20px] left-[20px] inline-flex items-center gap-xs rounded-[2px] bg-black/55 px-[14px] py-[10px] text-[14px] text-white backdrop-blur-sm">
            <span aria-hidden className="grid size-[18px] place-items-center">▶</span>
            {hero.playLabel}
          </span>
        </Reveal>
      </Container>
    </Section>
  );
}

export default Hero;
