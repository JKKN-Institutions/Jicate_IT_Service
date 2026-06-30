import { Container, Section } from "@/components/ui";
import { Reveal } from "@/components/motion/Reveal";
import { operationalizing as op } from "@/content/procurement";

import { GiantHeading } from "./parts";
import { StepBlock } from "./StepBlock";

/**
 * Operationalizing AI — a giant section heading, then the four-step walkthrough
 * (Risk → Contracts → Category → Payables), each with its own toggle card.
 */
export function Operationalizing() {
  const nos = op.steps.map((s) => s.no);

  return (
    <Section className="bg-canvas" aria-label={op.heading}>
      <Container>
        <Reveal className="mb-3xl">
          <GiantHeading size="anchor" className="text-ink">
            {op.heading}
          </GiantHeading>
        </Reveal>

        <div className="flex flex-col gap-y-3xl">
          {op.steps.map((s, i) => (
            <StepBlock key={s.no} step={s} nos={nos} current={i} />
          ))}
        </div>
      </Container>
    </Section>
  );
}

export default Operationalizing;
