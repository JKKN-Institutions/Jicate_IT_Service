import { Container } from "@/components/ui";
import { Reveal } from "@/components/motion/Reveal";
import { explore } from "@/content/construction";

import { FeatureHeading, InkLink } from "./parts";

/**
 * "Continue Exploring" — a heading and a responsive grid of resource cards
 * (placeholder thumbnail, a kind label, a title, and a link). Thumbnails are
 * placeholders until the user supplies media.
 */
export function Explore() {
  return (
    <section aria-label={explore.heading} className="pt-[120px] desktop:pt-[180px]">
      <Container>
        <FeatureHeading>{explore.heading}</FeatureHeading>

        <Reveal className="mt-[48px] grid grid-cols-1 gap-x-[32px] gap-y-[56px] tablet:grid-cols-2 desktop:grid-cols-3">
          {explore.cards.map((c, i) => (
            <article key={i} className="flex flex-col gap-[20px]">
              {/* Placeholder thumbnail */}
              <div className="aspect-[16/10] w-full overflow-hidden rounded-[4px] bg-white/[0.08]" />
              <span className="font-mono text-[12px] uppercase tracking-[0.08em] text-white/45">{c.kind}</span>
              <p className="text-[clamp(1rem,1.25vw,1.125rem)]/[1.389] text-white">{c.title}</p>
              <InkLink href={c.href}>{c.cta}</InkLink>
            </article>
          ))}
        </Reveal>
      </Container>
    </section>
  );
}

export default Explore;
