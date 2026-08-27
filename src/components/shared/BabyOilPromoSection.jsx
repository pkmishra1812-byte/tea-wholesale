// src/components/shared/BabyOilPromoSection.jsx
import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import videoThumb from "../../assets/baby-video-thumb.jpg";
import bathImg from "../../assets/baby-bath.png";

const NAVY = "#0A3D7A";
const BLUE = "#1E88E5";
const GRAY = "#333333";
const LIGHT_BLUE = "#E8F4FD";
const SOFT_PINK = "#FDE8E8";

/* ── line-art icons ──────────────────────────────────────────── */
function Icon({ children, size = 24, strokeWidth = 1.6, className = "" }) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" aria-hidden className={className}>
      {children}
    </svg>
  );
}

const SnowflakeIcon = (p) => (
  <Icon {...p}>
    <line x1="2" y1="12" x2="22" y2="12" />
    <line x1="12" y1="2" x2="12" y2="22" />
    <path d="m20 16-4-4 4-4M4 8l4 4-4 4M16 4l-4 4-4-4M8 20l4-4 4 4" />
  </Icon>
);

const ShieldCheckIcon = (p) => (
  <Icon {...p}>
    <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" />
    <path d="m9 12 2 2 4-4" />
  </Icon>
);

const PulseIcon = (p) => (
  <Icon {...p}>
    <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
  </Icon>
);

const FEATURES = [
  { icon: SnowflakeIcon, title: "Helps protect against winter skin", desc: "Locks in moisture to keep delicate skin soft and supple through dry, cold months." },
  { icon: ShieldCheckIcon, title: "Helps protect against germs", desc: "Cleanses away germs while staying gentle on your baby's developing skin barrier." },
  { icon: PulseIcon, title: "Takes care of baby's natural skin pH", desc: "A pH-balanced formula supports your baby's natural skin defences with every wash." },
];

/* ── SVG baby oil bottle ──────────────────────────────────────── */
function BabyOilBottle() {
  return (
    <svg viewBox="0 0 160 320" className="w-[80%] h-auto max-h-[235px] drop-shadow-2xl" aria-label="ISSI Baby Oil bottle illustration">
      <rect x="36" y="80" width="88" height="190" rx="18" fill="#FDF5EC" stroke="#E8D5C0" strokeWidth="1.5" />
      <rect x="44" y="110" width="72" height="100" rx="8" fill="#FFFFFF" stroke="#E8D5C0" strokeWidth="1" />
      <text x="80" y="138" textAnchor="middle" fontFamily="Poppins, sans-serif" fontWeight="700" fontSize="14" fill="#0A3D7A">ISSI</text>
      <text x="80" y="152" textAnchor="middle" fontFamily="Poppins, sans-serif" fontWeight="400" fontSize="7" fill="#0A3D7A">Baby Oil</text>
      <path d="M80 170c-3-3-5-5-5-8a3.5 3.5 0 015-2 3.5 3.5 0 015 2c0 3-2 5-5 8z" fill="#F2B705" />
      <circle cx="80" cy="192" r="12" fill="#E8F4FD" stroke="#1E88E5" strokeWidth="0.8" />
      <text x="80" y="190" textAnchor="middle" fontFamily="Poppins, sans-serif" fontWeight="600" fontSize="5" fill="#1E88E5">VITAMIN</text>
      <text x="80" y="198" textAnchor="middle" fontFamily="Poppins, sans-serif" fontWeight="700" fontSize="7" fill="#1E88E5">E</text>
      <rect x="58" y="64" width="44" height="18" rx="6" fill="#E8C9A0" stroke="#D4B088" strokeWidth="1.2" />
      <rect x="74" y="60" width="12" height="6" rx="3" fill="#D4B088" />
      <line x1="62" y1="73" x2="98" y2="73" stroke="#D4B088" strokeWidth="0.8" />
      <rect x="62" y="72" width="36" height="12" rx="3" fill="#FDF5EC" stroke="#E8D5C0" strokeWidth="1" />
      <rect x="40" y="195" width="80" height="70" rx="14" fill="#F5E6D0" opacity="0.35" />
      <ellipse cx="80" cy="272" rx="44" ry="6" fill="#0A3D7A" opacity="0.06" />
    </svg>
  );
}

