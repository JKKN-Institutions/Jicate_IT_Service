import type { ComponentPropsWithoutRef, ElementType, ReactNode } from "react";

import { cn } from "@/lib/utils";

export interface EyebrowProps {
  as?: ElementType;
  size?: "caption" | "eyebrow";
  className?: string;
  children?: ReactNode;
}

export function Eyebrow({
  as,
  size = "caption",
  className,
  children,
  ...rest
}: EyebrowProps & Omit<ComponentPropsWithoutRef<"span">, keyof EyebrowProps>) {
  const Tag = as ?? "span";

  return (
    <Tag
      className={cn(
        "font-mono uppercase tracking-[0.05em]",
        size === "eyebrow" ? "text-eyebrow" : "text-caption",
        className,
      )}
      {...rest}
    >
      {children}
    </Tag>
  );
}
