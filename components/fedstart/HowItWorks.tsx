import { Container, Section } from "@/components/ui";
import { Reveal } from "@/components/motion/Reveal";
import { howItWorks } from "@/content/fedstart";

import { GiantHeading, ArrowItem, MediaPlaceholder } from "./parts";

/**
 * How It Works — a 2-column header (heading left / large statement right), then a
 * 2-column body (diagram placeholder left / numbered getting-started steps right).
 */
export function HowItWorks() {
  return (
    <Section className="bg-canvas" aria-label={howItWorks.heading}>
      <Container>
        <div className="grid grid-cols-1 gap-x-2xl gap-y-l desktop:grid-cols-2">
          <Reveal>
            <GiantHeading size="section">{howItWorks.heading}</GiantHeading>
          </Reveal>
          <Reveal index={1}>
            <p className="font-display text-[clamp(1.5rem,1rem+1.7vw,2.25rem)] font-normal leading-[1.12] tracking-[-0.01em] text-ink">
              {howItWorks.statement}
            </p>
          </Reveal>
        </div>

        <div className="mt-3xl grid grid-cols-1 items-start gap-x-2xl gap-y-2xl desktop:grid-cols-2">
          <Reveal>
            <MediaPlaceholder label={howItWorks.imageAlt} className="aspect-[16/10]" />
          </Reveal>
          <Reveal index={1} className="flex flex-col gap-l">
            <p className="text-body-lg text-ink">{howItWorks.stepsLead}</p>
            <div className="flex flex-col gap-m">
              {howItWorks.steps.map((s) => (
                <ArrowItem key={s.slice(0, 24)} className="text-body-lg">
                  {s}
                </ArrowItem>
              ))}
            </div>
          </Reveal>
        </div>
      </Container>
    </Section>
  );
}

export default HowItWorks;
