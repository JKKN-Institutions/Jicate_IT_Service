/**
 * Content for the /information-security page — a design clone of
 * palantir.com/information-security. LIGHT theme, brand swapped to Jicate.
 * Marketing prose is genericised PLACEHOLDER (user will swap); the compliance
 * framework NAMES are industry standards kept as illustrative placeholders.
 */

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
    id: "compliance-and-accreditation",
    label: "Compliance and Accreditation",
    eyebrow: "01 — Compliance and Accreditation",
    blocks: [
      {
        type: "para",
        text: "Our customers rely on Jicate to power their most critical work, and we're dedicated to building platforms they can trust. Our cloud offerings are managed, standardized, tested, and externally audited, with robust access controls that scale to meet customer demand.",
      },
      {
        type: "para",
        text: "Jicate is an active member of leading vendor-security alliances and partners with respected red-team and security-research organizations.",
      },
      {
        type: "para",
        text: "For more information on compliance, accreditation, and trust, please visit our Trust Portal.",
      },
      { type: "subhead", text: "Compliance Overview" },
      {
        type: "para",
        text: "Our cloud platform's infrastructure, applications, and operations have been developed to comply and align with some of the most rigorous legal and regulatory requirements in industries today, including:",
      },
      {
        type: "list",
        label: "SSAE 18/ISAE 3000 Service Organization Control (SOC):",
        items: ["SOC 1, Type 2", "SOC 2, Type 2 (Security, Confidentiality, and Availability)", "SOC 3"],
      },
      {
        type: "list",
        label: "International Organization for Standardization (ISO), including but not limited to:",
        items: ["ISO 27001", "ISO 27017", "ISO 27018", "ISO 9001"],
      },
      {
        type: "list",
        label: "NIST 800-53 and NIST 800-171, including control sets for the following baselines:",
        items: ["FedRAMP High", "FISMA High", "Impact Level 2 DoD SRG", "Impact Level 5 DoD SRG", "Impact Level 6 DoD SRG", "CMMC"],
      },
      {
        type: "list",
        label: "And others, including:",
        items: [
          "Cyber Essentials Plus",
          "NCSC Cloud Security Principles",
          "NHS Digital Data Security and Protection Toolkit",
          "GDPR",
          "Web Content Accessibility Guidelines (WCAG) 2.2, Section 508 and EN 301 549",
          "Esquema Nacional de Seguridad (ENS)",
          "Trusted Information Security Assessment Exchange (TISAX)",
        ],
      },
      {
        type: "para",
        text: "Additionally, Jicate has extensive experience helping our customers meet specific regulatory and industry requirements. Our software provides functionality that customers can configure and operate to meet requirements such as those arising from:",
      },
      {
        type: "list",
        label: "",
        items: ["SOC 1 / ISAE 3402", "GxP", "CCPA", "CJIS", "HIPAA", "ITAR"],
      },
      {
        type: "para",
        text: "For more information on compliance, accreditation reports, and trust, please visit our Trust Portal.",
      },
    ],
  },
  {
    id: "open-source-contribution",
    label: "Open Source Contribution",
    eyebrow: "02 — Open Source Contribution",
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
  {
    id: "penetration-testing",
    label: "Penetration Testing",
    eyebrow: "03 — Penetration Testing",
    blocks: [
      {
        type: "para",
        text: "Our platforms are continuously tested by internal red teams and independent third-party assessors. We treat every finding as an opportunity to improve.",
      },
      {
        type: "para",
        text: "We run a responsible-disclosure and bug-bounty program that invites security researchers to test our systems and report issues directly to our team.",
      },
      {
        type: "para",
        text: "Testing is performed against production-grade environments so that results reflect real-world conditions.",
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
