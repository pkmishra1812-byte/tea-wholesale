import { Link } from "react-router-dom";
import banner1 from "../../assets/banner-new-1.png";
import banner2 from "../../assets/banner-new-2.png";
import banner3 from "../../assets/banner-new-3.png";
import banner4 from "../../assets/banner-new-4.png";

const categories = [
  { name: "Tea", slug: "/our-offering/tea", img: banner1, brief: "Premium loose-leaf teas sourced from India's finest estates." },
  { name: "Foods", slug: "/our-offering/kitchen-products/rice-pulses-spices", img: banner2, brief: "Authentic whole & ground spices for every kitchen." },
  { name: "Beauty & Wellbeing", slug: "/our-offering/baby-care/product", img: banner3, brief: "Gentle, toxin-free care products for your little one." },
  { name: "Baby Care", slug: "/our-offering/beauty-products", img: banner4, brief: "Natural beauty essentials crafted with traditional wisdom." },
];

export default function TeaCategories() {
  return (
    <section className="pt-6 lg:pt-8 pb-10 lg:pb-14 bg-white">
      <div className="max-w-screen-xl mx-auto px-6 lg:px-8">
        <div className="flex gap-5 lg:gap-6 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide [&::-webkit-scrollbar]:hidden lg:justify-center">
          {categories.map((cat) => (
            <Link
              key={cat.slug}
              to={cat.slug}
               className="group shrink-0 w-[70vw] sm:w-[40vw] lg:w-[20%] snap-start sm:rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col bg-white"
            >
              <div className="aspect-[4/3] w-full overflow-hidden relative">
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-500 z-10" />
                <img
                  src={cat.img}
                  alt={cat.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="px-4 py-3 lg:px-5 lg:py-4 border-t-2 border-tea-500/30 group-hover:border-tea-500 transition-colors duration-300 bg-tea-50/0 group-hover:bg-tea-50">
                <p className="text-tea-600 text-xs lg:text-sm leading-snug max-h-0 overflow-hidden opacity-0 transition-all duration-300 group-hover:max-h-20 group-hover:opacity-100 group-hover:pb-2">
                  {cat.brief}
                </p>
                <div className="flex items-center justify-between">
                  <h3 className="font-display text-brand text-lg lg:text-xl font-bold leading-tight transition-colors duration-300">
                    {cat.name.split(" & ").map((part, i) => (
                      <span key={i}>
                        {i > 0 && (
                          <span className="font-body font-normal not-italic">
                            {" "}&amp;{" "}
                          </span>
                        )}
                        {part}
                      </span>
                    ))}
                  </h3>
                  <span
                    aria-label={`Go to ${cat.name}`}
                    className="w-7 h-7 lg:w-8 lg:h-8 rounded-full border-2 border-brand flex items-center justify-center text-brand text-sm font-bold transition-all duration-300 group-hover:bg-brand group-hover:text-white group-hover:scale-110 shrink-0"
                  >
                    →
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
