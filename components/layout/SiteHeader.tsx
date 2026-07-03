"use client";

import { useEffect, useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import { Menu, Search, X } from "lucide-react";

import { Button, IconButton, Logo } from "@/components/ui";
import { siteConfig } from "@/config/site";

import { GetStartedDrawer } from "./GetStartedDrawer";
import { GET_STARTED_EVENT } from "./GetStartedButton";
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
  const router = useRouter();
  const pathname = usePathname();
  const onSearch = pathname === "/search";
  const [open, setOpen] = useState(false);
  const [getStartedOpen, setGetStartedOpen] = useState(false);

  /** Any "Get Started" trigger on the page (hero, CTAs) opens the drawer by
   *  dispatching GET_STARTED_EVENT on the window; listen for it here. */
  useEffect(() => {
    const openDrawer = () => setGetStartedOpen(true);
    window.addEventListener(GET_STARTED_EVENT, openDrawer);
    return () => window.removeEventListener(GET_STARTED_EVENT, openDrawer);
  }, []);

  /** On the search page the icon closes search (back, or home as a fallback). */
  const handleSearchToggle = () => {
    if (onSearch) {
      if (typeof window !== "undefined" && window.history.length > 1) {
        router.back();
      } else {
        router.push(siteConfig.routes.home);
      }
    } else {
      router.push("/search");
    }
  };

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
              onClick={() => setGetStartedOpen(true)}
              aria-haspopup="dialog"
              aria-expanded={getStartedOpen}
              className="hidden rounded-md border-transparent px-m tablet:inline-flex"
            >
              Get Started
            </Button>

            <IconButton
              tone="neutral"
              label={onSearch ? "Close search" : "Search"}
              onClick={handleSearchToggle}
            >
              {onSearch ? <X size={18} aria-hidden /> : <Search size={18} aria-hidden />}
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
      <GetStartedDrawer open={getStartedOpen} onClose={() => setGetStartedOpen(false)} />
    </header>
  );
}
