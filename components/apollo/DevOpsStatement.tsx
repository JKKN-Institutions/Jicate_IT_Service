import { Container } from "@/components/ui";
import { Reveal } from "@/components/motion/Reveal";
import { devops } from "@/content/apollo";

import { GiantHeading } from "./parts";

/**
 * DevOps statement band (light). A large statement heading on the left with a
 * top hairline rule, and the tall "Apollo Cube" image on the right.
 */
export function DevOpsStatement() {
  return (
    <section className="bg-canvas py-[80px] desktop:py-[120px]">
      <Container>
        <div className="border-t border-ink/15 pt-[60px]">
          <div className="grid items-center gap-2xl desktop:grid-cols-[1.1fr_0.9fr]">
            <Reveal>
              <GiantHeading size="statement" className="max-w-[15ch]">
                {devops.heading}
              </GiantHeading>
            </Reveal>
            <Reveal className="w-full">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={devops.image}
                alt={devops.imageAlt}
                className="mx-auto h-auto w-full max-w-[480px] object-cover"
              />
            </Reveal>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default DevOpsStatement;
