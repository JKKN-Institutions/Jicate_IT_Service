"use client";

import { useState } from "react";
import { Menu, Search } from "lucide-react";

import { Button, IconButton, Logo } from "@/components/ui";
import { siteConfig } from "@/config/site";

import { MegaMenu } from "./MegaMenu";

/**
 * Site header / primary navigation (design 04 §2, 07 §4).
 *
 * Fixed at the top, 86px tall, with a frosted-glass bar (semi-transparent
 * dark tint + backdrop blur) that stays over the hero and page content —
 * no solid white swap on scroll.
 *
 * Interactive leaf: holds the mega-menu open state.
 */
export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed p-4 inset-x-0 z-50 text-offwhite">
      <nav
        aria-label="Primary"
        className=""
      >
        <div>
          <div className="flex h-nav items-center justify-between gap-s px-4 py-2 rounded-xl bg-near-black/35 backdrop-blur-md supports-[backdrop-filter]:bg-near-black/25">
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

              <IconButton tone="dark" label="Search">
                <Search size={18} aria-hidden />
              </IconButton>

              <IconButton
                tone="dark"
                label={open ? "Close menu" : "Open menu"}
                aria-expanded={open}
                aria-controls="mega-menu"
                onClick={() => setOpen((value) => !value)}
              >
                <Menu size={18} aria-hidden />
              </IconButton>
            </div>
          </div>
        </div>
      </nav>

      <MegaMenu open={open} onClose={() => setOpen(false)} />
    </header>
  );
}
