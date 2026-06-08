"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

import { showcase } from "@/content/showcase";

import styles from "./ProductCarousel.module.css";

/**
 * Product showcase carousel (placeholder content reproduced from Palantir's
 * homepage — see content/showcase.ts).
 *
 * A full-bleed, full-screen-height, scroll-snapping slideshow of feature cards.
 * A tab bar floats over the top of the slide (just below the fixed nav): clicking
 * a tab scrolls that slide into view and reflects the active slide. Prev/next
 * arrows on the left and right edges step one slide and wrap around at the ends;
 * the track also responds to swipe. A scroll-spy (IntersectionObserver on the
 * track) keeps the active tab in sync as the user scrolls or swipes.
 *
 * SSR-safe: cards render statically as links (clickable with no JS); the tabs,
 * arrows, and scroll-spy are pure progressive enhancement that attach after
 * hydration. Honors prefers-reduced-motion via the CSS module.
 *
 * Markup notes vs. the source HTML: the per-card prev/next buttons (invalid
 * nested interactives inside the card link) are lifted to one carousel-level
 * control pair, and each card uses a stretched title link so the whole card is
 * clickable without nesting a second anchor inside an anchor.
 */
export function ProductCarousel() {
  const { cards, ctaLabel, ctaHref } = showcase;

  const trackRef = useRef<HTMLDivElement>(null);
  const itemRefs = useRef<Array<HTMLDivElement | null>>([]);
  const tabRefs = useRef<Array<HTMLButtonElement | null>>([]);
  const [active, setActive] = useState(0);

  const scrollToIndex = useCallback(
    (index: number) => {
      const clamped = ((index % cards.length) + cards.length) % cards.length;
      setActive(clamped);
      itemRefs.current[clamped]?.scrollIntoView({
        inline: "start",
        block: "nearest",
        behavior: "smooth",
      });
    },
    [cards.length],
  );

  // Scroll-spy: mark the most-visible card active as the track scrolls/swipes.
  useEffect(() => {
    const track = trackRef.current;
    const items = itemRefs.current.filter(Boolean) as HTMLElement[];
    if (!track || items.length === 0) return;

    const ratios = new Map<Element, number>();
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          ratios.set(entry.target, entry.intersectionRatio);
        }
        let best = 0;
        let bestRatio = -1;
        items.forEach((el, i) => {
          const ratio = ratios.get(el) ?? 0;
          if (ratio > bestRatio) {
            bestRatio = ratio;
            best = i;
          }
        });
        setActive(best);
      },
      { root: track, threshold: [0.2, 0.4, 0.6, 0.8, 1] },
    );

    items.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  // Keep the active tab visible within the (scrollable) tab bar.
  useEffect(() => {
    tabRefs.current[active]?.scrollIntoView({
      inline: "nearest",
      block: "nearest",
    });
  }, [active]);

  const onTabsKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (event.key !== "ArrowRight" && event.key !== "ArrowLeft") return;
    event.preventDefault();
    const next =
      event.key === "ArrowRight"
        ? (active + 1) % cards.length
        : (active - 1 + cards.length) % cards.length;
    scrollToIndex(next);
    tabRefs.current[next]?.focus();
  };

  return (
    <section
      className={styles.section}
      aria-label="Featured products and announcements"
      aria-roledescription="carousel"
    >
      <div className={styles.carousel}>
        <div className={styles.tabBar}>
          <div className={styles.tabBarInner}>
            <div
              className={styles.tabs}
              role="group"
              aria-label="Choose a featured item"
              onKeyDown={onTabsKeyDown}
            >
              {cards.map((card, i) => (
                <button
                  key={card.id}
                  type="button"
                  ref={(el) => {
                    tabRefs.current[i] = el;
                  }}
                  className={`${styles.tab} ${i === active ? styles.tabActive : ""}`}
                  aria-current={i === active ? "true" : undefined}
                  onClick={() => scrollToIndex(i)}
                >
                  {card.tab}
                </button>
              ))}
            </div>

            <a
              className={`${styles.pill} ${styles.headerCta}`}
              href={ctaHref}
              target="_blank"
              rel="noreferrer"
            >
              {ctaLabel}
            </a>
          </div>
        </div>

        <div className={styles.track} ref={trackRef}>
          {cards.map((card, i) => (
            <div
              key={card.id}
              className={styles.item}
              ref={(el) => {
                itemRefs.current[i] = el;
              }}
              aria-roledescription="slide"
              aria-label={`${i + 1} of ${cards.length}: ${card.tab}`}
            >
              <article className={styles.feature}>
                {/* Plain <img>: these are external, hotlinked placeholder CDN
                    assets meant to be swapped out, so we skip next/image (and
                    its remotePatterns config / optimization cost). */}
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  className={styles.image}
                  src={card.image}
                  alt={card.alt}
                  loading="lazy"
                  decoding="async"
                  referrerPolicy="no-referrer"
                />
                <div className={styles.textContainer}>
                  <p className={styles.earmark}>{card.earmark}</p>
                  <h3 className={styles.title}>
                    <a
                      className={styles.titleLink}
                      href={card.href}
                      target="_blank"
                      rel="noreferrer"
                    >
                      {card.title}
                    </a>
                  </h3>
                  <a
                    className={`${styles.pill} ${styles.cardCta}`}
                    href={ctaHref}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {ctaLabel}
                  </a>
                </div>
              </article>
            </div>
          ))}
        </div>

        <div className={styles.controls}>
          <button
            type="button"
            className={styles.control}
            aria-label="Previous"
            onClick={() => scrollToIndex(active - 1)}
          >
            <ChevronLeft aria-hidden />
          </button>
          <button
            type="button"
            className={styles.control}
            aria-label="Next"
            onClick={() => scrollToIndex(active + 1)}
          >
            <ChevronRight aria-hidden />
          </button>
        </div>
      </div>
    </section>
  );
}

export default ProductCarousel;
