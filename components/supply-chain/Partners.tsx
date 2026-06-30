import { Container, Section } from "@/components/ui";
import { Reveal } from "@/components/motion/Reveal";
import { partners } from "@/content/supply-chain";

import { GiantHeading, Eyebrow, LeadLink } from "./parts";

/**
 * "Our Partners" — a top hairline, a giant heading, then a three-column grid of
 * partner cards (eyebrow, logo placeholder, outcome bullets, and a "Learn more"
 * link) (reference parity). Logos are placeholders.
 */
export function Partners() {
  return (
    <Section aria-label={partners.heading}>
      <Container>
        <div className="border-t border-ink/15 pt-[60px]">
          <GiantHeading>{partners.heading}</GiantHeading>

          <Reveal className="mt-[64px] grid grid-cols-1 gap-x-[40px] gap-y-[64px] tablet:grid-cols-2 desktop:grid-cols-3">
            {partners.cards.map((card) => (
              <article key={card.eyebrow} className="flex flex-col gap-[24px]">
                <Eyebrow>{card.eyebrow}</Eyebrow>
                <div className="flex h-[80px] items-center justify-center rounded-[2px] bg-ink/[0.04] font-mono text-[13px] uppercase tracking-[0.08em] text-ink-light">
                  {card.eyebrow}
                </div>
                <ul className="flex flex-col gap-[16px]">
                  {card.bullets.map((b, i) => (
                    <li key={i} className="flex items-baseline gap-[8px] text-[clamp(0.9375rem,1.1vw,1rem)]/[1.43] text-ink">
                      <span aria-hidden className="text-ink-light">
                        ↳
                      </span>
                      {b}
                    </li>
                  ))}
                </ul>
                <LeadLink href={partners.cta.href} className="text-body">
                  {partners.cta.label}
                </LeadLink>
              </article>
            ))}
          </Reveal>
        </div>
      </Container>
    </Section>
  );
}

export default Partners;
