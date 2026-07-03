import { Container, Section } from "@/components/ui";
import { Reveal } from "@/components/motion/Reveal";
import { officeLocation as o } from "@/content/contact";

/**
 * Office Location — a single registered office (India). No section title and no
 * world map (per request): just the address on the left and an embedded,
 * interactive Google Map on the right. Clicking the map (or the "View on Google
 * Maps" link) opens the location in Google Maps.
 */
export function OfficeLocations() {
  return (
    <Section className="bg-canvas" aria-label="Office location">
      <Container>
        <Reveal className="grid gap-2xl desktop:grid-cols-[0.9fr_1.1fr] desktop:gap-3xl">
          {/* Address */}
          <div className="flex flex-col gap-l">
            <h2 className="font-display text-[clamp(1.5rem,2.2vw,2rem)] font-normal leading-[1.15] tracking-[-0.02em] text-ink">
              {o.name}
            </h2>
            <address className="flex flex-col gap-xs text-body-lg not-italic text-ink-light">
              {o.address.map((line) => (
                <span key={line}>{line}</span>
              ))}
            </address>
            <a
              href={o.mapsLink}
              target="_blank"
              rel="noreferrer"
              className="group mt-s inline-flex w-fit items-center gap-s text-body-lg text-ink underline decoration-ink/30 underline-offset-4 transition-colors duration-200 hover:decoration-ink focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
            >
              View on Google Maps
              <span
                aria-hidden
                className="transition-transform duration-[var(--duration-micro)] group-hover:translate-x-[0.22em] motion-reduce:transform-none"
              >
                →
              </span>
            </a>
          </div>

          {/* Interactive Google Map (click to open the location in Google Maps) */}
          <div className="overflow-hidden rounded-[4px] border border-ink/15">
            <iframe
              title="JICATE SOLUTIONS PRIVATE LIMITED — office location on Google Maps"
              src={o.mapEmbed}
              className="block h-[360px] w-full desktop:h-[440px]"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>
        </Reveal>
      </Container>
    </Section>
  );
}

export default OfficeLocations;
