import { Container, Section } from "@/components/ui";
import { Reveal } from "@/components/motion/Reveal";
import { operatingSuperiority as s } from "@/content/edge-ai";

import { SectionIndex } from "./parts";

/**
 * 02 — "Achieve operating superiority…". Numbered divider, giant heading, a lead
 * paragraph, then a stack of four capability blocks (title + lead + body).
 * Light Section.
 */
export function OperatingSuperiority() {
  return (
    <Section className="bg-canvas" aria-label={s.heading}>
      <Container>
        <Reveal>
          <SectionIndex index={s.index} />
          <div className="mt-l grid-12 items-start gap-y-l">
            <h2 className="col-span-12 font-display text-display font-normal leading-[1.1] tracking-[-0.02em] text-ink desktop:col-span-6">
              {s.heading}
            </h2>
            <p className="col-span-12 font-display text-display font-normal leading-[1.12] tracking-[-0.02em] text-ink desktop:col-span-6">
              {s.subcopy}
            </p>
          </div>
        </Reveal>

        <div className="mt-3xl grid-12 gap-x-l gap-y-3xl">
          {s.blocks.map((block, i) => (
            <Reveal
              index={i}
              key={block.title}
              className="col-span-12 flex flex-col gap-m tablet:col-span-6"
            >
              <h3 className="font-display text-display font-normal leading-[1.1] tracking-[-0.02em] text-ink">
                {block.title}
              </h3>
              <h4 className="font-display text-headline font-normal leading-[1.2] text-ink">
                {block.lead}
              </h4>
              <p className="text-body-lg text-ink-light">{block.body}</p>
            </Reveal>
          ))}
        </div>
      </Container>
    </Section>
  );
}

export default OperatingSuperiority;
