/**
 * Content for the /automotive-mobility page — a faithful DESIGN rebuild of the
 * reference "Automotive & Mobility" offering page, mapped onto this project's
 * design system. Layout/visual treatment matches the reference 1:1.
 *
 * IMPORTANT: the reference's marketing prose, partner case studies, and
 * customer/executive quotes are the source's own content — they are NOT
 * reproduced here. Every paragraph and quote below is neutral PLACEHOLDER text;
 * the user replaces all copy.
 *
 * Types are declared locally so the page is fully self-contained.
 *
 * Local media (in /public/automotive-mobility):
 *   Auto_Feature_Image_copy.png — About Our Work feature image
 *   Doosan_Thumbnail.jpg        — Impact (Doosan) image
 *   shutterstock_699756580.jpg  — Impact (Forvia) image
 *   Palantir_and_Lilium…mp4     — Impact (Lilium) video
 *   (partner logos/photos + offering icons not shipped — placeholders used)
 */

const BASE = "/automotive-mobility";

/* ------------------------------ shared shapes ----------------------------- */

export interface CTA {
  label: string;
  href: string;
}

export interface Offering {
  title: string;
  body: string;
  cta?: string;
}

export interface ImpactTab {
  tab: string;
  quote: string;
  attribution: string;
  intro: string;
  challenge: string;
  outcome: string;
  link?: CTA;
  /** Media on the right — video or image (placeholder when null). */
  video?: string | null;
  image?: string | null;
  alt: string;
  /** Optional tag row under the media. */
  tags?: string[];
}

/* --------------------------------- hero ----------------------------------- */

export const hero = {
  title: "Automotive & Mobility",
  lines: ["Mobility is on the cusp of total transformation.", "Jicate and its customers are leading the charge."],
};

/* ------------------------------ about our work ---------------------------- */

export const aboutWork = {
  heading: "About Our Work",
  image: `${BASE}/Auto_Feature_Image_copy.png`,
  alt: "Cars moving at sunset",
  paragraphs: [
    "Jicate Foundry is one of the world's leading automotive software platforms, and it is helping drive the mobility revolution forward. A majority of the world's top-ten OEMs — along with more than thirty major automotive parts suppliers — rely on it to make sense of their data and turn it into decisions.",
    "Every vehicle generates enormous volumes of data at each stage of its life: design, assembly, marketing, sales, and everyday use on the road. Jicate Foundry brings all of it together in a single, end-to-end solution built for the entire automotive ecosystem.",
    "By uniting the full lifecycle of vehicle data in one collaborative workspace, Foundry lets OEMs, suppliers, dealers, and other mobility players start unlocking value within weeks — accelerating growth, reducing costs, and helping shape what mobility becomes next.",
  ],
  link: { label: "Learn more about our offerings.", href: "#offerings" } satisfies CTA,
};

/* ------------------------------ our offerings ----------------------------- */

export const offerings = {
  heading: "Our Offerings",
  items: [
    { title: "Quality Management OS", body: "Bring together data from suppliers, dealers, diagnostic trouble codes, connected-vehicle telematics, warranty claims, and more to build one holistic view of quality — so issues surface and get resolved far sooner.", cta: "Learn more" },
    { title: "Component Performance Monitor", body: "Help OEMs and suppliers prepare and connect their data so teams can focus on solving emerging issues together. A shared, data-driven workflow lets OEMs catch and fix problems before they affect large numbers of vehicles.", cta: "Learn more" },
    { title: "Supply Chain", body: "Weather unexpected shocks with a transparent digital twin of your global supply chain that flags risks — plant shutdowns, production bottlenecks, logistics delays — before they bite. Run “what-if” scenarios to choose the right response in real time.", cta: "Learn more" },
    { title: "Plant Digital Twin", body: "Give manufacturing teams an integrated feedback loop to optimize production — cutting re-work, improving in-field performance, and speeding up critical investigations, even when production or supply conditions shift unexpectedly." },
    { title: "Configuration Reduction", body: "Understand real customer configuration demand to trim the complexity of the options you offer. Fuse data integration and analytics with operational decision-making to meet the challenge of rising cost per vehicle." },
    { title: "Cost of Goods Sold", body: "Keeping material costs down is essential to staying competitive. Integrate the data that matters — supplier contracts, historical and forecasted raw-material prices, production volumes, and more — to pinpoint and pursue the strongest COGS-reduction strategies." },
    { title: "New Vehicle Launch", body: "Support the critical, time-sensitive work behind every launch — from smooth production ramp-ups to sharper sales campaigns and close monitoring of early in-service performance — with data at the center of it all." },
    { title: "Net Zero", body: "Get an accurate, transparent account of CO2 across your entire supply chain, from raw-material processing to distribution and in-service use. Build a carbon-reduction roadmap and test “what-if” scenarios to find the best path to your targets." },
  ] satisfies Offering[],
};

