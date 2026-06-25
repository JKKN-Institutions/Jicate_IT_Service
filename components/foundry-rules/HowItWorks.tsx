import { Container, Section } from "@/components/ui";
import { Reveal } from "@/components/motion/Reveal";
import { cn } from "@/lib/utils";
import { howItWorks, type Step } from "@/content/foundry-rules";

import { SectionHeading } from "./parts";

/**
 * "How It Works" — a section heading, then three steps. Each step is a
 * 2-column row: a 34px heading + body on one side and the supporting screenshot
 * on the other. Media side alternates per step (reference parity).
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
  return (
    <div className="grid grid-cols-1 items-center gap-x-[60px] gap-y-[28px] desktop:grid-cols-2">
      <div className={cn("flex flex-col gap-[20px]", step.mediaSide === "left" && "desktop:order-2")}>
        <h2 className="font-display text-[clamp(1.5rem,2.4vw,1.8889rem)]/[1.176] font-normal tracking-normal text-ink">
          {step.title}
        </h2>
        <p className="max-w-[46ch] text-body-lg leading-[1.4] text-ink">{step.body}</p>
      </div>

      <div className={cn(step.mediaSide === "left" && "desktop:order-1")}>
        <div className="aspect-[16/10] w-full overflow-hidden rounded-[2px] bg-band">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={step.image} alt={step.alt} className="h-full w-full object-contain" loading="lazy" />
        </div>
      </div>
    </div>
  );
}

export default HowItWorks;
