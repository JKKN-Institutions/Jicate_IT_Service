/**
 * Content for the /secure-collaboration page — a faithful DESIGN rebuild of the
 * Palantir Defense › Secure Collaboration reference page. DARK theme (#1e2124,
 * white text). Short functional headings/labels kept; body copy in Jicate's
 * voice (placeholder text the user will swap). Palantir→Jicate. Types are local —
 * no shared files touched.
 *
 * Assets in /public/secure-collaboration: Secure-Collab-Landing-Page-1.png
 * (isometric white blocks — intro image). The hero video poster is CSS-built
 * (no poster asset shipped).
 */

export interface Field {
  name: string;
  label: string;
  type: string;
  required: boolean;
}

/* ---------------------------------- hero --------------------------------- */

export const hero = {
  title: "Secure Collaboration",
  right: "Powering a data-centric force.",
  /** Overlay chrome for the CSS-built video poster. */
  poster: {
    topLeft: "[ S | C ] → Secure Collaboration",
    brand: "◌ Jicate →",
    kicker: "Next-Generation Software",
    sub: "CONNECTING DATA, ANALYTICS AND OPERATIONS ACROSS ALL MISSION SETS",
    topRight: "01. / Overview",
    copyright:
      "© Jicate Solutions. The information in this video is proprietary and provided for informational purposes only and shall not create a warranty of any kind. Actual results and experiences may vary.",
    site: "◌ jicate.com",
    play: "Play Video",
  },
};

/* --------------------------------- intro --------------------------------- */

export const intro = {
  statement:
    "Jicate’s platforms are designed for secure information sharing in classified environments, including with allies and mission partners.",
  body: "Within the platform, US and allies can accelerate collaboration to drive joint mission execution, enhancing and securing decision-making — from creating operational plans in real-time to synchronizing key documentation across classifications and geographies.",
  image: "/secure-collaboration/Secure-Collab-Landing-Page-1.png",
  imageAlt: "Abstract white isometric building blocks",
};

/* ---------------------------- explore features --------------------------- */

export const explore = {
  heading: "Explore the Features",
  text: "See how the Jicate platform powers secure collaboration for a truly data-centric force.",
  cta: "Features",
};

/* ------------------------------- demo form ------------------------------- */

export const demo = {
  id: "request-a-demo",
  heading: "Request a Demo",
  fields: [
    { name: "firstName", label: "FIRST NAME:", type: "text", required: true },
    { name: "lastName", label: "LAST NAME:", type: "text", required: true },
    { name: "email", label: "BUSINESS EMAIL:", type: "email", required: true },
    { name: "jobTitle", label: "JOB TITLE:", type: "text", required: true },
    { name: "company", label: "COMPANY / INSTITUTION:", type: "text", required: true },
  ] as Field[],
  countryLabel: "COUNTRY:",
  submit: "Submit",
  privacyNote: "Please see our Privacy Policy regarding how we will handle this information.",
};
