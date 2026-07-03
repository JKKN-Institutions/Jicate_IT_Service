import { Container, Section } from "@/components/ui";
import { Reveal } from "@/components/motion/Reveal";
import { ready } from "@/content/gotham";

import { DisplayTitle, MicroLabel, DARK } from "./parts";

/**
 * ReadyCTA — the closing dark call-to-action: "Are you ready?" eyebrow, a 72px
 * grey line, and a Join Now button. DARK.
 */
export function ReadyCTA() {
  return (
    <Section
      id="ready"
      className="!py-[clamp(90px,12vw,160px)] text-center text-white"
      style={{ backgroundColor: DARK }}
      aria-label={ready.heading}
    >
      <Container>
        <Reveal className="mx-auto flex max-w-[1000px] flex-col items-center gap-[36px]">
          <MicroLabel className="text-white/80">{ready.heading}</MicroLabel>
          <DisplayTitle as="p" size="cta" className="text-white/70">
            {ready.lead}
          </DisplayTitle>
          <a
            href={ready.cta.href}
            className="inline-flex items-center rounded-full border border-white/40 px-[32px] py-[14px] text-[16px] text-white transition-colors hover:bg-white hover:text-ink"
          >
            {ready.cta.label}
          </a>
        </Reveal>
      </Container>
    </Section>
  );
}

export default ReadyCTA;
