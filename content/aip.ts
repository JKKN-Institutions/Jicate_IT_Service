/**
 * AIP platform page content for Jicate IT Service (`/aip`).
 *
 * Layout/structure design-clones the reference AIP platform page, but the
 * marketing prose here is ORIGINAL / neutral placeholder copy (swap before
 * launch) — only short functional labels (section titles, tab names, feature
 * headings, industry names) mirror the reference. Asset clips live under
 * `/public/aip`.
 *
 * Import with: import { aimlHero, beyondChat, ... } from "@/content/aip";
 */
import type { ArrowKind } from "@/types";

type Link = { label: string; href: string; arrow?: ArrowKind; external?: boolean };

/* — Hero (dark, full-bleed video) -------------------------------------- */

export const aimlHero = {
  // Giant bottom-left wordmark.
  wordmark: "AIP",
  video: "/aip/aip-hero-video.mp4",
  // Bottom corner mono micro-label columns (neutral placeholder copy).
  metaGroups: [
    ["Explore", "our artificial", "intelligence platform"],
    ["Time: 3 mns", "scroll", "to explore"],
    ["Integrate AI into", "operational", "decision making"],
    ["Placeholder ©2026", "Your Company", "Inc."],
  ],
};

/* — Big centered statement band (light) -------------------------------- */

export const statementIntro = {
  // Two-line oversized centered statement.
  text: "Go beyond chat.\nEnterprise Autonomy.",
};

/* — "Beyond Chat" tabbed product band (dark) --------------------------- */

export const beyondChat = {
  heading: "Beyond Chat",
  subtext: "Explore AIP",
  tabs: [
    {
      key: "ai-app",
      label: "AI APP",
      blurb:
        "AI reviews alerts and proposes resolutions, while human operators stay in the loop to review and approve.",
      video: "/aip/aipnow-product.mp4",
    },
    {
      key: "action-logic",
      label: "ACTION-DRIVEN LOGIC",
      blurb:
        "Give your AI tools and guidance to accomplish a task — tools let the AI propose and undertake real-world actions.",
      video: "/aip/workflow-builder.mp4",
    },
    {
      key: "automation",
      label: "AUTOMATION",
      blurb:
        "Operators have full visibility into execution rules and history, and remain in-the-loop to approve AI-proposed actions.",
      video: "/aip/automation.mp4",
    },
  ],
};

/* — Scrolly feature rows (light band) ---------------------------------- */

export type FeatureRow = {
  index: string; // stepper position, e.g. "0.1"
  title: string; // big display heading
  lead: string; // lead paragraph in the right column
  details: { title: string; body: string }[]; // DETAILS panel sub-items
  video: string;
};

export const featureRows: FeatureRow[] = [
  {
    index: "0.1",
    title: "Designed for AI workflow builders",
    lead: "Build AI apps, actions, and agents in Workflow Builder — an intuitive workspace designed with next-gen AI builders in mind.",
    details: [
      {
        title: "Visual workflow canvas",
        body: "Compose apps, actions, and agents on a single canvas wired to live enterprise data.",
      },
      {
        title: "Reusable logic blocks",
        body: "Build, test, and release AI-powered functions that business users can configure for themselves.",
      },
    ],
    video: "/aip/workflow-builder.mp4",
  },
  {
    index: "0.2",
    title: "Evaluate and ship with confidence",
    lead: "Ready your AI-driven workflows for production and iteratively improve them with end-to-end evaluation tooling.",
    details: [
      {
        title: "Automated evaluations",
        body: "Score every change against your own benchmarks before it ever reaches production.",
      },
      {
        title: "Confidence at scale",
        body: "Catch regressions early with repeatable, end-to-end test coverage across your workflows.",
      },
    ],
    video: "/aip/aip-evals-product.mp4",
  },
  {
    index: "0.3",
    title: "Accelerated AI application development",
    lead: "A model-driven SDK anchors software development in the operational truth of the enterprise.",
    details: [
      {
        title: "One operational model",
        body: "Your data and logic live in a single model, ready to power every app you build.",
      },
      {
        title: "Code where you need it",
        body: "Drop down to full code for the parts that demand it, no-code for the rest.",
      },
    ],
    video: "/aip/aip-osdk.mp4",
  },
  {
    index: "0.4",
    title: "Explore a curated library of solutions and examples",
    lead: "Explore pre-built AI applications, examples, and builder starter packs to get from idea to working app fast.",
    details: [
      {
        title: "Starter packs",
        body: "Clone a working solution and make it your own in a matter of days.",
      },
      {
        title: "Curated examples",
        body: "Learn from end-to-end reference implementations built for real operations.",
      },
    ],
    video: "/aip/aipnow-product.mp4",
  },
];

/* — Industries band (dark navy) ---------------------------------------- */

export const industries = {
  heading: "Solving complex problems across all industries in days, not years.",
  cta: { label: "Explore AIP Now", href: "/contact", arrow: "drillin" as ArrowKind },
  items: [
    "Aerospace & Aviation",
    "Automotive",
    "Construction & Real Estate",
    "Energy & Renewables",
    "Financial Services & Banking",
    "Government & Security",
    "Healthcare & Lifesciences",
    "Insurance",
    "Logistics",
    "Manufacturing & Industrials",
    "Media & Telecommunication",
    "Retail & Consumer Goods",
    "Utilities & Chemicals",
  ],
};

/* — Closing CTA (heading + twin cards, dark) --------------------------- */

export const ctaHeading = "Build now with AIP";

export const ctaCards: {
  eyebrow: string;
  title: string;
  body: string;
  link: Link;
  video?: string;
}[] = [
  {
    eyebrow: "GET STARTED",
    title: "Build with AIP",
    body: "Request access for AIP and start building. One-click install to begin, then customize as you wish.",
    link: { label: "Start building", href: "/get-started", arrow: "cta" },
    video: "/aip/sign-up.mp4",
  },
  {
    eyebrow: "SEE IT LIVE",
    title: "Explore AIP Now",
    body: "Visit AIP Now to view dozens of AI use cases that power foundational institutions, available in one-click install.",
    link: { label: "Explore AIP Now", href: "/contact/demo", arrow: "cta" },
    video: "/aip/explore.mp4",
  },
];

/* — Closing band ------------------------------------------------------- */

export const closingBand = {
  wordmark: "AIP",
  title: "Build now with AIP",
  cta: { label: "Get Started", href: "/get-started", arrow: "cta" as ArrowKind },
};
