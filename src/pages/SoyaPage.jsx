import PageHero from "../components/shared/PageHero";

export default function SoyaPage() {
  return (
    <>
      <PageHero title="Soya" subtitle="Indian Soya &amp; Spice Industries" breadcrumb="Home / Our Offering / Kitchen Products / Soya" />
      <section className="py-16 lg:py-20">
        <div className="max-w-screen-xl mx-auto px-6 lg:px-8">
          <h2 className="font-display text-[#A02020] text-3xl font-bold mb-6">Soya Products</h2>
          <p className="font-body text-[#1F3864]/60 text-base leading-relaxed max-w-3xl">
            Our high-quality soya products are rich in protein and ideal for wholesalers, food manufacturers, and the health-conscious market. Processed under strict quality controls to ensure purity and nutrition.
          </p>
        </div>
      </section>
    </>
  );
}
