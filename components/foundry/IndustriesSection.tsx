import { Container, Section } from "@/components/ui";
import { Reveal } from "@/components/motion/Reveal";
import { cn } from "@/lib/utils";
import { industries } from "@/content/foundry";

import { GiantHeading, ArrowRow } from "./parts";

/**
 * Ontology-powered Operations Across Industries — a giant heading on the left,
 * two paragraphs and a two-column grid of industry links on the right.
 */
export function IndustriesSection() {
  const total = industries.links.length;
  const lastRowStart = total - (total % 2 === 0 ? 2 : 1);

  return (
    <Section className="bg-canvas" aria-label={industries.heading}>
      <Container>
        <div className="grid grid-cols-1 gap-x-2xl gap-y-2xl desktop:grid-cols-12">
          <Reveal className="desktop:col-span-5">
            <GiantHeading size="anchor" className="text-ink">
              {industries.heading}
            </GiantHeading>
          </Reveal>

          <div className="flex flex-col gap-2xl desktop:col-span-6 desktop:col-start-7">
            <Reveal className="flex flex-col gap-l">
              {industries.body.map((p) => (
                <p key={p} className="text-[clamp(1.125rem,1rem+0.6vw,1.333rem)] leading-[1.4] text-ink-light">
                  {p}
                </p>
              ))}
            </Reveal>

            <Reveal index={1} className="grid grid-cols-1 gap-x-2xl tablet:grid-cols-2">
              {industries.links.map((l, i) => (
                <ArrowRow key={l.label} href={l.href} className={cn(i >= lastRowStart && "border-b border-ink/20")}>
                  {l.label}
                </ArrowRow>
              ))}
            </Reveal>
          </div>
        </div>
      </Container>
    </Section>
  );
}

export default IndustriesSection;
