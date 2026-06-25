/**
 * Content for the /titanium page — a faithful design rebuild of the reference
 * "Titanium" page, mapped onto this project's design system. The reference is a
 * DARK page (white text on rgb(30,33,36)). Layout/visual treatment matches the
 * reference 1:1; all body copy is ORIGINAL Jicate content written in our own
 * words (only short functional labels/headings are kept). The user edits final
 * wording.
 *
 * Types are declared locally so the page is fully self-contained.
 *
 * Local media (in /public/titanium):
 *   shutterstock_1230095911.jpg            — hero terrain image
 *   Screenshot_2024-12-04_at_2.20.22_PM.png — Key Features image
 */

/* ------------------------------ shared shapes ----------------------------- */

/** A "Key Features" entry: bold lead label + body. */
export interface Feature {
  title: string;
  body: string;
}

/** A sub-section under "A Connected Operating System". */
export interface OsBlock {
  title: string;
  leadLeft: string;
  leadRight: string;
  body: string;
}

/* --------------------------------- hero ----------------------------------- */

export const hero = {
  title: "Titanium",
  body: "Jicate's desktop client for an extensible, secure interface.",
  image: "/titanium/shutterstock_1230095911.jpg",
  alt: "Titanium terrain visualization",
};

/* -------------------------- next-generation software ---------------------- */

export const nextGen = {
  heading: "Next-Generation Software",
  body: "Meet the Titanium desktop client — one secure place to reach every platform capability. Its collaborative tooling links integrations together and brings data and apps within easy reach, so teams can make informed calls faster.",
};

/* ------------------------------ key features ------------------------------ */

export const keyFeatures = {
  heading: "Key Features",
  image: "/titanium/Screenshot_2024-12-04_at_2.20.22_PM.png",
  alt: "Titanium interface",
  features: [
    {
      title: "Next-Level Infrastructure:",
      body: "Built on Jicate's foundation, Titanium delivers tight data integrations, a robust ontology, and a secure base — raising the reliability and performance you can count on.",
    },
    {
      title: "Configurable Setup:",
      body: "Shaped to fit your needs, Titanium offers customizable layouts, fast application-wide search, and smooth cross-tab interactions.",
    },
    {
      title: "Improved Collaboration:",
      body: "Holding to Jicate's high security bar, Titanium adds superior configurability so people can collaborate across classification levels in one secure, efficient environment.",
    },
  ] satisfies Feature[],
};

/* ----------------------- a connected operating system --------------------- */

export const connectedOs = {
  heading: "A Connected Operating System",
  blocks: [
    {
      title: "Harness the Platform's Full Potential.",
      leadLeft: "Get the most speed and reach from one stable, unified workspace.",
      leadRight:
        "Titanium ties multi-application workflows together, easing the learning curve for newcomers with intuitive drag-and-drop, while offering shortcuts for power users.",
      body: "Surface new workflows and data insights through Titanium's Ontology-aware interface.",
    },
    {
      title: "Customize your workspace.",
      leadLeft:
        "Admins can shape each user group's landing experience by choosing the apps and resources they see, all behind a modern, consistent, friendly design across every medium.",
      leadRight: "Its lightweight, modern client uses familiar tab navigation and an application bar.",
      body: "Pick up exactly where you left off — Titanium remembers open tabs, window layouts, and pinned apps even on a brand-new workstation.",
    },
    {
      title: "Ensure seamless, secure collaboration.",
      leadLeft:
        "Titanium's federated access management enforces application controls across mission enclaves, geographies, and classified environments.",
      leadRight: "Keep operations running with Titanium's transparent authorization-token management.",
      body: "Built for critical settings like operations centers, Titanium lets teams iterate quickly while holding continuous situational awareness.",
    },
    {
      title: "Empower Mission Developers.",
      leadLeft: "Use Titanium's extensible framework to fold in in-house and third-party applications.",
      leadRight:
        "Bring apps together through a suite of interoperable connectors, all inside one secure UI with role- and classification-based access controls.",
      body: "Extend custom interfaces by linking workflows across apps with Jicate's public APIs for rich, structured iteration — with extra security baked in for custom apps.",
    },
  ] satisfies OsBlock[],
};

/* ----------------------------- verified solution -------------------------- */

export const verifiedSolution = {
  heading: "A Verified Solution",
  body: "Jicate's modern SaaS offerings help organizations turn vast amounts of data into insight and informed decisions at every level — rapidly deployable, commercially proven, and built for the most demanding environments.",
};
