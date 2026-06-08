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
 * inverts to a filled chip on hover. Rendered on the dark footer band, so the
 * offwhite outline + offwhite focus ring keep it visible.
 */
export function SocialPill({ label, href, className }: SocialPillProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      aria-label={`Jicate IT Service on ${label}`}
      className={cn(
        "inline-flex min-h-[44px] items-center rounded-full border-[0.8px] border-offwhite px-s py-tiny font-mono text-caption uppercase tracking-[0.05em] text-offwhite transition-colors duration-200 hover:bg-offwhite hover:text-near-black focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-offwhite",
        className,
      )}
    >
      {label}
    </a>
  );
}
