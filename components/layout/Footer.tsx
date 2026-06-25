import { Eyebrow, Arrow } from "@/components/ui";
import {
  footerColumns,
  socialLinks,
  legal,
  footerLanguages,
  cookiesSettingsLabel,
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
 *   • LEFT RAIL: copyright, a hairline rule, "Cookies Settings", the US/UK/JP
 *     language switcher, and the outlined social pills stacked vertically.
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
      {/* Full-bleed footer: one row spanning the full width — a narrow brand
          rail on the far left, then the four directory columns spread evenly to
          the right edge (reference parity). */}
      <div className="mx-auto w-full max-w-[1760px] px-[clamp(20px,4vw,60px)]">
        <div className="grid grid-cols-2 gap-x-l gap-y-2xl tablet:grid-cols-4 desktop:grid-cols-5">
          {/* LEFT RAIL — brand / cookies / language / social. */}
          <div className="col-span-2 flex flex-col gap-l tablet:col-span-4 desktop:col-span-1">
            <div className="flex flex-col gap-tiny text-body-sm text-ink-light">
              <span>{copyrightOwner}.</span>
              {copyrightRest.length ? <span>{copyrightRest.join(". ")}</span> : null}
            </div>

            <hr className="max-w-[220px] border-0 border-t border-ink/15" />

            <a
              href="#"
              className="text-body-sm text-ink-light transition-colors duration-200 hover:text-ink focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink"
            >
              {cookiesSettingsLabel}
            </a>

            {/* Language switcher — visual toggle, first entry active. */}
            <div
              aria-label="Language"
              className="flex items-center gap-s font-mono text-caption uppercase tracking-[0.08em]"
            >
              {footerLanguages.map((lang, i) => (
                <button
                  key={lang}
                  type="button"
                  aria-pressed={i === 0}
                  className={cn(
                    "transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink",
                    i === 0 ? "text-ink" : "text-ink-light hover:text-ink",
                  )}
                >
                  {lang}
                </button>
              ))}
            </div>

            {/* Outlined social pills — stacked, full-rail width. */}
            <ul
              aria-label="Jicate IT Service on social media"
              className="mt-s flex max-w-[220px] flex-col gap-s"
            >
              {socialLinks.map((social) => (
                <li key={social.label}>
                  <SocialPill label={social.label} href={social.href} className="w-full" />
                </li>
              ))}
            </ul>
          </div>

          {/* Four directory columns — each one column of the same full-width row. */}
          {footerColumns.map((column) => (
            <nav key={column.heading} aria-label={column.heading}>
              <Eyebrow as="h2" className="text-ink-light">
                {column.heading}
              </Eyebrow>
              <ul className="mt-m flex flex-col gap-s">
                {column.links.map((link) => (
                  <li key={`${column.heading}-${link.label}`}>
                    <FooterLink {...link} />
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>
      </div>
    </footer>
  );
}
