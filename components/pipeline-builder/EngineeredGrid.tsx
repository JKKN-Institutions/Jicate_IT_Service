import { Container, Section } from "@/components/ui";
import { Reveal } from "@/components/motion/Reveal";
import { engineered, type GridItem } from "@/content/pipeline-builder";

import { GiantHeading } from "./parts";

/**
 * "Engineered for Speed, Scale, & Stability" — a giant heading over a stacked
 * list of capability items, each a small glyph beside a 20px title and body
 * (reference parity).
 */
export function EngineeredGrid() {
  return (
    <Section className="!pt-0 !pb-[100px]" aria-label="Engineered for Speed, Scale, and Stability">
      <Container>
        <div className="grid grid-cols-1 gap-x-[60px] gap-y-[40px] desktop:grid-cols-[1fr_440px]">
          {/* Heading — left, sticky on desktop */}
          <Reveal className="desktop:sticky desktop:top-[100px] desktop:self-start">
            <GiantHeading className="max-w-[12ch]">{engineered.heading}</GiantHeading>
          </Reveal>

          {/* Items — right column */}
          <div className="flex flex-col">
            {engineered.items.map((item, i) => (
              <Reveal key={item.title} index={i % 3}>
                <Item item={item} />
              </Reveal>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}

function Item({ item }: { item: GridItem }) {
  return (
    <div className="grid grid-cols-[40px_1fr] items-start gap-x-[24px] gap-y-[6px] border-t border-ink/12 py-[28px]">
      <span
        aria-hidden
        className="row-span-2 flex h-[40px] w-[40px] items-center justify-center rounded-[6px] bg-near-black text-offwhite"
      >
        <svg viewBox="0 0 24 24" className="h-[18px] w-[18px]" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M4 7h16M4 12h16M4 17h10" strokeLinecap="round" />
        </svg>
      </span>
      <h3 className="font-display text-[1.1111rem] font-normal leading-[1.3] tracking-[-0.005em] text-ink">
        {item.title}
      </h3>
      <p className="col-start-2 max-w-[60ch] text-body leading-[1.45] text-ink-medium">{item.body}</p>
    </div>
  );
}

export default EngineeredGrid;
