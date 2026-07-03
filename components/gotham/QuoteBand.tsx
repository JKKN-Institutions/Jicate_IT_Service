import { Container, Section } from "@/components/ui";
import { Reveal } from "@/components/motion/Reveal";
import { quote } from "@/content/gotham";

import { DARK } from "./parts";

/**
 * QuoteBand — a dark testimonial: a vertical REAL PEOPLE / REAL RESULTS label,
 * a 50px grey pull-quote, and an attribution. DARK.
 */
export function QuoteBand() {
  return (
    <Section
      className="!py-[clamp(80px,11vw,150px)] text-white"
      style={{ backgroundColor: DARK }}
      aria-label="Testimonial"
    >
      <Container>
        <Reveal className="grid grid-cols-1 gap-[40px] desktop:grid-cols-[1fr_auto] desktop:gap-[60px]">
          <div className="flex max-w-[820px] flex-col gap-[40px]">
            <blockquote className="font-display text-[clamp(1.75rem,4vw,2.778rem)] leading-[1.1] tracking-[-0.025em] text-white/70">
              {quote.text}
            </blockquote>
            <p className="text-[16px] text-white/60">{quote.attribution}</p>
          </div>
          <div className="text-[12px] uppercase tracking-[0.08em] text-white desktop:[writing-mode:vertical-rl]">
            {quote.label}
          </div>
        </Reveal>
      </Container>
    </Section>
  );
}

export default QuoteBand;
