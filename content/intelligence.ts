/**
 * Content for the /intelligence page — a faithful DESIGN rebuild of the
 * reference "Palantir Intelligence" page, mapped onto this project's design
 * system. Layout matches the reference 1:1; the page is DARK (rgb(30,33,36)
 * background, white text). Text-only content blocks; no contact form.
 *
 * IMPORTANT: the reference's marketing prose is the source's own content — it
 * is NOT reproduced here. Body copy below is neutral PLACEHOLDER text; short
 * functional headings are kept for parity. User replaces all copy.
 *
 * Local media (in /public/intelligence):
 *   Analysis_01.mp4 — full-bleed hero video
 */

const BASE = "/intelligence";

/* ------------------------------ shared shapes ----------------------------- */

export interface ContentBlock {
  heading: string;
  body: string;
}

/* --------------------------------- hero ----------------------------------- */

export const hero = {
  title: "Intelligence",
  tagline: "Jicate empowers intelligence agencies to securely derive actionable insights from sensitive data and achieve their most challenging operational objectives.",
  video: `${BASE}/Analysis_01.mp4`,
  alt: "Abstract intelligence-data visualization",
};

/* -------------------------------- mission --------------------------------- */

export const mission =
  "Placeholder paragraph. Describe the founding mission to help intelligence agencies make better use of their data securely and responsibly, and how governments use the platform to understand and defend against evolving threats to national security — from cyberattacks, to disinformation, to insurgencies.";

/* ----------------------------- content blocks ----------------------------- */

export const blocks = [
  {
    heading: "Build a Secure Data Foundation",
    body: "Placeholder paragraph. Describe how agencies unify their fractured data landscape — integrating data of any type, size, source, or format while preserving the integrity and classification of source systems, with granular access controls that govern how users interact with data by role, classification, or purpose.",
  },
  {
    heading: "Access the Right Data at the Right Time",
    body: "Placeholder paragraph. Describe how the software lets agencies build a one-stop shop for analysts and operators to find, request, and act on the data they need — when and where they need it.",
  },
  {
    heading: "Protect Data and Secure Civil Liberties",
    body: "Placeholder paragraph. Describe the belief that privacy and security are fundamental and complementary, and how the platform's controls, auditing, and oversight protect data and safeguard civil liberties.",
  },
  {
    heading: "Transform the Intelligence Enterprise",
    body: "Placeholder paragraph. Describe how the work — with strong roots in counterterrorism — has expanded to help intelligence enterprises modernize and transform end to end.",
  },
] satisfies ContentBlock[];
