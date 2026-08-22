// src/pages/StaplesPage.jsx
import { Link } from "react-router-dom";
import staplesBanner from "../assets/banner-new-3.png";
import riceImg from "../assets/banner-new-1.png";
import pulsesImg from "../assets/banner-new-4.png";
import cerealsImg from "../assets/banner-new-3.png";
import ExploreCategories from "../components/shared/ExploreCategories";

const PACK_SIZES = ["1 kg", "5 kg", "10 kg"];

const packData = [
  {
    title: "Flour",
    name: "Shreeman Premium Flour",
    imgs: [riceImg, cerealsImg, pulsesImg],
  },
  {
    title: "Sugar",
    name: "Shreeman Premium Sugar",
    imgs: [cerealsImg, pulsesImg, riceImg],
  },
  {
    title: "Others",
    name: "Shreeman Everyday Essentials",
    imgs: [pulsesImg, riceImg, cerealsImg],
  },
];

function PackSection({ title, packs }) {
  return (
    <section className="bg-white py-16 lg:py-20 border-t border-gray-100">
      <div className="max-w-screen-xl mx-auto px-6 lg:px-8">
        <h2 className="font-display text-[#1a1a2e] text-3xl lg:text-[32px] font-bold text-center mt-2 mb-10 lg:mb-12">
          {title}
        </h2>

        <div className="flex flex-wrap justify-center gap-6">
          {packs.map((pack) => (
            <div
              key={`${pack.name}-${pack.qty}`}
              className="group w-full sm:w-[264px] bg-white rounded-xl p-5 border border-gray-200 shadow-[0_2px_10px_rgba(0,0,0,0.04)] hover:shadow-[0_10px_28px_rgba(0,0,0,0.1)] hover:-translate-y-1 transition-all duration-300 flex flex-col items-center text-center"
            >
              <img
                src={pack.img}
                alt={pack.name}
                className="h-[140px] w-full object-contain transition-transform duration-300 group-hover:scale-105"
                draggable={false}
              />
              <h3 className="font-body text-[#333] text-base font-semibold mt-5">
                {pack.name}
              </h3>
              <p className="font-body text-[#888] text-sm mt-1.5">
                Net Quantity: {pack.qty}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function StaplesPage() {
  return (
    <>
      {/* ── Banner ── */}
      <div className="w-full">
        <img
          src={staplesBanner}
          alt="Staples"
          className="w-full h-auto object-cover max-h-[400px] lg:max-h-[500px]"
        />
      </div>

      {/* ── Intro ── */}
      <section className="bg-white py-16 lg:py-20">
        <div className="max-w-screen-xl mx-auto px-6 lg:px-8">
          <Link
            to="/our-offering/kitchen-products"
            className="inline-flex items-center gap-2 font-body text-sm font-semibold text-[#0057A0] hover:text-[#003d73] transition-colors mb-8"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
            Back to Foods
          </Link>

          <h1 className="font-display text-[#1a1a2e] text-3xl sm:text-4xl lg:text-[46px] font-bold leading-tight mb-6">
            Staples
          </h1>
          <p className="font-body text-[#666] text-lg leading-[1.6] max-w-3xl">
            The foundation of every kitchen — premium rice, pulses, and cereals sourced from trusted farms and prepared with care. Wholesome, honest, and dependable, our staples bring purity and comfort to tables every single day.
          </p>
        </div>
      </section>

      {/* ── Staple Variant Sections ── */}
      {packData.map((variant) => (
        <PackSection
          key={variant.title}
          title={variant.title}
          packs={PACK_SIZES.map((qty, i) => ({
            name: variant.name,
            qty,
            img: variant.imgs[i % variant.imgs.length],
          }))}
        />
      ))}

      {/* ── Statement Section ── */}
      <section className="bg-white py-16 lg:py-24 border-t border-gray-100">
        <div className="max-w-screen-xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-[45fr_55fr] gap-10 lg:gap-16 items-start">
            <h2 className="font-display text-[#1a1a2e] text-3xl sm:text-4xl xl:text-[42px] font-normal leading-[1.3]">
              Everyday essentials, elevated with uncompromising quality.
            </h2>
            <p className="font-body text-[#666] text-lg xl:text-xl leading-[1.6]">
              Born of heritage, crafted for connoisseurs — we welcome retailers, distributors, and visionaries to grow with us. From bespoke private labelling to seamless bulk supply, every partnership is shaped around your ambition and sealed with uncompromising quality.
            </p>
          </div>
        </div>
      </section>

      {/* ── Explore Categories Carousel ── */}
      <ExploreCategories />

    </>
  );
}
