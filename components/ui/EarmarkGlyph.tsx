import type { EarmarkVariant } from "@/types";

export interface EarmarkGlyphProps {
  variant: EarmarkVariant;
  size?: number;
  className?: string;
}

export function EarmarkGlyph({ variant, size = 24, className }: EarmarkGlyphProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      aria-hidden
      className={className}
    >
      {variant === "circle" ? (
        <circle cx={12} cy={12} r={9} />
      ) : (
        <path d="M12 3 L21 20 L3 20 Z" />
      )}
    </svg>
  );
}
