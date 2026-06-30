/**
 * Content for the /retail page — a faithful DESIGN rebuild of the reference
 * "Palantir for Retail" page, mapped onto this project's design system. Layout
 * matches the reference 1:1; LIGHT theme.
 *
 * IMPORTANT: the reference's marketing prose, the "founded in 2003" history, and
 * the case-study statistics are the source's own content — they are NOT
 * reproduced here. Long-form copy and case details below are neutral PLACEHOLDER
 * text; short functional labels (section titles, capability tab names, technology
 * categories, case-study pill names, form fields) are kept for parity. User
 * replaces all copy.
 *
 * Local media (in /public/retail): 1 diagram + 5 photos mapped across hero,
 * capabilities diagram, and the 4 case-study tabs.
 */

const BASE = "/retail";

/* ------------------------------ shared shapes ----------------------------- */

export interface CapabilityTab {
  tab: string;
  number: string;
  eyebrow: string;
  body: string;
}

export interface TechFeature {
  eyebrow: string;
  body: string;
}

export interface CaseTab {
  tab: string;
  partner: string;
  challenge: string;
  solution: string;
  image: string | null;
  alt: string;
}

/* --------------------------------- hero ----------------------------------- */

export const hero = {
  title: "Jicate for Retail",
  tagline: "AI-powered operational decision making across the retail value chain.",
  image: `${BASE}/shutterstock_1116843260.jpg`,
  alt: "Worker in a large warehouse",
};

/* -------------------------------- about ----------------------------------- */

export const about = {
  left: {
    heading: "About Us",
    paragraphs: [
      "Placeholder paragraph. Describe how Jicate builds data-driven operations and decision-making software to empower some of the world's most important institutions.",
      "Placeholder paragraph. Describe roots in intelligence and defense, then application to the most demanding commercial environments.",
      "Placeholder paragraph. Describe the core commercial platform as the AI-ready foundation for connected operations.",
    ],
  },
  right: {
    heading: "Jicate for Retail",
    paragraphs: [
      "In order to navigate today's shocks to supply and demand, retailers need near-instant visibility into demand and the ability to adapt their promotions, inventory, and operations in real time.",
      "Placeholder paragraph. Describe how the platform enables retailers to build a unified data foundation across the value chain.",
      "Placeholder paragraph. Describe how top global enterprise retailers use the platform to drive operational outcomes.",
    ],
  },
};

/* ----------------------------- capabilities ------------------------------- */

export const capabilities = {
  heading: "Our Capabilities",
  intro: "The platform is deployed across many functions of the retail value chain to help meet the demands of tomorrow's consumers.",
  diagram: `${BASE}/03_2022_UK_Retail_Diagram_1_Overview.jpg`,
  diagramAlt: "Connected retail company network diagram",
  tabs: [
    { tab: "The Connected Retail Company", number: "01", eyebrow: "01 — THE CONNECTED RETAIL COMPANY", body: "Re-unify around your company's central mission. Create a digital twin of your entire enterprise so you can simulate how functions are interrelated and gain full visibility into decision making across operations." },
    { tab: "Strategy & Planning", number: "02", eyebrow: "02 — STRATEGY & PLANNING", body: "Placeholder description. Replace with your own copy describing this capability." },
    { tab: "Sourcing", number: "03", eyebrow: "03 — SOURCING", body: "Placeholder description. Replace with your own copy describing this capability." },
    { tab: "Supply Chain & Logistics", number: "04", eyebrow: "04 — SUPPLY CHAIN & LOGISTICS", body: "Placeholder description. Replace with your own copy describing this capability." },
    { tab: "Store Operations", number: "05", eyebrow: "05 — STORE OPERATIONS", body: "Placeholder description. Replace with your own copy describing this capability." },
    { tab: "Marketing & Sales", number: "06", eyebrow: "06 — MARKETING & SALES", body: "Placeholder description. Replace with your own copy describing this capability." },
    { tab: "Customer Experience", number: "07", eyebrow: "07 — CUSTOMER EXPERIENCE", body: "Placeholder description. Replace with your own copy describing this capability." },
    { tab: "Sustainability & Circularity", number: "08", eyebrow: "08 — SUSTAINABILITY & CIRCULARITY", body: "Placeholder description. Replace with your own copy describing this capability." },
  ] satisfies CapabilityTab[],
};

