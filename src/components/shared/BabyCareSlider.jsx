import { useState, useEffect, useCallback, useRef } from "react";

import washImg from "../../assets/kickstar-banner.png";
import oilImg from "../../assets/baby-bath.png";
import powderImg from "../../assets/baby-video-thumb.jpg";
import doctorImg from "../../assets/baby-doctor.png";

const NAVY = "#0A3D7A";
const BLUE = "#1E88E5";
const GRAY = "#333333";

/* ── line-art icons ───────────────────────────────────────────── */
function Icon({ children, size = 28, strokeWidth = 1.6, className = "" }) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" aria-hidden className={className}>
      {children}
    </svg>
  );
}

const SPECIALISTS = ["Dermatologists", "Ophthalmologists", "Paediatricians"];

/* ── slide data ───────────────────────────────────────────────── */
const SLIDES = [
  { id: 1, tag: "Baby Wash", image: washImg, alt: "ISSI Baby Wash bottle with gentle cleansing micelles" },
  { id: 2, tag: "Baby Oil", image: oilImg, alt: "Mother applying ISSI Baby Oil during a calming bedtime massage" },
  { id: 3, tag: "Baby Powder", image: powderImg, alt: "ISSI Baby Powder keeping skin soft and dry" },
  { id: 4, tag: "Triple Tested", image: doctorImg, alt: "Doctor gently examining a baby with a stethoscope" },
];

/* ── CheckCircleIcon ──────────────────────────────────────────── */
function CheckCircleIcon({ size = 17, strokeWidth = 2.2, className = "" }) {
  return (
    <Icon size={size} strokeWidth={strokeWidth} className={className}>
      <circle cx="12" cy="12" r="9" />
      <path d="m8.5 12.2 2.4 2.4 4.6-4.8" />
    </Icon>
  );
}

