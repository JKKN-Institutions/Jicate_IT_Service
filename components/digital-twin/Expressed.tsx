import { Container, Section } from "@/components/ui";
import { Reveal } from "@/components/motion/Reveal";
import { expressed } from "@/content/digital-twin";

import { GiantHeading } from "./parts";

/**
 * "Your Operations. Expressed Digitally." — centered intro, a wide artwork, and
 * a closing statement about the Ontology. Light Section.
 */
export function Expressed() {
  return (
    <Section className="bg-canvas" aria-label={expressed.heading}>
      <Container>
        <Reveal className="flex max-w-[34ch] flex-col gap-l">
          <GiantHeading>{expressed.heading}</GiantHeading>
          <p className="text-body-lg text-ink-light">{expressed.subcopy}</p>
        </Reveal>

        <Reveal index={1} className="mt-2xl">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={expressed.image}
            alt={expressed.alt}
            className="w-full select-none"
            draggable={false}
          />
        </Reveal>

        <Reveal index={2} className="mt-2xl">
          <p className="max-w-[60ch] text-body-lg text-ink-light">{expressed.body}</p>
        </Reveal>
      </Container>
    </Section>
  );
}

export default Expressed;
