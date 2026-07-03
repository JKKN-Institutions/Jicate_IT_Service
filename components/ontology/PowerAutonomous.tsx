import { Container, Section } from "@/components/ui";
import { Reveal } from "@/components/motion/Reveal";
import { powerAutonomous as p } from "@/content/ontology";

import { GiantHeading, StackedVisual, ACCENT_STRONG } from "./parts";

/**
 * Power autonomous operations — a lavender band with a centered heading and a
 * full-width composite operations diagram.
 */
export function PowerAutonomous() {
  return (
    <Section className="bg-[#f2eff9]" aria-label="Power autonomous operations">
      <Container>
        <Reveal>
          <GiantHeading className="mx-auto max-w-[20ch] text-center text-ink">
            {p.heading}
            <span style={{ color: ACCENT_STRONG }}>{p.accent}</span>
          </GiantHeading>
        </Reveal>
        <Reveal index={1} className="mt-2xl">
          <StackedVisual layers={p.layers} aspect={p.aspect} alt="Autonomous operations orchestrated by the Ontology" />
        </Reveal>
      </Container>
    </Section>
  );
}

export default PowerAutonomous;
