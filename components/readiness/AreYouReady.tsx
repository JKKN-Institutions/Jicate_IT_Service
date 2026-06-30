import { Container, Section } from "@/components/ui";
import { Reveal } from "@/components/motion/Reveal";
import { areYouReady as ar } from "@/content/readiness";

import { GiantHeading, InkLink } from "./parts";

/**
 * "Are you ready?" — a giant heading, then a two-column block: a portrait image
 * on the left and, on the right, a big question, supporting body copy, and a
 * reach-out link.
 */
export function AreYouReady() {
  return (
    <Section className="bg-canvas" aria-label={ar.heading}>
      <Container>
        <Reveal className="mb-2xl">
          <GiantHeading size="anchor" className="text-ink">
            {ar.heading}
          </GiantHeading>
        </Reveal>

        <div className="grid grid-cols-1 gap-x-2xl gap-y-2xl desktop:grid-cols-2">
          <Reveal className="aspect-[3/4] w-full overflow-hidden bg-ink/[0.06]">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={ar.image} alt={ar.imageAlt} className="h-full w-full object-cover" loading="lazy" />
          </Reveal>

          <Reveal index={1} className="flex flex-col gap-2xl">
            <p className="whitespace-pre-line text-[clamp(1.5rem,1rem+1.4vw,1.889rem)] leading-[1.18] text-ink">
              {ar.question}
            </p>

            <div className="grid grid-cols-1 gap-x-2xl gap-y-l tablet:grid-cols-2">
              <div className="flex flex-col gap-l">
                {ar.body.map((p) => (
                  <p key={p.slice(0, 20)} className="text-body leading-[1.5] text-ink-light">
                    {p}
                  </p>
                ))}
              </div>
              <div>
                <InkLink href="#" className="text-body">
                  {ar.link}
                </InkLink>
              </div>
            </div>
          </Reveal>
        </div>
      </Container>
    </Section>
  );
}

export default AreYouReady;
