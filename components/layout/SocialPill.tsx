import { cn } from "@/lib/utils";

export interface SocialPillProps {
  /** UPPERCASE channel label, e.g. "LINKEDIN". */
  label: string;
  /** Destination URL (external social channel). */
  href: string;
  className?: string;
}

/**
 * Outlined, pill-shaped social link — the ONLY `rounded-full` element in the
 * system (design 04 §10 / 07 §11). Hairline 0.8px border, mono UPPERCASE label,
 * centered. On the LIGHT footer band it shows an ink hairline + ink label and
 * inverts to a filled ink chip on hover. Width is caller-controlled (the footer
 * stacks them full-width in the left rail).
 */
export function SocialPill({ label, href, className }: SocialPillProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      aria-label={`Jicate IT Service on ${label}`}
      className={cn(
        "inline-flex min-h-[44px] items-center justify-center rounded-full border-[0.8px] border-ink/30 px-s py-tiny font-mono text-caption uppercase tracking-[0.05em] text-ink transition-colors duration-200 hover:border-ink hover:bg-ink hover:text-canvas focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink",
        className,
      )}
    >
      {label}
    </a>
  );
}
