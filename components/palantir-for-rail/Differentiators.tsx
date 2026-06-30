import { Container, Section } from "@/components/ui";
import { Reveal } from "@/components/motion/Reveal";
import { differentiators } from "@/content/palantir-for-rail";

import { SectionHeading } from "./parts";

/**
 * "Key Differentiators" — a top hairline, a 50px heading, then a list of
 * differentiators, each a bold lead followed by a description (reference
 * parity).
 */
export function Differentiators() {
  return (
    <Section id="key-differentiators" aria-label={differentiators.heading}>
      <Container>
        <div className="border-t border-ink/15 pt-[60px]">
          <SectionHeading>{differentiators.heading}</SectionHeading>

          <Reveal className="mt-[56px] grid grid-cols-1 gap-x-[80px] gap-y-[40px] desktop:grid-cols-2">
            {differentiators.items.map((d) => (
              <p key={d.title} className="max-w-[50ch] text-[clamp(0.9375rem,1.1vw,1rem)]/[1.5] text-ink">
                <span className="font-semibold">{d.title}</span> {d.body}
              </p>
            ))}
          </Reveal>
        </div>
      </Container>
    </Section>
  );
}

export default Differentiators;
