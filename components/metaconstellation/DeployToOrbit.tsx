import { Container, Section } from "@/components/ui";
import { Reveal } from "@/components/motion/Reveal";
import { deployToOrbit as s } from "@/content/metaconstellation";

import { GiantHeading, SectionIndex } from "./parts";

/**
 * 01 — "Deploy AI to Orbit". Numbered divider + a giant section headline, then
 * a 2-column block: the statement on the left and three large arrow-prefixed
 * bullets on the right (both at display scale). Dark Section.
 */
export function DeployToOrbit() {
  return (
    <Section tone="dark" className="bg-near-black" aria-label={s.kicker}>
      <Container>
        <Reveal className="flex flex-col gap-l">
          <SectionIndex index={s.index} />
          <GiantHeading size="hero">{s.kicker}</GiantHeading>
        </Reveal>

        <div className="mt-2xl grid-12 items-start gap-y-xl">
          <Reveal className="col-span-12 desktop:col-span-5">
            <p className="font-display text-display font-normal leading-[1.12] tracking-[-0.02em] text-offwhite">
              {s.heading}
            </p>
          </Reveal>

          <Reveal
            index={1}
            className="col-span-12 flex flex-col gap-l desktop:col-span-6 desktop:col-start-7"
          >
            {s.bullets.map((b) => (
              <p
                key={b}
                className="flex gap-s font-display text-display font-normal leading-[1.12] tracking-[-0.02em] text-offwhite"
              >
                <span aria-hidden className="text-offwhite/45">
                  ↳
                </span>
                <span>{b}</span>
              </p>
            ))}
          </Reveal>
        </div>
      </Container>
    </Section>
  );
}

export default DeployToOrbit;
