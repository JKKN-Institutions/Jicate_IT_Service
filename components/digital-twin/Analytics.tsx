import { Container, Section } from "@/components/ui";
import { Reveal } from "@/components/motion/Reveal";
import { analytics } from "@/content/digital-twin";

import { GiantHeading, CapabilityColumns } from "./parts";

/**
 * "Analytics. Twin-Powered." — giant heading, a three-up capability stack, and
 * two captioned product screenshots. Light Section.
 */
export function Analytics() {
  return (
    <Section className="bg-canvas" aria-label={analytics.heading}>
      <Container>
        <Reveal>
          <GiantHeading className="max-w-[16ch]">{analytics.heading}</GiantHeading>
        </Reveal>

        <div className="mt-3xl">
          <CapabilityColumns items={analytics.items} />
        </div>

        <div className="mt-3xl flex flex-col gap-3xl">
          {analytics.shots.map((shot, i) => (
            <Reveal index={i} key={shot.image} className="flex flex-col gap-l">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={shot.image}
                alt={shot.alt}
                className="w-full select-none rounded-[6px] border border-ink/10"
                draggable={false}
              />
              <p className="max-w-[60ch] text-body-lg text-ink-light">{shot.caption}</p>
            </Reveal>
          ))}
        </div>
      </Container>
    </Section>
  );
}

export default Analytics;
