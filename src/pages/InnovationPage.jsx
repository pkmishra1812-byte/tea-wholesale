// src/pages/InnovationPage.jsx
import companyBanner from "../assets/tata-banner.jpg";
import productImg from "../assets/teafarming.png";
import AboutSubNav from "../components/shared/AboutSubNav";

const innovationPillars = [
  {
    title: "Tea Processing Innovation",
    desc: "Our R&D labs develop next-generation processing techniques that preserve the natural aroma, flavour, and nutritional profile of every leaf — from garden to cup.",
    highlights: [
      "Temperature-controlled oxidation for consistent taste",
      "AI-driven grading systems for premium quality sorting",
      "Zero-waste processing with full by-product recovery",
    ],
  },
  {
    title: "Sustainable Packaging",
    desc: "We engineer packaging solutions that extend shelf life while eliminating environmental harm — replacing plastics with compostable, plant-based materials.",
    highlights: [
      "FSC-certified paper and plant-based ink formulations",
      "Compostable pouches replacing conventional plastics",
      "Barrier technology for freshness without synthetic coatings",
    ],
  },
  {
    title: "Product Development",
    desc: "From formulation to shelf, our product development team blends traditional knowledge with modern science to create everyday essentials that families trust.",
    highlights: [
      "Consumer-led flavour profiling and sensory testing",
      "Ayurvedic ingredient integration backed by modern research",
      "Rapid prototyping from concept to market-ready samples",
    ],
  },
  {
    title: "Quality Assurance Systems",
    desc: "Every batch passes through rigorous multi-stage quality checks — ensuring consistency, safety, and compliance across all product lines.",
    highlights: [
      "In-house NABL-accredited testing laboratory",
      "Real-time batch monitoring with traceability logs",
      "ISO-certified processes with third-party audits",
    ],
  },
];

export default function InnovationPage() {
  return (
    <>
      {/* ── Banner ── */}
      <div className="w-full">
        <img
          src={companyBanner}
          alt="Innovation at ISSI"
          className="w-full h-auto object-cover max-h-[400px] lg:max-h-[500px]"
        />
      </div>

      {/* ── Intro text ── */}
      <div className="bg-white">
        <div className="max-w-screen-xl mx-auto px-6 lg:px-8 pt-12 lg:pt-16 pb-2 text-center">
          <p className="font-body text-[#0d1b4c] text-sm lg:text-base leading-relaxed max-w-3xl mx-auto tracking-wide">
            Innovation is at the heart of everything we do — from the way we process tea leaves to the packaging that reaches your hands. We invest in cutting-edge R&D to reinvent everyday essentials without compromising quality.
          </p>
        </div>
      </div>

      {/* ── Spacing ── */}
      <div className="bg-white h-10 lg:h-16" />

      <AboutSubNav />

      {/* ── Innovation Overview ── */}
      <section className="bg-white py-16 lg:py-24">
        <div className="max-w-screen-xl mx-auto px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-16 lg:mb-20">
            <div className="inline-flex items-center gap-3 mb-6">
              <span className="w-12 h-px bg-[#0057A0]" />
              <span className="font-body text-xs tracking-[0.3em] uppercase text-[#0057A0] font-bold">
                Our R&D
              </span>
              <span className="w-12 h-px bg-[#0057A0]" />
            </div>
            <h2 className="font-display text-[#0057A0] text-3xl sm:text-4xl lg:text-[42px] font-bold leading-tight mb-5">
              Science – Transforming Our Products
            </h2>
            <p className="font-body text-gray-500 text-base lg:text-lg max-w-2xl mx-auto leading-relaxed">
              We invest in cutting-edge R&D to reinvent everyday essentials — from tea processing innovations to sustainable packaging solutions that reduce our environmental footprint without compromising quality.
            </p>
          </div>

          {/* Two-column hero */}
          <div className="grid grid-cols-1 md:grid-cols-2 sm:rounded-3xl overflow-hidden bg-[#F5F5F0] shadow-xl mb-16 lg:mb-20">
            <div className="p-8 lg:p-12 xl:p-14 flex flex-col justify-center">
              <h3 className="font-body text-[#0057A0] text-2xl lg:text-3xl font-bold leading-snug">
                Pioneering Change, Defining the Future
              </h3>
              <p className="font-body text-charcoal/70 text-base leading-relaxed mt-5 max-w-md">
                Our research and development teams work across tea processing, packaging science, product formulation, and quality systems — ensuring every product we deliver meets the highest standards of safety, taste, and sustainability.
              </p>
            </div>
            <div className="h-64 md:h-full min-h-[280px]">
              <img
                src={productImg}
                alt="Product innovation"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Innovation Pillars */}
          <div className="space-y-6">
            {innovationPillars.map((pillar, i) => (
              <div
                key={pillar.title}
                className={`group relative bg-white sm:rounded-2xl border border-gray-100 overflow-hidden hover:shadow-[0_8px_40px_rgba(0,87,160,0.08)] transition-all duration-500 ${
                  i % 2 === 1 ? "md:flex-row-reverse" : ""
                }`}
              >
                {/* Top accent bar */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#0057A0] via-[#2E86DE] to-[#0057A0] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className={`flex flex-col lg:flex-row items-stretch gap-0 ${i % 2 === 1 ? "lg:flex-row-reverse" : ""}`}>
                  {/* Number panel */}
                  <div className="flex items-center justify-center px-10 py-10 lg:py-14 lg:px-12 shrink-0 lg:w-[200px] bg-gradient-to-b from-[#0057A0]/[0.04] to-transparent">
                    <span className="font-display text-[#0057A0] text-5xl lg:text-[56px] font-bold leading-none tracking-tight opacity-20">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </div>

                  {/* Divider */}
                  <div className="hidden lg:flex items-center py-10">
                    <div className="w-px h-full bg-gradient-to-b from-transparent via-gray-200 to-transparent" />
                  </div>

                  {/* Content */}
                  <div className="flex-1 px-8 py-10 lg:px-12 lg:py-12">
                    <h3 className="font-display text-[#1a2942] text-xl lg:text-2xl font-bold mb-4">
                      {pillar.title}
                    </h3>
                    <p className="font-body text-gray-500 text-sm lg:text-[15px] leading-[1.85] mb-6 max-w-2xl">
                      {pillar.desc}
                    </p>
                    {/* Key highlights */}
                    <div className="space-y-2.5">
                      {pillar.highlights.map((h, hi) => (
                        <div key={hi} className="flex items-start gap-2.5">
                          <svg className="w-4 h-4 text-[#0057A0] mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
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

      {/* ── CTA Section ── */}
      <section className="bg-[#F5F5F0] py-16 lg:py-20">
        <div className="max-w-screen-xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="font-display text-[#0057A0] text-2xl lg:text-3xl font-bold mb-4">
            Partner With Us
          </h2>
          <p className="font-body text-gray-500 max-w-xl mx-auto mb-8 text-sm lg:text-base leading-relaxed">
            Whether you are a brand looking for private-label solutions or a retailer seeking quality products, our innovation capabilities are ready to serve your needs.
          </p>
          <a
            href="/wholesale"
            className="inline-block bg-[#0057A0] text-white font-body font-bold text-sm px-8 py-3 sm:rounded-full hover:brightness-110 transition-all duration-300"
          >
            Get in Touch
          </a>
        </div>
      </section>
    </>
  );
}
