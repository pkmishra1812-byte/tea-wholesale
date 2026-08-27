// src/pages/RnDPage.jsx
import { useEffect, useRef, useState } from "react";
import companyBanner from "../assets/tata-banner.jpg";
import productImg from "../assets/teafarming.png";
import teamImg from "../assets/carrers image.png";
import labImg from "../assets/invation.png";
import rndLabImg from "../assets/teafarming.png";

const capitalSlides = [
  {
    id: "partnerships",
    eyebrow: "Fueling Innovation",
    heading: "Partnerships",
    body: "We believe that collaboration is key to unlocking the full potential of our intellectual capital. By partnering with research institutions, universities, and industry experts, we gain access to specialised skills and cutting-edge technologies.",
    image: teamImg,
    alt: "ISSI team gathering",
  },
  {
    id: "innovation",
    eyebrow: "Driving Our Future",
    heading: "Innovation",
    body: "At Indian Soya & Spice Industries, we recognise that knowledge is our most valuable asset. We have established robust systems to capture, organise, and share knowledge across our organisation. Our internal communication channels, cross-functional teams, and communities of practice foster a culture of collaboration and continuous learning.",
    image: labImg,
    alt: "R&D laboratory testing",
  },
  {
    id: "robust-rnd",
    eyebrow: "A Foundation for Excellence",
    heading: "Robust R&D",
    body: "An expansive portfolio of fine foods and nutraceutical essentials stands as a testament to our unwavering pursuit of quality and innovation. Within state-of-the-art facilities, world-class instrumentation meets artisanal craftsmanship — elevating every R&D endeavour to a standard of quiet excellence.",
    image: rndLabImg,
    alt: "Modern R&D laboratory facility",
  },
];

const focusAreas = [
  {
    title: "Tea Science & Processing",
    desc: "Advanced research into oxidation control, withering dynamics, and aroma retention — unlocking the full potential of every leaf.",
    highlights: [
      "AI-driven grading and sorting systems",
      "Temperature-controlled fermentation",
      "Cold-brew and specialty extract development",
    ],
  },
  {
    title: "Packaging Innovation",
    desc: "Our packaging lab engineers sustainable materials that protect freshness while eliminating plastic waste from the supply chain.",
    highlights: [
      "Compostable, plant-based pouches",
      "Barrier technology without synthetic coatings",
      "FSC-certified paper and soy-based inks",
    ],
  },
  {
    title: "Product Formulation",
    desc: "Blending traditional botanical knowledge with modern food science to create everyday essentials families can trust.",
    highlights: [
      "Ayurvedic integration backed by clinical research",
      "Consumer-led sensory and flavour profiling",
      "Clean-label formulation standards",
    ],
  },
  {
    title: "Quality & Food Safety",
    desc: "Multi-stage testing protocols ensure every batch meets the highest global benchmarks for safety, purity, and consistency.",
    highlights: [
      "NABL-accredited in-house testing laboratory",
      "Real-time batch traceability systems",
      "ISO-certified processes with third-party audits",
    ],
  },
];

const processSteps = [
  {
    step: "01",
    title: "Discover",
    desc: "Market intelligence, consumer insights, and emerging science identify the opportunities worth pursuing.",
  },
  {
    step: "02",
    title: "Develop",
    desc: "Cross-functional teams prototype formulations, processes, and packaging in rapid iteration cycles.",
  },
  {
    step: "03",
    title: "Validate",
    desc: "Rigorous lab testing, sensory panels, and pilot production runs prove quality at scale.",
  },
  {
    step: "04",
    title: "Launch",
    desc: "Successful innovations transfer to manufacturing with full documentation, training, and quality gates.",
  },
];

function useReveal(threshold = 0.15) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          obs.disconnect();
        }
      },
      { threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return [ref, visible];
}

