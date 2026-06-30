import { Container } from "@/components/ui";
import { Reveal } from "@/components/motion/Reveal";
import { intro } from "@/content/construction";

import { BigHeading } from "./parts";

/**
 * Intro band — a top hairline rule, then a two-column split (oversized heading
 * left, a lead paragraph right), followed by a full-width product montage.
 */
export function IntroBand() {
  return (
    <section aria-label={intro.heading} className="pt-[80px] desktop:pt-[120px]">
      <Container>
        <div className="border-t border-white/15 pt-[60px]">
          <Reveal className="grid items-start gap-[40px] desktop:grid-cols-[1fr_1fr] desktop:gap-[80px]">
            <BigHeading className="max-w-[14ch]">{intro.heading}</BigHeading>
            <p className="max-w-[40ch] font-display text-[clamp(1.6rem,2.36vw,2.125rem)]/[1.176] text-white">
              {intro.body}
            </p>
          </Reveal>
        </div>
      </Container>

      <Container className="mt-[64px] desktop:mt-[96px]">
        <Reveal className="w-full overflow-hidden rounded-[4px]">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={intro.montage} alt={intro.montageAlt} className="h-auto w-full" loading="lazy" />
        </Reveal>
      </Container>
    </section>
  );
}

export default IntroBand;
