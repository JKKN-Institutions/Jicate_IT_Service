import { Container } from "@/components/ui";
import { Reveal } from "@/components/motion/Reveal";
import { quote } from "@/content/defense";

/**
 * Quote band — a hairline rule, a large opening quote mark on the left, and the
 * pull-quote with its attribution on the right (reference parity). Placeholder
 * copy.
 */
export function QuoteBand() {
  return (
    <section aria-label="Quote" className="pt-[100px] desktop:pt-[160px]">
      <Container>
        <Reveal className="border-t border-white/15 pt-[48px]">
          <div className="grid grid-cols-1 gap-[24px] desktop:grid-cols-[1fr_1fr] desktop:gap-[80px]">
            <span aria-hidden className="font-display text-[64px] leading-[0.6] text-white">
              &ldquo;
            </span>
            <div className="flex flex-col gap-[32px]">
              <p className="text-[clamp(1.4rem,2.1vw,1.875rem)]/[1.3] text-white">&ldquo;{quote.text}&rdquo;</p>
              <p className="flex items-baseline gap-[0.4em] text-[clamp(1rem,1.25vw,1.125rem)] text-white/55">
                <span aria-hidden>↳</span>
                {quote.attribution}
              </p>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}

export default QuoteBand;
