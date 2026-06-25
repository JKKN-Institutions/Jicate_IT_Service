import { Container, Section } from "@/components/ui";
import { Reveal } from "@/components/motion/Reveal";
import { dataDemocratized, type FeatureRow } from "@/content/pipeline-builder";

import { GiantHeading } from "./parts";

/**
 * "Data, Democratized." — a giant heading and supporting artwork, followed by a
 * stack of feature rows. Each row is a 2-column split: an arrow heading on the
 * left and a body paragraph on the right (reference parity).
 */
export function DataDemocratized() {
  return (
    <Section className="!pt-0 !pb-[100px]" aria-label="Data, Democratized">
      <Container>
        <Reveal>
          <GiantHeading className="max-w-[10ch]">{dataDemocratized.heading}</GiantHeading>
        </Reveal>

        <Reveal className="mt-[40px] max-w-[560px] overflow-hidden rounded-[2px]">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={dataDemocratized.image}
            alt={dataDemocratized.alt}
            className="h-auto w-full object-contain"
            loading="lazy"
          />
        </Reveal>

        <div className="mt-[60px] flex flex-col">
          {dataDemocratized.rows.map((row, i) => (
            <Reveal key={row.title} index={i}>
              <Row row={row} />
            </Reveal>
          ))}
        </div>
      </Container>
    </Section>
  );
}

function Row({ row }: { row: FeatureRow }) {
  return (
    <div className="grid grid-cols-1 items-start gap-x-[60px] gap-y-[12px] border-t border-ink/12 py-[36px] desktop:grid-cols-2">
      <h2 className="flex items-center gap-[0.4em] font-display text-[clamp(1.6667rem,2.6vw,1.8889rem)] font-normal leading-[1.18] tracking-normal text-ink">
        {row.title}
        <span aria-hidden className="text-ink-light">
          →
        </span>
      </h2>
      <p className="max-w-[52ch] text-body leading-[1.45] text-ink">{row.body}</p>
    </div>
  );
}

export default DataDemocratized;
