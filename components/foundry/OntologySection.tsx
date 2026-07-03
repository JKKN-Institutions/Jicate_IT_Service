import { Container, Section } from "@/components/ui";
import { Reveal } from "@/components/motion/Reveal";
import { ontology } from "@/content/foundry";

import { GiantHeading, InkLink } from "./parts";

/**
 * The Jicate Ontology — a giant heading, then a two-column row: the layered
 * ontology card on the left, a 34px statement + body + link on the right.
 */
export function OntologySection() {
  return (
    <Section className="bg-canvas" aria-label={ontology.heading}>
      <Container>
        <Reveal>
          <GiantHeading size="anchor" className="mb-2xl text-ink">
            {ontology.heading}
          </GiantHeading>
        </Reveal>

        <div className="grid grid-cols-1 items-start gap-x-2xl gap-y-2xl desktop:grid-cols-12">
          <Reveal className="desktop:col-span-6">
            <div className="w-full overflow-hidden rounded-[6px]">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={ontology.image} alt={ontology.imageAlt} className="h-auto w-full" />
            </div>
          </Reveal>

          <Reveal index={1} className="flex flex-col gap-l desktop:col-span-5 desktop:col-start-8">
            <p className="text-[clamp(1.5rem,1rem+1.4vw,1.889rem)] leading-[1.18] text-ink">
              {ontology.statement}
            </p>
            <p className="text-body leading-[1.5] text-ink-light">{ontology.body}</p>
            <InkLink href="#" className="mt-s">
              {ontology.link}
            </InkLink>
          </Reveal>
        </div>
      </Container>
    </Section>
  );
}

export default OntologySection;
