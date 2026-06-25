import type { Metadata } from "next";

import {
  SubNav,
  Hero,
  FeatureBlocks,
  Expressed,
  TwinsStages,
  Analytics,
  OpsDataScience,
  InAction,
  ContactForm,
} from "@/components/digital-twin";

export const metadata: Metadata = {
  title: "Digital Twin",
  description:
    "Power next-generation operations with semantic data, AI/ML-based twins, and twin-based simulations.",
};

export default function DigitalTwinPage() {
  return (
    <main className="flex-1 bg-canvas">
      <SubNav />
      <Hero />
      <FeatureBlocks />
      <Expressed />
      <TwinsStages />
      <Analytics />
      <OpsDataScience />
      <InAction />
      <ContactForm />
      {/* The shared site Footer renders from the root layout. */}
    </main>
  );
}
