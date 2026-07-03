import { Container } from "@/components/ui";
import { hero, subNav, systemLabel } from "@/content/gotham";

import { LoopVideo } from "./media";
import { MicroLabel, DARK } from "./parts";

/**
 * Hero — a full-bleed looping video with a dark wash, a page sub-nav row on
 * top, the giant "Gotham" wordmark, an intro line, and decorative corner
 * micro-labels. DARK.
 */
export function Hero() {
  return (
    <section
      id="gotham-hero"
      aria-label={hero.wordmark}
      className="relative min-h-[100svh] overflow-hidden text-white"
      style={{ backgroundColor: DARK }}
    >
      {/* Background video */}
      <div className="absolute inset-0">
        <LoopVideo src={hero.video} className="h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-[#1e2124]" />
      </div>

      {/* Page sub-nav */}
      <div className="relative z-10 pt-[100px]">
        <Container>
          <nav className="hidden flex-wrap items-center gap-x-[36px] gap-y-2 text-[18px] text-white desktop:flex">
            {subNav.map((n) => (
              <a key={n.label} href={n.href} className="transition-opacity hover:opacity-70">
                {n.label}
              </a>
            ))}
          </nav>
        </Container>
      </div>

      {/* Wordmark */}
      <div className="relative z-10 flex min-h-[60svh] flex-col justify-center">
        <Container>
          <h1 className="font-display font-normal leading-[0.9] tracking-[-0.04em] text-[clamp(4rem,17vw,13.5rem)]">
            {hero.wordmark}
          </h1>
        </Container>
      </div>

      {/* Bottom rail: intro + labels */}
      <div className="relative z-10 pb-[48px]">
        <Container>
          <div className="flex flex-col gap-[24px] desktop:flex-row desktop:items-end desktop:justify-between">
            <p className="max-w-[42ch] text-[18px] leading-[1.39] text-white/85">{hero.intro}</p>
            <div className="flex flex-col gap-[6px] text-right">
              <MicroLabel>{hero.scrollHint}</MicroLabel>
              <MicroLabel>{systemLabel}</MicroLabel>
            </div>
          </div>
        </Container>
      </div>
    </section>
  );
}

export default Hero;
