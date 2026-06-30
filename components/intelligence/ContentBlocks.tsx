import { Container } from "@/components/ui";
import { Reveal } from "@/components/motion/Reveal";
import { mission, blocks } from "@/content/intelligence";

import { BlockHeading } from "./parts";

/**
 * Content blocks — a mission statement followed by four capability blocks. Each
 * block is a full-width hairline rule above a left-aligned text column (a 20px
 * heading and a 16px paragraph), matching the reference's narrow text rail.
 */
export function ContentBlocks() {
  return (
    <section aria-label="Overview" className="pt-[80px] desktop:pt-[120px]">
      <Container>
        {/* Mission band */}
        <Reveal className="border-t border-white/15 py-[48px] desktop:py-[64px]">
          <p className="max-w-[552px] text-[clamp(0.9375rem,1.1vw,1rem)]/[1.43] text-white desktop:ml-[min(8.7vw,128px)]">
            {mission}
          </p>
        </Reveal>

        {/* Capability blocks */}
        {blocks.map((b) => (
          <Reveal
            key={b.heading}
            className="border-t border-white/15 py-[48px] desktop:py-[64px]"
          >
            <div className="flex max-w-[552px] flex-col gap-[24px] desktop:ml-[min(8.7vw,128px)]">
              <BlockHeading>{b.heading}</BlockHeading>
              <p className="text-[clamp(0.9375rem,1.1vw,1rem)]/[1.43] text-white">{b.body}</p>
            </div>
          </Reveal>
        ))}
      </Container>
    </section>
  );
}

export default ContentBlocks;
