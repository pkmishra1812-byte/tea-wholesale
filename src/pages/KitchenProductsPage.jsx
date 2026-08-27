import { Link } from "react-router-dom";
import foodsBanner from "../assets/banner-new-2.png";
import gheeImg from "../assets/banner-2.png";
import staplesImg from "../assets/wholsale-banner.png";
import spicesImg from "../assets/banner-1.png";
import soyaImg from "../assets/bioqt-banner.png";

const productRanges = [
  {
    title: "Soya",
    desc: "High-quality soya products rich in protein, perfect for wholesalers and food manufacturers.",
    img: soyaImg,
    path: "/our-offering/kitchen-products/soya",
  },
  {
    title: "Ghee (Clarified Butter)",
    desc: "Cow Ghee and Desi Ghee",
    img: gheeImg,
    path: "/our-offering/kitchen-products/ghee",
  },
  {
    title: "Staples",
    desc: "Atta, Rice, Pulses, Cereals and everyday kitchen essentials",
    img: staplesImg,
    path: "/our-offering/kitchen-products/staples",
  },
  {
    title: "Rice, Pulses and Spices",
    desc: "Premium Rice, Protein-rich Pulses, and authentic Whole & Ground Spices sourced directly from farms",
    img: spicesImg,
    path: "/our-offering/kitchen-products/rice-pulses-spices",
  },
];

export default function KitchenProductsPage() {
  return (
    <>
      {/* ── Foods Banner ── */}
      <div className="w-full">
        <img
          src={foodsBanner}
          alt="Foods"
          className="w-full h-auto object-cover max-h-[400px] lg:max-h-[500px]"
        />
      </div>

      {/* ── Statement Section ── */}
      <section className="bg-white pt-16 lg:pt-24 pb-10 lg:pb-12 border-t border-tea-100/60">
        <div className="max-w-screen-xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-[45fr_55fr] gap-10 lg:gap-16 items-start">
            <h2 className="font-display text-brand text-2xl lg:text-3xl leading-tight font-bold">
              After all, a healthy nation is one that eats healthy.
            </h2>
            <p className="font-body text-[#666] text-lg xl:text-xl leading-[1.6]">
              The products that include a range of atta, staples, sauces, honey, ghee, tea etc. are created with utmost care maintaining the highest standards of quality. We endeavor to make Indian Soya &amp; Spice Industries a part of your daily consumption from sun up to sunset ensuring that our consumers enjoy a good healthy diet without compromising on costs and quality. All our ingredients are aimed at the Indian consumer whether in India or overseas.
            </p>
          </div>
        </div>
      </section>

      {/* ── Our Range of Products ── */}
      <section className="bg-white pt-10 lg:pt-14 pb-16 lg:pb-24">
        <div className="max-w-screen-xl mx-auto px-6 lg:px-8">
          <h2 className="font-display text-brand text-3xl lg:text-4xl leading-tight font-bold text-center mb-12 lg:mb-16">
            A Curated Range of Everyday Excellence
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {productRanges.map((item) => (
              <div
                key={item.title}
                className="group bg-white rounded-2xl p-4 shadow-[0_10px_30px_rgba(0,0,0,0.08)] hover:shadow-[0_16px_40px_rgba(0,0,0,0.12)] transition-all duration-500 flex flex-col"
              >
                {/* Image */}
                <div className="rounded-2xl overflow-hidden aspect-square">
                  <img
                    src={item.img}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    draggable={false}
                  />
                </div>

                {/* Content */}
                <div className="flex flex-col flex-1 pt-5 pb-2 px-1">
                  <h3 className="font-body text-[#1a1a2e] text-lg lg:text-xl font-bold leading-snug">
                    {item.title}
                  </h3>
                  <p className="font-body text-[#666] text-sm lg:text-[15px] leading-relaxed mt-2">
                    {item.desc}
                  </p>
                  <Link
                    to={item.path}
                    className="mt-auto pt-6 inline-flex items-center gap-1.5 font-body text-sm font-bold text-[#0057A0] hover:text-[#003d73] transition-colors duration-300 group/link w-fit"
                  >
                    <span className="border-b border-transparent group-hover:border-[#003d73] transition-colors duration-300 pb-0.5">
                      View Products
                    </span>
                    <svg
                      className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
                      fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
