/**
 * AI/ML platform page content for Jicate IT Service (`/ai-ml`).
 *
 * Layout/structure mirrors a dark-hero product page, but ALL copy here is
 * ORIGINAL Jicate IT Service content describing Jicate's own AI & ML offering —
 * nothing is transcribed from any third-party site. Asset clips live under
 * `/public/ai-ml-page`. Swap any placeholder copy before launch.
 *
 * Import with: import { aimlHero, beyondChat, ... } from "@/content/ai-ml";
 */
import type { ArrowKind } from "@/types";

type Link = { label: string; href: string; arrow?: ArrowKind; external?: boolean };

/* — Hero (dark, full-bleed video) -------------------------------------- */

export const aimlHero = {
  // Giant bottom-left wordmark. PLACEHOLDER mark + letters — swap for Jicate
  // branding. (Generic placeholder, not any third-party product name/logo.)
  wordmark: "AI",
  video: "/ai-ml-page/aip-hero-video.mp4",
  // Bottom-right mono micro-label column (placeholder copy).
  metaGroups: [
    ["Explore", "our artificial", "intelligence platform"],
    ["Time: 3 mns", "scroll", "to explore"],
    ["Integrate AI into", "operational", "decision making"],
    ["Placeholder ©2026", "Your Company", "Inc."],
  ],
};

/* — Big centered statement band (light) -------------------------------- */

export const statementIntro = {
  // Two-line oversized centered statement. PLACEHOLDER — swap your headline.
  text: "Your big statement\ngoes right here.",
};

/* — "Beyond Chat" tabbed product band (dark) --------------------------- */

export const beyondChat = {
  heading: "More than a chatbot.",
  subtext: "Explore the platform",
  tabs: [
    {
      key: "ai-app",
      label: "AI APP",
      blurb:
        "Ship decision-support apps your teams actually use, grounded in your own knowledge and guardrails.",
      video: "/ai-ml-page/aipnow-product.mp4",
    },
    {
      key: "action-logic",
      label: "OPERATIONAL APPS",
      blurb:
        "Compose apps, actions, and AI agents on a single operational platform — wired to live enterprise data.",
      video: "/ai-ml-page/workflow-builder.mp4",
    },
    {
      key: "automation",
      label: "AUTOMATION",
      blurb:
        "Put AI to work on the loop — automating the repetitive workflows that slow your operations down.",
      video: "/ai-ml-page/automation.mp4",
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

// All copy below is original PLACEHOLDER text — swap for Jicate content.
export const featureRows: FeatureRow[] = [
  {
    index: "0.1",
    title: "Build AI workflows your whole team can ship",
    lead: "Compose apps, actions, and agents in an intuitive builder — a workspace designed with modern AI teams in mind.",
    details: [
      {
        title: "Visual data pipelines",
        body: "Wire data into your workflows and run them at scale — with retries, output schemas, and production-grade tooling included.",
      },
      {
        title: "No-code logic blocks",
        body: "Build, test, and release AI-powered functions that business users can configure for themselves.",
      },
    ],
    video: "/ai-ml-page/workflow-builder.mp4",
  },
  {
    index: "0.2",
    title: "Test and validate before you go live",
    lead: "Move from prototype to production with built-in testing, scoring, and end-to-end evaluation tooling.",
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
    video: "/ai-ml-page/aipnow-product.mp4",
  },
  {
    index: "0.3",
    title: "Ship AI applications in record time",
    lead: "A model-driven SDK lets development meet the operational truth of your business — your data and logic in one place.",
    details: [
      {
        title: "One data model",
        body: "Your data and logic live in a single model, ready to power every app you build.",
      },
      {
        title: "Code where you need it",
        body: "Drop down to full code for the parts that demand it, no-code for the rest.",
      },
    ],
    video: "/ai-ml-page/aip-osdk.mp4",
  },
  {
    index: "0.4",
    title: "Start from a library of ready-made solutions",
    lead: "Begin with working apps, examples, and starter packs, then adapt a proven pattern to your own operations fast.",
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
    video: "/ai-ml-page/automation.mp4",
  },
];

/* — Industries band (dark navy) ---------------------------------------- */

export const industries = {
  heading: "AI that delivers across every major industry.",
  cta: { label: "Explore Jicate AI", href: "/contact", arrow: "drillin" as ArrowKind },
  items: [
    "Aerospace & Aviation",
    "Automotive",
    "Construction & Real Estate",
    "Energy & Renewables",
    "Financial Services & Banking",
    "Government & Security",
    "Healthcare & Life Sciences",
    "Insurance",
    "Logistics",
    "Manufacturing & Industrials",
    "Media & Telecommunication",
    "Retail & Consumer Goods",
    "Utilities & Chemicals",
  ],
};

/* — Closing CTA (big centered heading + twin cards, dark) -------------- */

export const ctaHeading = "Ready to start building?";

export const ctaCards: {
  eyebrow: string;
  title: string;
  body: string;
  link: Link;
  video?: string;
}[] = [
  {
    eyebrow: "GET STARTED",
    title: "Build with Jicate AI",
    body: "Bring a use case. We'll scope it, prototype it, and put a working AI workflow in front of your team.",
    link: { label: "Start building", href: "/get-started", arrow: "cta" },
    video: "/ai-ml-page/sign-up.mp4",
  },
  {
    eyebrow: "SEE IT LIVE",
    title: "Explore Jicate AI now",
    body: "Walk through the platform with our engineers and see how it maps onto your operations.",
    link: { label: "Book a demo", href: "/contact/demo", arrow: "cta" },
    video: "/ai-ml-page/explore.mp4",
  },
];

/* — Closing band ------------------------------------------------------- */

export const closingBand = {
  wordmark: "AI / ML",
  title: "Build now with Jicate AI",
  cta: { label: "Get Started", href: "/get-started", arrow: "cta" as ArrowKind },
};
