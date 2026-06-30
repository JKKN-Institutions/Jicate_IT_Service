import { Container, Section } from "@/components/ui";
import { Reveal } from "@/components/motion/Reveal";
import type { Module } from "@/content/readiness";

import { GiantHeading, Eyebrow, InkLink } from "./parts";
import { ReadinessBanner } from "./ReadinessBanner";

/**
 * A readiness module — a small number marker, a 50px heading, a three-column
 * text block (intro / body / aside + link), then a full-width dark banner.
 */
export function ReadinessModule({ module }: { module: Module }) {
  return (
    <Section className="bg-canvas" aria-label={module.heading}>
      <Container>
        <Reveal className="mb-l">
          <Eyebrow>{module.no}</Eyebrow>
        </Reveal>
        <Reveal className="mb-2xl">
          <GiantHeading size="band" className="text-ink">
            {module.heading}
          </GiantHeading>
        </Reveal>

        <div className="mb-3xl grid grid-cols-1 gap-x-2xl gap-y-l desktop:grid-cols-3">
          <Reveal>
            <p className="text-[clamp(1.5rem,1rem+1.4vw,1.889rem)] leading-[1.18] text-ink">
              {module.intro}
            </p>
          </Reveal>
          <Reveal index={1}>
            <p className="text-body leading-[1.5] text-ink">{module.body}</p>
          </Reveal>
          <Reveal index={2} className="flex flex-col gap-l">
            <p className="text-body leading-[1.5] text-ink-light">{module.aside}</p>
            <InkLink href="#" className="text-body">
              {module.link}
            </InkLink>
          </Reveal>
        </div>

        <Reveal index={1}>
          <ReadinessBanner banner={module.banner} />
        </Reveal>
      </Container>
    </Section>
  );
}

export default ReadinessModule;
