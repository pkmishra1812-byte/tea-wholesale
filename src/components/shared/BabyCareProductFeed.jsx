import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import bathImg from "../../assets/baby-bath.png";
import doctorImg from "../../assets/baby-doctor.png";
import videoThumb from "../../assets/baby-video-thumb.jpg";

const NAVY = "#16345c";
const BLUE = "#1E88E5";
const GRAY = "#333333";

/* ── Product data ───────────────────────────────────────────── */
const PRODUCTS = [
  {
    id: 1,
    source: "ISSI Baby Care",
    time: "2 min read",
    title: "ISSI\u00AE Baby Oil With Vitamin\u00A0E",
    desc: "Enriched with soothing, naturally derived ingredients and free from harsh chemicals, it glides smoothly over delicate skin \u2014 turning nightly routine into a moment of pure bonding and relaxation.",
    image: bathImg,
    link: "/our-offering/baby-care/product/massage-oil",
    tag: "Best Seller",
    tagColor: "#E8F4FD",
    tagText: BLUE,
  },
  {
    id: 2,
    source: "ISSI Baby Care",
    time: "3 min read",
    title: "ISSI\u00AE Baby Shop Bar",
    desc: "Crafted with nourishing, plant-based ingredients, this bar cleanses without stripping natural oils. Its creamy, rich foam wraps your baby\u2019s skin in comfort.",
    image: doctorImg,
    link: "/our-offering/baby-care/product/baby-shop-bar",
    tag: "New",
    tagColor: "#E8F5E9",
    tagText: "#2E7D32",
  },
  {
    id: 3,
    source: "ISSI Baby Care",
    time: "2 min read",
    title: "ISSI\u00AE Baby Vitamin\u00A0E Powder",
    desc: "Infused with vitamin\u00A0E and free from talc, it absorbs excess moisture instantly while allowing skin to breathe naturally.",
    image: bathImg,
    link: "/our-offering/baby-care/product/baby-vitamin-e-powder",
    tag: "Popular",
    tagColor: "#FFF3E0",
    tagText: "#E65100",
  },
  {
    id: 4,
    source: "ISSI Baby Care",
    time: "1 min read",
    title: "ISSI\u00AE Baby Wipes",
    desc: "Made with plant-based fibres and enriched with aloe vera, each wipe is thick, soft and pH-balanced \u2014 effective enough for messes yet gentle enough for the most sensitive skin.",
    image: videoThumb,
    link: "/our-offering/baby-care/product/baby-wipes",
    tag: "Must Have",
    tagColor: "#E3F2FD",
    tagText: BLUE,
    isVideo: true,
  },
  {
    id: 5,
    source: "ISSI Baby Care",
    time: "1 min read",
    title: "ISSI\u00AE Baby Cotton Bud",
    desc: "Featuring a narrow, flexible tip and 100% pure cotton heads, they glide gently into ears, nose folds and skin creases without causing irritation.",
    image: doctorImg,
    link: "/our-offering/baby-care/product/baby-cotton-bud",
    tag: "Essential",
    tagColor: "#FDE8E8",
    tagText: "#C62828",
  },
  {
    id: 6,
    source: "ISSI Baby Care",
    time: "2 min read",
    title: "ISSI\u00AE Baby Tooth Brush",
    desc: "Extra-soft bristles clean emerging teeth without irritating tender gums, while the ergonomic handle gives parents a secure grip for guided brushing sessions.",
    image: bathImg,
    link: "/our-offering/baby-care/product/baby-tooth-brush",
    tag: "Pediatrician Approved",
    tagColor: "#F3E5F5",
    tagText: "#6A1B9A",
  },
  {
    id: 7,
    source: "ISSI Baby Care",
    time: "4 min read",
    title: "Why Triple-Testing Matters for Your Baby",
    desc: "Every ISSI formula goes through dermatologists, ophthalmologists and paediatricians before it reaches your home. Here\u2019s what that means for your baby\u2019s skin.",
    image: doctorImg,
    link: "/our-offering/baby-care/product",
    tag: "Story",
    tagColor: "#E8F4FD",
    tagText: BLUE,
    isStory: true,
  },
  {
    id: 8,
    source: "ISSI Baby Care",
    time: "3 min read",
    title: "Gentle Cleansing with Micelle Technology",
    desc: "Our jumbo cleansing micelle helps protect your baby\u2019s skin against irritation from day\u00A01. One gentle sweep lifts away dirt without stripping moisture.",
    image: videoThumb,
    link: "/our-offering/baby-care/product",
    tag: "Watch",
    tagColor: "#FFF3E0",
    tagText: "#E65100",
    isVideo: true,
  },
];

