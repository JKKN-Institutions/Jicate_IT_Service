import { Container, Section } from "@/components/ui";
import { Reveal } from "@/components/motion/Reveal";
import { impact } from "@/content/palantir-for-rail";

import { SectionHeading, SubHeading } from "./parts";

/**
 * "Impact" — a top hairline, a 50px heading, then a two-column row of stat
 * blocks (an oversized stat headline over a body paragraph) (reference parity).
 */
export function Impact() {
  return (
    <Section id="impact" aria-label={impact.heading}>
      <Container>
        <div className="border-t border-ink/15 pt-[60px]">
          <SectionHeading>{impact.heading}</SectionHeading>

          <Reveal className="mt-[64px] grid grid-cols-1 gap-[48px] desktop:grid-cols-2 desktop:gap-[80px]">
            {impact.stats.map((s, i) => (
              <div key={i} className="flex flex-col gap-[24px]">
                <SubHeading className="max-w-[18ch]">{s.stat}</SubHeading>
                <p className="max-w-[54ch] text-[clamp(0.9375rem,1.1vw,1rem)]/[1.43] text-ink">{s.body}</p>
              </div>
            ))}
          </Reveal>
        </div>
      </Container>
    </Section>
  );
}

export default Impact;
