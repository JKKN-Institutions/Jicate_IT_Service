import { Container, Section } from "@/components/ui";
import { Reveal } from "@/components/motion/Reveal";
import { intro } from "@/content/data-protection";

import { GiantHeading, InkLink } from "./parts";

/**
 * Intro band — 2-column. A giant statement heading on the left; the right column
 * holds a large lead statement, two body paragraphs, and a "Privacy & Civil
 * Liberties" link. Light Section.
 */
export function Intro() {
  return (
    <Section className="bg-canvas" aria-label="Compliance approach">
      <Container>
        <div className="grid-12 gap-y-2xl">
          <Reveal className="col-span-12 desktop:col-span-6">
            <GiantHeading>{intro.heading}</GiantHeading>
          </Reveal>

          <div className="col-span-12 flex flex-col gap-2xl desktop:col-span-5 desktop:col-start-8">
            <Reveal>
              <p className="text-[clamp(1.5rem,1rem+1.7vw,2.25rem)] leading-[1.18] tracking-[-0.01em] text-ink">
                {intro.statement}
              </p>
            </Reveal>

            <Reveal index={1} className="grid grid-cols-1 gap-2xl tablet:grid-cols-[1fr_auto] tablet:items-start">
              <div className="flex max-w-[44ch] flex-col gap-l">
                {intro.paragraphs.map((p) => (
                  <p key={p.slice(0, 24)} className="text-body leading-[1.5] text-ink-light">
                    {p}
                  </p>
                ))}
              </div>
              <div className="tablet:w-[220px]">
                <InkLink href={intro.link.href} className="text-body">
                  {intro.link.label}
                </InkLink>
              </div>
            </Reveal>
          </div>
        </div>
      </Container>
    </Section>
  );
}

export default Intro;
