"use client";

import { useRef } from "react";
import { X } from "lucide-react";

import {
  ArrowLink,
  Container,
  Eyebrow,
  Grid,
  IconButton,
} from "@/components/ui";
import {
  megaMenuFeatured,
  megaMenuGroups,
} from "@/content/navigation";
import { useBodyScrollLock } from "@/hooks/useBodyScrollLock";
import { useFocusTrap } from "@/hooks/useFocusTrap";
import { cn } from "@/lib/utils";

export interface MegaMenuProps {
  open: boolean;
  onClose: () => void;
}

/**
 * Full-overlay mega menu (design 04 §3, 07 §4).
 *
 * Kept mounted at all times so open/close can transition (opacity + small
 * translateY via the motion tokens; instant under reduced motion). While open
 * it behaves as a modal dialog: focus is trapped, body scroll is locked, and
 * Escape / backdrop click / the close button all dismiss it. When closed it is
 * inert and hidden from assistive tech.
 */
export function MegaMenu({ open, onClose }: MegaMenuProps) {
  const panelRef = useRef<HTMLDivElement>(null);

  useFocusTrap(open, panelRef, onClose);
  useBodyScrollLock(open);

  return (
    <div
      id="mega-menu"
      role="dialog"
      aria-modal="true"
      aria-label="Site menu"
      aria-hidden={!open}
      data-open={open}
      // `inert` (boolean) removes the subtree from tab order + AT when closed.
      inert={open ? undefined : true}
      className={cn(
        "fixed inset-0 z-[60] transition-opacity duration-[var(--duration-reveal-slow)] ease-[var(--ease-out-soft)]",
        open ? "opacity-100" : "pointer-events-none opacity-0",
      )}
    >
      {/* Backdrop — click to close. */}
      <button
        type="button"
        aria-hidden
        tabIndex={-1}
        onClick={onClose}
        className="absolute inset-0 h-full w-full cursor-default bg-near-black/40"
      />

      {/* Panel */}
      <div
        ref={panelRef}
        className={cn(
          "absolute inset-x-0 top-0 max-h-[100svh] overflow-y-auto bg-canvas text-ink transition-transform duration-[var(--duration-reveal-slow)] ease-[var(--ease-out-soft)] motion-reduce:transform-none",
          open ? "translate-y-0" : "-translate-y-2",
        )}
      >
        <Container className="py-l">
          <div className="flex items-center justify-end pb-l">
            <IconButton tone="light" label="Close menu" onClick={onClose}>
              <X size={18} aria-hidden />
            </IconButton>
          </div>

          <Grid>
            {megaMenuGroups.map((group) => (
              <nav
                key={group.heading}
                aria-label={group.heading}
                className="col-span-12 tablet:col-span-6 desktop:col-span-4 flex flex-col gap-s"
              >
                <Eyebrow as="h2" className="text-ink-light">
                  {group.heading}
                </Eyebrow>
                <ul className="flex flex-col gap-xs">
                  {group.links.map((link) => (
                    <li key={`${group.heading}-${link.href}-${link.label}`}>
                      <ArrowLink
                        href={link.href}
                        arrow={link.arrow}
                        external={link.external}
                        className={cn(
                          "text-body",
                          link.dimmed ? "text-ink-light" : "text-ink",
                          "hover:text-accent",
                        )}
                      >
                        {link.label}
                      </ArrowLink>
                    </li>
                  ))}
                </ul>
              </nav>
            ))}

            {megaMenuFeatured.map((card) => (
              <article
                key={card.headline}
                className="col-span-12 tablet:col-span-6 flex flex-col gap-s"
              >
                <div
                  aria-hidden
                  className="hidden aspect-video w-full bg-surface-medium tablet:block"
                />
                <h3 className="font-display text-headline text-ink">
                  {card.headline}
                </h3>
                <p className="text-caption text-ink-medium">{card.caption}</p>
                <ArrowLink
                  href={card.link.href}
                  arrow={card.link.arrow}
                  external={card.link.external}
                >
                  {card.link.label}
                </ArrowLink>
              </article>
            ))}
          </Grid>
        </Container>
      </div>
    </div>
  );
}
