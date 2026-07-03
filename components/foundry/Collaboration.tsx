import { Container, Section } from "@/components/ui";
import { Reveal } from "@/components/motion/Reveal";
import { collaboration as c } from "@/content/foundry";

import { GiantHeading } from "./parts";

/**
 * Step Into Real-Time Collaboration — a 50px heading + 34px statement, then a
 * two-column row: the personas diagram (sticky on desktop) on the left, four
 * ruled feature blocks on the right.
 */
export function Collaboration() {
  return (
    <Section className="bg-canvas" aria-label="Step Into Real-Time Collaboration">
      <Container>
        <div className="mb-3xl grid grid-cols-1 items-start gap-x-2xl gap-y-l desktop:grid-cols-12">
          <Reveal className="desktop:col-span-6">
            <GiantHeading size="band" className="text-ink">
              {c.heading}
            </GiantHeading>
          </Reveal>
          <Reveal index={1} className="desktop:col-span-5 desktop:col-start-8">
            <p className="text-[clamp(1.5rem,1rem+1.4vw,1.889rem)] leading-[1.18] text-ink">
              {c.statement}
            </p>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 items-start gap-x-2xl gap-y-2xl desktop:grid-cols-12">
          <Reveal className="desktop:col-span-6 desktop:sticky desktop:top-[120px]">
            <div className="w-full overflow-hidden rounded-[6px]">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={c.image} alt={c.imageAlt} className="h-auto w-full" />
            </div>
          </Reveal>

          <div className="flex flex-col desktop:col-span-5 desktop:col-start-8">
            {c.features.map((f, i) => (
              <Reveal
                key={f.label}
                index={i}
                className="flex flex-col gap-s border-t border-ink/15 py-xl"
              >
                <p className="font-semibold text-body text-ink">{f.label}</p>
                <p className="text-body leading-[1.5] text-ink-light">{f.body}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}

export default Collaboration;
