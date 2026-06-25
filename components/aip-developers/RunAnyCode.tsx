import { Container, Section } from "@/components/ui";
import { Reveal } from "@/components/motion/Reveal";
import { runAnyCode } from "@/content/aip-developers";

import { StepRow, FeatureCards } from "./parts";

/**
 * "Run any code, in any language, anywhere in AIP" — a three-step scrollytelling
 * sequence (container → Workshop → Ontology SDK) followed by a three-up feature
 * grid. Dark Section.
 */
export function RunAnyCode() {
  return (
    <Section tone="dark" className="bg-near-black" aria-label={runAnyCode.heading}>
      <Container>
        <Reveal>
          <h2 className="max-w-[18ch] font-display text-display font-normal leading-[1.05] tracking-[-0.02em] text-offwhite">
            {runAnyCode.heading}
          </h2>
        </Reveal>

        <div className="mt-2xl flex flex-col">
          {runAnyCode.steps.map((step) => (
            <StepRow key={step.index} step={step} />
          ))}
        </div>

        <div className="mt-3xl">
          <FeatureCards cards={runAnyCode.cards} variant="mono" cols={3} />
        </div>
      </Container>
    </Section>
  );
}

export default RunAnyCode;
