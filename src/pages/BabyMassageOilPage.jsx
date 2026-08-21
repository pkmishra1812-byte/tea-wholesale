import PageHero from "../components/shared/PageHero";
import { Link } from "react-router-dom";

export default function BabyMassageOilPage() {
  const ingredients = [
    {
      title: "Cold-Pressed Coconut Oil",
      description:
        "Deeply moisturising and rich in lauric acid. Creates a protective barrier on delicate skin while locking in natural moisture.",
    },
    {
      title: "Almond Oil",
      description:
        "Packed with vitamin E and essential fatty acids. Nourishes and softens skin, helping to reduce dryness and irritation.",
    },
    {
      title: "Sesame Oil",
      description:
        "Warming and deeply penetrating. Traditionally used in Indian massages to strengthen bones and improve circulation.",
    },
  ];

  const howTo = [
    "Warm a small amount of oil between your palms",
    "Gently massage in circular motions on baby&rsquo;s arms, legs, and tummy",
    "Allow the oil to absorb for 5&ndash;10 minutes before bath time",
    "Pat dry with a soft towel — no need to wash off completely",
  ];

  return (
    <>
      <PageHero
        title="Baby Massage Oil"
        subtitle="Indian Soya & Spice Industries"
        breadcrumb="Home / Our Offering / Baby Care / Baby Massage Oil"
      />
      <section className="py-16 lg:py-20 bg-cream">
        <div className="max-w-screen-xl mx-auto px-6 lg:px-8">
          <p className="font-body text-charcoal/60 text-base max-w-3xl mb-10">
            Nourishing baby massage oil made with natural ingredients. Gentle on
            delicate skin, enriched with essential vitamins for healthy growth
            and development.
          </p>
          <h2 className="font-display text-2xl lg:text-3xl text-tea-700 mb-8">
            Key Ingredients
          </h2>
          <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
            {ingredients.map((ing, i) => (
              <div
                key={i}
                className="bg-white border border-tea-100 sm:rounded-xl p-6 hover:shadow-md transition-shadow"
              >
                <h3 className="font-display text-lg text-tea-700 mb-2">
                  {ing.title}
                </h3>
                <p className="font-body text-sm text-charcoal/55 leading-relaxed">
                  {ing.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-screen-xl mx-auto px-6 lg:px-8 grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="font-display text-2xl lg:text-3xl text-tea-700 mb-4">
              Benefits &amp; How to Use
            </h2>
            <p className="font-body text-charcoal/60 mb-4">
              Daily massage with our natural oil blend helps strengthen the bond
              between parent and baby while nourishing the skin. Free from
              mineral oils, parabens, and synthetic fragrances.
            </p>
            <ul className="font-body text-sm text-charcoal/55 space-y-2 mb-6">
              <li className="flex items-start gap-2">
                <span className="text-tea-600 mt-0.5">&#10003;</span>
                Dermatologically tested
              </li>
              <li className="flex items-start gap-2">
                <span className="text-tea-600 mt-0.5">&#10003;</span>
                pH-balanced for baby&rsquo;s delicate skin
              </li>
              <li className="flex items-start gap-2">
                <span className="text-tea-600 mt-0.5">&#10003;</span>
                Suitable from birth onwards
              </li>
              <li className="flex items-start gap-2">
                <span className="text-tea-600 mt-0.5">&#10003;</span>
                Non-greasy, quick-absorbing formula
              </li>
            </ul>
            <h3 className="font-display text-lg text-tea-700 mb-3">
              How to Use
            </h3>
            <ol className="font-body text-sm text-charcoal/55 space-y-2">
              {howTo.map((step, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="text-tea-600 font-bold min-w-[20px]">
                    {i + 1}.
                  </span>
                  {step}
                </li>
              ))}
            </ol>
          </div>
          {/* ── IMAGE PLACEHOLDER ── */}
          <div className="w-full aspect-[4/3] sm:rounded-2xl bg-tea-50 border border-tea-100 flex items-center justify-center">
            <div className="text-center">
              <div className="text-5xl mb-2">📷</div>
              <p className="font-body text-xs text-charcoal/35">
                [Baby Massage Oil Bottle &amp; Application]
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="py-16 lg:py-20 bg-tea-50">
        <div className="max-w-screen-xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="font-display text-2xl lg:text-3xl text-tea-700 mb-4">
            Stock Our Baby Massage Oil
          </h2>
          <p className="font-body text-charcoal/60 max-w-xl mx-auto mb-8">
            Join trusted retailers and distributors who choose our baby care
            range. Wholesale and bulk orders welcome.
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
