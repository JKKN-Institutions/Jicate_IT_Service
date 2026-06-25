import { Container, Section } from "@/components/ui";
import { Reveal } from "@/components/motion/Reveal";
import { inAction } from "@/content/anti-money-laundering";

import { GiantHeading } from "./parts";

/**
 * AML in Action — giant heading over three numbered stat cards (number, image,
 * and a stat sentence with emphasized fragments). Light Section.
 */
export function InAction() {
  return (
    <Section className="bg-canvas" aria-label={inAction.heading}>
      <Container>
        <Reveal>
          <GiantHeading className="max-w-[14ch]">{inAction.heading}</GiantHeading>
        </Reveal>

        <div className="mt-3xl grid-12 gap-x-l gap-y-2xl">
          {inAction.cards.map((card, i) => (
            <Reveal
              index={i}
              key={card.number}
              className="col-span-12 flex flex-col gap-m tablet:col-span-4"
            >
              <span className="font-mono text-body-sm text-ink-light">{card.number}</span>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={card.image}
                alt={card.alt}
                className="aspect-square w-full select-none rounded-[6px] object-cover"
                draggable={false}
              />
              <p className="text-headline font-normal leading-[1.3] text-ink-light">
                {card.segments.map((seg, j) =>
                  seg.strong ? (
                    <strong key={j} className="font-semibold text-ink">
                      {seg.text}
                    </strong>
                  ) : (
                    <span key={j}>{seg.text}</span>
                  ),
                )}
              </p>
            </Reveal>
          ))}
        </div>
      </Container>
    </Section>
  );
}

export default InAction;
