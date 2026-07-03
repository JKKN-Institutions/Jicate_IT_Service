import { Container } from "@/components/ui";
import { Reveal } from "@/components/motion/Reveal";
import { federal } from "@/content/apollo";

import { GiantHeading, SubLink } from "./parts";

/**
 * Federal Government CTA band (light). A heading with a drill-in link to the
 * FedStart offering.
 */
export function FederalCta() {
  return (
    <section className="bg-canvas py-[80px] desktop:py-[120px]">
      <Container>
        <Reveal className="flex flex-col gap-l border-t border-ink/15 pt-[60px]">
          <GiantHeading className="max-w-[18ch]">{federal.heading}</GiantHeading>
          <SubLink href={federal.link.href} className="text-[clamp(1.125rem,1.5vw,1.25rem)]">
            {federal.link.label}
          </SubLink>
        </Reveal>
      </Container>
    </section>
  );
}

export default FederalCta;
