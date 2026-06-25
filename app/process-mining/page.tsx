import type { Metadata } from "next";

import {
  Hero,
  KeyFeatures,
  HowItWorks,
  Impact,
  ExampleLists,
  Whitepaper,
  ReferenceArchitecture,
  ContactForm,
} from "@/components/process-mining";

export const metadata: Metadata = {
  title: "Process Mining & Automation",
  description: "Mine processes. Reveal inefficiencies. Drive change. Continuously optimize.",
};

export default function ProcessMiningPage() {
  return (
    <main className="flex-1 bg-canvas">
      <Hero />
      <KeyFeatures />
      <HowItWorks />
      <Impact />
      <ExampleLists />
      <Whitepaper />
      <ReferenceArchitecture />
      <ContactForm />
      {/* The shared site Footer renders from the root layout. */}
    </main>
  );
}
