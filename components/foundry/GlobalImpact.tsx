import { Container, Section } from "@/components/ui";
import { Reveal } from "@/components/motion/Reveal";
import { impact } from "@/content/foundry";
import type { CaseCard } from "@/content/foundry";

import { GiantHeading, Eyebrow } from "./parts";

/** Desktop column count per category, keyed by card count (literal classes for Tailwind). */
const GRID_COLS: Record<number, string> = {
  2: "desktop:grid-cols-2",
  3: "desktop:grid-cols-3",
  4: "desktop:grid-cols-4",
};

function Card({ card }: { card: CaseCard }) {
  return (
    <div className="flex flex-col gap-m">
      <Eyebrow>{card.eyebrow}</Eyebrow>
      <div className="aspect-[3/2] w-full overflow-hidden rounded-[2px] bg-ink/[0.06]">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={card.image} alt={card.imageAlt} className="h-full w-full object-cover" loading="lazy" />
      </div>
      <p className="text-body-sm leading-[1.5] text-ink-light">{card.body}</p>
    </div>
  );
}

/**
 * One Platform. Global Impact. — a giant heading, then one row per industry
 * category: a 34px label on the left, a grid of case cards on the right.
 */
export function GlobalImpact() {
  return (
    <Section className="bg-canvas" aria-label={impact.heading}>
      <Container>
        <Reveal>
          <GiantHeading size="anchor" className="mb-3xl text-ink">
            {impact.heading}
          </GiantHeading>
        </Reveal>

        <div className="flex flex-col gap-3xl">
          {impact.categories.map((cat, ci) => (
            <div key={cat.name} className="grid grid-cols-1 gap-x-2xl gap-y-l desktop:grid-cols-12">
              <Reveal className="desktop:col-span-3">
                <h3 className="text-[clamp(1.5rem,1rem+1.4vw,1.889rem)] leading-[1.18] text-ink">
                  {cat.name}
                </h3>
              </Reveal>
              <Reveal
                index={1}
                className={`grid grid-cols-1 gap-x-xl gap-y-2xl tablet:grid-cols-2 desktop:col-span-9 desktop:col-start-4 ${GRID_COLS[cat.cards.length] ?? "desktop:grid-cols-3"}`}
              >
                {cat.cards.map((card) => (
                  <Card key={card.eyebrow + ci} card={card} />
                ))}
              </Reveal>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}

export default GlobalImpact;
