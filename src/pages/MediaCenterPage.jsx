// src/pages/MediaCenterPage.jsx
import { Link } from "react-router-dom";
import bannerImg from "../assets/tata-banner.jpg";

const sections = [
  {
    title: "News Room",
    tagline: "Press & Announcements",
    desc: "Media releases, corporate announcements, and milestone updates from Indian Soya & Spice Industries.",
    link: "/media-center/news-center",
    cta: "Visit News Room",
  },
  {
    title: "ISSI News",
    tagline: "Awards & Milestones",
    desc: "Company announcements, partnerships, awards, and growth milestones shaping the ISSI story.",
    link: "/media-center/issi-news",
    cta: "Read ISSI News",
  },
  {
    title: "Everyday Updates",
    tagline: "On-the-ground Happenings",
    desc: "Quick updates on harvests, dispatches, quality checks, events, and everything happening across our operations.",
    link: "/media-center/everyday-updates",
    cta: "See Daily Updates",
  },
];

function SectionCard({ title, tagline, desc, link, cta, index }) {
  return (
    <div
      className={`group bg-white border border-gray-100 sm:rounded-2xl p-8 lg:p-10 hover:shadow-[0_8px_40px_rgba(0,87,160,0.08)] transition-all duration-500 ${
        index % 2 === 1 ? "sm:translate-y-8" : ""
      }`}
    >
      <div className="flex items-center gap-3 mb-5">
        <span className="h-2 w-2 bg-[#0057A0] rounded-full" />
        <span className="font-body text-xs tracking-widest uppercase text-[#0057A0] font-bold">
          {tagline}
        </span>
      </div>
      <h3 className="font-display text-[#1a2942] text-xl lg:text-2xl font-bold mb-3 group-hover:text-[#0057A0] transition-colors">
        {title}
      </h3>
      <p className="font-body text-gray-500 text-sm leading-relaxed mb-6">
        {desc}
      </p>
      <Link
        to={link}
        className="inline-flex items-center gap-2 font-body text-sm font-semibold text-[#0057A0] group-hover:gap-3 transition-all"
      >
        {cta}
        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14m-6-6l6 6-6 6" />
        </svg>
      </Link>
    </div>
  );
}

export default function MediaCenterPage() {
  return (
    <>
      {/* Banner */}
      <div className="w-full relative">
        <img
          src={bannerImg}
          alt="Media Center"
          className="w-full h-auto object-cover max-h-[400px] lg:max-h-[500px]"
        />
        <div className="absolute inset-0 bg-black/30" />
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="font-display text-white text-3xl sm:text-4xl lg:text-5xl font-bold text-center">
            Media Center
          </h1>
        </div>
      </div>

      {/* Intro */}
      <section className="bg-white py-16 lg:py-24">
        <div className="max-w-screen-xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-14 lg:mb-16">
            <h2 className="font-display text-[#0057A0] text-2xl lg:text-3xl font-bold mb-4">
              The ISSI Story, As It Happens
            </h2>
            <p className="font-body text-gray-500 text-sm lg:text-base max-w-2xl mx-auto">
              Company announcements, partnerships, awards, and daily happenings — everything you need to stay
              updated with Indian Soya &amp; Spice Industries.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {sections.map((section, i) => (
              <SectionCard key={section.title} {...section} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#0057A0] py-14 lg:py-16">
        <div className="max-w-screen-xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="font-display text-white text-2xl lg:text-3xl font-bold mb-3">
            Want to know more about ISSI?
          </h2>
          <p className="font-body text-white/70 text-sm lg:text-base max-w-xl mx-auto mb-7">
            Our team is always happy to share updates, partnerships, and stories from across our operations.
          </p>
          <Link
            to="/contact"
            className="inline-block font-body text-sm tracking-wide bg-white text-[#0057A0] font-semibold px-8 py-3.5 rounded-full hover:bg-[#0057A0]/5 transition-colors duration-200"
          >
            Get in Touch
          </Link>
        </div>
      </section>
    </>
  );
}