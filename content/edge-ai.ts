/**
 * Content for the /edge-ai page — a faithful DESIGN rebuild of the Edge AI
 * offering reference page, mapped onto this project's design system.
 *
 * Approach (same as the other clone pages): match the layout/visuals and keep
 * the short functional headings/labels, but the body copy is written in
 * Jicate's own voice. Types are local so the page touches no shared files.
 *
 * Assets in /public/edge-ai: Energy.jpg (only asset shipped). Everything else
 * (hero video + poster) renders as a labelled placeholder until supplied.
 */

export interface CTA {
  label: string;
  href: string;
}

/** Title + lead + body capability block. */
export interface CapabilityBlock {
  title: string;
  lead: string;
  body: string;
}

/** Uppercase-eyebrow use case (label + body). */
export interface UseCase {
  label: string;
  body: string;
}

/* -------------------------------- sub-nav -------------------------------- */

export const subNav = {
  brand: { label: "Foundry", href: "#" } as CTA,
  links: [
    { label: "About the Ontology", href: "#" },
    { label: "Industries", href: "#" },
    { label: "Capabilities", href: "#" },
    { label: "Learn Foundry", href: "#" },
  ] as CTA[],
  cta: { label: "Start Building Now", href: "#" } as CTA,
};

/* --------------------------------- hero ---------------------------------- */

export const hero = {
  title: "Jicate Edge AI",
  subcopy: "Unparalleled technology. Pushed to the edge.",
  cta: { label: "Get the Technical Whitepaper", href: "#whitepaper" } as CTA,
  // No hero clip shipped — render a play-button poster placeholder.
  posterLabel: "Edge AI",
  watch:
    "Watch: Meet Jicate Edge AI — a generational shift in artificial intelligence. Jicate Edge AI modernizes your fleet of sensors across environments, so you can train, manage, and deploy AI models anywhere your sensors run.",
};

/* ----------------------- 01 — A Generational Shift ----------------------- */

export const generationalShift = {
  index: "01",
  heading: "A Generational Shift in AI",
  image: "/edge-ai/Energy.jpg",
  alt: "Edge AI in the field",
  lead: "Meet Jicate Edge AI. Featuring Micro Models. Sensor fusion. Continuous delivery. Autonomous decision-making. Anywhere deployment.",
  paragraphs: [
    "For operators, Jicate Edge AI modernizes your fleet of sensors. For sensor manufacturers, it lets your customers train, manage, and deploy AI models anywhere your sensors run.",
    "From efficiently detecting on-land risks from space to predictive maintenance at the edge, this is AI in action.",
  ],
};

/* ---------------- 02 — Achieve operating superiority --------------------- */

export const operatingSuperiority = {
  index: "02",
  heading:
    "Achieve operating superiority with autonomous decision-making across edge devices and environments",
  subcopy:
    "Extremely lightweight and power-efficient to deploy, the Jicate Sensor Inference Platform (SIP) embeds models on drones, aircraft, ships, robots, buildings, satellites — and more.",
  blocks: [
    {
      title: "AI-driven Decision-making",
      lead: "Jicate Edge AI is our AI orchestration and sensor-fusion engine that runs on disconnected, remote endpoints.",
      body: "It enables autonomous decision-making for on-hardware models consuming real-time sensor, radio, acoustic, geo-registration, and time-series data. The platform operates in low-bandwidth, low-power conditions, bringing AI to all of your IoT devices — from drones to wind turbines to manufacturing robots.",
    },
    {
      title: "Model Chaining Across Environments & Devices",
      lead: "A new technology — Micro Models — lets you chain algorithms together across devices and environments, so your models in space can connect to your models on land or underwater.",
      body: "Micro Models are modular, operation-specific models designed around a measurable objective. They can include homegrown, open-source, or third-party algorithms. Jicate provides end-to-end infrastructure for the AI/ML lifecycle, with versioning, branching, reproducibility, and lineage for every model.",
    },
    {
      title: "Continuous Integration + Continuous Delivery",
      lead: "Jicate Edge AI provides continuous integration / continuous delivery (CI/CD) of your models.",
      body: "The AI Inference Platform mediates interactions between Jicate AI/ML infrastructure and heterogeneous edge environments. Decisions and metadata from edge-deployed models flow back into the core platform, accelerating retraining and continuous delivery of models across endpoints.",
    },
    {
      title: "Open Model Platform for Sensor Manufacturers",
      lead: "For sensor manufacturers, Jicate Edge AI provides a platform to embed AI/ML alongside your sensors.",
      body: "The system enables your customers to train, manage, and deploy proprietary or third-party algorithms anywhere on the edge. From the factory floor to the exosphere.",
    },
  ] as CapabilityBlock[],
};

