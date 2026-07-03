import type { Metadata } from "next";

import { Hero, OfferingsList } from "@/components/offerings";

export const metadata: Metadata = {
  title: "Offerings",
  description:
    "Jicate platforms are used across the public, private, and non-profit sectors to solve the hardest problems.",
};

export default function OfferingsPage() {
  return (
    <main className="flex-1 bg-near-black text-offwhite">
      <Hero />
      <OfferingsList />
      {/* The shared site Footer renders from the root layout. */}
    </main>
  );
}
