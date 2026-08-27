// src/components/company/FinalCTA.jsx
import { Link } from "react-router-dom";
import Reveal from "./Reveal";

export default function FinalCTA({
  title = "Let&rsquo;s Build Something Great Together",
  subtitle = "Looking for a reliable business partner?",
  showButtons = true,
}) {
  return (
    <section className="relative bg-[#00152C] py-6 lg:py-8 overflow-hidden">
      {/* subtle glow */}
      <div className="pointer-events-none absolute -top-28 left-1/4 w-[520px] h-[300px] rounded-full bg-[#0057A0]/25 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-24 right-10 w-[380px] h-[240px] rounded-full bg-[#C9A227]/12 blur-3xl" />

      <div className="relative max-w-screen-xl mx-auto px-6 lg:px-8 flex flex-col items-center justify-center text-center">
        <Reveal>
          <h2
            className="font-display text-white text-xl sm:text-2xl lg:text-3xl font-bold leading-tight max-w-2xl mx-auto"
            dangerouslySetInnerHTML={{ __html: title }}
          />
          {subtitle && (
            <p className="mt-1.5 font-body text-white/65 text-sm lg:text-base">
              {subtitle}
            </p>
          )}
        </Reveal>

        {showButtons && (
          <Reveal delay={180}>
            <div className="flex flex-wrap justify-center gap-4 shrink-0 mt-6">
            <Link
              to="/contact"
              className="group inline-flex items-center gap-2 bg-[#C9A227] hover:bg-[#b08d1e] text-[#00152C] font-body font-bold text-sm px-6 py-2.5 rounded-full transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_10px_30px_rgba(201,162,39,0.35)]"
            >
              Contact Us
              <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </Link>
            <Link
              to="/wholesale"
              className="group inline-flex items-center gap-2 border border-[#C9A227]/70 text-[#E3B341] hover:bg-[#C9A227]/10 font-body font-bold text-sm px-6 py-2.5 rounded-full transition-all duration-300 hover:-translate-y-0.5"
            >
              Become a Partner
              <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </Link>
            </div>
          </Reveal>
        )}
      </div>
    </section>
  );
}