export default function RnDPage() {
  const [areasRef, areasVisible] = useReveal();
  const [slideIndex, setSlideIndex] = useState(0);
  const [direction, setDirection] = useState("next");

  const goToSlide = (index) => {
    if (index === slideIndex) return;
    setDirection(index > slideIndex ? "next" : "prev");
    setSlideIndex((index + capitalSlides.length) % capitalSlides.length);
  };
  const prevSlide = () => goToSlide(slideIndex - 1);
  const nextSlide = () => goToSlide(slideIndex + 1);

  useEffect(() => {
    const t = setTimeout(nextSlide, 5000);
    return () => clearTimeout(t);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [slideIndex]);

  return (
    <>
      {/* ── Banner ── */}
      <div className="w-full">
        <img
          src={companyBanner}
          alt="Research & Development"
          className="w-full h-auto object-cover max-h-[400px] lg:max-h-[500px]"
        />
      </div>

      {/* ── Intro text ── */}
      <div className="bg-white">
        <div className="max-w-screen-xl mx-auto px-6 lg:px-8 pt-12 lg:pt-16 pb-2 text-center">
          <p className="font-body text-[#0d1b4c] text-sm lg:text-base leading-relaxed max-w-3xl mx-auto tracking-wide">
            Our Research &amp; Development division is the engine behind all our products — innovating on behalf of everything we make to shape the future of everyday essentials.
          </p>
        </div>
      </div>

      {/* ── Spacing ── */}
      <div className="bg-white h-10 lg:h-16" />

      {/* ── R&D Hero ── */}
      <section className="bg-white pb-16 lg:pb-24">
        <div className="max-w-screen-xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 sm:rounded-3xl overflow-hidden bg-[#F5F5F0] shadow-xl">
            <div className="p-8 lg:p-12 xl:p-14 flex flex-col justify-center">
              <span className="font-body text-xs tracking-[0.3em] uppercase text-[#0057A0] font-bold mb-4">
                Research &amp; Development
              </span>
              <h1 className="font-display text-[#0057A0] text-3xl lg:text-4xl font-bold leading-tight">
                Where Science Meets Every Cup
              </h1>
              <p className="font-body text-charcoal/70 text-base leading-relaxed mt-5 max-w-md">
                From our labs to your home, R&amp;D touches every stage of the journey — developing breakthrough processing techniques, sustainable materials, and formulations that set new industry standards.
              </p>
            </div>
            <div className="h-64 md:h-full min-h-[280px]">
              <img
                src={productImg}
                alt="R&D laboratory work"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── Intellectual Capital slider (Partnerships / Innovation) ── */}
      <section className="bg-white py-16 lg:py-24">
        <style>{`
          @keyframes capitalSlideIn {
            from { opacity: 0; transform: translateX(var(--capital-from, 48px)); }
            to { opacity: 1; transform: translateX(0); }
          }
          .capital-anim {
            animation: capitalSlideIn 700ms cubic-bezier(0.22, 1, 0.36, 1) both;
            --capital-from: 48px;
          }
          .capital-anim.capital-prev { --capital-from: -48px; }
        `}</style>

        <div className="max-w-screen-xl mx-auto px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-14 lg:mb-20">
            <h2 className="font-display text-[#0057A0] text-3xl sm:text-4xl lg:text-[42px] font-bold leading-tight">
              Intellectual Capital
            </h2>
          </div>

          {(() => {
            const slide = capitalSlides[slideIndex];
            const isFirst = slideIndex === 0;
            const isLast = slideIndex === capitalSlides.length - 1;
            return (
              <div
                key={slide.id}
                className={`capital-anim ${direction === "prev" ? "capital-prev" : ""} grid grid-cols-1 lg:grid-cols-[45fr_55fr] gap-10 lg:gap-16 items-center`}
              >
                {/* ── Left: Image ── */}
                <div className="sm:rounded-[24px] overflow-hidden shadow-[0_24px_60px_rgba(13,27,76,0.15)] aspect-[4/3] bg-[#F5F5F0]">
                  <img
                    src={slide.image}
                    alt={slide.alt}
                    className="w-full h-full object-cover"
                    draggable={false}
                  />
                </div>

                {/* ── Right: Text ── */}
                <div className="flex flex-col items-start h-full">
                  <span className="font-body text-sm tracking-[0.25em] uppercase text-[#666] font-semibold">
                    {slide.eyebrow}
                  </span>
                  <h3 className="font-display text-[#0057A0] text-4xl sm:text-5xl xl:text-[56px] font-bold leading-tight mt-4">
                    {slide.heading}
                  </h3>
                  <p className="font-body text-[#555] text-lg xl:text-xl leading-[1.6] mt-6 max-w-xl">
                    {slide.body}
                  </p>

                  {/* ── Navigation arrows ── */}
                  <div className="mt-auto pt-10 w-full flex items-center justify-end gap-3">
                    <button
                      type="button"
                      onClick={prevSlide}
                      aria-label="Previous slide"
                      className={`w-[50px] h-[50px] rounded-full flex items-center justify-center transition-colors duration-300 shrink-0 ${
                        isFirst
                          ? "bg-[#d4d4d4] text-[#888888]"
                          : "bg-[#4a4a4a] text-white hover:bg-[#333333]"
                      }`}
                    >
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                      </svg>
                    </button>
                    <button
                      type="button"
                      onClick={nextSlide}
                      aria-label="Next slide"
                      className={`w-[50px] h-[50px] rounded-full flex items-center justify-center transition-colors duration-300 shrink-0 ${
                        isLast
                          ? "bg-[#d4d4d4] text-[#888888]"
                          : "bg-[#4a4a4a] text-white hover:bg-[#333333]"
                      }`}
                    >
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            );
          })()}

          {/* ── Slide indicators ── */}
          <div className="flex items-center justify-center gap-2 mt-10 lg:-mt-8">
            {capitalSlides.map((s, i) => (
              <button
                key={s.id}
                type="button"
                onClick={() => goToSlide(i)}
                aria-label={`Go to ${s.heading} slide`}
                className={`h-2 rounded-full transition-all duration-300 ${
                  i === slideIndex ? "w-8 bg-[#4a4a4a]" : "w-2 bg-[#d4d4d4] hover:bg-[#aaaaaa]"
                }`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ── Focus Areas ── */}
      <section ref={areasRef} className="bg-[#F5F5F0] py-16 lg:py-24">
        <div className="max-w-screen-xl mx-auto px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-14 lg:mb-20">
            <div className="inline-flex items-center gap-3 mb-6">
              <span className="w-12 h-px bg-[#0057A0]" />
              <span className="font-body text-xs tracking-[0.3em] uppercase text-[#0057A0] font-bold">
                What We Do
              </span>
              <span className="w-12 h-px bg-[#0057A0]" />
            </div>
            <h2 className="font-display text-[#0057A0] text-3xl sm:text-4xl lg:text-[42px] font-bold leading-tight mb-5">
              Our R&amp;D Focus Areas
            </h2>
            <p className="font-body text-gray-500 text-base lg:text-lg max-w-2xl mx-auto leading-relaxed">
              Four specialised centres of excellence drive innovation across our entire product portfolio.
            </p>
          </div>

          <div className={`grid grid-cols-1 md:grid-cols-2 gap-6 transition-all duration-700 delay-200 ${areasVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}`}>
            {focusAreas.map((area) => (
              <div
                key={area.title}
                className="group relative bg-white sm:rounded-2xl border border-gray-100 p-8 lg:p-10 overflow-hidden hover:shadow-[0_8px_40px_rgba(0,87,160,0.08)] transition-all duration-500"
              >
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#0057A0] via-[#2E86DE] to-[#0057A0] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <h3 className="font-display text-[#1a2942] text-xl lg:text-2xl font-bold mb-4">
                  {area.title}
                </h3>
                <p className="font-body text-gray-500 text-sm lg:text-[15px] leading-[1.85] mb-6">
                  {area.desc}
                </p>
                <div className="space-y-2.5">
                  {area.highlights.map((h, hi) => (
                    <div key={hi} className="flex items-start gap-2.5">
                      <svg className="w-4 h-4 text-[#0057A0] mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="font-body text-gray-600 text-sm leading-relaxed">{h}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Process Timeline ── */}
      <section className="bg-[#F5F5F0] py-16 lg:py-24">
        <div className="max-w-screen-xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-14 lg:mb-20">
            <div className="inline-flex items-center gap-3 mb-6">
              <span className="w-12 h-px bg-[#0057A0]" />
              <span className="font-body text-xs tracking-[0.3em] uppercase text-[#0057A0] font-bold">
                How We Work
              </span>
              <span className="w-12 h-px bg-[#0057A0]" />
            </div>
            <h2 className="font-display text-[#0057A0] text-3xl sm:text-4xl lg:text-[42px] font-bold leading-tight">
              From Idea to Shelf
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {processSteps.map((p, i) => (
              <div
                key={p.step}
                className="relative bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-500"
              >
                <span className="font-display text-[#0057A0]/20 text-5xl font-bold leading-none">
                  {p.step}
                </span>
                <h3 className="font-display text-[#1a2942] text-lg lg:text-xl font-bold mt-4 mb-3">
                  {p.title}
                </h3>
                <p className="font-body text-gray-500 text-sm leading-relaxed">
                  {p.desc}
                </p>
                {i < processSteps.length - 1 && (
                  <svg
                    className="hidden lg:block absolute top-1/2 -right-5 w-4 h-4 text-[#0057A0]/40 -translate-y-1/2 z-10"
                    fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA Section ── */}
      <section className="bg-[#F5F5F0] py-16 lg:py-20 border-t border-gray-200">
        <div className="max-w-screen-xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="font-display text-[#0057A0] text-2xl lg:text-3xl font-bold mb-4">
            An Invitation to Innovate
          </h2>
          <p className="font-body text-gray-500 max-w-xl mx-auto mb-8 text-sm lg:text-base leading-relaxed">
            From distinguished academic alliances to bespoke co-development programmes, we join hands with visionaries to bring the next generation of exceptional products to life.
          </p>
          <a
            href="/contact"
            className="inline-block bg-[#0057A0] text-white font-body font-bold text-sm px-8 py-3 sm:rounded-full hover:brightness-110 transition-all duration-300"
          >
            Get in Touch
          </a>
        </div>
      </section>
    </>
  );
}