/* ── YouTube video card ───────────────────────────────────────── */
function VideoCard() {
  return (
    <a
      href="https://www.youtube.com"
      target="_blank"
      rel="noreferrer"
      aria-label="Watch the ISSI Baby Wash film on YouTube"
      className="group relative block w-full max-w-[260px] overflow-hidden rounded-[10px] shadow-[0_18px_44px_rgba(10,61,122,0.22)] transition-transform duration-300 hover:-translate-y-1"
    >
      <img
        src={videoThumb}
        alt="ISSI Baby Wash bottle — product film thumbnail"
        loading="lazy"
        className="aspect-video w-full object-cover"
      />
      <span className="absolute inset-0 bg-gradient-to-t from-[#062a55]/80 via-transparent to-transparent" />
      <span className="absolute left-1/2 top-1/2 flex h-12 w-12 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white/95 shadow-lg transition-transform duration-300 group-hover:scale-110">
        <svg viewBox="0 0 24 24" width="18" height="18" fill={BLUE} aria-hidden className="ml-0.5">
          <path d="M7 4.5v15l13-7.5z" />
        </svg>
      </span>
      <span className="absolute bottom-2.5 left-2.5 inline-flex items-center gap-1.5 rounded-md bg-black/70 px-2.5 py-1.5 text-[10px] font-semibold tracking-wide text-white backdrop-blur-sm transition-colors duration-300 group-hover:bg-[#cc0000]">
        Watch on YouTube
      </span>
    </a>
  );
}

/* ── reusable Baby Oil section ─────────────────────────────────── */
function BabyOilBlock({ linkTo = "/our-offering/baby-care/product/massage-oil" }) {
  return (
    <div className="flex flex-col">
      <div
        className="w-full py-3 px-5 rounded-t-lg"
        style={{ backgroundColor: LIGHT_BLUE }}
      >
        <h3
          className="font-poppins font-bold text-lg sm:text-xl tracking-tight text-center"
          style={{ color: NAVY }}
        >
          ISSI<sup className="text-xs align-super">&reg;</sup> Baby Oil Products
        </h3>
      </div>

      <div
        className="relative flex justify-center py-10"
        style={{ backgroundColor: "#FFF8F8" }}
      >
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[180px] h-[220px] rounded-full opacity-40 blur-sm"
          style={{ backgroundColor: SOFT_PINK }}
        />
        <div className="relative z-10">
          <BabyOilBottle />
        </div>
        <div className="absolute top-4 right-4 z-20">
          <div className="w-14 h-14 rounded-full bg-[#F8D7DA] border-2 border-[#E7838A] flex items-center justify-center shadow-lg">
            <span
              className="text-[7px] font-bold text-center leading-tight px-0.5"
              style={{ color: NAVY }}
            >
              Helps protect from day&nbsp;1*
            </span>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-4 pt-6">
        <h2
          className="font-poppins font-bold text-xl sm:text-2xl leading-tight tracking-tight"
          style={{ color: NAVY }}
        >
          ISSI<sup className="text-sm align-super">&reg;</sup> Baby Oil With Vitamin&nbsp;E
        </h2>

        <p className="text-[14px] leading-relaxed" style={{ color: GRAY }}>
          Your little one spends every waking moment growing, exploring and
          pouring boundless energy into discovering the world. When the day
          finally winds down, a gentle, restorative routine helps ease them
          into the deep, comfortable sleep their growing bodies need.
        </p>

        <p className="text-[14px] leading-relaxed" style={{ color: GRAY }}>
          Our baby oil is the perfect addition to a calming bedtime massage.
          Enriched with soothing, naturally derived ingredients and free from
          harsh chemicals, it glides smoothly over delicate skin — turning
          nightly routine into a moment of pure bonding and relaxation.
        </p>

        <p className="text-[14px] leading-relaxed" style={{ color: GRAY }}>
          Clinically proven to be mild and gentle, this formula leaves a
          pleasant, lingering fragrance that stays with your baby through the
          night. Ideal before or after bath time, it helps strengthen hair,
          deeply nourish skin and lock in softness that lasts.
        </p>

        <p className="text-[14px] leading-relaxed font-medium" style={{ color: NAVY }}>
          Because every touch is a promise of care — trusted by parents,
          designed for your baby&rsquo;s journey from day&nbsp;1.
        </p>

        <p className="text-xs italic text-[#767676]">
          *Dermatologically tested. Suitable for use from day 1.
        </p>

        <div className="mt-1">
          <Link
            to={linkTo}
            className="baby-oil-btn group inline-flex items-center gap-2 rounded-full px-5 py-2 font-poppins font-semibold text-sm text-white"
            style={{ backgroundColor: NAVY }}
          >
            Discover Baby Oil
            <svg
              className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2.5}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14m-6-6l6 6-6 6" />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
}

