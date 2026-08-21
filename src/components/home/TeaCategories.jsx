import { Link } from "react-router-dom";
import banner1 from "../../assets/banner-new-1.png";
import banner2 from "../../assets/banner-new-2.png";
import banner3 from "../../assets/banner-new-3.png";
import banner4 from "../../assets/banner-new-4.png";

const categories = [
  { name: "Tea", slug: "/our-offering/tea", img: banner1, brief: "Premium loose-leaf teas sourced from India's finest estates." },
  { name: "Foods", slug: "/our-offering/kitchen-products/spices", img: banner2, brief: "Authentic whole & ground spices for every kitchen." },
  { name: "Beauty & Wellbeing", slug: "/our-offering/beauty-products", img: banner4, brief: "Natural beauty essentials crafted with traditional wisdom." },
  { name: "Baby Care", slug: "/our-offering/baby-care", img: banner3, brief: "Gentle, toxin-free care products for your little one." },
];

export default function TeaCategories() {
  return (
    <section className="pt-16 lg:pt-20 pb-10 lg:pb-14 bg-white">
      <div className="max-w-screen-xl mx-auto px-6 lg:px-8">
        <div className="mb-12 lg:mb-14">
          <h2 className="font-body text-brand text-xl lg:text-2xl font-bold leading-tight mb-3">
            Our Business
          </h2>
          <h2 className="font-display font-bold text-brand text-2xl sm:text-3xl lg:text-4xl leading-[1.2] tracking-tight max-w-2xl italic">
            Our Brands are Creating Desire at Scale
          </h2>
        </div>

        <div className="flex gap-5 lg:gap-6 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide [&::-webkit-scrollbar]:hidden">
          {categories.map((cat) => (
            <Link
              key={cat.name}
              to={cat.slug}
               className="group shrink-0 w-[75vw] sm:w-[45vw] lg:w-[23%] snap-start sm:rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col bg-white"
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
