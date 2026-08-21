// src/pages/ISSINewsPage.jsx
import bannerImg from "../assets/tata-banner.jpg";

const news = [
  {
    category: "Company",
    date: "August 2026",
    title: "ISSI Board Approves New Manufacturing Facility in Madhubani",
    desc: "The board of Indian Soya & Spice Industries has approved the development of a state-of-the-art manufacturing facility in Madhubani, Bihar — doubling production capacity for tea and kitchen products.",
  },
  {
    category: "Partnership",
    date: "July 2026",
    title: "Strategic Alliance with Leading Tea Estates in Assam",
    desc: "ISSI enters into long-term sourcing partnerships with premium tea estates in Assam, ensuring consistent supply of handpicked, single-origin teas for the domestic and export markets.",
  },
  {
    category: "Award",
    date: "June 2026",
    title: "ISSI Recognised as Top FMCG Brand in Bihar",
    desc: "Indian Soya & Spice Industries has been recognised as one of Bihar's leading FMCG brands at the Eastern India Business Excellence Awards 2026.",
  },
  {
    category: "Product",
    date: "May 2026",
    title: "Kickstar Baby Care Range Receives Dermatologist Certification",
    desc: "Our complete baby care line — including baby powder, baby wash, and massage oil — has received independent dermatologist certification for safety and gentleness.",
  },
  {
    category: "CSR",
    date: "April 2026",
    title: "Tree Plantation Drive: 10,000 Saplings Planted Across Madhubani",
    desc: "As part of its green initiative, ISSI organised a large-scale tree plantation drive in partnership with local communities, reinforcing its commitment to environmental sustainability.",
  },
  {
    category: "Expansion",
    date: "March 2026",
    title: "Wholesale Network Grows to 40+ Garden Partners",
    desc: "Our wholesale division has expanded to over 40 garden partners across India, strengthening our supply chain for bulk orders and distribution.",
  },
];

const categories = ["All", "Company", "Partnership", "Award", "Product", "CSR", "Expansion"];

export default function ISSINewsPage() {
  return (
    <>
      {/* Banner */}
      <div className="w-full relative">
        <img
          src={bannerImg}
          alt="ISSI News"
          className="w-full h-auto object-cover max-h-[400px] lg:max-h-[500px]"
        />
        <div className="absolute inset-0 bg-black/30" />
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="font-display text-white text-3xl sm:text-4xl lg:text-5xl font-bold text-center">
            ISSI News
          </h1>
        </div>
      </div>

      {/* Content */}
      <section className="bg-white py-16 lg:py-24">
        <div className="max-w-screen-xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12 lg:mb-16">
            <h2 className="font-display text-[#0057A0] text-2xl lg:text-3xl font-bold mb-4">
              ISSI in the News
            </h2>
            <p className="font-body text-gray-500 text-sm lg:text-base max-w-2xl mx-auto">
              Company announcements, partnerships, awards, and milestones from Indian Soya & Spice Industries.
            </p>
          </div>

          {/* Category filter */}
          <div className="flex flex-wrap justify-center gap-3 mb-10 lg:mb-14">
            {categories.map((cat) => (
              <span
                key={cat}
                className="px-5 py-2 font-body text-sm font-semibold border border-gray-200 sm:rounded-full text-gray-500 hover:text-[#0057A0] hover:border-[#0057A0] transition-colors cursor-pointer"
              >
                {cat}
              </span>
            ))}
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {news.map((item, i) => (
              <div
                key={i}
                className="group bg-white border border-gray-100 sm:rounded-2xl overflow-hidden hover:shadow-[0_8px_40px_rgba(0,87,160,0.08)] transition-all duration-500"
              >
                <div className="h-2 bg-gradient-to-r from-[#0057A0] via-[#2E86DE] to-[#0057A0]" />
                <div className="p-6 lg:p-8">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="px-3 py-1 bg-[#0057A0]/10 text-[#0057A0] font-body text-xs font-bold rounded-full uppercase tracking-wider">
                      {item.category}
                    </span>
                    <span className="font-body text-xs text-gray-400">{item.date}</span>
                  </div>
                  <h3 className="font-display text-[#1a2942] text-lg font-bold mb-3 group-hover:text-[#0057A0] transition-colors leading-snug">
                    {item.title}
                  </h3>
                  <p className="font-body text-gray-500 text-sm leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
