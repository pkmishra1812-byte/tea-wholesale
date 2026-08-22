// src/components/shared/ExploreCategories.jsx
import { useCallback, useEffect, useRef, useState } from "react";

const GheeJarIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.4} strokeLinecap="round" strokeLinejoin="round" className="w-[50px] h-[50px]">
    <rect x="8.5" y="2.5" width="7" height="2.5" rx="0.75" />
    <path d="M9 5v1.5M15 5v1.5" />
    <path d="M7.5 8.5c0-1 .7-2 2-2h5c1.3 0 2 1 2 2V19a2.5 2.5 0 0 1-2.5 2.5h-4A2.5 2.5 0 0 1 7.5 19V8.5Z" />
    <path d="M7.5 13h9M7.5 16h9" />
    <path d="M12 9.5s-1.6 1.7-1.6 2.7a1.6 1.6 0 1 0 3.2 0c0-1-1.6-2.7-1.6-2.7Z" />
  </svg>
);

const BeverageCartonIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.4} strokeLinecap="round" strokeLinejoin="round" className="w-[50px] h-[50px]">
    <path d="m7 9 10-2.5V20a1.5 1.5 0 0 1-1.5 1.5h-7A1.5 1.5 0 0 1 7 20V9Z" />
    <path d="M7 9 9.5 4h5L17 6.5" />
    <path d="M14 4l3.5-2" />
    <path d="M7 13.5h10" />
    <circle cx="11.5" cy="17" r="1.6" />
    <path d="M11.5 15.4v-.9M11.5 18.6v.9M9.9 17H9M14 17h-.9" />
  </svg>
);

const SpiceSprigIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.4} strokeLinecap="round" strokeLinejoin="round" className="w-[50px] h-[50px]">
    <path d="M12 21.5V6" />
    <path d="M12 17c-2.8 0-4.8-1.8-4.8-4.6 2.8 0 4.8 1.8 4.8 4.6Z" />
    <path d="M12 17c2.8 0 4.8-1.8 4.8-4.6-2.8 0-4.8 1.8-4.8 4.6Z" />
    <path d="M12 10.5C9.6 10.5 8 9 8 6.7c2.4 0 4 1.5 4 3.8Z" />
    <path d="M12 10.5c2.4 0 4-1.5 4-3.8-2.4 0-4 1.5-4 3.8Z" />
    <circle cx="12" cy="3.5" r="1.2" />
  </svg>
);

const HerbalBowlIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.4} strokeLinecap="round" strokeLinejoin="round" className="w-[50px] h-[50px]">
    <path d="M4 12h16a8 8 0 0 1-16 0Z" />
    <path d="M8 12c0-1.8 1.8-3 4-3s4 1.2 4 3" />
    <path d="M17 9.5 21 4" />
    <ellipse cx="21.2" cy="3.6" rx="1.3" ry="1.6" transform="rotate(35 21.2 3.6)" />
    <path d="M9.5 20.5h5" />
  </svg>
);

const RiceGrainIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.4} strokeLinecap="round" strokeLinejoin="round" className="w-[50px] h-[50px]">
    <path d="M12 21.5V7" />
    <path d="M12 11c-1.9-.3-3.2-1.6-3.2-3.7 2 .3 3.2 1.6 3.2 3.7Z" />
    <path d="M12 11c1.9-.3 3.2-1.6 3.2-3.7-2 .3-3.2 1.6-3.2 3.7Z" />
    <path d="M12 6.8c-1.9-.3-3.2-1.6-3.2-3.7 2 .3 3.2 1.6 3.2 3.7Z" />
    <path d="M12 6.8c1.9-.3 3.2-1.6 3.2-3.7-2 .3-3.2 1.6-3.2 3.7Z" />
    <path d="M12 16c-1.9-.3-3.2-1.6-3.2-3.7 2 .3 3.2 1.6 3.2 3.7Z" />
    <path d="M12 16c1.9-.3 3.2-1.6 3.2-3.7-2 .3-3.2 1.6-3.2 3.7Z" />
  </svg>
);

const SoyaPodIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.4} strokeLinecap="round" strokeLinejoin="round" className="w-[50px] h-[50px]">
    <path d="M4 20C4 12 8.5 4.5 19 3.5c1 10.5-6.5 15-15 16.5Z" />
    <circle cx="9.5" cy="14.5" r="1.9" />
    <circle cx="13.5" cy="9.8" r="1.9" />
    <path d="M4 20l-1.5 1.5" />
  </svg>
);

