// src/pages/HomePage.jsx
import HeroBanner        from "../components/home/HeroBanner";
import TeaCategories     from "../components/home/TeaCategories";
import BrandLogos        from "../components/home/BrandLogos";
import SustainabilityInterventions from "../components/home/SustainabilityInterventions";
import InnovationSection from "../components/home/InnovationSection";
import bgImage from "../assets/invation.png";

export default function HomePage() {
  return (
    <>
      <HeroBanner />
      <TeaCategories />
      <BrandLogos />
      <SustainabilityInterventions />
      <div
        className="w-full bg-fixed bg-center bg-cover bg-no-repeat min-h-[50vh] lg:min-h-[60vh]"
        style={{ backgroundImage: `url(${bgImage})` }}
      />
      <InnovationSection />
    </>
  );
}
