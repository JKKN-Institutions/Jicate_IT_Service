import { Container, Section } from "@/components/ui";
import { Reveal } from "@/components/motion/Reveal";
import { useCases } from "@/content/streaming";

import { GiantHeading } from "./parts";

/**
 * Built for Real-Time Decisions — giant heading over a grid of use-case cards
 * (image on top, title, body). Light Section.
 */
export function UseCases() {
  return (
    <Section className="bg-canvas" aria-label={useCases.heading}>
      <Container>
        <Reveal>
          <GiantHeading className="max-w-[16ch]">{useCases.heading}</GiantHeading>
        </Reveal>

        <div className="mt-3xl grid-12 gap-x-l gap-y-2xl">
          {useCases.items.map((item, i) => (
            <Reveal
              index={i % 3}
              key={item.title}
              className="col-span-12 flex flex-col gap-m tablet:col-span-6 desktop:col-span-4"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={item.image}
                alt={item.alt}
                className="aspect-[3/2] w-full select-none rounded-[6px] object-cover"
                draggable={false}
              />
              <h3 className="font-display text-headline font-normal leading-[1.18] text-ink">
                {item.title}
              </h3>
              <p className="text-body text-ink-light">{item.body}</p>
            </Reveal>
          ))}
        </div>
      </Container>
    </Section>
  );
}

export default UseCases;