/* ------------------------------ technology -------------------------------- */

export const technology = {
  heading: "Technology built for dynamic and optimal operations",
  features: [
    { eyebrow: "DATA INTEGRATION", body: "Accelerate multiple aspects of pipeline development and management with built-in automation, while granular governance features safeguard data integrity for worry-free collaboration." },
    { eyebrow: "ENTERPRISE ONTOLOGY", body: "Underlying data and models are linked to their real-world business objects through the core Ontology — a common lexicon that lets users intuitively interact with a digital representation of the enterprise." },
    { eyebrow: "BI & ANALYTICS", body: "Empower users of all technical abilities to manipulate, analyse, and act on heterogenous data in intuitive, interactive applications." },
    { eyebrow: "DATA SCIENCE & MODELING", body: "Enable full-stack data science with direct connectivity to both data pipelines and applications to develop, test, and operationalize ML and AI models." },
    { eyebrow: "APPLICATION BUILDING", body: "Enable teams across the organization to contribute meaningfully — create read-write applications, run simulations, and embed full-fidelity business rules and processes." },
  ] satisfies TechFeature[],
};

/* --------------------------- platform in action --------------------------- */

export const inAction = {
  heading: "The Platform in Action",
  tabs: [
    {
      tab: "Working Capital Optimization",
      partner: "Placeholder Partner",
      challenge: "Placeholder challenge. Describe how the customer was wasting significant amounts of expired material, needing to analyse data across a vast supply-chain network of hundreds of plants with more than 100,000 products to deliberate inventory reduction.",
      solution: "Placeholder solution. Describe how the platform integrated production, equipment capacity, plant assets, and logistics data into a single data layer.",
      image: `${BASE}/shutterstock_1690489663.jpg`,
      alt: "Automated warehouse aisles",
    },
    {
      tab: "Out-of-Stock & Overstock",
      partner: "Placeholder Partner",
      challenge: "Placeholder challenge. Replace with your own case-study copy.",
      solution: "Placeholder solution. Replace with your own case-study copy.",
      image: `${BASE}/shutterstock_1877244763_copy.jpg`,
      alt: "Retail shelves",
    },
    {
      tab: "Holistic Pricing Optimization",
      partner: "Placeholder Partner",
      challenge: "Placeholder challenge. Replace with your own case-study copy.",
      solution: "Placeholder solution. Replace with your own case-study copy.",
      image: `${BASE}/shutterstock_2036950148.jpg`,
      alt: "Shopping",
    },
    {
      tab: "Product & Assortment Selection",
      partner: "Placeholder Partner",
      challenge: "Placeholder challenge. Replace with your own case-study copy.",
      solution: "Placeholder solution. Replace with your own case-study copy.",
      image: `${BASE}/shutterstock_682632547.jpg`,
      alt: "Product assortment",
    },
  ] satisfies CaseTab[],
  caseLink: { label: "View Full Case Study", href: "#" },
};

/* --------------------------------- form ----------------------------------- */

export const contactForm = {
  title: "Bring Jicate to Your Retail Operations",
  fields: [
    { name: "firstName", label: "First Name", type: "text", required: true },
    { name: "lastName", label: "Last Name", type: "text", required: true },
    { name: "businessEmail", label: "Business Email Address", type: "email", required: true },
    { name: "phone", label: "Phone Number", type: "tel", required: true },
    { name: "jobTitle", label: "Job Title", type: "text", required: true },
    { name: "company", label: "Company / Institution", type: "text", required: true },
    { name: "country", label: "Country", type: "select", required: true },
  ],
  submitLabel: "Submit",
  privacyHref: "/privacy",
};
