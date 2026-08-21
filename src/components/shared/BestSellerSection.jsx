// src/components/shared/BestSellerSection.jsx
import productImg from "../../assets/teafarming.png"; // replace with your tea packet image

const leafPattern = `url("data:image/svg+xml,%3Csvg width='220' height='220' viewBox='0 0 220 220' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' stroke='%23C8A24B' stroke-opacity='0.09' stroke-width='2'%3E%3Cpath d='M60 160 Q100 105 140 160 Q100 172 60 160Z'/%3E%3Cpath d='M60 160 Q100 105 140 160 Q100 172 60 160Z' transform='translate(0 50)'/%3E%3Cpath d='M110 30 Q140 60 110 92 Q80 60 110 30Z'/%3E%3Cpath d='M150 120 Q172 145 150 168 Q128 145 150 120Z'/%3E%3C/g%3E%3C/svg%3E")`;

const leftFeatures = [
  { icon: "star", label: "Boosts Immunity" },
  { icon: "cube", label: "Enhances Focus & Energy" },
  { icon: "bag", label: "Aids Digestion & Detox" },
];

const rightFeatures = [
  { icon: "leaf", label: "Reduces Stress & Anxiety" },
  { icon: "gift", label: "Helps in Weight Management" },
  { icon: "package", label: "No Artificial Flavors" },
];

function FeatureIcon({ type }) {
  const common = "w-full h-full";
  const stroke = "currentColor";

  switch (type) {
    case "star":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke={stroke} strokeWidth="1.2" className={common}>
          <path d="M12 2l2.4 7.4H22l-6 4.6 2.3 7L12 16.4 5.7 21l2.3-7L2 9.4h7.6z" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
    case "cube":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke={stroke} strokeWidth="1.2" className={common}>
          <path d="M21 16V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 003 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0021 16z" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M3.27 6.96L12 12.01l8.73-5.05M12 22.08V12" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
    case "bag":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke={stroke} strokeWidth="1.2" className={common}>
          <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z" strokeLinecap="round" strokeLinejoin="round" />
          <line x1="3" y1="6" x2="21" y2="6" strokeLinecap="round" />
          <path d="M16 10a4 4 0 01-8 0" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
    case "leaf":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke={stroke} strokeWidth="1.2" className={common}>
          <path d="M17 8C8 10 5.9 16.17 3.82 21.34l1.89.66l.95-2.3c.48.17.98.3 1.34.3C19 20 22 3 22 3c-1 2-8 2.25-13 3.25S2 11.5 2 13.5s1.75 3.75 1.75 3.75" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
    case "gift":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke={stroke} strokeWidth="1.2" className={common}>
          <polyline points="20,12 20,22 4,22 4,12" strokeLinecap="round" strokeLinejoin="round" />
          <rect x="2" y="7" width="20" height="5" strokeLinecap="round" />
          <line x1="12" y1="22" x2="12" y2="7" strokeLinecap="round" />
          <path d="M12 7H7.5a2.5 2.5 0 010-5C11 2 12 7 12 7z" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M12 7h4.5a2.5 2.5 0 000-5C13 2 12 7 12 7z" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
    case "package":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke={stroke} strokeWidth="1.2" className={common}>
          <path d="M16.5 9.4l-9-5.19M21 16V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 003 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0021 16z" strokeLinecap="round" strokeLinejoin="round" />
          <polyline points="3.27,6.96 12,12.01 20.73,6.96" strokeLinecap="round" strokeLinejoin="round" />
          <line x1="12" y1="22.08" x2="12" y2="12" strokeLinecap="round" />
        </svg>
      );
    default:
      return null;
  }
}

function FeatureItem({ icon, label, align }) {
  return (
    <div className={`flex items-center gap-5 ${align === "right" ? "flex-row-reverse text-right" : ""}`}>
      <div className="shrink-0 w-14 h-14 lg:w-16 lg:h-16 rounded-full border border-gray-300 flex items-center justify-center text-gray-600">
        <div className="w-6 h-6 lg:w-7 lg:h-7">
          <FeatureIcon type={icon} />
        </div>
      </div>
      <span className="font-body text-charcoal font-bold text-sm lg:text-base leading-snug">{label}</span>
    </div>
  );
}

export default function BestSellerSection() {
  return (
    <section
      className="relative overflow-hidden"
      style={{ backgroundColor: "#FDF6EC", backgroundImage: leafPattern }}
    >
      {/* ── Content ── */}
      <div className="pt-16 lg:pt-24 pb-16 lg:pb-24">
        <div className="max-w-screen-xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="font-display text-black text-3xl lg:text-4xl font-bold leading-tight text-center mb-16 lg:mb-24">
            We Believe In Perfection In The Art Of Tea.
          </h2>
        </div>

        {/* ── Feature callouts with image in center ── */}
        <div className="max-w-screen-xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-12 items-center">
            <div className="flex flex-col gap-8 lg:gap-10 lg:pl-8">
              {leftFeatures.map((f) => (
                <FeatureItem key={f.icon} icon={f.icon} label={f.label} align="left" />
              ))}
            </div>
            <div className="flex justify-center">
              <div className="w-[220px] h-[280px] lg:w-[300px] lg:h-[380px] sm:rounded-2xl overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.18)] bg-white flex items-center justify-center">
                <img
                  src={productImg}
                  alt="Tea product"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="flex flex-col gap-8 lg:gap-10 lg:pr-8">
              {rightFeatures.map((f) => (
                <FeatureItem key={f.icon} icon={f.icon} label={f.label} align="right" />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
