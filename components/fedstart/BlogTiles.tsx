import { Container, Section } from "@/components/ui";
import { Reveal } from "@/components/motion/Reveal";
import { cn } from "@/lib/utils";
import { blogTiles } from "@/content/fedstart";

import { GiantHeading } from "./parts";

const toneCls: Record<string, string> = {
  dark: "bg-near-black text-offwhite",
  light: "bg-ink/[0.06] text-ink",
  accent: "bg-[#E8B23A] text-near-black",
};

/**
 * "How Jicate is Transforming the Defense Tech Landscape" — a giant heading and a
 * row of three wide blog tiles, each with a title, subtitle, and Read More link.
 */
export function BlogTiles() {
  return (
    <Section className="bg-canvas" aria-label={blogTiles.heading}>
      <Container>
        <Reveal className="mb-3xl">
          <GiantHeading size="section" className="max-w-[22ch]">
            {blogTiles.heading}
          </GiantHeading>
        </Reveal>

        <div className="grid grid-cols-1 gap-2xl tablet:grid-cols-3">
          {blogTiles.tiles.map((t, i) => (
            <Reveal key={t.title} index={i} className="flex flex-col gap-l">
              <a href={t.href} className="flex flex-col gap-l focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent">
                <div className={cn("flex aspect-[16/9] w-full flex-col justify-center gap-m rounded-[2px] p-l", toneCls[t.tone])}>
                  <span className="font-display text-[clamp(1.25rem,1rem+1vw,1.6rem)] leading-[1.1] tracking-[-0.01em]">
                    {t.title}
                  </span>
                  <span className="text-body-sm opacity-80">{t.subtitle}</span>
                </div>
                <span className="group flex items-center justify-between gap-s border-b border-ink/25 pb-s text-body-lg text-ink">
                  Read More
                  <span aria-hidden className="transition-transform duration-[var(--duration-micro)] group-hover:translate-x-[0.22em]">→</span>
                </span>
              </a>
            </Reveal>
          ))}
        </div>
      </Container>
    </Section>
  );
}

export default BlogTiles;
