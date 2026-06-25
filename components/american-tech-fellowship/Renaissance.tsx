import { Container, Section } from "@/components/ui";
import { Reveal } from "@/components/motion/Reveal";
import { renaissance } from "@/content/american-tech-fellowship";

import { SectionHeading, InkLink } from "./parts";

/**
 * "A New Technological Renaissance" — a section heading, then a long essay laid
 * out in two columns (reference parity). All paragraphs are placeholder copy.
 */
export function Renaissance() {
  const { paragraphs } = renaissance;
  const mid = Math.ceil(paragraphs.length / 2);
  const left = paragraphs.slice(0, mid);
  const right = paragraphs.slice(mid);

  return (
    <Section className="!pt-[40px] !pb-[80px]" aria-label="A New Technological Renaissance">
      <Container>
        <Reveal>
          <SectionHeading className="max-w-[14ch]">{renaissance.heading}</SectionHeading>
        </Reveal>

        <div className="mt-[48px] grid grid-cols-1 gap-x-[60px] gap-y-[20px] desktop:grid-cols-2">
          <Reveal className="flex flex-col gap-[20px]">
            {left.map((p, i) => (
              <p key={i} className="max-w-[58ch] text-body leading-[1.55] text-ink">
                {p}
              </p>
            ))}
          </Reveal>
          <Reveal index={1} className="flex flex-col gap-[20px]">
            {right.map((p, i) => (
              <p key={i} className="max-w-[58ch] text-body leading-[1.55] text-ink">
                {p}
              </p>
            ))}
            <InkLink href={renaissance.link.href}>{renaissance.link.label}</InkLink>
          </Reveal>
        </div>
      </Container>
    </Section>
  );
}

export default Renaissance;
