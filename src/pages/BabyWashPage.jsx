import PageHero from "../components/shared/PageHero";
import { Link } from "react-router-dom";

export default function BabyWashPage() {
  const features = [
    {
      title: "Mild &amp; Gentle Cleansing",
      description:
        "Soap-free, sulfate-free formula that cleanses without stripping your baby&rsquo;s delicate natural oils. Leaves skin soft and comfortable.",
    },
    {
      title: "Deeply Moisturizing",
      description:
        "Enriched with aloe vera, glycerin, and shea butter to replenish moisture as it cleans. No more dry, tight-feeling skin after bath time.",
    },
    {
      title: "Tear-Free Formula",
      description:
        "pH-balanced and ophthalmologically tested. Gentle enough for hair and body — no stinging, no fuss, just happy bath time.",
    },
  ];

  const highlights = [
    "Aloe Vera — soothes and hydrates",
    "Chamomile — calms and comforts",
    "Coconut-derived cleansers — gentle and natural",
    "Vitamin E — nourishes and protects",
    "Glycerin — locks in moisture",
  ];

  return (
    <>
      <PageHero
        title="Baby Wash"
        subtitle="Indian Soya & Spice Industries"
        breadcrumb="Home / Our Offering / Baby Care / Baby Wash"
      />
      <section className="py-16 lg:py-20 bg-cream">
        <div className="max-w-screen-xl mx-auto px-6 lg:px-8">
          <p className="font-body text-charcoal/60 text-base max-w-3xl mb-10">
            Mild and moisturizing baby wash that cleanses without stripping
            natural oils. pH-balanced and dermatologically tested for your
            baby&rsquo;s delicate skin.
          </p>
          <h2 className="font-display text-2xl lg:text-3xl text-tea-700 mb-8">
            Designed for Delicate Skin
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
          <div>
            <h2 className="font-display text-2xl lg:text-3xl text-tea-700 mb-4">
              Ingredient Highlights
            </h2>
            <p className="font-body text-charcoal/60 mb-6">
              We carefully select every ingredient for its safety and efficacy.
              Our baby wash is formulated with plant-based cleansers and calming
              botanicals.
            </p>
            <ul className="font-body text-sm text-charcoal/55 space-y-2 mb-6">
              {highlights.map((item, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="text-tea-600 mt-0.5">&#10003;</span>
                  {item}
                </li>
              ))}
            </ul>
            <div className="bg-tea-50 border border-tea-100 sm:rounded-xl p-5 inline-block">
              <p className="font-display text-sm text-tea-700">
                &#9733; Dermatologist Tested &amp; Approved
              </p>
              <p className="font-body text-xs text-charcoal/55 mt-1">
                Free from parabens, sulfates, phthalates, synthetic dyes, and
                artificial fragrances.
              </p>
            </div>
          </div>
          {/* ── IMAGE PLACEHOLDER ── */}
          <div className="w-full aspect-[4/3] sm:rounded-2xl bg-tea-50 border border-tea-100 flex items-center justify-center">
            <div className="text-center">
              <div className="text-5xl mb-2">📷</div>
              <p className="font-body text-xs text-charcoal/35">
                [Baby Wash Bottle &amp; Foam]
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="py-16 lg:py-20 bg-tea-50">
        <div className="max-w-screen-xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="font-display text-2xl lg:text-3xl text-tea-700 mb-4">
            Stock Our Baby Wash
          </h2>
          <p className="font-body text-charcoal/60 max-w-xl mx-auto mb-8">
            Join the growing number of retailers and distributors choosing our
            gentle, natural baby care range. Wholesale enquiries welcome.
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
