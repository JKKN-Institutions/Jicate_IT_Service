import { Container, Section } from "@/components/ui";
import { Reveal } from "@/components/motion/Reveal";
import { howItWorks } from "@/content/palantir-for-rail";

import { SectionHeading } from "./parts";

/**
 * "How it Works" — a top hairline, a 50px heading, then a two-column split: the
 * Ontology diagram on the left and a stack of explanatory paragraphs on the
 * right (reference parity).
 */
export function HowItWorks() {
  return (
    <Section id="how-it-works" aria-label={howItWorks.heading}>
      <Container>
        <div className="border-t border-ink/15 pt-[60px]">
          <SectionHeading>{howItWorks.heading}</SectionHeading>

          <Reveal className="mt-[56px] grid grid-cols-1 items-center gap-[40px] desktop:grid-cols-[1.1fr_1fr] desktop:gap-[80px]">
            <div className="w-full overflow-hidden rounded-[2px]">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={howItWorks.image} alt={howItWorks.imageAlt} className="h-auto w-full" loading="lazy" />
            </div>
            <div className="flex flex-col gap-[24px]">
              {howItWorks.paragraphs.map((p, i) => (
                <p key={i} className="max-w-[48ch] text-[clamp(0.9375rem,1.1vw,1rem)]/[1.43] text-ink">
                  {p}
                </p>
              ))}
            </div>
          </Reveal>
        </div>
      </Container>
    </Section>
  );
}

export default HowItWorks;
