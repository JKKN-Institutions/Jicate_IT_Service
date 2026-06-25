import { Container, Section } from "@/components/ui";
import { Reveal } from "@/components/motion/Reveal";
import { platformForAml as p } from "@/content/anti-money-laundering";

import { GiantHeading } from "./parts";

/**
 * The Jicate Platform for AML — giant heading over two large editorial
 * paragraphs. Light Section.
 */
export function PlatformForAml() {
  return (
    <Section className="bg-canvas" aria-label={p.heading}>
      <Container>
        <Reveal>
          <GiantHeading className="max-w-[18ch]">{p.heading}</GiantHeading>
        </Reveal>

        <div className="mt-2xl flex flex-col gap-l">
          {p.paragraphs.map((para, i) => (
            <Reveal index={i} key={i}>
              <p className="max-w-[48ch] font-display text-headline font-normal leading-[1.22] tracking-[-0.01em] text-ink">
                {para}
              </p>
            </Reveal>
          ))}
        </div>
      </Container>
    </Section>
  );
}

export default PlatformForAml;
