/**
 * Content for the /financial-services page — a faithful DESIGN rebuild of the
 * reference "Palantir for Financial Services" page, mapped onto this project's
 * design system. Layout matches the reference 1:1; a DARK hero band over a
 * LIGHT body.
 *
 * IMPORTANT: the reference's marketing prose, customer case studies, and the
 * executive quote are the source's own content — they are NOT reproduced here.
 * Long-form copy, the quote, and partner/case details below are neutral
 * PLACEHOLDER text; short functional labels (section titles, tab/feature names,
 * form fields) are kept for parity. User replaces all copy.
 *
 * Local media (in /public/financial-services):
 *   img.webp                          — full-bleed hero image
 *   AIPCon7_YouTubeThumbail_Citi__1_.jpg — Driving Outcomes tab-1 video thumb
 */

const BASE = "/financial-services";

/* ------------------------------ shared shapes ----------------------------- */

export interface CTA {
  label: string;
  href: string;
}

export interface OutcomeTab {
  tab: string;
  quote: string;
  attribution: string;
  partner: string;
  challenge: string;
  solution: string;
  bullets: string[];
  image: string | null;
  alt: string;
  link: CTA;
}

export interface WorkFeature {
  title: string;
  body: string;
}

export interface WorkArea {
  title: string;
  tagline: string;
  features: WorkFeature[];
}

/* --------------------------------- hero ----------------------------------- */

export const hero = {
  title: "Jicate for Financial Services",
  image: `${BASE}/img.webp`,
  alt: "Looking up at glass skyscrapers",
};

/* --------------------------------- intro ---------------------------------- */

export const intro = {
  tagline: "Helping financial institutions meet the demands of tomorrow's customers, regulators, and markets.",
  paragraphs: [
    "Jicate is built to operate inside highly regulated environments. With security, governance, and data at its core, it gives your analysts and engineers the operational efficiency to move quickly without cutting corners.",
    "Go beyond dashboards and one-off analytics: drive real organizational change with a platform that ties your data directly to business outcomes.",
  ],
};

/* -------------------------- driving industry outcomes --------------------- */

export const outcomes = {
  heading: "Driving Industry Outcomes",
  tabs: [
    {
      tab: "Redefining Wealth Management",
      quote: "What used to take days now takes seconds.",
      attribution: "Head of Data Analytics & Innovation",
      partner: "A global wealth manager",
      challenge: "To streamline key customer-service workflows, the firm needed a single operational source of truth for customer data — one that would end inconsistencies across systems and remove the reliance on manual processes.",
      solution: "Working with Jicate, the firm built a federated customer master: one interface for running agentic workflows on top of customer data to streamline and automate the workflows that matter most.",
      bullets: [
        "Account-opening time cut from days to seconds",
        "The number of people needed to open a new account reduced dramatically",
      ],
      image: `${BASE}/AIPCon7_YouTubeThumbail_Citi__1_.jpg`,
      alt: "Keynote video thumbnail",
      link: { label: "Watch full keynote", href: "#" },
    },
    {
      tab: "Accelerating Compliance with Single Client View",
      quote: "For the first time, everyone is working from the same view of the client.",
      attribution: "Head of Compliance",
      partner: "A global bank",
      challenge: "Fragmented client data spread across systems made compliance slow and error-prone, forcing teams to reconcile records by hand before they could act.",
      solution: "Jicate unified that data into a single client view, giving compliance and front-office teams one trusted, up-to-date picture of every client to work from.",
      bullets: ["Faster, more consistent compliance reviews", "Manual reconciliation across systems largely eliminated"],
      image: `${BASE}/magnus-andersson-v9-fvMrkZLo-unsplash.jpg`,
      alt: "Financial-district skyscrapers of a global banking hub",
      link: { label: "Learn More", href: "#" },
    },
    {
      tab: "Digitizing a Global Bank",
      quote: "We've turned scattered, manual processes into connected digital workflows.",
      attribution: "Chief Operating Officer",
      partner: "A global bank",
      challenge: "Core operations still ran on disconnected systems and manual steps, making it hard to scale, adapt, or see what was happening end to end.",
      solution: "Jicate integrated the bank's data and operations into connected, automated workflows, giving teams a real-time operational picture and a foundation to build on.",
      bullets: ["Key operational workflows automated end to end", "A single, real-time view across the business"],
      image: `${BASE}/My_project__22_ (1).jpg`,
      alt: "Data-center corridor powering connected digital banking workflows",
      link: { label: "Learn More", href: "#" },
    },
    {
      tab: "Streamlining Next Best Offer Marketing",
      quote: "Our campaigns are now driven by data, not guesswork.",
      attribution: "Head of Marketing",
      partner: "A retail bank",
      challenge: "Marketing teams struggled to target the right customers with the right offers, relying on broad segments and slow, disconnected data.",
      solution: "Jicate brought propensity and segmentation models together with live customer data, so teams can build precise next-best-offer campaigns and improve them with direct feedback.",
      bullets: ["Sharper targeting across granular customer segments", "Faster campaign iteration informed by real results"],
      image: `${BASE}/colin-watts-64Mg5CD6WVM-unsplash.jpg`,
      alt: "Crowds of people crossing a city bridge, representing customer segments",
      link: { label: "Learn More", href: "#" },
    },
  ] satisfies OutcomeTab[],
};

