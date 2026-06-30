import { Container, Section } from "@/components/ui";
import { Reveal } from "@/components/motion/Reveal";
import { about } from "@/content/supply-chain";

import { GiantHeading } from "./parts";

/**
 * "About Our Work" — a giant heading, then a two-column split: a lead paragraph
 * on the left and a supply-chain network diagram on the right (reference parity).
 */
export function About() {
  return (
    <Section aria-label={about.heading}>
      <Container>
        <GiantHeading>{about.heading}</GiantHeading>

        <Reveal className="mt-[56px] grid grid-cols-1 items-center gap-[40px] desktop:grid-cols-[1fr_1fr] desktop:gap-[80px]">
          <p className="max-w-[44ch] text-[clamp(1rem,1.25vw,1.125rem)]/[1.389] text-ink">{about.body}</p>
          <div className="w-full overflow-hidden rounded-[2px]">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={about.image} alt={about.imageAlt} className="h-auto w-full" loading="lazy" />
          </div>
        </Reveal>
      </Container>
    </Section>
  );
}

export default About;
