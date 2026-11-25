/** Content for the /retail page. */

const BASE = "/retail";

/* ------------------------------ shared shapes ----------------------------- */

export interface CapabilityTab {
  tab: string;
  number: string;
  eyebrow: string;
  body: string;
  diagram: string;
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
      "Jicate builds data-driven operations and decision-making software that empowers some of the world's most important institutions.",
      "Our core commercial platform, Jicate Data Platform, is the AI-powered operating system for the modern enterprise — building on your existing technology investments to connect siloed planning and optimize for efficiency and agility.",
    ],
  },
  right: {
    heading: "Jicate for Retail",
    paragraphs: [
      "To ride out today's swings in supply and demand, retailers need near-real-time visibility into demand — and the ability to adjust promotions, inventory, and operations on the fly.",
      "Jicate Data Platform lets retailers build a unified data foundation and tackle their toughest problems — optimizing inventory, building stronger supply chains, and delivering seamless omnichannel customer experiences.",
    ],
  },
};

/* ----------------------------- capabilities ------------------------------- */

export const capabilities = {
  heading: "Our Capabilities",
  intro: "The platform runs across many functions of the retail value chain, helping retailers meet what tomorrow's consumers will expect.",
  diagramAlt: "Connected retail company network diagram",
  tabs: [
    { tab: "The Connected Retail Company", number: "01", eyebrow: "01 — THE CONNECTED RETAIL COMPANY", body: "Bring the whole company back around its central mission. Build a digital twin of your entire enterprise so you can simulate how functions connect and see decision-making clearly across every operation.", diagram: `${BASE}/03_2022_UK_Retail_Diagram_1_Overview.jpg` },
    { tab: "Strategy & Planning", number: "02", eyebrow: "02 — STRATEGY & PLANNING", body: "Align long-range strategy with day-to-day plans on one shared data foundation, so forecasts, budgets, and targets stay connected and every team is planning against the same numbers.", diagram: `${BASE}/03_2022_UK_Retail_Diagram_2_Strategy_Planning.jpg` },
    { tab: "Sourcing", number: "03", eyebrow: "03 — SOURCING", body: "Bring spend, supplier, and lead-time data together to make sharper sourcing decisions, negotiate from a position of insight, and reduce risk across your supplier base.", diagram: `${BASE}/03_2022_UK_Retail_Diagram_3_Sourcing.jpg` },
    { tab: "Supply Chain & Logistics", number: "04", eyebrow: "04 — SUPPLY CHAIN & LOGISTICS", body: "Gain end-to-end visibility across your supply chain to anticipate disruptions, balance inventory, and orchestrate logistics so the right product reaches the right place at the right time.", diagram: `${BASE}/03_2022_UK_Retail_Diagram_4_Supply_Chain.jpg` },
    { tab: "Store Operations", number: "05", eyebrow: "05 — STORE OPERATIONS", body: "Give store teams a single, real-time view of stock, staffing, and tasks, so they can act on what matters most and keep shelves, service, and execution consistent.", diagram: `${BASE}/03_2022_UK_Retail_Diagram_5_Local_Retail_Regional_Operations.jpg` },
    { tab: "Marketing & Sales", number: "06", eyebrow: "06 — MARKETING & SALES", body: "Target the right customers with the right offers by pairing propensity and segmentation models with live data, and measure and refine campaigns against real results.", diagram: `${BASE}/03_2022_UK_Retail_Diagram_6_Marketing_Sales.jpg` },
    { tab: "Customer Experience", number: "07", eyebrow: "07 — CUSTOMER EXPERIENCE", body: "Unify what you know about each customer across every channel to deliver consistent, personalized experiences from first touch through post-purchase.", diagram: `${BASE}/03_2022_UK_Retail_Diagram_7_Consumers.jpg` },
    { tab: "Sustainability & Circularity", number: "08", eyebrow: "08 — SUSTAINABILITY & CIRCULARITY", body: "Measure and reduce environmental impact across the value chain with transparent data on materials, emissions, and waste — and design more circular, resource-efficient operations.", diagram: `${BASE}/03_2022_UK_Retail_Diagram_8_Sustainable_Retail.jpg` },
  ] satisfies CapabilityTab[],
};

/* ------------------------------ technology -------------------------------- */

export const technology = {
  heading: "Technology built for dynamic and optimal operations",
  features: [
    { eyebrow: "DATA INTEGRATION", body: "Speed up pipeline development and management with built-in automation, while granular governance keeps data integrity intact so teams can collaborate without worry." },
    { eyebrow: "ENTERPRISE DATA MODEL", body: "The core Business Data Model links your data and models to the real-world business objects they represent, giving everyone — from analytics teams to decision-makers — a shared language for working intuitively with a digital picture of the enterprise." },
    { eyebrow: "BI & ANALYTICS", body: "Let people of any technical skill level shape, analyse, and act on diverse data through intuitive, interactive applications." },
    { eyebrow: "DATA SCIENCE & MODELING", body: "Support full-stack data science with direct connections to both pipelines and applications — one integrated environment to build, test, and operationalize ML and AI models." },
    { eyebrow: "APPLICATION BUILDING", body: "Give teams across the organization a real way to contribute — build read-write applications, run simulations, and embed full-fidelity business rules and processes." },
  ] satisfies TechFeature[],
};

/* --------------------------------- form ----------------------------------- */

export const contactForm = {
  title: "Bring Jicate to Your Retail Operations",
  fields: [
    { name: "firstName", label: "First Name", type: "text", required: true },
    { name: "lastName", label: "Last Name", type: "text", required: true },
    { name: "businessEmail", label: "Business Email Address", type: "email", required: true },
    { name: "phone", label: "Phone Number", type: "tel", required: true },
    { name: "company", label: "Company / Institution", type: "text", required: true },
    { name: "country", label: "Country", type: "select", required: true },
  ],
  submitLabel: "Submit",
  privacyHref: "/privacy",
};
