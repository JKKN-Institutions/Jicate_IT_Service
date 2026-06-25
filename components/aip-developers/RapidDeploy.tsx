import { Container, Section } from "@/components/ui";
import { Reveal } from "@/components/motion/Reveal";
import { rapidDeploy } from "@/content/aip-developers";

import { StepRow } from "./parts";

/**
 * "Rapid Deploying" — three-step scrollytelling sequence (app builder →
 * pipelines → LLM functions). Dark Section.
 */
export function RapidDeploy() {
  return (
    <Section
      id={rapidDeploy.id}
      tone="dark"
      className="bg-near-black"
      aria-label={rapidDeploy.heading}
    >
      <Container>
        <Reveal>
          <div className="flex max-w-[40ch] flex-col gap-s">
            <h2 className="font-display text-display font-normal leading-[1.05] tracking-[-0.02em] text-offwhite">
              {rapidDeploy.heading}
            </h2>
            <p className="text-body-lg text-offwhite/65">{rapidDeploy.subcopy}</p>
          </div>
        </Reveal>

        <div className="mt-2xl flex flex-col">
          {rapidDeploy.steps.map((step) => (
            <StepRow key={step.index} step={step} />
          ))}
        </div>
      </Container>
    </Section>
  );
}

export default RapidDeploy;
