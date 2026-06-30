import { Container } from "@/components/ui";
import { Reveal } from "@/components/motion/Reveal";
import { LoopingVideo } from "@/components/ai-ml/LoopingVideo";
import { hero } from "@/content/intelligence";

import { GiantHeading } from "./parts";

/**
 * Hero — a two-column split (oversized title left, a lead tagline right), then a
 * full-width looping video (reference parity).
 */
export function Hero() {
  return (
    <section aria-label={hero.title} className="pt-[80px] desktop:pt-[120px]">
      <Container>
        <Reveal className="grid grid-cols-1 items-start gap-[40px] desktop:grid-cols-[1.1fr_1fr] desktop:gap-[80px]">
          <GiantHeading className="max-w-[12ch]">{hero.title}</GiantHeading>
          <p className="max-w-[26ch] font-display text-[clamp(1.6rem,2.36vw,2.125rem)]/[1.176] text-white desktop:pt-[6px]">
            {hero.tagline}
          </p>
        </Reveal>
      </Container>

      <Container className="mt-[56px] desktop:mt-[80px]">
        <Reveal className="aspect-[16/6] w-full overflow-hidden rounded-[2px]">
          <LoopingVideo src={hero.video} label={hero.alt} />
        </Reveal>
      </Container>
    </section>
  );
}

export default Hero;
