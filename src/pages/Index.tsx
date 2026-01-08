import HeroSection from "@/components/landing/HeroSection";
import StatsSection from "@/components/landing/StatsSection";
import FeaturesGrid from "@/components/landing/FeaturesGrid";
import PartnerBrands from "@/components/landing/PartnerBrands";
import DownloadCTA from "@/components/landing/DownloadCTA";

const Index = () => {
  return (
    <div className="min-h-screen bg-zomato-darker">
      <HeroSection />
      <StatsSection />
      <FeaturesGrid />
      <PartnerBrands />
      <DownloadCTA />
    </div>
  );
};

export default Index;
