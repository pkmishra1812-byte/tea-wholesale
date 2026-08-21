import { useState, useEffect, useRef, useCallback } from "react";

import bioqtVideo from "../../assets/bioqt-vb.mp4";
import kickstarVideo from "../../assets/kickstar-vb.mp4";

const SLIDES = [
  { id: 1, video: bioqtVideo, label: "bioqt" },
  { id: 2, video: kickstarVideo, label: "kickstar" },
];

export default function HeroBanner() {
  const [current, setCurrent] = useState(0);
  const prevRef = useRef(null);
  const timerRef = useRef(null);

  const goTo = useCallback((index) => {
    if (index === current) return;
    prevRef.current = current;
    clearInterval(timerRef.current);
    setCurrent(index);
  }, [current]);

  const next = useCallback(() => {
    goTo((current + 1) % SLIDES.length);
  }, [current, goTo]);

  useEffect(() => {
    timerRef.current = setInterval(next, 6500);
    return () => clearInterval(timerRef.current);
  }, [next]);

  return (
    <section className="hero-section relative w-full overflow-hidden bg-charcoal min-h-[300px] sm:min-h-[400px] lg:min-h-[550px] max-h-[820px]">
      {SLIDES.map((s, i) => {
        const active = i === current;
        const leaving = prevRef.current !== null && i === prevRef.current;
        return (
          <div
            key={s.id}
            className="absolute inset-0 transition-all duration-1000 ease-in-out"
            style={{
              opacity: active ? 1 : 0,
              transform: active ? "scale(1)" : leaving ? "scale(1.08)" : "scale(1)",
              zIndex: 1,
            }}
          >
            <video
              src={s.video}
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover object-top"
              draggable={false}
            />
          </div>
        );
      })}

      {/* Gradient overlay */}
      <div
        className="absolute inset-0 z-10"
        style={{
          background:
            "linear-gradient(180deg, rgba(0,0,0,0.3) 0%, transparent 30%)",
        }}
      />

      {/* Bottom fade */}
      <div
        className="absolute bottom-0 left-0 right-0 z-10"
        style={{ height: "80px", background: "linear-gradient(to top, rgba(28,26,23,0.3), transparent)" }}
      />

      {/* Slide indicators */}
      <div className="absolute bottom-4 right-4 lg:bottom-6 lg:right-8 z-30 flex items-center gap-2">
        {SLIDES.map((s, i) => (
          <button
            key={s.id}
            onClick={() => goTo(i)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              i === current ? "bg-white" : "bg-white/40 hover:bg-white/60"
            }`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>

      {/* Responsive height with vh + dvh fallback */}
      <style>{`
        .hero-section { height: 55vh; height: 55dvh; }
        @media (min-width: 640px) { .hero-section { height: 65vh; height: 65dvh; } }
        @media (min-width: 1024px) { .hero-section { height: calc(100vh - 144px); height: calc(100dvh - 144px); } }
      `}</style>
    </section>
  );
}
