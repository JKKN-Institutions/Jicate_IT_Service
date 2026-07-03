import { Container, Section } from "@/components/ui";
import { Reveal } from "@/components/motion/Reveal";
import { whereWeGoing } from "@/content/about";

import { GiantHeading, Eyebrow } from "./parts";

/**
 * Where We're Going — an "01 /" eyebrow + 100px heading on the left (cols 1-6),
 * and a 34px statement + supporting paragraphs on the right (cols 8-12). LIGHT.
 */
export function WhereWeGoing() {
  return (
    <Section id="where-were-going" className="!pt-0" aria-label={whereWeGoing.heading}>
      <Container>
        <Reveal className="grid grid-cols-1 items-start gap-[40px] desktop:grid-cols-12 desktop:gap-y-0">
          <div className="desktop:col-span-6">
            <Eyebrow className="mb-[24px]">{whereWeGoing.eyebrow}</Eyebrow>
            <GiantHeading as="h2">{whereWeGoing.heading}</GiantHeading>
          </div>

          <div className="flex flex-col gap-[24px] desktop:col-start-8 desktop:col-span-5">
            <p className="text-[clamp(1.5rem,1rem+1.6vw,1.889rem)] leading-[1.176] text-ink">
              {whereWeGoing.statement}
            </p>
            <p className="text-[18px] leading-[1.39] text-ink">{whereWeGoing.sublead}</p>
            {whereWeGoing.paragraphs.map((p) => (
              <p key={p} className="text-[16px] leading-[1.43] text-ink">
                {p}
              </p>
            ))}
          </div>
        </Reveal>
      </Container>
    </Section>
  );
}

export default WhereWeGoing;
