import { Link } from "react-router-dom";

export default function CompanyValues() {
  const stakeholders = [
    {
      icon: "M3 7h18l-2 14H5L3 7zm3 0V5a3 3 0 016 0v2m4 0V5a3 3 0 00-6 0v2M7 11h2v6H7v-6zm8 0h2v6h-2v-6zm-4 0h2v6h-2v-6z",
      heading: "For our Consumers",
      desc: "Delivering safe, high-quality products that enrich everyday lives.",
    },
    {
      icon: "M15 15l-3 3-3-3m3-9v12M5 5h14a2 2 0 012 2v10a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2z",
      heading: "For our Partners",
      desc: "Building trust through transparency, reliability and mutual growth.",
    },
    {
      icon: "M12 14v6m-3-3h6M12 4a4 4 0 100 8 4 4 0 000-8zm8 12a5 5 0 00-5-5H9a5 5 0 00-5 5v1h16v-1z",
      heading: "For our Employees",
      desc: "Empowering our people with opportunity, safety and a sense of purpose.",
    },
    {
      icon: "M13 7h8m0 0v8m0-8l-8 8-4-4-6 6M13 7h8m0 0v8m0-8l-8 8-4-4-6 6",
      heading: "For our Investors",
      desc: "Driving sustainable value creation with disciplined growth and governance.",
    },
  ];

  return (
    <>
      {/* ── SECTION 1: Stakeholder Highlights ── */}
      <section className="bg-white pt-20 lg:pt-28 pb-8 lg:pb-10">
        <div className="max-w-screen-xl mx-auto px-6 lg:px-8">
          <h2 className="font-display text-brand text-3xl lg:text-4xl font-bold text-center mb-16 tracking-wide">
            We Stand <span className="font-accent italic font-light">#ForBetter</span>
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16">
            {stakeholders.map((item) => (
              <div key={item.heading} className="flex flex-col items-center text-center">
                <div className="w-20 h-20 flex items-center justify-center mb-6">
                  <svg viewBox="0 0 24 24" fill="none" stroke="#1E5AA8" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
                    <path d={item.icon} />
                  </svg>
                </div>
                <h3 className="font-display text-[#1E5AA8] text-xl lg:text-2xl font-bold mb-3 tracking-wide">
                  {item.heading}
                </h3>
                <p className="font-body text-gray-500 text-sm leading-relaxed max-w-[220px] tracking-wide">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION 2: Vision, Mission and Values + Explore our Vision ── */}
      <section className="bg-white pt-8 lg:pt-10 pb-20 lg:pb-28">
        <div className="max-w-screen-xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="font-display text-brand text-3xl lg:text-4xl font-bold mb-6 tracking-wide">
            Our Vision, Mission <span className="font-accent italic font-light">and</span> Values
          </h2>
          <p className="font-body text-gray-500 text-base leading-relaxed max-w-[700px] mx-auto mb-6 tracking-wide">
            Our foremost commitment is towards enhancing the lives of all our stakeholders. Our Vision, Mission and Values capture our ambition and how we are working to achieve it.
          </p>
          <div className="flex justify-center">
            <Link
              to="/our-vision-mission-values"
              className="inline-flex items-center gap-2 text-brand font-body font-semibold text-sm tracking-wide hover:text-[#1d3fc4] transition-colors"
            >
              Explore our Vision
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
