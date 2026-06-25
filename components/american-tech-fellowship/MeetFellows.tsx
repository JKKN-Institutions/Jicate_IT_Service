import { Container, Section } from "@/components/ui";
import { Reveal } from "@/components/motion/Reveal";
import { meetFellows } from "@/content/american-tech-fellowship";

import { SectionHeading, MidHeading } from "./parts";

/**
 * "Meet the Fellows" intro — a big section heading, then a 2-column block:
 * the cohort intro + list on the left, the "what unites them" and capstone copy
 * on the right (reference parity). All copy is placeholder.
 */
export function MeetFellows() {
  return (
    <Section className="!pt-[80px] !pb-[60px]" aria-label="Meet the Fellows">
      <Container>
        <Reveal>
          <SectionHeading className="max-w-[16ch]">{meetFellows.bigHeading}</SectionHeading>
        </Reveal>

        <Reveal className="mt-[60px]">
          <MidHeading>{meetFellows.heading}</MidHeading>
        </Reveal>

        <div className="mt-[28px] grid grid-cols-1 gap-x-[60px] gap-y-[32px] desktop:grid-cols-2">
          <Reveal className="flex flex-col gap-[16px]">
            <p className="max-w-[52ch] text-body leading-[1.5] text-ink">{meetFellows.intro}</p>
            <ul className="flex flex-col gap-[10px]">
              {meetFellows.cohort.map((c) => (
                <li key={c} className="flex items-baseline gap-[10px] text-body text-ink">
                  <span aria-hidden className="text-ink-light">
                    ↳
                  </span>
                  {c}
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal index={1} className="flex flex-col gap-[16px]">
            <p className="text-body text-ink">
              <span className="font-semibold">{meetFellows.unitesLabel}</span> {meetFellows.unites}
            </p>
            <p className="text-body text-ink">
              <span className="font-semibold">{meetFellows.capstoneLabel}</span> {meetFellows.capstone}
            </p>
          </Reveal>
        </div>
      </Container>
    </Section>
  );
}

export default MeetFellows;
