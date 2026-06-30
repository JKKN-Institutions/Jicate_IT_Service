import { Container, Section } from "@/components/ui";
import { Reveal } from "@/components/motion/Reveal";
import { partners } from "@/content/palantir-for-rail";

import { SectionHeading } from "./parts";

/**
 * "Our Partners" — a top hairline, a 50px heading, then a row of partner logos
 * (placeholders) and an italic note (reference parity).
 */
export function Partners() {
  return (
    <Section id="our-partners" aria-label={partners.heading}>
      <Container>
        <div className="border-t border-ink/15 pt-[60px]">
          <SectionHeading>{partners.heading}</SectionHeading>

          <Reveal className="mt-[64px] grid grid-cols-1 items-center gap-[40px] desktop:grid-cols-3">
            {partners.logos.map((logo) => (
              <div
                key={logo}
                className="flex h-[80px] items-center justify-center rounded-[2px] bg-ink/[0.04] font-mono text-[13px] uppercase tracking-[0.08em] text-ink-light"
              >
                {logo}
              </div>
            ))}
          </Reveal>

          <p className="mt-[40px] text-[clamp(1rem,1.25vw,1.125rem)] italic text-ink">{partners.note}</p>
        </div>
      </Container>
    </Section>
  );
}

export default Partners;
