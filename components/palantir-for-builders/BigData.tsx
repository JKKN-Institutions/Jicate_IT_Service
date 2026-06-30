import { Container, Section } from "@/components/ui";
import { Reveal } from "@/components/motion/Reveal";
import { bigData } from "@/content/palantir-for-builders";

import { GiantHeading, InkLink, MediaPlaceholder } from "./parts";

/**
 * Big Data band — a 2-column layout: a giant statement heading on the left
 * (sticky on desktop), with the intro, platform sub-block (heading + body +
 * platform links), and an interview video + pull-quote stacked on the right.
 */
export function BigData() {
  return (
    <Section id="startups" className="bg-canvas scroll-mt-[150px]" aria-label={bigData.heading}>
      <Container>
        <div className="grid grid-cols-1 gap-x-2xl gap-y-3xl desktop:grid-cols-2">
          <Reveal>
            <GiantHeading size="section" className="max-w-[14ch] desktop:sticky desktop:top-[150px]">
              {bigData.heading}
            </GiantHeading>
          </Reveal>

          <div className="flex flex-col gap-3xl">
            <Reveal>
              <p className="text-[clamp(1.25rem,1rem+1vw,1.625rem)] leading-[1.3] text-ink">{bigData.intro}</p>
            </Reveal>

            <Reveal index={1} className="flex flex-col gap-l">
              <h3 className="font-display text-[clamp(1.5rem,1rem+1.7vw,2.25rem)] font-normal leading-[1.12] tracking-[-0.01em] text-ink">
                {bigData.platformHeading}
              </h3>
              <p className="text-body leading-[1.5] text-ink-light">{bigData.platformBody}</p>
              <div className="mt-m flex flex-col gap-l">
                {bigData.platformLinks.map((l) => (
                  <InkLink key={l.label} href={l.href}>
                    {l.label}
                  </InkLink>
                ))}
              </div>
            </Reveal>

            <Reveal index={2} className="flex flex-col gap-l">
              <MediaPlaceholder label={bigData.videoAlt} play className="aspect-video" />
              <p className="text-body text-ink-light">{bigData.videoCaption}</p>
              <p className="font-display text-[clamp(1.35rem,1rem+1.3vw,1.875rem)] font-normal leading-[1.2] tracking-[-0.01em] text-ink">
                {bigData.quote}
              </p>
              <p className="text-body text-ink-light">{bigData.attribution}</p>
            </Reveal>
          </div>
        </div>
      </Container>
    </Section>
  );
}

export default BigData;
