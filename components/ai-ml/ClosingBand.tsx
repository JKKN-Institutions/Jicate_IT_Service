import { closingBand } from "@/content/ai-ml";

/**
 * Closing wordmark band (dark) — an oversized placeholder wordmark bleeding off
 * the bottom edge, echoing the giant footer wordmark on the reference. Sits
 * just above the global Footer. Placeholder mark/letters — swap for branding.
 */
export function ClosingBand() {
  return (
    <section
      aria-hidden
      className="relative isolate overflow-hidden bg-near-black pt-2xl"
    >
      <div className="flex items-center gap-[0.06em] px-l text-offwhite">
        <PlaceholderMark className="h-[clamp(4rem,14vw,11rem)] w-auto shrink-0 translate-y-[0.12em]" />
        <span className="font-display text-[clamp(4rem,14vw,11rem)] font-normal leading-[0.8] tracking-[-0.05em]">
          {closingBand.wordmark}
        </span>
      </div>
    </section>
  );
}

function PlaceholderMark({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 100" fill="currentColor" aria-hidden className={className}>
      <path d="M8 6 H40 L66 50 L40 94 H8 L34 50 Z" />
      <path d="M52 6 H84 L58 50 L84 94 H52 L78 50 Z" opacity="0.55" />
    </svg>
  );
}

export default ClosingBand;
