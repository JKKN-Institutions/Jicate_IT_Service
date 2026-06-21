import { Container, Eyebrow, Button, ArrowLink } from "@/components/ui";
import { hero } from "@/content/home";

import { HeroVideo } from "./HeroVideo";

/**
 * Section 3 — Hero (design/07 §5, design/05 §3.3).
 *
 * Full-bleed DARK media moment: the animated `HeroBackdrop` fills the section
 * with a near-black engineered grid + soft blue glow, a darkening overlay keeps
 * the type legible, and the display H1 "settles in" on mount (the `.settle`
 * one-shot from globals.css; reduced-motion resolves it to the final state).
 *
 * Layout/overlap rules (CLAUDE.md): the fixed transparent SiteHeader sits on
 * top, so the hero needs no extra top padding — its content is centered in the
 * viewport (`min-h-[100svh]`) and the dark media bleeds up behind the nav.
 * `relative isolate` + `-z-10` layers keep the backdrop/overlay behind content.
 *
 * The `data-nav-sentinel` span at the section bottom is what SiteHeader's
 * `useNavScrollState` observes to flip the nav transparent -> solid on scroll.
 *
 * Server Component shell — only the backdrop is a `"use client"` leaf.
 */
export function Hero() {
  return (
    <section className="relative isolate flex min-h-[100svh] items-center overflow-hidden bg-near-black text-offwhite">
      {/* Full-bleed looping background video (client leaf). */}
      <HeroVideo className="-z-10" />

      {/* Darkening overlay for legibility over the video (near-black family). */}
      <div aria-hidden className="absolute inset-0 -z-10 bg-near-black/55" />

      <Container className="flex flex-col items-center gap-m py-2xl text-center tablet:gap-l tablet:py-3xl">
        <Eyebrow size="eyebrow" className="text-offwhite">
          {hero.eyebrow}
        </Eyebrow>

        <h1 className="settle max-w-[20ch] text-balance font-display text-hero font-normal tracking-[-0.0425em] text-offwhite">
          {hero.headline}
        </h1>

        <p className="settle max-w-[48ch] text-body-lg text-offwhite/85">
          {hero.subcopy}
        </p>

        <div className="flex flex-wrap items-center justify-center gap-l">
          <Button
            variant="inverse"
            href={hero.primaryCTA.href}
            arrow={hero.primaryCTA.arrow}
          >
            {hero.primaryCTA.label}
          </Button>

          <ArrowLink
            href={hero.secondaryLink.href}
            arrow={hero.secondaryLink.arrow}
            external={hero.secondaryLink.external}
            className="text-blue hover:text-offwhite focus-visible:outline-offwhite"
          >
            {hero.secondaryLink.label}
          </ArrowLink>
        </div>
      </Container>

      {/* Nav scroll sentinel — SiteHeader/useNavScrollState observes this to go
          solid once it scrolls out of view (see CLAUDE.md overlap rules). */}
      <span
        data-nav-sentinel
        aria-hidden
        className="pointer-events-none absolute bottom-0 left-0 h-px w-full"
      />
    </section>
  );
}

export default Hero;
