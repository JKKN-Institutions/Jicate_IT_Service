import { Container } from "@/components/ui";
import { hero } from "@/content/palantir-for-hospitals";

import { HeroHeading } from "./parts";

/**
 * Hero — a full-bleed image, then a dark band carrying the oversized title and
 * a muted subtitle (reference parity).
 */
export function Hero() {
  return (
    <section aria-label={hero.title}>
      {/* Full-bleed image */}
      <div className="h-[clamp(280px,42vh,540px)] w-full overflow-hidden">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={hero.image} alt={hero.alt} className="h-full w-full object-cover" loading="eager" />
      </div>

      {/* Dark title band */}
      <div className="bg-[#1e2124]">
        <Container className="py-[clamp(40px,6vw,72px)]">
          <HeroHeading className="max-w-[13ch]">{hero.title}</HeroHeading>
          <p className="mt-[24px] max-w-[22ch] font-display text-[clamp(1.8rem,3.2vw,2.875rem)]/[1.1] tracking-[-0.02em] text-white/70">
            {hero.subtitle}
          </p>
        </Container>
      </div>
    </section>
  );
}

export default Hero;
