/**
 * Content for the /fedstart page — a faithful DESIGN rebuild of the Palantir
 * FedStart reference page, mapped onto this project's design system. Short
 * functional headings/labels are kept; body copy is written in Jicate's own
 * voice (placeholder text the user will swap), not copied from the reference.
 * Types are local so the page touches no shared files.
 *
 * No assets were shipped for this page — every image/video renders as a styled
 * placeholder block, and partner names are generic placeholders (the user will
 * swap real logos/copy later).
 */

export interface CTA {
  label: string;
  href: string;
}

export interface Feature {
  title: string;
  body: string;
}

export interface CompareRow {
  label: string;
  typical: string;
  fedstart: string;
}

export interface SpotlightItem {
  category: string;
  title: string;
  href: string;
}

export interface BlogTile {
  title: string;
  subtitle: string;
  href: string;
  tone: "dark" | "light" | "accent";
}

/* ---------------------------------- hero --------------------------------- */

export const hero = {
  title: "Jicate FedStart",
  subcopy: "Deliver cutting-edge solutions to the government at the speed of innovation",
  videoLabel: "Play Video",
};

/* ----------------------- Eliminating the Barrier ------------------------- */

export const barrier = {
  heading: "Eliminating the Accreditation Barrier",
  statement:
    "Jicate FedStart is a SaaS offering for eligible companies and startups looking to deploy software to the federal government.",
  supporting:
    "FedStart supports companies to be FedRAMP and IL-compliant, rapidly enabling accreditation in weeks, at a fraction of the cost of traditional paths.",
  bullets: [
    "The accreditation process for FedRAMP, CMMC, IL5, or IL6 can take years and cost millions of dollars in consultant and engineering fees.",
    "FedStart can significantly accelerate time-to-market by eliminating the need for organizations to pursue accreditation on their own.",
  ],
};

/* ------------------------------ How It Works ----------------------------- */

export const howItWorks = {
  heading: "How It Works",
  statement:
    "FedStart enables innovators to run their products within Jicate’s secure, already-accredited environment.",
  imageAlt: "How It Works diagram",
  stepsLead: "Getting started with FedStart is easy:",
  steps: [
    "Containerize your application and create a Helm chart",
    "Deploy your application using the platform into the FedStart environment",
    "Complete security integration",
  ],
};

/* ------------------------------ Why FedStart ----------------------------- */

export const whyFedStart = {
  heading: "Why FedStart?",
  features: [
    {
      title: "Seamless Integration",
      body: "The FedStart Kubernetes infrastructure — which runs on top of AWS GovCloud and Azure Government — manages FIPS-validated encryption, logging, authentication, vulnerability scanning, and more, so that you don’t have to.",
    },
    {
      title: "Accreditation-as-a-Service",
      body: "Companies that are part of the FedStart program benefit from FedRAMP and IL5 compliance managed by Jicate, with Jicate responsible for government ATO conversations, compliance artifacts, continuous monitoring, and control assessments.",
    },
    {
      title: "Usage-based Pricing",
      body: "Rather than being charged a fixed cost, FedStart fees are scaled according to business usage so that incurred costs are tied to value gained.",
    },
  ] as Feature[],
  compareHeading: "Jicate FedStart vs. Typical SaaS Offering",
  compareCols: { typical: "Typical SaaS Offering", fedstart: "Jicate FedStart" },
  compareRows: [
    { label: "Accreditation Costs", typical: "$1M+", fedstart: "Significant cost savings" },
    { label: "Compliance Headcount Needs", typical: "Dedicated compliance teams", fedstart: "Compliance supported by Jicate" },
    { label: "Engineering Requirements", typical: "Custom infra and dedicated engineering", fedstart: "1–2 engineers for integration work" },
    { label: "Opportunity Cost", typical: "18 months+", fedstart: "3–6 months" },
  ] as CompareRow[],
};

/* --------------------------------- CMMC ---------------------------------- */

export const cmmc = {
  left: {
    heading: "What Is CMMC?",
    subheading: "A Critical Requirement for All Defense Contracts",
    paragraphs: [
      "Cybersecurity Maturity Model Certification (CMMC) is required for any company involved in defense-related contracts that store, process, or transmit Controlled Unclassified Information (CUI) or Federal Contract Information (FCI).",
      "Government estimates suggest tens of thousands of companies will need to complete a Level 2 Certification Assessment.",
      "CMMC is scheduled to begin its rollout soon.",
    ],
  },
  right: {
    heading: "Achieve CMMC-Compliance with FedStart",
    paragraphs: [
      "Are you prepared to meet CMMC standards?",
      "CMMC compliance for SaaS applications can be achieved by obtaining FedRAMP authorization. Jicate FedStart offers a streamlined solution, providing an expedited path to secure FedRAMP High Authorization in as little as three months.",
      "FedStart’s accelerated approach is highly effective and may be your company’s best option to achieve full CMMC compliance for your SaaS offering within the current year.",
    ],
    closing: "Learn more how Jicate FedStart can help your SaaS applications achieve CMMC compliance.",
    link: { label: "FedStart-CMMC Fact Sheet", href: "#" } as CTA,
  },
};

