import type { Metadata } from "next";

import {
  Hero,
  OntologySection,
  Collaboration,
  IndustriesSection,
  GlobalImpact,
  Awards,
  GetStartedForm,
} from "@/components/foundry";

export const metadata: Metadata = {
  title: "Jicate Platform",
  description: "The Ontology-Powered Operating System for the Modern Enterprise.",
};

export default function FoundryPage() {
  return (
    <main className="flex-1 bg-canvas">
      <Hero />
      <OntologySection />
      <Collaboration />
      <IndustriesSection />
      <GlobalImpact />
      <Awards />
      <GetStartedForm />
      {/* The shared site Footer renders from the root layout. */}
    </main>
  );
}
