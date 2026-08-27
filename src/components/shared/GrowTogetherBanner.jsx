// src/components/shared/GrowTogetherBanner.jsx
import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

import farmImg from "../../assets/teafarming.png";
import flatLayImg from "../../assets/wholsale-banner.png";

const NAVY_A = "#0B1F3A";
const NAVY_B = "#14355E";
const GOLD = "#D4A94C";

const TRUST_POINTS = [
  { label: "Bulk Orders", d: "M21 8l-9-5-9 5v8l9 5 9-5V8zM3 8l9 5 9-5M12 13v8" },
  { label: "Private Label", d: "M20.59 13.41l-7.17 7.17a2 2 0 01-2.83 0L2 12V2h10l8.59 8.59a2 2 0 010 2.82zM7 7h.01" },
  { label: "Best Quality", d: "M12 3l7 3v5c0 4.6-3 8.4-7 10-4-1.6-7-5.4-7-10V6l7-3zm-2.2 9l1.8 1.8 3.4-3.6" },
  { label: "Timely Delivery", d: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" },
];

export default function GrowTogetherBanner() {
  const sectionRef = useRef(null);
  const [inView, setInView] = useState(false);
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return undefined;

    const io = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { threshold: 0.35 }
    );
    io.observe(el);

    const onScroll = () => {
      const rect = el.getBoundingClientRect();
      setShowTop(rect.top < window.innerHeight * 0.75);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    return () => {
      io.disconnect();
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  const scrollTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <section ref={sectionRef} className="relative w-full">
      {/* ═══ BANNER BODY ═══ */}
      <div
        className="relative w-full overflow-hidden md:h-[170px] lg:h-[180px]"
        style={{ background: `linear-gradient(100deg, ${NAVY_A} 0%, ${NAVY_B} 100%)` }}
      >
        {/* ── LEFT ~35% : farm worker photo, Ken Burns, blends into navy ── */}
        <div className="absolute inset-y-0 left-0 w-full sm:w-[48%] md:w-[38%] lg:w-[35%] overflow-hidden">
          <img
            src={farmImg}
            alt=""
            aria-hidden
            className="gtb-kenburns w-full h-full object-cover object-center"
          />
          {/* golden-hour warm glow */}
          <div
            className="absolute inset-0"
            style={{
              background:
                "radial-gradient(120% 95% at 18% 12%, rgba(255,186,92,0.30) 0%, rgba(255,160,60,0.10) 40%, transparent 62%)",
            }}
          />
          {/* soft fade into navy (no hard edge) */}
          <div
            className="absolute inset-0"
            style={{
              background: `linear-gradient(90deg, rgba(11,31,58,0.05) 0%, rgba(11,31,58,0.30) 55%, rgba(11,31,58,0.82) 82%, ${NAVY_B} 100%)`,
            }}
          />
          <div
            className="absolute inset-0"
            style={{
              background: `linear-gradient(180deg, rgba(11,31,58,0.10) 0%, transparent 35%, rgba(11,31,58,0.28) 100%)`,
            }}
          />
        </div>

        {/* ── RIGHT EDGE : product flat-lay photo with vignette ── */}
        <div className="absolute inset-y-0 right-0 w-[32%] hidden lg:block overflow-hidden">
          <img
            src={flatLayImg}
            alt=""
            aria-hidden
            className="w-full h-full object-cover object-center"
          />
          {/* blend left edge into navy */}
          <div
            className="absolute inset-0"
            style={{
              background: `linear-gradient(90deg, ${NAVY_B}f2 0%, ${NAVY_B}99 30%, ${NAVY_B}33 60%, ${NAVY_B}55 100%)`,
            }}
          />
          {/* subtle golden vignette */}
          <div
            className="absolute inset-0"
            style={{
              background:
                "radial-gradient(90% 90% at 62% 50%, transparent 42%, rgba(212,169,76,0.13) 74%, rgba(11,31,58,0.55) 100%)",
            }}
          />
        </div>

        {/* ── faint gold line-art, far right, ultra-slow drift ── */}
        <svg
          aria-hidden
          viewBox="0 0 320 260"
          fill="none"
          className="gtb-pattern absolute right-[-30px] top-1/2 h-[135%] w-auto pointer-events-none hidden md:block"
          style={{ opacity: 0.07 }}
        >
          <circle cx="200" cy="130" r="112" stroke={GOLD} strokeWidth="1.2" />
          <circle cx="200" cy="130" r="80" stroke={GOLD} strokeWidth="1" strokeDasharray="3 6" />
          <path d="M200 130q34-64 96-76-14 66-68 88" stroke={GOLD} strokeWidth="1.1" />
          <path d="M200 130q-34 64-96 76 14-66 68-88" stroke={GOLD} strokeWidth="1.1" />
          <path d="M200 130q58-20 108 8-52 34-104 6" stroke={GOLD} strokeWidth="1" />
          <ellipse cx="268" cy="70" rx="9" ry="16" transform="rotate(-38 268 70)" stroke={GOLD} strokeWidth="1" />
          <ellipse cx="132" cy="190" rx="8" ry="15" transform="rotate(142 132 190)" stroke={GOLD} strokeWidth="1" />
        </svg>

        {/* ── CONTENT (center-left over navy) ── */}
        <div
          className={`relative z-10 h-full flex flex-col justify-center max-w-screen-xl mx-auto px-6 lg:px-10 py-7 md:py-0 transition-all duration-700 ease-out ${
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-7"
          }`}
        >
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 sm:gap-8">
            <div>
              <h2
                className="font-display font-bold leading-[1.08] tracking-tight text-3xl sm:text-4xl lg:text-[42px]"
                style={{ color: GOLD }}
              >
                Let&rsquo;s Grow Together
              </h2>

              <p className="font-body text-white text-sm lg:text-base font-medium leading-relaxed mt-2">
                Partner with us for bulk supply, private label,
                <br className="hidden md:block" /> and long-term success.
              </p>
            </div>

            <Link
              to="/contact"
              className="gtb-btn group inline-flex items-center justify-center gap-2 rounded-full px-6 py-2.5 font-body font-semibold text-sm self-start sm:self-center shrink-0"
              style={{ color: NAVY_A }}
            >
              Request Wholesale Quote
              <svg
                className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2.5}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14m-6-6l6 6-6 6" />
              </svg>
            </Link>
          </div>

          {/* trust icons row — staggered fade-in */}
          <div className="flex flex-wrap gap-x-5 sm:gap-x-8 lg:gap-x-10 gap-y-2.5 mt-3.5 md:mt-4">
            {TRUST_POINTS.map((t, i) => (
              <span
                key={t.label}
                className={`flex items-center gap-2 transition-all duration-500 ease-out ${
                  inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"
                }`}
                style={{ transitionDelay: inView ? `${i * 100 + 250}ms` : "0ms" }}
              >
                <span
                  className="w-6 h-6 lg:w-7 lg:h-7 rounded-full border flex items-center justify-center shrink-0"
                  style={{ borderColor: `${GOLD}aa`, color: "#F3E3BD" }}
                >
                  <svg className="w-3 h-3 lg:w-3.5 lg:h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d={t.d} />
                  </svg>
                </span>
                <span className="font-body text-[10px] lg:text-xs font-semibold tracking-[0.14em] uppercase text-[#F5EFDD]">
                  {t.label}
                </span>
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* ═══ SCROLL-TO-TOP — bottom-right, overlaps section below ═══ */}
      <button
        onClick={scrollTop}
        aria-label="Scroll to top"
        className={`gtb-top absolute z-20 right-4 sm:right-8 -bottom-6 w-11 h-11 rounded-full flex items-center justify-center border border-white/10 transition-all duration-500 ${
          showTop ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"
        }`}
        style={{ backgroundColor: NAVY_A, boxShadow: "0 10px 26px rgba(11,31,58,0.45)" }}
      >
        <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7" />
        </svg>
      </button>

      {/* ───────── scoped styles ───────── */}
      <style>{`
        @keyframes gtbKenBurns {
          from { transform: scale(1) translateY(0); }
          to   { transform: scale(1.16) translateY(-2%); }
        }
        .gtb-kenburns { animation: gtbKenBurns 32s ease-in-out infinite alternate; will-change: transform; }

        @keyframes gtbDrift {
          0%   { transform: translateY(-50%) rotate(0deg); }
          50%  { transform: translateY(-50%) rotate(4deg) translateX(-16px); }
          100% { transform: translateY(-50%) rotate(0deg); }
        }
        .gtb-pattern { animation: gtbDrift 40s ease-in-out infinite; will-change: transform; }

        .gtb-btn {
          background-color: #D4A94C;
          box-shadow: 0 8px 26px rgba(212,169,76,0.38);
          transition: all .3s ease;
        }
        .gtb-btn:hover {
          transform: scale(1.05);
          background-color: #C2933B;
          box-shadow: 0 10px 36px rgba(212,169,76,0.6);
        }
        .gtb-btn:active {
          transform: scale(0.95);
          background-color: #B0852F;
        }

        @keyframes gtbBounce {
          0%, 100% { transform: translateY(0); }
          50%      { transform: translateY(-8px); }
        }
        .gtb-top:hover { animation: gtbBounce 0.6s ease; }
        .gtb-top:active { transform: scale(0.9); }

        @media (prefers-reduced-motion: reduce) {
          .gtb-kenburns, .gtb-pattern, .gtb-top:hover { animation: none; }
        }
      `}</style>
    </section>
  );
}
