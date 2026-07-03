import { Container, Section } from "@/components/ui";
import { Reveal } from "@/components/motion/Reveal";
import { cn } from "@/lib/utils";
import type { Feature } from "@/content/ontology";

import { GiantHeading, StackedVisual, ACCENT, ACCENT_STRONG } from "./parts";

const COLS: Record<number, string> = {
  2: "tablet:grid-cols-2",
  3: "tablet:grid-cols-2 desktop:grid-cols-3",
};

/**
 * FeatureSection — a centered heading with a purple accent, a full-width
 * composite diagram, then a grid of feature blocks (purple title + body + link).
 * Reused for the Language, Engine, and Toolchain sections.
 */
export function FeatureSection({
  id,
  heading,
  accent,
  layers,
  aspect,
  features,
  cols = 2,
  ariaLabel,
}: {
  id: string;
  heading: string;
  accent: string;
  layers: string[];
  aspect: string;
  features: Feature[];
  cols?: number;
  ariaLabel: string;
}) {
  return (
    <Section id={id} className="scroll-mt-[140px] bg-canvas" aria-label={ariaLabel}>
      <Container>
        <Reveal>
          <GiantHeading className="mx-auto max-w-[22ch] text-center text-ink">
            {heading}
            <span style={{ color: ACCENT_STRONG }}>{accent}</span>
          </GiantHeading>
        </Reveal>

        <Reveal index={1} className="mt-2xl">
          <StackedVisual layers={layers} aspect={aspect} alt={ariaLabel} />
        </Reveal>

        <div className={cn("mt-3xl grid grid-cols-1 gap-x-2xl gap-y-2xl", COLS[cols] ?? COLS[2])}>
          {features.map((f, i) => (
            <Reveal
              key={f.title}
              index={i}
              className="flex flex-col gap-m rounded-[10px] bg-[#fafafa] p-xl"
            >
              <h3
                className="font-display text-[clamp(1.125rem,1rem+0.6vw,1.4rem)] font-medium leading-[1.15] tracking-[-0.03em]"
                style={{ color: ACCENT }}
              >
                {f.title}
              </h3>
              <p className="text-[clamp(1rem,1rem+0.2vw,1.125rem)] leading-[1.45] text-ink-light">
                {f.body}
              </p>
              <a
                href="#"
                className="mt-s font-mono text-caption uppercase tracking-[0.08em] text-ink transition-colors duration-200 hover:text-ink-light"
              >
                Read More
              </a>
            </Reveal>
          ))}
        </div>
      </Container>
    </Section>
  );
}

export default FeatureSection;
