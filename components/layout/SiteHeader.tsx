"use client";

import { useState } from "react";
import { Menu, Search } from "lucide-react";

import { Button, Container, IconButton, Logo } from "@/components/ui";
import { siteConfig } from "@/config/site";
import { useNavScrollState } from "@/hooks/useNavScrollState";
import { cn } from "@/lib/utils";

import { MegaMenu } from "./MegaMenu";

/**
 * Site header / primary navigation (design 04 §2, 07 §4).
 *
 * Fixed at the top, 86px tall, sitting over the dark hero in a TRANSPARENT
 * state and crossfading to a SOLID light bar once the hero scrolls away
 * (driven by `useNavScrollState`, which watches the hero's bottom sentinel).
 *
 * Interactive leaf: holds the mega-menu open state and the scroll-state subscription.
 */
export function SiteHeader() {
  const solid = useNavScrollState();
  const [open, setOpen] = useState(false);

  const iconTone = solid ? "light" : "dark";

  // Reference parity: search/menu render as PLAIN icons (no bordered box),
  // dimming on hover instead of filling. Borderless reads in both nav states
  // because the icons are glyphs, not fills.
  const bareIcon =
    "border-transparent hover:bg-transparent hover:text-inherit hover:opacity-60";

  return (
    <header
      data-solid={solid}
      className="fixed inset-x-0 top-0 z-50 text-offwhite data-[solid=true]:text-ink"
    >
      {/* Flat full-bleed bar (design 03/04): transparent over the dark hero,
          crossfading to a solid surface-light bar with a hairline underline
          once the hero scrolls away. Sharp corners, no float, no blur. */}
      <nav
        aria-label="Primary"
        className={cn(
          "border-b-[0.8px] transition-colors duration-[var(--duration-reveal-max)] ease-[var(--ease-standard)]",
          solid
            ? "border-ink/10 bg-surface-light"
            : "border-transparent bg-transparent",
        )}
      >
        <Container>
          <div className="flex h-nav items-center justify-between gap-s">
            <a
              href={siteConfig.routes.home}
              aria-label="Jicate IT Service — Home"
              className="inline-flex items-center transition-colors duration-[var(--duration-micro-slow)] ease-[var(--ease-standard)] hover:opacity-[0.33] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-current"
            >
              <Logo className="h-7" />
            </a>

            <div className="flex items-center gap-xs">
              <Button
                href={siteConfig.routes.getStarted}
                className={cn(
                  // Rounded, clean white pill like the reference. Border is
                  // transparent over the dark hero; restored once the bar goes
                  // solid (near-white) so the white button stays legible.
                  "hidden rounded-md px-m tablet:inline-flex",
                  solid ? "border-ink" : "border-transparent",
                )}
              >
                Get Started
              </Button>

              <IconButton tone={iconTone} label="Search" className={bareIcon}>
                <Search size={18} aria-hidden />
              </IconButton>

              <IconButton
                tone={iconTone}
                label={open ? "Close menu" : "Open menu"}
                aria-expanded={open}
                aria-controls="mega-menu"
                onClick={() => setOpen((value) => !value)}
                className={bareIcon}
              >
                <Menu size={18} aria-hidden />
              </IconButton>
            </div>
          </div>
        </Container>
      </nav>

      <MegaMenu open={open} onClose={() => setOpen(false)} />
    </header>
  );
}
