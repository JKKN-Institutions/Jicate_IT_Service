import { Container, Section } from "@/components/ui";
import { Reveal } from "@/components/motion/Reveal";
import { whatSetsApart as w } from "@/content/anti-money-laundering";

import { GiantHeading } from "./parts";

/**
 * What sets us apart — giant heading, a wide image (placeholder; the reference
 * image is not shipped), and four feature blocks (leading arrow + title + body).
 * Light Section.
 */
export function WhatSetsApart() {
  return (
    <Section className="bg-canvas" aria-label={w.heading}>
      <Container>
        <Reveal>
          <GiantHeading className="max-w-[16ch]">{w.heading}</GiantHeading>
        </Reveal>

        <Reveal index={1} className="mt-2xl">
          <div
            role="img"
            aria-label={w.imageAlt}
            className="aspect-[16/7] w-full rounded-[6px] bg-ink/[0.06]"
          />
        </Reveal>

        <div className="mt-3xl grid-12 gap-x-l gap-y-3xl">
          {w.features.map((f, i) => (
            <Reveal
              index={i % 2}
              key={f.title}
              className="col-span-12 flex flex-col gap-m tablet:col-span-6"
            >
              <h3 className="flex items-start gap-s font-display text-headline font-normal leading-[1.18] text-ink">
                <span aria-hidden className="select-none text-ink-light">
                  ↳
                </span>
                <span>{f.title}</span>
              </h3>
              <div className="flex flex-col gap-m pl-[1.6em]">
                {f.paragraphs.map((para, j) => (
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

export default WhatSetsApart;
