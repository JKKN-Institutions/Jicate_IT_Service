import { Container, Section } from "@/components/ui";
import { Reveal } from "@/components/motion/Reveal";
import type { NumberedSection as NumberedSectionData } from "@/content/metaconstellation";

import { GiantHeading, SectionIndex, InkLink } from "./parts";

/**
 * Reusable numbered section (02 / 03 / 04 / 05). Index + a giant full-width
 * heading, then a three-column row: the lead paragraph (left) and the two
 * blocks (middle/right) with display-scale titles. Section 03 additionally
 * renders an Edge AI link and a full-width image. Dark Section.
 */
export function NumberedSection({ data }: { data: NumberedSectionData }) {
  return (
    <Section tone="dark" className="bg-near-black" aria-label={data.heading}>
      <Container>
        <Reveal className="flex flex-col gap-l">
          <SectionIndex index={data.index} />
          <GiantHeading className="max-w-[16ch]">{data.heading}</GiantHeading>
        </Reveal>

        <div className="mt-2xl grid-12 gap-x-l gap-y-2xl">
          <Reveal className="col-span-12 tablet:col-span-6 desktop:col-span-4">
            <p className="text-body-lg text-offwhite/80">{data.lead}</p>
          </Reveal>

          {data.blocks.map((block, i) => (
            <Reveal
              index={i + 1}
              key={block.title}
              className="col-span-12 flex flex-col gap-m tablet:col-span-6 desktop:col-span-4"
            >
              <h3 className="font-display text-display font-normal leading-[1.12] tracking-[-0.02em] text-offwhite">
                {block.title}
              </h3>
              <p className="text-body text-offwhite/60">{block.body}</p>
            </Reveal>
          ))}

          {data.link ? (
            <Reveal className="col-span-12 tablet:col-span-6 desktop:col-span-4 desktop:col-start-9">
              <InkLink href={data.link.href}>{data.link.label}</InkLink>
            </Reveal>
          ) : null}
        </div>

        {data.image ? (
          <Reveal className="mt-2xl">
            <div className="w-full overflow-hidden rounded-[6px] border border-offwhite/10 bg-[#15181b]">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={data.image}
                alt={data.imageAlt}
                className="block w-full"
                draggable={false}
              />
            </div>
          </Reveal>
        ) : null}
      </Container>
    </Section>
  );
}

export default NumberedSection;
