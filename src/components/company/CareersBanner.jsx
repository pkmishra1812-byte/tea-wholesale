// src/components/company/CareersBanner.jsx
import { Link } from "react-router-dom";
import Reveal from "./Reveal";
import careersImg from "../../assets/carrers image.png";

export default function CareersBanner() {
  return (
    <section className="relative overflow-hidden">
      <img
        src={careersImg}
        alt="Careers at ISSI"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-[#00152C]/95 via-[#00152C]/75 to-[#00152C]/45" />

      <div className="relative max-w-screen-xl mx-auto px-6 lg:px-8 py-20 lg:py-28">
        <Reveal>
          <h2 className="font-display text-white text-3xl lg:text-[44px] font-bold leading-tight max-w-xl">
            Build the Future With Us
          </h2>
          <p className="mt-4 font-body text-white/70 text-base lg:text-lg max-w-md">
            Great products begin with great people.
          </p>
          <Link
            to="/careers"
            className="group mt-8 inline-flex items-center gap-2 bg-[#C9A227] hover:bg-[#b08d1e] text-[#00152C] font-body font-bold text-sm lg:text-base px-7 py-3.5 rounded-full transition-all duration-300 hover:-translate-y-0.5"
          >
            Explore Careers
            <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
