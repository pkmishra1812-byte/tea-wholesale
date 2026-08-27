// src/pages/OurCompanyPage.jsx
import CompanyHero from "../components/company/CompanyHero";
import AnnouncementStrip from "../components/shared/AnnouncementStrip";
import StatsBar from "../components/company/StatsBar";
import CompanyAboutSection from "../components/company/CompanyAboutSection";
import JourneyTimeline from "../components/company/JourneyTimeline";
import BusinessShowcase from "../components/company/BusinessShowcase";
import WhyChooseIssi from "../components/company/WhyChooseIssi";
import FeatureCards from "../components/company/FeatureCards";
import FinalCTA from "../components/company/FinalCTA";
import CompanyGlance from "../components/shared/CompanyGlance";

export default function OurCompanyPage() {
  return (
    <>
      <AnnouncementStrip />
      <CompanyHero />
      <StatsBar />
      <CompanyGlance />
      <CompanyAboutSection />
      <JourneyTimeline />
      <BusinessShowcase />
      <WhyChooseIssi />
      <FeatureCards />
      <FinalCTA />
    </>
  );
}
