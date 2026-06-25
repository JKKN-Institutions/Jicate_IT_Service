"use client";

import { useState } from "react";
import { Menu, Search } from "lucide-react";

import { Button, IconButton, Logo } from "@/components/ui";
import { siteConfig } from "@/config/site";

import { MegaMenu } from "./MegaMenu";

/**
 * Site header / primary navigation (design 04 §2, 07 §4).
 *
 * Fixed at the top as a floating frosted-glass bar (Palantir `headerBg`): a
 * light-gray tint at 10% over a 10px backdrop blur, 10px radius, soft drop
 * shadow, 70px tall — it stays over the hero and page content (no solid swap
 * on scroll). The tinted background is a separate 0.9-opacity layer so it
 * never dims the logo or buttons on top.
 *
 * Interactive leaf: holds the mega-menu open state.
 */
export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 p-4 text-offwhite">
      <nav aria-label="Primary" className="relative h-[70px]">
        {/* Frosted-glass header bar (Palantir `headerBg`): light-gray tint at
            10% over a 10px backdrop blur, 10px radius, soft drop shadow. A
            separate layer behind the content, so its 0.9 opacity never dims
            the logo or buttons. */}
        <div
          aria-hidden
          className="absolute inset-0 rounded-[10px] bg-[hsla(0,0%,67%,0.1)] opacity-90 shadow-[0_2px_10px_rgba(0,0,0,0.1)] backdrop-blur-[10px]"
        />

        <div className="relative flex h-full items-center justify-between gap-s px-4">
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
              className="hidden rounded-md border-transparent px-m tablet:inline-flex"
            >
              Get Started
            </Button>

            <IconButton tone="neutral" label="Search">
              <Search size={18} aria-hidden />
            </IconButton>

            <IconButton
              tone="neutral"
              label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              aria-controls="mega-menu"
              onClick={() => setOpen((value) => !value)}
            >
              <Menu size={18} aria-hidden />
            </IconButton>
          </div>
        </div>
      </nav>

      <MegaMenu open={open} onClose={() => setOpen(false)} />
    </header>
  );
}
