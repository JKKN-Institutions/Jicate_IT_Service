/**
 * Content for the /gotham page — a design clone of palantir.com/platforms/gotham.
 *
 * Media are REAL assets scraped from the reference into /public/gotham (per the
 * user's explicit instruction). All COPY is original, Jicate-flavoured
 * placeholder written to mirror the reference layout/length — it does NOT
 * reproduce Palantir's copyrighted marketing prose. Swap freely later.
 */

const B = "/gotham";

export const subNav = [
  { label: "Jicate Gotham", href: "#gotham-hero" },
  { label: "Defense Solutions", href: "/defense" },
  { label: "Discover by Service", href: "#capabilities" },
  { label: "Start Building", href: "#ready" },
  { label: "Join Now", href: "/contact" },
];

export const bandLabel = ["Software", "{ Gotham }", "Get Started"];
export const systemLabel = "Operating System for Global Decision Making";

export const hero = {
  wordmark: "Gotham",
  intro:
    "You are now entering Gotham — the operating system for global decision making, built for the world's most demanding missions.",
  scrollHint: "Scroll to explore",
  video: `${B}/Gotham-Hero.mp4`,
};

/* Four full-bleed video sections. `clip` reproduces the reference's skewed
   parallelogram / chevron video reveals. */
export const fullBleed = [
  {
    title: "Your software is the mission system",
    video: `${B}/Gotham-Full-Bleed-01.mp4`,
    clip: "inset(8% 20% 8% 20%)",
  },
  {
    title: "Decision advantage, from space to ground",
    video: `${B}/Gotham-Full-Bleed-02.mp4`,
    clip: "polygon(55% 0, 78% 0, 45% 100%, 22% 100%)",
  },
  {
    title: "Orchestrate operational power",
    video: `${B}/Gotham-Full-Bleed-03.mp4`,
    clip: "polygon(100% 28%, 100% 52%, 50% 72%, 0 52%, 0 28%, 50% 48%)",
  },
  {
    title: "AI-driven operational superiority",
    video: `${B}/Gotham-Full-Bleed-04.mp4`,
    clip: "polygon(24% 0, 46% 0, 76% 100%, 54% 100%)",
  },
];

export const discover = {
  lead:
    "Discover the mission-tested Jicate solutions that confront the world's most complex operational challenges.",
  links: [
    { label: "Explore", href: "#capabilities" },
    { label: "Index", href: "#capabilities" },
  ],
};

/* The 0.1 / 0.2 / 0.3 capability stepper — text left, looping card video right. */
export const capabilities = {
  steps: ["0.1", "0.2", "0.3"],
  items: [
    {
      step: "0.1",
      title: "Powering the decision chain",
      body: "Our targeting offering supports operators with an AI-assisted chain — seamless and responsive, integrating detection, identification, and effects into a single workflow.",
      link: { label: "Overview", href: "/contact" },
      video: `${B}/Gotham-Card-01.mp4`,
    },
    {
      step: "0.2",
      title: "Task sensors and effectors",
      body: "Enable the autonomous tasking of sensors and effectors, from satellites to ground assets — driven by rules or human-in-the-loop control for the most dynamic operational environments.",
      link: { label: "Overview", href: "/contact" },
      video: `${B}/Gotham-Card-02.mp4`,
    },
    {
      step: "0.3",
      title: "Ops center anywhere",
      body: "Harness the full power of the platform from operations centers to the edge, transforming any device into a fully instrumented command node with mixed-reality capabilities.",
      link: { label: "Overview", href: "/contact" },
      video: `${B}/Gotham-Card-03.mp4`,
    },
  ],
};

export const quote = {
  label: "Real People / Real Results",
  text: "Jicate came up with ground-breaking technologies that help us make better decisions in the field. They are giving us advantages right now that we need.",
  attribution: "— Name Surname, Title, Organisation",
};

export const ready = {
  heading: "Are you ready?",
  lead: "Help revolutionize technology and accelerate software's future.",
  cta: { label: "Join Now", href: "/contact" },
};
