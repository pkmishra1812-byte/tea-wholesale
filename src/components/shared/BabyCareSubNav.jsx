// src/components/shared/BabyCareSubNav.jsx
import { Link, useLocation } from "react-router-dom";

const ITEMS = [
  { label: "Baby Care Product", path: "/our-offering/baby-care/product" },
  { label: "Baby Care Accessories", path: "/our-offering/baby-care/accessories" },
];

export default function BabyCareSubNav() {
  const { pathname } = useLocation();

  return (
    <>
      <style>{`
        @keyframes babyLightSweep {
          0%        { transform: translateX(-130%) skewX(-18deg); }
          97%, 100% { transform: translateX(320%) skewX(-18deg); }
        }
        @keyframes babyGlowPulse {
          0%, 100% { box-shadow: 0 8px 24px rgba(0,87,160,0.30), 0 0 0 0 rgba(200,162,75,0.50); }
          50%      { box-shadow: 0 10px 28px rgba(0,87,160,0.38), 0 0 0 7px rgba(200,162,75,0); }
        }
        .baby-nav-premium {
          position: relative;
          overflow: hidden;
          isolation: isolate;
          background-color: #FDF6EC;
        }
        .baby-nav-premium::before {
          content: "";
          position: absolute;
          top: 0;
          bottom: 0;
          left: 0;
          width: 35%;
          background: linear-gradient(
            90deg,
            transparent 0%,
            rgba(255, 255, 255, 0.55) 42%,
            rgba(200, 162, 75, 0.20) 52%,
            transparent 100%
          );
          transform: translateX(-130%) skewX(-18deg);
          animation: babyLightSweep 6s ease-in-out infinite;
        }
        .baby-tab-active {
          animation: babyGlowPulse 3s ease-in-out infinite;
        }
      `}</style>

      <div className="baby-nav-premium w-full">
        <div className="relative z-10 max-w-screen-xl mx-auto px-6 lg:px-8">
          <div className="scrollbar-hide flex items-center justify-center gap-4 sm:gap-6 lg:gap-10 overflow-x-auto whitespace-nowrap py-5">
            {ITEMS.map((item) => {
              const isActive = pathname === item.path;
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`shrink-0 rounded-full px-5 py-2 sm:px-6 sm:py-2.5 font-display text-sm sm:text-base font-bold tracking-wide transition-all duration-300 ${
                    isActive
                      ? "baby-tab-active bg-[#0057A0] text-white ring-2 ring-[#C8A24B]"
                      : "bg-white text-[#333] border border-[#C8A24B]/60 hover:bg-[#0057A0] hover:text-white hover:border-[#0057A0] hover:-translate-y-0.5"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}
