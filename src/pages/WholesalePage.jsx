// src/pages/WholesalePage.jsx
import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import Reveal from "../components/company/Reveal";
import GrowTogetherBanner from "../components/shared/GrowTogetherBanner";
import AnnouncementStrip from "../components/shared/AnnouncementStrip";

import wholesaleBanner from "../assets/wholsale-banner.png";
import br1 from "../assets/brand-logo/br_logo1.png";
import br2 from "../assets/brand-logo/br_logo2.png";
import br3 from "../assets/brand-logo/br_logo3.png";
import br4 from "../assets/brand-logo/br_logo4.png";
import br5 from "../assets/brand-logo/br_logo5.png";

import teaImg from "../assets/banner-1.png";
import spiceImg from "../assets/banner-new-2.png";
import soyaImg from "../assets/banner-new-3.png";
import oilImg from "../assets/banner-new-4.png";
import grainsImg from "../assets/banner-3.png";
import babyImg from "../assets/kickstar-banner.png";
import beautyImg from "../assets/bioqt-banner.png";
import machineryImg from "../assets/banner-2.png";

/* ───────── palette ───────── */
const NAVY = "#0B2C4D";
const GOLD = "#C9962C";
const CREAM = "#F7F3EA";

/* ───────── data ───────── */
const PRODUCTS = [
  { title: "Tea", desc: "Premium green, black and herbal teas sourced from India's finest estates.", image: teaImg, link: "/our-offering/tea", icon: "M4 6h13v8a4 4 0 01-4 4H8a4 4 0 01-4-4V6zm13 2h2a2 2 0 010 4h-2" },
  { title: "Spices", desc: "Whole, ground and blended varieties sourced directly from growers.", image: spiceImg, link: "/our-offering/kitchen-products/rice-pulses-spices", icon: "M12 3l2.5 5L20 9l-4 4 1 6-5-3-5 3 1-6-4-4 5.5-1L12 3z" },
  { title: "Soya", desc: "High-protein soya processed under strict quality controls.", image: soyaImg, link: "/our-offering/kitchen-products/soya", icon: "M7 21c0-4 2-6 5-6s5 2 5 6M12 15V9m0 0a3 3 0 110-6 3 3 0 010 6z" },
  { title: "Cooking Oils", desc: "Pure refined oils with consistent purity for bulk supply.", image: oilImg, link: "/our-offering/kitchen-products/ghee", icon: "M9 3h6v4H9zM7 9h10l1 11a2 2 0 01-2 2H8a2 2 0 01-2-2L7 9z" },
  { title: "Grains", desc: "Premium rice, pulses and cereals meeting bulk supply standards.", image: grainsImg, link: "/our-offering/kitchen-products/staples", icon: "M12 3c3 4 5 7 5 10a5 5 0 01-10 0c0-3 2-6 5-10z" },
  { title: "Baby Care", desc: "Gentle, natural care crafted for delicate skin.", image: babyImg, link: "/our-offering/baby-care/product", icon: "M12 21a8 8 0 100-16 8 8 0 000 16zm-2.5-9.5h.01M14.5 11.5h.01M9.5 14.5c1.5 1 3.5 1 5 0" },
  { title: "Beauty & Wellbeing", desc: "Skincare and wellness essentials of dermatologist-grade care.", image: beautyImg, link: "/our-offering/beauty-products", icon: "M12 21s-7-4.6-7-10a4.2 4.2 0 017-3.2A4.2 4.2 0 0119 11c0 5.4-7 10-7 10z" },
  { title: "Tea Machinery", desc: "Reliable processing machinery, packaging equipment and accessories.", image: machineryImg, link: "/our-offering/tea-machinery", icon: "M3 21h18M5 21V7l7-4 7 4v14M9 21v-6h6v6" },
];

