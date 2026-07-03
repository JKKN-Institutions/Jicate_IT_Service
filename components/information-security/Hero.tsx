import Image from "next/image";

import { Container, Section } from "@/components/ui";
import { Reveal } from "@/components/motion/Reveal";
import { hero } from "@/content/information-security";

import { GiantHeading } from "./parts";

/**
 * Hero — "InfoSec at Jicate": a 100px title left + 34px lead right, a
 * full-width starfield image, then two 18px paragraphs in the right column.
 * LIGHT.
 */
export function Hero() {
  return (
    <Section className="!pt-[120px] desktop:!pt-[100px]" aria-label={hero.title}>
      <Container>
        {/* Title row */}
        <Reveal className="grid grid-cols-1 items-start gap-[40px] desktop:grid-cols-12">
          <GiantHeading as="h1" className="max-w-[11ch] desktop:col-span-7">
            {hero.title}
          </GiantHeading>
          <p className="text-[clamp(1.5rem,1rem+1.6vw,1.889rem)] leading-[1.176] text-ink desktop:col-start-9 desktop:col-span-4">
            {hero.lead}
          </p>
        </Reveal>

        {/* Full-width image */}
        <Reveal className="mt-[clamp(40px,5vw,64px)] w-full overflow-hidden rounded-[2px]">
          <Image
            src={hero.image}
            alt={hero.imageAlt}
            width={1367}
            height={626}
            priority
            className="h-auto w-full object-cover"
          />
        </Reveal>

        {/* Below-image paragraphs (right column) */}
        <Reveal className="mt-[clamp(48px,6vw,80px)] grid grid-cols-1 desktop:grid-cols-12">
          <div className="flex flex-col gap-[20px] desktop:col-start-8 desktop:col-span-5">
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
