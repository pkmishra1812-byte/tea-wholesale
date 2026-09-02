// src/pages/BlogPage.jsx
import { Link } from "react-router-dom";
import bannerImg from "../assets/tata-banner.jpg";
import teaFarmImg from "../assets/teafarming.png";
import bannerNew1 from "../assets/banner-new-1.png";
import bannerNew2 from "../assets/banner-new-2.png";
import bannerNew3 from "../assets/banner-new-3.png";
import kickstarImg from "../assets/kickstar-banner.png";
import wholesaleImg from "../assets/wholsale-banner.png";
import sustainabilityImg from "../assets/sustainbility1.png";

const categories = [
  "All Stories",
  "Tea & Brewing",
  "Farming & Sourcing",
  "Products & Innovation",
  "Sustainability",
  "Business & Wholesale",
];

const featured = {
  category: "Tea & Brewing",
  date: "28 Aug 2026",
  readTime: "7 min read",
  title: "The Art of Orthodox Tea: Why Assam's Second Flush Steals the Show",
  excerpt:
    "From musk-scented muscatel to honeyed golden tips, we break down what makes a second flush Assam such a prized lot — and how you can spot the real thing on the wholesale table.",
  image: teaFarmImg,
};

const posts = [
  {
    category: "Farming & Sourcing",
    date: "24 Aug 2026",
    readTime: "5 min read",
    title: "Farm-to-Cup: Inside ISSI's Sourcing Partnerships with 40+ Gardens",
    excerpt:
      "Handpicked, single-origin, and traceable. We walk through how long-term partnerships with Assam's finest estates keep our supply chain consistent and our teas exceptional.",
    image: bannerNew1,
  },
  {
    category: "Products & Innovation",
    date: "19 Aug 2026",
    readTime: "6 min read",
    title: "Soya 2.0: Reinventing a Kitchen Staple for Modern India",
    excerpt:
      "High-protein, quick-cook, and endlessly versatile — discover how modern processing is giving the humble soya nugget a rightful place in contemporary Indian kitchens.",
    image: bannerNew2,
  },
  {
    category: "Sustainability",
    date: "15 Aug 2026",
    readTime: "4 min read",
    title: "Compostable Pouches and the Road to Zero Plastic",
    excerpt:
      "From plant-based inks to fully compostable packaging, here's how ISSI is eliminating plastic across its tea pouches — one batch at a time.",
    image: sustainabilityImg,
  },
  {
    category: "Business & Wholesale",
    date: "12 Aug 2026",
    readTime: "8 min read",
    title: "How to Brew a Perfect Cup of CTC Tea: A Wholesaler's Guide",
    excerpt:
      "Bold, brisk, and built for volume. Learn the brewing variables that matter most to café and retail buyers choosing their next CTC blend.",
    image: wholesaleImg,
  },
  {
    category: "Products & Innovation",
    date: "9 Aug 2026",
    readTime: "5 min read",
    title: "Gentle by Science: Inside the ISSI Baby Care Formulation Lab",
    excerpt:
      "Dermatologically tested and ophthalmologist-approved — a closer look at the clinical rigour behind our Kickstar baby care range.",
    image: kickstarImg,
  },
  {
    category: "Tea & Brewing",
    date: "6 Aug 2026",
    readTime: "6 min read",
    title: "From Garden to Cup: The Journey Behind Every ISSI Blend",
    excerpt:
      "Plucking, withering, rolling, and grading — follow a single leaf's journey from the Assam estates to the exact blend that reaches your wholesale cart.",
    image: bannerNew3,
  },
];

function Eyebrow({ children }) {
  return (
    <div className="inline-flex items-center gap-3 mb-6">
      <span className="w-12 h-px bg-[#0057A0]" />
      <span className="font-body text-xs tracking-[0.3em] uppercase text-[#0057A0] font-bold">
        {children}
      </span>
      <span className="w-12 h-px bg-[#0057A0]" />
    </div>
  );
}

function Meta({ date, readTime, category }) {
  return (
    <div className="flex items-center gap-3 text-xs">
      {category && (
        <span className="px-3 py-1 bg-[#0057A0]/10 text-[#0057A0] font-body font-bold rounded-full uppercase tracking-wider">
          {category}
        </span>
      )}
      {date && <span className="font-body text-gray-400">{date}</span>}
      {readTime && (
        <span className="font-body text-gray-400 flex items-center gap-1">
          <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <circle cx="12" cy="12" r="9" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 7v5l3 2" />
          </svg>
          {readTime}
        </span>
      )}
    </div>
  );
}

