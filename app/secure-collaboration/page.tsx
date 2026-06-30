import type { Metadata } from "next";

import { Hero, Intro, ExploreFeatures, DemoForm } from "@/components/secure-collaboration";

export const metadata: Metadata = {
  title: "Secure Collaboration",
  description: "Powering a data-centric force.",
};

export default function SecureCollaborationPage() {
  return (
    <main className="flex-1 bg-[#1e2124]">
      <Hero />
      <Intro />
      <ExploreFeatures />
      <DemoForm />
      {/* The shared site Footer renders from the root layout. */}
    </main>
  );
}
