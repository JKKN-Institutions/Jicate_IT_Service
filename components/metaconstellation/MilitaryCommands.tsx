import { Container, Section } from "@/components/ui";
import { Reveal } from "@/components/motion/Reveal";
import { militaryCommands as s } from "@/content/metaconstellation";

import { GiantHeading, SectionIndex, InkLink } from "./parts";

/**
 * 06 — "Powering Insights Across Military Commands". Numbered divider, giant
 * heading, then a 2-column row: the image on the left and a display-scale
 * caption + outbound link on the right. Dark Section.
 */
export function MilitaryCommands() {
  return (
    <Section tone="dark" className="bg-near-black" aria-label={s.heading}>
      <Container>
        <Reveal className="flex flex-col gap-l">
          <SectionIndex index={s.index} />
          <GiantHeading className="max-w-[16ch]">{s.heading}</GiantHeading>
        </Reveal>

        <div className="mt-2xl grid-12 items-start gap-y-xl">
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
            className="col-span-12 flex flex-col gap-xl desktop:col-span-5 desktop:col-start-8"
          >
            <p className="font-display text-display font-normal leading-[1.12] tracking-[-0.02em] text-offwhite">
              {s.caption}
            </p>
            <InkLink href={s.link.href}>{s.link.label}</InkLink>
          </Reveal>
        </div>
      </Container>
    </Section>
  );
}

export default MilitaryCommands;
