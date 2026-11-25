/** Content for the /financial-services page. */

const BASE = "/financial-services";

/* ------------------------------ shared shapes ----------------------------- */

export interface CTA {
  label: string;
  href: string;
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
