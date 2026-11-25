/**
 * Homepage section content for Jicate IT Service.
 *
 * All copy is ORIGINAL Jicate IT Service content, transcribed verbatim from
 * design/07-homepage-content-architecture.md:
 *   §3  announcement   ·  §5 hero       ·  §6 caseStudy
 *   §7  servicesIntro + services        ·  §8 manifesto
 *   §9  testimonials   ·  §10 splitCTA
 *
 * Import with: import { hero, services, ... } from "@/content/home";
 */
import type {
  Hero,
  ServicesIntro,
  ServiceItem,
  ServiceSlide,
  Manifesto,
  SoftwareStatement,
  SplitCTAHalf,
} from "@/types";

/* §5 — Hero -------------------------------------------------------------- */

export const hero: Hero = {
  eyebrow: "MANAGED IT · CLOUD · SECURITY",
  headline: "AI-Powered Automation for Every Decision",
  subcopy:
    "Jicate runs, secures, and modernizes the technology your teams depend on — so you can focus on the work that matters.",
  primaryCTA: {
    label: "Get Started",
    href: "/get-started",
    arrow: "cta",
  },
  secondaryLink: {
    label: "Talk to an expert",
    href: "/contact",
    arrow: "drillin",
  },
  poster: "/hero/poster.svg",
};

/* §7 — Services numbered scrolly ----------------------------------------- */

export const servicesIntro: ServicesIntro = {
  eyebrow: "WHAT WE DO",
  headline: "AI & Generative AI services, delivered end to end.",
};

/**
 * §7 — Services slider (slide format).
 *
 * Every service from the two master groups, in original order, chunked into
 * themed slides. `group` is the master heading the slide belongs to; the
 * group tabs in `ServicesSlider` are derived from these strings in order.
 */
export const serviceSlides: ServiceSlide[] = [
  {
    index: "/0.1",
    earmark: "circle",
    group: "AI & Generative AI Services",
    title: "AI Strategy & Generative AI Development",
    services: [
      "AI Strategy & Consulting",
      "Generative AI Application Development",
      "Custom AI Model Development",
      "Large Language Model (LLM) Solutions",
    ],
  },
  {
    index: "/0.2",
    earmark: "triangle",
    group: "AI & Generative AI Services",
    title: "AI Agents & Conversational AI",
    services: [
      "AI Agent Development",
      "Multi-Agent Systems",
      "AI Chatbot Development",
      "Conversational AI Platforms",
      "Voice AI Assistants",
    ],
  },
  {
    index: "/0.3",
    earmark: "circle",
    group: "AI & Generative AI Services",
    title: "Knowledge Systems & Model Operations",
    services: [
      "AI Search & Knowledge Base Systems",
      "Retrieval-Augmented Generation (RAG)",
      "Prompt Engineering",
      "AI Model Fine-Tuning",
      "AI Model Deployment & Monitoring",
    ],
  },
  {
    index: "/0.4",
    earmark: "triangle",
    group: "AI & Generative AI Services",
    title: "Applied AI & Machine Learning",
    services: [
      "Computer Vision Solutions",
      "Natural Language Processing (NLP)",
      "Predictive Analytics",
      "Recommendation Engines",
      "Sentiment Analysis",
      "OCR & Document Intelligence",
    ],
  },
  {
    index: "/0.5",
    earmark: "circle",
    group: "AI Automation Services",
    title: "Process & Workflow Automation",
    services: [
      "Business Process Automation",
      "Robotic Process Automation (RPA)",
      "AI Workflow Automation",
    ],
  },
  {
    index: "/0.6",
    earmark: "triangle",
    group: "AI Automation Services",
    title: "Business Function Automation",
    services: [
      "Customer Support Automation",
      "Email Automation",
      "HR Automation",
      "Sales Automation",
      "Marketing Automation",
      "Finance Automation",
    ],
  },
  {
    index: "/0.7",
    earmark: "circle",
    group: "AI Automation Services",
    title: "Document Intelligence & Data Extraction",
    services: [
      "Invoice Processing Automation",
      "Document Processing Automation",
      "Intelligent Data Extraction",
    ],
  },
];

export const services: ServiceItem[] = [
  {
    index: "/0.1",
    earmark: "circle",
    title: "Managed IT",
    body: "We run your day-to-day technology end to end — monitoring, patching, asset management, and a help desk your people actually like calling. One SLA, one number to call.",
    link: {
      label: "Explore Managed IT",
      href: "/services/managed-it",
      arrow: "drillin",
    },
  },
  {
    index: "/0.2",
    earmark: "triangle",
    title: "Cloud",
    body: "Plan, migrate, and operate on AWS, Azure, or Google Cloud. We right-size for cost, build for resilience, and hand you a platform you can grow on.",
    link: {
      label: "See cloud services",
      href: "/services/cloud",
      arrow: "drillin",
    },
  },
  {
    index: "/0.3",
    earmark: "circle",
    title: "Cybersecurity",
    body: "Layered defense built around your risk: managed detection and response, identity, and endpoint hardening.",
    link: {
      label: "Explore security",
      href: "/services/cybersecurity",
      arrow: "drillin",
    },
  },
  {
    index: "/0.4",
    earmark: "triangle",
    title: "Software Development",
    body: "Custom applications, integrations, and automation that retire manual work. We ship in small, tested increments and stay on for the long run.",
    link: {
      label: "See how we build",
      href: "/services/software-development",
      arrow: "drillin",
    },
  },
  {
    index: "/0.5",
    earmark: "circle",
    title: "Support",
    body: "Responsive support across email, chat, and phone — backed by clear escalation, real humans, and SLAs we publish and meet.",
    link: {
      label: "Meet the support team",
      href: "/services/support",
      arrow: "drillin",
    },
  },
];

/* §8 — Value / manifesto band -------------------------------------------- */

/**
 * §7.5 — Big software statement band (reference: the centered editorial line
 * above "Our Software"). `highlight` renders in muted grey, the rest in ink.
 */
export const softwareStatement: SoftwareStatement = {
  before: "Our software powers real-time, ",
  highlight: "AI-driven",
  after:
    " decisions.",
};

export const manifesto: Manifesto = {
  statement: "There is so much left to build",
  support:
    "Jicate teams deliver mission-critical outcomes for the world's most important institutions.",
  link: {
    label: "Reach Us",
    href: "/enquiry-form",
    arrow: "drillin",
  },
  image: "/home/onsite.jpg",
  imageAlt: "Jicate team on-site",
};

/* §10 — Split CTA -------------------------------------------------------- */

export const splitCTA: SplitCTAHalf[] = [
  {
    label: "Request a Demo",
    href: "/enquiry-form",
    tone: "light",
  },
  {
    label: "Start Building",
    href: "/enquiry-form",
    tone: "dark",
  },
];
