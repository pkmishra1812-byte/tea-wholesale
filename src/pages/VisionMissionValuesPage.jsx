// src/pages/VisionMissionValuesPage.jsx
import vmbBanner from "../assets/tata-banner.jpg";
import CompanyValues from "../components/shared/CompanyValues";
import AboutSubNav from "../components/shared/AboutSubNav";

export default function VisionMissionValuesPage() {
  return (
    <>
      {/* ── Banner ── */}
      <div className="w-full">
        <img
          src={vmbBanner}
          alt="Mission, Vision and Core Values"
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

      <CompanyValues />
    </>
  );
}
