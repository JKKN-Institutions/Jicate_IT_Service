import { Container, Section } from "@/components/ui";
import { Reveal } from "@/components/motion/Reveal";
import { spotlight } from "@/content/palantir-for-rail";

import { SectionHeading, InkLink } from "./parts";

/**
 * "Spotlight: …at AIPCon" — a top hairline, a 50px heading, then a two-column
 * split (intro paragraph + AIPCon photo), followed by a wide keynote video
 * thumbnail with a watch link (reference parity). Keynote thumbnail is a
 * placeholder.
 */
export function Spotlight() {
  return (
    <Section id="spotlight" aria-label={spotlight.heading}>
      <Container>
        <div className="border-t border-ink/15 pt-[60px]">
          <SectionHeading className="max-w-[18ch]">{spotlight.heading}</SectionHeading>

          <Reveal className="mt-[56px] grid grid-cols-1 items-start gap-[40px] desktop:grid-cols-[1fr_1fr] desktop:gap-[80px]">
            <p className="max-w-[50ch] text-[clamp(0.9375rem,1.1vw,1rem)]/[1.43] text-ink">{spotlight.intro}</p>
            <div className="aspect-[16/10] w-full overflow-hidden rounded-[2px] bg-ink/[0.04]">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={spotlight.photo} alt={spotlight.photoAlt} className="h-full w-full object-cover" loading="lazy" />
            </div>
          </Reveal>

          <Reveal className="mt-[56px] flex flex-col gap-[24px]">
            <div className="relative aspect-[16/9] w-full overflow-hidden rounded-[2px] bg-ink/[0.06] desktop:w-1/2">
              <button
                type="button"
                aria-label="Play keynote video"
                className="absolute inset-0 flex items-center justify-center"
              >
                <span className="flex h-[56px] w-[56px] items-center justify-center rounded-full bg-ink text-canvas">▶</span>
              </button>
            </div>
            <div className="desktop:w-1/2">
              <InkLink href={spotlight.keynote.href}>{spotlight.keynote.label}</InkLink>
            </div>
          </Reveal>
        </div>
      </Container>
    </Section>
  );
}

export default Spotlight;
