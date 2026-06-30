import { Container } from "@/components/ui";
import { Reveal } from "@/components/motion/Reveal";
import { statement } from "@/content/mission-manager";

/**
 * Statement band — a centered pull-quote bracketed by large quotation marks, on
 * the dark surface (reference parity).
 */
export function Statement() {
  return (
    <section aria-label="Statement" className="pt-[100px] pb-[120px] desktop:pt-[160px] desktop:pb-[160px]">
      <Container>
        <div className="border-t border-white/15 pt-[80px]">
          <Reveal className="relative mx-auto max-w-[669px] text-center">
            <span aria-hidden className="mb-[16px] block font-display text-[28px] leading-[0.5] text-white">
              &ldquo;
            </span>
            <p className="text-[clamp(1.125rem,1.4vw,1.25rem)]/[1.3] text-white">{statement}</p>
            <span aria-hidden className="mt-[20px] block font-display text-[28px] leading-[0.5] text-white">
              &rdquo;
            </span>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}

export default Statement;
