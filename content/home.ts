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
  headline: "Five disciplines, one accountable team.",
};

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
  statement:
    "We treat your systems the way good engineers treat their own: documented, monitored, and built to fail quietly.",
  support:
    "No mystery boxes, no lock-in, no surprise invoices. You own your stack — we make sure it keeps its promises.",
  link: {
    label: "How we work",
    href: "/company/approach",
    arrow: "drillin",
  },
};

/* §9 — Testimonials ------------------------------------------------------ */

export const testimonials: Testimonial[] = [
  {
    quote:
      "Our team stopped thinking about IT — which is the highest compliment I can give a managed provider.",
    clientName: "NORTHWIND LOGISTICS",
    role: "VP, Operations",
  },
  {
    quote:
      "The cloud migration was the first big project in years that finished on time and under budget.",
    clientName: "MERIDIAN FINANCE",
    role: "CTO",
  },
  {
    quote:
      "After the security overhaul we passed our audit on the first pass. Jicate had the evidence ready before we asked.",
    clientName: "CEDARLINE HEALTH",
    role: "Compliance Director",
  },
  {
    quote:
      "When something breaks at 2 a.m., a real person answers and it gets fixed. That's the whole pitch, and they deliver it.",
    clientName: "ATLAS MANUFACTURING",
    role: "IT Manager",
  },
];

/* §10 — Split CTA -------------------------------------------------------- */

export const splitCTA: SplitCTAHalf[] = [
  {
    label: "Talk to an Expert",
    sublabel: "A 30-minute call, no sales script.",
    href: "/contact",
    tone: "light",
  },
  {
    label: "Get Started",
    sublabel: "Tell us what's slowing you down.",
    href: "/get-started",
    tone: "dark",
  },
];
