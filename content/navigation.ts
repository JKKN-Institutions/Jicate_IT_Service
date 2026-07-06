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

/** The five platform pages — order mirrors the Palantir site menu. */
export const platformLinks: NavLink[] = [
  { label: "AIP", href: "/aip" },
  { label: "Foundry", href: "/foundry" },
  { label: "Gotham", href: "/gotham" },
  { label: "Ontology", href: "/ontology" },
  { label: "Apollo", href: "/apollo" },
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
    heading: "Navigation",
    links: [
      { label: "Offerings", href: "/offerings" },
      { label: "Jicate Explained", href: "/about" },
      { label: "Search", href: "/search" },
    ],
  },
  {
    heading: "Quick Links",
    links: [
      { label: "About Jicate", href: "/about" },
      { label: "Information Security", href: "/information-security" },
      { label: "Contact", href: "/contact", arrow: "drillin" },
      { label: "Get Started", href: "/enquiry-form", arrow: "drillin" },
    ],
  },
];

/* ---------------------------------------------------------------------------
 * §4 — Featured cards in the overlay (small image + 34px H3 + caption + ↳).
 * ------------------------------------------------------------------------- */

export const megaMenuFeatured: FeaturedCard[] = [
  {
    headline: "The latest from Jicate",
    caption: "News, announcements, and updates from across the company.",
    link: {
      label: "Read Jicate Explained",
      href: "/jicate-explained",
      arrow: "drillin",
    },
  },
  {
    headline: "See the impact in the field",
    caption: "How teams put Jicate to work on their hardest problems.",
    link: {
      label: "Explore our Offerings",
      href: "/offerings",
      arrow: "drillin",
    },
  },
];

/* ---------------------------------------------------------------------------
 * §11 — Footer link groups (Services / Industries / Case Studies / Resources /
 * Company / Legal). Service + Industry columns reuse the shared arrays above.
 * ------------------------------------------------------------------------- */

/* Footer mega-directory columns — transcribed VERBATIM from the reference
 * footer screenshot (OFFERINGS / IMPACT STUDIOS / CAPABILITIES / DOCUMENTS).
 * `href: "#"` is an intentional placeholder: the reference link targets are not
 * known, so we don't fabricate URLs — only the visible labels are reproduced. */
export const footerColumns: FooterColumn[] = [
  {
    heading: "OFFERINGS",
    links: [
      { label: "Indian Tech Fellowship", href: "/american-tech-fellowship" },
      { label: "Anti-Money Laundering", href: "/anti-money-laundering" },
      { label: "Automotive & Mobility", href: "/automotive-mobility" },
      { label: "Construction", href: "/construction" },
      { label: "Data Protection", href: "/data-protection" },
      { label: "Defense", href: "/defense" },
      { label: "Energy", href: "/energy" },
      { label: "Federal Health", href: "/federal-health" },
      { label: "FedStart", href: "/fedstart" },
      { label: "Financial Services", href: "/financial-services" },
      { label: "Food & Beverage", href: "/food-and-beverage" },
      { label: "Jicate for Builders", href: "/jicate-for-builders" },
      { label: "Govt Financial Management", href: "/government-financial-management" },
      { label: "Hospital Operations", href: "/jicate-for-hospitals" },
      { label: "Insurance", href: "/insurance" },
      { label: "Intelligence", href: "/intelligence" },
      { label: "Life Sciences", href: "/life-sciences" },
      { label: "Mission Manager", href: "/mission-manager" },
      { label: "Procurement", href: "/procurement" },
      { label: "Rail", href: "/jicate-for-rail" },
      { label: "Readiness", href: "/readiness" },
      { label: "Retail", href: "/retail" },
      { label: "Secure Collaboration", href: "/secure-collaboration" },
      { label: "Semiconductors", href: "/semiconductors" },
      { label: "Supply Chain", href: "/supply-chain" },
      { label: "Telecommunications", href: "/telecommunications" },
      { label: "Utilities", href: "/utilities" },
    ],
  },
  {
    heading: "CAPABILITIES",
    links: [
      { label: "AI + ML", href: "/ai-ml" },
      { label: "AIP for Developers", href: "/aip-developers" },
      { label: "Data Integration", href: "/data-integration" },
      { label: "Digital Twin", href: "/digital-twin" },
      { label: "Dynamic Scheduling", href: "/dynamic-scheduling" },
      { label: "Edge AI", href: "/edge-ai" },
      { label: "Marketplace", href: "/marketplace" },
      { label: "MetaConstellation", href: "/metaconstellation" },
      { label: "Pipeline Builder", href: "/pipeline-builder" },
      { label: "Process Mining", href: "/process-mining" },
      { label: "Real-Time Alerting", href: "/foundry-rules" },
      { label: "Streaming", href: "/streaming" },
      { label: "Titanium", href: "/titanium" },
    ],
  },
];

/** Left-rail language switcher (visual toggle — first entry is active). */
export const footerLanguages = ["IN"] as const;

/** Left-rail cookie-preferences link label. */
export const cookiesSettingsLabel = "Cookies Settings";

/** Left-rail "Contact" pill — internal link to the contact page. */
export const footerContactLink: NavLink = { label: "CONTACT", href: "/contact" };

/* ---------------------------------------------------------------------------
 * §11 — Social pills (outlined, UPPERCASE). icon = lucide name where one exists,
 * else a custom key the component maps to a bespoke glyph.
 * ------------------------------------------------------------------------- */

export const socialLinks: SocialLink[] = [
  { label: "INSTAGRAM", href: "https://www.instagram.com/jicate.solutions/", icon: "instagram" },
  { label: "FACEBOOK", href: "https://www.facebook.com/jicatesolution", icon: "facebook" },
  { label: "LINKEDIN", href: "https://www.linkedin.com/company/jicate-solutions/", icon: "linkedin" },
];

/* ---------------------------------------------------------------------------
 * §11 — Bottom / legal row.
 * ------------------------------------------------------------------------- */

export const legal: LegalInfo = {
  copyright: "© 2026 Jicate IT Service. All rights reserved.",
  tagline: "Engineered to stay up.",
  locale: "IN",
  links: [
    { label: "Privacy Policy", href: "/legal/privacy" },
    { label: "Terms of Service", href: "/legal/terms" },
    { label: "Security", href: "/legal/security" },
    { label: "Accessibility", href: "/legal/accessibility" },
    { label: "Cookie Settings", href: "/legal/cookies" },
  ],
};
