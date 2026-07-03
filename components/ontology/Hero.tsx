import { Container } from "@/components/ui";
import { hero } from "@/content/ontology";

import { GiantHeading, StackedVisual } from "./parts";

/**
 * Hero — a lavender band with the layered ontology-stack visual centered behind
 * a centered title and subhead.
 */
export function Hero() {
  return (
    <section
      id="overview"
      aria-label={hero.title}
      className="relative overflow-hidden bg-[#e9e4f6]"
    >
      {/* Layered stack visual, centered behind the title. */}
      <div className="pointer-events-none absolute inset-x-0 top-1/2 mx-auto flex max-w-[780px] -translate-y-1/2 justify-center px-l opacity-90">
        <StackedVisual layers={hero.layers} aspect="1400 / 900" alt="Layered ontology stack" />
      </div>

      <Container className="relative">
        <div className="flex min-h-[78vh] flex-col items-center justify-center gap-l py-4xl text-center">
          <GiantHeading as="h1" size="anchor" className="text-ink">
            {hero.title}
          </GiantHeading>
          <p className="max-w-[22ch] text-[clamp(1.5rem,1rem+1.4vw,1.889rem)] leading-[1.2] text-ink">
            {hero.subcopy}
          </p>
        </div>
      </Container>
    </section>
  );
}

export default Hero;
