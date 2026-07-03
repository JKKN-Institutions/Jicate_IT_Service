"use client";

import { useEffect } from "react";
import { X } from "lucide-react";

import { ContactFormBody } from "@/components/shared/ContactFormBody";

/**
 * GetStartedDrawer — a right-hand slide-in panel opened by the header's
 * "Get Started" button. A dimmed overlay covers the page; the panel holds the
 * site's shared contact form (<ContactFormBody>) under an eyebrow + heading.
 * Closes on overlay click, the × button, or the Escape key; locks body scroll
 * while open. Light panel over a dark scrim (reference parity).
 */
export function GetStartedDrawer({ open, onClose }: { open: boolean; onClose: () => void }) {
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [open, onClose]);

  return (
    <div
      className={`fixed inset-0 z-[60] ${open ? "" : "pointer-events-none"}`}
      aria-hidden={!open}
    >
      {/* Dimmed scrim */}
      <button
        type="button"
        aria-label="Close"
        tabIndex={open ? 0 : -1}
        onClick={onClose}
        className={`absolute inset-0 h-full w-full cursor-default bg-near-black/60 transition-opacity duration-[var(--duration-micro-slow)] ${
          open ? "opacity-100" : "opacity-0"
        }`}
      />

      {/* Slide-in panel */}
      <div
        role="dialog"
        aria-modal="true"
        aria-label="Get started"
        className={`absolute right-0 top-0 h-full w-full max-w-[640px] overflow-y-auto bg-canvas text-ink shadow-[0_0_40px_rgba(0,0,0,0.25)] transition-transform duration-[var(--duration-macro)] ease-[var(--ease-standard)] ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col px-[clamp(24px,5vw,64px)] py-[32px]">
          <button
            type="button"
            onClick={onClose}
            aria-label="Close"
            className="mb-[24px] inline-flex h-[44px] w-[44px] items-center justify-center self-start rounded-[4px] border border-ink/20 text-ink transition-colors duration-200 hover:bg-ink hover:text-canvas focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
          >
            <X size={18} aria-hidden />
          </button>

          <span className="font-mono text-caption uppercase tracking-[0.08em] text-ink-light">
            Contact / Demo Request
          </span>

          <h2 className="mt-[16px] max-w-[16ch] font-display text-[clamp(1.75rem,3vw,2.75rem)] font-normal leading-[1.12] tracking-[-0.02em] text-ink">
            Interested in getting started with Jicate?
          </h2>

          <ContactFormBody submitLabel="Submit" />
        </div>
      </div>
    </div>
  );
}

export default GetStartedDrawer;
