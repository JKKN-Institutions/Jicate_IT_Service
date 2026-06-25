import { Container, Section } from "@/components/ui";
import { Reveal } from "@/components/motion/Reveal";
import { officeLocations as o } from "@/content/contact";

import { GiantHeading } from "./parts";

/**
 * Office Locations — giant heading over regional rows. Each region is a 2-column
 * row: region name on the left, a 4-column office grid (country eyebrow + city)
 * on the right. A world map closes the section. Light Section.
 */
export function OfficeLocations() {
  return (
    <Section className="bg-canvas" aria-label={o.heading}>
      <Container>
        <Reveal>
          <GiantHeading as="h2">{o.heading}</GiantHeading>
        </Reveal>

        <div className="mt-3xl flex flex-col gap-3xl">
          {o.regions.map((region) => (
            <Reveal key={region.name} className="grid-12 gap-y-l">
              <h3 className="col-span-12 font-display text-display font-normal leading-[1.08] tracking-[-0.02em] text-ink desktop:col-span-3">
                {region.name}
              </h3>

              <div className="col-span-12 desktop:col-span-9">
                <div className="grid grid-cols-2 gap-x-m gap-y-2xl tablet:grid-cols-4">
                  {region.offices.map((office) => (
                    <div
                      key={`${region.name}-${office.city}`}
                      className="flex min-w-0 flex-col gap-xs"
                    >
                      <span className="font-mono text-caption uppercase tracking-[0.05em] text-ink-light">
                        {office.country}
                      </span>
                      <span className="font-display text-[clamp(1.15rem,1rem+0.6vw,1.45rem)] font-normal leading-[1.2] text-ink">
                        {office.city}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-3xl">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={o.mapImage}
            alt={o.mapAlt}
            className="w-full select-none"
            draggable={false}
          />
        </Reveal>
      </Container>
    </Section>
  );
}

export default OfficeLocations;
