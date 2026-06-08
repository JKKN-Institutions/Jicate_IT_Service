import { Container, Eyebrow, Arrow } from "@/components/ui";
import { footerColumns, socialLinks, legal } from "@/content/navigation";
import { cn } from "@/lib/utils";
import type { NavLink } from "@/types";

import { SocialPill } from "./SocialPill";

/**
 * FooterLink — a single directory entry (design 04 §10 / 07 §11).
 *
 * - Default links: `text-offwhite`; dimmed links: `text-ink-light` brightening
 *   toward offwhite on hover.
 * - External links append the `↗` glyph with the standard hover nudge.
 * - `body-sm` (16px) per the footer type spec; visible focus ring on dark uses
 *   the offwhite outline.
 */
function FooterLink({ label, href, arrow, external, dimmed }: NavLink) {
  return (
    <a
      href={href}
      {...(external ? { target: "_blank", rel: "noreferrer" } : {})}
      className={cn(
        "group inline-flex items-center gap-tiny text-body-sm transition-colors duration-200 hover:text-offwhite focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-offwhite",
        dimmed ? "text-ink-light" : "text-offwhite hover:opacity-100",
      )}
    >
      {label}
      {arrow ? (
        <Arrow
          kind={arrow}
          className="transition-transform duration-[150ms] group-hover:translate-x-[0.22em] motion-reduce:transform-none"
        />
      ) : null}
    </a>
  );
}

/**
 * Footer — the page's closing infrastructure (design 07 §11 / 04 §10).
 *
 * Server Component: dark mega-directory on near-black with offwhite text.
 * Top = outlined social pills; middle = a 12-col grid of categorized link
 * columns (mono UPPERCASE headings, body-sm links); bottom = the legal row
 * (copyright, tagline, locale, legal links). All copy comes from
 * `@/content/navigation` — nothing is hardcoded.
 */
export function Footer() {
  return (
    <footer role="contentinfo" className="section bg-near-black text-offwhite">
      <Container className="flex flex-col gap-2xl">
        {/* Social pills — the only rounded-full elements in the system. */}
        <ul
          aria-label="Jicate IT Service on social media"
          className="flex flex-wrap items-center gap-s"
        >
          {socialLinks.map((social) => (
            <li key={social.label}>
              <SocialPill label={social.label} href={social.href} />
            </li>
          ))}
        </ul>

        {/* Mega-directory: one navigation landmark per category column. */}
        <div className="grid-12 gap-y-xl">
          {footerColumns.map((column) => (
            <nav
              key={column.heading}
              aria-label={column.heading}
              className="col-span-12 tablet:col-span-6 desktop:col-span-2"
            >
              <Eyebrow as="h2" className="text-offwhite">
                {column.heading}
              </Eyebrow>
              <ul className="mt-m flex flex-col gap-s">
                {column.links.map((link) => (
                  <li key={`${column.heading}-${link.href}`}>
                    <FooterLink {...link} />
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>

        {/* Legal row. */}
        <div className="flex flex-col gap-m border-t border-offwhite/10 pt-l tablet:flex-row tablet:items-center tablet:justify-between">
          <div className="flex flex-col gap-tiny text-ink-light tablet:flex-row tablet:items-center tablet:gap-l">
            <span className="text-body-sm">{legal.copyright}</span>
            {legal.tagline ? (
              <span className="font-mono text-caption uppercase tracking-[0.05em]">
                {legal.tagline}
              </span>
            ) : null}
            <span className="font-mono text-caption uppercase tracking-[0.05em]">
              {legal.locale}
            </span>
          </div>
          <ul className="flex flex-wrap items-center gap-l">
            {legal.links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-body-sm text-ink-light transition-colors duration-200 hover:text-offwhite focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-offwhite"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </footer>
  );
}
