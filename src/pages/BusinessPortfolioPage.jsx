import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { businesses } from "../data/businesses";
import foodsImage from "../assets/banner-new-2.png";
import personalCareImage from "../assets/bioqt-banner.png";
import babyCareImage from "../assets/kickstar-banner.png";

const portfolioItems = [
  {
    id: "foods",
    label: "Foods",
    heading: "Foods",
    paragraphs: [
      "From the first cup of the day to the spices that finish a meal, our foods portfolio brings trusted quality to every Indian kitchen.",
      "Led by brands like Next Level Tea, Shreeman Spices and Handsome X, the portfolio spans premium teas, whole and ground spices, spice blends, soya, oils and everyday kitchen staples — each crafted through rigorous quality checks before it reaches your home.",
    ],
    image: foodsImage,
    gradient: "from-orange-400 via-rose-400 to-rose-500",
  },
  {
    id: "personal-care",
    label: "Beauty & Wellbeing",
    heading: "Beauty & Wellbeing",
    paragraphs: [
      "Care that begins with gentleness and ends with confidence — our beauty and wellbeing range is designed for modern Indian homes.",
      "Our BioQt and Handsome X brands offer a complete range of bathing bars, body care, skincare and wellness essentials, developed with dermatologist-grade care and the highest standards of safety and gentleness.",
    ],
    image: personalCareImage,
    gradient: "from-pink-500 via-fuchsia-400 to-purple-600",
  },
  {
    id: "baby-care",
    label: "Baby Care",
    heading: "Baby Care",
    paragraphs: [
      "Gentleness that parents trust — our baby care range is crafted to the highest standards of safety for your little ones.",
      "Led by our Kickstar brand, the portfolio spans baby soaps, powders, washes and skincare essentials — each developed with dermatologist-grade care and rigorously tested so every bath time feels safe, soft and joyful.",
    ],
    image: babyCareImage,
    gradient: "from-teal-300 via-emerald-400 to-teal-600",
  },
];

