import { Container, Section } from "@/components/ui";
import { Reveal } from "@/components/motion/Reveal";
import { products } from "@/content/supply-chain";

import { GiantHeading, Eyebrow, LeadLink } from "./parts";

/**
 * "Learn about Jicate Supply Chain Solutions" — a top hairline, a giant heading,
 * then a three-column grid of product cards (eyebrow, screenshot, body, and a
 * "Learn more" link) (reference parity).
 */
export function Products() {
  return (
    <Section aria-label={products.heading}>
      <Container>
        <div className="border-t border-ink/15 pt-[60px]">
          <GiantHeading className="max-w-[16ch]">{products.heading}</GiantHeading>

          <Reveal className="mt-[64px] grid grid-cols-1 gap-x-[32px] gap-y-[56px] tablet:grid-cols-2 desktop:grid-cols-3">
            {products.cards.map((card) => (
              <article key={card.eyebrow} className="flex flex-col gap-[16px]">
                <Eyebrow>{card.eyebrow}</Eyebrow>
                <div className="aspect-[16/10] w-full overflow-hidden rounded-[2px] bg-ink/[0.04]">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={card.image} alt={card.alt} className="h-full w-full object-cover" loading="lazy" />
                </div>
                <p className="text-[clamp(0.9375rem,1.1vw,1rem)]/[1.43] text-ink">{card.body}</p>
                <LeadLink href="#" className="text-body">
                  Learn more
                </LeadLink>
              </article>
            ))}
          </Reveal>
        </div>
      </Container>
    </Section>
  );
}

export default Products;
