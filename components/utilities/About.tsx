import { Container, Section } from "@/components/ui";
import { Reveal } from "@/components/motion/Reveal";
import { about } from "@/content/utilities";

import { SectionHeading, SubHeading } from "./parts";

/**
 * About Our Work — a 50px section heading, then a two-column split: a 34px lead
 * over two body paragraphs on the left, and the ontology-stack diagram on the
 * right (reference parity). LIGHT.
 */
export function About() {
  return (
    <Section id="about-our-work" aria-label={about.eyebrow}>
      <Container>
        <div className="border-t border-ink/15 pt-[60px]">
          <SectionHeading>{about.eyebrow}</SectionHeading>

          <Reveal className="mt-[48px] grid grid-cols-1 items-start gap-[40px] desktop:mt-[64px] desktop:grid-cols-[1fr_1fr] desktop:gap-[60px]">
            <div className="flex flex-col gap-[28px]">
              <SubHeading as="p" className="max-w-[28ch]">
                {about.lead}
              </SubHeading>
              {about.paragraphs.map((p, i) => (
                <p key={i} className="max-w-[58ch] text-[16px]/[1.43] text-ink">
                  {p}
                </p>
              ))}
            </div>

            <div className="w-full overflow-hidden rounded-[2px]">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={about.image}
                alt={about.imageAlt}
                className="h-auto w-full object-contain"
                loading="lazy"
              />
            </div>
          </Reveal>
        </div>
      </Container>
    </Section>
  );
}

export default About;
