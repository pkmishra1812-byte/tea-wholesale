import PageHero from "../components/shared/PageHero";
import { Link } from "react-router-dom";

export default function GroundSpicesPage() {
  const spices = [
    {
      name: "Turmeric Powder",
      description:
        "Vibrant golden-yellow with a warm, earthy flavour. Rich in curcumin. Ideal for curries, rice, and health tonics.",
    },
    {
      name: "Red Chilli Powder",
      description:
        "Made from carefully dried Kashmiri and Guntur chillies. Offers vibrant colour and adjustable heat levels.",
    },
    {
      name: "Coriander Powder",
      description:
        "Mildly sweet with citrus undertones. A foundational spice in Indian cooking that adds body and aroma to gravies.",
    },
    {
      name: "Cumin Powder",
      description:
        "Earthy and slightly nutty. Roasted before grinding to unlock deeper flavour. A staple in spice blends and tempering.",
    },
    {
      name: "Garam Masala",
      description:
        "Our signature blend of cinnamon, cardamom, clove, and more. Aromatic and warming — the finishing touch for curries and pulao.",
    },
  ];

  const steps = [
    "Farm-fresh spices sourced directly from growers",
    "Cleaned and sun-dried under hygienic conditions",
    "Cold-ground to preserve volatile oils and flavour",
    "Passed through fine mesh sieves for uniform texture",
    "Packed in airtight, moisture-resistant packaging",
  ];

  return (
    <>
      <PageHero
        title="Ground Spices"
        subtitle="Indian Soya & Spice Industries"
        breadcrumb="Home / Our Offering / Spices / Ground Spices"
      />
      <section className="py-16 lg:py-20 bg-cream">
        <div className="max-w-screen-xl mx-auto px-6 lg:px-8">
          <p className="font-body text-charcoal/60 text-base max-w-3xl mb-10">
            Finely ground spices ready to use. Processed under strict quality
            controls to ensure purity, colour, and aroma in every pack. No
            adulterants, no fillers — just pure spice.
          </p>
          <h2 className="font-display text-2xl lg:text-3xl text-tea-700 mb-8">
            Our Ground Spices
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
          <div>
            <h2 className="font-display text-2xl lg:text-3xl text-tea-700 mb-4">
              Our Quality Process
            </h2>
            <p className="font-body text-charcoal/60 mb-6">
              From field to pack, every step is designed to preserve the natural
              essence of our spices. We use modern milling techniques while
              respecting traditional knowledge.
            </p>
            <ol className="font-body text-sm text-charcoal/55 space-y-3">
              {steps.map((step, i) => (
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
                [Ground Spices in Bowls]
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="py-16 lg:py-20 bg-tea-50">
        <div className="max-w-screen-xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="font-display text-2xl lg:text-3xl text-tea-700 mb-4">
            Order Ground Spices in Bulk
          </h2>
          <p className="font-body text-charcoal/60 max-w-xl mx-auto mb-8">
            From single spices to comprehensive wholesale assortments, we supply
            businesses with the quality they can trust.
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
