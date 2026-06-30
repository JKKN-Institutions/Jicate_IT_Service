import type { Metadata } from "next";

import { Hero, Ecosystem, Tailored, Benefits, Statement } from "@/components/mission-manager";

export const metadata: Metadata = {
  title: "Mission Manager",
  description: "Helping government agencies securely expedite software vendor onboarding, deployment, and management.",
};

export default function MissionManagerPage() {
  return (
    // Dark page — matches the reference's rgb(30,33,36) background with white text.
    <main className="flex-1 bg-[#1e2124] text-white">
      <Hero />
      <Ecosystem />
      <Tailored />
      <Benefits />
      <Statement />
      {/* The shared site Footer renders from the root layout. */}
    </main>
  );
}
