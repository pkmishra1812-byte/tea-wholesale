import PageHero from "../components/shared/PageHero";

export default function OilPage() {
  return (
    <>
      <PageHero title="Oil" subtitle="Indian Soya &amp; Spice Industries" breadcrumb="Home / Our Offering / Kitchen Products / Oil" />
      <section className="py-16 lg:py-20">
        <div className="max-w-screen-xl mx-auto px-6 lg:px-8">
          <h2 className="font-display text-[#A02020] text-3xl font-bold mb-6">Cooking Oils</h2>
          <p className="font-body text-[#1F3864]/60 text-base leading-relaxed max-w-3xl">
            Pure and refined cooking oils processed under strict quality standards. Our oils deliver consistent purity, neutral flavour, and high smoke point — perfect for bulk supply to hotels, restaurants, and packaged food producers.
          </p>
        </div>
      </section>
    </>
  );
}
