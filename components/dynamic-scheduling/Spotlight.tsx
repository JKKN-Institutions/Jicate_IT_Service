import { Container, Section } from "@/components/ui";
import { Reveal } from "@/components/motion/Reveal";
import { spotlight } from "@/content/dynamic-scheduling";

import { SectionHeading, InkLink } from "./parts";

/**
 * "Spotlight" — section heading, a feature title, a media figure (the
 * reference's CERAWeek photo isn't shipped → neutral placeholder), a short
 * description, and a "Learn More" link (reference parity).
 */
export function Spotlight() {
  return (
    <Section className="!pt-0 !pb-[100px]" aria-label="Spotlight">
      <Container>
        <Reveal>
          <SectionHeading>{spotlight.heading}</SectionHeading>
        </Reveal>

        <div className="mt-[48px] grid grid-cols-1 gap-x-[60px] gap-y-[32px] desktop:grid-cols-[1fr_1fr]">
          <Reveal className="flex flex-col justify-between gap-[28px]">
            <h3 className="max-w-[18ch] font-display text-[clamp(1.6667rem,2.6vw,2.1111rem)] font-normal leading-[1.15] tracking-[-0.01em] text-ink">
              {spotlight.title}
            </h3>
            <div className="flex flex-col gap-[20px]">
              <p className="max-w-[48ch] text-body leading-[1.45] text-ink-medium">{spotlight.body}</p>
              <InkLink href={spotlight.link.href}>{spotlight.link.label}</InkLink>
            </div>
          </Reveal>

          <Reveal index={1}>
            <div className="aspect-[16/10] w-full overflow-hidden rounded-[2px] bg-band">
              {spotlight.image ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  src={spotlight.image}
                  alt={spotlight.alt}
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
              ) : (
                <div
                  aria-hidden
                  className="flex h-full w-full items-center justify-center bg-[radial-gradient(120%_120%_at_30%_25%,#f3f3f3_0%,#e7e7e7_100%)]"
                >
                  <svg viewBox="0 0 24 24" className="h-[44px] w-[44px] text-ink/20" fill="currentColor">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
              )}
            </div>
          </Reveal>
        </div>
      </Container>
    </Section>
  );
}

export default Spotlight;
