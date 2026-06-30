import { Container } from "@/components/ui";
import { Reveal } from "@/components/motion/Reveal";
import { hero } from "@/content/government-financial-management";

import { GiantHeading, SubHeading, InkLink } from "./parts";

/**
 * Hero — a two-column split (oversized title left; a tagline, an arrowed link
 * list, and a "Request a Demo" link right), then a full-width "Play Video"
 * poster band (reference parity).
 */
export function Hero() {
  return (
    <section aria-label={hero.title} className="pt-[80px] desktop:pt-[120px]">
      <Container>
        <Reveal className="grid grid-cols-1 items-start gap-[48px] desktop:grid-cols-[1.1fr_1fr] desktop:gap-[80px]">
          <GiantHeading as="h1" className="max-w-[10ch]">
            {hero.title}
          </GiantHeading>

          <div className="flex flex-col gap-[40px] desktop:pt-[10px]">
            <SubHeading as="p" className="max-w-[16ch]">
              {hero.tagline}
            </SubHeading>
            <ul className="flex flex-col gap-[28px]">
              {hero.links.map((l) => (
                <li key={l}>
                  <span className="flex items-baseline gap-[0.5em] font-display text-[clamp(1.6rem,2.36vw,2.125rem)]/[1.176] text-white">
                    <span aria-hidden className="text-white/55">
                      ↳
                    </span>
                    {l}
                  </span>
                </li>
              ))}
            </ul>
            <div className="mt-[8px]">
              <InkLink href={hero.cta.href}>{hero.cta.label}</InkLink>
            </div>
          </div>
        </Reveal>
      </Container>

      {/* Play-video poster band */}
      <Container className="mt-[64px] desktop:mt-[96px]">
        <Reveal className="relative aspect-[16/5] w-full overflow-hidden rounded-[2px] bg-white/[0.06]">
          {hero.videoPoster ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img src={hero.videoPoster} alt="" className="h-full w-full object-cover" loading="lazy" />
          ) : null}
          <button
            type="button"
            className="absolute inset-0 flex items-center gap-[24px] px-[clamp(20px,4vw,56px)] text-left"
            aria-label={hero.videoLabel}
          >
            <span className="flex h-[48px] w-[48px] items-center justify-center bg-white text-[#1e2124]">▶</span>
            <span className="h-px w-[80px] bg-white" aria-hidden />
            <span className="text-body-lg text-white">{hero.videoLabel}</span>
          </button>
        </Reveal>
      </Container>
    </section>
  );
}

export default Hero;
