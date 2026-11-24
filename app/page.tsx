import {
  Hero,
  ProductCarousel,
  StatementBand,
  OurSoftware,
  ManifestoBand,
  SplitCTA,
} from "@/components/home";

export default function Home() {
  return (
    <main className="flex-1">
      <Hero />
      <ProductCarousel />
      <StatementBand />
      <OurSoftware />
      <ManifestoBand />
      <SplitCTA />
    </main>
  );
}
