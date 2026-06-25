/**
 * Content for the /anti-money-laundering page — a faithful DESIGN rebuild of the
 * AML offering reference page, mapped onto this project's design system. Short
 * functional headings/labels are kept; all body copy is written in Jicate's own
 * voice (placeholder text the user will swap), not copied from the reference.
 * Types are local so the page touches no shared files.
 *
 * Assets in /public/anti-money-laundering: Security.jpg, shutterstock_354301223.jpg,
 * SDDI.jpg (the three "AML in Action" stat cards). The hero video thumbnail and
 * the "What sets us apart" image are not shipped — rendered as placeholders.
 */

export interface CTA {
  label: string;
  href: string;
}

export interface Segment {
  text: string;
  strong?: boolean;
}

export interface StatCard {
  number: string;
  image: string;
  alt: string;
  segments: Segment[];
}

export interface Feature {
  title: string;
  paragraphs: string[];
}

/* ---------------------------------- hero --------------------------------- */

export const hero = {
  title: "Anti-Money Laundering",
  subcopy: "Fighting the Future of Financial Crime",
  cta: { label: "Get Started", href: "#start-a-conversation" } as CTA,
  // AML_Thumbnail.jpg is not shipped — Hero renders a video placeholder.
  videoLabel: "Play Video",
};

/* --------------------- One Approach, Every Challenge --------------------- */

export const oneApproach = {
  heading: "One Approach, Every Challenge",
  intro:
    "Financial crime is harder than ever to detect and prevent. Digital transformation has accelerated increasingly sophisticated attacks, and new, lightly regulated digital assets keep raising every institution's risk exposure. Jicate's platform is built for banks, fintechs, and regulators alike — layering rigorous security on top of a modern, best-in-class architecture.",
  solvesForHeading: "Jicate Solves For:",
  solvesFor: [
    "Transaction Monitoring",
    "Investigations and Financial Intelligence Units",
    "KYC",
    "Customer and Transaction Risk Rating",
    "Sanctions Screening",
    "Enhanced & Customer Due Diligence",
  ],
};

/* ------------------------------ AML in Action --------------------------- */

export const inAction = {
  heading: "AML in Action",
  cards: [
    {
      number: "01",
      image: "/anti-money-laundering/Security.jpg",
      alt: "White abstract geometric rendering",
      segments: [
        { text: "Our AML platform helps global financial organizations " },
        { text: "sharply lower their compliance costs", strong: true },
        { text: " and " },
        { text: "multiply their true-positive detection rate", strong: true },
        { text: "." },
      ],
    },
    {
      number: "02",
      image: "/anti-money-laundering/shutterstock_354301223.jpg",
      alt: "Dark abstract geometric rendering",
      segments: [
        { text: "Our solution gives banks the flexibility to " },
        { text: "deliver dozens of compliance use cases on a single platform", strong: true },
        { text: "." },
      ],
    },
    {
      number: "03",
      image: "/anti-money-laundering/SDDI.jpg",
      alt: "Dark abstract illustration",
      segments: [
        { text: "The platform " },
        { text: "cuts investigative time substantially", strong: true },
        { text: " while improving risk posture and relationships with the regulators." },
      ],
    },
  ] as StatCard[],
};

/* ----------------------------- Foundry for AML -------------------------- */

export const platformForAml = {
  heading: "The Jicate Platform for AML",
  paragraphs: [
    "Financial institutions need to comprehensively understand the behavior of their customers, counterparties, and all related networks.",
    "Our platform is a regulator-friendly approach to improving your AML risk posture — deploying a next-generation, AI-based AML and compliance process within days, not years.",
  ],
};

/* --------------------------- What sets us apart ------------------------- */

export const whatSetsApart = {
  heading: "What sets Jicate apart:",
  // shutterstock_715806535.jpg is not shipped — rendered as a placeholder.
  imageAlt: "Financial operations team at work",
  features: [
    {
      title: "Powerful AI Foundation",
      paragraphs: [
        "Machine-learning entity resolution and advanced network-based risk models make it easy to link customers, networks, and unknown counterparties accurately. The result is a solid, future-proofed foundation and a central client file — a true “customer 360” — that updates dynamically across every AML function.",
      ],
    },
    {
      title: "Holistic Risk-Based Models & Scenarios",
      paragraphs: [
        "We take a hybrid approach: comprehensive out-of-the-box modules, scenarios, and models, paired with the flexibility to meet the regulatory demands of your specific customer base and risk tolerance. That improves alert accuracy and efficiency while producing more high-quality, automated reports for regulators.",
      ],
    },
    {
      title: "Government-Grade Security",
      paragraphs: [
        "Built from the start with privacy and civil-liberties concerns front of mind, the platform includes unusually granular security controls.",
        "All data is encrypted in transit and at rest, with high auditability and role-based access control, so teams can access and share the data they need without compromising security.",
      ],
    },
    {
      title: "Best-in-Class Investigative Tooling & Reporting",
      paragraphs: [
        "With a holistic view across transaction, relationship, counterparty, KYC, and sanctions risk, analysts can quickly triage alerts and ask follow-up questions to disposition an entire network of related entities. Built-in workflow management keeps escalation, triage, and review timely and transparent across teams.",
        "Once an investigation closes, the platform generates the required reporting with full data lineage to source systems, updates reports dynamically as information changes, and alerts analysts to new risks.",
      ],
    },
  ] as Feature[],
};

/* ----------------------------- A Proven Solution ------------------------ */

export const provenSolution = {
  heading: "A Proven Solution",
  items: [
    {
      title: "Commercial Off-the-Shelf Product",
      paragraphs: [
        "Our platform is a productized, out-of-the-box solution with a stable, scalable back end built for complex data environments — the basis for a next-generation financial-crime solution.",
      ],
    },
    {
      title: "Speed to Implementation",
      paragraphs: [
        "The solution can be deployed rapidly and delivers a significant share of its functionality out of the box — meeting needs on a timeline of weeks rather than years.",
      ],
    },
    {
      title: "Foundation for Future Capabilities",
      paragraphs: [
        "The platform provides a data foundation for continued digital transformation, designed to adapt and scale as organizational needs change.",
      ],
    },
    {
      title: "Cost-Effectiveness",
      paragraphs: [
        "A fully integrated SaaS solution with high speed-to-value and many features for optimizing total cost of ownership, even on-premises. Packaging a suite of versatile applications saves on labor, maintenance, support, and operational costs.",
      ],
    },
    {
      title: "Openness & Interoperability",
      paragraphs: [
        "An open, extensible, and scalable system. All data can be securely exported in industry-standard, open formats, and the logic used to integrate your data is available and usable in any environment.",
      ],
    },
  ] as Feature[],
};

/* ------------------------------ Contact form ---------------------------- */

export const contact = {
  id: "start-a-conversation",
  heading: "Get more out of your data platforms with Jicate",
  fields: [
    { name: "firstName", label: "FIRST NAME:", type: "text", required: true },
    { name: "lastName", label: "LAST NAME:", type: "text", required: true },
    { name: "email", label: "BUSINESS EMAIL:", type: "email", required: true },
    { name: "phone", label: "PHONE NUMBER:", type: "tel", required: true },
    { name: "jobTitle", label: "JOB TITLE:", type: "text", required: true },
    { name: "company", label: "COMPANY / INSTITUTION:", type: "text", required: true },
  ],
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
