import { Container, Section } from "@/components/ui";
import { Reveal } from "@/components/motion/Reveal";
import { intro } from "@/content/financial-services";

import { SubHeading } from "./parts";

/**
 * Intro — a large tagline on the left and two body paragraphs on the right
 * (reference parity).
 */
export function Intro() {
  return (
    <Section aria-label="Introduction">
      <Container>
        <Reveal className="grid grid-cols-1 gap-[40px] desktop:grid-cols-[1fr_1.4fr] desktop:gap-[80px]">
          <SubHeading className="max-w-[18ch]">{intro.tagline}</SubHeading>
          <div className="grid grid-cols-1 gap-[32px] tablet:grid-cols-2">
            {intro.paragraphs.map((p, i) => (
              <p key={i} className="text-[clamp(0.9375rem,1.1vw,1rem)]/[1.43] text-ink">
                {p}
              </p>
            ))}
          </div>
        </Reveal>
      </Container>
    </Section>
  );
}

export default Intro;
