import { Container, Section } from "@/components/ui";
import { Reveal } from "@/components/motion/Reveal";
import type { Feature } from "@/content/life-sciences";

import { GiantHeading, FeatureIcon } from "./parts";

/**
 * A capability section — a giant heading, then a list of divided feature rows.
 * Each row reserves an empty left third; the icon + title sit in the middle and
 * the body in the right third, with the top border spanning only the right 2/3.
 * Shared by Clinical Development, Commercial Operations, Research & Discovery,
 * and Biomanufacturing.
 */
export function Capability({ heading, features }: { heading: string; features: Feature[] }) {
  return (
    <Section className="bg-canvas" aria-label={heading}>
      <Container>
        <Reveal className="mb-3xl">
          <GiantHeading size="anchor" className="text-ink">
            {heading}
          </GiantHeading>
        </Reveal>

        <div className="flex flex-col">
          {features.map((f, i) => (
            <Reveal
              key={f.title}
              index={i % 3}
              className="grid grid-cols-1 desktop:grid-cols-3 desktop:gap-x-2xl"
            >
              <div className="grid grid-cols-1 gap-x-2xl gap-y-m border-t border-ink/15 py-2xl tablet:grid-cols-2 desktop:col-span-2 desktop:col-start-2">
                <div className="flex items-start gap-l">
                  <FeatureIcon />
                  <h3 className="pt-[12px] text-[clamp(1.0625rem,1rem+0.35vw,1.111rem)] leading-[1.3] text-ink">
                    {f.title}
                  </h3>
                </div>
                <p className="text-body leading-[1.5] text-ink">{f.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </Section>
  );
}

export default Capability;
