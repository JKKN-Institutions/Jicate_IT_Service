import { Container, Section } from "@/components/ui";
import { Reveal } from "@/components/motion/Reveal";
import { superchargedTitle, productCards, type ProductCard } from "@/content/data-integration";

import { GiantHeading, InkLink } from "./parts";

/**
 * "Data Integration, Supercharged." — giant heading followed by a 2x2 grid of
 * product cards. Each card: a colored art block on top, a 34px heading, body
 * copy, and an optional inked "Learn more" link (reference parity).
 */
export function Supercharged() {
  return (
    <Section className="!py-[60px]" aria-label="Data Integration, Supercharged">
      <Container>
        <Reveal>
          <GiantHeading className="max-w-[14ch]">{superchargedTitle}</GiantHeading>
        </Reveal>

        <div className="mt-[80px] grid grid-cols-1 gap-x-[60px] gap-y-[80px] desktop:grid-cols-2">
          {productCards.map((card, i) => (
            <Reveal key={card.title} index={i % 2}>
              <Card card={card} />
            </Reveal>
          ))}
        </div>
      </Container>
    </Section>
  );
}

function Card({ card }: { card: ProductCard }) {
  return (
    <article className="flex flex-col">
      <div className="aspect-[16/9] w-full overflow-hidden rounded-[2px] bg-surface-medium">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={card.image} alt={card.alt} className="h-full w-full object-cover" loading="lazy" />
      </div>

      <h2 className="mt-[36px] font-display text-[clamp(1.6667rem,2.4vw,1.8889rem)] font-normal leading-[1.18] tracking-[-0.01em] text-ink">
        {card.title}
      </h2>

      <p className="mt-[20px] max-w-[46ch] text-body leading-[1.45] text-ink">{card.body}</p>

      {card.link ? (
        <div className="mt-[28px]">
          <InkLink href={card.link.href}>{card.link.label}</InkLink>
        </div>
      ) : null}
    </article>
  );
}

export default Supercharged;
