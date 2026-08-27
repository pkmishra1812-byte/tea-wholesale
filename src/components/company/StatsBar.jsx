// src/components/company/StatsBar.jsx
import { useEffect, useRef, useState } from "react";

const STATS = [
  { value: 2023, suffix: "", label: "Founded", icon: "calendar" },
  { value: 4, suffix: "+", label: "Business Verticals", icon: "building" },
  { value: 100, suffix: "+", label: "Everyday Products", icon: "box" },
  { value: null, label: "Reach", text: "Pan India", icon: "pin" },
];

function CountUp({ target, suffix }) {
  const ref = useRef(null);
  const [display, setDisplay] = useState(0);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return undefined;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const start = performance.now();
          const dur = 1600;
          const tick = (now) => {
            const p = Math.min((now - start) / dur, 1);
            const eased = 1 - Math.pow(1 - p, 3);
            setDisplay(Math.round(target * eased));
            if (p < 1) requestAnimationFrame(tick);
          };
          requestAnimationFrame(tick);
          io.disconnect();
        }
      },
      { threshold: 0.4 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [target]);

  return (
    <span ref={ref}>
      {display}
      {suffix}
    </span>
  );
}

const ICONS = {
  calendar: <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2z" />,
  building: <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v16m14 0H5m6-4v4m4-12h.01M11 9h.01M15 13h.01M9 13h.01" />,
  box: <path strokeLinecap="round" strokeLinejoin="round" d="M20 7L12 3 4 7v10l8 4 8-4V7zm-8 4L4 7m8 4l8-4m-8 4v10" />,
  pin: <path strokeLinecap="round" strokeLinejoin="round" d="M12 21s-7-5.5-7-11a7 7 0 1 1 14 0c0 5.5-7 11-7 11zm0-8a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />,
};

export default function StatsBar() {
  return (
    <section className="relative z-10 bg-white pb-12 lg:pb-16">
      <div className="max-w-screen-xl mx-auto px-6 lg:px-8">
        <div
          className="-mt-24 lg:-mt-28 bg-white sm:rounded-[24px] shadow-[0_24px_60px_rgba(0,31,63,0.10)] border border-gray-100 grid grid-cols-2 lg:grid-cols-4"
        >
          {STATS.map((s, i) => (
            <div
              key={s.label}
              className={`flex flex-col items-center text-center px-4 py-4 lg:py-5 ${
                i % 2 === 1 ? "border-l border-gray-100" : ""
              } ${i >= 2 ? "border-t lg:border-t-0 border-gray-100" : ""} ${
                i > 0 ? "lg:border-l lg:border-gray-100" : ""
              }`}
            >
              <svg
                className="w-7 h-7 text-[#0057A0] mb-1.5 transition-transform duration-500 group-hover:scale-110"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={1.6}
              >
                {ICONS[s.icon]}
              </svg>
              <p className="font-display text-[#001F3F] text-xl lg:text-2xl font-bold leading-none">
                {s.value === null ? s.text : <CountUp target={s.value} suffix={s.suffix} />}
              </p>
              <p className="font-body text-[#687386] text-xs mt-1 tracking-wide">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
