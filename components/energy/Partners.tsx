import { Container, Section } from "@/components/ui";
import { Reveal } from "@/components/motion/Reveal";
import { partners } from "@/content/energy";

import { GiantHeading, ArrowItem } from "./parts";

/**
 * Our Partners — a giant heading, then a horizontal row of partner columns
 * (logo centered on top, ↳ bullet points beneath). Scrolls horizontally on
 * narrow viewports the way the reference carousel does.
 */
export function Partners() {
  return (
    <Section id="our-partners" className="bg-canvas scroll-mt-[160px]" aria-label={partners.heading}>
      <Container>
        <Reveal className="mb-3xl">
          <GiantHeading size="anchor">{partners.heading}</GiantHeading>
        </Reveal>

        <div className="grid grid-cols-2 gap-x-2xl gap-y-3xl tablet:grid-cols-3 desktop:grid-cols-5">
          {partners.items.map((p, i) => (
            <Reveal key={p.logo} index={i} className="flex flex-col gap-l">
              <div className="flex h-[72px] items-center justify-center">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={p.logo} alt={p.alt} className="max-h-[56px] w-auto object-contain" loading="lazy" />
              </div>
              <div className="flex flex-col gap-m">
                {p.bullets.map((b) => (
                  <ArrowItem key={b.slice(0, 24)} className="text-body-sm">
                    {b}
                  </ArrowItem>
                ))}
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </Section>
  );
}

export default Partners;
