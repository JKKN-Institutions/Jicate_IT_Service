/**
 * Navigation, mega-menu, and footer content for the Jicate IT Service homepage.
 *
 * All copy is ORIGINAL Jicate IT Service content, transcribed from
 * design/07-homepage-content-architecture.md (§4 nav/mega-menu IA, §11 footer).
 *
 * Import with: import { primaryNav, megaMenuGroups, ... } from "@/content/navigation";
 */
import type {
  NavItem,
  NavLink,
  MegaMenuGroup,
  FeaturedCard,
  FooterColumn,
  SocialLink,
  LegalInfo,
} from "@/types";

/* ---------------------------------------------------------------------------
 * Shared NavLink arrays — defined ONCE and reused across the mega menu and the
 * footer so the IA stays consistent (per assignment).
 * ------------------------------------------------------------------------- */

/** The five Jicate service lines (§4 Services group / §11 Services column). */
export const serviceLinks: NavLink[] = [
  { label: "Managed IT", href: "/services/managed-it" },
  { label: "Cloud", href: "/services/cloud" },
  { label: "Cybersecurity", href: "/services/cybersecurity" },
  { label: "Software Development", href: "/services/software-development" },
  { label: "Support", href: "/services/support" },
];

/** Industries served (§4 Industries group / §11 Industries column). */
export const industryLinks: NavLink[] = [
  { label: "Healthcare", href: "/industries/healthcare" },
  { label: "Finance", href: "/industries/finance" },
  { label: "Retail & E-commerce", href: "/industries/retail-ecommerce" },
  { label: "Manufacturing", href: "/industries/manufacturing" },
  { label: "Public Sector", href: "/industries/public-sector" },
  { label: "Education", href: "/industries/education" },
];

/** The five reference platforms (verbatim — scaffolding). */
export const platformLinks: NavLink[] = [
  { label: "AIP", href: "https://www.palantir.com/platforms/aip/", arrow: "external", external: true },
  { label: "Gotham", href: "https://www.palantir.com/platforms/gotham/", arrow: "external", external: true },
  { label: "Foundry", href: "https://www.palantir.com/platforms/foundry/", arrow: "external", external: true },
  { label: "Ontology", href: "https://www.palantir.com/platforms/ontology/", arrow: "external", external: true },
  { label: "Apollo", href: "https://www.palantir.com/platforms/apollo/", arrow: "external", external: true },
];

/* ---------------------------------------------------------------------------
 * §4 — Top-level nav items (canonical IA for this clone).
 * ------------------------------------------------------------------------- */

export const primaryNav: NavItem[] = [
  { label: "Services", href: "/services", type: "mega" },
  { label: "Industries", href: "/industries", type: "mega" },
  { label: "Case Studies", href: "/case-studies", type: "mega" },
  { label: "Resources", href: "/resources", type: "mega" },
  { label: "Company", href: "/company", type: "mega" },
  { label: "Contact", href: "/contact", type: "link" },
];

/* ---------------------------------------------------------------------------
 * §4 — Mega-menu (full overlay) link groups, with ↗/↳ arrow flags.
 * ------------------------------------------------------------------------- */

export const megaMenuGroups: MegaMenuGroup[] = [
  {
    heading: "Platforms",
    links: platformLinks,
  },
  {
    heading: "Services",
    links: serviceLinks,
  },
  {
    heading: "Industries",
    links: industryLinks,
  },
  {
    heading: "Case Studies",
    links: [
      {
        label: "All Case Studies",
        href: "/case-studies",
        arrow: "external",
        external: true,
      },
      {
        label: "How a clinic network cut downtime 40%",
        href: "/case-studies/clinic-network-downtime",
        arrow: "drillin",
      },
    ],
  },
  {
    heading: "Resources",
    links: [
      { label: "Blog", href: "/resources/blog" },
      { label: "Guides & Whitepapers", href: "/resources/guides" },
      {
        label: "Documentation",
        href: "https://docs.jicate.com",
        arrow: "external",
        external: true,
      },
      { label: "Webinars", href: "/resources/webinars" },
      {
        label: "Service Status",
        href: "https://status.jicate.com",
        arrow: "external",
        external: true,
      },
    ],
  },
  {
    heading: "Company",
    links: [
      { label: "About", href: "/company/about" },
      { label: "Our Approach", href: "/company/approach" },
      {
        label: "Careers",
        href: "/company/careers",
        arrow: "external",
        external: true,
      },
      { label: "Partners", href: "/company/partners" },
      { label: "Newsroom", href: "/company/newsroom" },
    ],
  },
  {
    heading: "Contact",
    links: [
      { label: "Talk to an Expert", href: "/contact", arrow: "drillin" },
      {
        label: "Support Portal",
        href: "https://support.jicate.com",
        arrow: "external",
        external: true,
      },
      { label: "Find an Office", href: "/contact/offices" },
    ],
  },
];

