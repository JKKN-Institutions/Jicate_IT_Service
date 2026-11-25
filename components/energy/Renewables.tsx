import { Container, Section } from "@/components/ui";
import { Reveal } from "@/components/motion/Reveal";
import { renewables } from "@/content/energy";

import { ArrowItem } from "./parts";
import { AnchorTitle } from "./blocks";

/**
 * Renewables — anchor title, then a wide image alongside grouped capability columns.
 */
export function Renewables() {
  return (
    <>
      <AnchorTitle id={renewables.id}>{renewables.title}</AnchorTitle>

      <Section className="bg-canvas" aria-label="Renewables capabilities">
        <Container>
          <div className="grid grid-cols-1 items-start gap-x-2xl gap-y-2xl desktop:grid-cols-12">
            <Reveal className="desktop:col-span-6">
              <div className="aspect-[3/2] w-full overflow-hidden rounded-[2px] bg-ink/[0.06]">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={renewables.image} alt={renewables.imageAlt} className="h-full w-full object-cover" loading="lazy" />
              </div>
            </Reveal>
            <div className="grid grid-cols-1 gap-2xl tablet:grid-cols-2 desktop:col-span-5 desktop:col-start-8">
              {renewables.columns.map((c, i) => (
                <Reveal key={c.title} index={i} className="flex flex-col gap-m">
                  <h4 className="text-body-lg font-semibold text-ink">{c.title}</h4>
                  <div className="flex flex-col gap-s">
                    {c.items.map((it) => (
                      <ArrowItem key={it}>{it}</ArrowItem>
                    ))}
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}

export default Renewables;
