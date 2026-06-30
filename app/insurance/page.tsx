import type { Metadata } from "next";

import { Hero, Intro, Capability, Transformation, ContactForm } from "@/components/insurance";
import { underwriting, smartClaims, customerIntelligence } from "@/content/insurance";

export const metadata: Metadata = {
  title: "Insurance",
  description: "Winning with AI Automation in Insurance.",
};

export default function InsurancePage() {
  return (
    <main className="flex-1 bg-canvas">
      <Hero />
      <Intro />
      <Capability heading={underwriting.heading} features={underwriting.features} />
      <Capability heading={smartClaims.heading} features={smartClaims.features} />
      <Capability heading={customerIntelligence.heading} features={customerIntelligence.features} />
      <Transformation />
      <ContactForm />
      {/* The shared site Footer renders from the root layout. */}
    </main>
  );
}
