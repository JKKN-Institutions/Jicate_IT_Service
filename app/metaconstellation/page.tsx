import type { Metadata } from "next";

import {
  Hero,
  DeployToOrbit,
  NumberedSection,
  MilitaryCommands,
  ContactForm,
} from "@/components/metaconstellation";
import { sections } from "@/content/metaconstellation";

export const metadata: Metadata = {
  title: "MetaConstellation",
  description:
    "Harness the power of satellite constellations to empower decision-makers on Earth.",
};

export default function MetaConstellationPage() {
  return (
    <main className="flex-1 bg-near-black">
      <Hero />
      <DeployToOrbit />
      {sections.map((section) => (
        <NumberedSection key={section.index} data={section} />
      ))}
      <MilitaryCommands />
      <ContactForm />
      {/* The shared site Footer renders from the root layout. */}
    </main>
  );
}
