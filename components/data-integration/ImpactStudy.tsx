import { Container, Section } from "@/components/ui";
import { Reveal } from "@/components/motion/Reveal";
import { impactStudy } from "@/content/data-integration";

import { GiantHeading, InkLink } from "./parts";

/**
 * Impact study — "The Challenge". A giant heading and narrative on the left,
 * with the partner photo, headline metrics, and problem-area tags on the right
 * (reference parity).
 */
export function ImpactStudy() {
  return (
    <Section className="!py-[80px]" aria-label="Impact study">
      <Container>
        <div className="grid grid-cols-1 gap-x-[60px] gap-y-[40px] desktop:grid-cols-[1fr_440px]">
          {/* Narrative */}
          <Reveal className="flex flex-col">
            <GiantHeading className="max-w-[10ch]">{impactStudy.heading}</GiantHeading>
            <p className="mt-[36px] max-w-[52ch] text-body-lg leading-[1.4] text-ink">
              {impactStudy.body}
            </p>
          </Reveal>

          {/* Aside: partner, image, metrics, tags */}
          <Reveal index={1} className="flex flex-col gap-[28px]">
            <span className="font-mono text-caption uppercase tracking-[0.08em] text-ink-light">
              {impactStudy.eyebrow} {"//"} {impactStudy.partner}
            </span>

            <div className="aspect-[16/10] w-full overflow-hidden rounded-[2px] bg-surface-medium">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={impactStudy.image}
                alt={impactStudy.alt}
                className="h-full w-full object-cover"
                loading="lazy"
              />
            </div>

            <dl className="flex flex-col gap-[20px]">
              {impactStudy.metrics.map((m) => (
                <div key={m.label} className="border-t border-ink/15 pt-[16px]">
                  <dt className="font-display text-[clamp(2rem,4vw,2.7778rem)] font-normal leading-[1.05] tracking-[-0.01em] text-ink">
                    {m.value}
                  </dt>
                  <dd className="mt-[6px] text-body-sm text-ink-medium">{m.label}</dd>
                </div>
              ))}
            </dl>

            <ul className="flex flex-col gap-[10px]">
              {impactStudy.tags.map((t) => (
                <li key={t.label}>
                  <InkLink href={t.href}>{t.label}</InkLink>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </Container>
    </Section>
  );
}

export default ImpactStudy;