/* ── main component ───────────────────────────────────────────── */
export default function BabyCareSlider() {
  const [current, setCurrent] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const timerRef = useRef(null);
  const sectionRef = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return undefined;
    const io = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { threshold: 0.15 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const goTo = useCallback(
    (index) => {
      if (index === current) return;
      setCurrent(index);
    },
    [current]
  );

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % SLIDES.length);
  }, []);

  const prev = useCallback(() => {
    setCurrent((prev) => (prev - 1 + SLIDES.length) % SLIDES.length);
  }, []);

  useEffect(() => {
    if (isPaused || !inView) return undefined;
    timerRef.current = setInterval(next, 5000);
    return () => clearInterval(timerRef.current);
  }, [next, isPaused, inView]);

  const slide = SLIDES[current];

  return (
    <section
      ref={sectionRef}
      className="w-full overflow-hidden"
      aria-label="Baby care product slider"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div
        className={`flex flex-col lg:flex-row min-h-[520px] lg:min-h-[600px] transition-all duration-700 ease-out ${
          inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
        }`}
      >
        {/* ══════════════════════════════════════════════════════
            LEFT 60% — full-bleed image slider
           ══════════════════════════════════════════════════════ */}
        <div className="relative w-full lg:w-[60%] h-72 sm:h-80 lg:h-auto min-h-[320px] overflow-hidden">
          {SLIDES.map((s, i) => (
            <div
              key={s.id}
              className="absolute inset-0 transition-all duration-700 ease-in-out"
              style={{
                opacity: i === current ? 1 : 0,
                transform:
                  i === current
                    ? "scale(1)"
                    : i < current || (i === SLIDES.length - 1 && current === 0)
                    ? "scale(1.06)"
                    : "scale(1)",
                zIndex: i === current ? 1 : 0,
              }}
            >
              <img
                src={s.image}
                alt={s.alt}
                className="w-full h-full object-cover object-center"
                draggable={false}
              />
            </div>
          ))}

          {/* dark gradient overlay for readability */}
          <div className="absolute inset-0 z-[2] bg-gradient-to-r from-transparent via-transparent to-black/20 lg:to-black/30" />

          {/* floating tag */}
          <div className="absolute top-5 left-5 z-[3]">
            <span className="inline-flex items-center rounded-full bg-white/90 backdrop-blur-sm px-4 py-1.5 text-xs font-bold uppercase tracking-wider shadow-lg" style={{ color: NAVY }}>
              {slide.tag}
            </span>
          </div>

          {/* prev / next arrows overlaid on image */}
          <div className="absolute bottom-5 left-5 z-[3] flex items-center gap-3">
            <button
              type="button"
              onClick={prev}
              aria-label="Previous slide"
              className="w-10 h-10 rounded-full flex items-center justify-center bg-white/80 backdrop-blur-sm text-[#0A3D7A] shadow-md transition-all duration-300 hover:bg-white hover:scale-110"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              type="button"
              onClick={next}
              aria-label="Next slide"
              className="w-10 h-10 rounded-full flex items-center justify-center bg-white/80 backdrop-blur-sm text-[#0A3D7A] shadow-md transition-all duration-300 hover:bg-white hover:scale-110"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>

          {/* dot indicators */}
          <div className="absolute bottom-5 right-5 z-[3] flex items-center gap-2">
            {SLIDES.map((s, i) => (
              <button
                key={s.id}
                type="button"
                onClick={() => goTo(i)}
                aria-label={`Go to ${s.tag} slide`}
                className="h-2 rounded-full transition-all duration-400"
                style={{
                  width: i === current ? 28 : 8,
                  backgroundColor: i === current ? "white" : "rgba(255,255,255,0.5)",
                }}
              />
            ))}
          </div>
        </div>

        {/* ══════════════════════════════════════════════════════
            RIGHT 40% — "Triple-tested by doctors" section
           ══════════════════════════════════════════════════════ */}
        <div
          className="w-full lg:w-[40%] flex flex-col justify-center px-8 sm:px-12 lg:px-10 xl:px-14 py-12 lg:py-0"
          style={{ backgroundColor: "#E8F4FD" }}
        >
          <div className="max-w-md mx-auto lg:mx-0">
            {/* doctor card */}
            <div className="relative w-full max-w-[180px] overflow-hidden rounded-[10px] shadow-[0_18px_44px_rgba(10,61,122,0.2)] mb-8">
              <img
                src={doctorImg}
                alt="Doctor gently examining a baby with a stethoscope"
                loading="lazy"
                className="aspect-[3/4] w-full object-cover"
              />
              <span className="absolute bottom-3 left-3 inline-flex items-center gap-1.5 rounded-full bg-[#1E88E5] px-3 py-1.5 shadow-md">
                <svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" strokeWidth={2.4} strokeLinecap="round" strokeLinejoin="round" className="text-white">
                  <circle cx="12" cy="9" r="5.5" />
                  <path d="M9 13.8 7.5 21l4.5-2.4L16.5 21 15 13.8" />
                </svg>
                <span className="text-[10px] font-bold uppercase tracking-[0.12em] text-white">
                  Derm Tested
                </span>
              </span>
            </div>

            <h2
              className="font-poppins font-bold text-[24px] sm:text-[28px] lg:text-[30px] leading-[1.2] tracking-tight"
              style={{ color: NAVY }}
            >
              Triple-tested by doctors
            </h2>

            <p
              className="font-body text-[14px] sm:text-[15px] leading-relaxed mt-4"
              style={{ color: GRAY }}
            >
              Every ISSI Baby Wash formula is reviewed and approved by
              independent specialists before it reaches your home.
            </p>

            <ul className="mt-6 space-y-3">
              {SPECIALISTS.map((specialist) => (
                <li
                  key={specialist}
                  className="flex items-center gap-2.5 text-[15px] font-bold"
                  style={{ color: BLUE }}
                >
                  <CheckCircleIcon className="shrink-0" />
                  {specialist}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
