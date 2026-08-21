// src/components/shared/LeadershipSpotlight.jsx
import { useState } from "react";

const TABS = [
  {
    id: "chairman",
    label: "Chairman on Sustainability",
    heading: "Chairman on\nSustainability",
    quote:
      "Sustainability is not a choice we make — it is the only way we can responsibly do business. Our commitment to people and planet is as important as the products we put on every table.",
    name: "Dr. Arvind Malhotra",
    title: "Chairman, Indian Soya & Spice Industries",
  },
  {
    id: "strategy",
    label: "Sustainability Vision & Strategy",
    heading: "Sustainability Vision\n& Strategy",
    initials: "VS",
    paragraphs: [
      "The world today is confronted with daunting global challenges emerging from the existential climate crisis, concerns over food and nutrition security, inadequate livelihood opportunities and widening social inequity.",
      "It is our conviction that corporates have both an economic and social purpose. With their numerous touchpoints in the frontline of economic activity, businesses can contribute immensely to shaping a secure future by embedding sustainability at the core of corporate strategy.",
    ],
    detail: [
      "Our sustainability strategy is anchored on three pillars: transforming our portfolio with products that are good for people and planet, reducing our environmental footprint across the entire value chain, and enabling a circular economy through responsible sourcing and packaging.",
      "Through measurable, science-based targets in carbon neutrality, water stewardship and plastic reduction, we hold ourselves accountable to transparent progress — because the businesses that thrive tomorrow are the ones that act responsibly today.",
      "We publish our progress annually, engage our partners at every tier of the supply chain, and invest in community programmes that turn ambition into lasting, on-ground change.",
    ],
  },
];

function renderHeading(text) {
  const parts = text.split("&");
  return parts.map((part, i) => (
    <span key={i}>
      {part}
      {i < parts.length - 1 && (
        <span className="font-poppins italic font-semibold pr-1">&amp;</span>
      )}
    </span>
  ));
}

export default function LeadershipSpotlight() {
  const [activeId, setActiveId] = useState(TABS[0].id);
  const [detailOpen, setDetailOpen] = useState(false);
  const active = TABS.find((t) => t.id === activeId) || TABS[0];

  const handleTabChange = (id) => {
    setActiveId(id);
    setDetailOpen(false);
  };

  return (
    <section className="py-20 lg:py-28 bg-white overflow-hidden">
      <div className="max-w-screen-xl mx-auto px-6 lg:px-8">
        {/* ── Tab navigation (left-aligned) ── */}
        <div className="flex flex-wrap items-center gap-3 lg:gap-4 mb-10 lg:mb-14">
          {TABS.map((tab) => {
            const isActive = tab.id === activeId;
            return (
              <button
                key={tab.id}
                type="button"
                onClick={() => handleTabChange(tab.id)}
                className={`shrink-0 whitespace-nowrap rounded-full px-7 lg:px-9 py-3.5 font-body text-sm lg:text-base font-bold tracking-wide transition-all duration-300 ${
                  isActive
                    ? "bg-[#2E5EFF] text-white shadow-md shadow-[#2E5EFF]/30"
                    : "text-[#1B1F3B] hover:text-[#2E5EFF] hover:underline underline-offset-4 decoration-[#2E5EFF]"
                }`}
              >
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* ── Spotlight card ── */}
        <div className="relative bg-white sm:rounded-[28px] shadow-[0_30px_80px_rgba(27,31,59,0.10)]">
          <div className="grid lg:grid-cols-[55fr_45fr]">
            {/* Left column — text content */}
            <div className="p-8 md:p-12 lg:p-16 lg:pr-8 flex flex-col justify-center">
              <h2 className="font-display text-[#1B1F3B] text-3xl sm:text-4xl lg:text-[44px] leading-[1.15] font-bold mb-8 tracking-tight whitespace-pre-line">
                {renderHeading(active.heading)}
              </h2>
              {active.paragraphs ? (
                <>
                  <div className="space-y-4 mb-6 max-w-xl">
                    {active.paragraphs.map((p, i) => (
                      <p
                        key={i}
                        className="font-body text-[#6B7280] text-base lg:text-lg leading-relaxed"
                      >
                        {p}
                      </p>
                    ))}
                  </div>
                  <button
                    type="button"
                    onClick={() => setDetailOpen(!detailOpen)}
                    className="inline-flex items-center gap-2 font-body text-[#2E5EFF] font-semibold text-sm lg:text-base tracking-wide hover:text-[#1e3fd1] transition-colors mb-6"
                  >
                    {detailOpen ? "Know less" : "Know more"}
                    <svg
                      className={`w-4 h-4 transition-transform duration-300 ${detailOpen ? "rotate-180" : ""}`}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2.5}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  {detailOpen && (
                    <div className="space-y-4 mb-6 max-w-xl">
                      {active.detail.map((p, i) => (
                        <p
                          key={i}
                          className="font-body text-[#6B7280] text-sm lg:text-base leading-relaxed"
                        >
                          {p}
                        </p>
                      ))}
                    </div>
                  )}
                </>
              ) : (
                <blockquote className="font-accent italic text-[#6B7280] text-lg lg:text-xl leading-relaxed mb-10 max-w-xl">
                  &ldquo;{active.quote}&rdquo;
                </blockquote>
              )}
              {active.name && (
                <div>
                  <p className="font-body text-[#1B1F3B] font-semibold text-base lg:text-lg tracking-wide">
                    {active.name}
                  </p>
                  <p className="font-body text-gray-400 text-sm lg:text-base tracking-wide mt-1">
                    {active.title}
                  </p>
                </div>
              )}
            </div>

            {/* Right column — portrait */}
            <div className="px-8 pb-8 lg:p-0 lg:pr-8 lg:pb-8 lg:pt-8">
              <div className="lg:-mt-12 lg:h-[560px] h-[420px] sm:rounded-[24px] overflow-hidden shadow-[0_24px_60px_rgba(27,31,59,0.25)] relative bg-gradient-to-br from-[#2E5EFF] via-[#1e3fd1] to-[#16276e]">
                <div className="absolute inset-0 opacity-20">
                  <svg viewBox="0 0 400 560" className="w-full h-full" preserveAspectRatio="xMidYMid slice">
                    <circle cx="340" cy="90" r="150" fill="none" stroke="#ffffff" strokeWidth="1" opacity="0.5" />
                    <circle cx="340" cy="90" r="110" fill="none" stroke="#ffffff" strokeWidth="1" opacity="0.4" />
                    <path d="M60 560 Q80 380 200 380 Q320 380 340 560" fill="#ffffff" opacity="0.14" />
                  </svg>
                </div>
                <div className="absolute inset-0 flex flex-col items-center justify-center gap-6">
                  <div className="w-32 h-32 rounded-full border-2 border-white/40 flex items-center justify-center">
                    <span className="text-white/80 font-display text-4xl font-bold">
                      {active.name
                        ? active.name
                            .replace(/^Dr\.\s*/i, "")
                            .split(" ")
                            .map((n) => n[0])
                            .join("")
                        : active.initials}
                    </span>
                  </div>
                  <span className="font-body text-white/60 text-xs tracking-[0.25em] uppercase">
                    Leadership Portrait
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
