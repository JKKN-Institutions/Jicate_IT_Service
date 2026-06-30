import { Container } from "@/components/ui";
import { Reveal } from "@/components/motion/Reveal";
import { impact } from "@/content/government-financial-management";

import { GiantHeading, SubHeading, NumberLabel } from "./parts";

/**
 * "03 / Power More Impact" — a numbered eyebrow and giant heading, then a
 * two-column split: two large statements on the left and a supporting image on
 * the right (reference parity).
 */
export function PowerImpact() {
  return (
    <section aria-label={impact.heading} className="pt-[100px] desktop:pt-[160px]">
      <Container>
        <div className="border-t border-white/15 pt-[40px]">
          <NumberLabel>{impact.number}</NumberLabel>
          <GiantHeading className="mt-[32px]">{impact.heading}</GiantHeading>

          <Reveal className="mt-[64px] grid grid-cols-1 items-start gap-[48px] desktop:grid-cols-[1fr_1fr] desktop:gap-[80px]">
            <div className="flex flex-col gap-[40px]">
              {impact.statements.map((s, i) => (
                <SubHeading as="p" key={i} className="max-w-[20ch]">
                  {s}
                </SubHeading>
              ))}
            </div>
            <div className="aspect-[16/10] w-full overflow-hidden rounded-[2px] bg-white/[0.06]">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={impact.image} alt={impact.alt} className="h-full w-full object-cover" loading="lazy" />
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}

export default PowerImpact;
