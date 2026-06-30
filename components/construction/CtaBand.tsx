import { Container } from "@/components/ui";
import { Reveal } from "@/components/motion/Reveal";
import { ctaBand } from "@/content/construction";

import { InkLink } from "./parts";

/**
 * A slim CTA band between the resource grid and the closing form — a single
 * lead line with a link, bracketed by hairline rules (reference parity).
 */
export function CtaBand() {
  return (
    <section aria-label="Get in touch" className="pt-[120px] desktop:pt-[180px]">
      <Container>
        <Reveal className="flex flex-col gap-[20px] border-y border-white/15 py-[40px] desktop:flex-row desktop:items-center desktop:justify-between">
          <p className="max-w-[40ch] text-[clamp(1.25rem,1.67vw,1.5rem)]/[1.3] text-white">{ctaBand.text}</p>
          <InkLink href={ctaBand.link.href}>{ctaBand.link.label}</InkLink>
        </Reveal>
      </Container>
    </section>
  );
}

export default CtaBand;
