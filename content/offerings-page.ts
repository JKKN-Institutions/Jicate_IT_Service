/**
 * Content for the /offerings index page — a faithful DESIGN rebuild of the
 * Palantir Offerings index (https://www.palantir.com/offerings/). DARK theme,
 * text-only: a giant hero + a long list of offering rows (name ↳ / short
 * tagline / Learn More →). Short functional offering names kept; taglines are
 * original Jicate one-liners (the user will swap). IP-safe: Palantir → Jicate;
 * hrefs point at this site's own pages where they exist, else "#". Types local.
 *
 * NOTE: distinct from `content/offerings.ts` (the homepage "Our Software"
 * product list) — do not merge the two.
 */

export interface OfferingRow {
  name: string;
  href: string;
  tagline: string;
}

export const hero = {
  title: "Offerings",
  intro:
    "Our platforms are used throughout the public, private, and non-profit sectors to help organizations quickly implement solutions to the hardest problems they face.",
};

export const offerings: OfferingRow[] = [
  {
    name: "Anti-Money Laundering",
    href: "/anti-money-laundering",
    tagline: "Real-time transaction monitoring and threat intelligence to fight financial crime.",
  },
  {
    name: "Applied Customer Intelligence",
    href: "#",
    tagline: "Turn your customer data into decisions for the bank of the future.",
  },
  {
    name: "Artificial Intelligence & Machine Learning",
    href: "/ai-ml",
    tagline: "Consequential AI, operationalized for the modern enterprise.",
  },
  {
    name: "Automotive & Mobility",
    href: "/automotive-mobility",
    tagline: "Driving mobility across manufacturing, supply chain, quality, and more.",
  },
  {
    name: "Construction",
    href: "/construction",
    tagline: "AI-powered automation for every construction decision.",
  },
  {
    name: "Consumer Goods",
    href: "#",
    tagline: "Master complex supply chains and evolving consumer demand.",
  },
  {
    name: "Cryptocurrency",
    href: "#",
    tagline: "Cutting-edge technology for leading crypto companies.",
  },
  {
    name: "Data Protection",
    href: "/data-protection",
    tagline: "A comprehensive approach to privacy and governance.",
  },
  {
    name: "Defense",
    href: "/defense",
    tagline: "A tactical edge — by land, air, sea, and space.",
  },
  {
    name: "Edge AI",
    href: "/edge-ai",
    tagline: "Unmatched technology, pushed all the way to the edge.",
  },
  {
    name: "Energy",
    href: "/energy",
    tagline: "Helping energy companies build lasting competitive advantage.",
  },
  {
    name: "Federal Health",
    href: "/federal-health",
    tagline: "Connectivity across the entire health data ecosystem.",
  },
  {
    name: "FedStart",
    href: "/fedstart",
    tagline: "Deliver solutions to government at the speed of innovation.",
  },
  {
    name: "Financial Services",
    href: "/financial-services",
    tagline: "Meet the demands of tomorrow's customers, regulators, and markets.",
  },
  {
    name: "Pipeline Builder",
    href: "/pipeline-builder",
    tagline: "Let anyone build production-grade data pipelines — without writing code.",
  },
  {
    name: "Gov't Financial Management",
    href: "/government-financial-management",
    tagline: "A secure, collaborative foundation for financial management.",
  },
  {
    name: "Life Sciences",
    href: "/life-sciences",
    tagline: "Transforming development across the life sciences with AI.",
  },
  {
    name: "Hospital Operations",
    href: "/jicate-for-hospitals",
    tagline: "A virtual command center for best-in-class healthcare delivery.",
  },
  {
    name: "Insurance",
    href: "/insurance",
    tagline: "Unlocking efficiency across the insurance value chain.",
  },
  {
    name: "Intelligence",
    href: "/intelligence",
    tagline: "Turn sensitive data into actionable insight and operational advantage.",
  },
  {
    name: "MetaConstellation",
    href: "/metaconstellation",
    tagline: "Harness satellite constellations to empower decision-makers on Earth.",
  },
  {
    name: "Jicate for Builders",
    href: "/jicate-for-builders",
    tagline: "A world-class AI software platform for startups and growing companies.",
  },
  {
    name: "Jicate HyperAuto",
    href: "#",
    tagline: "Automatically build data pipelines from your systems in hours — not months.",
  },
  {
    name: "Procurement",
    href: "/procurement",
    tagline: "An AI-powered operating system for procurement, finance, and supply chain teams.",
  },
  {
    name: "Rail",
    href: "/jicate-for-rail",
    tagline: "Powering workflows for some of the largest rail companies in the world.",
  },
  {
    name: "Readiness",
    href: "/readiness",
    tagline: "For organizational asset, personnel, and financial management.",
  },
  {
    name: "Retail",
    href: "/retail",
    tagline: "Maximize your data investment and pioneer the future of retail.",
  },
  {
    name: "Semiconductors",
    href: "/semiconductors",
    tagline: "Run sensitivity analysis and design the next experiments to improve chip yield.",
  },
  {
    name: "Supply Chain",
    href: "/supply-chain",
    tagline: "See the full picture — from daily operations to global disruption — and respond in real time.",
  },
  {
    name: "Telecom",
    href: "/telecommunications",
    tagline: "Improving network stability, visibility, and reliability.",
  },
  {
    name: "Utilities",
    href: "/utilities",
    tagline: "Build the connected grid of the future.",
  },
];
