import { Container, Section } from "@/components/ui";
import { Reveal } from "@/components/motion/Reveal";
import { partners } from "@/content/procurement";

import { GiantHeading, MediaPlaceholder } from "./parts";

/**
 * Our Procurement Partners — a 50px heading and a row of partner logos
 * (placeholder tiles standing in for the real marks).
 */
export function Partners() {
  return (
    <Section className="bg-canvas" aria-label={partners.heading}>
      <Container>
        <Reveal className="mb-2xl">
          <GiantHeading size="band" className="text-ink">
            {partners.heading}
          </GiantHeading>
        </Reveal>
        <Reveal index={1}>
          <div className="grid grid-cols-2 items-center gap-l tablet:grid-cols-3 desktop:grid-cols-6">
            {partners.logos.map((l) => (
              <MediaPlaceholder key={l} label={l} className="aspect-[2/1]" />
            ))}
          </div>
        </Reveal>
      </Container>
    </Section>
  );
}

export default Partners;