/* ── SVG icons ──────────────────────────────────────────────── */
function PlayIcon() {
  return (
    <svg viewBox="0 0 24 24" width="20" height="20" fill="white" aria-hidden>
      <path d="M8 5v14l11-7z" />
    </svg>
  );
}

function ArrowIcon({ className = "" }) {
  return (
    <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden>
      <path d="M5 12h14m-6-6l6 6-6 6" />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  );
}

function MapPinIcon() {
  return (
    <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}

function ClockIcon() {
  return (
    <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  );
}

/* ── Product Card ───────────────────────────────────────────── */
function ProductCard({ product, index }) {
  const cardRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = cardRef.current;
    if (!el) return undefined;
    const io = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.15 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div
      ref={cardRef}
      className={`group bg-white rounded-[12px] overflow-hidden shadow-[0_2px_12px_rgba(22,52,92,0.06)] hover:shadow-[0_8px_30px_rgba(22,52,92,0.12)] border border-gray-100 transition-all duration-500 ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
      }`}
      style={{ transitionDelay: `${index * 60}ms` }}
    >
      {/* Image area */}
      <div className="relative overflow-hidden">
        <img
          src={product.image}
          alt={product.title}
          loading="lazy"
          className="w-full h-[200px] object-cover transition-transform duration-700 group-hover:scale-[1.04]"
        />
        <span className="absolute inset-0 bg-gradient-to-t from-[#16345c]/20 to-transparent" />

        {/* Tag */}
        <span
          className="absolute top-3 left-3 inline-flex items-center rounded-full px-3 py-1 text-[10px] font-bold uppercase tracking-wider shadow-sm"
          style={{ backgroundColor: product.tagColor, color: product.tagText }}
        >
          {product.tag}
        </span>

        {/* Video play overlay */}
        {product.isVideo && (
          <span className="absolute inset-0 flex items-center justify-center">
            <span className="flex h-14 w-14 items-center justify-center rounded-full bg-black/50 backdrop-blur-sm shadow-lg transition-transform duration-300 group-hover:scale-110 group-hover:bg-[#cc0000]">
              <PlayIcon />
            </span>
          </span>
        )}
      </div>

      {/* Content */}
      <div className="p-5">
        {/* Source + time */}
        <div className="flex items-center gap-2 mb-3">
          <div className="w-6 h-6 rounded-full bg-[#E8F4FD] flex items-center justify-center shrink-0">
            <span className="text-[8px] font-bold" style={{ color: NAVY }}>I</span>
          </div>
          <span className="text-[12px] font-semibold" style={{ color: NAVY }}>{product.source}</span>
          <span className="flex items-center gap-1 text-[11px]" style={{ color: "#999" }}>
            <ClockIcon />
            {product.time}
          </span>
        </div>

        {/* Title */}
        <h3 className="font-poppins font-bold text-[16px] leading-snug tracking-tight mb-2" style={{ color: NAVY }}>
          {product.title}
        </h3>

        {/* Description */}
        <p className="text-[13px] leading-relaxed mb-4" style={{ color: GRAY }}>
          {product.desc}
        </p>

        {/* Learn More */}
        <Link
          to={product.link}
          className="inline-flex items-center gap-1.5 font-poppins font-semibold text-[13px] transition-all duration-300 hover:gap-2.5"
          style={{ color: BLUE }}
        >
          Learn More
          <ArrowIcon className="transition-transform duration-300 group-hover:translate-x-1" />
        </Link>
      </div>
    </div>
  );
}

