// src/pages/EverydayUpdatesPage.jsx
import bannerImg from "../assets/tata-banner.jpg";

const updates = [
  {
    date: "21 Aug 2026",
    title: "New Batch of Assam CTC Tea Ready for Dispatch",
    text: "Fresh harvest from our Assam garden partners — premium CTC grade, full-bodied flavour, ready for wholesale orders.",
  },
  {
    date: "19 Aug 2026",
    title: "Monsoon Harvest: Fresh Cardamom Arriving This Week",
    text: "High-altitude cardamom from the Western Ghats — intense aroma, bold flavour, ideal for blending and retail.",
  },
  {
    date: "17 Aug 2026",
    title: "Warehouse Update: Full Stock Available Across All Categories",
    text: "Tea, spices, soya, oils, and grains — all categories fully stocked and ready for immediate dispatch from our Madhubani facility.",
  },
  {
    date: "15 Aug 2026",
    title: "Independence Day: ISSI Celebrates with Community Health Camp",
    text: "Our CSR team organised health camps across five tea garden villages, providing free check-ups and medicines to over 800 families.",
  },
  {
    date: "12 Aug 2026",
    title: "Quality Alert: New Lab Testing Protocol Implemented",
    text: "ISSI has introduced enhanced multi-stage quality testing across all product lines — ensuring every batch meets NABL standards.",
  },
  {
    date: "10 Aug 2026",
    title: "Price Update: Competitive Wholesale Rates for Q3",
    text: "Revised wholesale pricing for Q3 2026 is now available — contact our sales team for the latest rate card.",
  },
  {
    date: "8 Aug 2026",
    title: "Kickstar Baby Care: Now Available in 500+ Retail Outlets",
    text: "Our baby care range continues to expand — now stocked in over 500 retail outlets across Bihar, Jharkhand, and Nepal.",
  },
  {
    date: "5 Aug 2026",
    title: "New Packaging: Eco-Friendly Pouches Rolling Out",
    text: "We are transitioning all tea pouches to compostable, plant-based packaging — expected completion by end of year.",
  },
];

export default function EverydayUpdatesPage() {
  return (
    <>
      {/* Banner */}
      <div className="w-full relative">
        <img
          src={bannerImg}
          alt="Everyday Updates"
          className="w-full h-auto object-cover max-h-[400px] lg:max-h-[500px]"
        />
        <div className="absolute inset-0 bg-black/30" />
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="font-display text-white text-3xl sm:text-4xl lg:text-5xl font-bold text-center">
            Everyday Updates
          </h1>
        </div>
      </div>

      {/* Content */}
      <section className="bg-white py-16 lg:py-24">
        <div className="max-w-screen-xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12 lg:mb-16">
            <h2 className="font-display text-[#0057A0] text-2xl lg:text-3xl font-bold mb-4">
              Daily happenings at ISSI
            </h2>
            <p className="font-body text-gray-500 text-sm lg:text-base max-w-2xl mx-auto">
              Quick updates on harvests, dispatches, quality checks, events, and everything happening across our operations.
            </p>
          </div>

          {/* Timeline */}
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-4 lg:left-8 top-0 bottom-0 w-px bg-gradient-to-b from-[#0057A0]/20 via-[#0057A0]/10 to-transparent" />

            <div className="space-y-8">
              {updates.map((item, i) => (
                <div key={i} className="relative pl-12 lg:pl-20">
                  {/* Dot */}
                  <div className="absolute left-2.5 lg:left-6.5 top-1.5 w-3 h-3 bg-[#0057A0] rounded-full border-2 border-white shadow-sm" />

                  <div className="group bg-white border border-gray-100 sm:rounded-2xl p-6 lg:p-8 hover:shadow-[0_8px_40px_rgba(0,87,160,0.08)] transition-all duration-500">
                    <span className="font-body text-xs text-[#0057A0] font-bold uppercase tracking-wider">
                      {item.date}
                    </span>
                    <h3 className="font-display text-[#1a2942] text-lg font-bold mt-2 mb-2 group-hover:text-[#0057A0] transition-colors">
                      {item.title}
                    </h3>
                    <p className="font-body text-gray-500 text-sm leading-relaxed">
                      {item.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
