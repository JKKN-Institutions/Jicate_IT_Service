/**
 * Content for the /readiness page — a faithful DESIGN rebuild of the Palantir
 * Readiness reference page. Short functional headings/labels kept; body copy in
 * Jicate's voice (placeholder text the user will swap). Brand names renamed
 * (Palantir→Jicate, "the Palantir Platform"→"the Jicate Platform"); the named
 * reseller and Army stats are genericized/softened. Types are local — no shared
 * files touched.
 *
 * Assets in /public/readiness: shutterstock_1020773842.mov (hero video — office
 * tower at night), Screen_Shot_2022-08-01_at_4.47.52_PM.png ("Are you ready?"
 * lab-team image). The three module banners are built in CSS (no poster assets).
 */

export interface ReadyBanner {
  /** First word, rendered white. */
  word1: string;
  /** Second word, rendered in the accent color. */
  word2: string;
  /** Accent color for word2 (and steps numerals). */
  color: string;
  /** Small top-right marker line. */
  marker: string;
  /** Left label group (3 short lines). */
  labels: string[];
  /** Right numbered step labels. */
  steps: string[];
}

export interface Module {
  no: string;
  heading: string;
  intro: string;
  body: string;
  aside: string;
  link: string;
  banner: ReadyBanner;
}

/* ---------------------------------- hero --------------------------------- */

export const hero = {
  title: "Jicate Readiness",
  right:
    "Jicate can help ensure organizational readiness with a full picture of asset, personnel, and financial operations.",
  video: "/readiness/shutterstock_1020773842.mov",
  videoAlt: "Office tower lit up at night",
};

/* ------------------------------ are you ready ---------------------------- */

export const areYouReady = {
  heading: "Are you ready?",
  image: "/readiness/Screen_Shot_2022-08-01_at_4.47.52_PM.png",
  imageAlt: "A team reviewing data in a laboratory",
  question:
    "Ready for the next healthcare crisis?\nThe next adversarial conflict?\nTo re-prioritize your financial commitments based on unexpected needs or a shrinking budget?",
  body: [
    "For government agencies to achieve their most critical objectives, they must optimize the management, allocation, and development of their most valuable resources.",
    "This requires a readiness capability that can surface actionable information and insights from their data.",
    "To help government agencies better serve their missions, Jicate has developed highly specialized, rapidly deployable software modules with state-of-the-art granular access controls related to Financial, Asset, and Personnel management.",
  ],
  link: "Reach out today",
};

/* ------------------------------- modules --------------------------------- */

export const modules: Module[] = [
  {
    no: "01.",
    heading: "Asset Readiness",
    intro: "Jicate Asset Readiness provides an authoritative, actionable picture of an organization’s assets.",
    body: "The Jicate Platform unifies an organization’s fractured data landscape to create a digital replica of its assets. Asset Readiness helps many of the world’s largest organizations understand trends, answer questions about asset health, and make decisions in a single environment.",
    aside: "Jicate Asset Readiness offers up-to-date metrics and insights organizations can trust. Integrated data and flexible applications allow users to ask and answer questions for quick, accurate visibility.",
    link: "Read the whitepaper",
    banner: {
      word1: "ASSET",
      word2: "READINESS",
      color: "#2D7FF9",
      marker: "ENABLING ASSET READINESS VISIBILITY",
      labels: ["GOVERNMENT", "ASSET READINESS", "[MODULE]"],
      steps: ["INVENTORY TO SHIPMENT", "SHIPMENT TO ASSET", "ASSET TO MAINTENANCE"],
    },
  },
  {
    no: "02.",
    heading: "Personnel Readiness",
    intro: "Jicate Personnel Readiness offers a secure and flexible personnel management solution.",
    body: "The Jicate Platform can integrate, fuse, and correlate all relevant data in a secure data environment to help facilitate qualitative and quantitative analyses in support of an organization’s key hiring, training, talent management, and retention needs.",
    aside: "The Jicate Platform revolutionizes an organization’s approach to personnel optimization and force readiness. To date, the platform has integrated more than 160 source systems and over 30,000 tables of data, many with millions of rows each.",
    link: "Read the whitepaper",
    banner: {
      word1: "PERSONNEL",
      word2: "READINESS",
      color: "#2D7FF9",
      marker: "ENABLING PERSONNEL TIMELINE VISIBILITY",
      labels: ["GOVERNMENT", "PERSONNEL READINESS", "[MODULE]"],
      steps: ["HIRING TO TRAINING", "TRAINING TO DEPLOYMENT", "RETENTION TO RENEWAL"],
    },
  },
  {
    no: "03.",
    heading: "Financial Management",
    intro: "Jicate Financial Management is a comprehensive and configurable module that brings together budget, financial, and contracting data.",
    body: "The Jicate Platform unifies financial data across silos, systems, and functions without a full system migration — helping create a collaborative, secure foundation for financial management professionals to analyze portfolios, track budgets, and intelligently reallocate funds.",
    aside: "Ensure every cent serves the mission. Within the first year of implementation, organizations have deobligated billions in funding using Jicate, well above prior-year baselines.",
    link: "Learn more",
    banner: {
      word1: "FINANCIAL",
      word2: "MANAGEMENT",
      color: "#F0512B",
      marker: "FINANCIAL VISIBILITY FOR THE WARFIGHTER",
      labels: ["GOVERNMENT", "FINANCIAL MANAGEMENT", "[MODULE]"],
      steps: ["BUDGET TO PLANNING", "PLANNING TO EXECUTION", "EXECUTION TO AUDIT"],
    },
  },
];

/* ------------------------------- carahsoft ------------------------------- */

export const reseller = {
  brandA: "Jicate",
  brandB: "Reseller Network",
  body: "Our authorized government reseller is the trusted IT solutions provider that supports an ecosystem of manufacturers, value-added resellers, system integrators, and consulting partners.",
  note: "Readiness modules are available to the public sector through our authorized reseller partners.",
  link: "Reach out here to learn more",
};

/* ------------------------------- get ready ------------------------------- */

export const getReady = {
  heading: "Get ready...",
  cta: "Request a demo today",
};
