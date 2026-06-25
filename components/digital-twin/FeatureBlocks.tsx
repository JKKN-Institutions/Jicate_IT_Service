import { Container, Section } from "@/components/ui";
import { Reveal } from "@/components/motion/Reveal";
import { featureIntro, featureBlocks } from "@/content/digital-twin";

import { GiantHeading, InkLink } from "./parts";

/**
 * "Virtualized Operations. Real Impact." — an intro heading followed by four
 * image/text feature blocks whose media side alternates left/right. Light
 * Section; each block reveals on scroll.
 */
export function FeatureBlocks() {
  return (
    <Section className="bg-canvas" aria-label={featureIntro}>
      <Container>
        <Reveal>
          <GiantHeading className="max-w-[16ch]">{featureIntro}</GiantHeading>
        </Reveal>

        <div className="mt-3xl flex flex-col gap-3xl">
          {featureBlocks.map((block, i) => {
            const imageRight = i % 2 === 1;
            return (
              <Reveal key={block.title} className="grid-12 items-center gap-y-l">
                <div
                  className={
                    imageRight
                      ? "col-span-12 desktop:order-2 desktop:col-span-7 desktop:col-start-6"
                      : "col-span-12 desktop:col-span-7"
                  }
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={block.image}
                    alt={block.alt}
                    className="w-full select-none"
                    draggable={false}
                  />
                </div>

                <div
                  className={
                    imageRight
                      ? "col-span-12 flex flex-col gap-s desktop:order-1 desktop:col-span-4"
                      : "col-span-12 flex flex-col gap-s desktop:col-span-4 desktop:col-start-9"
                  }
                >
                  <h2 className="font-display text-display font-normal leading-[1.08] tracking-[-0.02em] text-ink">
                    {block.title}
                  </h2>
                  <p className="text-body-lg text-ink-light">{block.body}</p>
                  {block.link ? (
                    <InkLink href={block.link.href} className="mt-s">
                      {block.link.label}
                    </InkLink>
                  ) : null}
                </div>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </Section>
  );
}

export default FeatureBlocks;
