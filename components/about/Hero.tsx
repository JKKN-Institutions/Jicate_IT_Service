import Image from "next/image";

import { Container, Section } from "@/components/ui";
import { Reveal } from "@/components/motion/Reveal";
import { hero } from "@/content/about";

import { GiantHeading } from "./parts";

/**
 * Hero — "Why We're Here": a 100px H1 on the left with a 34px belief line on
 * the right, then a full-width header image, then an inset (col 2) block of
 * lead + body paragraphs. LIGHT. Matches palantir.com/about top section.
 */
export function Hero() {
  return (
    <Section className="!pt-[120px] desktop:!pt-[100px]" aria-label={hero.title}>
      <Container>
        {/* Title row */}
        <Reveal className="grid grid-cols-1 items-start gap-[40px] desktop:grid-cols-12">
          <GiantHeading as="h1" className="desktop:col-span-7 max-w-[12ch]">
            {hero.title}
          </GiantHeading>
          <p className="text-[clamp(1.5rem,1rem+1.6vw,1.889rem)] leading-[1.176] text-ink desktop:col-start-9 desktop:col-span-4">
            {hero.believe}
          </p>
        </Reveal>

        {/* Full-width header image */}
        <Reveal className="mt-[clamp(40px,5vw,64px)] w-full overflow-hidden rounded-[2px]">
          <Image
            src={hero.image}
            alt={hero.imageAlt}
            width={1367}
            height={769}
            priority
            className="h-auto w-full object-cover"
          />
        </Reveal>

        {/* Inset lead + paragraphs (col 2 → 6) */}
        <Reveal className="mt-[clamp(56px,7vw,100px)] grid grid-cols-1 desktop:grid-cols-12">
          <div className="flex flex-col gap-[20px] desktop:col-start-2 desktop:col-span-5">
            <p className="text-[18px] leading-[1.39] text-ink">{hero.lead}</p>
            {hero.paragraphs.map((p) => (
              <p key={p} className="text-[18px] leading-[1.39] text-ink">
                {p}
              </p>
            ))}
          </div>
        </Reveal>
      </Container>
    </Section>
  );
}

export default Hero;
