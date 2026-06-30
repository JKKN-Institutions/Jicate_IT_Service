import { Container, Section } from "@/components/ui";
import { Reveal } from "@/components/motion/Reveal";
import { impact } from "@/content/utilities";

import { SectionHeading, Eyebrow, ArrowLink } from "./parts";
import { CaseVideo } from "./media";

/**
 * Our Impact — a top hairline, a 50px heading, then a stack of case studies.
 * Each case is a two-column row: a case-study video on the left, and a stat,
 * theme, pull-quote, attribution, and "Find out more" link on the right
 * (reference parity). LIGHT.
 */
export function Impact() {
  return (
    <Section id="our-impact" aria-label={impact.heading}>
      <Container>
        <div className="border-t border-ink/15 pt-[60px]">
          <SectionHeading>{impact.heading}</SectionHeading>

          <div className="mt-[48px] flex flex-col gap-[clamp(64px,8vw,100px)] desktop:mt-[64px]">
            {impact.cases.map((c) => (
              <Reveal
                key={c.name}
                className="grid grid-cols-1 items-start gap-[32px] desktop:grid-cols-[1fr_1fr] desktop:gap-[60px]"
              >
                <div className="aspect-video w-full overflow-hidden rounded-[2px] bg-ink">
                  <CaseVideo src={c.video} label={`${c.name} case study`} />
                </div>

                <div className="flex flex-col gap-[20px]">
                  <Eyebrow className="flex items-center gap-xs">
                    <span aria-hidden>↳</span> {c.name}
                  </Eyebrow>
                  <h3 className="max-w-[16ch] font-display font-normal uppercase tracking-[-0.02em] text-ink text-[clamp(2rem,3.47vw,3.125rem)]/[1.0]">
                    {c.stat}
                  </h3>
                  <p className="text-[18px]/[1.3] text-ink">{c.theme}</p>
                  <blockquote className="max-w-[46ch] text-[16px]/[1.5] italic text-ink-light">
                    {c.quote}
                  </blockquote>
                  <p className="text-[14px] text-ink-light">{c.attribution}</p>
                  <div className="mt-[4px]">
                    <ArrowLink href={c.link.href}>{c.link.label}</ArrowLink>
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
