// src/components/company/MediaEditorial.jsx
import { Link } from "react-router-dom";
import Reveal from "./Reveal";
import bannerNew1 from "../../assets/banner-new-1.png";
import bannerNew3 from "../../assets/banner-new-3.png";
import bannerNew4 from "../../assets/banner-new-4.png";

const CARDS = [
  {
    category: "News",
    title: "ISSI expands its Pan-India distribution network",
    desc: "New warehousing and logistics partnerships bring everyday essentials closer to every retailer.",
    img: bannerNew1,
  },
  {
    category: "Insights",
    title: "What modern Indian kitchens demand in 2026",
    desc: "A look at shifting tastes, premiumisation and the rise of conscious consumption.",
    img: bannerNew3,
  },
  {
    category: "Events",
    title: "ISSI at the National FMCG Summit",
    desc: "Leadership conversations on scale, sustainability and the future of Indian FMCG.",
    img: bannerNew4,
  },
];

export default function MediaEditorial() {
  return (
    <section className="bg-[#F7F9FC] py-16 lg:py-24 overflow-hidden">
      <div className="max-w-screen-xl mx-auto px-6 lg:px-8">
        <Reveal>
          <h2 className="font-display text-[#001F3F] text-3xl lg:text-[44px] font-bold leading-tight">
            From Our World
          </h2>
          <div className="w-14 h-[3px] bg-[#C9A227] rounded-full mt-4" />
        </Reveal>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {CARDS.map((c, i) => (
            <Reveal key={c.category} delay={i * 140} y={40}>
              <article className="group bg-white sm:rounded-[20px] overflow-hidden shadow-[0_14px_44px_rgba(0,31,63,0.10)] transition-all duration-500 hover:-translate-y-1.5 hover:shadow-[0_22px_54px_rgba(0,31,63,0.16)]">
                <div className="overflow-hidden">
                  <img
                    src={c.img}
                    alt={c.title}
                    className="w-full h-52 object-cover transition-transform duration-700 ease-out group-hover:scale-[1.06]"
                  />
                </div>
                <div className="p-6">
                  <span className="font-body text-[#C9A227] text-xs font-bold tracking-[0.25em] uppercase">
                    {c.category}
                  </span>
                  <h3 className="mt-2.5 font-display text-[#001F3F] text-lg lg:text-xl font-bold leading-snug">
                    {c.title}
                  </h3>
                  <p className="mt-2 font-body text-[#687386] text-sm leading-relaxed">
                    {c.desc}
                  </p>
                  <Link
                    to="/news"
                    className="mt-4 inline-flex items-center gap-1.5 font-body text-sm font-bold text-[#0057A0] hover:text-[#003d73] transition-colors"
                  >
                    Read More
                    <svg
                      className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1"
                      fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
