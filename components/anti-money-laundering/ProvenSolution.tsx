import { Container, Section } from "@/components/ui";
import { Reveal } from "@/components/motion/Reveal";
import { provenSolution as p } from "@/content/anti-money-laundering";

import { GiantHeading } from "./parts";

/**
 * A Proven Solution — giant heading over a divided list of solution qualities,
 * each a 2-column row: title left, body right. Light Section.
 */
export function ProvenSolution() {
  return (
    <Section className="bg-canvas" aria-label={p.heading}>
      <Container>
        <Reveal>
          <GiantHeading className="max-w-[14ch]">{p.heading}</GiantHeading>
        </Reveal>

        <div className="mt-2xl border-t border-ink/15">
          {p.items.map((item) => (
            <Reveal
              key={item.title}
              className="grid-12 gap-y-s border-b border-ink/15 py-l"
            >
              <h3 className="col-span-12 flex items-start gap-s font-display text-headline font-normal leading-[1.18] text-ink desktop:col-span-4">
                <span aria-hidden className="select-none text-ink-light">
                  ↳
                </span>
                <span>{item.title}</span>
              </h3>
              <div className="col-span-12 flex flex-col gap-m desktop:col-span-7 desktop:col-start-6">
                {item.paragraphs.map((para, j) => (
                  <p key={j} className="text-body text-ink-light">
                    {para}
                  </p>
                ))}
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </Section>
  );
}

export default ProvenSolution;
