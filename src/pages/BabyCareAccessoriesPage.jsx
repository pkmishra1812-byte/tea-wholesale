import PageHero from "../components/shared/PageHero";

const accessories = [
  {
    name: "Baby Wipes",
    desc: "Alcohol-free, hypoallergenic wipes infused with aloe vera for gentle cleansing.",
  },
  {
    name: "Diaper Cream",
    desc: "Zinc-based barrier cream that soothes and prevents diaper rash.",
  },
  {
    name: "Baby Lotion",
    desc: "Lightweight daily moisturiser that keeps baby's skin soft and hydrated.",
  },
  {
    name: "Nappy Bags",
    desc: "Eco-friendly, unscented disposal bags for hygienic nappy changing.",
  },
  {
    name: "Teething Ring",
    desc: "BPA-free, chilled teether that soothes sore gums during teething.",
  },
  {
    name: "Baby Comb & Brush Set",
    desc: "Soft-bristle brush and fine-tooth comb designed for delicate baby hair.",
  },
];

export default function BabyCareAccessoriesPage() {
  return (
    <>
      <PageHero
        title="Baby Care Accessories"
        subtitle="Indian Soya &amp; Spice Industries"
        breadcrumb="Home / Our Offering / Baby Care / Accessories"
      />
      <section className="py-16 lg:py-20 bg-gradient-to-b from-teal-50/50 to-white">
        <div className="max-w-screen-xl mx-auto px-6 lg:px-8">
          <p className="font-body text-charcoal/60 text-base max-w-2xl mb-12">
            Practical accessories that make baby care easier and more comfortable — designed with safety and convenience in mind.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {accessories.map((item) => (
              <div
                key={item.name}
                className="bg-white border border-teal-100 sm:rounded-xl p-6 hover:shadow-lg hover:border-teal-300 transition-all duration-300 group"
              >
                <h3 className="font-display text-lg text-charcoal font-semibold mb-2 group-hover:text-teal-700 transition-colors">
                  {item.name}
                </h3>
                <p className="font-body text-sm text-charcoal/50 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