export default function BusinessPortfolioPage() {
  const { businessId } = useParams();
  const business = businesses.find((b) => b.id === businessId);
  const [active, setActive] = useState("foods");

  const current = portfolioItems.find((item) => item.id === active) || portfolioItems[0];

  if (!business) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center px-6">
        <div className="text-center">
          <h1 className="font-display text-[#0d1b4c] text-2xl lg:text-3xl font-bold mb-4 tracking-wide">
            Business not found
          </h1>
          <Link
            to="/our-company"
            className="inline-flex items-center gap-2 text-[#2952E3] font-body font-semibold text-sm tracking-wide hover:text-[#1d3fc4] transition-colors"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
            Back to Our Businesses
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <style>{`
        .scrollbar-hide::-webkit-scrollbar { display: none; }
        .scrollbar-hide { -ms-overflow-style: none; scrollbar-width: none; }
        @keyframes portfolioFadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .portfolio-fade { animation: portfolioFadeIn 450ms ease both; }
      `}</style>

      <div className="max-w-screen-xl mx-auto px-6 lg:px-8 py-16 lg:py-24">
        {/* ── Breadcrumb / back ── */}
        <Link
          to="/our-company"
          className="inline-flex items-center gap-2 text-[#2952E3] font-body text-sm font-semibold tracking-wide mb-8 hover:text-[#1d3fc4] transition-colors"
        >
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
          </svg>
          Back to Our Businesses
        </Link>

        {/* ── Page heading ── */}
        <h1 className="font-display text-[#0d1b4c] text-3xl lg:text-4xl font-bold mb-8 lg:mb-10 tracking-wide text-left">
          {business.pageHeading ||
            (business.name === "Our Services"
              ? "Our Services"
              : `${business.name}&rsquo;s FMCG Portfolio`)}
        </h1>

        {business.id === "services" ? (
          <div className="relative">
            <div className="absolute hidden lg:block -right-4 -bottom-4 w-[calc(50%+16px)] h-[calc(100%+16px)] bg-[#E8EEFB] sm:rounded-[24px]" />
            <div className="relative bg-white sm:rounded-[24px] shadow-[0_24px_60px_rgba(13,27,76,0.10)] overflow-hidden">
              <div className="portfolio-fade grid lg:grid-cols-2">
                <div className="flex flex-col p-8 md:p-12 lg:p-14 min-h-[320px]">
                  <h2 className="font-display text-[#0d1b4c] text-2xl md:text-3xl font-bold mb-5 tracking-tight">
                    Services that go beyond products
                  </h2>
                  <p className="font-body text-gray-500 text-sm md:text-base leading-relaxed tracking-wide mb-4">
                    Beyond manufacturing, we offer end-to-end services that support every step of the value chain — from sourcing and custom blending to packaging, private labelling and dependable distribution.
                  </p>
                  <p className="font-body text-gray-500 text-sm md:text-base leading-relaxed tracking-wide mb-4">
                    Our in-house teams manage quality control, sourcing and supply so partners receive consistent, on-spec products every single time.
                  </p>
                  <p className="font-body text-gray-500 text-sm md:text-base leading-relaxed tracking-wide">
                    From concept to shelf, we partner with brands and businesses to deliver trusted, ready-to-market essentials.
                  </p>
                </div>
                <div className="relative min-h-[280px] lg:min-h-[460px]">
                  <img
                    src={business.image}
                    alt="Our Services"
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        ) : (
          <>
            {/* ── Sub-category tabs ── */}
        <div className="scrollbar-hide flex items-center gap-2 lg:gap-3 overflow-x-auto pb-2 lg:pb-0 lg:flex-wrap lg:overflow-visible mb-10 lg:mb-14">
          {portfolioItems.map((item) => {
            const isActive = item.id === current.id;
            return (
              <button
                key={item.id}
                type="button"
                onClick={() => setActive(item.id)}
                className={`shrink-0 whitespace-nowrap rounded-full px-5 py-2.5 font-body text-sm font-semibold tracking-wide transition-all duration-300 ${
                  isActive
                    ? "bg-[#2952E3] text-white shadow-md shadow-[#2952E3]/30"
                    : "text-[#0d1b4c]/70 hover:text-[#2952E3] hover:underline underline-offset-4 decoration-[#2952E3]"
                }`}
              >
                {item.label}
              </button>
            );
          })}
        </div>

        {/* ── Content card ── */}
        <div className="relative">
          <div className="absolute hidden lg:block -right-4 -bottom-4 w-[calc(50%+16px)] h-[calc(100%+16px)] bg-[#E8EEFB] sm:rounded-[24px]" />
          <div className="relative bg-white sm:rounded-[24px] shadow-[0_24px_60px_rgba(13,27,76,0.10)] overflow-hidden">
            <div key={current.id} className="portfolio-fade grid lg:grid-cols-2">
              {/* Left half — content */}
              <div className="flex flex-col p-8 md:p-12 lg:p-14 min-h-[320px]">
                <h2 className="font-display text-[#0d1b4c] text-2xl md:text-3xl font-bold mb-5 tracking-tight">
                  {current.heading}
                </h2>
                <p className="font-body text-gray-500 text-sm md:text-base leading-relaxed tracking-wide mb-4">
                  {current.paragraphs[0]}
                </p>
                <p className="font-body text-gray-500 text-sm md:text-base leading-relaxed tracking-wide">
                  {current.paragraphs[1]}
                </p>
                <Link
                  to="/our-offering"
                  className="inline-flex items-center gap-2 text-[#2952E3] font-body font-semibold text-sm tracking-wide mt-auto pt-8 hover:text-[#1d3fc4] transition-colors"
                >
                  Know more
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>

              {/* Right half — gradient + image */}
              <div className="relative min-h-[280px] lg:min-h-[460px]">
                <div className={`absolute inset-0 bg-gradient-to-br ${current.gradient}`} />
                <img
                  src={current.image}
                  alt={current.heading}
                  className="absolute inset-0 w-full h-full object-cover mix-blend-multiply opacity-90"
                />
              </div>
            </div>
          </div>
          </div>
          </>
        )}
      </div>
    </div>
  );
}
