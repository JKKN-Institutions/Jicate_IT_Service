import { Container, Section } from "@/components/ui";
import { Reveal } from "@/components/motion/Reveal";
import { partnerships } from "@/content/telecommunications";

import { GiantHeading, InkLink } from "./parts";

/**
 * Partnerships — a heading and a two-column intro, then two case-study blocks
 * (heading + body + link on the left, an image on the right; alternating).
 */
export function Partnerships() {
  return (
    <Section className="bg-canvas" aria-label={partnerships.heading}>
      <Container>
        <div className="mb-3xl grid grid-cols-1 gap-x-2xl gap-y-l desktop:grid-cols-12">
          <Reveal className="desktop:col-span-5">
            <GiantHeading size="band" className="text-ink">
              {partnerships.heading}
            </GiantHeading>
          </Reveal>
          <Reveal index={1} className="flex flex-col gap-l desktop:col-span-6 desktop:col-start-7">
            {partnerships.intro.map((p) => (
              <p key={p.slice(0, 20)} className="text-body leading-[1.5] text-ink">
                {p}
              </p>
            ))}
          </Reveal>
        </div>

        <div className="flex flex-col gap-3xl">
          {partnerships.cases.map((c) => (
            <Reveal
              key={c.heading}
              className="grid grid-cols-1 gap-x-2xl gap-y-l desktop:grid-cols-2"
            >
              <div className="flex flex-col gap-l">
                <GiantHeading size="band" className="text-ink">
                  {c.heading}
                </GiantHeading>
                <p className="text-body leading-[1.5] text-ink-light">{c.body}</p>
                <InkLink href="#" className="self-start">
                  {c.link}
                </InkLink>
              </div>
              <div className="aspect-[16/10] w-full overflow-hidden rounded-[2px] bg-ink/[0.06]">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={c.image} alt={c.imageAlt} className="h-full w-full object-cover" loading="lazy" />
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </Section>
  );
}

export default Partnerships;
