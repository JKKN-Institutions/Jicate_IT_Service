import { Container, Section } from "@/components/ui";
import { Reveal } from "@/components/motion/Reveal";
import { solutions } from "@/content/federal-health";

import { SectionHeading, Eyebrow, InkLink } from "./parts";

/**
 * "Our Solutions" — a top hairline, a 50px heading, then a three-column grid of
 * cards (eyebrow label, image, body, and a "Learn More" link) (reference parity).
 */
export function Solutions() {
  return (
    <Section aria-label={solutions.heading}>
      <Container>
        <div className="border-t border-ink/15 pt-[60px]">
          <SectionHeading>{solutions.heading}</SectionHeading>

          <Reveal className="mt-[48px] grid grid-cols-1 gap-x-[32px] gap-y-[48px] tablet:grid-cols-2 desktop:grid-cols-3">
            {solutions.cards.map((card) => (
              <article key={card.eyebrow} className="flex flex-col gap-[20px]">
                <Eyebrow>{card.eyebrow}</Eyebrow>
                <div className="aspect-[4/3] w-full overflow-hidden rounded-[2px] bg-ink/[0.04]">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={card.image} alt={card.alt} className="h-full w-full object-cover" loading="lazy" />
                </div>
                <p className="text-[clamp(0.9375rem,1.1vw,1rem)]/[1.43] text-ink">{card.body}</p>
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

export default Solutions;
