/**
 * Product-showcase carousel content.
 *
 * NOTE: This is placeholder content reproduced verbatim from Palantir's
 * homepage product carousel — copy, links, and imagery all point at
 * palantir.com / its Contentful CDN. Swap these out for original Jicate
 * cards before launch.
 *
 * Image normalization: Palantir serves some assets as site-relative
 * `/assets/{spaceId}/…` paths (which only resolve on palantir.com) and
 * others as absolute `https://images.ctfassets.net/{spaceId}/…` URLs — the
 * same Contentful host. We use the absolute form throughout so the images
 * load when this component runs anywhere.
 */
import type { Showcase } from "@/types";

export const showcase: Showcase = {
  ctaLabel: "See All",
  ctaHref: "https://www.palantir.com/newsroom/",
  cards: [
    {
      id: "shipos",
      tab: "ShipOS",
      earmark: "ShipOS",
      title: "Rebuilding American Sea Power",
      href: "https://www.palantir.com/shipos",
      image:
        "https://images.ctfassets.net/xrfr7uokpv1b/7M8IyM7xipV1h9mdqIUZpB/5f53ac4d162dbe9c9153b546ae92cee4/shutterstock_690389866.jpg",
      alt: "Rebuilding American Sea Power",
    },
    {
      id: "warp-speed",
      tab: "Warp Speed",
      earmark: "Warp Speed",
      title: "The Manufacturing OS for American Re-Industrialization",
      href: "https://www.palantir.com/warpspeed/",
      image:
        "https://images.ctfassets.net/xrfr7uokpv1b/44a39QNvwOiXh46KptFpLS/f1ef86734a4f276ccfae71a8d2e49027/WarpSpeed___1_.png",
      alt: "The Manufacturing OS for American Re-Industrialization",
    },
    {
      id: "systems-migration",
      tab: "Systems Migration",
      earmark: "Systems Migration",
      title: "Accelerate Enterprise Data Migration with Palantir AIP",
      href: "https://www.palantir.com/migration",
      image:
        "https://images.ctfassets.net/xrfr7uokpv1b/203IJsHEcTS4wbltpHvTgz/adc2924a67059e22ed911586f1c7626d/SAP_Migration_-_Progress_Bars_-_Homepage_4x.png",
      alt: "Systems Migration",
    },
    {
      id: "devcon-5",
      tab: "DevCon 5",
      earmark: "DevCon 5",
      title: "Building Agentic Systems that Create True Operational Advantage",
      href: "https://www.youtube.com/playlist?list=PLqTLGbLI0Cvk17YrpH5etpJ5FKCL8JdwB",
      image:
        "https://images.ctfassets.net/xrfr7uokpv1b/7ynfpsgYy44JaoaYoKqKFE/a330baecef7b1e1b3ec9186ce8c32eee/devcon5-9918__1_.jpg",
      alt: "DevCon 5",
    },
    {
      id: "aipcon-9",
      tab: "AIPCon 9",
      earmark: "AIPCon 9",
      title:
        "How Foundry and AIP Create Magic on the Front Lines: 55 Speakers Including U.S. Navy, CDAO, GE Aerospace, and more",
      href: "https://www.youtube.com/playlist?list=PLmKm_LhXXgqQaVJ2k-YffD3SRzMygbSYK",
      image:
        "https://images.ctfassets.net/xrfr7uokpv1b/7GpnCN76IYKSNcG16Rlx6/9aefb430493f84c10c152386beafe209/007-Dr.Alex_Karp-AIPCon9__1_.jpg",
      alt: "AIPCon 9",
    },
    {
      id: "interoperability",
      tab: "Interoperability",
      earmark: "Multimodal Data Plane",
      title: "Activate AI. With Any Storage. Any Compute. Any Model. Anywhere",
      href: "https://www.palantir.com/interoperability/",
      image:
        "https://images.ctfassets.net/xrfr7uokpv1b/6CYBVbXesFzbJG60ZZTUDY/faa66ed64744272efaacd405fbe54925/MMDP_cover_image.png",
      alt: "Activate AI. With Any Storage. Any Compute. Any Model. Anywhere",
    },
    {
      id: "maven",
      tab: "Maven Smart System",
      earmark: "Maven",
      title: "AI Is Transforming the Battlefield",
      href: "https://investors.palantir.com/news-details/2024/Palantir-Expands-Maven-Smart-System-AIML-Capabilities-to-Military-Services/",
      image:
        "https://images.ctfassets.net/xrfr7uokpv1b/1PRuBF9UaUgLWpoofjKwSB/99902678177197e237516971a8269992/9bbe7623ef91e79ce0e70f50877aa43f.jpeg",
      alt: "AI Is Transforming the Battlefield",
    },
    {
      id: "titan",
      tab: "TITAN",
      earmark: "TITAN",
      title: "The New ISV TITAN. Designed and Delivered in 90 Days",
      href: "https://www.palantir.com/titan/",
      image:
        "https://images.ctfassets.net/xrfr7uokpv1b/4ef256Ccq7XtmvQ9vJBr0I/09e8db66d3f321bfe0587ff27bd3d22f/image__22_.png",
      alt: "The New ISV TITAN. Designed and Delivered in 90 Days",
    },
    {
      id: "chain-reaction",
      tab: "Chain Reaction",
      earmark: "Chain Reaction",
      title: "The Operating System for American AI Infrastructure",
      href: "https://www.palantir.com/chain-reaction/",
      image:
        "https://images.ctfassets.net/xrfr7uokpv1b/3BDq1fdUIfzwqG691uZkgy/3ca97383cf78d39c8bee3545c2ecb45d/Asset_2_4x.png",
      alt: "The Operating System for American AI Infrastructure",
    },
  ],
};
