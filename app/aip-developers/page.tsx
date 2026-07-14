import type { Metadata } from "next";

import {
  SubNav,
  Hero,
  SdkSection,
  ModularStack,
  RunAnyCode,
  FocusAlpha,
  RapidDeploy,
  Closing,
} from "@/components/aip-developers";
import { SiteContactForm } from "@/components/shared/SiteContactForm";

export const metadata: Metadata = {
  title: "AIP for Developers",
  description:
    "The most powerful and flexible developer platform. Focus on alpha, not infra.",
};

export default function AipDevelopersPage() {
  return (
    <main className="flex-1 bg-near-black">
      <SubNav />
      <Hero />
      <SdkSection />
      <ModularStack />
      <RunAnyCode />
      <FocusAlpha />
      <RapidDeploy />
      <Closing />
      <SiteContactForm title="Get in touch" />
      {/* The shared site Footer renders from the root layout. */}
    </main>
  );
}
