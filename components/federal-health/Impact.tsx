import { Container, Section } from "@/components/ui";
import { Reveal } from "@/components/motion/Reveal";
import { impact } from "@/content/federal-health";

import { SectionHeading, SubHeading } from "./parts";

/**
 * "Our Impact" — a 50px heading, then a three-column row: a lead paragraph on
 * the left and two titled impact write-ups on the right (reference parity).
 */
export function Impact() {
  return (
    <Section aria-label={impact.heading}>
      <Container>
        <SectionHeading>{impact.heading}</SectionHeading>

        <Reveal className="mt-[48px] grid grid-cols-1 gap-[40px] desktop:grid-cols-3 desktop:gap-[48px]">
          <p className="text-[clamp(1.125rem,1.4vw,1.25rem)]/[1.3] text-ink">{impact.intro}</p>
          {impact.items.map((item) => (
            <div key={item.title} className="flex flex-col gap-[16px]">
              <SubHeading>{item.title}</SubHeading>
              <p className="text-body leading-[1.5] text-ink-light">{item.body}</p>
            </div>
          ))}
        </Reveal>
      </Container>
    </Section>
  );
}

export default Impact;
