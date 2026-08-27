// src/components/company/CompanyHero.jsx
import banner1 from "../../assets/banner-1.png";
import banner2 from "../../assets/banner-2.png";
import banner3 from "../../assets/banner-3.png";
import bannerNew2 from "../../assets/banner-new-2.png";
import kickstarBanner from "../../assets/kickstar-banner.png";
import wholsaleBanner from "../../assets/wholsale-banner.png";
import { Link } from "react-router-dom";

const PRODUCT_GROUPS = [
  { img: bannerNew2, cls: "w-32 lg:w-44 left-[4%] top-[16%] -rotate-6 z-20 float-a" },
  { img: banner3, cls: "w-24 lg:w-36 left-[38%] top-[4%] rotate-3 z-10 float-b" },
  { img: wholsaleBanner, cls: "w-28 lg:w-40 right-[26%] top-[22%] -rotate-2 z-30 float-c" },
  { img: banner1, cls: "w-24 lg:w-32 right-[4%] top-[8%] rotate-6 z-10 float-b" },
  { img: kickstarBanner, cls: "w-24 lg:w-40 left-[16%] bottom-[10%] rotate-2 z-30 float-c" },
  { img: banner2, cls: "w-28 lg:w-40 right-[12%] bottom-[6%] -rotate-3 z-20 float-a" },
];

