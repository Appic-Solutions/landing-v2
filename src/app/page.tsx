import CustomersSection from "@/components/ui/customers";
import FeaturesSection from "@/components/ui/features";
import FrequentlySection from "@/components/ui/frequently";
import HeroBanner from "@/components/ui/hero-banner";
import RoadmapSection from "@/components/ui/roadmap";
import TokenomicsSection from "@/components/ui/tokenomics";

export default function Home() {
  return (
    <>
      <HeroBanner />
      <CustomersSection />
      <FeaturesSection />
      <TokenomicsSection />
      <RoadmapSection />
      <FrequentlySection />
    </>
  );
}
