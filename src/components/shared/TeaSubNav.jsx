// src/components/shared/TeaSubNav.jsx
import { Link, useLocation } from "react-router-dom";

const ITEMS = [
  { label: "Our Tea Collection", path: "/our-offering/tea" },
  { label: "Tea Machinery & Accessories", path: "/our-offering/tea-machinery" },
];

export default function TeaSubNav() {
  const { pathname } = useLocation();

  return (
    <>
      <style>{`
        @keyframes teaFrameSweep {
          0%        { transform: translateX(-130%) skewX(-18deg); opacity: 0; }
          15%       { opacity: 1; }
          85%       { opacity: 1; }
          97%, 100% { transform: translateX(320%) skewX(-18deg); opacity: 0; }
        }
        .tea-nav-frame {
          position: relative;
          isolation: isolate;
        }
        .tea-nav-frame::before {
          content: "";
          position: absolute;
          inset: 0;
          width: 30%;
          background: linear-gradient(
            90deg,
            transparent 0%,
            rgba(41, 82, 227, 0.07) 40%,
            rgba(200, 162, 75, 0.22) 52%,
            rgba(41, 82, 227, 0.07) 64%,
            transparent 100%
          );
          transform: translateX(-130%) skewX(-18deg);
          animation: teaFrameSweep 6s ease-in-out infinite;
          pointer-events: none;
          z-index: -1;
        }
        @media (prefers-reduced-motion: reduce) {
          .tea-nav-frame::before { animation: none; display: none; }
        }
      `}</style>

      <div className="w-full bg-[#FDF6EC]">
        <div className="max-w-screen-xl mx-auto px-6 lg:px-8 py-4 lg:py-5 flex justify-center">
          <nav className="tea-nav-frame bg-[#FDF6EC] backdrop-blur-sm sm:rounded-2xl lg:rounded-3xl shadow-lg border-2 border-white px-4 sm:px-8 lg:px-12 py-3 lg:py-4 inline-flex max-w-full overflow-hidden">
            <div className="scrollbar-hide flex items-center justify-center gap-8 lg:gap-10 whitespace-nowrap overflow-x-auto">
              {ITEMS.map((item) => {
                const isActive = pathname === item.path;
                return (
                  <Link
                    key={item.path}
                    to={item.path}
                    className={`shrink-0 rounded-full px-7 py-3 font-body text-lg lg:text-xl font-bold tracking-wide transition-all duration-300 ${
                      isActive
                        ? "text-[#0d1b4c] underline underline-offset-8 decoration-[#0d1b4c]"
                        : "text-[#0d1b4c]/70 hover:text-[#0d1b4c] hover:underline underline-offset-4 decoration-[#0d1b4c] hover:-translate-y-0.5"
                    }`}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </div>
          </nav>
        </div>
      </div>
    </>
  );
}
