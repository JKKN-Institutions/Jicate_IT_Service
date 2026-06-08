/**
 * Site-wide metadata and constants.
 * Import anywhere with: import { siteConfig } from "@/config/site";
 */
export const siteConfig = {
  name: "Jicate IT Service",
  description:
    "Jicate runs, secures, and modernizes the technology your teams depend on — managed IT, cloud, cybersecurity, software development, and support.",
  url: "https://jicate.com",
  /**
   * Canonical route constants. Use these instead of hard-coding hrefs so the
   * primary CTAs ("Get Started") and secondary intent ("Contact") stay in sync.
   */
  routes: {
    home: "/",
    getStarted: "/get-started",
    contact: "/contact",
    services: "/services",
    industries: "/industries",
    caseStudies: "/case-studies",
    resources: "/resources",
    company: "/company",
  },
  /** Convenience map of the two homepage CTA destinations. */
  links: {
    getStarted: "/get-started",
    contact: "/contact",
  },
} as const;

export type SiteConfig = typeof siteConfig;
