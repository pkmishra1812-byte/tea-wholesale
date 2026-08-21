// src/pages/OurOfferingPage.jsx
import OfferingHeroBanner from "../components/shared/OfferingHeroBanner";
import { Link } from "react-router-dom";

const categories = [
  {
    title: "Tea",
    tagline: "From the garden to your cup",
    desc: "Explore our premium selection of green, black, and herbal teas sourced from the finest estates across India. Every leaf is handpicked, graded, and packed to preserve its natural aroma and flavour.",
    imageLabel: "Tea Category",
    emoji: "🍃",
    link: "/our-offering/tea",
  },
  {
    title: "Spices",
    tagline: "Pure, potent, and aromatic",
    desc: "Our spice range spans whole, ground, and blended varieties — from the bold warmth of Assam turmeric to the floral notes of Munnar cardamom. Sourced directly from growers for unmatched freshness.",
    imageLabel: "Spices Category",
    emoji: "🌶️",
    link: "/our-offering/spices",
  },
  {
    title: "Baby Care",
    tagline: "Gentle care for little ones",
    desc: "Crafted with natural ingredients and inspired by traditional Indian wellness practices, our baby care line includes massage oil, powder, and wash — all dermatologically tested and toxin-free.",
    imageLabel: "Baby Care Category",
    emoji: "👶",
    link: "/our-offering/baby-care",
  },
];

function CategoryCard({ title, tagline, desc, imageLabel, emoji, link, index }) {
  return (
    <div className={`flex flex-col lg:flex-row items-center gap-10 lg:gap-16 ${index > 0 ? "mt-20 lg:mt-28" : ""}`}>
      <div className={`w-full lg:w-1/2 ${index % 2 === 1 ? "lg:order-2" : ""}`}>
        <p className="font-body text-xs tracking-widest uppercase text-tea-600 mb-3">{tagline}</p>
        <h2 className="font-display text-tea-800 text-3xl lg:text-4xl font-bold leading-tight mb-5">{title}</h2>
        <p className="font-body text-charcoal/60 text-base leading-relaxed mb-6">{desc}</p>
        <Link
          to={link}
          className="btn-primary rounded-full inline-flex items-center gap-2"
        >
          Explore {title}
          <span>&rarr;</span>
        </Link>
      </div>
      <div className={`w-full lg:w-1/2 ${index % 2 === 1 ? "lg:order-1" : ""}`}>
        <div className="w-full aspect-[4/3] sm:rounded-2xl bg-tea-50 border border-tea-100 flex items-center justify-center">
          <div className="text-center">
            <div className="text-5xl mb-2">{emoji}</div>
            <p className="font-body text-xs text-charcoal/35">[{imageLabel}]</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function OurOfferingPage() {
  return (
    <>
      <OfferingHeroBanner />

      <section className="bg-cream py-20 lg:py-28">
        <div className="max-w-screen-xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="font-body text-xs tracking-widest uppercase text-tea-600 mb-3">
              What We Offer
            </p>
            <h2 className="font-display text-tea-800 text-3xl lg:text-4xl font-bold leading-tight mb-5">
              Three Categories. One Standard of Excellence.
            </h2>
            <p className="font-body text-charcoal/55 text-base max-w-2xl mx-auto">
              Whether you're a retailer, restaurateur, or distributor — our product range is built to
              meet the highest standards of quality, consistency, and authenticity.
            </p>
          </div>

          {categories.map((cat, i) => (
            <CategoryCard key={cat.title} {...cat} index={i} />
          ))}
        </div>
      </section>

      <section className="bg-tea-800 py-16 lg:py-20">
        <div className="max-w-screen-xl mx-auto px-6 lg:px-8 text-center">
          <p className="font-body text-xs tracking-widest uppercase text-tea-200/60 mb-3">
            Not Sure Where to Start?
          </p>
          <h2 className="font-display text-cream text-3xl lg:text-4xl font-bold mb-5 leading-tight">
            Let Our Team Guide You
          </h2>
          <p className="font-body text-cream/65 text-base max-w-xl mx-auto mb-8">
            Tell us about your business needs and we'll recommend the perfect product mix, volumes,
            and pricing tailored to your market.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/contact"
              className="inline-block font-body text-sm tracking-wide bg-cream text-tea-800 font-semibold px-8 py-3.5 rounded-full hover:bg-tea-50 transition-colors duration-200"
            >
              Get in Touch
            </Link>
            <Link
              to="/wholesale"
              className="inline-block font-body text-sm tracking-wide border border-cream/40 text-cream px-8 py-3.5 rounded-full hover:bg-tea-700 transition-colors duration-200"
            >
              View Wholesale Pricing
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
