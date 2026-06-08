import type { ElementType, ComponentPropsWithoutRef, ReactNode } from "react";
import { cn } from "@/lib/utils";

type ContainerProps<T extends ElementType> = {
  as?: T;
  wide?: boolean;
  className?: string;
  children?: ReactNode;
} & Omit<ComponentPropsWithoutRef<T>, "as" | "className" | "children">;

/**
 * Centered layout container — max 1440px (or 1480px when `wide`),
 * with a guaranteed 20px side rail. Maps to the `.h-contain` helper.
 */
export function Container<T extends ElementType = "div">({
  as,
  wide,
  className,
  children,
  ...rest
}: ContainerProps<T>) {
  const Tag = (as ?? "div") as ElementType;
  return (
    <Tag className={cn("h-contain", wide && "h-contain--wide", className)} {...rest}>
      {children}
    </Tag>
  );
}