const BRANDS = [
  { name: "Bioqt", img: br1 },
  { name: "Handsome X", img: br2 },
  { name: "Kickstar", img: br3 },
  { name: "Next Level", img: br4 },
  { name: "Shreeman", img: br5 },
];

const STEPS = [
  { title: "Farm Selection", d: "M12 21a8 8 0 100-16 8 8 0 000 16zm0-11v5" },
  { title: "Sourcing", d: "M4 7h16M4 12h16M4 17h10" },
  { title: "Processing", d: "M4 4h16v6H4zM4 14h16v6H4zM8 7h.01M8 17h.01" },
  { title: "Quality Check", d: "M9 12l2 2 4-4M21 12a9 9 0 11-18 0 9 9 0 0118 0z" },
  { title: "Packaging", d: "M21 8l-9-5-9 5v8l9 5 9-5V8zM3 8l9 5 9-5M12 13v8" },
  { title: "Distribution", d: "M1 5h13v10H1zM14 8h4l3 3v4h-7M5.5 19a2 2 0 100-4 2 2 0 000 4zm12 0a2 2 0 100-4 2 2 0 000 4z" },
  { title: "Your Shelf", d: "M3 9l9-6 9 6M5 9v11h14V9M9 20v-6h6v6" },
];

const WHY = [
  { title: "Premium Quality", desc: "Rigorous multi-stage quality checks on every batch.", d: "M12 3l7 3v5c0 4.6-3 8.4-7 10-4-1.6-7-5.4-7-10V6l7-3zm-2.2 9l1.8 1.8 3.4-3.6" },
  { title: "Bulk Pricing", desc: "Transparent slab-based pricing built for volume buyers.", d: "M12 1v22M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6" },
  { title: "Pan-India Logistics", desc: "Dependable delivery networks covering every region.", d: "M1 5h13v10H1zM14 8h4l3 3v4h-7M5.5 19a2 2 0 100-4 2 2 0 000 4zm12 0a2 2 0 100-4 2 2 0 000 4z" },
  { title: "Private Label", desc: "Custom manufacturing and packaging for your brand.", d: "M20.6 13.4L13.4 20.6a2 2 0 01-2.8 0L2 12V2h10l8.6 8.6a2 2 0 010 2.8zM7 7h.01" },
  { title: "Dedicated Support", desc: "A named account manager from enquiry to dispatch.", d: "M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" },
];

