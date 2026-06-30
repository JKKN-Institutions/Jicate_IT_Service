import { Container, Section } from "@/components/ui";
import { Reveal } from "@/components/motion/Reveal";
import { partners } from "@/content/fedstart";

import { GiantHeading } from "./parts";

/**
 * Our Partners — a giant heading, then a 4-column grid of partner tiles: a small
 * uppercase label above each black tile (white placeholder wordmark inside).
 */
export function Partners() {
  return (
    <Section className="bg-canvas" aria-label={partners.heading}>
      <Container>
        <Reveal className="mb-3xl">
          <GiantHeading size="anchor">{partners.heading}</GiantHeading>
        </Reveal>

        <div className="grid grid-cols-2 gap-x-xl gap-y-2xl tablet:grid-cols-3 desktop:grid-cols-4">
          {partners.names.map((name, i) => (
            <Reveal key={name} index={i % 4} className="flex flex-col gap-m">
              <span className="font-mono text-caption uppercase tracking-[0.06em] text-ink-light">
                {name}
              </span>
              <div className="flex aspect-square w-full items-center justify-center rounded-[2px] bg-near-black px-l">
                <span className="text-center font-display text-body-lg uppercase tracking-[0.04em] text-offwhite">
                  {name}
                </span>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </Section>
  );
}

export default Partners;
