"use client";

import type { MouseEvent } from "react";

import { Container } from "@/components/ui";
import { cn } from "@/lib/utils";
import { subNav } from "@/content/aip-developers";

/**
 * Sticky in-page sub-navigation that rides under the site header on the dark
 * hero. Anchor links smooth-scroll to each major section, landing just below
 * the sticky header + this nav (so the section title is never hidden). The
 * final "View Docs ↗" is a placeholder outbound link. Reduced-motion users get
 * an instant jump. Client Component — needs the click handler.
 */
export function SubNav() {
  const handleClick = (event: MouseEvent<HTMLAnchorElement>, href: string) => {
    // Only intercept in-page hash links; leave real/outbound links alone.
    if (!href.startsWith("#")) return;
    event.preventDefault();
    if (href === "#") return; // placeholder (View Docs) — nothing to scroll to.

    const target = document.getElementById(href.slice(1));
    if (!target) return;

    // In this layout window.scrollY reads 0, but the real scroll position lives
    // on the scrolling element — read from there. window.scrollTo(x, y) is what
    // actually moves the page here.
    const scroller = document.scrollingElement ?? document.documentElement;

    // The sticky nav's current bottom edge = header height + this nav's height,
    // i.e. exactly how far down the section should land.
    const nav = event.currentTarget.closest("nav");
    const offset = nav ? nav.getBoundingClientRect().bottom : 0;
    const startY = scroller.scrollTop;
    const destY = target.getBoundingClientRect().top + startY - offset - 8;

    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    // Reflect the section in the URL without triggering a native jump.
    history.replaceState(null, "", href);

    if (prefersReduced || destY === startY) {
      window.scrollTo(0, destY);
      return;
    }

    // Custom eased tween — the native `behavior: "smooth"` is unreliable in this
    // layout (it stalls then snaps), so animate each frame ourselves.
    const distance = destY - startY;
    const duration = Math.min(900, Math.max(350, Math.abs(distance) * 0.5));
    const start = performance.now();
    const easeInOutCubic = (t: number) =>
      t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;

    const step = (now: number) => {
      const elapsed = now - start;
      const t = Math.min(1, elapsed / duration);
      window.scrollTo(0, startY + distance * easeInOutCubic(t));
      if (t < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);

    // Reflect the section in the URL without triggering a second jump.
    history.replaceState(null, "", href);
  };

  return (
    <nav
      aria-label="On this page"
      className="sticky top-[88px] z-30 bg-near-black/90 backdrop-blur-sm"
    >
      <Container>
        <ul className="flex flex-wrap items-center gap-x-l gap-y-xs py-s">
          {subNav.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                onClick={(event) => handleClick(event, item.href)}
                className={cn(
                  "text-body-sm text-offwhite/60 transition-colors duration-200 hover:text-offwhite",
                  "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-offwhite",
                )}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </Container>
    </nav>
  );
}

export default SubNav;
