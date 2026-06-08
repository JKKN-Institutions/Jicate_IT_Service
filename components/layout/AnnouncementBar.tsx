"use client";

import { X } from "lucide-react";

import { Arrow, Container, IconButton } from "@/components/ui";
import { announcement } from "@/content/home";
import { useDismissed } from "@/hooks/useDismissed";

/**
 * Announcement bar (design 04 §1, 07 §3).
 *
 * Full-bleed dark strip that sits conceptually above the fixed nav. Carries one
 * timely message + an inline underlined link, and a dismiss button. Dismissal
 * persists in localStorage via `useDismissed`.
 *
 * SSR/hydration discipline: the server snapshot is never dismissed, so we gate
 * the "already dismissed" branch on `hydrated` to avoid removing markup the
 * server rendered (which would cause a hydration mismatch / layout flash).
 */
export function AnnouncementBar() {
  const { dismissed, hydrated, dismiss } = useDismissed(announcement.storageKey);

  // Once hydrated, honor a persisted dismissal: remove the bar entirely.
  if (hydrated && dismissed) return null;

  return (
    <div
      role="region"
      aria-label="Announcement"
      className="relative z-40 bg-near-black text-offwhite"
    >
      <Container className="flex items-center gap-s py-xs">
        <p className="flex-1 text-center text-body-sm text-offwhite">
          {announcement.message}{" "}
          <a
            href={announcement.link.href}
            {...(announcement.link.external
              ? { target: "_blank", rel: "noreferrer" }
              : {})}
            className="group inline-flex items-center gap-tiny underline underline-offset-2 transition-colors duration-200 hover:text-blue focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-offwhite"
          >
            {announcement.link.label}
            {announcement.link.arrow ? (
              <Arrow
                kind={announcement.link.arrow}
                className="transition-transform duration-[var(--duration-micro-fast)] group-hover:translate-x-[0.22em] motion-reduce:transform-none"
              />
            ) : null}
          </a>
        </p>
        <IconButton
          tone="dark"
          label={announcement.dismissLabel}
          onClick={dismiss}
          className="-my-xs shrink-0 border-transparent hover:opacity-[0.33] hover:bg-transparent hover:text-offwhite"
        >
          <X size={18} aria-hidden />
        </IconButton>
      </Container>
    </div>
  );
}