/* ------------- 03 — Designed for speed and efficiency -------------------- */

export const useCasesSection = {
  index: "03",
  heading: "Designed for situations where speed and efficiency matter",
  items: [
    {
      label: "MANUFACTURING QUALITY CONTROL",
      body: "Embed Jicate Edge AI on sensors and cameras in manufacturing plants — and on machines in processing factories — to increase efficiency and improve quality control. As sensors examine components on a production line, deployed models identify defective products and separate them for inspection or repair.",
    },
    {
      label: "ROBOTIC MOTION PLANNING",
      body: "Automated production systems can use Jicate Edge AI with robot sensors and cameras to increase autonomy and accuracy. Robot sensors monitor the environment and actuator positions, while deployed algorithms detect objects and command actuator actions to manipulate and place them in the right locations.",
    },
    {
      label: "REMOTE SENSING & CUEING",
      body: "With Jicate Edge AI onboard spacecraft, sophisticated models can be rapidly integrated and swapped as objectives evolve and models are retrained. Satellites collect imagery over areas of interest, and deployed models detect entities or areas — vehicles, ships, forests — and measure their changes over time, triggering more focused imaging.",
    },
    {
      label: "PREDICTIVE MAINTENANCE",
      body: "Organizations with equipment in low-bandwidth environments — mines, farms, factories, airspace — can take a preemptive approach to part replacement and repair, reducing downtime and maintenance costs. Sensors collect data on subsystems, and deployed models monitor for predictors of failure and queue them for maintenance.",
    },
    {
      label: "FIND, FIX, & TRACK",
      body: "Jicate Edge AI deploys at the tactical edge in low-bandwidth or disconnected environments to support cameras and other sensors scanning wide areas. Computer-vision models search for key objects; when an entity of interest is found, the camera tracks it. The platform generates metadata-only streams to reduce bandwidth while still providing actionable insight.",
    },
    {
      label: "AUTONOMOUS NAVIGATION",
      body: "For autonomous vehicles, algorithms deployed on vehicle sensors with Jicate Edge AI detect potential obstacles in the path of the moving vehicle and command the control system to avoid or mitigate collision.",
    },
    {
      label: "DRUG COMPOUND SCREENING",
      body: "Healthcare institutions can accelerate research by leveraging Jicate Edge AI within their labs. Models quantify images and surface promising compounds, expediting subsequent experiment generation and analysis.",
    },
    {
      label: "ENERGY MANAGEMENT",
      body: "Organizations seeking to manage energy consumption and reduce production costs can deploy Jicate Edge AI on sensors, letting models analyze power utilization across systems and initiate actions to reduce activity and improve efficiency.",
    },
  ] as UseCase[],
};

/* ----------------------- Download the Whitepaper form -------------------- */

export const whitepaper = {
  id: "whitepaper",
  heading: "Download the Whitepaper",
  fields: [
    { name: "firstName", label: "FIRST NAME:", type: "text", required: true },
    { name: "lastName", label: "LAST NAME:", type: "text", required: true },
    { name: "email", label: "BUSINESS EMAIL:", type: "email", required: true },
    { name: "phone", label: "PHONE NUMBER:", type: "tel", required: false },
    { name: "jobTitle", label: "JOB TITLE:", type: "text", required: true },
    { name: "company", label: "COMPANY / INSTITUTION:", type: "text", required: true },
  ],
  countryLabel: "COUNTRY:",
  optIns: [
    "OPT-IN TO RECEIVE JICATE PRODUCT UPDATES:",
    "OPT-IN TO PERSONALIZED SALES OUTREACH:",
    "OPT-IN TO RECEIVE INVITES TO FUTURE EVENTS:",
    "OPT-IN TO RECEIVE EDUCATIONAL RESOURCES:",
  ],
  submit: "Submit",
  privacyNote: "Please see our Privacy Policy regarding how we will handle this information.",
};
