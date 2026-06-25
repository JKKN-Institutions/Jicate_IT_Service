/**
 * Content for the /metaconstellation page — a faithful DESIGN rebuild of the
 * MetaConstellation offering reference page, mapped onto this project's design
 * system. Match the layout/visuals and keep the short functional
 * headings/labels; body copy is written in Jicate's own voice. Types are local
 * so the page touches no shared files.
 *
 * Assets in /public/metaconstellation:
 *   metacon_hero1.2_.mov  (hero clip)
 *   shutterstock_277864235.jpg  (section 06 image)
 * The section-03 product clip is not shipped → poster placeholder.
 */

export interface CTA {
  label: string;
  href: string;
}

/** Sub-heading + body block within a numbered section. */
export interface Block {
  title: string;
  body: string;
}

/** Standard numbered section: index + heading + lead + two blocks. */
export interface NumberedSection {
  index: string;
  heading: string;
  lead: string;
  blocks: Block[];
  link?: CTA;
  /** When true, render a video poster placeholder under the blocks. */
  videoPlaceholder?: boolean;
}

/* --------------------------------- hero ---------------------------------- */

export const hero = {
  title: "MetaConstellation",
  subcopy: "Harness the power of satellite constellations to empower decision-makers on Earth",
  cta: { label: "Request a Demo", href: "#learn-more" } as CTA,
  video: "/metaconstellation/metacon_hero1.2_.mov",
};

/* ----------------------- 01 — Deploy AI to Orbit ------------------------- */

export const deployToOrbit = {
  index: "01",
  kicker: "Deploy AI to Orbit",
  heading: "MetaConstellation brings hundreds of satellites to bear on your most complex problems",
  bullets: [
    "Integrate with a mesh of existing satellites",
    "Optimize hundreds of orbital, terrestrial, and aircraft sensors, and AI models",
    "Enable users to ask time-sensitive questions across the entire planet",
  ],
};

/* ----------------- 02 / 04 / 05 — two-block numbered sections ------------ */

export const sections: NumberedSection[] = [
  {
    index: "02",
    heading: "Optimize Orbital Sensors",
    lead: "When a request comes in, MetaConstellation works out which sensors are available, and the constellations collaboratively schedule coverage over the area.",
    blocks: [
      {
        title: "Sensor Integration",
        body: "MetaConstellation integrates with sensor constellations, so users can request collection without the complexity of orchestrating many satellites by hand.",
      },
      {
        title: "Real-world Insights",
        body: "Users request insight, not raw data. Ask a real-world question and MetaConstellation determines the optimal mix of sensors to answer it.",
      },
    ],
  },
  {
    index: "03",
    heading: "Leverage AI Models",
    lead: "Add Edge AI to satellite sensors and Micro Models can identify objects of interest within a defined area — reconfiguring the orbiting satellite on the fly as the mission changes.",
    blocks: [
      {
        title: "Tailored Algorithms",
        body: "MetaConstellation leverages CI/CD AI model pipelines to find the best-fit algorithm for each user question, on every single collection.",
      },
      {
        title: "Insights at the Edge",
        body: "Users never start with raw sensor data — they start with algorithmic insight from that data, whether in space or time.",
      },
    ],
    link: { label: "Learn More About Edge AI", href: "/edge-ai" },
    videoPlaceholder: true,
  },
  {
    index: "04",
    heading: "Task and Track",
    lead: "Harness the MetaConstellation by identifying and integrating with existing satellites to power more insight.",
    blocks: [
      {
        title: "Integrate Satellites",
        body: "Use AI-deployed sensors to task and track satellites across wide areas. As objectives evolve, feedback is received and models are retrained.",
      },
      {
        title: "Insights Expanded",
        body: "Through tasking and tracking, MetaConstellation integrates with other satellites to collect imagery over areas of interest, measure changes over time, and trigger more focused imaging.",
      },
    ],
  },
  {
    index: "05",
    heading: "Reduce Time to Insight",
    lead: "In under a second, the models process imagery, detect and geolocate objects, and determine any movement since the last collection pass — enabling rapid decision-making.",
    blocks: [
      {
        title: "AI-enabled Sensors",
        body: "Leveraging Jicate Edge AI technology, MetaConstellation deploys algorithms closer to the sensors — on board satellites or at ground stations.",
      },
      {
        title: "AI-driven Insights",
        body: "Edge-deployed algorithms identify the most relevant subsets of the sensor data, and selectively send that data to decision-makers much more rapidly.",
      },
    ],
  },
];

/* ------------- 06 — Powering Insights Across Military Commands ----------- */

export const militaryCommands = {
  index: "06",
  heading: "Powering Insights Across Military Commands",
  image: "/metaconstellation/shutterstock_277864235.jpg",
  alt: "Satellite operations control room",
  caption:
    "Participants in a global information-dominance experiment used MetaConstellation to monitor locations across the globe for indications of competitor activity.",
  link: {
    label: "Read more about how Jicate helps deter, detect, and defeat threats",
    href: "#",
  } as CTA,
};

/* ------------------------- Learn More contact form ----------------------- */

export const contact = {
  id: "learn-more",
  heading: "Learn More About MetaConstellation",
  fields: [
    { name: "firstName", label: "FIRST NAME:", type: "text", required: true },
    { name: "lastName", label: "LAST NAME:", type: "text", required: true },
    { name: "email", label: "BUSINESS EMAIL ADDRESS:", type: "email", required: true },
    { name: "phone", label: "PHONE:", type: "tel", required: true },
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
