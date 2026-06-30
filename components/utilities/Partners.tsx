import { Container, Section } from "@/components/ui";
import { Reveal } from "@/components/motion/Reveal";
import { partners } from "@/content/utilities";

import { SectionHeading, ReadLink } from "./parts";

/**
 * Our Partners — a top hairline, a 50px heading, then a three-column row of
 * partner cards (a placeholder logo tile, a stat sentence, a note, and a
 * "↳ Learn more" link). Logos ship as placeholders. LIGHT.
 */
export function Partners() {
  return (
    <Section id="our-partners" aria-label={partners.heading}>
      <Container>
        <div className="border-t border-ink/15 pt-[60px]">
          <SectionHeading>{partners.heading}</SectionHeading>

          <Reveal className="mt-[48px] grid grid-cols-1 gap-[40px] desktop:mt-[64px] desktop:grid-cols-3 desktop:gap-[40px]">
            {partners.items.map((p) => (
              <div key={p.name} className="flex flex-col gap-[20px]">
                <div className="flex h-[80px] w-full items-center justify-center rounded-[2px] bg-ink/[0.04] px-m text-center font-mono text-[12px] uppercase tracking-[0.08em] text-ink-light">
                  {p.name}
                </div>
                <p className="text-[16px]/[1.43] text-ink">{p.stat}</p>
                <p className="text-[16px]/[1.43] text-ink-light">{p.note}</p>
                <ReadLink href={p.link.href}>{p.link.label}</ReadLink>
              </div>
            ))}
          </Reveal>
        </div>
      </Container>
    </Section>
  );
}

export default Partners;
