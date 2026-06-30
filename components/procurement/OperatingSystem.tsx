import { Container, Section } from "@/components/ui";
import { Reveal } from "@/components/motion/Reveal";
import { operatingSystem as os } from "@/content/procurement";

import { GiantHeading } from "./parts";

/**
 * Operating System — a 50px statement heading on the left, a 34px supporting line
 * on the right, then a full-width product diagram beneath.
 */
export function OperatingSystem() {
  return (
    <Section className="bg-canvas" aria-label="Operating System">
      <Container>
        <div className="grid grid-cols-1 gap-x-2xl gap-y-l desktop:grid-cols-2">
          <Reveal>
            <GiantHeading size="band" className="text-ink">
              {os.heading}
            </GiantHeading>
          </Reveal>
          <Reveal index={1} className="flex items-start">
            <p className="text-[clamp(1.5rem,1rem+1.4vw,1.889rem)] leading-[1.18] text-ink">
              {os.body}
            </p>
          </Reveal>
        </div>

        <Reveal index={2} className="mt-3xl">
          <div className="w-full overflow-hidden rounded-[2px] bg-ink/[0.03]">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={os.diagram} alt={os.diagramAlt} className="h-auto w-full object-contain" loading="lazy" />
          </div>
        </Reveal>
      </Container>
    </Section>
  );
}

export default OperatingSystem;
