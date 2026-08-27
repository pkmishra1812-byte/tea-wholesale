// src/components/company/CompanyAboutSection.jsx
import { Link } from "react-router-dom";
import Reveal from "./Reveal";
import tataBanner from "../../assets/tata-banner.jpg";

const FEATURES = [
  {
    title: "Uncompromising Quality",
    desc: "Every product is crafted, tested and perfected before it earns a place in your home.",
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 3l7 3v5c0 4.6-3 8.4-7 10-4-1.6-7-5.4-7-10V6l7-3zm-2.2 9l1.8 1.8 3.4-3.6" />
    ),
  },
  {
    title: "Rooted in India",
    desc: "Born from a deep understanding of Indian traditions, homes and hearts.",
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 21v-8m0 0c0-3-2-5-5-5 0 3 2 5 5 5zm0 0c0-3 2-5 5-5 0 3-2 5-5 5zM4 21h16" />
    ),
  },
  {
    title: "Designed for Tomorrow",
    desc: "Guided by innovation, sustainability and a promise of responsible growth.",
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" d="M17 21v-2a4 4 0 0 0-4-4H7a4 4 0 0 0-4 4v2m7-10a4 4 0 1 0 0-8 4 4 0 0 0 0 8zm10 10v-2a4 4 0 0 0-3-3.87M16 3.13A4 4 0 0 1 16 11" />
    ),
  },
];

export default function CompanyAboutSection() {
  return (
    <section className="bg-white py-5 lg:py-8 overflow-hidden">
      <div className="max-w-screen-xl mx-auto px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        {/* LEFT — goggle-glass pill photo frame */}
        <Reveal x={-70} y={0}>
          <div className="hero-frame">
            <img
              src={tataBanner}
              alt="ISSI everyday essentials presented with care"
            />
          </div>
        </Reveal>

        <style>{`
          .hero-frame {
            width: 100%;
            max-width: 600px;
            aspect-ratio: 16 / 9;
            border-radius: 999px;
            position: relative;
            background: #1a1a1a;
          }

          .hero-frame::before {
            content: '';
            position: absolute;
            inset: -3px;
            border-radius: inherit;
            padding: 3px;
            background: linear-gradient(135deg, #FFD700 0%, transparent 40%, #1E90FF 100%);
            -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
            -webkit-mask-composite: xor;
            mask-composite: exclude;
          }

          .hero-frame img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            border-radius: inherit;
          }
        `}</style>

        {/* RIGHT — copy */}
        <div>
          <Reveal delay={100}>
            <h2 className="font-display text-[#001F3F] text-3xl lg:text-[44px] font-bold leading-tight">
              A legacy of quality, woven into every Indian home.
            </h2>
            <p className="mt-5 font-body text-[#687386] text-base lg:text-lg leading-relaxed max-w-xl">
              From the finest spices to everyday care, Indian Soya &amp; Spice
              Industries brings together products that touch every moment of
              your day — each one held to a single standard: excellence without
              compromise.
            </p>
          </Reveal>

          <div className="mt-9 space-y-6">
            {FEATURES.map((f, i) => (
              <Reveal key={f.title} x={60} y={0} delay={220 + i * 140}>
                <div className="flex items-start gap-5 group">
                  <span className="shrink-0 w-12 h-12 rounded-full bg-[#001F3F] text-white flex items-center justify-center transition-transform duration-300 group-hover:scale-105">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.7}>
                      {f.icon}
                    </svg>
                  </span>
                  <span>
                    <span className="flex items-baseline gap-2.5">
                      <span className="font-body text-[#14213D] font-bold text-base lg:text-lg tracking-wide">
                        {f.title}
                      </span>
                    </span>
                    <span className="block mt-1 font-body text-[#687386] text-sm leading-relaxed max-w-md">
                      {f.desc}
                    </span>
                  </span>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={700}>
            <Link
              to="/our-company/history-evolution"
              className="group mt-9 inline-flex items-center gap-2 bg-[#0057A0] hover:bg-[#003d73] text-white font-body font-bold text-sm lg:text-base px-7 py-3.5 rounded-full transition-all duration-300 hover:-translate-y-0.5"
            >
              Know More About Us
              <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
