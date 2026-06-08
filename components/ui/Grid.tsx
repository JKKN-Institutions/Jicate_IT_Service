import type { ElementType, ComponentPropsWithoutRef, ReactNode } from "react";
import { cn } from "@/lib/utils";

type GridProps<T extends ElementType> = {
  as?: T;
  className?: string;
  children?: ReactNode;
} & Omit<ComponentPropsWithoutRef<T>, "as" | "className" | "children">;

/**
 * 12-column grid with the measured minmax(10px,1fr) floor.
 * Place children with col-span-* / col-start-* utilities.
 */
export function Grid<T extends ElementType = "div">({
  as,
  className,
  children,
  ...rest
}: GridProps<T>) {
  const Tag = (as ?? "div") as ElementType;
  return (
    <Tag className={cn("grid-12", className)} {...rest}>
      {children}
    </Tag>
  );
}
