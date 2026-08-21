import PageHero from "../components/shared/PageHero";
import { Link } from "react-router-dom";

export default function BabyPowderPage() {
  const features = [
    {
      title: "Gentle on Skin",
      description:
        "Ultra-fine, talc-free powder that glides on smoothly without clogging pores. Enriched with calming chamomile and soothing oatmeal.",
    },
    {
      title: "100% Natural Ingredients",
      description:
        "Made with cornstarch, kaolin clay, and calming botanicals. No parabens, no phthalates, no synthetic fragrances.",
    },
    {
      title: "Long-Lasting Freshness",
      description:
        "Absorbs moisture effectively to keep your baby dry and comfortable between nappy changes and after bath time.",
    },
  ];

  const keyIngredients = [
    "Cornstarch — gentle, absorbent base",
    "Kaolin Clay — naturally soothing",
    "Chamomile Extract — calms irritation",
    "Calendula Oil — promotes healthy skin",
    "Zinc Oxide — protective barrier",
  ];

  return (
    <>
      <PageHero
        title="Baby Powder"
        subtitle="Indian Soya & Spice Industries"
        breadcrumb="Home / Our Offering / Baby Care / Baby Powder"
      />
      <section className="py-16 lg:py-20 bg-cream">
        <div className="max-w-screen-xl mx-auto px-6 lg:px-8">
          <p className="font-body text-charcoal/60 text-base max-w-3xl mb-10">
            Soft and gentle baby powder that keeps your little one fresh and
            comfortable. Made with natural ingredients, free from harsh
            chemicals, and dermatologically tested for the most sensitive skin.
          </p>
          <h2 className="font-display text-2xl lg:text-3xl text-tea-700 mb-8">
            Why Parents Choose Our Baby Powder
          </h2>
          <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
            {features.map((f, i) => (
              <div
                key={i}
                className="bg-white border border-tea-100 sm:rounded-xl p-6 hover:shadow-md transition-shadow"
              >
                <h3 className="font-display text-lg text-tea-700 mb-2">
                  {f.title}
                </h3>
                <p className="font-body text-sm text-charcoal/55 leading-relaxed">
                  {f.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-screen-xl mx-auto px-6 lg:px-8 grid lg:grid-cols-2 gap-10 items-center">
          {/* ── IMAGE PLACEHOLDER ── */}
          <div className="order-2 lg:order-1 w-full aspect-[4/3] sm:rounded-2xl bg-tea-50 border border-tea-100 flex items-center justify-center">
            <div className="text-center">
              <div className="text-5xl mb-2">📷</div>
              <p className="font-body text-xs text-charcoal/35">
                [Baby Powder Pack &amp; Soft Texture]
              </p>
            </div>
          </div>
          <div className="order-1 lg:order-2">
            <h2 className="font-display text-2xl lg:text-3xl text-tea-700 mb-4">
              Key Ingredients
            </h2>
            <p className="font-body text-charcoal/60 mb-6">
              We believe in transparency. Every ingredient in our baby powder
              serves a purpose — nothing is added unnecessarily.
            </p>
            <ul className="font-body text-sm text-charcoal/55 space-y-2 mb-6">
              {keyIngredients.map((item, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="text-tea-600 mt-0.5">&#10003;</span>
                  {item}
                </li>
              ))}
            </ul>
            <div className="bg-tea-50 border border-tea-100 sm:rounded-xl p-5">
              <h3 className="font-display text-base text-tea-700 mb-1">
                Our Safety Promise
              </h3>
              <p className="font-body text-xs text-charcoal/55">
                Free from talc, parabens, phthalates, SLS, synthetic fragrances,
                and dyes. Dermatologist approved for newborns and sensitive skin
                types.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="py-16 lg:py-20 bg-tea-50">
        <div className="max-w-screen-xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="font-display text-2xl lg:text-3xl text-tea-700 mb-4">
            Order Baby Powder Wholesale
          </h2>
          <p className="font-body text-charcoal/60 max-w-xl mx-auto mb-8">
            Trusted by parents and retailers alike. Consistent quality,
            attractive packaging, and competitive wholesale pricing.
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
