import type { Metadata } from "next";

import {
  Hero,
  OneApproach,
  InAction,
  PlatformForAml,
  WhatSetsApart,
  ProvenSolution,
  ContactForm,
} from "@/components/anti-money-laundering";

export const metadata: Metadata = {
  title: "Anti-Money Laundering",
  description: "Fighting the Future of Financial Crime.",
};

export default function AntiMoneyLaunderingPage() {
  return (
    <main className="flex-1 bg-canvas">
      <Hero />
      <OneApproach />
      <InAction />
      <PlatformForAml />
      <WhatSetsApart />
      <ProvenSolution />
      <ContactForm />
      {/* The shared site Footer renders from the root layout. */}
    </main>
  );
}
