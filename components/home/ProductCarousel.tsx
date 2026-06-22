"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

import { showcase } from "@/content/showcase";

import styles from "./ProductCarousel.module.css";

/**
 * Product showcase carousel (placeholder content reproduced from Palantir's
 * homepage — see content/showcase.ts).
 *
 * Layout, top → bottom:
 *   1. A tab row of pills. The active tab is highlighted and carries an
 *      auto-advance progress bar that fills over `--pc-duration` (CSS); when
 *      that animation ends the carousel advances to the next item. Hovering,
 *      focusing, or scrolling the section out of view pauses it.
 *   2. A contained, rounded slide viewport — one full-width feature card per
 *      item, scroll-snapping horizontally (swipe + prev/next arrows). A
 *      scroll-spy (IntersectionObserver on the track) keeps the active tab in
 *      sync as the user scrolls or swipes.
 *
 * SSR-safe: cards render statically as links (clickable with no JS); the tabs,
 * progress, arrows, and scroll-spy are pure progressive enhancement that attach
 * after hydration. Honors prefers-reduced-motion: autoplay is disabled in JS
 * (the progress bar isn't even rendered), which is REQUIRED — the global
 * reduced-motion CSS collapses the progress animation to ~0ms, so without this
 * gate `onAnimationEnd` would fire in a tight loop.
 *
 * Markup notes vs. the source HTML: the per-card prev/next buttons (invalid
 * nested interactives inside the card link) are lifted to one carousel-level
 * control pair, and each card uses a stretched title link so the whole card is
 * clickable without nesting a second anchor inside an anchor.
 */
export function ProductCarousel() {
  const { cards, ctaLabel, ctaHref } = showcase;

  const sectionRef = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const itemRefs = useRef<Array<HTMLDivElement | null>>([]);
  const tabRefs = useRef<Array<HTMLButtonElement | null>>([]);
  const barRef = useRef<HTMLSpanElement>(null);
  const [active, setActive] = useState(0);

  // Autoplay is progressive enhancement: it only attaches after mount. It pauses
  // on hover, on keyboard focus within the section, and while the section is
  // scrolled out of view. Reduced-motion only swaps the smooth scroll for an
  // instant jump (the auto-advance itself stays on — it's the point of this UI).
  const [mounted, setMounted] = useState(false);
  const [reduced, setReduced] = useState(false);
  const [hovering, setHovering] = useState(false);
  const [focusing, setFocusing] = useState(false);
  const [inView, setInView] = useState(true);

  const autoplay = mounted;

  // Read live by the rAF loop each frame (a ref, so toggling it never restarts
  // the animation — it just freezes/resumes the progress bar in place).
  const pausedRef = useRef(false);
  pausedRef.current = !inView || hovering || focusing;

  useEffect(() => {
    setMounted(true);
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const sync = () => setReduced(mq.matches);
    sync();
    mq.addEventListener("change", sync);
    return () => mq.removeEventListener("change", sync);
  }, []);

  const scrollToIndex = useCallback(
    (index: number) => {
      const clamped = ((index % cards.length) + cards.length) % cards.length;
      setActive(clamped);
      itemRefs.current[clamped]?.scrollIntoView({
        inline: "start",
        block: "nearest",
        behavior: reduced ? "auto" : "smooth",
      });
    },
    [cards.length, reduced],
  );

  // Auto-advance: drive the active tab's progress bar with requestAnimationFrame
  // and step to the next slide when it fills. rAF (not a CSS animation) so it's
  // immune to the global reduced-motion rule that collapses CSS animations to
  // ~0ms — that rule would otherwise make this fire in a tight loop. Re-runs on
  // `active` change, which resets the bar for the newly-active tab.
  useEffect(() => {
    if (!autoplay) return;
    const bar = barRef.current;
    let raf = 0;
    let last: number | null = null;
    let elapsed = 0;
    const DURATION = 3000; // keep in sync with --pc-duration (display only)

    const tick = (now: number) => {
      if (last === null) last = now;
      // Clamp the delta so a backgrounded tab (rAF paused) doesn't resume with a
      // huge jump that instantly skips a slide.
      const dt = Math.min(now - last, 100);
      last = now;
      if (!pausedRef.current) {
        elapsed += dt;
        const progress = Math.min(elapsed / DURATION, 1);
        if (bar) bar.style.transform = `scaleX(${progress})`;
        if (progress >= 1) {
          scrollToIndex(active + 1);
          return;
        }
      }
      raf = requestAnimationFrame(tick);
    };

    if (bar) bar.style.transform = "scaleX(0)";
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [active, autoplay, scrollToIndex]);

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

  // Pause autoplay while the section is scrolled out of view.
  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { threshold: 0.25 },
    );
    observer.observe(el);
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
      ref={sectionRef}
      className={styles.section}
      aria-label="Featured products and announcements"
      aria-roledescription="carousel"
    >
      <div
        className={styles.inner}
        onMouseEnter={() => setHovering(true)}
        onMouseLeave={() => setHovering(false)}
        onFocusCapture={() => setFocusing(true)}
        onBlurCapture={() => setFocusing(false)}
      >
        <div className={styles.tabBar}>
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
                <span className={styles.tabLabel}>{card.tab}</span>
                {autoplay && i === active && (
                  <span
                    ref={barRef}
                    className={styles.tabProgress}
                    style={{ transform: "scaleX(0)" }}
                    aria-hidden
                  />
                )}
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

        <div className={styles.viewport}>
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
                        <span className={styles.titleArrow} aria-hidden>
                          ↗
                        </span>
                      </a>
                    </h3>
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
      </div>
    </section>
  );
}

export default ProductCarousel;
