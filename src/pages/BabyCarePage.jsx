import PageHero from "../components/shared/PageHero";
import { Link } from "react-router-dom";
import { NAV_LINKS } from "../data/navigation";

const babyData = NAV_LINKS.find((l) => l.path === "/our-offering").children.find((c) => c.path === "/our-offering/baby-care");

export default function BabyCarePage() {
  return (
    <>
      <PageHero
        title="Baby Care"
        subtitle="Indian Soya & Spice Industries"
        breadcrumb="Home / Our Offering / Baby Care"
      />
      <section className="py-16 lg:py-20">
        <div className="max-w-screen-xl mx-auto px-6 lg:px-8">
          <p className="font-body text-charcoal/60 text-base max-w-2xl mb-12">
            Gentle care for your little ones. Our baby care range is crafted with natural ingredients, ensuring safety and nourishment for delicate skin.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            {babyData.items.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className="group bg-cream border border-tea-100 sm:rounded-xl p-6 hover:shadow-lg hover:border-tea-300 transition-all duration-300"
              >
                <h3 className="font-display text-xl text-tea-700 group-hover:text-tea-800 transition-colors mb-2">
                  {item.label}
                </h3>
                <p className="font-body text-sm text-charcoal/50">
                  Discover our {item.label.toLowerCase()} &rarr;
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
