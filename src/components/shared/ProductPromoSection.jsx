import { useEffect, useRef, useState } from "react";
import videoThumb from "../../assets/baby-video-thumb.jpg";
import bathImg from "../../assets/baby-bath.png";
import doctorImg from "../../assets/baby-doctor.png";

const NAVY = "#0A3D7A";
const BLUE = "#1E88E5";
const GRAY = "#333333";

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

const BanIcon = (p) => (
  <Icon {...p}>
    <circle cx="12" cy="12" r="9" />
    <line x1="5.8" y1="5.8" x2="18.2" y2="18.2" />
  </Icon>
);

const LeafIcon = (p) => (
  <Icon {...p}>
    <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z" />
    <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12" />
  </Icon>
);

const StethoscopeIcon = (p) => (
  <Icon {...p}>
    <path d="M11 2v2M5 2v2M5 3H4a2 2 0 0 0-2 2v4a6 6 0 0 0 12 0V5a2 2 0 0 0-2-2h-1" />
    <path d="M8 15a6 6 0 0 0 12 0v-3" />
    <circle cx="20" cy="10" r="2" />
  </Icon>
);

const CheckCircleIcon = ({ size = 17, strokeWidth = 2.2, className = "" }) => (
  <Icon size={size} strokeWidth={strokeWidth} className={className}>
    <circle cx="12" cy="12" r="9" />
    <path d="m8.5 12.2 2.4 2.4 4.6-4.8" />
  </Icon>
);

const MedalIcon = ({ size = 13, strokeWidth = 2.4, className = "" }) => (
  <Icon size={size} strokeWidth={strokeWidth} className={className}>
    <circle cx="12" cy="9" r="5.5" />
    <path d="M9 13.8 7.5 21l4.5-2.4L16.5 21 15 13.8" />
  </Icon>
);

const BADGES = [
  { icon: BanIcon, caption: "No harmful chemicals, no sulphates, no silicones" },
  { icon: LeafIcon, caption: "Coconut-based mild cleansers" },
  { icon: StethoscopeIcon, caption: "Triple-tested formulas" },
];

const FEATURES = [
  { icon: SnowflakeIcon, title: "Helps protect against winter skin", desc: "Locks in moisture to keep delicate skin soft and supple through dry, cold months." },
  { icon: ShieldCheckIcon, title: "Helps protect against germs", desc: "Cleanses away germs while staying gentle on your baby\u2019s developing skin barrier." },
  { icon: PulseIcon, title: "Takes care of baby\u2019s natural skin pH", desc: "A pH-balanced formula supports your baby\u2019s natural skin defences with every wash." },
];

const SPECIALISTS = ["Dermatologists", "Ophthalmologists", "Paediatricians"];

