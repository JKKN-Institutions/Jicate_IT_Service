import { Container, Section } from "@/components/ui";
import { Reveal } from "@/components/motion/Reveal";
import { latestNews } from "@/content/semiconductors";
import type { NewsItem } from "@/content/semiconductors";

/**
 * The Latest News — a 12-col inset row: an 18px section heading (cols 2-4) and
 * two news cards (cols 5-7 and 8-10). Each card: a mono date label, an 18px
 * headline, and a "↳ Read More" link. Cards do not stretch to the right edge.
 */
export function LatestNews() {
  return (
    <Section className="bg-canvas py-[clamp(56px,8vw,120px)]" aria-label={latestNews.heading}>
      <Container>
        <Reveal className="grid grid-cols-1 gap-x-[clamp(24px,3vw,40px)] gap-y-[clamp(32px,5vw,48px)] desktop:grid-cols-12 desktop:items-start">
          <h2 className="text-[18px] leading-[1.39] text-ink desktop:col-span-3 desktop:col-start-2">
            {latestNews.heading}
          </h2>

          <div className="desktop:col-span-3 desktop:col-start-5">
            <NewsCard item={latestNews.items[0]} />
          </div>
          <div className="desktop:col-span-3 desktop:col-start-8">
            <NewsCard item={latestNews.items[1]} />
          </div>
        </Reveal>
      </Container>
    </Section>
  );
}

function NewsCard({ item }: { item: NewsItem }) {
  return (
    <article className="flex flex-col gap-s">
      <span className="font-mono text-[12px] uppercase tracking-[0.06em] text-ink-light">
        {item.date}
      </span>
      <h3 className="text-[18px] leading-[1.39] text-ink">{item.title}</h3>
      <a
        href={item.href}
        className="group inline-flex items-center gap-xs text-[16px] text-ink transition-colors duration-200 hover:text-ink-light focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
      >
        <span aria-hidden>↳</span>
        <span className="underline decoration-ink/30 underline-offset-2 group-hover:decoration-ink">
          Read More
        </span>
      </a>
    </article>
  );
}

export default LatestNews;
