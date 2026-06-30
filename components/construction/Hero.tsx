import { Container } from "@/components/ui";
import { Reveal } from "@/components/motion/Reveal";
import { hero } from "@/content/construction";

import { HeroHeading } from "./parts";

/**
 * Hero — a full-bleed dark construction photo, then an oversized title and a
 * muted subtitle on the dark surface below (reference parity).
 */
export function Hero() {
  return (
    <section aria-label="Jicate for Construction">
      {/* Full-bleed banner image */}
      <div className="h-[clamp(420px,62vh,820px)] w-full overflow-hidden">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={hero.image} alt={hero.alt} className="h-full w-full object-cover" loading="eager" />
      </div>

      <Container className="pt-[40px] desktop:pt-[56px]">
        <Reveal>
          <HeroHeading className="max-w-[14ch]">{hero.title}</HeroHeading>
          <p className="mt-[20px] max-w-[22ch] font-display text-[clamp(1.6rem,2.36vw,2.125rem)]/[1.176] text-white/70">
            {hero.subtitle}
          </p>
        </Reveal>
      </Container>
    </section>
  );
}

export default Hero;
