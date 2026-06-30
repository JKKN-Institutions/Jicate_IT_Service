import { Container, Section } from "@/components/ui";
import { Reveal } from "@/components/motion/Reveal";
import { work } from "@/content/palantir-for-rail";

import { SectionHeading, Eyebrow } from "./parts";

/**
 * "Our Work" — a top hairline, a 50px heading, then a four-column grid of
 * categories, each with an eyebrow label and a list of workflow items
 * (reference parity).
 */
export function Work() {
  return (
    <Section id="our-work" aria-label={work.heading}>
      <Container>
        <div className="border-t border-ink/15 pt-[60px]">
          <SectionHeading>{work.heading}</SectionHeading>

          <Reveal className="mt-[64px] grid grid-cols-1 gap-x-[32px] gap-y-[48px] tablet:grid-cols-2 desktop:grid-cols-4">
            {work.groups.map((g) => (
              <div key={g.category} className="flex flex-col gap-[20px]">
                <Eyebrow>{g.category}</Eyebrow>
                <ul className="flex flex-col gap-[12px]">
                  {g.items.map((item) => (
                    <li key={item} className="text-[clamp(0.9375rem,1.1vw,1rem)]/[1.43] text-ink">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </Reveal>
        </div>
      </Container>
    </Section>
  );
}

export default Work;
