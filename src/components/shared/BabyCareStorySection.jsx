// src/components/shared/BabyCareStorySection.jsx
import doctorImg from "../../assets/baby-doctor.png";
import Reveal from "../company/Reveal";

const NAVY = "#0A3D7A";
const BLUE = "#1E88E5";
const GRAY = "#333333";

/* ── line-art icons (24×24, stroke-based) ─────────────────────── */
function Icon({ children, size = 30, strokeWidth = 1.6, className = "" }) {
  return (
    <svg
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
      className={className}
    >
      {children}
    </svg>
  );
}

export const BanIcon = (p) => (
  <Icon {...p}>
    <circle cx="12" cy="12" r="9" />
    <line x1="5.8" y1="5.8" x2="18.2" y2="18.2" />
  </Icon>
);

export const LeafIcon = (p) => (
  <Icon {...p}>
    <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z" />
    <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12" />
  </Icon>
);

export const StethoscopeIcon = (p) => (
  <Icon {...p}>
    <path d="M11 2v2M5 2v2M5 3H4a2 2 0 0 0-2 2v4a6 6 0 0 0 12 0V5a2 2 0 0 0-2-2h-1" />
    <path d="M8 15a6 6 0 0 0 12 0v-3" />
    <circle cx="20" cy="10" r="2" />
  </Icon>
);

export const SnowflakeIcon = (p) => (
  <Icon {...p}>
    <line x1="2" y1="12" x2="22" y2="12" />
    <line x1="12" y1="2" x2="12" y2="22" />
    <path d="m20 16-4-4 4-4M4 8l4 4-4 4M16 4l-4 4-4-4M8 20l4-4 4 4" />
  </Icon>
);

export const ShieldCheckIcon = (p) => (
  <Icon {...p}>
    <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" />
    <path d="m9 12 2 2 4-4" />
  </Icon>
);

export const PulseIcon = (p) => (
  <Icon {...p}>
    <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
  </Icon>
);

export const CheckCircleIcon = ({ size = 17, strokeWidth = 2.2, className = "" }) => (
  <Icon size={size} strokeWidth={strokeWidth} className={className}>
    <circle cx="12" cy="12" r="9" />
    <path d="m8.5 12.2 2.4 2.4 4.6-4.8" />
  </Icon>
);

export const MedalIcon = ({ size = 13, strokeWidth = 2.4, className = "" }) => (
  <Icon size={size} strokeWidth={strokeWidth} className={className}>
    <circle cx="12" cy="9" r="5.5" />
    <path d="M9 13.8 7.5 21l4.5-2.4L16.5 21 15 13.8" />
  </Icon>
);

/* ── content data ─────────────────────────────────────────────── */
const BADGES = [
  { icon: BanIcon, caption: "No harmful chemicals, no sulphates, no silicones" },
  { icon: LeafIcon, caption: "Coconut-based mild cleansers" },
  { icon: StethoscopeIcon, caption: "Triple-tested formulas" },
];

const SPECIALISTS = ["Dermatologists", "Ophthalmologists", "Paediatricians"];

/* ── sub-components ───────────────────────────────────────────── */
function DoctorCard() {
  return (
    <div className="flex flex-col items-center gap-4 shrink-0">
      {/* main doctor photo */}
      <div className="relative w-full max-w-[200px] overflow-hidden rounded-[10px] shadow-[0_18px_44px_rgba(10,61,122,0.2)]">
        <img
          src={doctorImg}
          alt="Doctor gently examining a baby with a stethoscope"
          loading="lazy"
          className="aspect-[3/4] w-full object-cover"
        />
        <span className="absolute bottom-3 left-3 inline-flex items-center gap-1.5 rounded-full bg-[#1E88E5] px-3 py-1.5 shadow-md">
          <MedalIcon className="text-white" />
          <span className="text-[10px] font-bold uppercase tracking-[0.12em] text-white">
            Derm Tested
          </span>
        </span>
      </div>
      {/* small thumbnail photos */}
      <div className="flex items-center gap-2">
        <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-white shadow-md">
          <img
            src={doctorImg}
            alt="Dermatologist"
            loading="lazy"
            className="w-full h-full object-cover object-top"
          />
        </div>
        <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-white shadow-md">
          <img
            src={doctorImg}
            alt="Ophthalmologist"
            loading="lazy"
            className="w-full h-full object-cover object-center"
          />
        </div>
        <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-white shadow-md">
          <img
            src={doctorImg}
            alt="Paediatrician"
            loading="lazy"
            className="w-full h-full object-cover object-bottom"
          />
        </div>
      </div>
    </div>
  );
}

function BadgeItem({ icon: BadgeIcon, caption }) {
  return (
    <div className="flex flex-col items-center text-center">
      <span className="flex h-16 w-16 items-center justify-center rounded-full border-2 bg-white shadow-[0_6px_18px_rgba(30,136,229,0.14)] sm:h-20 sm:w-20" style={{ borderColor: `${BLUE}B3` }}>
        <BadgeIcon size={30} className="text-[#1E88E5]" />
      </span>
      <p className="mt-3.5 max-w-[150px] text-[12.5px] font-bold leading-snug text-[#0A3D7A] sm:max-w-none sm:text-[13px]" style={{ color: NAVY }}>
        {caption}
      </p>
    </div>
  );
}

/* ── main section ─────────────────────────────────────────────── */
export default function BabyCareStorySection() {
  return (
    <section id="baby-care-story" className="overflow-hidden bg-white pt-10 pb-10 lg:pt-[72px] lg:pb-14" aria-label="Why parents trust ISSI Baby Care">
      <div className="mx-auto max-w-screen-xl px-6 lg:px-8">
        {/* Left 60% intentionally empty on desktop — asymmetric premium layout */}
        <div className="grid grid-cols-1 gap-y-20 lg:grid-cols-10 lg:gap-x-6 lg:gap-y-28">
          {/* ── Block 2 ───────────────────────────────────────── */}
          <Reveal className="lg:col-start-7 lg:col-end-11" delay={100}>
            <h2 className="max-w-md text-[25px] font-poppins font-bold leading-[1.28] tracking-tight sm:text-[27px] xl:text-[31px]" style={{ color: NAVY }}>
              When it comes to your baby,{" "}
              <span style={{ color: BLUE }}>we&rsquo;re as picky as you</span>
            </h2>
            <p className="mt-4 text-[15px] leading-relaxed" style={{ color: GRAY }}>
              which is why our products are designed with{" "}
              <span className="font-semibold" style={{ color: BLUE }}>
                only baby safe ingredients
              </span>
            </p>

            <div className="mt-10 grid grid-cols-3 gap-4 sm:gap-6">
              {BADGES.map((badge) => (
                <BadgeItem key={badge.caption} {...badge} />
              ))}
            </div>
          </Reveal>

          {/* ── Block 4 ───────────────────────────────────────── */}
          <Reveal className="pb-2 lg:col-start-7 lg:col-end-11">
            <div className="flex flex-col-reverse gap-10 sm:flex-row sm:items-start sm:justify-end sm:gap-9">
              <div className="min-w-0">
                <h2 className="text-[25px] font-poppins font-bold leading-[1.28] tracking-tight sm:text-[27px] xl:text-[31px]" style={{ color: NAVY }}>
                  Triple-tested by doctors
                </h2>
                <p className="mt-4 text-[15px] leading-relaxed" style={{ color: GRAY }}>
                  Every ISSI Baby Wash formula is reviewed and approved by independent
                  specialists before it reaches your home.
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
          </Reveal>
        </div>
      </div>
    </section>
  );
}
