import { Container } from "@/components/ui";
import { hero } from "@/content/financial-services";

import { HeroHeading } from "./parts";

/**
 * Hero — a full-bleed image, then a dark band carrying the oversized title
 * (reference parity).
 */
export function Hero() {
  return (
    <section aria-label={hero.title}>
      {/* Full-bleed image */}
      <div className="h-[clamp(280px,40vh,520px)] w-full overflow-hidden">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={hero.image} alt={hero.alt} className="h-full w-full object-cover" loading="eager" />
      </div>

      {/* Dark title band */}
      <div className="bg-[#1e2124]">
        <Container className="py-[clamp(40px,6vw,72px)]">
          <HeroHeading className="max-w-[12ch]">{hero.title}</HeroHeading>
        </Container>
      </div>
    </section>
  );
}

export default Hero;
