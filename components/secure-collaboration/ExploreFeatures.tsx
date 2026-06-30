import { Container, Section } from "@/components/ui";
import { Reveal } from "@/components/motion/Reveal";
import { explore } from "@/content/secure-collaboration";

import { GiantHeading, DarkLink } from "./parts";

/**
 * Explore the Features — a divided row: a 50px heading on the left, a short line
 * of supporting copy in the middle, and a "Features" link on the right.
 */
export function ExploreFeatures() {
  return (
    <Section className="bg-[#1e2124]" aria-label={explore.heading}>
      <Container>
        <Reveal className="grid grid-cols-1 items-center gap-x-2xl gap-y-l border-t border-offwhite/15 pt-2xl desktop:grid-cols-12">
          <GiantHeading size="band" className="text-offwhite desktop:col-span-5">
            {explore.heading}
          </GiantHeading>
          <p className="text-body leading-[1.5] text-offwhite/65 desktop:col-span-4 desktop:col-start-7">
            {explore.text}
          </p>
          <div className="desktop:col-span-2 desktop:col-start-11">
            <DarkLink href="#" className="w-full">
              {explore.cta}
            </DarkLink>
          </div>
        </Reveal>
      </Container>
    </Section>
  );
}

export default ExploreFeatures;
