import { Container, Section } from "@/components/ui";
import { Reveal } from "@/components/motion/Reveal";
import { news } from "@/content/federal-health";

import { SectionHeading } from "./parts";

/**
 * "News + Accolades" — a top hairline, a 50px heading on the left, and a
 * two-column list of press links (title + arrow, hairline-topped) on the right
 * (reference parity). Placeholder headlines.
 */
export function News() {
  return (
    <Section aria-label={news.heading}>
      <Container>
        <div className="border-t border-ink/15 pt-[60px]">
          <Reveal className="grid grid-cols-1 gap-[40px] desktop:grid-cols-[1fr_1fr] desktop:gap-[80px]">
            <SectionHeading>{news.heading}</SectionHeading>

            <ul className="grid grid-cols-1 gap-x-[40px] tablet:grid-cols-2">
              {news.links.map((link, i) => (
                <li key={i}>
                  <a
                    href={link.href}
                    className="group flex items-start justify-between gap-[24px] border-t border-ink/20 py-[28px] text-[18px]/[1.3] desktop:text-[20px]/[26px] text-ink transition-colors hover:text-ink-light"
                  >
                    <span className="max-w-[22ch]">{link.title}</span>
                    <span aria-hidden className="shrink-0 transition-transform group-hover:translate-x-[0.18em]">
                      →
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </Container>
    </Section>
  );
}

export default News;
