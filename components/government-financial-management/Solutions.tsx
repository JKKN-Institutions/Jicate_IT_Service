import { Container } from "@/components/ui";
import { Reveal } from "@/components/motion/Reveal";
import { solutions } from "@/content/government-financial-management";

import { GiantHeading, SubHeading, NumberLabel } from "./parts";

/**
 * "04 / End-to-End Financial Solutions" — a numbered eyebrow, a giant heading, a
 * lead paragraph, then a two-column grid of cards (image, title, body)
 * (reference parity). Card images are placeholders.
 */
export function Solutions() {
  return (
    <section aria-label={solutions.heading} className="pt-[100px] desktop:pt-[160px]">
      <Container>
        <div className="border-t border-white/15 pt-[40px]">
          <NumberLabel>{solutions.number}</NumberLabel>
          <GiantHeading className="mt-[32px] max-w-[14ch]">{solutions.heading}</GiantHeading>
          <p className="mt-[40px] max-w-[44ch] text-[clamp(1.125rem,1.4vw,1.25rem)]/[26px] text-white">
            {solutions.intro}
          </p>

          <Reveal className="mt-[64px] grid grid-cols-1 gap-x-[32px] gap-y-[56px] desktop:grid-cols-2">
            {solutions.cards.map((card) => (
              <article key={card.title} className="flex flex-col gap-[24px]">
                <div className="aspect-[16/10] w-full overflow-hidden rounded-[2px] bg-white/[0.06]">
                  {card.image ? (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img src={card.image} alt={card.alt} className="h-full w-full object-cover" loading="lazy" />
                  ) : null}
                </div>
                <SubHeading>{card.title}</SubHeading>
                <p className="text-body leading-[1.5] text-white/75">{card.body}</p>
              </article>
            ))}
          </Reveal>
        </div>
      </Container>
    </section>
  );
}

export default Solutions;
