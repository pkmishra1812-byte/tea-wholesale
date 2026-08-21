// src/components/shared/AboutSubNav.jsx
import { Link, useLocation } from "react-router-dom";

const ITEMS = [
  { label: "About Us", path: "/our-company" },
  { label: "History & Evolution", path: "/our-company/history-evolution" },
  { label: "Mission, Vision and Core Values", path: "/vision-mission-values" },
];

export default function AboutSubNav() {
  const { pathname } = useLocation();

  return (
    <div className="w-full bg-white border-b border-gray-200">
      <div className="max-w-screen-xl mx-auto px-6 lg:px-8">
        <div className="scrollbar-hide flex items-center gap-8 lg:gap-10 overflow-x-auto whitespace-nowrap py-4">
          {ITEMS.map((item) => {
            const isActive = pathname === item.path;
            return (
              <Link
                key={item.path}
                to={item.path}
                className={`shrink-0 rounded-full px-7 py-3 font-body text-lg lg:text-xl font-bold tracking-wide transition-all duration-300 ${
                  isActive
                    ? "bg-[#2952E3] text-white shadow-md shadow-[#2952E3]/30"
                    : "text-[#0d1b4c]/70 hover:text-[#2952E3] hover:underline underline-offset-4 decoration-[#2952E3]"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}
