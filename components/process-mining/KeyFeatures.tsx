import { Container, Section } from "@/components/ui";
import { Reveal } from "@/components/motion/Reveal";
import { keyFeatures } from "@/content/process-mining";

import { GiantHeading } from "./parts";

/**
 * Key Features — giant heading, then a 2-column row: the diagram on the left and
 * the bold-label feature blurbs stacked on the right. Light Section.
 */
export function KeyFeatures() {
  return (
    <Section className="bg-canvas" aria-label={keyFeatures.heading}>
      <Container>
        <Reveal>
          <GiantHeading>{keyFeatures.heading}</GiantHeading>
        </Reveal>

        <div className="mt-2xl grid-12 items-start gap-y-xl">
          <Reveal className="col-span-12 desktop:col-span-6">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={keyFeatures.image}
              alt={keyFeatures.alt}
              className="w-full select-none rounded-[6px]"
              draggable={false}
            />
          </Reveal>

          <Reveal
            index={1}
            className="col-span-12 flex flex-col gap-xl desktop:col-span-5 desktop:col-start-8"
          >
            {keyFeatures.items.map((item) => (
              <div key={item.title} className="flex flex-col gap-xs">
                <h3 className="text-body-lg font-semibold text-ink">{item.title}</h3>
                <p className="text-body text-ink-light">{item.body}</p>
              </div>
            ))}
          </Reveal>
        </div>
      </Container>
    </Section>
  );
}

export default KeyFeatures;
