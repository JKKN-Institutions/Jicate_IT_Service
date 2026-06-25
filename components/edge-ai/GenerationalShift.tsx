import { Container, Section } from "@/components/ui";
import { Reveal } from "@/components/motion/Reveal";
import { generationalShift as s } from "@/content/edge-ai";

import { GiantHeading, SectionIndex } from "./parts";

/**
 * 01 — "A Generational Shift in AI". Numbered divider, giant heading, a wide
 * image, and lead + supporting copy. Light Section.
 */
export function GenerationalShift() {
  return (
    <Section className="bg-canvas" aria-label={s.heading}>
      <Container>
        <Reveal className="flex flex-col gap-l">
          <SectionIndex index={s.index} />
          <GiantHeading className="max-w-[16ch]">{s.heading}</GiantHeading>
        </Reveal>

        <div className="mt-2xl grid-12 items-start gap-y-l">
          <Reveal className="col-span-12 desktop:col-span-6">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={s.image}
              alt={s.alt}
              className="w-full select-none rounded-[6px]"
              draggable={false}
            />
          </Reveal>

          <Reveal
            index={1}
            className="col-span-12 flex flex-col gap-l desktop:col-span-5 desktop:col-start-8"
          >
            <p className="text-[clamp(1.25rem,1rem+0.9vw,1.6rem)] leading-[1.3] text-ink">
              {s.lead}
            </p>
            {s.paragraphs.map((p) => (
              <p key={p} className="text-body-lg text-ink-light">
                {p}
              </p>
            ))}
          </Reveal>
        </div>
      </Container>
    </Section>
  );
}

export default GenerationalShift;
