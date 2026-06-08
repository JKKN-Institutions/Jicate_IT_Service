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

  return (
    <header
      data-solid={solid}
      className="fixed inset-x-0 top-s z-50 text-offwhite data-[solid=true]:text-ink"
    >
      <nav aria-label="Primary">
        <Container>
          {/* Floating frosted-glass bar — translucent + backdrop-blur (the
              "mirror"), rounded corners, hairline border and soft shadow.
              Tinted light over the dark hero; frosted-white once scrolled. */}
          <div
            className={cn(
              // Palantir headerBg properties: rgba(171,171,171,0.1) fill,
              // blur(10px), 10px radius, soft 0 2px 10px shadow, no border.
              "flex items-center justify-between gap-s rounded-[10px] bg-[rgba(171,171,171,0.1)] px-s py-xs shadow-[0px_2px_10px_0px_rgba(0,0,0,0.1)] backdrop-blur-[10px] transition-colors duration-[var(--duration-reveal-max)] ease-[var(--ease-standard)]",
              // Text/icon tone still switches for legibility (dark hero vs light page).
              solid ? "text-ink" : "text-offwhite",
            )}
          >
            <a
              href={siteConfig.routes.home}
              aria-label="Jicate IT Service — Home"
              className="inline-flex items-center transition-colors duration-[var(--duration-micro-slow)] ease-[var(--ease-standard)] hover:opacity-[0.33] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-current"
            >
              <Logo />
            </a>

            <div className="flex items-center gap-xs">
              <Button
                href={siteConfig.routes.getStarted}
                className="hidden rounded-[10px] px-m tablet:inline-flex"
              >
                Get Started
              </Button>

              <IconButton tone={iconTone} label="Search" className="rounded-[10px]">
                <Search size={18} aria-hidden />
              </IconButton>

              <IconButton
                tone={iconTone}
                label={open ? "Close menu" : "Open menu"}
                aria-expanded={open}
                aria-controls="mega-menu"
                onClick={() => setOpen((value) => !value)}
                className="rounded-[10px]"
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
