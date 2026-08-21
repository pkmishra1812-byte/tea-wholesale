import { useState, useEffect, useRef, useCallback } from "react";

import teaSlide from "../../assets/banner-new-1.png";
import spiceSlide from "../../assets/banner-new-2.png";
import babySlide from "../../assets/kickstar-banner.png";
import bioqtSlide from "../../assets/bioqt-banner.png";

const DEFAULT_SLIDES = [
  { id: 1, image: teaSlide, label: "tea" },
  { id: 2, image: spiceSlide, label: "spice" },
  { id: 3, image: babySlide, label: "baby" },
  { id: 4, image: bioqtSlide, label: "bioqt" },
];

export default function OfferingHeroBanner({
  slides: propSlides,
  title = "Our Offering",
  subtitle = "Premium tea, spices, baby care, and beauty products — sourced with integrity, delivered with excellence.",
  showText = true,
}) {
  const SLIDES = propSlides || DEFAULT_SLIDES;
  const [current, setCurrent] = useState(0);
  const prevRef = useRef(null);
  const timerRef = useRef(null);
  const thumbRowRef = useRef(null);

  const goTo = useCallback((index) => {
    if (index === current) return;
    prevRef.current = current;
    clearInterval(timerRef.current);
    setCurrent(index);
  }, [current]);

  const next = useCallback(() => {
    prevRef.current = current;
    setCurrent((prev) => (prev + 1) % SLIDES.length);
  }, [current, SLIDES.length]);

  useEffect(() => {
    timerRef.current = setInterval(next, 6500);
    return () => clearInterval(timerRef.current);
  }, [next]);

  const slide = SLIDES[current];

  const scrollThumbs = (dir) => {
    if (!thumbRowRef.current) return;
    const amt = 180;
    thumbRowRef.current.scrollBy({
      left: dir === "left" ? -amt : amt,
      behavior: "smooth",
    });
  };

  return (
    <section className="hero-section relative w-full overflow-hidden bg-charcoal min-h-[300px] sm:min-h-[400px] lg:min-h-[550px] max-h-[820px]">
      <div className="relative w-full h-full">
        {SLIDES.map((s, i) => {
          const isActive = i === current;
          const isLeaving = prevRef.current !== null && i === prevRef.current;
          let x = "0%";
          let scale = 1;
          let opacity = 1;
          if (isActive) { x = "0%"; scale = 1; opacity = 1; }
          else if (isLeaving) { x = "100%"; scale = 0.95; opacity = 0.5; }
          else { x = "-100%"; scale = 1.1; opacity = 0; }
          return (
            <div
              key={s.id}
              className="absolute inset-0 w-full h-full"
              style={{
                transform: `translateX(${x}) scale(${scale})`,
                opacity: opacity,
                transition: isActive || isLeaving
                  ? "transform 0.9s cubic-bezier(0.65, 0, 0.35, 1), opacity 0.6s ease"
                  : "none",
                zIndex: isActive ? 2 : isLeaving ? 1 : 0,
              }}
            >
              <img
                src={s.image}
                alt=""
                className="w-full h-full object-contain lg:object-cover object-center"
                draggable={false}
              />
            </div>
          );
        })}
      </div>

      <div
        className="absolute inset-0 z-10"
        style={{
          background:
            slide.label === "tea"
              ? "linear-gradient(90deg, rgba(28,26,23,0.82) 0%, rgba(28,26,23,0.5) 40%, rgba(28,26,23,0.08) 65%, transparent 100%)"
              : "linear-gradient(90deg, rgba(28,26,23,0.35) 0%, rgba(28,26,23,0.15) 35%, transparent 60%)",
        }}
      />

      {showText && slide.label === "tea" && (
        <div className="absolute inset-0 z-20 flex items-center">
          <div className="max-w-screen-xl mx-auto px-6 lg:px-16 w-full">
            <div className="max-w-xl">
              <h1
                key={`h-${current}`}
                className="font-display text-cream text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4"
                style={{
                  animation: "heroGlide 0.7s cubic-bezier(0.16, 1, 0.3, 1) both",
                }}
              >
                {title}
              </h1>
              <p
                key={`p-${current}`}
                className="font-body text-cream/70 text-base md:text-lg leading-relaxed max-w-md"
                style={{
                  animation: "heroGlide 0.7s 0.15s cubic-bezier(0.16, 1, 0.3, 1) both",
                }}
              >
                {subtitle}
              </p>
            </div>
          </div>
        </div>
      )}

      {showText && slide.label !== "tea" && (
        <div className="absolute inset-0 z-20 flex items-start justify-end">
          <div
            className="pr-6 lg:pr-16 pt-14 lg:pt-10"
            style={{
              animation: "heroZoomIn 0.7s cubic-bezier(0.16, 1, 0.3, 1) both",
            }}
          >
            {slide.label === "spice" && (
              <span
                className="font-display font-bold tracking-[0.06em] select-none inline-block"
                style={{
                  fontSize: "clamp(1.5rem, 3.5vw, 2.5rem)",
                  color: "#7B2D26",
                  textShadow: "0 1px 4px rgba(255,255,255,0.3)",
                }}
              >
                COMING SOON
              </span>
            )}
            {slide.label === "baby" && (
              <span
                className="font-body font-extrabold tracking-[0.04em] select-none inline-block"
                style={{
                  fontSize: "clamp(1.4rem, 3.2vw, 2.2rem)",
                  color: "#E91E8C",
                  textShadow: "0 0 8px rgba(255,255,255,0.7), 0 2px 12px rgba(0,0,0,0.1)",
                }}
              >
                COMING SOON
              </span>
            )}
            {slide.label === "bioqt" && (
              <span
                className="font-display font-light italic tracking-[0.08em] select-none inline-block"
                style={{
                  fontSize: "clamp(1.3rem, 3vw, 2rem)",
                  color: "#9C6B1F",
                  textShadow: "0 2px 8px rgba(0,0,0,0.3), 0 0 12px rgba(255,255,255,0.4)",
                }}
              >
                COMING SOON
              </span>
            )}
          </div>
        </div>
      )}

      <div
        className="absolute bottom-0 left-0 right-0 z-10"
        style={{ height: "80px", background: "linear-gradient(to top, rgba(28,26,23,0.3), transparent)" }}
      />

      <div className="absolute bottom-4 right-4 lg:bottom-6 lg:right-8 z-30 flex items-center gap-2">
        <button
          onClick={() => scrollThumbs("left")}
          className="shrink-0 w-7 h-7 sm:rounded-md bg-black/30 backdrop-blur-sm border border-white/15 flex items-center justify-center text-white/50 hover:text-white hover:bg-black/50 transition-colors"
          aria-label="Scroll thumbnails left"
        >
          <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <path d="M15 18l-6-6 6-6" />
          </svg>
        </button>

        <div
          ref={thumbRowRef}
          className="flex items-center gap-1.5 overflow-x-auto mini-scrollbar max-w-[260px] lg:max-w-[380px]"
        >
          {SLIDES.map((s, i) => {
            const isActive = i === current;
            return (
              <button
                key={s.id}
                onClick={() => goTo(i)}
                className={`shrink-0 rounded overflow-hidden transition-all duration-300 ${
                  isActive
                    ? "ring-2 ring-white ring-offset-1 ring-offset-black/60 brightness-110"
                    : "brightness-50 hover:brightness-75 ring-1 ring-white/10"
                }`}
                style={{ width: 80, height: 45 }}
                aria-label={`Go to slide ${i + 1}`}
              >
                <img
                  src={s.image}
                  alt=""
                  className="w-full h-full object-cover"
                  draggable={false}
                />
              </button>
            );
          })}
        </div>
      </div>

      <style>{`
        .hero-section { height: 55vh; height: 55dvh; }
        @media (min-width: 640px) { .hero-section { height: 65vh; height: 65dvh; } }
        @media (min-width: 1024px) { .hero-section { height: calc(100vh - 124px); height: calc(100dvh - 124px); } }
        @keyframes heroGlide {
          0%   { opacity: 0; transform: translateY(30px) skewY(2deg); }
          100% { opacity: 1; transform: translateY(0) skewY(0); }
        }
        @keyframes heroZoomIn {
          0%   { opacity: 0; transform: scale(0.85) translateX(30px); }
          100% { opacity: 1; transform: scale(1) translateX(0); }
        }
        .mini-scrollbar::-webkit-scrollbar { height: 0; }
      `}</style>
    </section>
  );
}
