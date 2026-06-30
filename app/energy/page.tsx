import type { Metadata } from "next";

import {
  SubNav,
  Hero,
  About,
  Partners,
  OilGas,
  Renewables,
  Carbon,
  ContactForm,
} from "@/components/energy";

export const metadata: Metadata = {
  title: "Platform for Energy",
  description: "Solve today’s most pressing challenges while building competitive advantage for tomorrow.",
};

export default function EnergyPage() {
  return (
    <main className="flex-1 bg-canvas">
      <SubNav />
      <Hero />
      <About />
      <Partners />
      <OilGas />
      <Renewables />
      <Carbon />
      <ContactForm />
      {/* The shared site Footer renders from the root layout. */}
    </main>
  );
}
