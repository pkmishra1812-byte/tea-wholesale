// src/components/company/BrandMarquee.jsx
import { useState } from "react";
import Reveal from "./Reveal";
import br1 from "../../assets/brand-logo/br_logo1.png";
import br2 from "../../assets/brand-logo/br_logo2.png";
import br3 from "../../assets/brand-logo/br_logo3.png";
import br4 from "../../assets/brand-logo/br_logo4.png";
import br5 from "../../assets/brand-logo/br_logo5.png";

const BRANDS = [
  { name: "Bioqt", img: br1 },
  { name: "Handsome X", img: br2 },
  { name: "Kickstar", img: br3 },
  { name: "Next Level", img: br4 },
  { name: "Shreeman", img: br5 },
];

export default function BrandMarquee() {
  const [paused, setPaused] = useState(false);

  return (
    <section className="bg-[#F7F9FC] py-16 lg:py-24 overflow-hidden">
      <div className="max-w-screen-xl mx-auto px-6 lg:px-8">
        <Reveal>
          <h2 className="font-display text-[#001F3F] text-3xl lg:text-[44px] font-bold leading-tight">
            One Ecosystem. Many Everyday Choices.
          </h2>
          <div className="w-14 h-[3px] bg-[#C9A227] rounded-full mt-4" />
        </Reveal>
      </div>

      <Reveal delay={150}>
        <div
          className="mt-12 relative"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          <div className="pointer-events-none absolute top-0 bottom-0 left-0 w-20 z-10 bg-gradient-to-r from-[#F7F9FC] to-transparent" />
          <div className="pointer-events-none absolute top-0 bottom-0 right-0 w-20 z-10 bg-gradient-to-l from-[#F7F9FC] to-transparent" />
          <div
            className="flex items-center w-fit"
            style={{
              animation: "issiBrandScroll 30s linear infinite",
              animationPlayState: paused ? "paused" : "running",
            }}
          >
            {[...BRANDS, ...BRANDS].map((b, i) => (
              <div
                key={`${b.name}-${i}`}
                aria-hidden={i >= BRANDS.length}
                className={`shrink-0 mx-7 sm:mx-10 flex items-center justify-center h-24 w-44 sm:h-28 sm:w-56 bg-white rounded-2xl border transition-all duration-300 ${
                  paused
                    ? "border-[#C9A227]/70 shadow-[0_10px_28px_rgba(201,162,39,0.18)] scale-[1.04]"
                    : "border-gray-100 shadow-sm"
                }`}
              >
                <img src={b.img} alt={i >= BRANDS.length ? "" : b.name} className="max-h-14 sm:max-h-16 w-auto object-contain" />
              </div>
            ))}
          </div>
        </div>
      </Reveal>

      <style>{`
        @keyframes issiBrandScroll {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @media (prefers-reduced-motion: reduce) {
          [style*="issiBrandScroll"] { animation: none !important; }
        }
      `}</style>
    </section>
  );
}
