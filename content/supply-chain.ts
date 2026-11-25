/**
 * Content for the /supply-chain page — a faithful DESIGN rebuild of the
 * reference "Palantir Supply Chain Solutions" page, mapped onto this project's
 * design system. Layout matches the reference 1:1; LIGHT theme.
 *
 * IMPORTANT (IP): the reference's marketing prose, partner names/logos, the
 * executive quote, and case statistics are the source's own copyrighted content
 * and are NOT reproduced. The long-form copy below is ORIGINAL, Jicate-voiced
 * prose conveying the same general substance in fresh wording; partners and case
 * studies are genericized (generic sector descriptors, no real names or verbatim
 * quotes). Short functional labels (section titles, industry / product eyebrows,
 * form fields) are kept for design parity.
 *
 * Local media (in /public/supply-chain): a mix of product screenshots and
 * industry photos mapped across the video band, About diagram, impact cases,
 * industry grid, and product grid (best-guess mapping; the user re-assigns).
 */

const BASE = "/supply-chain";

export interface IndustryCard {
  eyebrow: string;
  image: string;
  alt: string;
  body: string;
}

export interface ProductCard {
  eyebrow: string;
  image: string;
  alt: string;
  body: string;
}

/* --------------------------------- hero ----------------------------------- */

export const hero = {
  title: "Jicate Supply Chain Solutions",
  tagline: "AI-driven strategy, planning, and execution across the end-to-end value chain.",
  cta: { label: "Schedule a Demo", href: "/enquiry-form" },
};

/* ------------------------------- video band ------------------------------- */

export const video = {
  eyebrow: "INNOVATION",
  text: "We are in a period of rapid innovation.",
  image: `${BASE}/shutterstock_1877244763.jpg`,
  alt: "Advanced manufacturing",
  videoLabel: "Play Video",
};

/* ------------------------------ about our work ---------------------------- */

export const about = {
  heading: "About Our Work",
  body: "Whether the mission is delivering humanitarian aid or securing critical manufacturing components, Jicate helps organizations run their supply chains with confidence. The platform builds on the technology you already have — connecting siloed planning and execution, sharpening inventory management, and giving teams the resilience to keep operating through economic shocks and geopolitical uncertainty.",
  image: `${BASE}/image__12_.png`,
  imageAlt: "Smart factory supply-chain network diagram",
};

/* --------------------------- our industry impact -------------------------- */

const ind = (eyebrow: string, image: string, body: string): IndustryCard => ({ eyebrow, image, alt: `${eyebrow} industry`, body });

export const industry = {
  heading: "Our Industry Impact",
  cards: [
    ind("CPG", `${BASE}/shutterstock_1667715181.jpg`, "Bridge siloed supply and demand data through autonomous planning and execution."),
    ind("AEROSPACE & DEFENSE", `${BASE}/manu.jpg`, "Integrate workforce and resource information in near-real time to optimize operations."),
    ind("HEALTHCARE", `${BASE}/healthcare_multicard.jpg`, "Improve patient outcomes with a common data foundation for drug manufacturing and distribution."),
    ind("ENERGY", `${BASE}/shutterstock_1827506501 (1).jpg`, "Securely manage cross-entity visibility into inventory and demand, to enable more proactive decision-making."),
    ind("RETAIL", `${BASE}/Slide1.jpg`, "Prevent low-stock and stockouts, while maximizing transactability across different product lines."),
    ind("FOOD & BEVERAGE", `${BASE}/Slide2.jpg`, "Reduce overstock incidents and redistribute stranded inventory with a near-real-time operating picture."),
    ind("MANUFACTURING", `${BASE}/Slide4.jpg`, "Digitize supply chain workflows and product cycles to track and manage intervention effectiveness."),
  ] satisfies IndustryCard[],
  cta: { label: "Learn more", href: "#" },
};

/* --------------------------- learn about (products) ----------------------- */

export const products = {
  heading: "Learn about Jicate Supply Chain Solutions",
  cards: [
    { eyebrow: "ALLOCATION+", image: `${BASE}/Allocation_.png`, alt: "Allocation+ product", body: "Optimize inventory allocation, strike the right balance between out-of-stock and overstock, ensure customer retention, and protect revenue." },
    { eyebrow: "SALES & OPERATIONS", image: `${BASE}/Slide5.jpg`, alt: "Sales & Operations product", body: "Integrate Sales & Operations Execution and Sales & Operation Planning processes for a near-real-time view of your supply-chain landscape." },
    { eyebrow: "CLEAR TO BUILD", image: `${BASE}/Clear_to_Build.png`, alt: "Clear to Build product", body: "Create core Clear to Build functionality with a wide range of visibility, simulation, and alerting capabilities across the entire materials-management space." },
    { eyebrow: "COST OF GOODS SOLD", image: `${BASE}/Slide6.jpg`, alt: "Cost of Goods Sold product", body: "Calculate the exact costs of every stage of production, in spite of fluctuating labor, raw materials, and utilities prices." },
    { eyebrow: "SUPPLY CHAIN CONTROL TOWER", image: `${BASE}/Control_Tower.png`, alt: "Control Tower product", body: "Get a high-level overview of your entire supply-chain network and KPIs, and drill down into specific areas of concern." },
  ] satisfies ProductCard[],
};

/* --------------------------------- form ----------------------------------- */

export const contactForm = {
  title: "See what Jicate can do for your Supply Chain",
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
