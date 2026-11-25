import type { Metadata } from "next";

import {
  Hero,
  OntologySection,
  Collaboration,
  IndustriesSection,
  GetStartedForm,
} from "@/components/foundry";

export const metadata: Metadata = {
  title: "Jicate Platform",
  description: "The Operating System for the Modern Enterprise, Powered by the Business Data Model.",
};

export default function FoundryPage() {
  return (
    <main className="flex-1 bg-canvas">
      <Hero />
      <OntologySection />
      <Collaboration />
      <IndustriesSection />
      <GetStartedForm />
      {/* The shared site Footer renders from the root layout. */}
    </main>
  );
}
