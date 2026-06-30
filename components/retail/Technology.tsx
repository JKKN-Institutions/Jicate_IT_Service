import { Container, Section } from "@/components/ui";
import { Reveal } from "@/components/motion/Reveal";
import { technology } from "@/content/retail";

import { SubHeading, Eyebrow } from "./parts";

/**
 * "Technology built for dynamic and optimal operations" — a top hairline, a 34px
 * heading, then a five-column feature grid (eyebrow + body) (reference parity).
 */
export function Technology() {
  return (
    <Section aria-label={technology.heading}>
      <Container>
        <div className="border-t border-ink/15 pt-[60px]">
          <SubHeading className="max-w-[20ch]">{technology.heading}</SubHeading>

          <Reveal className="mt-[56px] grid grid-cols-1 gap-x-[40px] gap-y-[40px] tablet:grid-cols-2 desktop:grid-cols-5">
            {technology.features.map((f) => (
              <div key={f.eyebrow} className="flex flex-col gap-[16px]">
                <Eyebrow>{f.eyebrow}</Eyebrow>
                <p className="text-[clamp(0.9375rem,1.1vw,1rem)]/[1.43] text-ink">{f.body}</p>
              </div>
            ))}
          </Reveal>
        </div>
      </Container>
    </Section>
  );
}

export default Technology;
