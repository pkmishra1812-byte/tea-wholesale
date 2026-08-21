import PageHero from "../components/shared/PageHero";
import { Link } from "react-router-dom";

export default function SpiceBlendsPage() {
  const blends = [
    {
      name: "Garam Masala",
      description:
        "Our flagship blend of cinnamon, cardamom, cloves, cumin, and black pepper. Aromatic and warming — indispensable in North Indian cuisine.",
    },
    {
      name: "Chai Masala",
      description:
        "A fragrant blend of cardamom, ginger, cinnamon, clove, and black pepper. Stir a pinch into your tea for an authentic masala chai experience.",
    },
    {
      name: "Biryani Masala",
      description:
        "A complex layering of mace, nutmeg, star anise, shahi jeera, and rose petals. Designed for layered rice dishes that impress.",
    },
    {
      name: "Curry Powder",
      description:
        "A versatile blend of turmeric, coriander, cumin, fenugreek, and chilli. Mildly spiced and perfect for everyday curries and stews.",
    },
    {
      name: "Tandoori Masala",
      description:
        "Vibrant red-orange blend with cayenne, ginger, garlic, and dried fenugreek leaves. Ideal for grilling, roasting, and baking.",
    },
  ];

  return (
    <>
      <PageHero
        title="Spice Blends"
        subtitle="Indian Soya & Spice Industries"
        breadcrumb="Home / Our Offering / Spices / Spice Blends"
      />
      <section className="py-16 lg:py-20 bg-cream">
        <div className="max-w-screen-xl mx-auto px-6 lg:px-8">
          <p className="font-body text-charcoal/60 text-base max-w-3xl mb-10">
            Expertly crafted spice blends that bring authentic Indian flavours
            to your kitchen. From garam masala to curry powders, each blend is
            perfectly balanced by our master blenders.
          </p>
          <h2 className="font-display text-2xl lg:text-3xl text-tea-700 mb-8">
            Signature Blends
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {blends.map((b, i) => (
              <div
                key={i}
                className="bg-white border border-tea-100 sm:rounded-xl p-6 hover:shadow-md transition-shadow"
              >
                <h3 className="font-display text-lg text-tea-700 mb-2">
                  {b.name}
                </h3>
                <p className="font-body text-sm text-charcoal/55 leading-relaxed">
                  {b.description}
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
                [Spice Blend Ingredients &amp; Bowls]
              </p>
            </div>
          </div>
          <div>
            <h2 className="font-display text-2xl lg:text-3xl text-tea-700 mb-4">
              Custom Blending Service
            </h2>
            <p className="font-body text-charcoal/60 mb-6">
              Need a unique blend for your brand or menu? Our team works with you
              to develop proprietary spice blends tailored to your taste profile,
              heat preference, and application.
            </p>
            <ul className="font-body text-sm text-charcoal/55 space-y-2 mb-6">
              <li className="flex items-start gap-2">
                <span className="text-tea-600 mt-0.5">&#10003;</span>
                Bespoke formulation &amp; recipe development
              </li>
              <li className="flex items-start gap-2">
                <span className="text-tea-600 mt-0.5">&#10003;</span>
                Private label packaging options
              </li>
              <li className="flex items-start gap-2">
                <span className="text-tea-600 mt-0.5">&#10003;</span>
                Consistent batch-to-batch quality
              </li>
              <li className="flex items-start gap-2">
                <span className="text-tea-600 mt-0.5">&#10003;</span>
                Minimum order quantities to suit your scale
              </li>
            </ul>
            <Link
              to="/contact"
              className="inline-block bg-tea-700 text-cream font-body text-sm px-6 py-3 rounded-full hover:bg-tea-800 transition-colors"
            >
              Enquire About Custom Blends
            </Link>
          </div>
        </div>
      </section>
      <section className="py-16 lg:py-20 bg-tea-50">
        <div className="max-w-screen-xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="font-display text-2xl lg:text-3xl text-tea-700 mb-4">
            Stock Our Signature Blends
          </h2>
          <p className="font-body text-charcoal/60 max-w-xl mx-auto mb-8">
            Perfect for restaurants, hotels, and retail. Wholesale pricing,
            timely delivery, and blends that keep your customers coming back.
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
