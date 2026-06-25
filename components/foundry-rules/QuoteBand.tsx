import { Container, Section } from "@/components/ui";
import { Reveal } from "@/components/motion/Reveal";
import { quote } from "@/content/foundry-rules";

/**
 * Customer testimonial band — a logo on the left and two short quote paragraphs
 * with an attribution on the right (reference parity). Placeholder testimonial;
 * the user supplies the final wording.
 */
export function QuoteBand() {
  return (
    <Section className="!pt-0 !pb-[100px]" aria-label="Customer testimonial">
      <Container>
        {/* Indented to the right rail (reference): logo right-aligned in the
            left column, quote in a ~552px right column. */}
        <Reveal className="grid grid-cols-1 gap-x-[30px] gap-y-[28px] desktop:grid-cols-[1fr_552px]">
          <div className="flex items-start desktop:justify-end">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={quote.logo} alt={quote.logoAlt} className="h-[88px] w-auto object-contain" loading="lazy" />
          </div>

          <div className="flex flex-col gap-[20px]">
            {quote.paragraphs.map((p, i) => (
              <p key={i} className="text-body-lg leading-[1.45] text-ink">
                {p}
              </p>
            ))}
            <p className="text-body-sm text-ink-light">{quote.attribution}</p>
          </div>
        </Reveal>
      </Container>
    </Section>
  );
}

export default QuoteBand;
