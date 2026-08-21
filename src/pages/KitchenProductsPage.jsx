import PageHero from "../components/shared/PageHero";
import { Link } from "react-router-dom";

const categories = [
  {
    title: "Spices",
    desc: "Premium whole and ground spices sourced directly from farms — bring authentic flavour to every dish.",
    path: "/our-offering/kitchen-products/spices",
    color: "bg-[#C8602A]",
  },
  {
    title: "Soya",
    desc: "High-quality soya products rich in protein, perfect for wholesalers and food manufacturers.",
    path: "/our-offering/kitchen-products/soya",
    color: "bg-[#5B8C3E]",
  },
  {
    title: "Oil",
    desc: "Pure and refined cooking oils processed under strict quality standards for consistent purity.",
    path: "/our-offering/kitchen-products/oil",
    color: "bg-[#E6A817]",
  },
  {
    title: "Grains",
    desc: "Premium-grade grains — rice, pulses, and cereals — sourced and processed for bulk supply.",
    path: "/our-offering/kitchen-products/grains",
    color: "bg-[#8D6E63]",
  },
];

export default function KitchenProductsPage() {
  return (
    <>
      <PageHero
        title="Kitchen Products"
        subtitle="Indian Soya &amp; Spice Industries"
        breadcrumb="Home / Our Offering / Kitchen Products"
      />
      <section className="py-16 lg:py-20">
        <div className="max-w-screen-xl mx-auto px-6 lg:px-8">
          <p className="font-body text-charcoal/60 text-base max-w-2xl mb-12">
            From farm-fresh spices and protein-rich soya to pure oils and premium grains — our kitchen products range is built for quality, consistency, and bulk supply.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((cat) => (
              <Link
                key={cat.path}
                to={cat.path}
                className="group bg-cream border border-tea-100 sm:rounded-xl p-6 hover:shadow-lg hover:border-tea-300 transition-all duration-300 text-center"
              >
                <div className={`w-16 h-16 sm:rounded-xl mx-auto mb-4 ${cat.color} opacity-80 flex items-center justify-center`}>
                  <span className="text-white/80 font-display text-lg font-bold tracking-wider uppercase">
                    {cat.title[0]}
                  </span>
                </div>
                <h3 className="font-display text-lg text-tea-700 group-hover:text-tea-800 transition-colors mb-2">
                  {cat.title}
                </h3>
                <p className="font-body text-sm text-charcoal/50">
                  {cat.desc}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
