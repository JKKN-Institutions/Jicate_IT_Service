import { Eyebrow, Arrow } from "@/components/ui";
import {
  footerColumns,
  socialLinks,
  legal,
  footerContactLink,
} from "@/content/navigation";
import { cn } from "@/lib/utils";
import type { NavLink } from "@/types";

import { SocialPill } from "./SocialPill";

/**
 * FooterLink — a single directory entry (reference footer §11).
 *
 * Hover effect (Palantir-parity): a leading `→` glyph is hidden by default
 * (absolutely positioned at the left edge, faded out, nudged left) and on
 * hover/focus it fades in while the label slides right to make room. The arrow
 * is `absolute` so the reveal never reflows neighbouring links.
 *
 * LIGHT footer: ink label on white. `dimmed` renders the softer `ink-light`.
 * Reduced-motion drops the slide but keeps the reveal.
 */
function FooterLink({ label, href, arrow, external, dimmed }: NavLink) {
  return (
    <a
      href={href}
      {...(external ? { target: "_blank", rel: "noreferrer" } : {})}
      className={cn(
        "group relative inline-flex items-center text-body-sm transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink",
        dimmed ? "text-ink-light hover:text-ink" : "text-ink hover:text-ink",
      )}
    >
      {/* Leading arrow — revealed on hover/focus, slides in from the left. */}
      <Arrow
        kind="big"
        className="absolute left-0 top-1/2 -translate-x-1 -translate-y-1/2 opacity-0 transition-all duration-[var(--duration-micro)] ease-[var(--ease-standard)] group-hover:translate-x-0 group-hover:opacity-100 group-focus-visible:translate-x-0 group-focus-visible:opacity-100 motion-reduce:transition-[opacity]"
      />
      {/* Label (+ any trailing glyph) nudges right to make room for the arrow. */}
      <span className="inline-flex items-center gap-tiny transition-transform duration-[var(--duration-micro)] ease-[var(--ease-standard)] group-hover:translate-x-[1.15em] group-focus-visible:translate-x-[1.15em] motion-reduce:transform-none">
        {label}
        {arrow ? <Arrow kind={arrow} /> : null}
      </span>
    </a>
  );
}

/**
 * Footer — the page's closing infrastructure, matched to the reference footer.
 *
 * Server Component: a LIGHT band (white canvas, ink text). Two-up layout —
 *   • LEFT RAIL: copyright, a hairline rule, and the outlined social pills
 *     (+ Contact) stacked vertically.
 *   • RIGHT: a four-column mega-directory (OFFERINGS / IMPACT STUDIOS /
 *     CAPABILITIES / DOCUMENTS) with mono UPPERCASE headings.
 * All copy comes from `@/content/navigation` — nothing is hardcoded here.
 */
export function Footer() {
  // Copyright renders on two lines: "© … Inc." then "All rights reserved."
  const [copyrightOwner, ...copyrightRest] = legal.copyright.split(". ");

  return (
    <footer
      role="contentinfo"
      className="mt-xl border-t border-ink/10 bg-canvas pb-2xl pt-xl text-ink tablet:mt-2xl"
    >
      {/* Footer: a narrow brand rail on the far left, then the directory columns
          as a group horizontally centered in the remaining space. */}
      <div className="mx-auto w-full max-w-[1760px] px-[clamp(20px,4vw,60px)]">
        <div className="flex flex-col gap-2xl desktop:flex-row desktop:items-start desktop:gap-2xl">
          {/* LEFT RAIL — brand / cookies / language / social. */}
          <div className="flex flex-col gap-l desktop:w-[220px] desktop:shrink-0">
            <div className="flex flex-col gap-tiny text-body-sm text-ink-light">
              <span>{copyrightOwner}.</span>
              {copyrightRest.length ? <span>{copyrightRest.join(". ")}</span> : null}
            </div>

            <hr className="max-w-[220px] border-0 border-t border-ink/15" />

            {/* Outlined social pills + Contact — stacked, full-rail width. */}
            <div className="mt-s flex max-w-[220px] flex-col gap-s">
              <ul aria-label="Jicate IT Service on social media" className="flex flex-col gap-s">
                {socialLinks.map((social) => (
                  <li key={social.label}>
                    <SocialPill label={social.label} href={social.href} className="w-full" />
                  </li>
                ))}
              </ul>

              {/* Contact — internal link, same pill styling (opens in-tab). */}
              <a
                href={footerContactLink.href}
                aria-label={footerContactLink.label}
                className="inline-flex min-h-[44px] w-full items-center justify-center rounded-full border-[0.8px] border-ink/30 px-s py-tiny font-mono uppercase tracking-[0.05em] text-ink transition-colors duration-200 hover:border-ink hover:bg-ink hover:text-canvas focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink"
              >
                {footerContactLink.label}
              </a>
            </div>
          </div>

          {/* Directory columns — OFFERINGS (2-col, centered title) + CAPABILITIES,
              horizontally centered as a group in the space beside the left rail. */}
          <div className="flex flex-1 flex-wrap justify-center gap-x-2xl gap-y-2xl desktop:gap-x-3xl">
            {footerColumns.map((column) => {
              const isOfferings = column.heading === "OFFERINGS";
              return (
                <nav key={column.heading} aria-label={column.heading}>
                <Eyebrow as="h2" className={cn("text-ink-light", isOfferings && "block text-center")}>
                  {column.heading}
                </Eyebrow>
                <ul
                  className={cn(
                    "mt-m",
                    isOfferings ? "grid grid-cols-1 gap-y-s tablet:grid-cols-2 tablet:gap-x-2xl" : "flex flex-col gap-s",
                  )}
                >
                  {column.links.map((link) => (
                    <li key={`${column.heading}-${link.label}`}>
                      <FooterLink {...link} />
                    </li>
                  ))}
                </ul>
              </nav>
              );
            })}
          </div>
        </div>
      </div>
    </footer>
  );
}
