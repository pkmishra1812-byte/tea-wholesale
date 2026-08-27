import { Link } from "react-router-dom";
import tataBanner from "../../assets/tata-banner.jpg";

const FEATURES = [
  {
    num: "01",
    title: "Trusted Quality",
    desc: "Everyday essentials held to a luxury-grade standard.",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 21s-7-4.6-7-10a4.2 4.2 0 017-3.2A4.2 4.2 0 0119 11c0 5.4-7 10-7 10z"
      />
    ),
  },
  {
    num: "02",
    title: "Indian Roots",
    desc: "Born from India's traditions, homes and hearts.",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 21s-6-5.2-6-10.5V6l6-2.5L18 6v4.5C18 15.8 12 21 12 21zm-2.2-9.2l1.8 1.8 3.4-3.6"
      />
    ),
  },
  {
    num: "03",
    title: "Future Ready",
    desc: "Guided by innovation and responsible growth.",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M17 20v-1.8a4 4 0 00-4-4H7a4 4 0 00-4 4V20m7-10a4 4 0 100-8 4 4 0 000 8zm10 10v-1.8a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75"
      />
    ),
  },
];

export default function GlanceSection() {
  return (
    <section className="bg-[#f6f7f9] py-16 lg:py-24 overflow-hidden">
      <div className="max-w-screen-xl mx-auto px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 items-center">
        {/* LEFT — goggle-glass pill image with gradient ring */}
        <div className="glance-frame mx-auto">
          <img
            src={tataBanner}
            alt="Care in every everyday essential"
            className="transition-transform duration-700 hover:scale-[1.04]"
          />
        </div>

        <style>{`
          .glance-frame {
            width: 100%;
            max-width: 600px;
            aspect-ratio: 16 / 9;
            border-radius: 999px;
            position: relative;
            background: #1a1a1a;
          }

          .glance-frame::before {
            content: '';
            position: absolute;
            inset: -3px;
            border-radius: inherit;
            padding: 3px;
            background: linear-gradient(135deg, #FFD700 0%, transparent 40%, #1E90FF 100%);
            -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
            -webkit-mask-composite: xor;
            mask-composite: exclude;
          }

          .glance-frame img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            border-radius: inherit;
          }
        `}</style>

        {/* RIGHT — copy */}
        <div>
          <p className="font-body text-brand text-xs lg:text-sm font-bold tracking-[0.22em] uppercase">
            At a Glance
          </p>
          <h2 className="mt-4 font-display text-[#0a1a3c] text-3xl sm:text-4xl lg:text-[42px] font-bold leading-tight">
            Our company at a glance — quality that a family can trust.
          </h2>
          <p className="mt-5 font-body text-gray-500 text-base lg:text-lg leading-relaxed max-w-xl">
            Indian Soya &amp; Spice Industries is more than a company — it is a
            promise that quietly resides in every home. Built on a single
            conviction, we have risen to become one of India's Top FMCG
            companies, delivering everyday essentials with the same care,
            craftsmanship and quality as luxury goods.
          </p>

          {/* Feature row */}
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-8">
            {FEATURES.map((f) => (
              <div key={f.num}>
                <div className="flex items-center gap-4">
                  <span className="shrink-0 w-12 h-12 rounded-xl border border-[#0057A0]/35 bg-white text-[#0057A0] flex items-center justify-center">
                    <svg className="w-6 h-6 p-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.6}>
                      {f.icon}
                    </svg>
                  </span>
                  <span className="font-display text-2xl font-bold text-[#0a1a3c]">
                    {f.num}
                  </span>
                </div>
                <h4 className="mt-4 font-body text-[#0a1a3c] font-bold text-base tracking-wide">
                  {f.title}
                </h4>
                <p className="mt-1.5 font-body text-gray-500 text-sm leading-relaxed">
                  {f.desc}
                </p>
              </div>
            ))}
          </div>

          <Link
            to="/our-company"
            className="group mt-10 inline-flex items-center gap-2.5 bg-[#0a1a3c] hover:bg-[#132a58] text-white font-body font-bold text-sm lg:text-base px-8 py-4 rounded-lg transition-all duration-300 hover:-translate-y-0.5"
          >
            Know More About Us
            <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
