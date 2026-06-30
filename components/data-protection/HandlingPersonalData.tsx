import { Container, Section } from "@/components/ui";
import { Reveal } from "@/components/motion/Reveal";
import { handling } from "@/content/data-protection";

import { InkLink } from "./parts";

/**
 * "Handling Personal Data" — 2-column. The Beyond Anonymisation whitepaper card
 * image on the left; a heading, a short body line with an inline underlined link,
 * and a "Download the Whitepaper" link on the right. Light Section.
 */
export function HandlingPersonalData() {
  return (
    <Section className="bg-canvas" aria-label={handling.heading}>
      <Container>
        <div className="grid-12 items-center gap-y-2xl">
          <Reveal className="col-span-12 desktop:col-span-6">
            <div className="aspect-[16/10] w-full overflow-hidden rounded-[2px] bg-ink/[0.06]">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={handling.image}
                alt={handling.imageAlt}
                className="h-full w-full object-contain"
                loading="lazy"
              />
            </div>
          </Reveal>

          <div className="col-span-12 flex flex-col gap-l desktop:col-span-5 desktop:col-start-8">
            <Reveal>
              <h2 className="font-display text-[clamp(2rem,1rem+3.4vw,3.25rem)] font-normal leading-[1.05] tracking-[-0.02em] text-ink">
                {handling.heading}
              </h2>
            </Reveal>

            <Reveal index={1} className="grid grid-cols-1 gap-2xl tablet:grid-cols-[1fr_auto] tablet:items-start">
              <p className="max-w-[34ch] text-body-lg leading-[1.45] text-ink-light">
                {handling.bodyLead}
                <a href={handling.cta.href} className="text-ink underline underline-offset-2 hover:no-underline">
                  {handling.bodyLink}
                </a>
                {handling.bodyTrail}
              </p>
              <div className="tablet:w-[220px]">
                <InkLink href={handling.cta.href} className="text-body">
                  {handling.cta.label}
                </InkLink>
              </div>
            </Reveal>
          </div>
        </div>
      </Container>
    </Section>
  );
}

export default HandlingPersonalData;
