import type { Metadata } from "next";

import { Hero, ContentBlocks } from "@/components/intelligence";

export const metadata: Metadata = {
  title: "Intelligence",
  description: "Jicate empowers intelligence agencies to securely derive actionable insights from sensitive data.",
};

export default function IntelligencePage() {
  return (
    // Dark page — matches the reference's rgb(30,33,36) background with white text.
    <main className="flex-1 bg-[#1e2124] text-white">
      <Hero />
      <ContentBlocks />
      {/* The shared site Footer renders from the root layout. */}
    </main>
  );
}
