import { Container, Section } from "@/components/ui";
import { Reveal } from "@/components/motion/Reveal";
import { resources } from "@/content/federal-health";

import { SectionHeading, InkLink } from "./parts";

/**
 * "Resources" — a top hairline, a 50px heading, then a four-column grid of
 * cards (image, body, and a link) (reference parity). Placeholder copy.
 */
export function Resources() {
  return (
    <Section aria-label={resources.heading}>
      <Container>
        <div className="border-t border-ink/15 pt-[60px]">
          <SectionHeading>{resources.heading}</SectionHeading>

          <Reveal className="mt-[48px] grid grid-cols-1 gap-x-[28px] gap-y-[48px] tablet:grid-cols-2 desktop:grid-cols-4">
            {resources.cards.map((card, i) => (
              <article key={i} className="flex flex-col gap-[20px]">
                <div className="aspect-[16/10] w-full overflow-hidden rounded-[2px] bg-ink/[0.04]">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={card.image} alt="" className="h-full w-full object-cover" loading="lazy" />
                </div>
                <p className="text-body leading-[1.45] text-ink">{card.body}</p>
                <InkLink href={card.cta.href} lead className="text-body">
                  {card.cta.label}
                </InkLink>
              </article>
            ))}
          </Reveal>
        </div>
      </Container>
    </Section>
  );
}

export default Resources;
