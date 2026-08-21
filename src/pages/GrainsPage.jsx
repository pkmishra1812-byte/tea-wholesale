import PageHero from "../components/shared/PageHero";

export default function GrainsPage() {
  return (
    <>
      <PageHero title="Grains" subtitle="Indian Soya &amp; Spice Industries" breadcrumb="Home / Our Offering / Kitchen Products / Grains" />
      <section className="py-16 lg:py-20">
        <div className="max-w-screen-xl mx-auto px-6 lg:px-8">
          <h2 className="font-display text-[#A02020] text-3xl font-bold mb-6">Premium Grains</h2>
          <p className="font-body text-[#1F3864]/60 text-base leading-relaxed max-w-3xl">
            Premium-grade grains including rice, pulses, and cereals — sourced from trusted farms and processed to meet bulk supply standards. Consistent quality, authentic origin, and dependable delivery for your business.
          </p>
        </div>
      </section>
    </>
  );
}
