import type { Metadata } from "next";

import { Hero, Intro, Capability, Transformation, ContactForm } from "@/components/life-sciences";
import {
  clinicalDevelopment,
  commercialOperations,
  researchDiscovery,
  biomanufacturing,
} from "@/content/life-sciences";

export const metadata: Metadata = {
  title: "Life Sciences",
  description: "Transforming Pharma Development with AI.",
};

export default function LifeSciencesPage() {
  return (
    <main className="flex-1 bg-canvas">
      <Hero />
      <Intro />
      <Transformation />
      <Capability heading={clinicalDevelopment.heading} features={clinicalDevelopment.features} />
      <Capability heading={commercialOperations.heading} features={commercialOperations.features} />
      <Capability heading={researchDiscovery.heading} features={researchDiscovery.features} />
      <Capability heading={biomanufacturing.heading} features={biomanufacturing.features} />
      <ContactForm />
      {/* The shared site Footer renders from the root layout. */}
    </main>
  );
}
