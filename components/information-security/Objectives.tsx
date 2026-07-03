import { Container, Section } from "@/components/ui";
import { Reveal } from "@/components/motion/Reveal";
import { objectives } from "@/content/information-security";

import { Eyebrow } from "./parts";

/**
 * Objectives — the empty-left-third band: three columns (01/ 02/ 03/) placed in
 * the right two-thirds, each a tiny numbered eyebrow above a 34px statement.
 * LIGHT.
 */
export function Objectives() {
  return (
    <Section className="!pt-0" aria-label="Core objectives">
      <Container>
        <Reveal className="grid grid-cols-1 gap-[40px] desktop:grid-cols-12">
          <div className="grid grid-cols-1 gap-[40px] tablet:grid-cols-3 desktop:col-start-5 desktop:col-span-6">
            {objectives.map((o) => (
              <div key={o.num} className="flex flex-col gap-[16px]">
                <Eyebrow>{o.num}</Eyebrow>
                <p className="max-w-[9ch] text-[clamp(1.5rem,1rem+1.6vw,1.889rem)] leading-[1.176] text-ink">
                  {o.text}
                </p>
              </div>
            ))}
          </div>
        </Reveal>
      </Container>
    </Section>
  );
}

export default Objectives;
