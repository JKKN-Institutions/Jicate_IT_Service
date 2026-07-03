import type { Metadata } from "next";

import { SubNav, Hero, StatementBand, PowerAutonomous, FeatureSection } from "@/components/ontology";
import { model, orchestrate, toolchain } from "@/content/ontology";

export const metadata: Metadata = {
  title: "Ontology",
  description: "The central system for orchestrating decisions across Human+AI teams.",
};

export default function OntologyPage() {
  return (
    <main className="flex-1 bg-canvas">
      <SubNav />
      <Hero />
      <StatementBand />
      <PowerAutonomous />
      <FeatureSection
        id="language"
        heading={model.heading}
        accent={model.accent}
        layers={model.layers}
        aspect={model.aspect}
        features={model.features}
        cols={2}
        ariaLabel="Model the components of Human+AI decisions"
      />
      <FeatureSection
        id="engine"
        heading={orchestrate.heading}
        accent={orchestrate.accent}
        layers={orchestrate.layers}
        aspect={orchestrate.aspect}
        features={orchestrate.features}
        cols={3}
        ariaLabel="Orchestrate complex operations at enterprise scale"
      />
      <FeatureSection
        id="toolchain"
        heading={toolchain.heading}
        accent={toolchain.accent}
        layers={toolchain.layers}
        aspect={toolchain.aspect}
        features={toolchain.features}
        cols={2}
        ariaLabel="Empower developers and agents to treat the Ontology as a backend"
      />
      {/* The shared site Footer renders from the root layout. */}
    </main>
  );
}
