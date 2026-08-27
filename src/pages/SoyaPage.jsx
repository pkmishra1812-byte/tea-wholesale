import { Link } from "react-router-dom";
import soyaBanner from "../assets/banner-new-3.png";
import nuggetsImg from "../assets/banner-new-1.png";
import nutsImg from "../assets/banner-new-4.png";

const soyaRanges = [
  {
    title: "Shreeman Soya Nuggets",
    img: nuggetsImg,
    path: "/our-offering/kitchen-products/soya/nutrela-soya-nuggets",
    sections: [
      {
        items: ["Shreeman Soya Chunks", "Shreeman Soya Mini Chunks"],
      },
    ],
  },
  {
    title: "Shreeman Maxx Nuts",
    img: nutsImg,
    path: "/our-offering/kitchen-products/soya/shreeman-maxx-nuts",
    sections: [
      {
        items: ["Almond", "Cashew", "Walnut", "Pistachio"],
      },
    ],
  },
];

export default function SoyaPage() {
  return (
    <>
      {/* ── Soya Banner ── */}
      <div className="w-full">
        <img
          src={soyaBanner}
          alt="Soya Products"
          className="w-full h-auto object-cover max-h-[400px] lg:max-h-[500px]"
        />
      </div>

      {/* ── Statement Section ── */}
      <section className="bg-white pt-12 pb-16 lg:pb-24">
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

          <div className="grid grid-cols-1 lg:grid-cols-[45fr_55fr] gap-10 lg:gap-16 items-start">
            <h2 className="font-display text-[#1a1a2e] text-3xl sm:text-4xl xl:text-[42px] font-normal leading-[1.3]">
              Experience the blend of tradition, nutrition, and health in every bite
            </h2>
            <p className="font-body text-[#666] text-lg xl:text-xl leading-[1.6]">
              Experience the wholesome goodness of Shreeman Soya Chunks and Granules — a perfect balance of nourishment and flavour. Bring home the heart of your kitchen with meals that celebrate traditional recipes while embracing health and vitality. With Shreeman, make every dish a flavorful step toward better nutrition for you and your family.
            </p>
          </div>
        </div>
      </section>

      {/* ── Our range of products ── */}
      <section className="bg-white py-16 lg:py-24">
        <style>{`
          .soya-scroll { scrollbar-width: thin; scrollbar-color: #a02c2c #f0f0f0; }
          .soya-scroll::-webkit-scrollbar { width: 6px; }
          .soya-scroll::-webkit-scrollbar-track { background: #f0f0f0; border-radius: 999px; }
          .soya-scroll::-webkit-scrollbar-thumb { background: #a02c2c; border-radius: 999px; }
        `}</style>

        <div className="max-w-screen-xl mx-auto px-6 lg:px-8">
          <h2 className="font-body text-[#0057A0] text-[26px] sm:text-[28px] lg:text-[32px] font-medium text-center mb-12 lg:mb-16 tracking-tight">
            Our range of products
          </h2>

          <div className="flex flex-wrap justify-center gap-6 lg:gap-8">
            {soyaRanges.map((item) => (
              <div
                key={item.title}
                className="group w-full sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-22px)] bg-white rounded-2xl p-4 shadow-[0_10px_30px_rgba(0,0,0,0.08)] hover:shadow-[0_16px_40px_rgba(0,0,0,0.12)] transition-all duration-500 flex flex-col"
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
                <div className="flex flex-col flex-1 pt-5 pb-2 px-1 min-h-0">
                  <h3 className="font-body text-[#1a1a2e] text-lg lg:text-xl font-bold leading-snug">
                    {item.title}
                  </h3>

                  {/* Scrollable content area */}
                  <div className="soya-scroll mt-3 pr-2 space-y-3 max-h-[150px] overflow-y-auto">
                    {item.sections.map((sec, si) => (
                      <div key={si}>
                        {sec.heading && (
                          <p className="font-body text-[#1a1a2e] text-sm font-bold mb-1.5">
                            {sec.heading}
                          </p>
                        )}
                        <ul className="space-y-1.5">
                          {sec.items.map((it, ii) => (
                            <li key={ii} className="flex items-start gap-2">
                              <span className="mt-[7px] w-1.5 h-1.5 rounded-full bg-[#999] shrink-0" />
                              <span className="font-body text-[#666] text-sm leading-relaxed">{it}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>

                  <Link
                    to={item.path}
                    className="group/link mt-auto pt-5 inline-flex items-center gap-1.5 font-body text-sm font-bold text-[#0057A0] hover:text-[#003d73] transition-colors duration-300 w-fit"
                  >
                    <span className="border-b border-transparent group-hover/link:border-[#003d73] transition-colors duration-300 pb-0.5">
                      View Products
                    </span>
                    <svg
                      className="w-4 h-4 transition-transform duration-300 group-hover/link:translate-x-1"
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
