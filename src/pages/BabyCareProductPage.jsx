import PageHero from "../components/shared/PageHero";
import { Link } from "react-router-dom";

const products = [
  {
    name: "Baby Massage Oil",
    desc: "Gentle, nourishing oil with natural ingredients for your baby's delicate skin.",
    path: "/our-offering/baby-care/product/massage-oil",
  },
  {
    name: "Baby Powder",
    desc: "Soft, talc-free powder that keeps baby skin dry and comfortable all day.",
    path: "/our-offering/baby-care/product/baby-powder",
  },
  {
    name: "Baby Wash",
    desc: "Mild, tear-free wash that cleanses without stripping natural moisture.",
    path: "/our-offering/baby-care/product/baby-wash",
  },
];

export default function BabyCareProductPage() {
  return (
    <>
      <PageHero
        title="Baby Care Product"
        subtitle="Indian Soya &amp; Spice Industries"
        breadcrumb="Home / Our Offering / Baby Care / Product"
      />
      <section className="py-16 lg:py-20 bg-gradient-to-b from-sky-50/50 to-white">
        <div className="max-w-screen-xl mx-auto px-6 lg:px-8">
          <p className="font-body text-charcoal/60 text-base max-w-2xl mb-12">
            Our baby care range is crafted with the purest ingredients — gentle on delicate skin and safe for everyday use.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            {products.map((product) => (
              <Link
                key={product.path}
                to={product.path}
                className="group bg-white border border-sky-100 sm:rounded-xl p-6 hover:shadow-lg hover:border-sky-300 transition-all duration-300"
              >
                <h3 className="font-display text-xl text-charcoal font-semibold mb-2 group-hover:text-sky-700 transition-colors">
                  {product.name}
                </h3>
                <p className="font-body text-sm text-charcoal/50 mb-4">
                  {product.desc}
                </p>
                <span className="text-sky-600 text-sm font-medium group-hover:underline">
                  Learn more &rarr;
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
