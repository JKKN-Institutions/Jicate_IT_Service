"use client";

import {
  useEffect,
  useRef,
  useState,
  type CSSProperties,
  type ElementType,
  type ReactNode,
} from "react";
import { cn } from "@/lib/utils";
import { observeOnce } from "@/hooks/useInView";

/** Custom CSS property carrying the per-item stagger index. */
type RevealStyle = CSSProperties & { "--i"?: number };

export interface RevealProps {
  /** Element/tag to render. Defaults to `div`. */
  as?: ElementType;
  /** Stagger index within a reveal group; drives `transition-delay` via `--i`. */
  index?: number;
  className?: string;
  style?: CSSProperties;
  children?: ReactNode;
}

/**
 * Progressive-enhancement reveal wrapper.
 *
 * Renders visible content on the server and on first client paint — the hiding
 * is applied only via the `.reveal` class (globals.css), which the reduced-
 * motion guard already neutralizes. After hydration, the shared
 * IntersectionObserver flips `data-visible="true"` once the element scrolls
 * into view (fires a single time, then unobserves). If JS or the observer is
 * unavailable, content stays visible.
 *
 * Any extra props (id, aria-*, etc.) pass through to the rendered element.
 */
export function Reveal({
  as: Tag = "div",
  index = 0,
  className,
  style,
  children,
  ...rest
}: RevealProps & Record<string, unknown>) {
  const ref = useRef<HTMLElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node || visible) return;
    return observeOnce(node, () => setVisible(true));
    // Reveal once; never re-observe after it becomes visible.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const mergedStyle: RevealStyle = { ...style, "--i": index };

  return (
    <Tag
      ref={ref}
      className={cn("reveal", className)}
      style={mergedStyle}
      data-visible={visible ? "true" : undefined}
      {...rest}
    >
      {children}
    </Tag>
  );
}

export default Reveal;
