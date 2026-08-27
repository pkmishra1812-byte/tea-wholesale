// src/components/company/JourneyTimeline.jsx
import { useEffect, useRef, useState } from "react";
import Reveal from "./Reveal";

const MILESTONES = [
  {
    year: "2023",
    desc: "Founded with a vision to serve everyday needs with quality.",
    icon: <path strokeLinecap="round" strokeLinejoin="round" d="M5 21c0-9 4-15 14-16-1 10-7 14-14 16zm0 0c2-6 5-9 10-11" />,
  },
  {
    year: "2024",
    desc: "Expanded our product portfolio and capabilities.",
    icon: <path strokeLinecap="round" strokeLinejoin="round" d="M20 7l-8-4-8 4v10l8 4 8-4V7zm-8 4L4 7m8 4l8-4m-8 4v10" />,
  },
  {
    year: "2025",
    desc: "Strengthened our presence across multiple markets.",
    icon: <path strokeLinecap="round" strokeLinejoin="round" d="M3 17l6-6 4 4 8-8m0 0h-5m5 0v5" />,
  },
  {
    year: "2026",
    desc: "Continuing to grow, innovate and create lasting impact.",
    icon: <path strokeLinecap="round" strokeLinejoin="round" d="M5 13c4-1 7.5-3.5 10-8 3 1 5 3 6 6-4.5 2.5-7 6-8 10l-3-3c-1.5 0-3-.5-4-1.5S5 14.5 5 13z" />,
  },
];

export default function JourneyTimeline() {
  const ref = useRef(null);
  const [active, setActive] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return undefined;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setActive(true);
          io.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <section className="bg-[#F7F9FC] py-4 lg:py-6 overflow-hidden">
      <div className="max-w-screen-xl mx-auto px-6 lg:px-8">
        <Reveal>
          <div className="bg-white sm:rounded-[28px] shadow-[0_20px_54px_rgba(0,31,63,0.08)] border border-gray-100 px-6 lg:px-10 py-5">
            <h2 className="font-display text-[#001F3F] text-xl lg:text-2xl font-bold text-center leading-tight">
              A Journey of Growth and Trust
            </h2>

            <div ref={ref} className="mt-5">
              {/* ── Desktop horizontal timeline ── */}
              <div className="hidden lg:block relative">
                <div className="absolute top-[19px] left-[12%] right-[12%] h-[2px] bg-gray-200 rounded-full" />
                <div
                  className="absolute top-[19px] left-[12%] h-[2px] rounded-full bg-gradient-to-r from-[#001F3F] via-[#0057A0] to-[#C9A227] transition-all duration-[1600ms] ease-out"
                  style={{ width: active ? "76%" : "0%" }}
                />
                <div className="relative grid grid-cols-4 gap-8">
                  {MILESTONES.map((m, i) => (
                    <Reveal key={m.year} delay={i * 180} y={30}>
                      <div className={`flex flex-col items-center text-center transition-transform duration-500 ${active ? "scale-100" : "scale-95"}`}>
                        <span
                          className={`w-[40px] h-[40px] rounded-full flex items-center justify-center transition-colors duration-700 ${
                            active ? "bg-[#001F3F] shadow-[0_10px_24px_rgba(0,31,63,0.35)]" : "bg-gray-300"
                          }`}
                        >
                          <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.6}>
                            {m.icon}
                          </svg>
                        </span>
                        <p className="mt-2.5 font-display text-[#001F3F] text-lg font-bold">{m.year}</p>
                        <p className="mt-1 font-body text-[#687386] text-xs leading-relaxed max-w-[220px]">
                          {m.desc}
                        </p>
                      </div>
                    </Reveal>
                  ))}
                </div>
              </div>

              {/* ── Mobile vertical timeline ── */}
              <div className="lg:hidden relative pl-12">
                <div className="absolute left-[26px] top-1 bottom-1 w-[2px] bg-gray-200 rounded-full" />
                <div
                  className="absolute left-[26px] top-1 w-[2px] rounded-full bg-gradient-to-b from-[#001F3F] via-[#0057A0] to-[#C9A227] transition-all duration-[1600ms] ease-out"
                  style={{ height: active ? "calc(100% - 8px)" : "0%" }}
                />
                <div className="space-y-5">
                  {MILESTONES.map((m, i) => (
                    <Reveal key={m.year} delay={i * 150} x={40} y={0}>
                      <div className="relative">
                        <span
                          className={`absolute -left-12 -top-0.5 w-[46px] h-[46px] rounded-full flex items-center justify-center transition-colors duration-700 ${
                            active ? "bg-[#001F3F]" : "bg-gray-300"
                          }`}
                        >
                          <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.6}>
                            {m.icon}
                          </svg>
                        </span>
                        <p className="font-display text-[#001F3F] text-lg font-bold">{m.year}</p>
                        <p className="font-body text-[#687386] text-xs leading-relaxed mt-1 max-w-xs">
                          {m.desc}
                        </p>
                      </div>
                    </Reveal>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
