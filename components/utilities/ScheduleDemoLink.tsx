"use client";

import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

/**
 * ScheduleDemoLink — same visual as the InkLink used elsewhere on this page, but
 * with a client-side smooth scroll. Native `<a href="#id">` anchor jumps proved
 * unreliable on this cloned page, so the click is intercepted and the target is
 * scrolled into view manually, offset for the fixed ~120px site header. Falls
 * back to the plain hash navigation if the target isn't found.
 */
export function ScheduleDemoLink({
  href,
  children,
  className,
}: {
  href: string;
  children: ReactNode;
  className?: string;
}) {
  const onClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    if (!href.startsWith("#")) return;
    const target = document.getElementById(href.slice(1));
    if (!target) return; // let the browser handle it
    event.preventDefault();
    const top =
      target.getBoundingClientRect().top +
      (document.scrollingElement?.scrollTop ?? window.scrollY) -
      120; // clear the fixed header
    window.scrollTo({ top, behavior: "smooth" });
    history.replaceState(null, "", href);
  };

  return (
    <a
      href={href}
      onClick={onClick}
      className={cn(
        "group flex w-full items-center justify-between gap-s border-b border-ink/25 pb-s text-body-lg text-ink transition-colors duration-200 hover:border-ink",
        className,
      )}
    >
      <span>{children}</span>
      <span
        aria-hidden
        className="shrink-0 transition-transform duration-[var(--duration-micro)] group-hover:translate-x-[0.22em] motion-reduce:transform-none"
      >
        →
      </span>
    </a>
  );
}

export default ScheduleDemoLink;
