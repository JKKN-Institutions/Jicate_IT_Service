import type { Metadata } from "next";

import { Hero, WhatWeDo, WhereWeGoing } from "@/components/about";
import { SiteContactForm } from "@/components/shared/SiteContactForm";

export const metadata: Metadata = {
  title: "About",
  description:
    "Why we're here, what we do, and where we're going — building products for human-driven analysis of real-world data.",
};

export default function AboutPage() {
  return (
    <main className="flex-1 bg-canvas">
      <Hero />
      <WhatWeDo />
      <WhereWeGoing />
      <SiteContactForm title="Get in touch" />
      {/* The shared site Footer renders from the root layout. */}
    </main>
  );
}