/* ------------------------------- partners -------------------------------- */

export const partners = {
  heading: "Our Partners",
  // Placeholder partner names — the user will swap in real logos/names.
  names: Array.from({ length: 32 }, (_, i) => `Partner ${String(i + 1).padStart(2, "0")}`),
};

/* ------------------------------- blog tiles ------------------------------ */

export const blogTiles = {
  heading: "How Jicate is Transforming the Defense Tech Landscape",
  tiles: [
    { title: "From Last Supper to First Breakfast", subtitle: "The Defense Tech Ecosystem", href: "#", tone: "dark" },
    { title: "Announcing Jicate Government Web Services", subtitle: "Technical Annex", href: "#", tone: "light" },
    { title: "Open Source for Jicate Government Web Services", subtitle: "GWS Announcement", href: "#", tone: "accent" },
  ] as BlogTile[],
};

/* ------------------------------- spotlight ------------------------------- */

export const spotlight = {
  heading: "FedStart Spotlight: News, Articles, and More",
  items: [
    { category: "BLOG POST: THE PLATFORM → IL6 COMPLIANCE", title: "Deploying the platform as the foundation of our Impact Level 6 (IL6) product offering.", href: "#" },
    { category: "BLOG POST: JICATE FEDSTART", title: "Helping SaaS companies do business with the Government.", href: "#" },
    { category: "BLOG POST: FEDSTART → THE PATH TO CMMC COMPLIANCE", title: "Jicate FedStart and the Path to CMMC Compliance.", href: "#" },
    { category: "PUBLIC ANNOUNCEMENT: PARTNER + FEDSTART", title: "A FedStart partner reaches FedRAMP High, IL4, and IL5 compliance.", href: "#" },
    { category: "PUBLIC ANNOUNCEMENT: PARTNER + FEDSTART", title: "Bringing an enterprise security product to government agencies through FedStart.", href: "#" },
    { category: "ARTICLE: JICATE FEDSTART AS COMPLIANCE “CATALYST”", title: "How FedStart acts as a catalyst for compliance.", href: "#" },
    { category: "PUBLIC ANNOUNCEMENT: PARTNER + FEDSTART", title: "A weather-intelligence partner joins the FedStart program.", href: "#" },
    { category: "PUBLIC ANNOUNCEMENT: PARTNER → FEDRAMP HIGH", title: "A FedStart partner announces FedRAMP High authorization.", href: "#" },
  ] as SpotlightItem[],
};

/* ----------------------------- video features ---------------------------- */

export const videoFeatures = [
  {
    title: "Partner Spotlight | Conference 2025",
    body: "Watch a FedStart partner’s product leader and a Jicate deployment strategist discuss the journey to FedRAMP High Authorization.",
    imageAlt: "Conference talk thumbnail",
  },
  {
    title: "Partner Panel | Prix 2024",
    body: "Watch FedStart partners deliver a talk on government compliance at the second Jicate Prix.",
    imageAlt: "Prix 2024 thumbnail",
  },
];

/* ------------------------------ contact form ----------------------------- */

export const contact = {
  id: "contact-us",
  heading: "Contact Us",
  fields: [
    { name: "firstName", label: "FIRST NAME:", type: "text", required: true },
    { name: "lastName", label: "LAST NAME:", type: "text", required: true },
    { name: "email", label: "BUSINESS EMAIL:", type: "email", required: true },
    { name: "company", label: "COMPANY NAME:", type: "text", required: true },
    { name: "jobTitle", label: "JOB TITLE:", type: "text", required: true },
  ],
  countryLabel: "COUNTRY:",
  contextLabel: "ADDITIONAL CONTEXT:",
  questions: [
    {
      label: "DOES YOUR ORGANIZATION CURRENTLY HOLD ANY FEDERAL GOVERNMENT CLOUD ACCREDITATIONS?",
      name: "accreditations",
      options: ["Yes", "No", "Not sure"],
    },
    {
      label: "IS YOUR ORGANIZATION CURRENTLY OR IN THE PROCESS OF DIRECTLY CONTRACTING WITH THE US FEDERAL GOVERNMENT?",
      name: "contracting",
      options: ["Yes", "No", "In process"],
    },
  ],
  deployLabel: "HOW IS YOUR SOFTWARE TYPICALLY DEPLOYED TO THE CLOUD?",
  optIns: [
    "OPT-IN TO RECEIVE JICATE PRODUCT UPDATES:",
    "OPT-IN TO PERSONALIZED SALES OUTREACH:",
    "OPT-IN TO RECEIVE INVITES TO FUTURE EVENTS:",
    "OPT-IN TO RECEIVE EDUCATIONAL RESOURCES:",
  ],
  submit: "Submit",
  privacyNote: "Please see our Privacy Policy regarding how we will handle this information.",
};