/* ── reusable new product section ──────────────────────────────── */
function NewProductSection({ title, description, linkTo, iconBg }) {
  return (
    <div className="flex flex-col">
      <div
        className="w-full py-3 px-5 rounded-t-lg"
        style={{ backgroundColor: iconBg || LIGHT_BLUE }}
      >
        <h3
          className="font-poppins font-bold text-lg sm:text-xl tracking-tight text-center"
          style={{ color: NAVY }}
        >
          {title}
        </h3>
      </div>

      <div
        className="relative flex justify-center items-center py-10"
        style={{ backgroundColor: "#FFF8F8" }}
      >
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[180px] h-[220px] rounded-full opacity-40 blur-sm"
          style={{ backgroundColor: SOFT_PINK }}
        />
        <div className="relative z-10 w-[80%] flex items-center justify-center">
          <BabyOilBottle />
        </div>
      </div>

      <div className="flex flex-col gap-4 pt-6">
        <h2
          className="font-poppins font-bold text-xl sm:text-2xl leading-tight tracking-tight"
          style={{ color: NAVY }}
        >
          {title}
        </h2>

        <p className="text-[14px] leading-relaxed" style={{ color: GRAY }}>
          {description}
        </p>

        <p className="text-xs italic text-[#767676]">
          *Dermatologically tested. Suitable for use from day 1.
        </p>

        <div className="mt-1">
          <Link
            to={linkTo}
            className="baby-oil-btn group inline-flex items-center gap-2 rounded-full px-5 py-2 font-poppins font-semibold text-sm text-white"
            style={{ backgroundColor: NAVY }}
          >
            Discover {title}
            <svg
              className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2.5}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14m-6-6l6 6-6 6" />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
}

/* ── new products data ─────────────────────────────────────────── */
const NEW_PRODUCTS = [
  {
    title: "ISSI\u00AE Baby Shop Bar",
    description: "A gentle, nourishing bar crafted to cleanse your baby's delicate skin without stripping natural moisture. Enriched with soothing ingredients, it leaves skin soft, smooth and naturally protected after every wash.",
    linkTo: "/our-offering/baby-care/product/baby-shop-bar",
    iconBg: "#E8F4FD",
  },
  {
    title: "ISSI\u00AE Baby Vitamin E Powder",
    description: "A finely milled, talc-free powder infused with Vitamin E that keeps your baby's skin fresh, dry and comfortable. It absorbs excess moisture instantly while providing a protective barrier against irritation.",
    linkTo: "/our-offering/baby-care/product/baby-vitamin-e-powder",
    iconBg: "#FFF3E0",
  },
  {
    title: "ISSI\u00AE Baby Wipes",
    description: "Ultra-soft, pH-balanced wipes designed for everyday gentle cleansing. Made with plant-based fibres and enriched with aloe vera, they effectively clean while keeping your baby's skin hydrated and happy.",
    linkTo: "/our-offering/baby-care/product/baby-wipes",
    iconBg: "#E8F5E9",
  },
  {
    title: "ISSI\u00AE Baby Cotton Bud",
    description: "Soft, hypoallergenic cotton buds with a narrow, flexible tip designed for safe and precise cleaning of your baby's delicate areas. Gentle enough for ears, nose and skin folds.",
    linkTo: "/our-offering/baby-care/product/baby-cotton-bud",
    iconBg: "#FDE8E8",
  },
  {
    title: "ISSI\u00AE Baby Tooth Brush",
    description: "A specially designed toothbrush with extra-soft bristles and a comfortable grip handle to make early oral care easy and fun. Gently cleans emerging teeth and tender gums without causing irritation.",
    linkTo: "/our-offering/baby-care/product/baby-tooth-brush",
    iconBg: "#F3E5F5",
  },
];

