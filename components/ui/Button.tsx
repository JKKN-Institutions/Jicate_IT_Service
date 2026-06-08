import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react";

import { cn } from "@/lib/utils";
import type { ArrowKind } from "@/types";

import { Arrow } from "./Arrow";

type ButtonVariant = "primary" | "inverse";

type ButtonBaseProps = {
  /** Visual treatment. `primary` for light surfaces, `inverse` for dark. */
  variant?: ButtonVariant;
  /** When provided, renders an `<a>` instead of a `<button>`. */
  href?: string;
  /** Optional leading arrow glyph, rendered before children. */
  arrow?: ArrowKind;
  className?: string;
  children?: ReactNode;
};

type ButtonAsButton = ButtonBaseProps &
  Omit<ButtonHTMLAttributes<HTMLButtonElement>, keyof ButtonBaseProps> & {
    href?: undefined;
  };

type ButtonAsAnchor = ButtonBaseProps &
  Omit<AnchorHTMLAttributes<HTMLAnchorElement>, keyof ButtonBaseProps> & {
    href: string;
  };

export type ButtonProps = ButtonAsButton | ButtonAsAnchor;

const base = cn(
  "inline-flex items-center gap-xs rounded-none border-[0.8px] px-s py-xs text-body-sm font-normal transition-colors duration-200 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2",
);

const variants: Record<ButtonVariant, string> = {
  primary:
    "bg-canvas text-ink border-ink hover:bg-ink hover:text-canvas focus-visible:outline-accent",
  inverse:
    "bg-near-black text-offwhite border-offwhite hover:bg-offwhite hover:text-near-black focus-visible:outline-offwhite",
};

export function Button({
  variant = "primary",
  href,
  arrow,
  className,
  children,
  ...rest
}: ButtonProps) {
  const classes = cn(base, variants[variant], className);
  const content = (
    <>
      {arrow ? <Arrow kind={arrow} /> : null}
      {children}
    </>
  );

  if (href !== undefined) {
    return (
      <a
        href={href}
        className={classes}
        {...(rest as AnchorHTMLAttributes<HTMLAnchorElement>)}
      >
        {content}
      </a>
    );
  }

  return (
    <button
      type="button"
      className={classes}
      {...(rest as ButtonHTMLAttributes<HTMLButtonElement>)}
    >
      {content}
    </button>
  );
}
