import { Container, Section } from "@/components/ui";
import { Reveal } from "@/components/motion/Reveal";
import { about } from "@/content/retail";

import { SubHeading } from "./parts";

/**
 * "About Us" / "Jicate for Retail" — a top hairline, then a two-column split:
 * each column has a 34px heading over a stack of paragraphs (reference parity).
 */
export function About() {
  return (
    <Section aria-label="About">
      <Container>
        <div className="border-t border-ink/15 pt-[60px]">
          <Reveal className="grid grid-cols-1 gap-[48px] desktop:grid-cols-2 desktop:gap-[80px]">
            {[about.left, about.right].map((col) => (
              <div key={col.heading} className="flex flex-col gap-[24px]">
                <SubHeading as="h2">{col.heading}</SubHeading>
                {col.paragraphs.map((p, i) => (
                  <p key={i} className="max-w-[44ch] text-[clamp(1rem,1.25vw,1.125rem)]/[1.389] text-ink">
                    {p}
                  </p>
                ))}
              </div>
            ))}
          </Reveal>
        </div>
      </Container>
    </Section>
  );
}

export default About;
