import { Container, Section } from "@/components/ui";
import { Reveal } from "@/components/motion/Reveal";
import { cmmc } from "@/content/fedstart";

import { GiantHeading, InkLink } from "./parts";

/**
 * CMMC — a 2-column section. Left column explains "What Is CMMC?"; the right
 * column covers achieving CMMC compliance with FedStart and a fact-sheet link.
 */
export function Cmmc() {
  return (
    <Section className="bg-canvas" aria-label="CMMC">
      <Container>
        <div className="grid grid-cols-1 gap-x-2xl gap-y-3xl desktop:grid-cols-2">
          {/* Left */}
          <div className="flex flex-col gap-l">
            <Reveal>
              <GiantHeading size="section">{cmmc.left.heading}</GiantHeading>
            </Reveal>
            <Reveal index={1} className="flex flex-col gap-l">
              <p className="text-body-lg text-ink">{cmmc.left.subheading}</p>
              {cmmc.left.paragraphs.map((p) => (
                <p key={p.slice(0, 24)} className="max-w-[52ch] text-body leading-[1.5] text-ink">
                  {p}
                </p>
              ))}
            </Reveal>
          </div>

          {/* Right */}
          <div className="flex flex-col gap-l">
            <Reveal>
              <GiantHeading size="section">{cmmc.right.heading}</GiantHeading>
            </Reveal>
            <Reveal index={1} className="flex flex-col gap-l">
              {cmmc.right.paragraphs.map((p) => (
                <p key={p.slice(0, 24)} className="max-w-[52ch] text-body leading-[1.5] text-ink">
                  {p}
                </p>
              ))}
            </Reveal>
            <Reveal index={2} className="mt-l flex flex-col gap-2xl tablet:flex-row tablet:items-start tablet:justify-between">
              <p className="max-w-[34ch] text-body-lg leading-[1.4] text-ink">{cmmc.right.closing}</p>
              <div className="tablet:w-[260px]">
                <InkLink href={cmmc.right.link.href} className="text-body">
                  {cmmc.right.link.label}
                </InkLink>
              </div>
            </Reveal>
          </div>
        </div>
      </Container>
    </Section>
  );
}

export default Cmmc;
