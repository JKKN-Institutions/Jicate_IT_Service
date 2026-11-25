/** Content for the /foundry page. */

export interface FeatureItem {
  label: string;
  body: string;
}

export interface IndustryLink {
  label: string;
  href: string;
}

export interface CaseCard {
  eyebrow: string;
  body: string;
  image: string;
  imageAlt: string;
}

export interface Category {
  name: string;
  cards: CaseCard[];
}

export interface Award {
  title: string;
  source: string;
  linkLabel: string;
}

export interface Field {
  name: string;
  label: string;
  type: string;
  required: boolean;
}

/* ---------------------------------- hero --------------------------------- */

export const hero = {
  title: "Jicate Platform",
  subcopy: "The Operating System for the Modern Enterprise, Powered by the Business Data Model",
  video: "/foundry/Hydrate_Ontology_General_V3.mp4",
  videoLabel: "Business Data Model hydrating data, logic, and action into one operating system",
};

/* -------------------------------- ontology ------------------------------- */

export const ontology = {
  heading: "The Business Data Model",
  image: "/foundry/Ontology_Simple.png",
  imageAlt: "Business Data Model core layered into Semantic, Kinetic, and Dynamic layers",
  statement: "Activate your data and analytics in a dynamic system for closed-loop operations.",
  body: "The Business Data Model is the heart of the platform. It integrates the semantic, kinetic, and dynamic elements of your business — empowering your teams to harmonize and automate decision-making in complex settings.",
  link: "Discover the Business Data Model",
};

/* ----------------------------- collaboration ----------------------------- */

export const collaboration = {
  heading: "Step Into Real-Time Collaboration →",
  statement: "Execute faster with universal logic representing the objects, actions, and processes of your business.",
  image: "/foundry/Personas.png",
  imageAlt: "Core business, data, and modeling teams collaborating through a shared Business Data Model",
  features: [
    {
      label: "Activate the Power of Your Data and Analytics.",
      body: "Weave your data and analytics directly into the daily decision-making happening across your core business and operational teams. Capture decisions for continuous learning.",
    },
    {
      label: "Collaboration, Supercharged.",
      body: "Achieve real-time collaboration between your data, analytics, and operational teams. Integrate decision-making in a common logic layer, driving meaningful action as conditions evolve.",
    },
    {
      label: "The Best Way to Build.",
      body: "Compose AI-powered workflows on a scalable architecture that re-uses your data model’s multi-modal objects, actions, and processes.",
    },
    {
      label: "No Duplication.",
      body: "Incorporate data and models from your enterprise architecture — without duplicating the underlying assets or fracturing existing sources of truth.",
    },
  ] as FeatureItem[],
};

/* ------------------------------ industries ------------------------------- */

export const industries = {
  heading: "Operations Across Industries, Powered by the Business Data Model",
  links: [
    { label: "AI + ML", href: "/ai-ml" },
    { label: "Anti Money Laundering", href: "/anti-money-laundering" },
    { label: "Edge AI", href: "/edge-ai" },
    { label: "Energy", href: "/energy" },
    { label: "Healthcare R&D", href: "/life-sciences" },
    { label: "Supply Chain", href: "/supply-chain" },
    { label: "Retail", href: "/retail" },
    { label: "More Offerings", href: "#" },
  ] as IndustryLink[],
};

/* ------------------------------ get started ------------------------------ */

export const form = {
  id: "get-started",
  heading: "Get Started with the Business Data Model",
  fields: [
    { name: "firstName", label: "FIRST NAME:", type: "text", required: true },
    { name: "lastName", label: "LAST NAME:", type: "text", required: true },
    { name: "email", label: "BUSINESS EMAIL:", type: "email", required: true },
    { name: "phone", label: "PHONE NUMBER:", type: "tel", required: true },
    { name: "company", label: "COMPANY / INSTITUTION:", type: "text", required: true },
  ] as Field[],
  countryLabel: "COUNTRY:",
  projectLabel:
    "TELL US ABOUT YOUR PROJECT, A BIT OF CONTEXT WILL ALLOW US TO CONNECT YOU TO THE RIGHT TEAM FASTER:",
  optIns: [
    "OPT-IN TO RECEIVE JICATE PRODUCT UPDATES:",
    "OPT-IN TO PERSONALIZED SALES OUTREACH:",
    "OPT-IN TO RECEIVE INVITES TO FUTURE EVENTS:",
    "OPT-IN TO RECEIVE EDUCATIONAL RESOURCES:",
  ],
  submit: "Submit",
  privacyNote: "Please see our Privacy Policy regarding how we will handle this information.",
};