function VideoCard() {
  return (
    <a href="https://www.youtube.com" target="_blank" rel="noreferrer" aria-label="Watch the ISSI Baby Wash film on YouTube" className="group relative block w-full max-w-[260px] overflow-hidden rounded-[10px] shadow-[0_18px_44px_rgba(10,61,122,0.22)] transition-transform duration-300 hover:-translate-y-1">
      <img src={videoThumb} alt="ISSI Baby Wash product film thumbnail" loading="lazy" className="aspect-video w-full object-cover" />
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

function BadgeItem({ icon: BadgeIcon, caption }) {
  return (
    <div className="flex flex-col items-center text-center">
      <span className="flex h-16 w-16 items-center justify-center rounded-full border-2 bg-white shadow-[0_6px_18px_rgba(30,136,229,0.14)] sm:h-20 sm:w-20" style={{ borderColor: `${BLUE}B3` }}>
        <BadgeIcon size={30} className="text-[#1E88E5]" />
      </span>
      <p className="mt-3.5 max-w-[150px] text-[12.5px] font-bold leading-snug sm:max-w-none sm:text-[13px]" style={{ color: NAVY }}>
        {caption}
      </p>
    </div>
  );
}

function DoctorCard() {
  return (
    <div className="flex flex-col items-center gap-4 shrink-0">
      <div className="relative w-full max-w-[200px] overflow-hidden rounded-[10px] shadow-[0_18px_44px_rgba(10,61,122,0.2)]">
        <img src={doctorImg} alt="Doctor gently examining a baby with a stethoscope" loading="lazy" className="aspect-[3/4] w-full object-cover" />
        <span className="absolute bottom-3 left-3 inline-flex items-center gap-1.5 rounded-full bg-[#1E88E5] px-3 py-1.5 shadow-md">
          <MedalIcon className="text-white" />
          <span className="text-[10px] font-bold uppercase tracking-[0.12em] text-white">Derm Tested</span>
        </span>
      </div>
      <div className="flex items-center gap-2">
        <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-white shadow-md">
          <img src={doctorImg} alt="Dermatologist" loading="lazy" className="w-full h-full object-cover object-top" />
        </div>
        <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-white shadow-md">
          <img src={doctorImg} alt="Ophthalmologist" loading="lazy" className="w-full h-full object-cover object-center" />
        </div>
        <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-white shadow-md">
          <img src={doctorImg} alt="Paediatrician" loading="lazy" className="w-full h-full object-cover object-bottom" />
        </div>
      </div>
    </div>
  );
}

function BabyOilBottle() {
  return (
    <svg viewBox="0 0 160 320" className="w-[70%] max-w-[180px] h-auto drop-shadow-2xl" aria-label="ISSI Baby Oil bottle illustration">
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

function ProductBottle({ label, accent }) {
  return (
    <svg viewBox="0 0 160 320" className="w-[70%] max-w-[180px] h-auto drop-shadow-2xl" aria-label={`${label} illustration`}>
      <rect x="36" y="80" width="88" height="190" rx="18" fill={accent || "#FDF5EC"} stroke="#E8D5C0" strokeWidth="1.5" />
      <rect x="44" y="110" width="72" height="100" rx="8" fill="#FFFFFF" stroke="#E8D5C0" strokeWidth="1" />
      <text x="80" y="138" textAnchor="middle" fontFamily="Poppins, sans-serif" fontWeight="700" fontSize="14" fill="#0A3D7A">ISSI</text>
      <text x="80" y="155" textAnchor="middle" fontFamily="Poppins, sans-serif" fontWeight="500" fontSize="7" fill="#0A3D7A">{label}</text>
      <rect x="58" y="64" width="44" height="18" rx="6" fill="#E8C9A0" stroke="#D4B088" strokeWidth="1.2" />
      <rect x="74" y="60" width="12" height="6" rx="3" fill="#D4B088" />
      <line x1="62" y1="73" x2="98" y2="73" stroke="#D4B088" strokeWidth="0.8" />
      <rect x="62" y="72" width="36" height="12" rx="3" fill={accent || "#FDF5EC"} stroke="#E8D5C0" strokeWidth="1" />
      <ellipse cx="80" cy="272" rx="44" ry="6" fill="#0A3D7A" opacity="0.06" />
    </svg>
  );
}

const PRODUCTS = [
  {
    title: "ISSI\u00AE Baby Oil With Vitamin\u00A0E",
    headerBg: "#E8F4FD", heroBg: "#FFF8F0", bodyBg: "#FFF5EE", bottle: "oil",
    paragraphs: [
      "Your little one spends every waking moment growing, exploring and pouring boundless energy into discovering the world. When the day finally winds down, a gentle, restorative routine helps ease them into the deep, comfortable sleep their growing bodies need.",
      "Our baby oil is the perfect addition to a calming bedtime massage. Enriched with soothing, naturally derived ingredients and free from harsh chemicals, it glides smoothly over delicate skin \u2014 turning nightly routine into a moment of pure bonding and relaxation.",
      "Clinically proven to be mild and gentle, this formula leaves a pleasant, lingering fragrance that stays with your baby through the night. Ideal before or after bath time, it helps strengthen hair, deeply nourish skin and lock in softness that lasts.",
    ],
    closing: "Because every touch is a promise of care \u2014 trusted by parents, designed for your baby\u2019s journey from day\u00A01.",
  },
  {
    title: "ISSI\u00AE Baby Shop Bar",
    headerBg: "#E8F5E9", heroBg: "#F0FFF4", bodyBg: "#F0FFF4", bottle: "bar",
    paragraphs: [
      "Bath time should feel like a gentle hug \u2014 soft, calming and full of care. Our baby bar is designed to make every lather a moment of warmth between you and your little one.",
      "Crafted with nourishing, plant-based ingredients, this bar cleanses without stripping natural oils. Its creamy, rich foam wraps your baby\u2019s skin in comfort, leaving it feeling soft, smooth and naturally protected.",
      "Dermatologically tested and free from harsh chemicals, it\u2019s gentle enough for newborn skin yet effective enough for everyday use. A tiny bar that delivers big, lasting care.",
    ],
    closing: "A daily ritual of purity and trust \u2014 crafted for your baby\u2019s delicate skin from day\u00A01.",
  },
  {
    title: "ISSI\u00AE Baby Vitamin\u00A0E Powder",
    headerBg: "#FFF3E0", heroBg: "#FFFAF0", bodyBg: "#FFFAF0", bottle: "powder",
    paragraphs: [
      "Keeping your baby fresh and comfortable throughout the day is every parent\u2019s quiet goal. Our vitamin\u00A0E powder is designed to be that invisible shield \u2014 light, breathable and always working.",
      "Infused with vitamin\u00A0E and free from talc, it absorbs excess moisture instantly while allowing skin to breathe naturally. A soft, protective layer that keeps delicate areas dry and irritation-free.",
      "Clinically tested and dermatologist approved, this powder is safe from day\u00A01. Simply dust on after bath time or during diaper changes for all-day freshness your baby can feel.",
    ],
    closing: "Light as love, protective as a parent\u2019s touch \u2014 designed for your baby\u2019s comfort from day\u00A01.",
  },
  {
    title: "ISSI\u00AE Baby Wipes",
    headerBg: "#E3F2FD", heroBg: "#F0F7FF", bodyBg: "#F0F7FF", bottle: "wipes",
    paragraphs: [
      "Every quick clean-up is an act of care. From sticky fingers to messy mealtimes, our wipes are always ready to gently restore comfort in an instant.",
      "Made with plant-based fibres and enriched with aloe vera, each wipe is thick, soft and pH-balanced \u2014 effective enough for messes yet gentle enough for the most sensitive skin.",
      "Dermatologically tested and free from alcohol, parabens and harsh preservatives, these wipes clean without compromise. A trusted companion in every parent\u2019s bag.",
    ],
    closing: "Gentle in every swipe, trusted in every moment \u2014 designed for your baby from day\u00A01.",
  },
  {
    title: "ISSI\u00AE Baby Cotton Bud",
    headerBg: "#FDE8E8", heroBg: "#FFF5F5", bodyBg: "#FFF5F5", bottle: "bud",
    paragraphs: [
      "The tiniest areas deserve the most careful attention. Our cotton buds are designed with precision and softness in mind, making delicate cleaning safe and easy.",
      "Featuring a narrow, flexible tip and 100% pure cotton heads, they glide gently into ears, nose folds and skin creases without causing irritation or discomfort.",
      "Hypoallergenic and clinically tested, each bud is sturdy yet soft \u2014 a small tool that makes a big difference in your baby\u2019s daily hygiene routine.",
    ],
    closing: "Precision meets tenderness \u2014 crafted for your baby\u2019s delicate care from day\u00A01.",
  },
  {
    title: "ISSI\u00AE Baby Tooth Brush",
    headerBg: "#F3E5F5", heroBg: "#FBF5FF", bodyBg: "#FBF5FF", bottle: "brush",
    paragraphs: [
      "Every smile starts with a gentle beginning. Our baby toothbrush is designed to make early oral care comfortable, safe and even enjoyable for your little one.",
      "Extra-soft bristles clean emerging teeth without irritating tender gums, while the ergonomic handle gives parents a secure grip for guided brushing sessions.",
      "Paediatrician recommended and BPA-free, this toothbrush turns a daily necessity into a bonding ritual \u2014 building healthy habits from the very first tooth.",
    ],
    closing: "Small brush, big beginnings \u2014 designed for your baby\u2019s first smile from day\u00A01.",
  },
];

function ProductBlock({ product }) {
  const Bottle = product.bottle === "oil" ? BabyOilBottle : () => <ProductBottle label={product.bottle} accent={product.bodyBg} />;
  return (
    <div className="rounded-[10px] overflow-hidden" style={{ backgroundColor: product.bodyBg }}>
      <div className="w-full px-6 py-3 rounded-t-lg" style={{ backgroundColor: product.headerBg }}>
        <h3 className="font-poppins font-bold text-lg sm:text-xl tracking-tight text-center" style={{ color: NAVY }}>
          {product.title.split(" ").slice(0, 2).join(" ")}<sup className="text-xs align-super">&reg;</sup> {product.title.split(" ").slice(2).join(" ")}
        </h3>
      </div>
      <div className="relative flex items-center justify-center py-10 rounded-b-lg" style={{ backgroundColor: product.heroBg }}>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200px] h-[260px] rounded-full opacity-40 blur-sm bg-[#FDE8E8]" />
        <div className="relative z-10"><Bottle /></div>
        <div className="absolute top-4 right-4 z-20">
          <div className="w-14 h-14 rounded-full bg-[#F8D7DA] border-2 border-[#E7838A] flex items-center justify-center shadow-lg">
            <span className="text-[7px] font-bold text-center leading-tight px-0.5" style={{ color: NAVY }}>
              Helps protect from day&nbsp;1*
            </span>
          </div>
        </div>
      </div>
      <h2 className="mt-6 px-6 font-poppins font-bold text-xl sm:text-2xl leading-tight tracking-tight" style={{ color: NAVY }}>
        {product.title}
      </h2>
      <div className="mt-4 px-6 flex flex-col gap-4">
        {product.paragraphs.map((p, i) => (
          <p key={i} className="text-[14px] leading-relaxed" style={{ color: GRAY }}>{p}</p>
        ))}
        <p className="text-[14px] leading-relaxed font-medium" style={{ color: NAVY }}>{product.closing}</p>
      </div>
      <p className="mt-4 px-6 pb-6 text-xs italic text-[#767676]">*Dermatologically tested. Suitable for use from day 1.</p>
    </div>
  );
}

export default function BabyOilPromoSection() {
  const sectionRef = useRef(null);
  const [inView, setInView] = useState(false);

  const tripleTestedRef = useRef(null);
  const tripleTestedSpacerRef = useRef(null);
  const toothBrushRef = useRef(null);
  const babyWipesRef = useRef(null);
  const rightColRef = useRef(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return undefined;
    const io = new IntersectionObserver(([entry]) => setInView(entry.isIntersecting), { threshold: 0.08 });
    io.observe(el);
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    const pinEl = tripleTestedRef.current;
    const spacerEl = tripleTestedSpacerRef.current;
    const toothEl = toothBrushRef.current;
    const wipesEl = babyWipesRef.current;
    const rightCol = rightColRef.current;
    if (!pinEl || !spacerEl || !toothEl || !wipesEl || !rightCol) return;

    const PIN_TOP = 160;
    let lastY = window.scrollY;
    let ticking = false;
    let pinned = false;

    function isDesktop() {
      return window.matchMedia("(min-width: 1024px)").matches;
    }

    function syncPosition() {
      if (!pinned) return;
      const colR = rightCol.getBoundingClientRect();
      pinEl.style.left = colR.left + "px";
      pinEl.style.width = colR.width + "px";
    }

    function pin() {
      const pinH = spacerEl.offsetHeight;
      const colR = rightCol.getBoundingClientRect();
      spacerEl.style.height = pinH + "px";
      pinEl.style.position = "fixed";
      pinEl.style.top = PIN_TOP + "px";
      pinEl.style.left = colR.left + "px";
      pinEl.style.width = colR.width + "px";
      pinEl.style.zIndex = "40";
      pinEl.classList.add("is-pinned");
      pinned = true;
    }

    function unpin() {
      pinEl.style.position = "";
      pinEl.style.top = "";
      pinEl.style.left = "";
      pinEl.style.width = "";
      pinEl.style.zIndex = "";
      pinEl.classList.remove("is-pinned");
      spacerEl.style.height = "";
      pinned = false;
    }

    function tick() {
      if (!isDesktop()) { ticking = false; return; }

      const y = window.scrollY;
      const delta = y - lastY;
      const goingDown = delta > 0;
      const goingUp = delta < 0;
      lastY = y;

      const vh = window.innerHeight;

      if (!pinned) {
        if (goingDown) {
          const pinR = pinEl.getBoundingClientRect();
          if (pinR.top <= PIN_TOP && pinR.bottom > 0) {
            pin();
          }
        }
      } else {
        const wipesR = wipesEl.getBoundingClientRect();
        const footerEl = document.querySelector("footer");
        let shouldUnpin = false;

        if (goingDown) {
          const footerVisible = footerEl
            ? footerEl.getBoundingClientRect().top <= vh
            : (vh + y) >= (document.body.scrollHeight - 50);
          if (footerVisible) shouldUnpin = true;
        }

        if (goingUp && wipesR.bottom >= vh) shouldUnpin = true;

        if (shouldUnpin) {
          unpin();
        } else {
          syncPosition();
        }
      }

      ticking = false;
    }

    function onScroll() {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(tick);
      }
    }

    function onResize() {
      if (!isDesktop() && pinned) unpin();
      onScroll();
    }

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onResize, { passive: true });
    requestAnimationFrame(tick);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onResize);
      if (pinned) unpin();
    };
  }, []);

  return (
    <>
    <section ref={sectionRef} className="w-full bg-white" aria-label="ISSI Baby Wash product details">
      <div className={`transition-all duration-700 ease-out ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>

        {/* ══════════════════════════════════════════════════════
            TWO-COLUMN LAYOUT — both scroll together naturally
        ══════════════════════════════════════════════════════ */}
        <div className="flex flex-col lg:flex-row lg:items-start">

          {/* LEFT 60% — Products */}
          <div className="relative lg:w-[60%]">
            <div className="mx-auto max-w-screen-md px-6 lg:px-10 py-16 lg:py-28 flex flex-col gap-10">
              {PRODUCTS.map((product, i) => (
                <div
                  key={product.title}
                  ref={i === 3 ? babyWipesRef : i === 5 ? toothBrushRef : null}
                >
                  <ProductBlock product={product} />
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT 40% — info blocks */}
          <div ref={rightColRef} className="relative lg:w-[40%] flex flex-col">

            {/* Block 1 — Micelle + Video */}
            <div className="px-6 lg:px-10 pt-8 lg:pt-10 pb-8 lg:pb-10">
              <div className="px-6 lg:px-10 gap-5 py-10 lg:py-14 rounded-[10px] flex flex-col">
                <h2 className="text-[25px] sm:text-[27px] xl:text-[31px] font-poppins font-bold leading-[1.28] tracking-tight" style={{ color: NAVY }}>
                  Designed with our jumbo cleansing micelle that helps{" "}
                  <span style={{ color: BLUE }}>protect your baby skin against irritation, from day&nbsp;1</span>
                </h2>
                <p className="text-[15px] leading-relaxed" style={{ color: GRAY }}>
                  One gentle sweep lifts away dirt and grime without stripping moisture &mdash; leaving delicate skin calm, soft and comfortable after every bath.
                </p>
                <p className="text-xs italic text-[#767676]">*Micellar mildness clinically assessed. Suitable for use from day 1.</p>
                <div className="mt-2"><VideoCard /></div>
              </div>
            </div>

            {/* Block 2 — Features */}
            <div className="px-6 lg:px-10 pt-8 lg:pt-10 pb-8 lg:pb-10">
              <div className="px-6 lg:px-10 gap-6 py-10 lg:py-14 rounded-[10px] flex flex-col">
                <h2 className="text-[22px] sm:text-[24px] font-poppins font-bold leading-[1.28] tracking-tight" style={{ color: NAVY }}>
                  Specially designed to suit your baby&rsquo;s skin and eyes, from day&nbsp;1
                </h2>
                <div className="w-full overflow-hidden rounded-[10px] shadow-[0_16px_40px_rgba(10,61,122,0.18)]">
                  <img src={bathImg} alt="Mother bathing her happy baby in a tub full of bubbles" loading="lazy" className="aspect-[16/9] w-full object-cover transition-transform duration-700 hover:scale-[1.04]" />
                </div>
                <div className="flex flex-col gap-4">
                  {FEATURES.map(({ icon: FIcon, title, desc }) => (
                    <div key={title} className="flex gap-3.5">
                      <span className="mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border bg-white shadow-[0_4px_14px_rgba(30,136,229,0.12)]" style={{ borderColor: `${BLUE}8C` }}>
                        <FIcon size={18} strokeWidth={2} className="text-[#1E88E5]" />
                      </span>
                      <div>
                        <h3 className="text-[15px] font-extrabold leading-snug" style={{ color: NAVY }}>{title}</h3>
                        <p className="mt-1 text-[14px] leading-relaxed" style={{ color: GRAY }}>{desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <p className="text-[13px] italic text-[#767676] mt-1">*Ophthalmologically &amp; dermatologically tested on every formulation.</p>
              </div>
            </div>

            {/* Block 3 — Badges */}
            <div className="px-6 lg:px-10 pt-[10px] lg:pt-3 pb-[10px] lg:pb-3">
              <div className="px-6 lg:px-10 gap-[10px] items-center text-center py-3 lg:py-4 rounded-[10px] flex flex-col">
                <h2 className="text-[25px] sm:text-[27px] xl:text-[31px] font-poppins font-bold leading-[1.28] tracking-tight" style={{ color: NAVY }}>
                  When it comes to your baby,{" "}
                  <span style={{ color: BLUE }}>we&rsquo;re as picky as you</span>
                </h2>
                <p className="text-[15px] leading-relaxed" style={{ color: GRAY }}>
                  which is why our products are designed with{" "}
                  <span className="font-semibold" style={{ color: BLUE }}>only baby safe ingredients</span>
                </p>
                <div className="grid grid-cols-3 gap-4 sm:gap-6">
                  {BADGES.map((badge) => (
                    <BadgeItem key={badge.caption} {...badge} />
                  ))}
                </div>
              </div>
            </div>

            {/* Block 4 — Triple-tested by doctors */}
            <div ref={tripleTestedSpacerRef}>
              <div ref={tripleTestedRef} data-section="triple-tested">
                <div className="px-6 lg:px-10 py-8 lg:py-10">
                  <div className="px-6 lg:px-10 gap-8 items-start py-10 lg:py-14 rounded-[10px] flex flex-col">
                    <div className="flex flex-col-reverse gap-10 sm:flex-row sm:items-start sm:gap-9 w-full">
                      <div className="min-w-0">
                        <h2 className="text-[25px] sm:text-[27px] xl:text-[31px] font-poppins font-bold leading-[1.28] tracking-tight" style={{ color: NAVY }}>
                          Triple-tested by doctors
                        </h2>
                        <p className="mt-4 text-[15px] leading-relaxed" style={{ color: GRAY }}>
                          Every ISSI Baby Wash formula is reviewed and approved by independent specialists before it reaches your home.
                        </p>
                        <ul className="mt-6 space-y-3">
                          {SPECIALISTS.map((specialist) => (
                            <li key={specialist} className="flex items-center gap-2.5 text-[15px] font-bold" style={{ color: BLUE }}>
                              <CheckCircleIcon className="shrink-0" />
                              {specialist}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <DoctorCard />
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>

    {/* Spacer to ensure footer has space below all sections */}
    <div className="h-10 lg:h-16" />
    </>
  );
}
