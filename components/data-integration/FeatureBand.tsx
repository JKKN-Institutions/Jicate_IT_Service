import { Container, Section } from "@/components/ui";
import { Reveal } from "@/components/motion/Reveal";
import { cn } from "@/lib/utils";
import type { FeatureBand as FeatureBandData } from "@/content/data-integration";

import { GiantHeading, InkLink } from "./parts";

/**
 * Reusable big-headline capability band (reference parity).
 *
 * Layout: a giant section heading, then a 2-column split — a sticky product
 * screenshot on one side and a stack of capability blocks (uppercase label +
 * body + optional inked link) on the other. The image side alternates per band
 * to reproduce the reference's left/right rhythm.
 */
export function FeatureBand({
  band,
  imageSide = "left",
}: {
  band: FeatureBandData;
  imageSide?: "left" | "right";
}) {
  return (
    <Section className="!py-[60px]" aria-label={band.title} id={band.id}>
      <Container>
        <Reveal>
          <GiantHeading className="max-w-[14ch]">{band.title}</GiantHeading>
        </Reveal>

        <div
          className={cn(
            "mt-[60px] grid grid-cols-1 gap-x-[60px] gap-y-[48px] desktop:grid-cols-2",
            imageSide === "right" && "desktop:[&>*:first-child]:order-2",
          )}
        >
          {/* Media column — sticky on desktop */}
          {band.image ? (
            <Reveal className="desktop:sticky desktop:top-[100px] desktop:self-start">
              <figure className="flex flex-col gap-[20px]">
                <div className="aspect-[16/10] w-full overflow-hidden rounded-[2px] border border-ink/10 bg-surface-medium">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={band.image}
                    alt={band.alt ?? ""}
                    className="h-full w-full object-cover"
                    loading="lazy"
                  />
                </div>
                {band.imageLink ? (
                  <figcaption>
                    <InkLink href={band.imageLink.href}>{band.imageLink.label}</InkLink>
                  </figcaption>
                ) : null}
              </figure>
            </Reveal>
          ) : (
            <div aria-hidden />
          )}

          {/* Capability stack */}
          <div className="flex flex-col gap-[44px]">
            {band.features.map((f, i) => (
              <Reveal key={f.eyebrow} index={i}>
                <div className="flex flex-col gap-[16px]">
                  <h3 className="font-mono text-[0.7222rem] font-medium uppercase tracking-[0.06em] text-ink">
                    {f.eyebrow}
                  </h3>
                  <p className="max-w-[52ch] text-body leading-[1.45] text-ink">{f.body}</p>
                  {f.link ? <InkLink href={f.link.href}>{f.link.label}</InkLink> : null}
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}

export default FeatureBand;