/* ------------------------------ where we work ----------------------------- */

export const work = {
  heading: "Where We Work",
  areas: [
    {
      title: "Retail & Investment Banking",
      tagline: "Unify customer knowledge to optimize marketing, pricing and services throughout the entire customer lifecycle.",
      features: [
        { title: "Customer 360", body: "Get integrated, easy-to-reach 360° visibility into customer data across the bank, and turn it into Customer 360 views tailored to any number of use cases." },
        { title: "Client Onboarding", body: "Run the entire KYC process from one interface, with AI suggestions that help analysts prioritize and stay consistent, plus risk scores that speed up review." },
        { title: "Next Best Offer", body: "Build cross-sell and up-sell campaigns aimed at fine-grained customer segments, feed propensity and segmentation models with direct feedback to sharpen results, and configure campaigns to fit your needs." },
      ],
    },
    {
      title: "Asset Management",
      tagline: "Get a 360° view of your portfolio and continuously calibrate your fund's position against both internal and external market data.",
      features: [
        { title: "Portfolio 360", body: "Bring a complete, real-time view of your portfolio together, and keep your fund's position continuously calibrated against internal and external market data." },
        { title: "Risk Attribution & Asset Allocation", body: "Review and approve fund allocations enriched with transaction data for oversight. Train portfolios on historical returns, flex exposures as needed, and flag compliance deviations for immediate resolution." },
      ],
    },
    {
      title: "Private Equity",
      tagline: "Drive value across every portfolio with modeling and scenario analysis, automating workflows and simplifying reporting and compliance.",
      features: [
        { title: "Screening & Diligence", body: "Automatically extract and review deal documentation, apply and validate your screening criteria, auto-generate diligence questions and score counterparty responses, and draft tearsheets for you." },
        { title: "Fundraising DDQ", body: "Speed up response generation and sign-off for inbound ODD requests from LPs, using retrieval workflows that search prior DDQs and policy documents to produce robust, compliant answers." },
      ],
    },
  ] satisfies WorkArea[],
};

/* --------------------------------- form ----------------------------------- */

export const contactForm = {
  title: "Get in Touch",
  fields: [
    { name: "firstName", label: "First Name", type: "text", required: true },
    { name: "lastName", label: "Last Name", type: "text", required: true },
    { name: "businessEmail", label: "Business Email Address", type: "email", required: true },
    { name: "phone", label: "Phone Number", type: "tel", required: true },
    { name: "company", label: "Company Name", type: "text", required: true },
    { name: "country", label: "Country", type: "select", required: true },
  ],
  submitLabel: "Submit",
  privacyHref: "/privacy",
};
