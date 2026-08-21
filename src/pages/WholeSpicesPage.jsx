import PageHero from "../components/shared/PageHero";
import { Link } from "react-router-dom";

export default function WholeSpicesPage() {
  const spices = [
    {
      name: "Green Cardamom",
      description:
        "Aromatic pods with a sweet, floral essence. Essential for chai, biryani, and desserts. Sourced from the highlands of Idukki.",
    },
    {
      name: "Clove",
      description:
        "Pungent and intensely fragrant. Adds warmth to spice blends, rice dishes, and marinades. Hand-dried to preserve essential oils.",
    },
    {
      name: "Cinnamon",
      description:
        "Sweet, woody bark that brings depth to both savoury and sweet preparations. We stock both Ceylon and Cassia varieties.",
    },
    {
      name: "Black Pepper",
      description:
        "The king of spices. Bold, sharp, and universally loved. Available in Tellicherry and Malabar grades for distinct heat profiles.",
    },
    {
      name: "Bay Leaf",
      description:
        "Subtle herbal aroma that infuses slow-cooked curries, stews, and rice. Our Indian bay leaves (tej patta) offer a unique cassia-like note.",
    },
    {
      name: "Star Anise",
      description:
        "Distinctive eight-pointed star with a bold licorice flavour. A key ingredient in garam masala and slow-braised dishes.",
    },
  ];

  return (
    <>
      <PageHero
        title="Whole Spices"
        subtitle="Indian Soya & Spice Industries"
        breadcrumb="Home / Our Offering / Spices / Whole Spices"
      />
      <section className="py-16 lg:py-20 bg-cream">
        <div className="max-w-screen-xl mx-auto px-6 lg:px-8">
          <p className="font-body text-charcoal/60 text-base max-w-3xl mb-10">
            Pure, unground spices that retain their essential oils and aroma.
            Perfect for traditional cooking and fresh grinding — each spice is
            hand-sorted and cleaned before reaching your kitchen.
          </p>
          <h2 className="font-display text-2xl lg:text-3xl text-tea-700 mb-8">
            Popular Whole Spices
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {spices.map((s, i) => (
              <div
                key={i}
                className="bg-white border border-tea-100 sm:rounded-xl p-6 hover:shadow-md transition-shadow"
              >
                <h3 className="font-display text-lg text-tea-700 mb-2">
                  {s.name}
                </h3>
                <p className="font-body text-sm text-charcoal/55 leading-relaxed">
                  {s.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-screen-xl mx-auto px-6 lg:px-8 grid lg:grid-cols-2 gap-10 items-center">
          {/* ── IMAGE PLACEHOLDER ── */}
          <div className="w-full aspect-[4/3] sm:rounded-2xl bg-tea-50 border border-tea-100 flex items-center justify-center">
            <div className="text-center">
              <div className="text-5xl mb-2">📷</div>
              <p className="font-body text-xs text-charcoal/35">
                [Assorted Whole Spices Spread]
              </p>
            </div>
          </div>
          <div>
            <h2 className="font-display text-2xl lg:text-3xl text-tea-700 mb-4">
              Our Quality Promise
            </h2>
            <p className="font-body text-charcoal/60 mb-6">
              We work directly with farmers and cooperatives to source spices at
              peak ripeness. Every batch is inspected for purity, size
              consistency, and aroma before dispatch.
            </p>
            <ul className="font-body text-sm text-charcoal/55 space-y-2">
              <li className="flex items-start gap-2">
                <span className="text-tea-600 mt-0.5">&#10003;</span>
                Sourced from premium growing regions
              </li>
              <li className="flex items-start gap-2">
                <span className="text-tea-600 mt-0.5">&#10003;</span>
                Hand-sorted and machine-cleaned
              </li>
              <li className="flex items-start gap-2">
                <span className="text-tea-600 mt-0.5">&#10003;</span>
                No artificial colouring or polishing
              </li>
              <li className="flex items-start gap-2">
                <span className="text-tea-600 mt-0.5">&#10003;</span>
                Resealable packaging for freshness
              </li>
              <li className="flex items-start gap-2">
                <span className="text-tea-600 mt-0.5">&#10003;</span>
                Available in bulk and retail packs
              </li>
            </ul>
          </div>
        </div>
      </section>
      <section className="py-16 lg:py-20 bg-tea-50">
        <div className="max-w-screen-xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="font-display text-2xl lg:text-3xl text-tea-700 mb-4">
            Source Whole Spices Wholesale
          </h2>
          <p className="font-body text-charcoal/60 max-w-xl mx-auto mb-8">
            Whether you need a single spice or a curated assortment, we deliver
            consistent quality at competitive prices.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/our-offering"
              className="inline-block bg-tea-700 text-cream font-body text-sm px-8 py-3 rounded-full hover:bg-tea-800 transition-colors"
            >
              Explore All Products
            </Link>
            <Link
              to="/contact"
              className="inline-block border border-tea-700 text-tea-700 font-body text-sm px-8 py-3 rounded-full hover:bg-tea-700 hover:text-cream transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
