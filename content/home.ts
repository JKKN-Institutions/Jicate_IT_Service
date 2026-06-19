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
  Announcement,
  Hero,
  CaseStudy,
  ServicesIntro,
  ServiceItem,
  ServiceSlide,
  Manifesto,
  Testimonial,
  SplitCTAHalf,
} from "@/types";

/* §3 — Announcement bar -------------------------------------------------- */

export const announcement: Announcement = {
  message:
    "Jicate is now SOC 2 Type II certified — see what it means for your data.",
  link: {
    label: "Read the report",
    href: "/resources/soc-2-report",
    arrow: "external",
    external: true,
  },
  dismissLabel: "Dismiss announcement",
  storageKey: "jicate.announcement.v1",
};

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

/* §6 — Featured case-study band ------------------------------------------ */

export const caseStudy: CaseStudy = {
  eyebrow: "CASE STUDY · HEALTHCARE",
  headline: "A regional clinic network cut unplanned downtime by 40%",
  caption:
    "Jicate consolidated three help desks into one managed service, hardened the network, and moved records to a compliant cloud — without a single missed appointment.",
  metrics: [
    { value: "40%", label: "LESS DOWNTIME" },
    { value: "< 8 min", label: "AVG. RESPONSE" },
  ],
  link: {
    label: "Read the case study",
    href: "/case-studies/clinic-network-downtime",
    arrow: "drillin",
  },
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
    body: "Layered defense built around your risk: managed detection and response, identity, endpoint hardening, and audit-ready compliance for SOC 2, HIPAA, and ISO 27001.",
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

export const manifesto: Manifesto = {
  statement: "There is so much left to build",
  support:
    "Palantirians deliver mission-critical outcomes for the West's most important institutions.",
  link: {
    label: "Learn More",
    href: "/careers",
    arrow: "drillin",
  },
};

/* §9 — Testimonials ------------------------------------------------------ */

export const testimonials: Testimonial[] = [
  {
    quote:
      "Now, we've not only fixed our inventory problem, we've now taken a problem that would go on for weeks and days and fixed it in five minutes, making our people incredibly efficient.",
    clientName: "WENDY'S QUALITY SUPPLY CHAIN CO-OP",
    role: "Pete Suerken · President & CEO",
  },
  {
    quote:
      "We started with the goal of piloting 10 stores within about six months. However, leveraging Foundry and AIP, we began to see real promise quickly in composing AI-powered, end-to-end workflows that allowed us to get to about 4000 stores within eight months.",
    clientName: "WALGREENS",
    role: "Jeff Hoffman · VP, Product Pharmacy",
  },
  {
    quote:
      "S.C.O.U.T began as a joint effort between AT&T and Palantir, and now has over 100 AT&T dedicated engineers and a dedicated support team for this application. It's just one of the 660 applications we have on Foundry today.",
    clientName: "AT&T",
    role: "Dan Wagner · Dir. of Technology",
  },
  {
    quote:
      "We estimate that this solution reduces our time to submission materials by over 50% — from the current 10-to-12-week average to around 3 to 4 weeks — and cuts in half the time required to get there.",
    clientName: "PAREXEL",
    role: "Dan Ballard · SVP Digital Innovation",
  },
  {
    quote:
      "We had a great chassis of the car, but our engine was underpowered. So we went to Palantir because we want the best engine out there. In three months, the teams built what took us three years before.",
    clientName: "HEINEKEN",
    role: "Laurens van de Rotte · COO, Heineken USA",
  },
];

/* §10 — Split CTA -------------------------------------------------------- */

export const splitCTA: SplitCTAHalf[] = [
  {
    label: "Request a Demo",
    href: "/contact/demo",
    tone: "light",
  },
  {
    label: "Start Building",
    href: "/get-started",
    tone: "dark",
  },
];
