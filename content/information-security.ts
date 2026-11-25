/** Content for the /information-security page. */

const BASE = "/information-security";

export const hero = {
  title: "InfoSec at Jicate",
  lead: "At Jicate, we're passionate about solving real-world problems. Our software is trusted to protect critical operations, accelerate research, safeguard financial systems, and more.",
  image: `${BASE}/pcl-hero.jpg`,
  imageAlt: "A star-filled night sky over a desert horizon.",
  paragraphs: [
    "Given the critical work performed on our platforms, information security is our lifeblood.",
    "Our information security team works tirelessly to stay ahead of adversaries — hunting for sophisticated threats, adapting to changes in their tactics, and rapidly eradicating risk.",
  ],
};

export const objectivesIntro =
  "The Information Security Program at Jicate has three core objectives.";

export const objectives = [
  { num: "01/", text: "Make Jicate safer." },
  { num: "02/", text: "Make our customers safer." },
  { num: "03/", text: "Make the world safer." },
];

/* ---- Program (vertical-tab walkthrough) --------------------------------- */

export type Block =
  | { type: "para"; text: string }
  | { type: "subhead"; text: string }
  | { type: "list"; label: string; items: string[] };

export type ProgramTab = {
  id: string;
  label: string;
  eyebrow: string;
  blocks: Block[];
};

export const program: ProgramTab[] = [
  {
    id: "open-source-contribution",
    label: "Open Source Contribution",
    eyebrow: "01 — Open Source Contribution",
    blocks: [
      {
        type: "para",
        text: "Jicate believes a safer internet is built in the open. Our engineers contribute to and maintain open-source security tools, libraries, and research that the wider community can use and inspect.",
      },
      {
        type: "para",
        text: "We regularly release projects that harden infrastructure, improve threat detection, and make secure software development easier for everyone.",
      },
      {
        type: "para",
        text: "Explore our work on our public repositories.",
      },
    ],
  },
];

/* ---- Resources (Reporting / Careers) ------------------------------------ */

export const resources = {
  reporting: {
    heading: "Reporting Security Issues",
    body: "If you've identified a potential security flaw in our infrastructure or software, please let us know within 24 hours using GPG encryption. We'll triage the issue and get back to you within three business days.",
  },
  careers: {
    heading: "Careers",
    body: "The Information Security team is Jicate's first line of defense. We're engineers, analysts, and operators committed to making the world a safer place — and we're hiring.",
  },
};
