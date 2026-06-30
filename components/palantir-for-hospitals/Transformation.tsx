import type { ReactNode } from "react";

import { Container, Section } from "@/components/ui";
import { Reveal } from "@/components/motion/Reveal";
import { transformation } from "@/content/palantir-for-hospitals";

import { SectionHeading, SubHeading, InkLink } from "./parts";

/**
 * "Transformation Journeys Start with Jicate" — a 50px heading, then a
 * three-column case study: a pull-quote on the left, an overview and "examples
 * of our work together" in the middle, and a video thumbnail with a link on the
 * right (reference parity). Placeholder copy.
 */
export function Transformation() {
  return (
    <Section aria-label={transformation.heading}>
      <Container>
        <div className="border-t border-ink/15 pt-[60px]">
          <SectionHeading className="max-w-[18ch]">{transformation.heading}</SectionHeading>

          <Reveal className="mt-[64px] grid grid-cols-1 gap-x-[48px] gap-y-[48px] desktop:grid-cols-3">
            {/* Quote */}
            <div className="flex flex-col gap-[20px]">
              <SubHeading as="p">&ldquo;{transformation.quote}&rdquo;</SubHeading>
              <p className="flex items-baseline gap-[0.4em] text-body text-ink-light">
                <span aria-hidden>↳</span>
                {transformation.attribution}
              </p>
            </div>

            {/* Overview + examples */}
            <div className="flex flex-col">
              <LabelRow label="Overview">
                <p className="text-[clamp(0.9375rem,1.1vw,1rem)]/[1.43] text-ink">{transformation.overview}</p>
              </LabelRow>
              <LabelRow label="Examples of Our Work Together" last>
                <ul className="flex flex-col gap-[20px]">
                  {transformation.examples.map((ex) => (
                    <li key={ex.title} className="text-[clamp(0.9375rem,1.1vw,1rem)]/[1.43] text-ink">
                      <span className="font-semibold">{ex.title} →</span> {ex.body}
                    </li>
                  ))}
                </ul>
              </LabelRow>
            </div>

            {/* Video + link */}
            <div className="flex flex-col gap-[24px]">
              <div className="aspect-[16/10] w-full overflow-hidden rounded-[2px] bg-ink/[0.06]">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={transformation.video} alt={transformation.videoAlt} className="h-full w-full object-cover" loading="lazy" />
              </div>
              <InkLink href={transformation.videoLink.href}>{transformation.videoLink.label}</InkLink>
            </div>
          </Reveal>
        </div>
      </Container>
    </Section>
  );
}

function LabelRow({ label, children, last }: { label: string; children: ReactNode; last?: boolean }) {
  return (
    <div className={`grid grid-cols-[1fr] gap-[16px] border-t border-ink/20 py-[28px] tablet:grid-cols-[140px_1fr] ${last ? "border-b" : ""}`}>
      <span className="font-mono text-caption uppercase tracking-[0.06em] text-ink-light">{label}</span>
      <div>{children}</div>
    </div>
  );
}

export default Transformation;
