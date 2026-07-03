import { Container, Section } from "@/components/ui";
import { Reveal } from "@/components/motion/Reveal";
import { discover } from "@/content/gotham";

import { LIGHT } from "./parts";

/**
 * DiscoverBand — a light transition band: an outline "G" mark on the left,
 * a 42px lead statement, and Explore / Index links. LIGHT (#f9f9f9).
 */
export function DiscoverBand() {
  return (
    <Section
      className="!py-[clamp(80px,10vw,140px)] text-ink"
      style={{ backgroundColor: LIGHT }}
      aria-label="Discover"
    >
      <Container>
        <Reveal className="grid grid-cols-1 items-start gap-[40px] desktop:grid-cols-[200px_1fr] desktop:gap-[80px]">
          {/* Outline G mark */}
          <div
            aria-hidden
            className="flex size-[128px] items-center justify-center rounded-full border border-ink/25 font-display text-[72px] leading-none text-ink/80"
          >
            G
          </div>

          <div className="flex max-w-[720px] flex-col gap-[32px]">
            <p className="font-display text-[clamp(1.75rem,3.2vw,2.333rem)] leading-[1.07] tracking-[-0.03em] text-ink">
              {discover.lead}
            </p>
            <div className="flex items-center gap-[40px]">
              {discover.links.map((l) => (
                <a
                  key={l.label}
                  href={l.href}
                  className="text-[12px] uppercase tracking-[0.08em] text-ink underline decoration-ink/30 underline-offset-4 transition-colors hover:decoration-ink"
                >
                  {l.label}
                </a>
              ))}
            </div>
          </div>
        </Reveal>
      </Container>
    </Section>
  );
}

export default DiscoverBand;
