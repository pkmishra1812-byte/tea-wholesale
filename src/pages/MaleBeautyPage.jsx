import PageHero from "../components/shared/PageHero";

const products = [
  {
    name: "Face Wash",
    desc: "Deep-cleansing face wash with activated charcoal for oil-free, refreshed skin.",
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 2a3 3 0 0 0-3 3v1h6V5a3 3 0 0 0-3-3z" />
        <path d="M5 8h14l-1 13H6L5 8z" />
      </svg>
    ),
  },
  {
    name: "Beard Oil",
    desc: "Nourishing beard oil with argan and jojoba — softens, conditions, and tames.",
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 22a7 7 0 0 0 7-7c0-4-3-9-7-11-4 2-7 7-7 11a7 7 0 0 0 7 7z" />
      </svg>
    ),
  },
  {
    name: "Sunscreen",
    desc: "Non-greasy SPF 50 sunscreen designed for daily wear under any climate.",
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="12" cy="12" r="4" />
        <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41" />
      </svg>
    ),
  },
  {
    name: "Shaving Cream",
    desc: "Rich lathering shaving cream with aloe vera for a smooth, irritation-free shave.",
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="5" y="2" width="14" height="6" rx="1" />
        <path d="M7 8v12a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V8" />
      </svg>
    ),
  },
  {
    name: "Body Wash",
    desc: "Invigorating body wash with a fresh scent — cleanses without drying the skin.",
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M4 20h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2z" />
        <path d="M8 2l4 4 4-4" />
      </svg>
    ),
  },
  {
    name: "Moisturiser",
    desc: "Lightweight daily moisturiser with SPF 15 — hydrates and protects in one step.",
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="12" cy="12" r="10" />
        <path d="M8 12h8M12 8v8" />
      </svg>
    ),
  },
  {
    name: "Hair Gel",
    desc: "Strong-hold hair gel with a natural finish — stays firm without flaking.",
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M4 20h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2z" />
        <path d="M8 2l4 4 4-4" />
      </svg>
    ),
  },
  {
    name: "Face Scrub",
    desc: "Exfoliating face scrub with walnut granules — removes dead skin for a clean shave.",
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 2a3 3 0 0 0-3 3v1h6V5a3 3 0 0 0-3-3z" />
        <path d="M5 8h14l-1 13H6L5 8z" />
      </svg>
    ),
  },
];

export default function MaleBeautyPage() {
  return (
    <>
      <PageHero
        title="Beauty Products — Male"
        subtitle="Indian Soya &amp; Spice Industries"
        breadcrumb="Home / Our Offering / Beauty Products / Male"
      />
      <section className="py-16 lg:py-20 bg-gradient-to-b from-blue-50/50 to-white">
        <div className="max-w-screen-xl mx-auto px-6 lg:px-8">
          <p className="font-body text-charcoal/60 text-base max-w-2xl mb-12">
            Our men's grooming range covers everything from daily skincare to styling essentials — built for performance, made with quality ingredients.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.map((product) => (
              <div
                key={product.name}
                className="bg-white border border-blue-100 sm:rounded-xl p-6 hover:shadow-lg hover:border-blue-300 transition-all duration-300 group"
              >
                <div className="w-14 h-14 sm:rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center mb-4 group-hover:bg-blue-100 transition-colors">
                  {product.icon}
                </div>
                <h3 className="font-display text-lg text-charcoal font-semibold mb-2">
                  {product.name}
                </h3>
                <p className="font-body text-sm text-charcoal/50 leading-relaxed">
                  {product.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
