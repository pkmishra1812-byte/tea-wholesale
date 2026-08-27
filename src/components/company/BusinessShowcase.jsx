// src/components/company/BusinessShowcase.jsx
import { Link } from "react-router-dom";
import Reveal from "./Reveal";
import bannerNew2 from "../../assets/banner-new-2.png";
import kickstarBanner from "../../assets/kickstar-banner.png";
import wholsaleBanner from "../../assets/wholsale-banner.png";

const BUSINESSES = [
  {
    title: "FMCG",
    subtitle: ["Food, Beverages, Spices", "Personal Care & more"],
    img: bannerNew2,
    to: "/our-offering",
  },
  {
    title: "Equipment",
    subtitle: ["Industrial, Commercial", "& Processing Solutions"],
    img: kickstarBanner,
    to: "/businesses/equipment",
  },
  {
    title: "Services",
    subtitle: ["Distribution, Supply Chain", "& Business Solutions"],
    img: wholsaleBanner,
    to: "/wholesale",
  },
];

export default function BusinessShowcase() {
  return (
    <section className="bg-white py-12 lg:py-16">
      <div className="max-w-screen-xl mx-auto px-6 lg:px-8">
        <Reveal>
          <div className="relative flex flex-col items-center">
            <div className="text-center">
              <p className="font-body text-brand text-xl lg:text-2xl font-bold leading-tight">
                Our Businesses
              </p>
              <h2 className="mt-3 font-display text-brand text-[26px] sm:text-[26px] lg:text-[37px] font-bold leading-tight">
                Solutions for Every Need
              </h2>
            </div>
            <Link
              to="/businesses"
              className="group mt-4 sm:mt-0 sm:absolute sm:right-0 sm:bottom-1 inline-flex items-center gap-2 font-body font-bold text-sm lg:text-base text-[#0057A0] hover:text-[#003d73] transition-colors pb-1"
            >
              Explore all businesses
              <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </Reveal>

        <div className="mt-8 lg:mt-10 grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {BUSINESSES.map((b, i) => (
            <Reveal key={b.title} delay={i * 140} y={40}>
              <Link
                to={b.to}
                className="group relative block h-[210px] sm:h-[225px] lg:h-[240px] sm:rounded-[24px] overflow-hidden shadow-[0_18px_50px_rgba(0,31,63,0.14)] transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_26px_64px_rgba(0,31,63,0.2)]"
              >
                <img
                  src={b.img}
                  alt={b.title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#00152C]/95 via-[#00152C]/50 to-transparent transition-colors duration-500 group-hover:from-[#00152C]" />

                {/* gold top accent */}
                <span className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#C9A227] via-[#E3B341] to-transparent opacity-80" />

                <div className="relative z-10 flex flex-col justify-end h-full p-6 lg:p-7">
                  <h3 className="font-display text-white text-2xl lg:text-3xl font-bold">{b.title}</h3>
                  <p className="mt-2 font-body text-white/70 text-sm lg:text-[15px] leading-relaxed">
                    {b.subtitle[0]}
                    <br />
                    {b.subtitle[1]}
                  </p>
                  <span className="mt-4 inline-flex w-fit items-center gap-2 rounded-full border border-[#E3B341]/70 bg-white/5 backdrop-blur-sm px-5 py-2 font-body text-[#E3B341] font-bold text-sm tracking-wide transition-colors duration-300 group-hover:bg-[#C9A227] group-hover:text-[#00152C]">
                    Explore
                    <svg
                      className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
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
      </div>
    </section>
  );
}
