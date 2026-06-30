import { Container, Section } from "@/components/ui";
import { Reveal } from "@/components/motion/Reveal";
import { cn } from "@/lib/utils";
import type { Column } from "@/content/energy";

import { GiantHeading, ArrowItem, Eyebrow } from "./parts";

/** Giant anchor section divider heading (Oil & Gas / Renewables / Carbon). */
export function AnchorTitle({ id, children }: { id: string; children: React.ReactNode }) {
  return (
    <Section id={id} className="bg-canvas !pb-0 scroll-mt-[160px]" aria-label={String(children)}>
      <Container>
        <Reveal>
          <GiantHeading as="h2" size="anchor">
            {children}
          </GiantHeading>
        </Reveal>
      </Container>
    </Section>
  );
}

/** A "↘" sub-heading + a responsive grid of capability columns. */
export function ColumnsBlock({
  heading,
  columns,
  cols = 3,
  className,
}: {
  heading?: string;
  columns: Column[];
  cols?: 2 | 3 | 4;
  className?: string;
}) {
  const colClass =
    cols === 2
      ? "tablet:grid-cols-2"
      : cols === 4
        ? "tablet:grid-cols-2 desktop:grid-cols-4"
        : "tablet:grid-cols-2 desktop:grid-cols-3";

  return (
    <Section className={cn("bg-canvas", className)} aria-label={heading ?? "Capabilities"}>
      <Container>
        {heading && (
          <Reveal className="mb-2xl">
            <h3 className="font-display text-[clamp(1.75rem,1rem+2.6vw,2.75rem)] font-normal leading-[1.05] tracking-[-0.02em] text-ink">
              {heading} <span aria-hidden className="text-ink-light">↘</span>
            </h3>
          </Reveal>
        )}
        <div className={cn("grid grid-cols-1 gap-x-2xl gap-y-2xl", colClass)}>
          {columns.map((c, i) => (
            <Reveal key={c.title} index={i} className="flex flex-col gap-l">
              <h4 className="text-body-lg font-semibold text-ink">{c.title}</h4>
              {c.lead && <p className="text-body leading-[1.45] text-ink">{c.lead}</p>}
              {c.items.length > 0 && (
                <div className="flex flex-col gap-m">
                  {c.items.map((it) => (
                    <ArrowItem key={it.slice(0, 24)}>{it}</ArrowItem>
                  ))}
                </div>
              )}
            </Reveal>
          ))}
        </div>
      </Container>
    </Section>
  );
}

/** A full-width video player (mp4). Falls back to a poster placeholder. */
export function VideoBlock({
  src,
  poster,
  className,
}: {
  src: string;
  poster?: string;
  className?: string;
}) {
  return (
    <div className={cn("aspect-video w-full overflow-hidden rounded-[2px] bg-ink/[0.06]", className)}>
      {/* eslint-disable-next-line jsx-a11y/media-has-caption */}
      <video
        className="h-full w-full object-cover"
        controls
        muted
        playsInline
        preload="metadata"
        poster={poster}
      >
        <source src={src} type="video/mp4" />
      </video>
    </div>
  );
}

/** Video + large pull-quote + attribution (Upstream / Downstream case studies). */
export function VideoQuote({
  eyebrow,
  heading,
  video,
  quote,
  attribution,
}: {
  eyebrow?: string;
  heading?: string;
  video: string;
  quote: string;
  attribution: string;
}) {
  return (
    <Section className="bg-canvas" aria-label={heading ?? "Case study"}>
      <Container>
        {eyebrow && (
          <Reveal className="mb-l">
            <Eyebrow>{eyebrow}</Eyebrow>
          </Reveal>
        )}
        <Reveal>
          <VideoBlock src={video} />
        </Reveal>
        <div className="mt-2xl grid grid-cols-1 gap-l desktop:grid-cols-[1fr_auto] desktop:items-end">
          <Reveal>
            <p className="max-w-[40ch] font-display text-[clamp(1.5rem,1rem+1.7vw,2.25rem)] font-normal leading-[1.12] tracking-[-0.01em] text-ink">
              {quote}
            </p>
          </Reveal>
          <Reveal index={1}>
            <p className="text-body-lg text-ink-light desktop:text-right">{attribution}</p>
          </Reveal>
        </div>
      </Container>
    </Section>
  );
}
