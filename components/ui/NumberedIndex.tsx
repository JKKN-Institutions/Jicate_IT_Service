import { cn } from "@/lib/utils";

export interface NumberedIndexProps {
  value: string;
  active?: boolean;
  className?: string;
}

export function NumberedIndex({ value, active, className }: NumberedIndexProps) {
  return (
    <span
      aria-hidden
      className={cn(
        "font-mono text-caption uppercase tracking-[0.05em]",
        active ? "text-accent" : "text-ink-light",
        className,
      )}
    >
      {value}
    </span>
  );
}
