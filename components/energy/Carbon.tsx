import { Container, Section } from "@/components/ui";
import { Reveal } from "@/components/motion/Reveal";
import { carbon } from "@/content/energy";

import { Eyebrow } from "./parts";
import { AnchorTitle, ColumnsBlock } from "./blocks";

const subHead =
  "font-display text-[clamp(1.75rem,1rem+2.6vw,2.75rem)] font-normal leading-[1.05] tracking-[-0.02em] text-ink";

/** Carbon — anchor title, partner video + logos, Sustainability, Case Studies, Agora. */
export function Carbon() {
  return (
    <>
      <AnchorTitle id={carbon.id}>{carbon.title}</AnchorTitle>

      {/* Video + partner logos */}
      <Section className="bg-canvas" aria-label="Carbon partners">
        <Container>
          <Reveal>
            <div className="aspect-video w-full overflow-hidden rounded-[2px] bg-ink/[0.06]">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={carbon.videoThumb} alt="Sustainability video thumbnail" className="h-full w-full object-cover" loading="lazy" />
            </div>
          </Reveal>
          <div className="mt-2xl grid grid-cols-1 gap-2xl tablet:grid-cols-2">
            {carbon.logos.map((l, i) => (
              <Reveal key={l.src + i} index={i} className="flex flex-col gap-l">
                <div className="flex h-[48px] items-center">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={l.src} alt={l.alt} className="max-h-[40px] w-auto object-contain" loading="lazy" />
                </div>
                <p className="max-w-[44ch] text-body leading-[1.5] text-ink">{l.caption}</p>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      {/* Sustainability */}
      <Section className="bg-canvas" aria-label={carbon.sustainability.heading}>
        <Container>
          <div className="grid-12 gap-y-xl">
            <Reveal className="col-span-12 desktop:col-span-6">
              <h3 className={subHead}>{carbon.sustainability.heading}</h3>
            </Reveal>
            <Reveal className="col-span-12 flex flex-col gap-l desktop:col-span-5 desktop:col-start-8">
              <p className="text-[clamp(1.25rem,1rem+1vw,1.625rem)] leading-[1.3] text-ink">{carbon.sustainability.lead}</p>
              <p className="text-body leading-[1.5] text-ink-light">{carbon.sustainability.body}</p>
            </Reveal>
          </div>
        </Container>
      </Section>
      <ColumnsBlock columns={carbon.sustainability.columns} cols={3} className="!pt-0" />

      {/* Case studies */}
      <Section className="bg-canvas" aria-label={carbon.caseStudies.heading}>
        <Container>
          <Reveal className="mb-l">
            <Eyebrow>{carbon.caseStudies.eyebrow}</Eyebrow>
          </Reveal>
          <Reveal className="mb-2xl">
            <h3 className={subHead}>{carbon.caseStudies.heading}</h3>
          </Reveal>
          <div className="grid grid-cols-1 gap-2xl tablet:grid-cols-2">
            {carbon.caseStudies.items.map((it, i) => (
              <Reveal key={it.title} index={i} className="flex flex-col gap-m">
                <h4 className="text-body-lg font-semibold text-ink">{it.title}</h4>
                <p className="text-body leading-[1.5] text-ink">{it.body}</p>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      {/* Agora */}
      <Section className="bg-canvas" aria-label={carbon.agora.heading}>
        <Container>
          <Reveal className="mb-2xl">
            <h3 className={subHead}>
              {carbon.agora.heading} <span aria-hidden className="text-ink-light">↘</span>
            </h3>
          </Reveal>
          <div className="grid grid-cols-1 items-start gap-x-2xl gap-y-xl desktop:grid-cols-12">
            <Reveal className="flex flex-col gap-l desktop:col-span-6">
              <h4 className="text-body-lg font-semibold text-ink">{carbon.agora.productName}</h4>
              <p className="text-[clamp(1.15rem,1rem+0.7vw,1.45rem)] leading-[1.3] text-ink">{carbon.agora.body}</p>
              <div className="mt-m aspect-video w-full overflow-hidden rounded-[2px] bg-ink/[0.06]">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={carbon.agora.image} alt={carbon.agora.alt} className="h-full w-full object-cover" loading="lazy" />
              </div>
            </Reveal>
            <Reveal className="flex flex-col gap-l desktop:col-span-5 desktop:col-start-8">
              {carbon.agora.paragraphs.map((p) => (
                <p key={p.slice(0, 24)} className="text-body leading-[1.5] text-ink">{p}</p>
              ))}
            </Reveal>
          </div>
        </Container>
      </Section>
    </>
  );
}

export default Carbon;
