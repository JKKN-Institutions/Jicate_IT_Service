import type { Metadata } from "next";

import {
  Hero,
  Intro,
  Modules,
  HandlingPersonalData,
  ContactForm,
} from "@/components/data-protection";

export const metadata: Metadata = {
  title: "Data Protection",
  description: "A comprehensive approach to privacy and governance.",
};

export default function DataProtectionPage() {
  return (
    <main className="flex-1 bg-canvas">
      <Hero />
      <Intro />
      <Modules />
      <HandlingPersonalData />
      <ContactForm />
      {/* The shared site Footer renders from the root layout. */}
    </main>
  );
}
