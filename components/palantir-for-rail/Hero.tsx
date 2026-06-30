import { Container, Section } from "@/components/ui";
import { Reveal } from "@/components/motion/Reveal";
import { hero } from "@/content/palantir-for-rail";

import { GiantHeading, InkLink } from "./parts";

/**
 * Hero — an oversized title, then a two-column split: a hero image on the left
 * and a stack of lead paragraphs with a "Start the conversation" link on the
 * right (reference parity).
 */
export function Hero() {
  return (
    <Section className="!pt-[60px] desktop:!pt-[80px]" aria-label={hero.title}>
      <Container>
        <Reveal>
          <GiantHeading as="h1">{hero.title}</GiantHeading>
        </Reveal>

        <Reveal className="mt-[64px] grid grid-cols-1 items-start gap-[40px] desktop:mt-[96px] desktop:grid-cols-[1fr_1fr] desktop:gap-[80px]">
          <div className="aspect-[16/11] w-full overflow-hidden rounded-[2px] bg-ink/[0.04]">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={hero.image} alt={hero.alt} className="h-full w-full object-cover" loading="eager" />
          </div>

          <div className="flex flex-col gap-[24px]">
            {hero.paragraphs.map((p, i) => (
              <p key={i} className="max-w-[40ch] text-[clamp(1rem,1.25vw,1.125rem)]/[1.389] text-ink">
                {p}
              </p>
            ))}
            <div className="mt-[16px]">
              <InkLink href={hero.cta.href}>{hero.cta.label}</InkLink>
            </div>
          </div>
        </Reveal>
      </Container>
    </Section>
  );
}

export default Hero;
