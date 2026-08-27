// src/components/company/FeatureCards.jsx
import { Link } from "react-router-dom";
import Reveal from "./Reveal";
import sustainImg from "../../assets/sustainbility1.png";
import mediaImg from "../../assets/banner-new-3.png";
import careersImg from "../../assets/carrers image.png";

const CARDS = [
  {
    label: "SUSTAINABILITY",
    heading: "Growing Responsibly",
    text: "Building a better business means building a better future.",
    cta: "Discover Our Sustainability",
    to: "/sustainability",
    img: sustainImg,
  },
  {
    label: "FROM OUR WORLD",
    heading: "Stay Updated",
    text: "News, insights and stories from across our journey.",
    cta: "Explore Media Center",
    to: "/news",
    img: mediaImg,
  },
  {
    label: "CAREERS",
    heading: "Build the Future With Us",
    text: "Great products begin with great people.",
    cta: "Explore Careers",
    to: "/careers",
    img: careersImg,
  },
];

export default function FeatureCards() {
  return (
    <section className="bg-white py-12 lg:py-16">
      <div className="max-w-screen-xl mx-auto px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
        {CARDS.map((c, i) => (
          <Reveal key={c.label} delay={i * 150} y={40}>
            <Link
              to={c.to}
              className="group relative block h-[210px] sm:h-[225px] lg:h-[240px] sm:rounded-[24px] overflow-hidden shadow-[0_18px_50px_rgba(0,31,63,0.14)] transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_26px_64px_rgba(0,31,63,0.2)]"
            >
              <img
                src={c.img}
                alt={c.heading}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#00152C]/95 via-[#00152C]/45 to-transparent" />

              <span className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#C9A227] via-[#E3B341] to-transparent opacity-80" />

              <div className="relative z-10 flex flex-col justify-end h-full p-7 lg:p-8">
                <p className="font-body text-[#E3B341] text-[11px] font-bold tracking-[0.3em]">
                  {c.label}
                </p>
                <h3 className="mt-2.5 font-display text-white text-2xl lg:text-[28px] font-bold leading-snug">
                  {c.heading}
                </h3>
                <p className="mt-2 font-body text-white/70 text-sm lg:text-[15px] leading-relaxed max-w-[280px]">
                  {c.text}
                </p>
                <span className="mt-4 inline-flex items-center gap-2 font-body text-[#E3B341] font-bold text-sm tracking-wide">
                  {c.cta}
                  <svg
                    className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1.5"
                    fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </span>
              </div>
            </Link>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
