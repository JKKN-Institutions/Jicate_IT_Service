import { Container } from "@/components/ui";
import { Reveal } from "@/components/motion/Reveal";
import { ecosystem } from "@/content/mission-manager";

import { SectionHeading, SubHeading } from "./parts";

/**
 * "The Ecosystem" — a top hairline, a 50px heading, then a two-column split:
 * a diagram image on the left and a lead statement on the right (reference
 * parity).
 */
export function Ecosystem() {
  return (
    <section aria-label={ecosystem.heading} className="pt-[100px] desktop:pt-[160px]">
      <Container>
        <div className="border-t border-white/15 pt-[60px]">
          <SectionHeading>{ecosystem.heading}</SectionHeading>

          <Reveal className="mt-[56px] grid grid-cols-1 items-center gap-[40px] desktop:grid-cols-[1fr_1fr] desktop:gap-[80px]">
            <div className="w-full overflow-hidden rounded-[2px]">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={ecosystem.image} alt={ecosystem.imageAlt} className="h-auto w-full" loading="lazy" />
            </div>
            <SubHeading className="max-w-[20ch]">{ecosystem.body}</SubHeading>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}

export default Ecosystem;
