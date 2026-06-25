import type { Metadata } from "next";

import { TiHero, NextGen, KeyFeatures, ConnectedOS, VerifiedSolution } from "@/components/titanium";

export const metadata: Metadata = {
  title: "Titanium",
  description: "Jicate's desktop client for an extensible, secure interface.",
};

export default function TitaniumPage() {
  return (
    // Dark page — matches the reference's rgb(30,33,36) background with white text.
    <main className="flex-1 bg-[#1e2124] text-white">
      <TiHero />
      <NextGen />
      <KeyFeatures />
      <ConnectedOS />
      <VerifiedSolution />
      {/* The shared site Footer renders from the root layout. */}
    </main>
  );
}
