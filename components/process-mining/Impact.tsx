import { Container, Section } from "@/components/ui";
import { Reveal } from "@/components/motion/Reveal";
import { impact } from "@/content/process-mining";

import { GiantHeading, ArrowItem } from "./parts";

/**
 * Impact — giant heading over two case studies laid out side by side. Each
 * column stacks: title → photo → Challenge / Solution / Impact bullet groups.
 * Light Section.
 */
export function Impact() {
  return (
    <Section className="bg-canvas" aria-label={impact.heading}>
      <Container>
        <Reveal>
          <GiantHeading>{impact.heading}</GiantHeading>
        </Reveal>

        <div className="mt-2xl grid-12 gap-x-l gap-y-2xl">
          {impact.caseStudies.map((study) => (
            <Reveal key={study.title} className="col-span-12 flex flex-col gap-l desktop:col-span-6">
              <h3 className="font-display text-headline font-normal leading-[1.18] tracking-[-0.01em] text-ink">
                {study.title}
              </h3>

              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={study.image}
                alt={study.alt}
                className="w-full select-none rounded-[6px]"
                draggable={false}
              />

              {study.groups.map((group) => (
                <div key={group.label} className="flex flex-col gap-s">
                  <h4 className="font-mono text-caption uppercase tracking-[0.05em] text-ink">
                    {group.label}
                  </h4>
                  <ul className="flex flex-col gap-s">
                    {group.bullets.map((b) => (
                      <ArrowItem key={b}>{b}</ArrowItem>
                    ))}
                  </ul>
                </div>
              ))}
            </Reveal>
          ))}
        </div>
      </Container>
    </Section>
  );
}

export default Impact;
