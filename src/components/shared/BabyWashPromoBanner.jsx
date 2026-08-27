// src/components/shared/BabyWashPromoBanner.jsx
import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

import bathImg from "../../assets/baby-bath.png";

const SKY = "#B8DCF2";

const BUBBLES = [
  { cx: 8, cy: 18, r: 9, o: 0.5 },
  { cx: 26, cy: 72, r: 16, o: 0.35 },
  { cx: 44, cy: 22, r: 7, o: 0.45 },
  { cx: 58, cy: 84, r: 12, o: 0.3 },
  { cx: 70, cy: 34, r: 20, o: 0.28 },
  { cx: 86, cy: 66, r: 10, o: 0.4 },
  { cx: 94, cy: 12, r: 6, o: 0.45 },
];

export default function BabyWashPromoBanner() {
  const sectionRef = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return undefined;

    const io = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { threshold: 0.3 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <section ref={sectionRef} id="baby-wash-banner" className="relative w-full overflow-hidden" aria-label="Baby Wash promotion">
      <div
        className={`flex flex-col md:flex-row transition-all duration-700 ease-out ${
          inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
        }`}
      >
        {/* ── LEFT ~70% : light blue panel with bubble pattern + copy ── */}
        <div className="relative w-full md:w-[70%] flex items-center px-6 sm:px-10 lg:pl-24 lg:pr-12 py-[24px] lg:py-0" style={{ backgroundColor: SKY }}>
          {/* faint translucent bubble outlines */}
          <svg
            aria-hidden
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
            fill="none"
            className="bwp-bubbles absolute inset-0 w-full h-full pointer-events-none"
          >
            {BUBBLES.map((b, i) => (
              <circle
                key={i}
                cx={b.cx}
                cy={b.cy}
                r={b.r}
                stroke="#FFFFFF"
                strokeOpacity={b.o}
                strokeWidth={b.r > 14 ? 0.5 : 0.7}
              />
            ))}
            <circle cx="36" cy="50" r="3.5" fill="#FFFFFF" fillOpacity="0.25" />
            <circle cx="78" cy="90" r="4" fill="#FFFFFF" fillOpacity="0.2" />
          </svg>

          <div className="relative z-10 max-w-xl">
            <h2 className="font-poppins font-bold leading-tight tracking-tight text-[#0057A3]">
              <span className="block text-[22px] sm:text-[29px] lg:text-[31px]">
                ISSI<sup className="text-lg lg:text-xl align-super">&reg;</sup>
              </span>
              <span className="block text-[18px] sm:text-[22px] lg:text-[25px] mt-[2px]">Baby Wash</span>
            </h2>

            <p className="font-body text-[#0057A3]/85 text-sm sm:text-base lg:text-lg leading-relaxed mt-[6px]">
              is designed with only{" "}
              <strong className="font-bold text-[#0057A3]">baby safe ingredients</strong>, to help{" "}
              <strong className="font-bold text-[#0057A3]">protect your baby&rsquo;s skin</strong>, from{" "}
              <strong className="font-bold text-[#0057A3]">day&nbsp;1.</strong>
            </p>

            <Link
              to="/our-offering/baby-care/product/baby-wash"
              className="bwp-btn group inline-flex items-center gap-2 rounded-full bg-[#0057A3] px-6 py-2.5 font-body font-semibold text-sm text-white mt-[14px]"
            >
              Discover Baby Wash
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
        </div>

        {/* ── RIGHT ~30% : full-bleed lifestyle photo + corner accents ── */}
        <div className="relative w-full md:w-[30%] h-[134px] sm:h-[154px] md:h-auto overflow-hidden">
          <img
            src={bathImg}
            alt="Mother bathing her laughing baby in a pink tub with soap suds"
            className="absolute inset-0 w-full h-full object-cover object-center"
          />

          {/* gold heart accents — bottom-right */}
          <svg
            aria-hidden
            viewBox="0 0 64 48"
            className="absolute bottom-3 right-3 w-14 h-11 drop-shadow-md"
            fill="#F2B705"
          >
            <path d="M12 40C6 35 2 30.5 2 25.5 2 21 5.5 18 9.5 18c2.6 0 4.6 1.4 5.5 3 .9-1.6 2.9-3 5.5-3 4 0 7.5 3 7.5 7.5 0 5-4 9.5-10 14.5z" opacity="0.95" transform="translate(24 -12)" />
            <path d="M12 40C6 35 2 30.5 2 25.5 2 21 5.5 18 9.5 18c2.6 0 4.6 1.4 5.5 3 .9-1.6 2.9-3 5.5-3 4 0 7.5 3 7.5 7.5 0 5-4 9.5-10 14.5z" opacity="0.85" transform="scale(0.72)" />
          </svg>

          {/* pump-top baby wash bottle on folded white towel — partially cropped */}
          <svg
            aria-hidden
            viewBox="0 0 120 150"
            className="absolute bottom-[-14px] right-2 w-24 sm:w-28 lg:w-32 drop-shadow-xl"
          >
            {/* folded towel */}
            <rect x="4" y="118" width="112" height="26" rx="10" fill="#FDFDFB" />
            <rect x="10" y="110" width="100" height="18" rx="9" fill="#F4F1EA" />
            {/* bottle body */}
            <path d="M38 62h44v56a12 12 0 01-12 12H50a12 12 0 01-12-12z" fill="#EAF4FB" stroke="#CFE4F2" strokeWidth="1.5" />
            <rect x="46" y="78" width="28" height="30" rx="4" fill="#FFFFFF" stroke="#CFE4F2" strokeWidth="1.2" />
            <text x="60" y="92" textAnchor="middle" fontFamily="Poppins, sans-serif" fontWeight="700" fontSize="7" fill="#0057A3">ISSI</text>
            <path d="M60 97c-2-2-3.4-3.4-3.4-5a1.9 1.9 0 013.4-1.1 1.9 1.9 0 013.4 1.1c0 1.6-1.4 3-3.4 5z" fill="#F2B705" />
            {/* neck + pump */}
            <rect x="54" y="50" width="12" height="12" rx="2" fill="#DCEBF6" />
            <rect x="51" y="42" width="18" height="9" rx="3" fill="#0057A3" />
            <path d="M55 42v-9a4 4 0 014-4h14v6H63v7z" fill="#0057A3" />
          </svg>
        </div>
      </div>

      {/* ───────── scoped styles ───────── */}
      <style>{`
        @keyframes bwpDrift {
          0%, 100% { transform: translate(0, 0); }
          50%      { transform: translate(-8px, 6px); }
        }
        .bwp-bubbles { animation: bwpDrift 26s ease-in-out infinite; will-change: transform; }

        .bwp-btn {
          box-shadow: 0 8px 22px rgba(0, 87, 163, 0.32);
          transition: all .3s ease;
        }
        .bwp-btn:hover {
          background-color: #084A87;
          box-shadow: 0 10px 30px rgba(0, 87, 163, 0.45);
          transform: scale(1.04);
        }
        .bwp-btn:active { transform: scale(0.96); }

        @media (prefers-reduced-motion: reduce) {
          .bwp-bubbles, .bwp-btn:hover { animation: none; transform: none; }
        }
      `}</style>
    </section>
  );
}
