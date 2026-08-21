import { useState } from "react";
import { Link } from "react-router-dom";
import { businesses } from "../../data/businesses";

function Heading({ text }) {
  const parts = text.split("&");
  return (
    <>
      {parts.map((part, i) => (
        <span key={i}>
          {part}
          {i < parts.length - 1 && (
            <span className="font-accent italic font-semibold">&amp;</span>
          )}
        </span>
      ))}
    </>
  );
}

export default function Businesses() {
  const [active, setActive] = useState(businesses[0]);
  const activeBusiness = businesses.find((b) => b.id === active.id) || businesses[0];

  return (
    <section className="bg-white py-20 lg:py-28">
      <style>{`
        .scrollbar-hide::-webkit-scrollbar { display: none; }
        .scrollbar-hide { -ms-overflow-style: none; scrollbar-width: none; }
        @keyframes bizFadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .biz-fade { animation: bizFadeIn 450ms ease both; }
      `}</style>

      <div className="max-w-screen-xl mx-auto px-6 lg:px-8">
        {/* ── Heading ── */}
        <h2 className="font-display text-[#0d1b4c] text-3xl lg:text-4xl font-bold mb-8 lg:mb-10 tracking-wide text-left">
          Our Businesses
        </h2>

        {/* ── Tabs ── */}
        <div className="scrollbar-hide flex items-center gap-2 lg:gap-3 overflow-x-auto pb-2 lg:pb-0 lg:flex-wrap lg:overflow-visible mb-10 lg:mb-14">
          {businesses.map((biz) => {
            const isActive = biz.id === activeBusiness.id;
            return (
              <button
                key={biz.id}
                type="button"
                onClick={() => setActive(biz)}
                className={`shrink-0 whitespace-nowrap rounded-full px-6 py-3 font-body text-base lg:text-lg font-bold tracking-wide transition-all duration-300 ${
                  isActive
                    ? "bg-[#2952E3] text-white shadow-md shadow-[#2952E3]/30"
                    : "text-[#0d1b4c]/70 hover:text-[#2952E3] hover:underline underline-offset-4 decoration-[#2952E3]"
                }`}
              >
                {biz.label}
              </button>
            );
          })}
        </div>

        {/* ── Content Card ── */}
        <div className="relative">
          <div className="absolute hidden lg:block -right-4 -bottom-4 w-[calc(50%+16px)] h-[calc(100%+16px)] bg-[#E8EEFB] sm:rounded-[24px]" />
          <div className="relative bg-white sm:rounded-[24px] shadow-[0_24px_60px_rgba(13,27,76,0.10)] overflow-hidden">
            <div key={activeBusiness.id} className="biz-fade grid lg:grid-cols-2">
              {/* Left half — content */}
              <div className="flex flex-col p-8 md:p-12 lg:p-14 min-h-[320px]">
                <h3 className="font-display text-[#0d1b4c] text-2xl md:text-3xl font-bold mb-4 tracking-tight">
                  <Heading text={activeBusiness.heading} />
                </h3>
                <p className="font-body text-gray-500 text-sm md:text-base leading-relaxed tracking-wide">
                  {activeBusiness.paragraph}
                </p>
                <Link
                  to={activeBusiness.knowMore || `/businesses/${activeBusiness.id}`}
                  className="inline-flex items-center gap-2 text-[#2952E3] font-body font-semibold text-sm tracking-wide mt-auto pt-8 hover:text-[#1d3fc4] transition-colors"
                >
                  Know more
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>

              {/* Right half — image */}
              <div className="relative min-h-[280px] lg:min-h-[420px]">
                <img
                  src={activeBusiness.image}
                  alt={activeBusiness.heading}
                  className="absolute inset-0 w-full h-full object-cover lg:rounded-tr-[24px] lg:rounded-br-[24px]"
                />
              </div>
            </div>
          </div>
        </div>

        {/* ── Footer link ── */}
        <div className="flex justify-end mt-10 lg:mt-14">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-[#2952E3] font-body font-semibold text-sm tracking-wide hover:text-[#1d3fc4] transition-colors"
          >
            Explore our businesses
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
