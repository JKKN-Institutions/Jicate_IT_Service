import { Container, Section } from "@/components/ui";
import { Reveal } from "@/components/motion/Reveal";
import { connectedOs, type OsBlock } from "@/content/titanium";

import { SectionHeading, BlockHeading } from "./parts";

/**
 * "A Connected Operating System" — a section heading, then four sub-sections.
 * Each sub-section is a 2-column split: a "↳ " block heading and its lead text
 * on the left, with the secondary lead and a body paragraph on the right
 * (reference parity, dark theme).
 */
export function ConnectedOS() {
  return (
    <Section className="!pt-[80px] !pb-[80px]" aria-label="A Connected Operating System">
      <Container>
        <Reveal>
          <SectionHeading>{connectedOs.heading}</SectionHeading>
        </Reveal>

        <div className="mt-[60px] flex flex-col gap-[80px]">
          {connectedOs.blocks.map((block, i) => (
            <Reveal key={block.title} index={i % 2}>
              <Block block={block} />
            </Reveal>
          ))}
        </div>
      </Container>
    </Section>
  );
}

function Block({ block }: { block: OsBlock }) {
  return (
    <div className="grid grid-cols-1 gap-x-[60px] gap-y-[24px] desktop:grid-cols-2">
      {/* Left: title + first lead */}
      <div className="flex flex-col gap-[20px]">
        <BlockHeading className="flex items-baseline gap-[0.3em]">
          <span aria-hidden className="text-white/60">
            ↳
          </span>
          {block.title}
        </BlockHeading>
        <p className="max-w-[46ch] text-body-lg leading-[1.4] text-white">{block.leadLeft}</p>
      </div>

      {/* Right: second lead + body */}
      <div className="flex flex-col gap-[20px] desktop:pt-[8px]">
        <p className="max-w-[52ch] text-body-lg leading-[1.4] text-white">{block.leadRight}</p>
        <p className="max-w-[52ch] text-body leading-[1.5] text-white/80">{block.body}</p>
      </div>
    </div>
  );
}

export default ConnectedOS;
