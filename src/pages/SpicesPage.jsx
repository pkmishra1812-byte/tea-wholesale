import PageHero from "../components/shared/PageHero";

export default function SpicesPage() {
  return (
    <>
      <PageHero title="Spices" subtitle="Indian Soya &amp; Spice Industries" breadcrumb="Home / Our Offering / Kitchen Products / Spices" />
      <section className="py-16 lg:py-20">
        <div className="max-w-screen-xl mx-auto px-6 lg:px-8">
          <p className="font-body text-charcoal/60 text-base max-w-2xl mb-8">
            Experience the rich aroma and flavour of our premium spices. Sourced directly from farms and processed with care, our spices bring authenticity to every dish.
          </p>
          <p className="font-body text-sm text-charcoal/40">
            Explore our range of whole spices, ground spices, and signature spice blends — crafted for consistent quality in every pack.
          </p>
        </div>
      </section>
    </>
  );
}