/* ------------------------------- our impact ------------------------------- */

export const impact = {
  heading: "Our Impact",
  tabs: [
    {
      tab: "Electric Aviation",
      quote: "Our partner's commitment to zero operating emissions is accelerating the decarbonization of air travel, and we're putting the full power of our software behind that mission.",
      attribution: "— Chief Technology Officer, Jicate",
      intro: "A pioneering electric aviation company set out to unlock fast, affordable, and sustainable air mobility, building an entire data ecosystem around its electric vertical take-off and landing (eVTOL) jets.",
      challenge: "With Jicate Foundry, the company's jets stream terabytes of raw sensor data into a single platform. That unified sensor foundation powers predictive maintenance, battery-lifetime modeling, faster flight-readiness reviews, and rapid defect management.",
      outcome: "With Foundry, the team turned data into insight six times faster than before — freeing engineers to focus on action and innovation instead of wrangling data.",
      link: { label: "Learn more about our Edge AI offering", href: "/edge-ai" },
      video: `${BASE}/Lilium___High-Speed_Electric_Jets__20-02-23_.mp4`,
      image: null,
      alt: "Electric vertical take-off jet in flight",
      tags: [],
    },
    {
      tab: "Heavy Equipment",
      quote: "Connecting our data end to end changed how quickly we can see problems coming and act on them across every plant.",
      attribution: "— Head of Digital Transformation",
      intro: "A global heavy-equipment manufacturer wanted to break down data silos and bring information together across its entire value chain.",
      challenge: "The team needed to integrate data spanning suppliers, production lines, and connected machines so that insight — not manual reconciliation — drove day-to-day decisions.",
      outcome: "By unifying that data on Foundry, the manufacturer improved production quality and responsiveness while giving engineers a single, trusted view to work from.",
      link: { label: "Learn More", href: "#" },
      video: null,
      image: `${BASE}/Doosan_Thumbnail.jpg`,
      alt: "Construction vehicles overhead",
      tags: ["Integration", "IoT", "Production", "Quality"],
    },
    {
      tab: "Automotive Supplier",
      quote: "We wanted a carbon-neutral future built on the systems we already run — not a rip-and-replace — and the software made that possible.",
      attribution: "— Head of Sustainability",
      intro: "A major automotive technology supplier set an ambitious digital-transformation and CO2-neutral agenda across its global operations.",
      challenge: "Reaching that goal meant integrating sustainability and operational data on top of an existing IT portfolio, without disrupting the systems already keeping the business running.",
      outcome: "Building on Foundry, the supplier gained transparent carbon accounting and a clearer path to its net-zero targets while preserving its prior technology investments.",
      link: { label: "Learn More", href: "#" },
      video: null,
      image: `${BASE}/shutterstock_699756580.jpg`,
      alt: "City",
      tags: ["CO2 Monitoring", "Data Integration", "Supply Chain Management"],
    },
  ] satisfies ImpactTab[],
};

/* --------------------------------- form ----------------------------------- */

export const contactForm = {
  title: "Define the future of mobility today",
  fields: [
    { name: "firstName", label: "First Name", type: "text", required: true },
    { name: "lastName", label: "Last Name", type: "text", required: true },
    { name: "businessEmail", label: "Business Email Address", type: "email", required: true },
    { name: "phone", label: "Phone Number", type: "tel", required: false },
    { name: "company", label: "Company / Institution", type: "text", required: true },
    { name: "country", label: "Country", type: "select", required: true },
  ],
  submitLabel: "Submit",
  privacyHref: "/privacy",
};
