import { Container, Section } from "@/components/ui";
import { Reveal } from "@/components/motion/Reveal";
import { aboutWork } from "@/content/automotive-mobility";

import { SectionHeading, InkLink } from "./parts";

/**
 * "About Our Work" — a section heading, then a 2-column split: a feature image
 * on the left and a stack of paragraphs + a link on the right (reference
 * parity). All paragraphs are placeholder copy.
 */
export function AboutWork() {
  return (
    <Section className="!pt-[60px] !pb-[80px]" aria-label="About Our Work">
      <Container>
        <Reveal>
          <SectionHeading>{aboutWork.heading}</SectionHeading>
        </Reveal>

        <div className="mt-[48px] grid grid-cols-1 gap-x-[60px] gap-y-[40px] desktop:grid-cols-2">
          <Reveal className="aspect-[16/11] w-full self-start overflow-hidden rounded-[2px] bg-band desktop:sticky desktop:top-[100px]">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={aboutWork.image} alt={aboutWork.alt} className="h-full w-full object-cover" loading="lazy" />
          </Reveal>

          <div className="flex flex-col gap-[20px]">
            {aboutWork.paragraphs.map((p, i) => (
              <Reveal key={i} index={i}>
                <p className="max-w-[54ch] text-body leading-[1.55] text-ink">{p}</p>
              </Reveal>
            ))}
            <Reveal index={aboutWork.paragraphs.length}>
              <InkLink href={aboutWork.link.href}>{aboutWork.link.label}</InkLink>
            </Reveal>
          </div>
        </div>
      </Container>
    </Section>
  );
}

export default AboutWork;
