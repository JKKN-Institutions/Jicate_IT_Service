import { Container, Section } from "@/components/ui";
import { Reveal } from "@/components/motion/Reveal";
import { offerings, type Offering } from "@/content/automotive-mobility";

import { SectionHeading } from "./parts";

/**
 * "Our Offerings" — a section heading over a grid of offering cards, each a
 * glyph placeholder + title + body + optional "Learn more" link (reference
 * parity). Offering icons aren't shipped, so a neutral glyph stands in.
 */
export function Offerings() {
  return (
    <Section className="!pt-[60px] !pb-[80px]" id="offerings" aria-label="Our Offerings">
      <Container>
        <Reveal>
          <SectionHeading>{offerings.heading}</SectionHeading>
        </Reveal>

        <div className="mt-[48px] grid grid-cols-1 gap-x-[40px] gap-y-[48px] tablet:grid-cols-2 desktop:grid-cols-3">
          {offerings.items.map((item, i) => (
            <Reveal key={item.title} index={i % 3}>
              <Card item={item} />
            </Reveal>
          ))}
        </div>
      </Container>
    </Section>
  );
}

function Card({ item }: { item: Offering }) {
  return (
    <article className="flex flex-col gap-[16px] border-t border-ink/12 pt-[24px]">
      <span aria-hidden className="flex h-[44px] w-[44px] items-center justify-center rounded-[8px] bg-near-black text-offwhite">
        <svg viewBox="0 0 24 24" className="h-[20px] w-[20px]" fill="none" stroke="currentColor" strokeWidth="2">
          <rect x="4" y="4" width="16" height="16" rx="2" />
          <path d="M9 9h6v6H9z" />
        </svg>
      </span>
      <h3 className="font-display text-body-lg font-normal tracking-[-0.01em] text-ink">{item.title}</h3>
      <p className="max-w-[44ch] text-body leading-[1.5] text-ink-medium">{item.body}</p>
      {item.cta ? (
        <a
          href="#"
          className="mt-[4px] inline-flex items-baseline gap-[0.4em] text-body-sm text-ink underline decoration-ink/30 underline-offset-[3px] hover:decoration-ink"
        >
          <span aria-hidden>↳</span> {item.cta}
        </a>
      ) : null}
    </article>
  );
}

export default Offerings;
