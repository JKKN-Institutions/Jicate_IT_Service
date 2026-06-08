import type { ElementType, ComponentPropsWithoutRef, ReactNode } from "react";
import { cn } from "@/lib/utils";

type SectionProps<T extends ElementType> = {
  as?: T;
  tone?: "light" | "dark";
  className?: string;
  id?: string;
  children?: ReactNode;
} & Omit<ComponentPropsWithoutRef<T>, "as" | "className" | "children" | "id">;

/**
 * Section shell — 60px vertical rhythm. Dark tone inverts to the
 * near-black surface with offwhite text. Callers may add
 * relative/overflow utilities via `className`.
 */
export function Section<T extends ElementType = "section">({
  as,
  tone = "light",
  className,
  id,
  children,
  ...rest
}: SectionProps<T>) {
  const Tag = (as ?? "section") as ElementType;
  return (
    <Tag
      id={id}
      className={cn("section", tone === "dark" && "bg-near-black text-offwhite", className)}
      {...rest}
    >
      {children}
    </Tag>
  );
}
