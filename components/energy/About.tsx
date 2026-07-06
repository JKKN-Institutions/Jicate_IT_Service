import { Container, Section } from "@/components/ui";
import { Reveal } from "@/components/motion/Reveal";
import { about } from "@/content/energy";

import { Eyebrow } from "./parts";

/**
 * About Us — two large statement paragraphs stacked, then the platform/Ontology
 * intro paragraphs right-aligned, and the energy diagram full-width below.
 */
export function About() {
  return (
    <>
      <Section className="bg-canvas" aria-label={about.heading}>
        <Container>
          <Reveal className="mb-2xl">
            <Eyebrow>{about.heading}</Eyebrow>
          </Reveal>
          <div className="flex flex-col gap-xl">
            {about.statements.map((s, i) => (
              <Reveal key={s.slice(0, 24)} index={i}>
                <p className="max-w-[60ch] font-display text-[clamp(1.5rem,1rem+1.9vw,2.5rem)] font-normal leading-[1.12] tracking-[-0.01em] text-ink">
                  {s}
                </p>
              </Reveal>
            ))}
          </div>

          <div className="mt-3xl grid grid-cols-1 gap-l desktop:grid-cols-12 desktop:items-center">
            {/* Ontology diagram — sits in the (previously empty) left column, at a
                smaller size beside the intro text. */}
            <Reveal className="desktop:col-span-6 desktop:col-start-1">
              <div className="w-full overflow-hidden rounded-[2px] bg-ink/[0.04]">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={about.diagram}
                  alt={about.diagramAlt}
                  className="h-full w-full object-contain"
                  loading="lazy"
                />
              </div>
            </Reveal>

            <Reveal className="flex flex-col gap-l desktop:col-span-6 desktop:col-start-7">
              {about.intro.map((p) => (
                <p key={p.slice(0, 24)} className="text-body leading-[1.5] text-ink">
                  {p}
                </p>
              ))}
            </Reveal>
          </div>
        </Container>
      </Section>
    </>
  );
}

export default About;
