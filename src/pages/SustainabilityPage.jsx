// src/pages/SustainabilityPage.jsx
import { useState } from "react";
import LeadershipSpotlight from "../components/shared/LeadershipSpotlight";
import sustainBanner from "../assets/sustainbility1.png";
import bannerNew1 from "../assets/banner-new-1.png";
import bannerNew2 from "../assets/banner-new-2.png";
import bannerNew3 from "../assets/banner-new-3.png";
import banner1 from "../assets/banner-1.png";
import banner2 from "../assets/banner-2.png";

const pillars = [
  {
    icon: (
      <svg viewBox="0 0 56 56" fill="none" className="w-14 h-14">
        <rect x="1" y="1" width="54" height="54" rx="12" stroke="#7D9B6A" strokeWidth="1.5" fill="#7D9B6A" fillOpacity="0.06" />
        <path d="M28 12C24 12 20 16 20 22C20 28 24 34 28 36C32 34 36 28 36 22C36 16 32 12 28 12Z" stroke="#7D9B6A" strokeWidth="1.5" strokeLinejoin="round" />
        <path d="M28 36V44" stroke="#7D9B6A" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M24 40H32" stroke="#7D9B6A" strokeWidth="1.5" strokeLinecap="round" />
        <circle cx="28" cy="22" r="2.5" fill="#7D9B6A" fillOpacity="0.3" stroke="#7D9B6A" strokeWidth="1" />
      </svg>
    ),
    title: "Regenerative Agriculture",
    highlights: [
      "Extensive tea estates across Assam, Darjeeling & Nilgiris",
      "Natural composting, cover cropping & integrated pest management",
      "Soil organic carbon restoration across vast cultivated hectares",
    ],
    desc: "We collaborate with numerous tea estates that follow regenerative farming practices — including natural composting, cover cropping, and integrated pest management. These methods restore soil organic carbon, improve water retention, and protect biodiversity across extensive cultivated land.",
  },
  {
    icon: (
      <svg viewBox="0 0 56 56" fill="none" className="w-14 h-14">
        <rect x="1" y="1" width="54" height="54" rx="12" stroke="#7D9B6A" strokeWidth="1.5" fill="#7D9B6A" fillOpacity="0.06" />
        <path d="M18 32L24 26L28 30L38 20" stroke="#7D9B6A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M18 40H38" stroke="#7D9B6A" strokeWidth="1.5" strokeLinecap="round" />
        <circle cx="28" cy="18" r="3.5" stroke="#7D9B6A" strokeWidth="1.5" />
        <path d="M24.5 28L28 25L31.5 28" stroke="#7D9B6A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: "Ethical & Transparent Sourcing",
    highlights: [
      "Direct-from-garden sourcing — no exploitative middlemen",
      "Pre-agreed fair pricing for all producers",
      "Free agronomy training & soil-testing services",
    ],
    desc: "Our direct-from-garden sourcing model connects us with smallholder farmers and estate workers, eliminating exploitative intermediaries. Every producer receives fair, pre-agreed pricing, access to agronomy training, and free soil-testing services — ensuring a supply chain built on trust, equity, and full traceability from leaf to cup.",
  },
  {
    icon: (
      <svg viewBox="0 0 56 56" fill="none" className="w-14 h-14">
        <rect x="1" y="1" width="54" height="54" rx="12" stroke="#7D9B6A" strokeWidth="1.5" fill="#7D9B6A" fillOpacity="0.06" />
        <circle cx="28" cy="18" r="4.5" stroke="#7D9B6A" strokeWidth="1.5" />
        <path d="M18 40C18 33 22.5 28 28 28C33.5 28 38 33 38 40" stroke="#7D9B6A" strokeWidth="1.5" strokeLinecap="round" />
        <circle cx="38" cy="20" r="3" stroke="#7D9B6A" strokeWidth="1.2" />
        <circle cx="18" cy="20" r="3" stroke="#7D9B6A" strokeWidth="1.2" />
      </svg>
    ),
    title: "Community Empowerment",
    highlights: [
      "Children supported with school infrastructure",
      "Health camps reaching workers & families across regions",
      "Clean-water systems across tea garden villages",
    ],
    desc: "We reinvest in the communities that make our products possible. Through our CSR initiatives, we have funded school infrastructure for children, organized health camps reaching workers and families, and installed clean-water systems across tea garden villages in Assam, Darjeeling, and Madhubani.",
  },
  {
    icon: (
      <svg viewBox="0 0 56 56" fill="none" className="w-14 h-14">
        <rect x="1" y="1" width="54" height="54" rx="12" stroke="#7D9B6A" strokeWidth="1.5" fill="#7D9B6A" fillOpacity="0.06" />
        <path d="M22 18L28 14L34 18V23C34 29 28 35 28 35C28 35 22 29 22 23V18Z" stroke="#7D9B6A" strokeWidth="1.5" strokeLinejoin="round" />
        <path d="M25 25L28 28L33 21" stroke="#7D9B6A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M18 42H38" stroke="#7D9B6A" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
    title: "Sustainable Packaging",
    highlights: [
      "FSC-certified paper & plant-based inks",
      "Compostable pouches replacing conventional packaging",
      "Target: zero-waste packaging across all lines",
    ],
    desc: "We have eliminated single-use plastics from the majority of our product packaging, replacing them with FSC-certified paper, plant-based inks, and compostable pouches. Our remaining footprint is fully offset through verified plastic-neutral programmes. Our target is completely compostable, zero-waste packaging across all product lines.",
  },
  {
    icon: (
      <svg viewBox="0 0 56 56" fill="none" className="w-14 h-14">
        <rect x="1" y="1" width="54" height="54" rx="12" stroke="#7D9B6A" strokeWidth="1.5" fill="#7D9B6A" fillOpacity="0.06" />
        <path d="M20 38V24L28 18L36 24V38" stroke="#7D9B6A" strokeWidth="1.5" strokeLinejoin="round" />
        <path d="M24 38V28H32V38" stroke="#7D9B6A" strokeWidth="1.5" strokeLinejoin="round" />
        <path d="M16 42H40" stroke="#7D9B6A" strokeWidth="1.5" strokeLinecap="round" />
        <circle cx="28" cy="24" r="2" fill="#7D9B6A" fillOpacity="0.3" stroke="#7D9B6A" strokeWidth="1" />
      </svg>
    ),
    title: "Energy & Carbon Reduction",
    highlights: [
      "Solar-powered processing units at Madhubani facility",
      "Energy-efficient roasting & drying systems",
      "Carbon footprint monitoring across entire supply chain",
    ],
    desc: "We are transitioning our manufacturing and processing operations to renewable energy. Our Madhubani facility is being equipped with solar panels, and we have installed energy-efficient roasting and drying systems that reduce electricity consumption. We actively monitor and work to reduce our carbon footprint across the entire supply chain — from farm to warehouse to doorstep.",
  },
  {
    icon: (
      <svg viewBox="0 0 56 56" fill="none" className="w-14 h-14">
        <rect x="1" y="1" width="54" height="54" rx="12" stroke="#7D9B6A" strokeWidth="1.5" fill="#7D9B6A" fillOpacity="0.06" />
        <path d="M28 14C20 14 14 20 14 28C14 36 20 42 28 42C36 42 42 36 42 28" stroke="#7D9B6A" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M28 14V28L36 32" stroke="#7D9B6A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M18 18L20 20" stroke="#7D9B6A" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M38 18L36 20" stroke="#7D9B6A" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
    title: "Water Stewardship",
    highlights: [
      "Rainwater harvesting across tea estates",
      "Wastewater treatment at processing facilities",
      "Drip irrigation adoption for kitchen gardens",
    ],
    desc: "Water is at the heart of every tea garden and processing unit. We promote rainwater harvesting across partner estates, ensure wastewater treatment before discharge at our facilities, and encourage drip irrigation in kitchen product gardens. These efforts help conserve freshwater resources and protect local water bodies from contamination.",
  },
];

const interventionData = [
  {
    img: bannerNew1,
    heading: "Sustainable Supply Chain",
    subtitle: "Building a Resilient & Sustainable Supply Chain",
  },
  {
    img: bannerNew2,
    heading: "Brands with Purpose",
    subtitle: "Driving Change through Purpose-led Brands",
  },
  {
    img: bannerNew3,
    heading: "Talent",
    subtitle: "Creating a Workforce for Tomorrow",
  },
];

function InterventionCards() {
  return (
    <section className="pt-16 lg:pt-20 pb-12 lg:pb-14 bg-white">
      <div className="max-w-screen-xl mx-auto px-6 lg:px-8">
        <h2 className="font-display text-brand text-3xl lg:text-4xl font-bold text-center mb-3 lg:mb-4">
          Our Sustainability Interventions
        </h2>
        <p className="font-body text-tea-800 text-sm lg:text-base tracking-wide text-center mb-12 lg:mb-16">
          Rooted in Nature, Committed to future
        </p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {interventionData.map((card) => (
            <div
              key={card.heading}
              className="group bg-white sm:rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-1.5 flex flex-col"
            >
              <div className="aspect-[4/3] w-full overflow-hidden">
                <img
                  src={card.img}
                  alt={card.heading}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="flex flex-col flex-1 p-6 lg:p-8">
                <h3 className="font-display text-brand text-xl lg:text-2xl font-bold leading-tight mb-2">
                  {card.heading}
                </h3>
                <p className="font-body text-gray-500 text-sm lg:text-base mb-6">
                  {card.subtitle}
                </p>
                <div className="mt-auto">
                  <span className="inline-flex items-center gap-1.5 font-body text-sm font-bold text-brand group-hover:text-brand/80 transition-colors">
                    Know more
                    <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">→</span>
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function SustainabilityPage() {
  const [bannerIdx, setBannerIdx] = useState(0);

  const bannerSlides = [
    { src: sustainBanner, alt: "Sustainability" },
    { src: banner1, alt: "Sustainable farming" },
    { src: banner2, alt: "Eco-friendly practices" },
  ];

  const scrollBanner = (i) => {
    setBannerIdx(i);
  };

  return (
    <>
      {/* Banner carousel */}
      <div className="w-full relative">
        <div className="overflow-hidden">
          <div
            className="flex transition-transform duration-500 ease-out"
            style={{ transform: `translateX(-${bannerIdx * 100}%)` }}
          >
            {bannerSlides.map((slide, i) => (
              <div key={i} className="w-full shrink-0">
                <img
                  src={slide.src}
                  alt={slide.alt}
                  className="w-full h-auto object-cover"
                />
              </div>
            ))}
          </div>
        </div>
        {/* Mini pagination dots — bottom right */}
        <div className="absolute bottom-4 right-4 lg:bottom-6 lg:right-8 flex items-center gap-1.5">
          {bannerSlides.map((_, i) => (
            <button
              key={i}
              onClick={() => scrollBanner(i)}
              aria-label={`Go to slide ${i + 1}`}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                i === bannerIdx
                  ? "w-5 bg-white"
                  : "w-1.5 bg-white/50 hover:bg-white/80"
              }`}
            />
          ))}
        </div>

        {/* Tagline overlay — lower side of banner */}
        <div className="absolute bottom-10 lg:bottom-14 left-0 right-0 z-10 flex justify-center px-6 lg:px-8">
          <div className="bg-white backdrop-blur-sm sm:rounded-2xl lg:rounded-3xl shadow-lg px-8 py-6 lg:px-14 lg:py-7 max-w-full lg:max-w-3xl text-center">
            <p className="font-display text-brand text-xl sm:text-2xl lg:text-3xl font-bold mb-2 tracking-tight">
              {bannerSlides[bannerIdx].alt}
            </p>
            <p className="font-body text-charcoal/80 text-sm lg:text-base leading-relaxed">
              We are dedicated to ensuring that our products are produced in an economically, environmentally, and socially just manner.
            </p>
          </div>
        </div>
      </div>

      {/* ── Leadership Spotlight ── */}
      <LeadershipSpotlight />

      {/* ── Sustainability Interventions ── */}
      <InterventionCards />

      <section className="relative py-20 lg:py-28 bg-white overflow-hidden">
        {/* Subtle background pattern */}
        <div className="absolute inset-0 opacity-[0.015]" style={{ backgroundImage: "radial-gradient(circle at 1px 1px, #7D9B6A 1px, transparent 0)", backgroundSize: "40px 40px" }} />

        <div className="relative max-w-screen-xl mx-auto px-6 lg:px-8">
          {/* Premium Header */}
          <div className="text-center mb-20">
            <h2 className="font-display text-[#0057A0] text-3xl sm:text-4xl lg:text-[42px] font-bold leading-tight mb-5">
              How We Make a <span className="text-[#0057A0]">Difference</span>
            </h2>
            <p className="font-body text-gray-500 text-base lg:text-lg max-w-2xl mx-auto leading-relaxed">
              Sustainability isn't a department — it's embedded in every decision we make, from the gardens we source from to the packaging we ship in.
            </p>
          </div>

          {/* Pillar Cards */}
          <div className="space-y-6">
            {pillars.map((p, i) => (
              <div
                key={p.title}
                className="group relative bg-white sm:rounded-2xl border border-gray-100 overflow-hidden hover:shadow-[0_8px_40px_rgba(125,155,106,0.12)] transition-all duration-500"
              >
                {/* Top accent bar */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#7D9B6A] via-[#9AB87C] to-[#7D9B6A] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className={`flex flex-col lg:flex-row items-stretch gap-0 ${i % 2 === 1 ? "lg:flex-row-reverse" : ""}`}>

                  {/* Stat Panel */}
                  <div className={`flex flex-col items-center justify-center px-10 py-10 lg:py-14 lg:px-12 shrink-0 lg:w-[260px] bg-gradient-to-b from-[#7D9B6A]/[0.04] to-transparent`}>
                    <div className="mb-5">{p.icon}</div>
                  </div>

                  {/* Divider */}
                  <div className="hidden lg:flex items-center py-10">
                    <div className="w-px h-full bg-gradient-to-b from-transparent via-gray-200 to-transparent" />
                  </div>

                  {/* Content */}
                  <div className="flex-1 px-8 py-10 lg:px-12 lg:py-12">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="w-2 h-2 rounded-full bg-[#7D9B6A]" />
                      <span className="font-body text-[11px] tracking-[0.2em] uppercase text-[#7D9B6A] font-bold">
                        Pillar {String(i + 1).padStart(2, "0")}
                      </span>
                    </div>
                    <h3 className="font-display text-[#1a2942] text-xl lg:text-2xl font-bold mb-4">
                      {p.title}
                    </h3>
                    <p className="font-body text-gray-500 text-sm lg:text-[15px] leading-[1.85] mb-6 max-w-2xl">
                      {p.desc}
                    </p>
                    {/* Key highlights */}
                    <div className="space-y-2.5">
                      {p.highlights.map((h, hi) => (
                        <div key={hi} className="flex items-start gap-2.5">
                          <svg className="w-4 h-4 text-[#7D9B6A] mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                          </svg>
                          <span className="font-body text-gray-600 text-sm leading-relaxed">{h}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
