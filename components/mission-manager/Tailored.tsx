import { Container } from "@/components/ui";
import { Reveal } from "@/components/motion/Reveal";
import { tailored } from "@/content/mission-manager";

import { SectionHeading, SubHeading } from "./parts";

/**
 * "Tailored to Your Program" — a top hairline, a 50px heading on the left, and
 * two lead paragraphs on the right (reference parity).
 */
export function Tailored() {
  return (
    <section aria-label={tailored.heading} className="pt-[100px] desktop:pt-[160px]">
      <Container>
        <div className="border-t border-white/15 pt-[60px]">
          <Reveal className="grid grid-cols-1 gap-[40px] desktop:grid-cols-[1fr_1fr] desktop:gap-[80px]">
            <SectionHeading className="max-w-[12ch]">{tailored.heading}</SectionHeading>
            <div className="flex flex-col gap-[40px]">
              {tailored.paragraphs.map((p, i) => (
                <SubHeading key={i} className="max-w-[26ch]">
                  {p}
                </SubHeading>
              ))}
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}

export default Tailored;