/* ---------------------------------------------------------------------------
 * §4 — Featured cards in the overlay (small image + 34px H3 + caption + ↳).
 * ------------------------------------------------------------------------- */

export const megaMenuFeatured: FeaturedCard[] = [
  {
    headline: "Managed IT, run like infrastructure",
    caption: "Always-on monitoring, patching, and helpdesk under one SLA.",
    link: {
      label: "Explore Managed IT",
      href: "/services/managed-it",
      arrow: "drillin",
    },
  },
  {
    headline: "Migrate to cloud without the downtime",
    caption: "Lift, shift, and modernize on AWS, Azure, or GCP.",
    link: {
      label: "See cloud services",
      href: "/services/cloud",
      arrow: "drillin",
    },
  },
];

/* ---------------------------------------------------------------------------
 * §11 — Footer link groups (Services / Industries / Case Studies / Resources /
 * Company / Legal). Service + Industry columns reuse the shared arrays above.
 * ------------------------------------------------------------------------- */

export const footerColumns: FooterColumn[] = [
  {
    heading: "Platforms",
    links: platformLinks,
  },
  {
    heading: "Services",
    links: serviceLinks,
  },
  {
    heading: "Industries",
    links: industryLinks,
  },
  {
    heading: "Case Studies",
    links: [
      { label: "All Case Studies", href: "/case-studies" },
      { label: "Healthcare", href: "/case-studies/healthcare" },
      { label: "Finance", href: "/case-studies/finance" },
      { label: "Manufacturing", href: "/case-studies/manufacturing" },
    ],
  },
  {
    heading: "Resources",
    links: [
      { label: "Blog", href: "/resources/blog" },
      { label: "Guides & Whitepapers", href: "/resources/guides" },
      {
        label: "Documentation",
        href: "https://docs.jicate.com",
        arrow: "external",
        external: true,
      },
      { label: "Webinars", href: "/resources/webinars" },
      {
        label: "Service Status",
        href: "https://status.jicate.com",
        arrow: "external",
        external: true,
      },
    ],
  },
  {
    heading: "Company",
    links: [
      { label: "About", href: "/company/about" },
      { label: "Our Approach", href: "/company/approach" },
      {
        label: "Careers",
        href: "/company/careers",
        arrow: "external",
        external: true,
      },
      { label: "Partners", href: "/company/partners" },
      { label: "Newsroom", href: "/company/newsroom" },
      { label: "Contact", href: "/contact" },
    ],
  },
  {
    heading: "Legal",
    links: [
      { label: "Privacy Policy", href: "/legal/privacy" },
      { label: "Terms of Service", href: "/legal/terms" },
      { label: "Security", href: "/legal/security" },
      { label: "Accessibility", href: "/legal/accessibility" },
      { label: "Cookie Settings", href: "/legal/cookies" },
    ],
  },
];

/* ---------------------------------------------------------------------------
 * §11 — Social pills (outlined, UPPERCASE). icon = lucide name where one exists,
 * else a custom key the component maps to a bespoke glyph.
 * ------------------------------------------------------------------------- */

export const socialLinks: SocialLink[] = [
  { label: "YOUTUBE", href: "https://youtube.com/@jicate", icon: "youtube" },
  // No lucide "x" / twitter mark in current set — custom key.
  { label: "X", href: "https://x.com/jicate", icon: "x" },
  { label: "LINKEDIN", href: "https://linkedin.com/company/jicate", icon: "linkedin" },
  { label: "GITHUB", href: "https://github.com/jicate", icon: "github" },
  // Online store / shop — lucide "store" exists.
  { label: "STORE", href: "https://store.jicate.com", icon: "store" },
];

/* ---------------------------------------------------------------------------
 * §11 — Bottom / legal row.
 * ------------------------------------------------------------------------- */

export const legal: LegalInfo = {
  copyright: "© 2026 Jicate IT Service. All rights reserved.",
  tagline: "Engineered to stay up.",
  locale: "US / UK / JP",
  links: [
    { label: "Privacy Policy", href: "/legal/privacy" },
    { label: "Terms of Service", href: "/legal/terms" },
    { label: "Security", href: "/legal/security" },
    { label: "Accessibility", href: "/legal/accessibility" },
    { label: "Cookie Settings", href: "/legal/cookies" },
  ],
};
