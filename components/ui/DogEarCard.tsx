import type { ComponentPropsWithoutRef, ElementType, ReactNode } from "react";

import { cn } from "@/lib/utils";

type DogEarCardOwnProps<T extends ElementType> = {
  as?: T;
  className?: string;
  children?: ReactNode;
};

export type DogEarCardProps<T extends ElementType = "div"> =
  DogEarCardOwnProps<T> &
    Omit<ComponentPropsWithoutRef<T>, keyof DogEarCardOwnProps<T>>;

export function DogEarCard<T extends ElementType = "div">({
  as,
  className,
  children,
  ...rest
}: DogEarCardProps<T>) {
  const Component = (as ?? "div") as ElementType;

  return (
    <Component
      className={cn(
        "relative bg-surface-medium rounded-none [clip-path:polygon(0_0,calc(100%-18px)_0,100%_18px,100%_100%,0_100%)]",
        className,
      )}
      {...rest}
    >
      {children}
    </Component>
  );
}
