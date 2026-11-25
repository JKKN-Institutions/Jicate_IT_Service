import { Container, Section } from "@/components/ui";
import { Reveal } from "@/components/motion/Reveal";
import { carbon } from "@/content/energy";

import { AnchorTitle, ColumnsBlock } from "./blocks";

const subHead =
  "font-display text-[clamp(1.75rem,1rem+2.6vw,2.75rem)] font-normal leading-[1.05] tracking-[-0.02em] text-ink";

/** Carbon — anchor title and the Sustainability section. */
export function Carbon() {
  return (
    <>
      <AnchorTitle id={carbon.id}>{carbon.title}</AnchorTitle>

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

    </>
  );
}

export default Carbon;
