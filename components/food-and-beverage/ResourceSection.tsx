import { Container, Section } from "@/components/ui";
import { Reveal } from "@/components/motion/Reveal";
import { cn } from "@/lib/utils";
import type { ResourceCard } from "@/content/food-and-beverage";

import { GiantHeading, Eyebrow, ReadMore } from "./parts";

/**
 * A resource section — a giant heading on the left and a grid of resource cards
 * on the right (each: category eyebrow, title, and a "↳ Read More" link). Shared
 * by "AI in practice" (3-up) and "More on Food and Beverage" (4-up).
 */
export function ResourceSection({
  heading,
  cards,
  cols,
}: {
  heading: string;
  cards: ResourceCard[];
  cols: 3 | 4;
}) {
  const cardCols = cols === 3 ? "tablet:grid-cols-2 desktop:grid-cols-3" : "tablet:grid-cols-2 desktop:grid-cols-4";

  return (
    <Section className="bg-canvas" aria-label={heading}>
      <Container>
        <div className="grid grid-cols-1 gap-x-2xl gap-y-3xl desktop:grid-cols-12">
          <Reveal className="desktop:col-span-3">
            <GiantHeading size="section">{heading}</GiantHeading>
          </Reveal>

          <div className={cn("grid grid-cols-1 gap-x-xl gap-y-2xl desktop:col-span-9", cardCols)}>
            {cards.map((c, i) => (
              <Reveal key={c.title} index={i % 4} className="flex flex-col gap-m">
                <Eyebrow>{c.category}</Eyebrow>
                <p className="font-display text-[clamp(1.15rem,1rem+0.7vw,1.45rem)] leading-[1.15] tracking-[-0.01em] text-ink">
                  {c.title}
                </p>
                <ReadMore href={c.href} />
              </Reveal>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}

export default ResourceSection;
