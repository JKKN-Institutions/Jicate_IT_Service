import type { Metadata } from "next";

import {
  Hero,
  Barrier,
  HowItWorks,
  WhyFedStart,
  Cmmc,
  Partners,
  BlogTiles,
  Spotlight,
  VideoFeatures,
  ContactForm,
} from "@/components/fedstart";

export const metadata: Metadata = {
  title: "FedStart",
  description: "Deliver cutting-edge solutions to the government at the speed of innovation.",
};

export default function FedStartPage() {
  return (
    <main className="flex-1 bg-canvas">
      <Hero />
      <Barrier />
      <HowItWorks />
      <WhyFedStart />
      <Cmmc />
      <Partners />
      <BlogTiles />
      <Spotlight />
      <VideoFeatures />
      <ContactForm />
      {/* The shared site Footer renders from the root layout. */}
    </main>
  );
}
