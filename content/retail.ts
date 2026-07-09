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
      "Jicate builds data-driven operations and decision-making software that empowers some of the world's most important institutions.",
      "We got our start in intelligence and defense, and brought those frontline lessons to bear across countless industries and commercial enterprises around the world.",
      "Our core commercial platform, Jicate Foundry, is the AI-powered operating system for the modern enterprise — building on your existing technology investments to connect siloed planning and optimize for efficiency and agility.",
    ],
  },
  right: {
    heading: "Jicate for Retail",
    paragraphs: [
      "To ride out today's swings in supply and demand, retailers need near-real-time visibility into demand — and the ability to adjust promotions, inventory, and operations on the fly.",
      "Jicate Foundry lets retailers build a unified data foundation and tackle their toughest problems — optimizing inventory, building stronger supply chains, and delivering seamless omnichannel customer experiences.",
      "The world's leading enterprise retailers use Jicate Foundry to drive digital transformation and get smarter, sharper value from their data.",
    ],
  },
};

/* ----------------------------- capabilities ------------------------------- */

export const capabilities = {
  heading: "Our Capabilities",
  intro: "The platform runs across many functions of the retail value chain, helping retailers meet what tomorrow's consumers will expect.",
  diagram: `${BASE}/03_2022_UK_Retail_Diagram_1_Overview.jpg`,
  diagramAlt: "Connected retail company network diagram",
  tabs: [
    { tab: "The Connected Retail Company", number: "01", eyebrow: "01 — THE CONNECTED RETAIL COMPANY", body: "Bring the whole company back around its central mission. Build a digital twin of your entire enterprise so you can simulate how functions connect and see decision-making clearly across every operation." },
    { tab: "Strategy & Planning", number: "02", eyebrow: "02 — STRATEGY & PLANNING", body: "Align long-range strategy with day-to-day plans on one shared data foundation, so forecasts, budgets, and targets stay connected and every team is planning against the same numbers." },
    { tab: "Sourcing", number: "03", eyebrow: "03 — SOURCING", body: "Bring spend, supplier, and lead-time data together to make sharper sourcing decisions, negotiate from a position of insight, and reduce risk across your supplier base." },
    { tab: "Supply Chain & Logistics", number: "04", eyebrow: "04 — SUPPLY CHAIN & LOGISTICS", body: "Gain end-to-end visibility across your supply chain to anticipate disruptions, balance inventory, and orchestrate logistics so the right product reaches the right place at the right time." },
    { tab: "Store Operations", number: "05", eyebrow: "05 — STORE OPERATIONS", body: "Give store teams a single, real-time view of stock, staffing, and tasks, so they can act on what matters most and keep shelves, service, and execution consistent." },
    { tab: "Marketing & Sales", number: "06", eyebrow: "06 — MARKETING & SALES", body: "Target the right customers with the right offers by pairing propensity and segmentation models with live data, and measure and refine campaigns against real results." },
    { tab: "Customer Experience", number: "07", eyebrow: "07 — CUSTOMER EXPERIENCE", body: "Unify what you know about each customer across every channel to deliver consistent, personalized experiences from first touch through post-purchase." },
    { tab: "Sustainability & Circularity", number: "08", eyebrow: "08 — SUSTAINABILITY & CIRCULARITY", body: "Measure and reduce environmental impact across the value chain with transparent data on materials, emissions, and waste — and design more circular, resource-efficient operations." },
  ] satisfies CapabilityTab[],
};

/* ------------------------------ technology -------------------------------- */

export const technology = {
  heading: "Technology built for dynamic and optimal operations",
  features: [
    { eyebrow: "DATA INTEGRATION", body: "Speed up pipeline development and management with built-in automation, while granular governance keeps data integrity intact so teams can collaborate without worry." },
    { eyebrow: "ENTERPRISE ONTOLOGY", body: "The core Ontology links your data and models to the real-world business objects they represent, giving everyone — from analytics teams to decision-makers — a shared language for working intuitively with a digital picture of the enterprise." },
    { eyebrow: "BI & ANALYTICS", body: "Let people of any technical skill level shape, analyse, and act on diverse data through intuitive, interactive applications." },
    { eyebrow: "DATA SCIENCE & MODELING", body: "Support full-stack data science with direct connections to both pipelines and applications — one integrated environment to build, test, and operationalize ML and AI models." },
    { eyebrow: "APPLICATION BUILDING", body: "Give teams across the organization a real way to contribute — build read-write applications, run simulations, and embed full-fidelity business rules and processes." },
  ] satisfies TechFeature[],
};

/* --------------------------- platform in action --------------------------- */

export const inAction = {
  heading: "The Platform in Action",
  tabs: [
    {
      tab: "Working Capital Optimization",
      partner: "A global manufacturer",
      challenge: "The company was losing significant amounts of material to expiry — a costly problem — and needed to analyse data across a sprawling supply-chain network of hundreds of plants and more than 100,000 products to make deliberate inventory reductions.",
      solution: "With Jicate Foundry, they brought production, equipment-capacity, plant-asset, and logistics data into a single layer, gaining visibility across every product and plant and the ability to fine-tune inventory at a granular level.",
      image: `${BASE}/shutterstock_1690489663.jpg`,
      alt: "Automated warehouse aisles",
    },
    {
      tab: "Out-of-Stock & Overstock",
      partner: "A global retailer",
      challenge: "The retailer struggled to keep shelves stocked without tying up cash in excess inventory, as disconnected systems made it hard to see real demand and react in time.",
      solution: "Jicate unified demand, inventory, and replenishment data into a single view, so teams could predict shortages and overstocks early and rebalance stock proactively across the network.",
      image: `${BASE}/shutterstock_1877244763_copy.jpg`,
      alt: "Retail shelves",
    },
    {
      tab: "Holistic Pricing Optimization",
      partner: "A global retailer",
      challenge: "Pricing decisions were made in silos, without a clear, connected view of cost, demand, competition, and margin across the assortment.",
      solution: "Jicate brought those signals together so teams could set and adjust prices holistically — protecting margin while staying competitive and responsive to demand.",
      image: `${BASE}/shutterstock_2036950148.jpg`,
      alt: "Shopping",
    },
    {
      tab: "Product & Assortment Selection",
      partner: "A global retailer",
      challenge: "Choosing the right products and assortments for each market meant reconciling sales, trend, and customer data that lived in separate systems.",
      solution: "Jicate unified that data so merchandising teams could shape assortments around real demand by segment and location, and adapt them as customer preferences shift.",
      image: `${BASE}/shutterstock_682632547.jpg`,
      alt: "Product assortment",
    },
  ] satisfies CaseTab[],
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
