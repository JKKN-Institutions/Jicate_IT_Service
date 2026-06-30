import { Container, Section } from "@/components/ui";
import { Reveal } from "@/components/motion/Reveal";
import { design } from "@/content/telecommunications";

import { GiantHeading, Eyebrow, InkLink } from "./parts";

/**
 * Meeting the demands … by design — a giant heading, then a three-column grid of
 * numbered cards (eyebrow, isometric image, body, learn-more link).
 */
export function DesignCards() {
  return (
    <Section className="bg-canvas" aria-label={design.heading}>
      <Container>
        <Reveal className="mb-3xl">
          <GiantHeading size="band" className="max-w-[18ch] text-ink">
            {design.heading}
          </GiantHeading>
        </Reveal>

        <div className="grid grid-cols-1 gap-x-2xl gap-y-3xl tablet:grid-cols-2 desktop:grid-cols-3">
          {design.cards.map((c, i) => (
            <Reveal key={c.no} index={i % 3} className="flex flex-col gap-l">
              <Eyebrow>{c.no}</Eyebrow>
              <div className="aspect-square w-full overflow-hidden bg-ink/[0.03]">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={c.image} alt={c.title} className="h-full w-full object-contain" loading="lazy" />
              </div>
              <p className="text-body leading-[1.5] text-ink">{c.body}</p>
              <InkLink href="#" className="self-start">
                Learn more
              </InkLink>
            </Reveal>
          ))}
        </div>
      </Container>
    </Section>
  );
}

export default DesignCards;
