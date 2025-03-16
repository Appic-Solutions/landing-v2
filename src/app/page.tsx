import Customers from "@/views/home/components/customers";
import Faq from "@/views/home/components/faq";
import Features from "@/views/home/components/features";
import HeroBanner from "@/views/home/components/hero.banner";
import Roadmap from "@/views/home/components/roadmap";
import Tokenomics from "@/views/home/components/tokenomics";

export default function Home() {
  return (
    <>
      <HeroBanner />
      <Customers />
      <Features />
      <Tokenomics />
      <Roadmap />
      <Faq />
    </>
  );
}
