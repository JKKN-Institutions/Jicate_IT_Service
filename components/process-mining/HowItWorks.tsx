import { Container, Section } from "@/components/ui";
import { Reveal } from "@/components/motion/Reveal";
import { howItWorks } from "@/content/process-mining";

import { GiantHeading } from "./parts";

function StepText({ title, body }: { title: string; body: string }) {
  return (
    <>
      <h2 className="font-display text-display font-normal leading-[1.08] tracking-[-0.02em] text-ink">
        {title}
      </h2>
      <p className="text-body-lg text-ink-light">{body}</p>
    </>
  );
}

function StepMedia({ images, alt }: { images: string[]; alt: string }) {
  return (
    <div className="flex flex-col gap-l">
      {images.map((src) => (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          key={src}
          src={src}
          alt={alt}
          className="w-full select-none rounded-[6px]"
          draggable={false}
        />
      ))}
    </div>
  );
}

/**
 * How It Works — giant heading over the Connect → Automate steps. Steps with
 * imagery render as a 2-column row (media one side, heading + body the other),
 * alternating sides; text-only steps render heading-left / body-right. Light.
 */
export function HowItWorks() {
  return (
    <Section className="bg-canvas" aria-label={howItWorks.heading}>
      <Container>
        <Reveal>
          <GiantHeading>{howItWorks.heading}</GiantHeading>
        </Reveal>

        <div className="mt-3xl flex flex-col gap-3xl">
          {howItWorks.steps.map((step, i) => {
            const images = step.images ?? [];

            if (images.length === 0) {
              return (
                <Reveal key={step.title} className="grid-12 items-start gap-y-l">
                  <div className="col-span-12 flex flex-col gap-m desktop:col-span-4">
                    <StepText title={step.title} body={step.body} />
                  </div>
                </Reveal>
              );
            }

            const imageLeft = i % 2 === 0;
            return (
              <Reveal key={step.title} className="grid-12 items-center gap-y-l">
                {imageLeft ? (
                  <>
                    <div className="col-span-12 desktop:col-span-6">
                      <StepMedia images={images} alt={step.title} />
                    </div>
                    <div className="col-span-12 flex flex-col gap-m desktop:col-span-5 desktop:col-start-8">
                      <StepText title={step.title} body={step.body} />
                    </div>
                  </>
                ) : (
                  <>
                    <div className="col-span-12 flex flex-col gap-m desktop:col-span-5">
                      <StepText title={step.title} body={step.body} />
                    </div>
                    <div className="col-span-12 desktop:col-span-6 desktop:col-start-7">
                      <StepMedia images={images} alt={step.title} />
                    </div>
                  </>
                )}
              </Reveal>
            );
          })}
        </div>
      </Container>
    </Section>
  );
}

export default HowItWorks;
