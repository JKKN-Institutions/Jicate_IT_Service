import type { Metadata } from "next";

import { Hero, About, Partners, Impact, Industry, Products, ContactForm } from "@/components/supply-chain";

export const metadata: Metadata = {
  title: "Jicate Supply Chain Solutions",
  description: "AI-driven strategy, planning, and execution across the end-to-end value chain.",
};

export default function SupplyChainPage() {
  return (
    <main className="flex-1">
      <Hero />
      <About />
      <Partners />
      <Impact />
      <Industry />
      <Products />
      <ContactForm />
      {/* The shared site Footer renders from the root layout. */}
    </main>
  );
}
