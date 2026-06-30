/**
 * Content for the /insurance page — a faithful DESIGN rebuild of the Palantir for
 * Insurance reference page, mapped onto this project's design system. Short
 * functional headings/labels are kept; body copy is written in Jicate's own voice
 * (placeholder text the user will swap), not copied from the reference. Types are
 * local so the page touches no shared files.
 *
 * Assets in /public/insurance: sean-pollock-...jpg (hero buildings),
 * murakami_sompo.jpg (case-study speaker), shutterstock_354301223 (1).jpg and
 * image (7).png (case-study / abstract). Filenames keep spaces/parens — the
 * browser URL-encodes them when serving from /public.
 */

export interface CTA {
  label: string;
  href: string;
}

export interface Feature {
  title: string;
  body: string;
}

export interface CaseTab {
  tab: string;
  partner: string;
  quote: string;
  overview: string;
  points: { strong: string; body: string }[];
  image: string;
  imageAlt: string;
  watchLabel: string;
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
    { title: "Data Extraction", body: "AIP extracts relevant data attributes from thousands of structured and unstructured sources, including PDFs, emails, Excel spreadsheets, audio calls, and more." },
    { title: "Augmented Decision-making", body: "Extracted submissions data is compared against numerous sources of information including historical performance data, similar cases, and predefined underwriting guidelines set by your organization, to inform accurate and compliant underwriting decisions." },
    { title: "Actuarial Pricing and Reserving Integration", body: "AIP integrates bi-directionally with existing actuarial models, pricing raters, and reserving engines to provide proposed premium and reserve amounts." },
    { title: "Auto-generated Responses", body: "AIP enables underwriters to generate suggested responses to brokers and agents based on a combination of automated flags generated and human-in-the-loop interventions." },
    { title: "Auditability", body: "All actions taken by the user and by AI Agents are written back and recorded in AIP, ensuring traceability into the decision lineage." },
  ] as Feature[],
};

export const smartClaims = {
  heading: "AI Smart Claims",
  features: [
    { title: "Claims FNOL Ingestion", body: "All sources of structured and unstructured information as part of the first notification of loss (FNOL) are centralized and integrated together — emails, call recordings, images, etc." },
    { title: "Multimodal-AI Automated Review", body: "AIP leverages multimodal AI to automatically assess incoming claims against pre-defined and customizable coverage conditions, ensuring a rapid and accurate determination of coverage eligibility." },
    { title: "Smart Claims Assessment Routing", body: "For each incoming claim that needs assessment, a dynamic routing instruction matches each claim with the best claims assessment human or channel to minimize cost of review and complexity." },
    { title: "Rapid Automated Payouts", body: "AI Agents handle the claims that pass all appropriate coverage checks and perform direct integration with payout systems for immediate payout — encouraging customer satisfaction and retention." },
    { title: "AI Claims Analytics", body: "Surfacing trends across cohorts of the business to identify growing unexpected losses, perform actuals-vs-expected experience studies, and continuously update reserving and IBNR estimations." },
    { title: "Ethical AI Guardrails", body: "AIP puts guardrails in place to assure the AI is not permitted to prevent the payout of a claim without satisfying human-enforced rules and human confirmation of its determinations." },
  ] as Feature[],
};

export const customerIntelligence = {
  heading: "Real-time AI Customer Intelligence",
  features: [
    { title: "AI-Powered Customer 360", body: "Integrate structured and unstructured data from internal, external, and open sources to create a holistic customer record, augmented with AI and model-driven data enrichments." },
    { title: "Next Best Action / Next Best Product", body: "Provide AI recommendations for marketing campaigns, propensity-to-purchase, propensity-to-bind, cross-sell, and up-sell across the customer base." },
    { title: "Real-time audio-to-text transcription", body: "AIP transcribes and intelligently extracts information from live phone calls, with support for 50+ languages for use during customer interactions." },
    { title: "AI-Powered Live Suggestions", body: "During live interactions, AIP automatically suggests follow-up questions for claim handlers and call-center employees to aid in accurate information capture and a first-class customer experience." },
    { title: "Call Summary & Next Best Action", body: "AIP generates a summary of the phone call in a comprehensive, easy-to-read format, and suggests next best actions for the claims handler based on data from the interaction." },
  ] as Feature[],
};

/* --------------------------- transformation ------------------------------ */

export const transformation = {
  heading: "Real AI Transformation Starts with Jicate",
  tabs: [
    {
      tab: "At a Global Insurer",
      partner: "Global Insurer",
      quote: "“So, what was the impact? Over the last three years, we have seen a significant improvement in profit — and we expect that to continue over the next three years.”",
      overview:
        "This global insurer operates across various forms of insurance. They sought a technology partner that could help streamline critical processes to ensure profitability, automate manual tasks so underwriters can focus where their expertise has the most impact, and provide peace of mind for their customers.",
      points: [
        { strong: "Data-driven pricing strategy", body: "By leveraging Jicate’s data integration capabilities, the insurer is able to implement more appropriate pricing supported by a holistic view of data across various sources." },
        { strong: "Improved customer service", body: "As a result of being able to evaluate accidents through a single source of truth, sales representatives can more readily provide accurate explanations to customers regarding pricing changes." },
        { strong: "AI-Powered recommendations", body: "AIP can provide premium pricing guidance based on its comprehensive view across previous accidents, client information, and more — generating a recommendation for a human in the loop to review and approve." },
      ],
      image: "/insurance/murakami_sompo.jpg",
      imageAlt: "Speaker presenting at a conference",
      watchLabel: "Watch: Chief Data Officer at the AI Conference",
    },
    {
      tab: "At a large European Insurer",
      partner: "European Insurer",
      quote: "“The platform gave our teams a single operating picture — decisions that used to take weeks now take days.”",
      overview:
        "A large European insurer deployed the platform to integrate underwriting, claims, and actuarial data into a single environment, accelerating decisions while preserving strict governance and compliance.",
      points: [
        { strong: "Faster underwriting", body: "Automated data extraction and augmented decision-making compressed submission turnaround times across lines of business." },
        { strong: "Stronger compliance", body: "Full decision lineage and auditability gave risk and compliance teams confidence in every automated action." },
      ],
      image: "/insurance/image (7).png",
      imageAlt: "Abstract product visualization",
      watchLabel: "Watch: European Insurer case study",
    },
    {
      tab: "At a Reinsurer",
      partner: "Reinsurer",
      quote: "“We can now model portfolio risk continuously instead of quarterly — that changes how we run the business.”",
      overview:
        "A leading reinsurer uses the platform to unify exposure, claims, and market data, enabling continuous portfolio risk modeling and faster, better-informed capital decisions.",
      points: [
        { strong: "Continuous risk modeling", body: "Integrated exposure and claims data feed real-time portfolio models instead of periodic batch runs." },
        { strong: "Better capital decisions", body: "Leadership can simulate scenarios and reallocate capital with a holistic, up-to-date view of risk." },
      ],
      image: "/insurance/shutterstock_354301223 (1).jpg",
      imageAlt: "Abstract data visualization",
      watchLabel: "Watch: Reinsurer case study",
    },
  ] as CaseTab[],
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
    { name: "jobTitle", label: "JOB TITLE:", type: "text", required: true },
  ],
  countryLabel: "COUNTRY:",
  submit: "Submit",
  privacyNote: "Please see our Privacy Policy regarding how we will handle the information.",
};