/* ───────── count-up hook ───────── */
function useCountUp(target, duration = 1800) {
  const ref = useRef(null);
  const [val, setVal] = useState(0);
  useEffect(() => {
    const el = ref.current;
    if (!el) return undefined;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        io.disconnect();
        const t0 = performance.now();
        const tick = (t) => {
          const p = Math.min((t - t0) / duration, 1);
          setVal(Math.round(target * (1 - Math.pow(1 - p, 3))));
          if (p < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
      },
      { threshold: 0.4 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [target, duration]);
  return [ref, val];
}

const STAT_ICONS = {
  "Product Categories": "M4 6h16M4 12h16M4 18h10",
  "Trusted Brands": "M20.6 13.4L13.4 20.6a2 2 0 01-2.8 0L2 12V2h10l8.6 8.6a2 2 0 010 2.8zM7 7h.01",
  "Years of Excellence": "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z",
  "Distribution Network": "M1 5h13v10H1zM14 8h4l3 3v4h-7",
};

function Stat({ target, suffix, label }) {
  const [ref, val] = useCountUp(target);
  return (
    <div ref={ref} className="flex flex-col items-center text-center px-6 py-6 lg:py-8">
      <span className="w-12 h-12 rounded-full border border-[#C9962C]/40 text-[#C9962C] flex items-center justify-center mb-3">
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
          <path strokeLinecap="round" strokeLinejoin="round" d={STAT_ICONS[label]} />
        </svg>
      </span>
      <span className="font-display text-4xl lg:text-5xl font-bold text-white tracking-tight">
        {val}
        <span className="text-[#C9962C]">{suffix}</span>
      </span>
      <span className="font-body text-xs lg:text-sm uppercase tracking-[0.18em] text-white/60 mt-2">
        {label}
      </span>
    </div>
  );
}

export default function WholesalePage() {
  const heroImgRef = useRef(null);
  const timelineRef = useRef(null);
  const [timelineOn, setTimelineOn] = useState(false);

  /* hero parallax */
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return undefined;
    let raf = 0;
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        if (heroImgRef.current) {
          const y = Math.min(window.scrollY * 0.06, 44);
          heroImgRef.current.style.transform = `translateY(${y}px)`;
        }
      });
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => { window.removeEventListener("scroll", onScroll); cancelAnimationFrame(raf); };
  }, []);

  /* timeline draw trigger */
  useEffect(() => {
    const el = timelineRef.current;
    if (!el) return undefined;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) { setTimelineOn(true); io.disconnect(); }
      },
      { threshold: 0.25 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const [form, setForm] = useState({
    companyName: "", personName: "", state: "", city: "", district: "", address: "",
    pinCode: "", phone: "", storageArea: "", existingDistributorship: "", investment: "",
    commercialVehicles: "", brands: "",
  });
  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });
  const handleSubmit = (e) => e.preventDefault();

  return (
    <>
      {/* ═══════════ SLIDING ANNOUNCEMENT STRIP (above banner) ═══════════ */}
      <AnnouncementStrip variant="wholesale" />

      {/* ═══════════ HERO ═══════════ */}
      <section className="relative bg-[#00152C] overflow-hidden">
        {/* soft radial glows */}
        <div className="pointer-events-none absolute -top-32 -left-32 w-[480px] h-[480px] rounded-full bg-[#0057A0]/20 blur-3xl" />
        <div className="pointer-events-none absolute top-1/3 -right-24 w-[420px] h-[420px] rounded-full bg-[#C9A227]/10 blur-3xl" />

        {/* decorative particles */}
        <div className="pointer-events-none absolute inset-0" aria-hidden="true">
          {[
            { l: "12%", t: "22%", s: 5, d: "11s", o: 0.3 },
            { l: "28%", t: "64%", s: 4, d: "13s", o: 0.22 },
            { l: "46%", t: "14%", s: 6, d: "10s", o: 0.18 },
            { l: "63%", t: "70%", s: 5, d: "12s", o: 0.28 },
            { l: "78%", t: "30%", s: 4, d: "14s", o: 0.2 },
            { l: "90%", t: "58%", s: 6, d: "9s", o: 0.16 },
            { l: "8%", t: "80%", s: 4, d: "15s", o: 0.24 },
            { l: "20%", t: "42%", s: 3, d: "12s", o: 0.26 },
            { l: "35%", t: "84%", s: 5, d: "10s", o: 0.2 },
            { l: "52%", t: "38%", s: 4, d: "16s", o: 0.24 },
            { l: "58%", t: "8%", s: 3, d: "13s", o: 0.2 },
            { l: "70%", t: "48%", s: 5, d: "11s", o: 0.22 },
            { l: "84%", t: "76%", s: 4, d: "12s", o: 0.18 },
            { l: "94%", t: "20%", s: 3, d: "14s", o: 0.24 },
            { l: "40%", t: "55%", s: 6, d: "15s", o: 0.16 },
            { l: "5%", t: "50%", s: 5, d: "9s", o: 0.28 },
            { l: "16%", t: "8%", s: 4, d: "10s", o: 0.22 },
            { l: "24%", t: "28%", s: 3, d: "14s", o: 0.18 },
            { l: "33%", t: "12%", s: 6, d: "12s", o: 0.24 },
            { l: "42%", t: "76%", s: 3, d: "11s", o: 0.26 },
            { l: "50%", t: "90%", s: 5, d: "13s", o: 0.2 },
            { l: "60%", t: "26%", s: 4, d: "9s", o: 0.22 },
            { l: "67%", t: "86%", s: 3, d: "15s", o: 0.18 },
            { l: "74%", t: "12%", s: 5, d: "12s", o: 0.24 },
            { l: "82%", t: "52%", s: 3, d: "10s", o: 0.26 },
            { l: "88%", t: "88%", s: 4, d: "14s", o: 0.2 },
            { l: "96%", t: "38%", s: 5, d: "11s", o: 0.22 },
            { l: "10%", t: "66%", s: 3, d: "13s", o: 0.18 },
            { l: "37%", t: "34%", s: 4, d: "16s", o: 0.2 },
            { l: "55%", t: "60%", s: 3, d: "10s", o: 0.24 },
            { l: "92%", t: "72%", s: 6, d: "12s", o: 0.16 },
          ].map((p, i) => (
            <span
              key={i}
              className="hero-particle absolute rounded-full bg-[#E3B341]"
              style={{
                left: p.l,
                top: p.t,
                width: p.s,
                height: p.s,
                "--d": p.d,
                "--o": p.o,
              }}
            />
          ))}
        </div>

        <div className="relative max-w-screen-xl mx-auto px-6 lg:px-8 pt-14 pb-24 lg:pt-20 lg:pb-28 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* LEFT — copy */}
          <div>
            <h1 className="hero-rise font-display font-bold leading-[1.05] tracking-tight mt-4 text-4xl sm:text-5xl xl:text-[64px] text-white" style={{ animationDelay: "120ms" }}>
              QUALITY THAT<br />YOU <span style={{ color: "#E3B341" }}>TRUST</span>
            </h1>
            <p className="hero-rise font-body text-white/70 text-base lg:text-lg leading-relaxed max-w-xl mt-5" style={{ animationDelay: "240ms" }}>
              Everyday essentials sourced, processed and packed to luxury-grade standards — delivered at scale for wholesalers, distributors and retail partners across India.
            </p>

            <div className="hero-rise flex flex-wrap items-center gap-4 mt-8" style={{ animationDelay: "360ms" }}>
              <Link to="/our-offering" className="group inline-flex items-center gap-2 rounded-full px-8 py-3.5 font-body font-bold text-sm lg:text-base bg-[#C9A227] text-[#00152C] transition-all duration-300 hover:bg-[#b08d1e] hover:-translate-y-0.5 hover:shadow-[0_10px_30px_rgba(201,162,39,0.35)] active:scale-95">
                Explore Products
                <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </Link>
              <a href="#distributor-form" className="group inline-flex items-center gap-2 border border-[#C9A227]/70 text-[#E3B341] hover:bg-[#C9A227]/10 font-body font-bold text-sm lg:text-base px-8 py-3.5 rounded-full transition-all duration-300 hover:-translate-y-0.5">
                Wholesale Enquiry
              </a>
            </div>
          </div>

          {/* RIGHT — product photography shelf */}
          <Reveal x={50} y={0}>
            <div className="relative">
              {/* brand logos strip above */}
              <div className="flex justify-center gap-4 mb-5">
                {BRANDS.map((b) => (
                  <img key={b.name} src={b.img} alt={b.name} className="h-7 sm:h-9 w-auto object-contain opacity-80 hover:opacity-100 transition-opacity" />
                ))}
              </div>
              {/* styled frame */}
              <div className="rounded-[28px] p-2.5 bg-white shadow-[0_35px_80px_rgba(11,44,77,0.18)] rotate-[0.6deg]">
                <div ref={heroImgRef} className="overflow-hidden rounded-[22px] will-change-transform">
                  <img src={wholesaleBanner} alt="ISSI wholesale range" className="w-full h-[220px] sm:h-[280px] lg:h-[330px] object-cover" />
                </div>
                <div className="mx-6 h-2 rounded-full mt-3" style={{ background: `linear-gradient(90deg, transparent, ${NAVY}22, ${GOLD}55, ${NAVY}22, transparent)` }} />
              </div>
            </div>
          </Reveal>
        </div>

        {/* curved white transition */}
        <svg
          className="absolute bottom-0 left-0 w-full h-[50px] lg:h-[80px] text-white"
          viewBox="0 0 1440 110"
          preserveAspectRatio="none"
          fill="currentColor"
          aria-hidden="true"
        >
          <path d="M0,110 L0,64 C240,10 480,0 720,18 C960,36 1200,84 1440,58 L1440,110 Z" />
        </svg>
      </section>

      {/* ═══════════ OUR PRODUCTS GRID ═══════════ */}
      <section className="bg-white pt-14 pb-10 lg:pt-20 lg:pb-14 relative overflow-hidden">
        <div className="max-w-screen-xl mx-auto px-6 lg:px-8">
          <Reveal>
            <div className="text-center mb-14 lg:mb-16">
              <h2 className="font-display text-3xl md:text-4xl lg:text-[42px] font-bold tracking-tight" style={{ color: NAVY }}>Our Products</h2>
              <p className="font-body text-gray-500 text-[15px] md:text-base leading-[1.75] max-w-[720px] mx-auto mt-4">
                From everyday kitchen staples to premium wellness essentials — ready for retail, wholesale and bulk orders across India.
              </p>
            </div>
          </Reveal>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 lg:gap-7">
            {PRODUCTS.map((p, i) => (
              <Reveal key={p.title} y={36} delay={(i % 4) * 110}>
                <Link to={p.link} className="group flex flex-col h-full bg-white sm:rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300">
                  <div className="relative overflow-hidden aspect-[4/3]">
                    <img src={p.image} alt={p.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                    <span className="absolute -bottom-4 left-4 w-10 h-10 rounded-xl flex items-center justify-center text-white shadow-md transition-transform duration-300 group-hover:scale-110" style={{ backgroundColor: NAVY }}>
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.7}>
                        <path strokeLinecap="round" strokeLinejoin="round" d={p.icon} />
                      </svg>
                    </span>
                  </div>
                  <div className="flex flex-col flex-1 p-5 pt-7">
                    <h3 className="font-display text-lg lg:text-xl font-bold tracking-tight" style={{ color: NAVY }}>{p.title}</h3>
                    <p className="font-body text-gray-500 text-sm leading-relaxed mt-2 flex-1">{p.desc}</p>
                    <span className="inline-flex items-center gap-1.5 font-body font-semibold text-sm tracking-wide mt-4 transition-all duration-300 group-hover:gap-3" style={{ color: GOLD }}>
                      Know more
                      <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                      </svg>
                    </span>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════ OUR BRANDS ═══════════ */}
      <section className="pb-20 lg:pb-28 bg-white">
        <div className="max-w-screen-xl mx-auto px-6 lg:px-8">
          <Reveal>
            <div className="text-center mb-12">
              <p className="font-body text-xs font-bold tracking-[0.28em] uppercase mb-3" style={{ color: "#0057A0" }}>Brands we proudly work with</p>
              <h2 className="font-display text-3xl md:text-4xl lg:text-[42px] font-bold tracking-tight" style={{ color: NAVY }}>Our Brands</h2>
            </div>
          </Reveal>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-5">
            {BRANDS.map((b, i) => (
              <Reveal key={b.name} y={30} delay={i * 100}>
                <div className="group h-28 sm:h-32 border rounded-2xl flex items-center justify-center bg-white transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl cursor-pointer" style={{ borderColor: `${NAVY}1a` }}>
                  <img src={b.img} alt={b.name} className="max-h-16 w-auto object-contain opacity-75 group-hover:opacity-100 transition-all duration-300 group-hover:scale-105" />
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={200}>
            <div className="text-center mt-10">
              <Link to="/" className="btn-outline-navy">Explore All Brands</Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ═══════════ STATS BANNER ═══════════ */}
      <section className="py-4 lg:py-8" style={{ backgroundColor: NAVY }}>
        <div className="max-w-screen-xl mx-auto px-6 lg:px-8 grid grid-cols-2 lg:grid-cols-4 divide-x divide-white/10">
          <Stat target={8} suffix="+" label="Product Categories" />
          <Stat target={5} suffix="" label="Trusted Brands" />
          <Stat target={3} suffix="+" label="Years of Excellence" />
          <Stat target={120} suffix="+" label="Distribution Network" />
        </div>
      </section>

      {/* ═══════════ PROCESS TIMELINE ═══════════ */}
      <section className="py-20 lg:py-28" style={{ backgroundColor: CREAM }}>
        <div className="max-w-screen-xl mx-auto px-6 lg:px-8">
          <Reveal>
            <div className="text-center mb-16">
              <p className="font-body text-xs font-bold tracking-[0.28em] uppercase mb-3" style={{ color: GOLD }}>From estate to shelf</p>
              <h2 className="font-display text-3xl md:text-4xl lg:text-[42px] font-bold tracking-tight" style={{ color: NAVY }}>The Journey of Every Product</h2>
            </div>
          </Reveal>

          <div ref={timelineRef} className="relative">
            {/* connecting line (desktop) */}
            <div className="hidden lg:block absolute top-[34px] left-[7%] right-[7%] border-t-2 border-dashed opacity-25" style={{ borderColor: NAVY }} />
            <div
              className={`hidden lg:block absolute top-[33px] left-[7%] h-0.5 transition-all ease-out ${timelineOn ? "w-[86%]" : "w-0"}`}
              style={{ background: `linear-gradient(90deg, ${NAVY}, ${GOLD})`, transitionDuration: "2200ms" }}
            />

            <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-y-10 gap-x-4">
              {STEPS.map((s, i) => (
                <div key={s.title} className="flex flex-col items-center text-center">
                  <span
                    className={`relative z-10 w-[68px] h-[68px] rounded-full bg-white border-2 flex items-center justify-center shadow-md transition-all duration-700 ${timelineOn ? "scale-100 opacity-100" : "scale-50 opacity-0"}`}
                    style={{ borderColor: i % 2 ? GOLD : NAVY, color: i % 2 ? GOLD : NAVY, transitionDelay: `${i * 260}ms` }}
                  >
                    <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.6}>
                      <path strokeLinecap="round" strokeLinejoin="round" d={s.d} />
                    </svg>
                    <span className="absolute -top-1.5 -right-1.5 w-5 h-5 rounded-full text-white text-[10px] font-bold flex items-center justify-center font-body" style={{ backgroundColor: GOLD }}>{i + 1}</span>
                  </span>
                  <span
                    className={`mt-4 font-body text-sm font-bold transition-all duration-700 ${timelineOn ? "translate-y-0 opacity-100" : "translate-y-3 opacity-0"}`}
                    style={{ color: NAVY, transitionDelay: `${i * 260 + 150}ms` }}
                  >
                    {s.title}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════ WHY CHOOSE US ═══════════ */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-screen-xl mx-auto px-6 lg:px-8">
          <Reveal>
            <div className="text-center mb-14">
              <p className="font-body text-xs font-bold tracking-[0.28em] uppercase mb-3" style={{ color: GOLD }}>Partner advantages</p>
              <h2 className="font-display text-3xl md:text-4xl lg:text-[42px] font-bold tracking-tight" style={{ color: NAVY }}>Why Choose Us</h2>
            </div>
          </Reveal>

          <Reveal y={36}>
            <div className="rounded-3xl p-8 lg:p-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10" style={{ backgroundColor: CREAM }}>
              {WHY.map((w) => (
                <div key={w.title} className="text-center group cursor-default">
                  <span className="inline-flex w-14 h-14 rounded-2xl bg-white border items-center justify-center shadow-sm transition-all duration-300 group-hover:-translate-y-1 group-hover:shadow-lg group-hover:border-[#C9962C]/50 group-hover:text-[#C9962C]" style={{ borderColor: `${NAVY}1a`, color: NAVY }}>
                    <svg className="w-6 h-6 transition-transform duration-300 group-hover:scale-110" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.7}>
                      <path strokeLinecap="round" strokeLinejoin="round" d={w.d} />
                    </svg>
                  </span>
                  <h3 className="font-display text-base lg:text-lg font-bold mt-4" style={{ color: NAVY }}>{w.title}</h3>
                  <p className="font-body text-gray-500 text-sm leading-relaxed mt-1.5">{w.desc}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ═══════════ BECOME A DISTRIBUTOR — FORM ═══════════ */}
      <section id="distributor-form" className="bg-white py-16 lg:py-24">
        <div className="max-w-[1100px] mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-[38%_1fr] gap-10 lg:gap-12 items-stretch">

            {/* Left Column — Message + Registered Office */}
            <Reveal x={-50} y={0} className="h-full">
              <div className="flex flex-col h-full sm:rounded-2xl overflow-hidden border border-gray-100 bg-white shadow-sm">
                <div className="px-8 pt-10 pb-8" style={{ backgroundColor: CREAM }}>
                  <h2 className="font-display text-3xl lg:text-4xl font-bold leading-snug mb-3" style={{ color: NAVY }}>
                    Leave us a message
                  </h2>
                  <p className="font-body text-gray-500 text-sm leading-relaxed">
                    Your message will be sent to our teams, who will get back to you as soon as they can. Please be advised that weekends and public holidays might delay response time.
                  </p>
                </div>

                <div className="px-8 py-10 flex-1 flex flex-col">
                  <h3 className="font-display text-lg font-bold mb-4" style={{ color: NAVY }}>Registered Office</h3>
                  <p className="font-body text-gray-500 text-sm leading-relaxed mb-5">
                    Village - Bhatara Ghat, Tehasil - Bisfi,<br />
                    District - Madhubani, Bihar,<br />
                    Pin - 847122
                  </p>

                  <div className="space-y-4">
                    <div className="flex items-center gap-3.5">
                      <span className="w-9 h-9 rounded-lg flex items-center justify-center shrink-0 text-white" style={{ backgroundColor: GOLD }}>
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                      </span>
                      <p className="font-body text-sm text-gray-700"><span className="font-bold">Tel:</span> +91 9958666303</p>
                    </div>
                    <div className="flex items-center gap-3.5">
                      <span className="w-9 h-9 rounded-lg flex items-center justify-center shrink-0 text-white" style={{ backgroundColor: GOLD }}>
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                      </span>
                      <p className="font-body text-sm text-gray-700"><span className="font-bold">Email:</span> contactus@issiportal.in</p>
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>

            {/* Right Column — Company Information Form */}
            <Reveal x={50} y={0} delay={120} className="h-full">
              <div className="sm:rounded-2xl p-6 sm:p-8 lg:p-9 border border-gray-100 bg-[#F1F1F1] flex flex-col h-full">
                <h2 className="font-display text-2xl font-bold mb-6" style={{ color: NAVY }}>Company Information</h2>

                <form className="flex-1 flex flex-col" onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-5 flex-1">
                    {[
                      { name: "companyName", label: "Name Of The Company", type: "text" },
                      { name: "personName", label: "Name Of The Person/Proprietor", type: "text" },
                      { name: "state", label: "State", type: "text" },
                      { name: "city", label: "City", type: "text" },
                      { name: "district", label: "District", type: "text" },
                      { name: "address", label: "Address", type: "text" },
                      { name: "pinCode", label: "Pin Code", type: "text" },
                      { name: "phone", label: "Phone", type: "tel" },
                      { name: "storageArea", label: "Storage Area", type: "text" },
                      { name: "existingDistributorship", label: "Existing Distributorship", type: "text" },
                      { name: "investment", label: "Investment", type: "text" },
                      { name: "commercialVehicles", label: "Commercial Vehicles", type: "text" },
                    ].map((f) => (
                      <div key={f.name}>
                        <label className="block font-body text-xs text-gray-500 mb-1.5">
                          {f.label}<span className="text-red-600">*</span>
                        </label>
                        <input type={f.type} name={f.name} value={form[f.name]} onChange={handleChange}
                          className="w-full bg-transparent border-b border-gray-400 focus:border-[#C9962C] outline-none py-1.5 text-sm font-body text-gray-800 transition-colors" />
                      </div>
                    ))}

                    {/* Brands Dropdown */}
                    <div className="sm:col-span-2">
                      <label className="block font-body text-xs text-gray-500 mb-1.5">Brand(s) Interested in</label>
                      <div className="relative">
                        <select name="brands" value={form.brands} onChange={handleChange}
                          className="w-full bg-transparent border-b border-gray-400 focus:border-[#C9962C] outline-none py-1.5 text-sm font-body text-gray-800 appearance-none pr-8 transition-colors">
                          <option value="">Select a brand</option>
                          <option value="tea">Tea</option>
                          <option value="spices">Spices</option>
                          <option value="babyCare">Baby Care</option>
                          <option value="beauty">Beauty &amp; Wellbeing</option>
                        </select>
                        <svg className="absolute right-0 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500 pointer-events-none" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                        </svg>
                      </div>
                    </div>
                  </div>

                  <button type="submit" className="btn-gold self-start mt-8">Submit</button>
                </form>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ═══════════ LET'S GROW TOGETHER — PREMIUM CTA (above footer) ═══════════ */}
      <GrowTogetherBanner />

      {/* ───────── global styles ───────── */}
      <style>{`
        html { scroll-behavior: smooth; }

        @keyframes heroRise {
          from { opacity: 0; transform: translateY(34px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .hero-rise {
          opacity: 0;
          animation: heroRise 0.9s cubic-bezier(.22,.61,.36,1) forwards;
        }
        @media (prefers-reduced-motion: reduce) {
          .hero-rise { opacity: 1; animation: none; }
          .hero-particle { animation: none !important; opacity: var(--o, .25) !important; transform: none !important; }
        }

        @keyframes heroParticleDrift {
          0%   { transform: translateY(0) translateX(0); opacity: var(--o, .25); }
          50%  { transform: translateY(-26px) translateX(14px); opacity: calc(var(--o, .25) * .55); }
          100% { transform: translateY(0) translateX(0); opacity: var(--o, .25); }
        }
        .hero-particle { animation: heroParticleDrift var(--d, 9s) ease-in-out infinite; }

        .btn-outline-navy {
          display: inline-flex; align-items: center; gap: 0.5rem;
          border-radius: 9999px; padding: 0.875rem 2rem;
          font-weight: 700; font-size: 0.875rem;
          border: 2px solid ${NAVY}; color: ${NAVY};
          background: transparent;
          transition: all .3s ease;
        }
        .btn-outline-navy:hover {
          background: ${NAVY}; color: #fff;
          transform: translateY(-2px);
        }
        .btn-outline-navy:active { transform: scale(.96); }

        .btn-gold {
          display: inline-flex; align-items: center;
          border-radius: 9999px; padding: 0.65rem 2rem;
          font-weight: 600; font-size: 0.875rem;
          color: #fff; background-color: ${GOLD};
          box-shadow: 0 10px 26px rgba(201,150,44,0.32);
          transition: all .3s ease;
        }
        .btn-gold:hover {
          transform: translateY(-2px);
          box-shadow: 0 14px 34px rgba(201,150,44,0.45);
        }
        .btn-gold:active { transform: scale(.96); }
      `}</style>
    </>
  );
}