export default function CompanyHero() {
  return (
    <>
      <style>{`
        @keyframes issiRise {
          from { opacity: 0; transform: translateY(60px) scale(.94); }
          to   { opacity: 1; transform: translateY(0) scale(1); }
        }
        @keyframes issiLineUp {
          from { transform: translateY(110%); }
          to   { transform: translateY(0); }
        }
        @keyframes issiFloatA {
          0%, 100% { translate: 0 0; }
          50%      { translate: 0 -7px; }
        }
        .float-a { animation: issiRise .9s cubic-bezier(.22,.61,.36,1) both, issiFloatA 5s ease-in-out 1.6s infinite; }
        .float-b { animation: issiRise .9s cubic-bezier(.22,.61,.36,1) both, issiFloatA 6s ease-in-out 2.1s infinite; }
        .float-c { animation: issiRise .9s cubic-bezier(.22,.61,.36,1) both, issiFloatA 5.5s ease-in-out 1.85s infinite; }
        @keyframes issiDrift {
          0%   { transform: translateY(0) translateX(0); opacity: var(--o, .25); }
          50%  { transform: translateY(-26px) translateX(14px); opacity: calc(var(--o, .25) * .55); }
          100% { transform: translateY(0) translateX(0); opacity: var(--o, .25); }
        }
        .issi-particle { animation: issiDrift var(--d, 9s) ease-in-out infinite; }
        @media (prefers-reduced-motion: reduce) {
          .float-a, .float-b, .float-c, .issi-particle { animation: none !important; opacity: 1 !important; transform: none !important; translate: 0 0 !important; }
        }
      `}</style>

      <section className="relative bg-[#00152C] overflow-hidden">
        {/* soft radial glows */}
        <div className="pointer-events-none absolute -top-32 -left-32 w-[480px] h-[480px] rounded-full bg-[#0057A0]/20 blur-3xl" />
        <div className="pointer-events-none absolute top-1/3 -right-24 w-[420px] h-[420px] rounded-full bg-[#C9A227]/10 blur-3xl" />

        {/* decorative particles */}
        <div className="pointer-events-none absolute inset-0" aria-hidden="true">
          {[
            { l: "12%", t: "22%", s: 5, d: "11s", o: 0.3 },
            { l: "28%", t: "64%", s: 4, d: "13s", o: 0.22 },
            { l: "46%", t: "14%", s: 6, d: "10s", o: 0.18 },
            { l: "63%", t: "70%", s: 5, d: "12s", o: 0.28 },
            { l: "78%", t: "30%", s: 4, d: "14s", o: 0.2 },
            { l: "90%", t: "58%", s: 6, d: "9s", o: 0.16 },
            { l: "8%", t: "80%", s: 4, d: "15s", o: 0.24 },
          ].map((p, i) => (
            <span
              key={i}
              className="issi-particle absolute rounded-full bg-[#E3B341]"
              style={{
                left: p.l,
                top: p.t,
                width: p.s,
                height: p.s,
                "--d": p.d,
                "--o": p.o,
              }}
            />
          ))}
        </div>

        <div className="relative max-w-screen-xl mx-auto px-6 lg:px-8 pt-10 lg:pt-14 pb-32 lg:pb-40 grid grid-cols-1 lg:grid-cols-[46fr_54fr] gap-12 items-center">
          {/* ── LEFT — copy ── */}
          <div>
            <p
              className="font-body text-[#E3B341] text-xs lg:text-sm font-bold tracking-[0.35em]"
              style={{ animation: "issiRise .7s ease-out .2s both" }}
            >
              EVERYDAY ESSENTIALS.
            </p>

            <h1 className="mt-3 font-display text-white text-3xl sm:text-4xl lg:text-5xl font-bold leading-[1.12]">
              <span className="block overflow-hidden">
                <span className="block" style={{ animation: "issiLineUp .8s cubic-bezier(.22,.61,.36,1) .35s both" }}>
                  Crafted for
                </span>
              </span>
              <span className="block overflow-hidden">
                <span className="block" style={{ animation: "issiLineUp .8s cubic-bezier(.22,.61,.36,1) .5s both" }}>
                  Every Indian Home.
                </span>
              </span>
            </h1>

            <div
              className="mt-5 w-14 h-[3px] bg-[#C9A227] rounded-full"
              style={{ animation: "issiRise .7s ease-out .55s both" }}
            />

            <p
              className="mt-5 font-body text-white/70 text-base lg:text-lg leading-relaxed max-w-md"
              style={{ animation: "issiRise .8s ease-out .65s both" }}
            >
              From food and beverages to personal care and everyday essentials,
              we bring trusted quality under one umbrella.
            </p>

            <div className="mt-7 flex flex-wrap gap-4" style={{ animation: "issiRise .8s ease-out .8s both" }}>
              <Link
                to="/our-offering"
                className="group inline-flex items-center gap-2 bg-[#C9A227] hover:bg-[#b08d1e] text-[#00152C] font-body font-bold text-sm lg:text-base px-7 py-3.5 rounded-full transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_10px_30px_rgba(201,162,39,0.35)]"
              >
                Explore Our Businesses
                <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </Link>
              <Link
                to="/wholesale"
                className="group inline-flex items-center gap-2 border border-[#C9A227]/70 text-[#E3B341] hover:bg-[#C9A227]/10 font-body font-bold text-sm lg:text-base px-7 py-3.5 rounded-full transition-all duration-300 hover:-translate-y-0.5"
              >
                Partner With Us
                <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>

          {/* ── RIGHT — product collage ── */}
          <div className="relative h-[300px] sm:h-[340px] lg:h-[400px] hidden md:block">
            {/* wooden platform */}
            <div className="absolute left-1/2 -translate-x-1/2 bottom-[2%] w-[88%] h-16 rounded-[50%] bg-gradient-to-b from-[#5a3d23]/80 to-[#3a2716]/90 shadow-[0_24px_60px_rgba(0,0,0,0.5)]" />
            {PRODUCT_GROUPS.map((p, i) => (
              <img
                key={i}
                src={p.img}
                alt=""
                aria-hidden="true"
                draggable={false}
                className={`absolute ${p.cls} object-contain drop-shadow-[0_18px_28px_rgba(0,0,0,0.45)]`}
                style={{ animationDelay: `${0.5 + i * 0.14}s, 0s` }}
              />
            ))}
          </div>
        </div>

        {/* curved white transition */}
        <svg
          className="absolute bottom-0 left-0 w-full h-[50px] lg:h-[80px] text-white"
          viewBox="0 0 1440 110"
          preserveAspectRatio="none"
          fill="currentColor"
          aria-hidden="true"
        >
          <path d="M0,110 L0,64 C240,10 480,0 720,18 C960,36 1200,84 1440,58 L1440,110 Z" />
        </svg>
      </section>
    </>
  );
}