/* ── Sticky Sidebar ─────────────────────────────────────────── */
function StickySidebar() {
  return (
    <aside className="lg:sticky lg:top-[160px] self-start flex flex-col gap-5">

      {/* Company info card */}
      <div className="bg-white rounded-[12px] shadow-[0_2px_12px_rgba(22,52,92,0.06)] border border-gray-100 overflow-hidden">
        <div className="bg-gradient-to-r from-[#16345c] to-[#1E88E5] px-6 py-5">
          <h3 className="font-poppins font-bold text-[18px] text-white mb-1">ISSI Baby Care</h3>
          <p className="text-[12px] text-white/70">Indian Soya &amp; Spice Industries</p>
        </div>
        <div className="p-5 flex flex-col gap-4">
          <p className="text-[13px] leading-relaxed" style={{ color: GRAY }}>
            Trusted by parents, designed for your baby&rsquo;s journey from day&nbsp;1. Every product is dermatologist tested and paediatrician approved.
          </p>
          <Link
            to="/our-offering/baby-care/product"
            className="inline-flex items-center justify-center gap-2 rounded-full px-5 py-2.5 font-poppins font-semibold text-[13px] text-white transition-all duration-300 hover:shadow-lg hover:scale-[1.03]"
            style={{ backgroundColor: NAVY }}
          >
            View All Products
            <ArrowIcon />
          </Link>
        </div>
      </div>

      {/* Contact box */}
      <div className="bg-white rounded-[12px] shadow-[0_2px_12px_rgba(22,52,92,0.06)] border border-gray-100 p-5">
        <h4 className="font-poppins font-bold text-[14px] mb-4" style={{ color: NAVY }}>Get in Touch</h4>
        <div className="flex flex-col gap-3">
          <a href="tel:+911234567890" className="flex items-center gap-3 text-[13px] transition-colors duration-300 hover:text-[#1E88E5]" style={{ color: GRAY }}>
            <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#E8F4FD]" style={{ color: BLUE }}>
              <PhoneIcon />
            </span>
            +91 123 456 7890
          </a>
          <a href="mailto:babycare@issi.in" className="flex items-center gap-3 text-[13px] transition-colors duration-300 hover:text-[#1E88E5]" style={{ color: GRAY }}>
            <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#E8F4FD]" style={{ color: BLUE }}>
              <MailIcon />
            </span>
            babycare@issi.in
          </a>
          <div className="flex items-start gap-3 text-[13px]" style={{ color: GRAY }}>
            <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#E8F4FD]" style={{ color: BLUE }}>
              <MapPinIcon />
            </span>
            <span>ISSI House, Sector 62,<br />Noida, UP 201301</span>
          </div>
        </div>
      </div>

      {/* Quick links */}
      <div className="bg-white rounded-[12px] shadow-[0_2px_12px_rgba(22,52,92,0.06)] border border-gray-100 p-5">
        <h4 className="font-poppins font-bold text-[14px] mb-3" style={{ color: NAVY }}>Quick Links</h4>
        <div className="flex flex-col gap-2">
          {[
            { label: "Our Story", to: "/our-company" },
            { label: "Sustainability", to: "/sustainability" },
            { label: "Wholesale Enquiry", to: "/wholesale" },
            { label: "Contact Us", to: "/contact" },
          ].map((link) => (
            <Link
              key={link.label}
              to={link.to}
              className="flex items-center gap-2 text-[13px] font-medium py-1.5 px-3 rounded-lg transition-all duration-300 hover:bg-[#E8F4FD]"
              style={{ color: GRAY }}
            >
              <ArrowIcon className="shrink-0" />
              {link.label}
            </Link>
          ))}
        </div>
      </div>

      {/* Sustainability mini stats */}
      <div className="bg-gradient-to-br from-[#16345c] to-[#0A1A3A] rounded-[12px] p-5 text-white shadow-[0_8px_30px_rgba(22,52,92,0.25)]">
        <h4 className="font-poppins font-bold text-[14px] mb-3">Our Impact</h4>
        <div className="grid grid-cols-2 gap-3">
          {[
            { label: "Estates", value: "6" },
            { label: "Villages", value: "28" },
            { label: "Carbon", value: "-32%" },
            { label: "Zero Waste", value: "2026" },
          ].map((stat) => (
            <div key={stat.label} className="bg-white/10 rounded-[8px] px-3 py-2.5 text-center">
              <div className="text-[16px] font-bold">{stat.value}</div>
              <div className="text-[10px] text-white/60 mt-0.5">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

    </aside>
  );
}

/* ── Exported Section ───────────────────────────────────────── */
export default function BabyCareProductFeed() {
  return (
    <section className="w-full bg-[#F4F6FA]">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">

        {/* Two-column grid: align-start so sidebar sticks independently */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_340px] items-start gap-8 lg:gap-10">

          {/* Main feed — left column */}
          <div className="flex flex-col gap-5">
            {PRODUCTS.map((product, i) => (
              <ProductCard key={product.id} product={product} index={i} />
            ))}
          </div>

          {/* Sticky sidebar — right column */}
          <StickySidebar />

        </div>
      </div>
    </section>
  );
}
