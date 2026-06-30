import { Container } from "@/components/ui";
import { Reveal } from "@/components/motion/Reveal";
import { critical } from "@/content/government-financial-management";

import { GiantHeading, SubHeading, NumberLabel } from "./parts";

/**
 * "01 / Critical Missions, Limited Budgets" — a numbered eyebrow, a giant
 * heading, then a two-column split: a supporting image on the left and a large
 * lead paragraph on the right (reference parity).
 */
export function CriticalMissions() {
  return (
    <section aria-label={critical.heading} className="pt-[100px] desktop:pt-[160px]">
      <Container>
        <div className="border-t border-white/15 pt-[40px]">
          <NumberLabel>{critical.number}</NumberLabel>
          <GiantHeading className="mt-[32px] max-w-[14ch]">{critical.heading}</GiantHeading>

          <Reveal className="mt-[64px] grid grid-cols-1 items-center gap-[40px] desktop:grid-cols-[1fr_1fr] desktop:gap-[80px]">
            <div className="aspect-[16/11] w-full overflow-hidden rounded-[2px] bg-white/[0.06]">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={critical.image} alt={critical.alt} className="h-full w-full object-cover" loading="lazy" />
            </div>
            <SubHeading as="p" className="max-w-[20ch]">
              {critical.body}
            </SubHeading>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}

export default CriticalMissions;
