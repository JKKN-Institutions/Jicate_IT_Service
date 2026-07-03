import { Container, Section } from "@/components/ui";
import { Reveal } from "@/components/motion/Reveal";
import { whatWeDo } from "@/content/about";

import { GiantHeading, ArrowLink } from "./parts";

/**
 * What We Do — a 100px section title, then a stack of rows. Each row is a
 * two-column layout: a 50px statement (cols 1-6) on the left, and a 34px lead
 * paragraph + an 18px secondary paragraph with an arrow link (cols 8-12) on
 * the right. Rows are separated by 100px of vertical space. LIGHT.
 */
export function WhatWeDo() {
  return (
    <Section id="what-we-do" className="!pt-0" aria-label={whatWeDo.heading}>
      <Container>
        <GiantHeading as="h2">{whatWeDo.heading}</GiantHeading>

        <div className="mt-[clamp(64px,8vw,100px)] flex flex-col gap-[clamp(64px,8vw,100px)]">
          {whatWeDo.items.map((item) => (
            <Reveal
              key={item.statement}
              className="grid grid-cols-1 items-start gap-[32px] desktop:grid-cols-12 desktop:gap-y-0"
            >
              <GiantHeading size="statement" as="h3" className="desktop:col-span-6">
                {item.statement}
              </GiantHeading>

              <div className="flex flex-col gap-[40px] desktop:col-start-8 desktop:col-span-5">
                <p className="text-[clamp(1.5rem,1rem+1.6vw,1.889rem)] leading-[1.176] text-ink">
                  {item.lead}
                </p>
                <div className="flex flex-col gap-[24px] tablet:flex-row tablet:items-start tablet:justify-between tablet:gap-[40px]">
                  <p className="text-[18px] leading-[1.39] text-ink tablet:max-w-[58%]">
                    {item.secondary}
                  </p>
                  <ArrowLink href={item.link.href} className="shrink-0">
                    {item.link.label}
                  </ArrowLink>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </Section>
  );
}

export default WhatWeDo;
