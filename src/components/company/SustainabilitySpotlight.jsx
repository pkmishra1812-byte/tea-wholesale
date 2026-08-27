// src/components/company/SustainabilitySpotlight.jsx
import { Link } from "react-router-dom";
import Reveal from "./Reveal";
import sustainImg from "../../assets/sustainbility1.png";

const POINTS = ["Responsible Sourcing", "Sustainable Operations", "Community Impact"];

export default function SustainabilitySpotlight() {
  return (
    <section className="bg-white py-16 lg:py-24 overflow-hidden">
      <div className="max-w-screen-xl mx-auto px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-[52fr_48fr] gap-12 items-center">
        {/* Image */}
        <Reveal x={-70} y={0}>
          <div className="relative sm:rounded-[28px] overflow-hidden shadow-[0_26px_60px_rgba(0,31,63,0.16)]">
            <img
              src={sustainImg}
              alt="Sustainable farming at ISSI"
              className="w-full h-[320px] sm:h-[420px] lg:h-[480px] object-cover transition-transform duration-700 hover:scale-[1.04]"
              style={{ objectPosition: "center" }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#001F3F]/30 to-transparent pointer-events-none" />
          </div>
        </Reveal>

        {/* Copy */}
        <div>
          <Reveal delay={100}>
            <p className="font-body text-[#C9A227] text-xs lg:text-sm font-bold tracking-[0.35em]">
              SUSTAINABILITY
            </p>
            <h2 className="mt-4 font-display text-[#001F3F] text-3xl lg:text-[44px] font-bold leading-tight">
              Growing Responsibly
            </h2>
            <p className="mt-5 font-body text-[#687386] text-base lg:text-lg leading-relaxed max-w-xl">
              Building a better business means building a better future.
            </p>
          </Reveal>

          <div className="mt-8 space-y-4">
            {POINTS.map((p, i) => (
              <Reveal key={p} delay={240 + i * 140} x={60} y={0}>
                <div className="flex items-center gap-4 group">
                  <span className="w-9 h-[3px] bg-[#C9A227] rounded-full shrink-0 transition-all duration-300 group-hover:w-12" />
                  <span className="font-body text-[#14213D] font-bold text-base lg:text-lg tracking-wide">{p}</span>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={680}>
            <Link
              to="/sustainability"
              className="group mt-9 inline-flex items-center gap-2 border-2 border-[#0057A0] text-[#0057A0] hover:bg-[#0057A0] hover:text-white font-body font-bold text-sm lg:text-base px-7 py-3 rounded-full transition-all duration-300"
            >
              Discover Our Sustainability
              <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
