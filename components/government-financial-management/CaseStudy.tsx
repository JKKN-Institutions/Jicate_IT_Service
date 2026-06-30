import type { ReactNode } from "react";

import { Container } from "@/components/ui";
import { Reveal } from "@/components/motion/Reveal";
import { caseStudy } from "@/content/government-financial-management";

import { GiantHeading, SubHeading, NumberLabel, InkLink } from "./parts";

/**
 * "02 / Case Study" — a numbered eyebrow and giant heading, then a three-column
 * split: a pull-quote on the left, PARTNER/PROBLEM-SPACE labelled rows in the
 * middle, and a data-visualization graphic with a link on the right (reference
 * parity). Placeholder copy.
 */
export function CaseStudy() {
  return (
    <section aria-label={caseStudy.heading} className="pt-[100px] desktop:pt-[160px]">
      <Container>
        <div className="border-t border-white/15 pt-[40px]">
          <NumberLabel>{caseStudy.number}</NumberLabel>
          <GiantHeading className="mt-[32px] max-w-[16ch]">{caseStudy.heading}</GiantHeading>

          <Reveal className="mt-[64px] grid grid-cols-1 gap-x-[48px] gap-y-[40px] desktop:grid-cols-3">
            {/* Quote */}
            <div className="flex flex-col gap-[20px]">
              <span aria-hidden className="font-display text-[40px] leading-[0.5] text-white">
                &ldquo;
              </span>
              <SubHeading as="p">{caseStudy.quote}</SubHeading>
              <p className="flex items-baseline gap-[0.4em] text-body text-white/55">
                <span aria-hidden>↳</span>
                {caseStudy.attribution}
              </p>
            </div>

            {/* Labelled rows */}
            <div className="flex flex-col">
              <Row label="Partner" body={caseStudy.partner} />
              <Row label="Problem-Space" body={caseStudy.problem} last>
                <p className="mt-[16px] text-[clamp(0.9375rem,1.1vw,1rem)]/[1.43] text-white">{caseStudy.problem2}</p>
              </Row>
            </div>

            {/* Media + link */}
            <div className="flex flex-col gap-[24px]">
              <div className="aspect-[16/12] w-full overflow-hidden rounded-[2px] bg-white/[0.06]">
                {caseStudy.image ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img src={caseStudy.image} alt={caseStudy.alt} className="h-full w-full object-cover" loading="lazy" />
                ) : null}
              </div>
              <InkLink href={caseStudy.link.href}>{caseStudy.link.label}</InkLink>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}

function Row({
  label,
  body,
  children,
  last,
}: {
  label: string;
  body: string;
  children?: ReactNode;
  last?: boolean;
}) {
  return (
    <div className={`grid grid-cols-[110px_1fr] gap-[16px] border-t border-white/20 py-[24px] ${last ? "border-b" : ""}`}>
      <span className="font-mono text-caption uppercase tracking-[0.06em] text-white/45">{label}</span>
      <div className="flex flex-col">
        <p className="text-[clamp(0.9375rem,1.1vw,1rem)]/[1.43] text-white">{body}</p>
        {children}
      </div>
    </div>
  );
}

export default CaseStudy;