export default function BlogPage() {
  return (
    <>
      {/* ── Banner ── */}
      <div className="w-full relative">
        <img
          src={bannerImg}
          alt="Blog"
          className="w-full h-auto object-cover max-h-[400px] lg:max-h-[500px]"
        />
        <div className="absolute inset-0 bg-black/30" />
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="font-display text-white text-3xl sm:text-4xl lg:text-5xl font-bold text-center">
            Stories from ISSI
          </h1>
        </div>
      </div>

      {/* ── Intro ── */}
      <section className="bg-white py-16 lg:py-24">
        <div className="max-w-screen-xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12 lg:mb-16">
            <Eyebrow>The Journal</Eyebrow>
            <h2 className="font-display text-[#0057A0] text-3xl sm:text-4xl lg:text-[42px] font-bold leading-tight mb-5">
              Tea, People, and the Craft Behind It All
            </h2>
            <p className="font-body text-gray-500 text-base lg:text-lg max-w-2xl mx-auto leading-relaxed">
              Long-form stories, practical guides, and behind-the-scenes features from the estates,
              labs, and warehouses where ISSI tea and everyday essentials come to life.
            </p>
          </div>

          {/* ── Category filter ── */}
          <div className="flex flex-wrap justify-center gap-3 mb-14 lg:mb-16">
            {categories.map((cat) => (
              <span
                key={cat}
                className={`px-5 py-2 font-body text-sm font-semibold border sm:rounded-full transition-colors cursor-pointer ${
                  cat === "All Stories"
                    ? "border-[#0057A0] bg-[#0057A0] text-white"
                    : "border-gray-200 text-gray-500 hover:text-[#0057A0] hover:border-[#0057A0]"
                }`}
              >
                {cat}
              </span>
            ))}
          </div>

          {/* ── Featured story ── */}
          <div className="group grid grid-cols-1 lg:grid-cols-2 bg-white border border-gray-100 sm:rounded-3xl overflow-hidden hover:shadow-[0_8px_40px_rgba(0,87,160,0.08)] transition-all duration-500 mb-14 lg:mb-20">
            <div className="relative h-64 sm:h-80 lg:h-full min-h-[300px] overflow-hidden">
              <img
                src={featured.image}
                alt={featured.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.05]"
              />
              <span className="absolute top-5 left-5 px-3 py-1 bg-[#0057A0] text-white font-body text-xs font-bold rounded-full uppercase tracking-wider">
                Featured
              </span>
            </div>
            <div className="p-8 lg:p-12 xl:p-14 flex flex-col justify-center">
              <Meta category={featured.category} date={featured.date} readTime={featured.readTime} />
              <h3 className="font-display text-[#1a2942] text-2xl lg:text-3xl font-bold leading-snug my-5 group-hover:text-[#0057A0] transition-colors">
                {featured.title}
              </h3>
              <p className="font-body text-gray-500 text-sm lg:text-base leading-relaxed mb-8">
                {featured.excerpt}
              </p>
              <span className="inline-flex items-center gap-2 font-body text-sm font-semibold text-[#0057A0]">
                Read Full Story
                <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14m-6-6l6 6-6 6" />
                </svg>
              </span>
            </div>
          </div>

          {/* ── Story grid ── */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {posts.map((post) => (
              <article
                key={post.title}
                className="group bg-white border border-gray-100 sm:rounded-2xl overflow-hidden hover:shadow-[0_8px_40px_rgba(0,87,160,0.08)] transition-all duration-500"
              >
                <div className="relative aspect-[16/10] overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.06]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/25 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
                <div className="p-6 lg:p-7">
                  <Meta category={post.category} date={post.date} readTime={post.readTime} />
                  <h3 className="font-display text-[#1a2942] text-lg font-bold leading-snug mt-4 mb-3 group-hover:text-[#0057A0] transition-colors">
                    {post.title}
                  </h3>
                  <p className="font-body text-gray-500 text-sm leading-relaxed">
                    {post.excerpt}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── Newsletter CTA ── */}
      <section className="bg-[#0057A0] py-16 lg:py-20">
        <div className="max-w-3xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="font-display text-white text-2xl lg:text-3xl font-bold mb-4">
            Stories Worth Brewing Over
          </h2>
          <p className="font-body text-white/70 text-sm lg:text-base leading-relaxed mb-8 max-w-xl mx-auto">
            Get the latest stories, sourcing notes, and product launches delivered straight to your inbox. No spam — just good tea.
          </p>
          <form
            className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
            onSubmit={(e) => e.preventDefault()}
          >
            <input
              type="email"
              required
              placeholder="Enter your email"
              className="flex-1 px-5 py-3 rounded-full bg-white/10 border border-white/30 text-white text-sm placeholder:text-white/50 outline-none focus:bg-white/15 transition-colors"
            />
            <button
              type="submit"
              className="px-7 py-3 rounded-full bg-white text-[#0057A0] font-body font-bold text-sm hover:bg-[#0057A0]/5 transition-colors"
            >
              Subscribe
            </button>
          </form>
          <p className="font-body text-white/50 text-xs mt-4">
            Join 2,000+ readers. Unsubscribe anytime.
          </p>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="bg-[#F5F5F0] py-16 lg:py-20">
        <div className="max-w-screen-xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="font-display text-[#0057A0] text-2xl lg:text-3xl font-bold mb-4">
            Ready to Stock the Finest Tea?
          </h2>
          <p className="font-body text-gray-500 max-w-xl mx-auto mb-8 text-sm lg:text-base leading-relaxed">
            Talk to our wholesale team about bulk orders, private labels, and garden-direct sourcing partnerships.
          </p>
          <Link
            to="/wholesale"
            className="inline-block bg-[#0057A0] text-white font-body font-bold text-sm px-8 py-3.5 sm:rounded-full hover:brightness-110 transition-all duration-300"
          >
            Explore Wholesale
          </Link>
        </div>
      </section>
    </>
  );
}