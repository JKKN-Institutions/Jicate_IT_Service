/** Content for the /insurance page. */

export interface CTA {
  label: string;
  href: string;
}

export interface Feature {
  title: string;
  body: string;
}

/* ---------------------------------- hero --------------------------------- */

export const hero = {
  image: "/insurance/sean-pollock-PhYq704ffdA-unsplash_-_edited.jpg",
  imageAlt: "Insurance buildings — skyscrapers from below",
  title: "Jicate for Insurance",
  subcopy: "Winning with AI Automation in Insurance",
};

/* --------------------------------- intro --------------------------------- */

export const intro = {
  heading: "AI automation delivering speed and accuracy to critical business processes across insurance and beyond.",
  statements: [
    "In a world that is becoming increasingly fast-paced with growing risk and uncertainty, it’s crucial for the insurance industry to make timely, accurate decisions contextualized from high volumes of unstructured data across siloed sources, while staying compliant with ever-evolving and stringent regulatory requirements.",
    "All across the insurance value chain, partners are relying on Jicate software to power critical decisions — leveraging our state-of-the-art AI and automation capabilities to more accurately underwrite risk, process claims, and unlock efficiencies in day-to-day operations.",
  ],
};

/* ------------------------- capability sections --------------------------- */

export const underwriting = {
  heading: "AI Underwriting Automation",
  features: [
    { title: "Data Extraction", body: "Jicate AI Platform extracts relevant data attributes from thousands of structured and unstructured sources, including PDFs, emails, Excel spreadsheets, audio calls, and more." },
    { title: "Augmented Decision-making", body: "Extracted submissions data is compared against numerous sources of information including historical performance data, similar cases, and predefined underwriting guidelines set by your organization, to inform accurate and compliant underwriting decisions." },
    { title: "Actuarial Pricing and Reserving Integration", body: "Jicate AI Platform integrates bi-directionally with existing actuarial models, pricing raters, and reserving engines to provide proposed premium and reserve amounts." },
    { title: "Auto-generated Responses", body: "Jicate AI Platform enables underwriters to generate suggested responses to brokers and agents based on a combination of automated flags generated and human-in-the-loop interventions." },
    { title: "Auditability", body: "All actions taken by the user and by AI Agents are written back and recorded in Jicate AI Platform, ensuring traceability into the decision lineage." },
  ] as Feature[],
};

export const smartClaims = {
  heading: "AI Smart Claims",
  features: [
    { title: "Claims FNOL Ingestion", body: "All sources of structured and unstructured information as part of the first notification of loss (FNOL) are centralized and integrated together — emails, call recordings, images, etc." },
    { title: "Multimodal-AI Automated Review", body: "Jicate AI Platform leverages multimodal AI to automatically assess incoming claims against pre-defined and customizable coverage conditions, ensuring a rapid and accurate determination of coverage eligibility." },
    { title: "Smart Claims Assessment Routing", body: "For each incoming claim that needs assessment, a dynamic routing instruction matches each claim with the best claims assessment human or channel to minimize cost of review and complexity." },
    { title: "Rapid Automated Payouts", body: "AI Agents handle the claims that pass all appropriate coverage checks and perform direct integration with payout systems for immediate payout — encouraging customer satisfaction and retention." },
    { title: "AI Claims Analytics", body: "Surfacing trends across cohorts of the business to identify growing unexpected losses, perform actuals-vs-expected experience studies, and continuously update reserving and IBNR estimations." },
    { title: "Ethical AI Guardrails", body: "Jicate AI Platform puts guardrails in place to assure the AI is not permitted to prevent the payout of a claim without satisfying human-enforced rules and human confirmation of its determinations." },
  ] as Feature[],
};

export const customerIntelligence = {
  heading: "Real-time AI Customer Intelligence",
  features: [
    { title: "AI-Powered Customer 360", body: "Integrate structured and unstructured data from internal, external, and open sources to create a holistic customer record, augmented with AI and model-driven data enrichments." },
    { title: "Next Best Action / Next Best Product", body: "Provide AI recommendations for marketing campaigns, propensity-to-purchase, propensity-to-bind, cross-sell, and up-sell across the customer base." },
    { title: "Real-time audio-to-text transcription", body: "Jicate AI Platform transcribes and intelligently extracts information from live phone calls, with support for 50+ languages for use during customer interactions." },
    { title: "AI-Powered Live Suggestions", body: "During live interactions, Jicate AI Platform automatically suggests follow-up questions for claim handlers and call-center employees to aid in accurate information capture and a first-class customer experience." },
    { title: "Call Summary & Next Best Action", body: "Jicate AI Platform generates a summary of the phone call in a comprehensive, easy-to-read format, and suggests next best actions for the claims handler based on data from the interaction." },
  ] as Feature[],
};

/* ------------------------------ contact form ----------------------------- */

export const contact = {
  id: "contact-us",
  heading: "Contact Us",
  fields: [
    { name: "firstName", label: "FIRST NAME:", type: "text", required: true },
    { name: "lastName", label: "LAST NAME:", type: "text", required: true },
    { name: "email", label: "EMAIL ADDRESS:", type: "email", required: true },
    { name: "company", label: "COMPANY NAME:", type: "text", required: true },
  ],
  countryLabel: "COUNTRY:",
  submit: "Submit",
  privacyNote: "Please see our Privacy Policy regarding how we will handle the information.",
};
