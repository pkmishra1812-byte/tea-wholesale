// src/components/company/ProductUniverse.jsx
import { useState } from "react";
import Reveal from "./Reveal";
import banner1 from "../../assets/banner-1.png";
import banner2 from "../../assets/banner-2.png";
import banner3 from "../../assets/banner-3.png";
import bannerNew1 from "../../assets/banner-new-1.png";
import bannerNew2 from "../../assets/banner-new-2.png";
import bannerNew3 from "../../assets/banner-new-3.png";
import bannerNew4 from "../../assets/banner-new-4.png";

const CATEGORIES = [
  { label: "Food & Beverages", imgs: [bannerNew1, bannerNew2, banner3] },
  { label: "Tea & Coffee", imgs: [banner1, banner2, bannerNew1] },
  { label: "Spices", imgs: [banner3, bannerNew2, banner2] },
  { label: "Personal Care", imgs: [bannerNew4, bannerNew3, banner1] },
  { label: "Baby Care", imgs: [bannerNew3, bannerNew4, bannerNew1] },
  { label: "Health & Wellness", imgs: [banner2, banner1, bannerNew4] },
];

export default function ProductUniverse() {
  const [activeIdx, setActiveIdx] = useState(0);
  const active = CATEGORIES[activeIdx];

  return (
    <section className="bg-white py-16 lg:py-24 overflow-hidden">
      <div className="max-w-screen-xl mx-auto px-6 lg:px-8">
        <Reveal>
          <h2 className="font-display text-[#001F3F] text-3xl lg:text-[44px] font-bold leading-tight">
            The Product Universe
          </h2>
          <div className="w-14 h-[3px] bg-[#C9A227] rounded-full mt-4" />
        </Reveal>

        {/* Tabs */}
        <Reveal delay={120}>
          <div className="scrollbar-hide flex items-center gap-2 lg:gap-3 overflow-x-auto whitespace-nowrap pb-2 mt-10">
            {CATEGORIES.map((c, i) => (
              <button
                key={c.label}
                type="button"
                onClick={() => setActiveIdx(i)}
                className={`shrink-0 rounded-full px-5 py-2.5 font-body text-sm lg:text-base font-bold tracking-wide transition-all duration-300 cursor-pointer ${
                  i === activeIdx
                    ? "bg-[#0057A0] text-white shadow-md shadow-[#0057A0]/30"
                    : "text-[#0d1b4c]/70 hover:text-[#0057A0] hover:bg-[#0057A0]/5"
                }`}
              >
                {c.label}
              </button>
            ))}
          </div>
        </Reveal>

        {/* Images — keyed swap animates fade/scale/slide */}
        <div key={active.label} className="mt-9 grid grid-cols-1 sm:grid-cols-3 gap-6 issi-universe-enter">
          {active.imgs.map((img, i) => (
            <div
              key={`${active.label}-${i}`}
              className="overflow-hidden sm:rounded-[20px] shadow-[0_14px_40px_rgba(0,31,63,0.10)] group"
              style={{ animationDelay: `${i * 110}ms` }}
            >
              <img
                src={img}
                alt={`${active.label} ${i + 1}`}
                className="w-full h-60 sm:h-64 object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
              />
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes issiUniverseIn {
          from { opacity: 0; transform: translateY(26px) scale(.97); }
          to   { opacity: 1; transform: translateY(0) scale(1); }
        }
        .issi-universe-enter > div {
          animation: issiUniverseIn .55s cubic-bezier(.22,.61,.36,1) both;
        }
        @media (prefers-reduced-motion: reduce) {
          .issi-universe-enter > div { animation: none !important; opacity: 1 !important; transform: none !important; }
        }
      `}</style>
    </section>
  );
}
