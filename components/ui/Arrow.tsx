import { cn } from "@/lib/utils";
import type { ArrowKind } from "@/types";

export interface ArrowProps {
  kind: ArrowKind;
  className?: string;
}

const GLYPHS: Record<ArrowKind, string> = {
  external: "↗", // ↗
  drillin: "↳", // ↳
  cta: "↖", // ↖
  big: "→", // →
};

export function Arrow({ kind, className }: ArrowProps) {
  return (
    <span aria-hidden className={cn("inline-block", className)}>
      {GLYPHS[kind]}
    </span>
  );
}
