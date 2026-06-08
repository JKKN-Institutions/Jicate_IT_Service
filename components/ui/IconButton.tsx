import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react";

import { cn } from "@/lib/utils";

type IconButtonTone = "light" | "dark";

type IconButtonBaseProps = {
  /** Accessible label, applied as `aria-label`. */
  label: string;
  /** When provided, renders an `<a>` instead of a `<button>`. */
  href?: string;
  /** Border/hover treatment. `light` for light surfaces, `dark` for dark. */
  tone?: IconButtonTone;
  className?: string;
  /** Expected to be a lucide icon sized 18. */
  children?: ReactNode;
};

type IconButtonAsButton = IconButtonBaseProps &
  Omit<ButtonHTMLAttributes<HTMLButtonElement>, keyof IconButtonBaseProps> & {
    href?: undefined;
  };

type IconButtonAsAnchor = IconButtonBaseProps &
  Omit<AnchorHTMLAttributes<HTMLAnchorElement>, keyof IconButtonBaseProps> & {
    href: string;
  };

export type IconButtonProps = IconButtonAsButton | IconButtonAsAnchor;

const base = cn(
  "inline-flex items-center justify-center w-11 h-11 rounded-none border-[0.8px] transition-colors duration-200 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2",
);

const tones: Record<IconButtonTone, string> = {
  light:
    "border-ink text-ink hover:bg-ink hover:text-canvas focus-visible:outline-accent",
  dark: "border-offwhite text-offwhite hover:bg-offwhite hover:text-near-black focus-visible:outline-offwhite",
};

export function IconButton({
  label,
  href,
  tone = "light",
  className,
  children,
  ...rest
}: IconButtonProps) {
  const classes = cn(base, tones[tone], className);

  if (href !== undefined) {
    return (
      <a
        href={href}
        aria-label={label}
        className={classes}
        {...(rest as AnchorHTMLAttributes<HTMLAnchorElement>)}
      >
        {children}
      </a>
    );
  }

  return (
    <button
      type="button"
      aria-label={label}
      className={classes}
      {...(rest as ButtonHTMLAttributes<HTMLButtonElement>)}
    >
      {children}
    </button>
  );
}