/* ── main section ─────────────────────────────────────────────── */
export default function BabyOilPromoSection() {
  const sectionRef = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return undefined;
    const io = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { threshold: 0.2 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="w-full overflow-hidden bg-white pt-14 pb-4 lg:pt-24 lg:pb-8" aria-label="Micelle and Baby Oil products">
      <div
        className={`transition-all duration-700 ease-out ${
          inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
        }`}
      >
        <div className="w-full px-6 sm:px-10 lg:px-16 xl:px-24">
          <div className="grid grid-cols-1 lg:grid-cols-10 gap-12 lg:gap-20 items-start">

            {/* ── LEFT 60% — 5 Baby Oil Sections ────────────────── */}
            <div className="lg:col-span-6 flex flex-col gap-12">
              <BabyOilBlock />
              <BabyOilBlock />
              <BabyOilBlock />
              <BabyOilBlock />
              <BabyOilBlock />
            </div>

            {/* ── RIGHT 40% — Micelle + Specially designed + 5 new products ── */}
            <div className="lg:col-span-4 flex flex-col gap-28">
              {/* micelle block */}
              <div className="flex flex-col gap-6">
                <h2
                  className="text-[25px] font-poppins font-bold leading-[1.28] tracking-tight sm:text-[27px] xl:text-[31px]"
                  style={{ color: NAVY }}
                >
                  Designed with our jumbo cleansing micelle that helps{" "}
                  <span style={{ color: BLUE }}>
                    protect your baby skin against irritation, from day&nbsp;1
                  </span>
                </h2>

                <p className="text-[15px] leading-relaxed" style={{ color: GRAY }}>
                  One gentle sweep lifts away dirt and grime without stripping moisture —
                  leaving delicate skin calm, soft and comfortable after every bath.
                </p>

                <p className="text-xs italic text-[#767676]">
                  *Micellar mildness clinically assessed. Suitable for use from day 1.
                </p>

                <div className="mt-2">
                  <VideoCard />
                </div>
              </div>

              {/* specially designed block */}
              <div className="flex flex-col gap-5">
                <h2
                  className="text-[22px] sm:text-[24px] font-poppins font-bold leading-[1.28] tracking-tight"
                  style={{ color: NAVY }}
                >
                  Specially designed to suit your baby&rsquo;s skin and eyes, from day&nbsp;1
                </h2>

                <div className="w-[85%] overflow-hidden rounded-[10px] shadow-[0_16px_40px_rgba(10,61,122,0.18)]">
                  <img
                    src={bathImg}
                    alt="Mother bathing her happy baby in a tub full of bubbles"
                    loading="lazy"
                    className="aspect-[16/9] w-full object-cover transition-transform duration-700 hover:scale-[1.04]"
                  />
                </div>

                <div className="flex flex-col gap-4">
                  {FEATURES.map(({ icon: FIcon, title, desc }) => (
                    <div key={title} className="flex gap-3.5">
                      <span
                        className="mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border bg-white shadow-[0_4px_14px_rgba(30,136,229,0.12)]"
                        style={{ borderColor: `${BLUE}8C` }}
                      >
                        <FIcon size={18} strokeWidth={2} className="text-[#1E88E5]" />
                      </span>
                      <div>
                        <h3 className="text-[15px] font-extrabold leading-snug" style={{ color: NAVY }}>{title}</h3>
                        <p className="mt-1 text-[14px] leading-relaxed" style={{ color: GRAY }}>{desc}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <p className="text-[13px] italic text-[#767676] mt-1">
                  *Ophthalmologically &amp; dermatologically tested on every formulation.
                </p>
              </div>

              {/* ── NEW PRODUCT SECTIONS ─────────────────────── */}
              {NEW_PRODUCTS.map((product) => (
                <div key={product.title} className="flex flex-col">
                  <NewProductSection {...product} />
                </div>
              ))}
            </div>

          </div>
        </div>
      </div>

      {/* ── scoped styles ──────────────────────────────────── */}
      <style>{`
        .baby-oil-btn {
          box-shadow: 0 8px 22px rgba(10, 61, 122, 0.28);
          transition: all .3s ease;
        }
        .baby-oil-btn:hover {
          background-color: #082D5C;
          box-shadow: 0 10px 30px rgba(10, 61, 122, 0.42);
          transform: scale(1.04);
        }
        .baby-oil-btn:active { transform: scale(0.96); }

        @media (prefers-reduced-motion: reduce) {
          .baby-oil-btn:hover { animation: none; transform: none; }
        }
      `}</style>
    </section>
  );
}
