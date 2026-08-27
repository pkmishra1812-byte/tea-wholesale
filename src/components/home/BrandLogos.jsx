import { useEffect, useRef, useState } from "react";
import br1 from "../../assets/brand-logo/br_logo1.png";
import br2 from "../../assets/brand-logo/br_logo2.png";
import br3 from "../../assets/brand-logo/br_logo3.png";
import br4 from "../../assets/brand-logo/br_logo4.png";
import br5 from "../../assets/brand-logo/br_logo5.png";

const brands = [
  { name: "Bioqt", img: br1 },
  { name: "Handsome X", img: br2 },
  { name: "Kickstar", img: br3 },
  { name: "Next Level", img: br4 },
  { name: "Shreeman", img: br5 },
];

export default function BrandLogos() {
  const [paused, setPaused] = useState(false);
  const [visible, setVisible] = useState(false);
  const headingRef = useRef(null);

  useEffect(() => {
    const el = headingRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          obs.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <section className="pt-4 lg:pt-6 pb-6 lg:pb-10 overflow-hidden bg-white">
      {/* Heading */}
      <div className="text-center mb-12 lg:mb-16 px-6">
        <p className="font-display text-brand text-[22px] sm:text-[22px] lg:text-[32px] font-bold leading-[1.15] tracking-tight">
          Brands we Proudly work With
        </p>
      </div>

      {/* Floating centered brand bar */}
      <div className="px-4 lg:px-14">
        <div className="bg-brand sm:rounded-2xl lg:rounded-3xl flex items-center gap-4 lg:gap-6 px-4 lg:px-8 py-6 lg:py-8 overflow-hidden">
          {/* Pause / play button — left side */}
          <button
            onClick={() => setPaused((p) => !p)}
            aria-label={paused ? "Play" : "Pause"}
            className="shrink-0 w-9 h-9 lg:w-10 lg:h-10 rounded-full border border-white/25 text-white/80 hover:bg-white hover:text-brand hover:border-white transition-colors flex items-center justify-center"
          >
            {paused ? (
              <svg className="w-3.5 h-3.5 lg:w-4 lg:h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z" />
              </svg>
            ) : (
              <svg className="w-3.5 h-3.5 lg:w-4 lg:h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" />
              </svg>
            )}
          </button>

          {/* Marquee */}
          <div className="flex-1 overflow-hidden relative">
            {/* soft edge fades inside the bar */}
            <div className="pointer-events-none absolute top-0 bottom-0 left-0 w-8 lg:w-14 z-10 bg-gradient-to-r from-brand to-transparent" />
            <div className="pointer-events-none absolute top-0 bottom-0 right-0 w-8 lg:w-14 z-10 bg-gradient-to-l from-brand to-transparent" />
            <div
              className="flex items-center marquee-track"
              style={{ animationPlayState: paused ? "paused" : "running" }}
            >
              {[...brands, ...brands].map((brand, i) => (
                <div
                  key={`${brand.name}-${i}`}
                  aria-hidden={i >= brands.length}
                  className="shrink-0 flex items-center justify-center mx-6 sm:mx-8 lg:mx-10"
                >
                  <img
                    src={brand.img}
                    alt={i >= brands.length ? "" : brand.name}
                    className="h-8 sm:h-10 md:h-12 w-auto max-w-[130px] sm:max-w-[160px] object-contain"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Our Business heading below the strip */}
      <div className="text-center mt-20 lg:mt-32 px-6" ref={headingRef}>
        <h3
          className={`font-display font-bold text-brand text-[22px] sm:text-[22px] lg:text-[32px] leading-[1.15] tracking-tight whitespace-nowrap transition-all duration-700 ${
            visible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
        >
          Our Brands are Creating Desire at Scale
        </h3>
      </div>

      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .marquee-track {
          animation: marquee 28s linear infinite;
          width: fit-content;
          will-change: transform;
        }
      `}</style>
    </section>
  );
}
