"use client";

import type { ReactNode } from "react";

import { Button } from "@/components/ui";
import type { ArrowKind } from "@/types";

/** Fired on the window when any "Get Started" trigger is clicked; the
 *  SiteHeader listens for it and opens the shared GetStartedDrawer. */
export const GET_STARTED_EVENT = "jicate:open-get-started";

/** Opens the shared Get Started drawer from anywhere on the page. */
export function openGetStartedDrawer() {
  if (typeof window !== "undefined") {
    window.dispatchEvent(new CustomEvent(GET_STARTED_EVENT));
  }
}

/**
 * A "Get Started" button that opens the site-wide off-canvas contact drawer
 * (the same one the header's Get Started button opens) instead of navigating.
 * Use anywhere a Get Started CTA should surface the shared form in place.
 */
export function GetStartedButton({
  variant = "primary",
  arrow,
  className,
  children,
}: {
  variant?: "primary" | "inverse";
  arrow?: ArrowKind;
  className?: string;
  children: ReactNode;
}) {
  return (
    <Button
      variant={variant}
      arrow={arrow}
      className={className}
      onClick={openGetStartedDrawer}
      aria-haspopup="dialog"
    >
      {children}
    </Button>
  );
}

export default GetStartedButton;
