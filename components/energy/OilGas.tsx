import { Container, Section } from "@/components/ui";
import { Reveal } from "@/components/motion/Reveal";
import { oilGas } from "@/content/energy";

import { GiantHeading, ArrowItem, Eyebrow } from "./parts";
import { AnchorTitle, ColumnsBlock, VideoQuote, VideoBlock } from "./blocks";

const subHead =
  "font-display text-[clamp(1.75rem,1rem+2.6vw,2.75rem)] font-normal leading-[1.05] tracking-[-0.02em] text-ink";

/** Oil & Gas — the deepest section: intro, then Upstream → Downstream sub-blocks. */
export function OilGas() {
  return (
    <>
      <AnchorTitle id={oilGas.id}>{oilGas.title}</AnchorTitle>

      {/* Intro: ontology image left, text right */}
      <Section className="bg-canvas" aria-label="Ontology">
        <Container>
          <div className="grid-12 items-center gap-y-xl">
            <Reveal className="col-span-12 desktop:col-span-6">
              <div className="aspect-[4/3] w-full overflow-hidden rounded-[2px] bg-ink/[0.04]">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={oilGas.intro.image} alt={oilGas.intro.alt} className="h-full w-full object-cover" loading="lazy" />
              </div>
            </Reveal>
            <Reveal className="col-span-12 desktop:col-span-5 desktop:col-start-8">
              <p className="text-[clamp(1.25rem,1rem+1vw,1.625rem)] leading-[1.3] text-ink">
                {oilGas.intro.body}
              </p>
            </Reveal>
          </div>
        </Container>
      </Section>

      {/* Upstream */}
      <Section className="bg-canvas !pb-0" aria-label={oilGas.upstream.heading}>
        <Container>
          <Reveal>
            <h3 className={subHead}>
              {oilGas.upstream.heading} <span aria-hidden className="text-ink-light">↘</span>
            </h3>
          </Reveal>
        </Container>
      </Section>
      <VideoQuote
        eyebrow={oilGas.upstream.quoteEyebrow}
        video={oilGas.upstream.video}
        quote={oilGas.upstream.quote}
        attribution={oilGas.upstream.attribution}
      />

      {/* Offshore — 3-col capabilities */}
      <ColumnsBlock heading={oilGas.offshore.heading} columns={oilGas.offshore.columns} cols={3} />

      {/* Onshore — video + lead + bullets */}
      <Section className="bg-canvas" aria-label={oilGas.onshore.heading}>
        <Container>
          <Reveal className="mb-2xl">
            <h3 className={subHead}>
              {oilGas.onshore.heading} <span aria-hidden className="text-ink-light">↘</span>
            </h3>
          </Reveal>
          <Reveal>
            <VideoBlock src={oilGas.onshore.video} />
          </Reveal>
          <div className="mt-2xl grid grid-cols-1 gap-x-2xl gap-y-l desktop:grid-cols-2">
            <Reveal className="flex flex-col gap-m">
              <h4 className="text-body-lg font-semibold text-ink">{oilGas.onshore.lead}</h4>
              <p className="text-body leading-[1.45] text-ink">{oilGas.onshore.body}</p>
            </Reveal>
            <Reveal index={1} className="flex flex-col gap-m">
              {oilGas.onshore.bullets.map((b) => (
                <ArrowItem key={b.slice(0, 24)}>{b}</ArrowItem>
              ))}
            </Reveal>
          </div>
        </Container>
      </Section>

      {/* Finance — 5 short capability rows + Spotlight */}
      <ColumnsBlock heading={oilGas.finance.heading} columns={oilGas.finance.columns} cols={3} />

      <Section className="bg-canvas" aria-label={oilGas.finance.spotlight.eyebrow}>
        <Container>
          <Reveal className="mb-l">
            <Eyebrow>{oilGas.finance.spotlight.eyebrow}</Eyebrow>
          </Reveal>
          <Reveal>
            <div className="aspect-[16/9] w-full overflow-hidden rounded-[2px] bg-ink/[0.06]">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={oilGas.finance.spotlight.image}
                alt={oilGas.finance.spotlight.alt}
                className="h-full w-full object-cover"
                loading="lazy"
              />
            </div>
          </Reveal>
          <Reveal index={1} className="mt-l">
            <p className="max-w-[70ch] text-body leading-[1.5] text-ink-light">
              {oilGas.finance.spotlight.caption}
            </p>
          </Reveal>
        </Container>
      </Section>

      {/* Midstream */}
      <Section className="bg-canvas" aria-label={oilGas.midstream.heading}>
        <Container>
          <Reveal className="mb-2xl">
            <h3 className={subHead}>{oilGas.midstream.heading}</h3>
          </Reveal>

          {/* Chart + decision support tool */}
          <Reveal>
            <div className="aspect-[16/9] w-full overflow-hidden rounded-[2px] bg-ink/[0.04]">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={oilGas.midstream.chart} alt={oilGas.midstream.chartAlt} className="h-full w-full object-contain" loading="lazy" />
            </div>
          </Reveal>
          <Reveal index={1} className="mt-2xl max-w-[60ch]">
            <h4 className="mb-m font-display text-[clamp(1.4rem,1rem+1.4vw,2rem)] font-normal leading-[1.1] tracking-[-0.01em] text-ink">
              {oilGas.midstream.chartHeading}
            </h4>
            <p className="text-body leading-[1.5] text-ink">{oilGas.midstream.chartBody}</p>
          </Reveal>

          {/* Liquids & Gas */}
          <div className="mt-3xl grid grid-cols-1 gap-x-2xl gap-y-l desktop:grid-cols-[auto_1fr] desktop:items-start">
            <Reveal>
              <h4 className={subHead}>
                {oilGas.midstream.liquidsHeading} <span aria-hidden className="text-ink-light">↘</span>
              </h4>
            </Reveal>
            <Reveal index={1} className="flex max-w-[60ch] flex-col gap-l">
              {oilGas.midstream.liquidsBody.map((p) => (
                <p key={p.slice(0, 24)} className="text-body leading-[1.5] text-ink">{p}</p>
              ))}
            </Reveal>
          </div>

          {/* Case study image + text */}
          <div className="mt-3xl grid grid-cols-1 items-center gap-y-xl desktop:grid-cols-12">
            <Reveal className="desktop:col-span-6">
              <div className="aspect-[16/10] w-full overflow-hidden rounded-[2px] bg-ink/[0.06]">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={oilGas.midstream.caseImage} alt="Midstream case study" className="h-full w-full object-cover" loading="lazy" />
              </div>
            </Reveal>
            <Reveal className="flex flex-col gap-l desktop:col-span-5 desktop:col-start-8">
              <h4 className="text-body-lg font-semibold text-ink">{oilGas.midstream.caseHeading}</h4>
              <p className="text-body leading-[1.5] text-ink">{oilGas.midstream.caseBody}</p>
            </Reveal>
          </div>

          {/* Capability image cards */}
          <div className="mt-3xl grid grid-cols-1 gap-2xl tablet:grid-cols-3">
            {oilGas.midstream.cards.map((card, i) => (
              <Reveal key={card.title} index={i} className="flex flex-col gap-l">
                <div className="aspect-[4/3] w-full overflow-hidden rounded-[2px] bg-ink/[0.06]">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={card.image} alt={card.alt} className="h-full w-full object-cover" loading="lazy" />
                </div>
                <h4 className="text-body-lg font-semibold text-ink">{card.title}</h4>
                <p className="text-body leading-[1.45] text-ink">{card.body}</p>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      {/* Downstream */}
      <Section className="bg-canvas !pb-0" aria-label={oilGas.downstream.heading}>
        <Container>
          <Reveal>
            <h3 className={subHead}>
              {oilGas.downstream.heading} <span aria-hidden className="text-ink-light">↘</span>
            </h3>
          </Reveal>
        </Container>
      </Section>
      <VideoQuote
        eyebrow={oilGas.downstream.quoteEyebrow}
        video={oilGas.downstream.video}
        quote={oilGas.downstream.quote}
        attribution={oilGas.downstream.attribution}
      />
      <ColumnsBlock heading={oilGas.downstream.refineryHeading} columns={oilGas.downstream.refineryColumns} cols={3} />
    </>
  );
}

export default OilGas;
