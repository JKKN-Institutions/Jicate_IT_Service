import { Container, Section } from "@/components/ui";
import { Reveal } from "@/components/motion/Reveal";
import { useCasesSection as s } from "@/content/edge-ai";

import { GiantHeading, SectionIndex } from "./parts";

/**
 * 03 — "Designed for situations where speed and efficiency matter". Numbered
 * divider, giant heading, and a two-up grid of uppercase-eyebrow use cases.
 * Light Section.
 */
export function UseCases() {
  return (
    <Section className="bg-canvas" aria-label={s.heading}>
      <Container>
        <Reveal className="flex flex-col gap-l">
          <SectionIndex index={s.index} />
          <GiantHeading className="max-w-[20ch]">{s.heading}</GiantHeading>
        </Reveal>

        <div className="mt-3xl grid-12 gap-x-l gap-y-2xl">
          {s.items.map((item, i) => (
            <Reveal
              index={i}
              key={item.label}
              className="col-span-12 flex flex-col gap-s tablet:col-span-6 desktop:col-span-3"
            >
              <h3 className="font-mono text-caption uppercase tracking-[0.05em] text-ink-light">
                {item.label}
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
