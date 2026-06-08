import { cn } from "@/lib/utils";
import type { ServiceItem as ServiceItemData } from "@/types";
import { ArrowLink, EarmarkGlyph, NumberedIndex } from "@/components/ui";

export interface ServiceItemProps {
  item: ServiceItemData;
  /**
   * When the sticky scrolly enhancement is running, the centered item is
   * `active`; non-active items dim. Undefined (the no-JS / reduced-motion
   * fallback) renders every item at full emphasis.
   */
  active?: boolean;
}

/**
 * One service line in the §7 numbered scrolly list (design 04 §11, 07 §7).
 *
 * Server component. The numbered `/0.x` index and the geometric earmark glyph
 * are decorative (`aria-hidden`, handled by the primitives); semantics live in
 * the real `<h3>` heading and the drill-in `ArrowLink`. The active item lights
 * its index + earmark to the pine-green accent; siblings dim to ink-light.
 */
export function ServiceItem({ item, active }: ServiceItemProps) {
  // `active === undefined` => static fallback: nothing is dimmed.
  const dimmed = active === false;

  return (
    <div
      className={cn(
        "flex flex-col gap-s transition-opacity duration-[var(--duration-reveal)] ease-[var(--ease-out-quint)] motion-reduce:transition-none",
        dimmed && "opacity-40",
      )}
    >
      <div className="flex items-center gap-s">
        <NumberedIndex value={item.index} active={active} />
        <span className={cn("transition-colors duration-200", active ? "text-accent" : "text-ink")}>
          <EarmarkGlyph variant={item.earmark} />
        </span>
      </div>

      <h3 className="font-display text-headline text-ink">{item.title}</h3>

      <p className="text-body text-ink-medium max-w-[44ch]">{item.body}</p>

      <ArrowLink href={item.link.href} arrow={item.link.arrow} external={item.link.external}>
        {item.link.label}
      </ArrowLink>
    </div>
  );
}
