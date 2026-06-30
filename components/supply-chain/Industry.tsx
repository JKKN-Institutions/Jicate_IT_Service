import { Container, Section } from "@/components/ui";
import { Reveal } from "@/components/motion/Reveal";
import { industry } from "@/content/supply-chain";

import { GiantHeading, Eyebrow, LeadLink } from "./parts";

/**
 * "Our Industry Impact" — a top hairline, a giant heading, then a four-column
 * grid of industry cards (eyebrow, image, body, and a "Learn more" link)
 * (reference parity).
 */
export function Industry() {
  return (
    <Section aria-label={industry.heading}>
      <Container>
        <div className="border-t border-ink/15 pt-[60px]">
          <GiantHeading>{industry.heading}</GiantHeading>

          <Reveal className="mt-[64px] grid grid-cols-1 gap-x-[32px] gap-y-[56px] tablet:grid-cols-2 desktop:grid-cols-4">
            {industry.cards.map((card) => (
              <article key={card.eyebrow} className="flex flex-col gap-[16px]">
                <Eyebrow>{card.eyebrow}</Eyebrow>
                <div className="aspect-[16/11] w-full overflow-hidden rounded-[2px] bg-ink/[0.04]">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={card.image} alt={card.alt} className="h-full w-full object-cover" loading="lazy" />
                </div>
                <p className="text-[clamp(1rem,1.25vw,1.125rem)]/[1.389] text-ink">{card.body}</p>
                <LeadLink href={industry.cta.href} className="text-body">
                  {industry.cta.label}
                </LeadLink>
              </article>
            ))}
          </Reveal>
        </div>
      </Container>
    </Section>
  );
}

export default Industry;
