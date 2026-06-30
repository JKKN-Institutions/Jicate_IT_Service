import { Container, Section } from "@/components/ui";
import { Reveal } from "@/components/motion/Reveal";
import { accelerating } from "@/content/semiconductors";

import { GiantHeading, InkLink } from "./parts";

/**
 * Accelerating Research & Development Time — two staggered 2-column rows on a
 * LIGHT band:
 *   Row A: knowledge-graph image (left) + heading, lead, whitepaper CTA (right).
 *   Row B: body paragraphs + "learn more" CTA (left) + product screenshot (right).
 */
export function AcceleratingRD() {
  return (
    <Section className="bg-canvas py-[clamp(64px,9vw,120px)]" aria-label={accelerating.heading}>
      <Container>
        {/* Row A — 12-col inset grid: image cols 2-6, copy cols 8-12. */}
        <Reveal className="grid grid-cols-1 gap-[clamp(40px,5vw,64px)] desktop:grid-cols-12 desktop:items-start">
          <figure className="flex flex-col gap-s desktop:col-span-5 desktop:col-start-2">
            {/* Caption is baked into the source PNG ("@Knowledge Graph Powered
                Research"), so no separate label is rendered here. */}
            <div className="aspect-[559/316] w-full overflow-hidden bg-ink/[0.04]">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={accelerating.graphImage}
                alt={accelerating.graphAlt}
                className="h-full w-full object-contain"
              />
            </div>
          </figure>

          <div className="flex flex-col gap-l desktop:col-span-5 desktop:col-start-8">
            <GiantHeading as="h2" size="section" className="max-w-[18ch] text-ink">
              {accelerating.heading}
            </GiantHeading>
            <p className="max-w-[46ch] text-[18px] leading-[1.39] text-ink">{accelerating.lead}</p>
            <p className="max-w-[46ch] text-[16px] leading-[1.45] text-ink">
              {accelerating.whitepaperPrompt}
            </p>
            <InkLink href={accelerating.whitepaperCta.href} className="max-w-[460px]">
              {accelerating.whitepaperCta.label}
            </InkLink>
          </div>
        </Reveal>

        {/* Row B — copy cols 2-6, product screenshot cols 8-12. The reference
            separates the two rows with tall blank "page break" spacer images;
            we reproduce that gap with vertical margin. */}
        <Reveal className="mt-[clamp(160px,48vw,700px)] grid grid-cols-1 gap-[clamp(40px,5vw,64px)] desktop:grid-cols-12 desktop:items-center">
          <div className="flex flex-col gap-m desktop:col-span-5 desktop:col-start-2">
            {accelerating.body.map((para, i) => (
              <p key={i} className="max-w-[46ch] text-[16px] leading-[1.45] text-ink">
                {para}
              </p>
            ))}
            <InkLink href={accelerating.bodyCta.href} className="mt-s max-w-[460px]">
              {accelerating.bodyCta.label}
            </InkLink>
          </div>

          <div className="aspect-[559/353] w-full overflow-hidden bg-ink/[0.04] desktop:col-span-5 desktop:col-start-8">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={accelerating.screenshotImage}
              alt={accelerating.screenshotAlt}
              className="h-full w-full object-contain"
            />
          </div>
        </Reveal>
      </Container>
    </Section>
  );
}

export default AcceleratingRD;
