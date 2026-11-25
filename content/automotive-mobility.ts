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
    "Jicate Data Platform is one of the world's leading automotive software platforms, and it is helping drive the mobility revolution forward. A majority of the world's top-ten OEMs — along with more than thirty major automotive parts suppliers — rely on it to make sense of their data and turn it into decisions.",
    "Every vehicle generates enormous volumes of data at each stage of its life: design, assembly, marketing, sales, and everyday use on the road. Jicate Data Platform brings all of it together in a single, end-to-end solution built for the entire automotive ecosystem.",
    "By uniting the full lifecycle of vehicle data in one collaborative workspace, Jicate Data Platform lets OEMs, suppliers, dealers, and other mobility players start unlocking value within weeks — accelerating growth, reducing costs, and helping shape what mobility becomes next.",
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
