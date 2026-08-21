// src/pages/OurCompanyPage.jsx
import companyBanner from "../assets/tata-banner.jpg";
import CompanyGlance from "../components/shared/CompanyGlance";
import Businesses from "../components/shared/Businesses";
import AboutSubNav from "../components/shared/AboutSubNav";

export default function OurCompanyPage() {
  return (
    <>
      {/* ── Company Banner ── */}
      <div className="w-full">
        <img
          src={companyBanner}
          alt="Indian Soya & Spice Industries"
          className="w-full h-auto object-cover max-h-[400px] lg:max-h-[500px]"
        />
      </div>

      {/* ── Intro text above tabs ── */}
      <div className="bg-white">
        <div className="max-w-screen-xl mx-auto px-6 lg:px-8 pt-12 lg:pt-16 pb-2 text-center">
          <p className="font-body text-[#0d1b4c] text-sm lg:text-base leading-relaxed max-w-3xl mx-auto tracking-wide">
            Indian Soya &amp; Spice Industries was formed with a vision to synergise, simplify, and scale everyday consumer essentials under one trusted umbrella.
          </p>
        </div>
      </div>

      {/* ── Premium spacing between text and tabs ── */}
      <div className="bg-white h-10 lg:h-16" />

      <AboutSubNav />

      <CompanyGlance />

      <Businesses />
    </>
  );
}
