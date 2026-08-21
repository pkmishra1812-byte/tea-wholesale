// src/pages/NewsCenterPage.jsx
import bannerImg from "../assets/tata-banner.jpg";

const newsItems = [
  {
    date: "August 2026",
    title: "ISSI Expands Distribution Network Across Eastern India",
    excerpt: "Indian Soya & Spice Industries announces the expansion of its distribution footprint across Bihar, Jharkhand, and Odisha — strengthening supply chain reliability for wholesale partners.",
  },
  {
    date: "July 2026",
    title: "New Product Launch: Next Level Herbal Infusions",
    excerpt: "Introducing a premium range of herbal infusions crafted from handpicked botanicals — blending traditional wellness with modern flavour profiles for the health-conscious consumer.",
  },
  {
    date: "May 2026",
    title: "Sustainability Report 2025–26 Released",
    excerpt: "Our annual sustainability report highlights progress in regenerative agriculture, plastic elimination, and community empowerment across tea-growing regions.",
  },
  {
    date: "April 2026",
    title: "ISSI Partners with National Skill Development Corporation",
    excerpt: "A new partnership to provide vocational training and employment opportunities for youth in rural Bihar, focused on FMCG operations and supply chain management.",
  },
];

export default function NewsCenterPage() {
  return (
    <>
      {/* Banner */}
      <div className="w-full relative">
        <img
          src={bannerImg}
          alt="News Center"
          className="w-full h-auto object-cover max-h-[400px] lg:max-h-[500px]"
        />
        <div className="absolute inset-0 bg-black/30" />
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="font-display text-white text-3xl sm:text-4xl lg:text-5xl font-bold text-center">
            News Center
          </h1>
        </div>
      </div>

      {/* Content */}
      <section className="bg-white py-16 lg:py-24">
        <div className="max-w-screen-xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12 lg:mb-16">
            <h2 className="font-display text-[#0057A0] text-2xl lg:text-3xl font-bold mb-4">
              Latest from News Center
            </h2>
            <p className="font-body text-gray-500 text-sm lg:text-base max-w-2xl mx-auto">
              Stay updated with the latest announcements, milestones, and developments from Indian Soya & Spice Industries.
            </p>
          </div>

          <div className="space-y-6">
            {newsItems.map((item, i) => (
              <div
                key={i}
                className="group bg-white border border-gray-100 sm:rounded-2xl p-6 lg:p-8 hover:shadow-[0_8px_40px_rgba(0,87,160,0.08)] transition-all duration-500"
              >
                <div className="flex flex-col sm:flex-row sm:items-start gap-4">
                  <span className="font-body text-xs text-[#0057A0] font-bold uppercase tracking-wider shrink-0">
                    {item.date}
                  </span>
                  <div className="flex-1">
                    <h3 className="font-display text-[#1a2942] text-lg lg:text-xl font-bold mb-2 group-hover:text-[#0057A0] transition-colors">
                      {item.title}
                    </h3>
                    <p className="font-body text-gray-500 text-sm leading-relaxed">
                      {item.excerpt}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
