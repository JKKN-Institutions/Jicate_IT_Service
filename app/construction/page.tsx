import type { Metadata } from "next";

import {
  Hero,
  IntroBand,
  Ontology,
  Capabilities,
  Impact,
  Testimonials,
  Explore,
  CtaBand,
  ContactForm,
} from "@/components/construction";

export const metadata: Metadata = {
  title: "Construction",
  description: "AI-powered automation for every construction decision — Jicate for Construction.",
};

export default function ConstructionPage() {
  return (
    // Dark page — matches the reference's rgb(30,33,36) background with white text.
    <main className="flex-1 bg-[#1e2124] text-white">
      <Hero />
      <IntroBand />
      <Ontology />
      <Capabilities />
      <Impact />
      <Testimonials />
      <Explore />
      <CtaBand />
      <ContactForm />
      {/* The shared site Footer renders from the root layout. */}
    </main>
  );
}
