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
  tagline: "Jicate helps intelligence agencies turn sensitive data into actionable insight — securely — so they can meet their toughest operational objectives.",
  video: `${BASE}/Analysis_01.mp4`,
  alt: "Abstract intelligence-data visualization",
};

/* -------------------------------- mission --------------------------------- */

export const mission =
  "Jicate was built to help intelligence agencies make better, more responsible use of their data. Today, governments around the world rely on Jicate Gotham and Jicate Foundry to understand and defend against evolving threats to national security — from cyberattacks, to disinformation, to insurgencies.";

/* ----------------------------- content blocks ----------------------------- */

export const blocks = [
  {
    heading: "Build a Secure Data Foundation",
    body: "Intelligence agencies use Jicate to unify a fractured data landscape, integrating data of any type, size, source, or format while preserving the integrity and classification of the systems it comes from. Granular access controls govern how each user can work with data — by role, classification, or purpose — and streaming sources like live video can be brought in real time, with searches federated out to external systems. Once integrated, the platform helps refine high-volume, high-noise datasets and provides the infrastructure to deploy, train, evaluate, and improve AI and machine-learning models. By pairing human judgment with technology that makes data manageable at massive scale, analysts spend less time wrangling data and more time understanding it.",
  },
  {
    heading: "Access the Right Data at the Right Time",
    body: "The software gives agencies a single place for collaborative analysis, putting the data intelligence officers need in front of them exactly when they need it. Everyone from analysts to executives can make decisions against a knowledge base that compounds over time — nontechnical users don't have to learn specialized query languages to find and analyze data, while data-science toolkits let technical users get the most from the agency's data foundation. As proven commercial software already trusted across the intelligence community, Jicate is ready to deploy off the shelf, so agencies can bring cutting-edge technology to their most urgent problems without delay.",
  },
  {
    heading: "Protect Data and Secure Civil Liberties",
    body: "We hold that privacy and security are fundamental to a well-functioning society, and the software has been designed from the start to protect data and preserve those shared values. Sophisticated access controls and audit logging make collaboration possible without compromising security or privacy — permissions can be highly granular, including temporal and purpose-based limits, and every user action is recorded so authorized oversight bodies can confirm data is used appropriately and lawfully. These protections apply across all networks, sensitivities, and classification levels, letting agencies stand up an ICD 501-compliant environment that non-technical analysts can actually use.",
  },
  {
    heading: "Transform the Intelligence Enterprise",
    body: "With deep roots in counterterrorism, the work has grown to help governments transform their core operations and functions end to end. Agencies use Jicate to manage resources, track budgets, attract talent, and retain their people — and leaders can make data-driven decisions that let their agencies spend resources effectively, efficiently, and accountably.",
  },
] satisfies ContentBlock[];
