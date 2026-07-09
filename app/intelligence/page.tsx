import type { Metadata } from "next";

import { Hero, ContentBlocks } from "@/components/intelligence";
import { SiteContactForm } from "@/components/shared/SiteContactForm";

export const metadata: Metadata = {
  title: "Intelligence",
  description: "Jicate helps intelligence agencies turn sensitive data into actionable insight, securely.",
};

export default function IntelligencePage() {
  return (
    // Dark page — matches the reference's rgb(30,33,36) background with white text.
    <main className="flex-1 bg-[#1e2124] text-white">
      <Hero />
      <ContentBlocks />
      <SiteContactForm title="Get in touch" />
      {/* The shared site Footer renders from the root layout. */}
    </main>
  );
}
