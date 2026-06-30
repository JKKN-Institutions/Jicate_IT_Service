import { Container, Section } from "@/components/ui";
import { Reveal } from "@/components/motion/Reveal";
import { impact } from "@/content/supply-chain";

import { GiantHeading, SectionHeading, InkLink } from "./parts";

/**
 * "Real-World Impact" — a giant heading, then per case study: a 50px title and a
 * three-column row (image, eyebrow + bullets, and a pull-quote with attribution
 * and a video link) (reference parity). Placeholder copy.
 */
export function Impact() {
  return (
    <Section aria-label={impact.heading}>
      <Container>
        <div className="border-t border-ink/15 pt-[60px]">
          <GiantHeading>{impact.heading}</GiantHeading>

          <div className="mt-[64px] flex flex-col gap-[96px]">
            {impact.cases.map((c) => (
              <Reveal key={c.title} className="flex flex-col gap-[40px]">
                <SectionHeading className="max-w-[16ch]">{c.title}</SectionHeading>

                <div className="grid grid-cols-1 gap-[40px] desktop:grid-cols-[1fr_0.8fr_1.1fr] desktop:gap-[48px]">
                  {/* Image */}
                  <div className="aspect-[4/3] w-full overflow-hidden rounded-[2px] bg-ink/[0.04]">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={c.image} alt={c.alt} className="h-full w-full object-cover" loading="lazy" />
                  </div>

                  {/* Eyebrow + bullets */}
                  <div className="flex flex-col gap-[16px]">
                    <span className="flex items-baseline gap-[8px] font-mono text-[12px] uppercase tracking-[0.06em] text-ink-light">
                      <span aria-hidden>↳</span>
                      {c.eyebrow}
                    </span>
                    <ul className="flex flex-col gap-[16px] border-t border-ink/20 pt-[16px]">
                      {c.bullets.map((b, i) => (
                        <li key={i} className="flex items-baseline gap-[8px] font-mono text-[12px] uppercase leading-[1.5] tracking-[0.04em] text-ink-light">
                          <span aria-hidden>↳</span>
                          {b}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Quote + attribution + video */}
                  <div className="flex flex-col gap-[28px]">
                    <p className="text-[clamp(1.25rem,1.9vw,1.625rem)]/[1.3] italic text-ink">&ldquo;{c.quote}&rdquo;</p>
                    <div className="grid grid-cols-1 gap-[24px] tablet:grid-cols-[1fr_auto] tablet:items-start">
                      <p className="flex items-baseline gap-[0.4em] text-[clamp(0.9375rem,1.1vw,1rem)] text-ink-light">
                        <span aria-hidden>↳</span>
                        {c.attribution}
                      </p>
                      <div className="border-b border-ink/30 pb-[8px] tablet:w-[200px]">
                        <InkLink href={impact.videoLink.href} className="text-body">
                          {impact.videoLink.label}
                        </InkLink>
                      </div>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}

export default Impact;
