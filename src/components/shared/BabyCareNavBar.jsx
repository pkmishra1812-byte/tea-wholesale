// src/components/shared/BabyCareNavBar.jsx
import { Link, useLocation } from "react-router-dom";

const LINKS = [
  { label: "Our Products", path: "/our-offering/baby-care/product" },
  { label: "Preparing for Your Baby", path: "/our-offering/baby-care/preparing-for-your-baby" },
  { label: "Caring for your baby", path: "/our-offering/baby-care/caring-for-your-baby" },
];

export default function BabyCareNavBar() {
  const { pathname } = useLocation();

  return (
    <nav className="w-full bg-white">
      <div className="max-w-screen-xl mx-auto px-6 lg:px-8">
        <ul className="scrollbar-hide flex items-center justify-center gap-2 lg:gap-3 overflow-x-auto whitespace-nowrap py-5 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {LINKS.map(({ label, path }) => {
            const isActive = pathname === path;
            return (
              <li key={label} className="shrink-0">
                <Link
                  to={path}
                  className={`rounded-full px-6 py-3 font-body text-base lg:text-lg font-bold tracking-wide transition-all duration-300 ${
                    isActive
                      ? "text-[#2952E3] underline underline-offset-8 decoration-[#2952E3]"
                      : "text-[#0d1b4c]/70 hover:text-[#2952E3] hover:underline underline-offset-4 decoration-[#2952E3]"
                  }`}
                >
                  {label}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
}
