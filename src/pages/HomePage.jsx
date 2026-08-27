// src/pages/HomePage.jsx
import HeroBanner        from "../components/home/HeroBanner";
import TeaCategories     from "../components/home/TeaCategories";
import BrandLogos        from "../components/home/BrandLogos";
import BusinessShowcase  from "../components/company/BusinessShowcase";
import SustainabilityInterventions from "../components/home/SustainabilityInterventions";
import InnovationSection from "../components/home/InnovationSection";
import FinalCTA          from "../components/company/FinalCTA";
import FeatureCards      from "../components/company/FeatureCards";
import bgImage from "../assets/invation.png";

export default function HomePage() {
  return (
    <>
      <HeroBanner />
      <BusinessShowcase />
      <BrandLogos />
      <TeaCategories />
      <SustainabilityInterventions />
      <div
        className="w-full bg-fixed bg-center bg-cover bg-no-repeat min-h-[50vh] lg:min-h-[60vh]"
        style={{ backgroundImage: `url(${bgImage})` }}
      />
      <InnovationSection />
      <FeatureCards />
      <FinalCTA />
    </>
  );
}
