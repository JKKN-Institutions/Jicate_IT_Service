import { Container, Section } from "@/components/ui";
import { Reveal } from "@/components/motion/Reveal";
import { oneApproach } from "@/content/anti-money-laundering";

import { GiantHeading, ArrowItem } from "./parts";

/**
 * One Approach, Every Challenge — 2-column: giant heading left; the right column
 * holds the intro paragraph, a display-scale "Solves For" heading, and the list
 * of capabilities as leading-arrow rows. Light Section.
 */
export function OneApproach() {
  return (
    <Section className="bg-canvas" aria-label={oneApproach.heading}>
      <Container>
        <div className="grid-12 gap-y-2xl">
          <Reveal className="col-span-12 desktop:col-span-6">
            <GiantHeading className="max-w-[12ch]">{oneApproach.heading}</GiantHeading>
          </Reveal>

          <div className="col-span-12 flex flex-col gap-3xl desktop:col-span-5 desktop:col-start-7">
            <Reveal>
              <p className="text-body-lg leading-[1.5] text-ink">{oneApproach.intro}</p>
            </Reveal>

            <Reveal index={1} className="flex flex-col gap-l">
              <h3 className="font-display text-display font-normal leading-[1.08] tracking-[-0.02em] text-ink">
                {oneApproach.solvesForHeading}
              </h3>
              <div className="flex flex-col border-t border-ink/15">
                {oneApproach.solvesFor.map((item) => (
                  <ArrowItem
                    key={item}
                    className="border-b border-ink/15 py-m text-body-lg"
                  >
                    {item}
                  </ArrowItem>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </Container>
    </Section>
  );
}

export default OneApproach;
