import { Container, Section } from "@/components/ui";
import { Reveal } from "@/components/motion/Reveal";
import { whitepaper } from "@/content/streaming";

import { InkLink } from "./parts";

/** White paper band — a heading with a Download link. Light Section. */
export function Whitepaper() {
  return (
    <Section className="bg-canvas" aria-label={whitepaper.heading}>
      <Container>
        <Reveal className="grid-12 items-end gap-y-l">
          <h3 className="col-span-12 max-w-[22ch] font-display text-headline-lg font-normal leading-[1.12] tracking-[-0.02em] text-ink desktop:col-span-7">
            {whitepaper.heading}
          </h3>
          <div className="col-span-12 desktop:col-span-4 desktop:col-start-9">
            <InkLink href={whitepaper.cta.href}>{whitepaper.cta.label}</InkLink>
          </div>
        </Reveal>
      </Container>
    </Section>
  );
}

export default Whitepaper;
