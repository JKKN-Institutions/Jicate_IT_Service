import type { AnchorHTMLAttributes, ReactNode } from "react";

import { cn } from "@/lib/utils";
import type { ArrowKind } from "@/types";

import { Arrow } from "./Arrow";

export type ArrowLinkProps = {
  href: string;
  /** Glyph rendered after the label. Defaults to the drill-in arrow. */
  arrow?: ArrowKind;
  /** When true, opens in a new tab with safe rel attributes. */
  external?: boolean;
  className?: string;
  children?: ReactNode;
} & Omit<
  AnchorHTMLAttributes<HTMLAnchorElement>,
  "href" | "className" | "children" | "target" | "rel"
>;

export function ArrowLink({
  href,
  arrow = "drillin",
  external = false,
  className,
  children,
  ...rest
}: ArrowLinkProps) {
  return (
    <a
      href={href}
      className={cn(
        "group inline-flex items-center gap-tiny text-accent transition-colors duration-200 hover:text-hover focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent",
        className,
      )}
      {...(external ? { target: "_blank", rel: "noreferrer" } : {})}
      {...rest}
    >
      {children}
      <Arrow
        kind={arrow}
        className="transition-transform duration-[150ms] group-hover:translate-x-[0.22em] motion-reduce:transform-none"
      />
    </a>
  );
}
