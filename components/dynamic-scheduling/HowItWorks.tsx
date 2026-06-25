import { Container, Section } from "@/components/ui";
import { Reveal } from "@/components/motion/Reveal";
import { LoopingVideo } from "@/components/ai-ml/LoopingVideo";
import { cn } from "@/lib/utils";
import { howItWorks, type Step } from "@/content/dynamic-scheduling";

import { SectionHeading } from "./parts";

/**
 * "How It Works" — section heading, then a stack of numbered-feel steps. Each
 * step is a 2-column row: a 34px label + body on one side and the supporting
 * screenshot or looping clip on the other. Media side alternates per step
 * (reference parity).
 */
export function HowItWorks() {
  return (
    <Section className="!pt-0 !pb-[100px]" aria-label="How It Works">
      <Container>
        <Reveal>
          <SectionHeading>{howItWorks.heading}</SectionHeading>
        </Reveal>

        <div className="mt-[60px] flex flex-col gap-[100px]">
          {howItWorks.steps.map((step) => (
            <Reveal key={step.title}>
              <StepRow step={step} />
            </Reveal>
          ))}
        </div>
      </Container>
    </Section>
  );
}

function StepRow({ step }: { step: Step }) {
  const hasMedia = Boolean(step.image || step.video);

  return (
    <div className="grid grid-cols-1 items-center gap-x-[60px] gap-y-[28px] desktop:grid-cols-2">
      {/* Text */}
      <div className={cn("flex flex-col gap-[20px]", step.mediaSide === "left" && "desktop:order-2")}>
        <h2 className="font-display text-[clamp(1.6667rem,2.2vw,1.8889rem)] font-normal leading-[1.1] tracking-[-0.01em] text-ink">
          {step.title}
        </h2>
        <p className="max-w-[44ch] text-body-lg leading-[1.4] text-ink">{step.body}</p>
      </div>

      {/* Media */}
      {hasMedia ? (
        <div className={cn(step.mediaSide === "left" && "desktop:order-1")}>
          {step.video ? (
            <div className="relative aspect-[16/10] w-full overflow-hidden rounded-[6px] border border-ink/10 bg-surface-medium shadow-[0_24px_60px_-30px_rgba(30,33,36,0.45)]">
              <LoopingVideo src={step.video} />
            </div>
          ) : (
            <div className="aspect-[16/10] w-full overflow-hidden rounded-[2px] bg-band">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={step.image}
                alt={step.alt ?? ""}
                className="h-full w-full object-contain"
                loading="lazy"
              />
            </div>
          )}
        </div>
      ) : null}
    </div>
  );
}

export default HowItWorks;