const CATEGORIES = [
  { name: "Ghee (Clarified Butter)", Icon: GheeJarIcon, path: "/our-offering/kitchen-products/ghee" },
  { name: "Tea", Icon: BeverageCartonIcon, path: "#" },
  { name: "Spices & Condiments", Icon: SpiceSprigIcon, path: "/our-offering/kitchen-products/rice-pulses-spices" },
  { name: "Herbal Products", Icon: HerbalBowlIcon, path: "#" },
  { name: "Rice & Staples", Icon: RiceGrainIcon, path: "/our-offering/kitchen-products/staples" },
  { name: "Soya Products", Icon: SoyaPodIcon, path: "/our-offering/kitchen-products/soya" },
];

const leafPattern = `url("data:image/svg+xml,%3Csvg width='220' height='220' viewBox='0 0 220 220' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' stroke='%23C8A24B' stroke-opacity='0.09' stroke-width='2'%3E%3Cpath d='M60 160 Q100 105 140 160 Q100 172 60 160Z'/%3E%3Cpath d='M60 160 Q100 105 140 160 Q100 172 60 160Z' transform='translate(0 50)'/%3E%3Cpath d='M110 30 Q140 60 110 92 Q80 60 110 30Z'/%3E%3Cpath d='M150 120 Q172 145 150 168 Q128 145 150 120Z'/%3E%3C/g%3E%3C/svg%3E")`;

export default function ExploreCategories() {
  const trackRef = useRef(null);
  const [atStart, setAtStart] = useState(true);
  const [atEnd, setAtEnd] = useState(false);

  const updateArrows = useCallback(() => {
    const el = trackRef.current;
    if (!el) return;
    setAtStart(el.scrollLeft <= 4);
    setAtEnd(el.scrollLeft + el.clientWidth >= el.scrollWidth - 4);
  }, []);

  useEffect(() => {
    updateArrows();
    window.addEventListener("resize", updateArrows);
    return () => window.removeEventListener("resize", updateArrows);
  }, [updateArrows]);

  const scrollByCard = (dir) => {
    const el = trackRef.current;
    if (!el) return;
    el.scrollBy({ left: dir * 260, behavior: "smooth" });
  };

  return (
    <section
      className="pt-10 pb-16 lg:pb-20 border-t border-gray-100"
      style={{ backgroundColor: "#FDF6EC", backgroundImage: leafPattern }}
    >
      <div className="max-w-screen-xl mx-auto px-6 lg:px-8">
        <h2 className="font-display text-[#1a1a2e] text-3xl lg:text-[32px] font-bold text-center mb-[30px]">
          Explore more Products
        </h2>

        <div className="relative">
          {/* Nav arrows */}
          <button
            onClick={() => scrollByCard(-1)}
            disabled={atStart}
            aria-label="Previous categories"
            className={`absolute -left-4 lg:-left-5 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 ${
              atStart
                ? "bg-[#d4d4d4] text-gray-500 cursor-default"
                : "bg-[#4a4a4a] text-white hover:bg-[#333]"
            }`}
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={() => scrollByCard(1)}
            disabled={atEnd}
            aria-label="Next categories"
            className={`absolute -right-4 lg:-right-5 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 ${
              atEnd
                ? "bg-[#d4d4d4] text-gray-500 cursor-default"
                : "bg-[#4a4a4a] text-white hover:bg-[#333]"
            }`}
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Track */}
          <div
            ref={trackRef}
            onScroll={updateArrows}
            className="flex gap-6 overflow-x-auto scroll-smooth px-1 py-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          >
            {CATEGORIES.map(({ name, Icon, path }) => (
              <div
                key={name}
                className="group shrink-0 w-[236px] h-[230px] bg-white rounded-xl p-6 flex flex-col items-center justify-center text-center hover:-translate-y-1 hover:shadow-[0_12px_28px_rgba(0,0,0,0.1)] transition-all duration-300"
                style={{ boxShadow: "0 1px 6px rgba(0,0,0,0.06)" }}
              >
                <span className="text-[#a02c2c]">
                  <Icon />
                </span>
                <h3 className="font-body text-[#333] text-base lg:text-[17px] font-medium leading-snug mt-4">
                  {name}
                </h3>
                <div className="w-3/4 border-t border-dashed border-gray-200 my-3" />
                <a
                  href={path}
                  className="inline-flex items-center gap-1.5 font-body text-[13px] font-semibold text-[#a02c2c] hover:text-[#7d1f1f] transition-colors"
                >
                  View All
                  <svg className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            ))}
          </div>

          {/* Right fade hint */}
          {!atEnd && (
            <div className="pointer-events-none absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-[#FDF6EC] via-[#FDF6EC]/60 to-transparent rounded-r-xl" />
          )}
        </div>
      </div>
    </section>
  );
}
