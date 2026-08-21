import PageHero from "../components/shared/PageHero";
import { Link } from "react-router-dom";

const categories = [
  {
    label: "Female",
    path: "/our-offering/beauty-products/female",
    icon: (
      <svg className="w-10 h-10 text-[#C8602A]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 16a4 4 0 1 0 0-8 4 4 0 0 0 0 8z" />
        <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41" />
      </svg>
    ),
    desc: "Skincare, makeup, and personal care essentials crafted for women.",
    color: "from-pink-100 to-rose-50",
    border: "border-pink-200",
    btn: "bg-pink-500 hover:bg-pink-600",
  },
  {
    label: "Male",
    path: "/our-offering/beauty-products/male",
    icon: (
      <svg className="w-10 h-10 text-[#1F3864]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="10" cy="14" r="5" />
        <path d="M19 5l-5.6 5.6M14 10l-1-1" />
        <path d="M21 2l-6 6" />
      </svg>
    ),
    desc: "Grooming, skincare, and hygiene products designed for men.",
    color: "from-blue-100 to-cyan-50",
    border: "border-blue-200",
    btn: "bg-blue-600 hover:bg-blue-700",
  },
];

export default function BeautyProductsPage() {
  return (
    <>
      <PageHero
        title="Beauty Products"
        subtitle="Indian Soya &amp; Spice Industries"
        breadcrumb="Home / Our Offering / Beauty Products"
      />
      <section className="py-16 lg:py-20">
        <div className="max-w-screen-xl mx-auto px-6 lg:px-8">
          <p className="font-body text-charcoal/60 text-base max-w-2xl mb-12">
            Discover our range of beauty and personal care products — formulated with care for every skin type. From daily essentials to premium care, we offer quality you can trust.
          </p>
          <div className="grid md:grid-cols-2 gap-8">
            {categories.map((cat) => (
              <Link
                key={cat.path}
                to={cat.path}
                className={`group relative overflow-hidden sm:rounded-2xl border ${cat.border} bg-gradient-to-br ${cat.color} p-8 hover:shadow-xl transition-all duration-300`}
              >
                <div className="flex items-start gap-5">
                  <div className="shrink-0 w-16 h-16 sm:rounded-xl bg-white/70 backdrop-blur flex items-center justify-center shadow-sm">
                    {cat.icon}
                  </div>
                  <div>
                    <h3 className="font-display text-2xl text-charcoal font-bold mb-2">
                      {cat.label}
                    </h3>
                    <p className="font-body text-sm text-charcoal/60 mb-4">
                      {cat.desc}
                    </p>
                    <span className={`inline-block text-white text-xs font-semibold px-4 py-2 rounded-full ${cat.btn} transition-colors`}>
                      Explore {cat.label} Products &rarr;
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
