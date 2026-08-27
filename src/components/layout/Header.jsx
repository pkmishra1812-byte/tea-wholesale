import { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { NAV_LINKS, NAV_LINKS_RIGHT, MEGA_MENU_CATEGORIES, SITE_CONFIG } from "../../data/navigation";
import useScrolled from "../../hooks/useScrolled";
import logo from "../../assets/logo-horizantal.png";
import logo1 from "../../assets/logo-1.png";

export default function Header() {
  const { scrolled, hidden } = useScrolled(60);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [expandedMenus, setExpandedMenus] = useState({});
  const [activeCategory, setActiveCategory] = useState("tea");
  const [searchOpen, setSearchOpen] = useState(false);

  const toggleExpand = (key) => {
    setExpandedMenus((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const currentCat = MEGA_MENU_CATEGORIES.find((c) => c.id === activeCategory) || MEGA_MENU_CATEGORIES[0];

  const linkClass = ({ isActive }) =>
    `text-brand text-[15px] font-medium transition-all duration-200 ${
      isActive
        ? "font-semibold underline underline-offset-4 decoration-2 decoration-brand"
        : "hover:underline underline-offset-4 decoration-2 decoration-brand"
    }`;

  const rightLinkClass = ({ isActive }) =>
    `text-brand text-sm font-medium transition-all duration-200 whitespace-nowrap ${
      isActive
        ? "font-semibold underline underline-offset-2"
        : "hover:underline underline-offset-2"
    }`;

  const iconClass = "text-brand hover:opacity-60 hover:scale-110 transition-all duration-200";

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? "bg-white/98 backdrop-blur-md shadow-md" : "bg-white"
        }`}
      >
        {/* Top row — collapsible on scroll (desktop only) */}
        <div
          className={`lg:transition-[max-height] lg:duration-500 lg:ease-in-out lg:overflow-hidden ${
            hidden ? "lg:max-h-0" : "lg:max-h-32"
          }`}
        >

        {/* ════════════════════════════════════════
            TOP ROW — Logo + Social icons + Cart
        ════════════════════════════════════════ */}
        <div className="border-b border-gray-200">
          <div className="max-w-screen-xl mx-auto px-6 lg:px-10 flex items-center justify-between h-14 lg:h-24">
            {/* Desktop: left — small logo + company name */}
            <div className="hidden lg:flex items-center gap-4 flex-1">
              <img src={logo1} alt="Indian Soya & Spice Industries" className="h-16 lg:h-28 w-auto object-contain" />
              <span className="text-brand text-lg lg:text-3xl tracking-tight whitespace-nowrap">
                <span className="font-bold">Indian Soya</span>
                <span className="font-normal"> &amp; Spice Industries</span>
              </span>
            </div>

            {/* Desktop: right — social + cart + horizontal logo */}
            <div className="hidden lg:flex items-center gap-3">
              <div className="flex items-center gap-1.5">
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className={`p-1.5 rounded-full ${iconClass}`}>
                  <svg className="w-[16px] h-[16px]" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter / X" className={`p-1.5 rounded-full ${iconClass}`}>
                  <svg className="w-[16px] h-[16px]" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                </a>
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className={`p-1.5 rounded-full ${iconClass}`}>
                  <svg className="w-[16px] h-[16px]" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                </a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className={`p-1.5 rounded-full ${iconClass}`}>
                  <svg className="w-[16px] h-[16px]" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" />
                  </svg>
                </a>
                <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" aria-label="YouTube" className={`p-1.5 rounded-full ${iconClass}`}>
                  <svg className="w-[16px] h-[16px]" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                  </svg>
                </a>
              </div>
              <span className="w-px h-6 bg-gray-200" />
              <button
                aria-label="Cart"
                className="p-1.5 rounded-full text-brand hover:opacity-60 transition-opacity border border-gray-200"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
                    d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13l-1.5 7h13M7 13H5.4M10 21a1 1 0 100-2 1 1 0 000 2zm8 0a1 1 0 100-2 1 1 0 000 2z"
                  />
                </svg>
              </button>
              <span className="w-px h-6 bg-gray-200" />
              <Link to="/" className="shrink-0 self-center">
                <img
                  src={logo}
                  alt="Indian Soya & Spice Industries"
                  className="h-12 lg:h-24 w-auto object-contain"
                />
              </Link>
            </div>

            {/* Mobile: Logo + Company name (left) + Search + Cart + Hamburger (right) */}
            <Link to="/" className="flex lg:hidden items-center gap-2 shrink-0">
              <img
                src={logo1}
                alt="Indian Soya & Spice Industries"
                className="h-16 w-auto object-contain"
              />
              <span className="text-brand text-sm font-bold whitespace-nowrap">
                Indian Soya <span className="font-normal">&amp; Spice Industries</span>
              </span>
            </Link>
            <div className="flex items-center gap-2 lg:hidden">
              <button aria-label="Search" onClick={() => setSearchOpen(true)} className={`p-1.5 rounded-full ${iconClass}`}>
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <circle cx="11" cy="11" r="8" />
                  <path d="m21 21-4.35-4.35" />
                </svg>
              </button>
              <button aria-label="Cart" className="p-1.5 rounded-full text-brand hover:opacity-60 transition-opacity">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
                    d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13l-1.5 7h13M7 13H5.4M10 21a1 1 0 100-2 1 1 0 000 2zm8 0a1 1 0 100-2 1 1 0 000 2z"
                  />
                </svg>
              </button>
              <button
                onClick={() => setMobileOpen(!mobileOpen)}
                aria-label="Toggle menu"
                className="p-2 sm:rounded-md text-brand hover:opacity-60 transition-opacity"
              >
                <span className={`block w-5 h-0.5 bg-brand transition-all duration-300 ${mobileOpen ? "rotate-45 translate-y-1.5" : ""}`} />
                <span className={`block w-5 h-0.5 bg-brand mt-1 transition-all duration-300 ${mobileOpen ? "opacity-0" : ""}`} />
                <span className={`block w-5 h-0.5 bg-brand mt-1 transition-all duration-300 ${mobileOpen ? "-rotate-45 -translate-y-1.5" : ""}`} />
              </button>
            </div>
          </div>
        </div>

        {/* Mobile search bar */}
        {searchOpen && (
          <div className="lg:hidden border-b border-gray-200 bg-white">
            <div className="max-w-screen-xl mx-auto px-6 flex items-center gap-2 h-12">
              <div className="flex items-center gap-2 flex-1 bg-gray-100 rounded-full px-4 py-2">
                <svg className="w-4 h-4 text-brand shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <circle cx="11" cy="11" r="8" />
                  <path d="m21 21-4.35-4.35" />
                </svg>
                <input
                  type="text"
                  placeholder="Search products..."
                  className="w-full bg-transparent border-none outline-none text-brand text-sm placeholder:text-brand/40"
                  autoFocus
                />
                <button
                  onClick={() => setSearchOpen(false)}
                  className="p-1 rounded-full hover:bg-gray-200 text-brand/60 hover:text-brand transition-colors"
                >
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        )}

        </div>

        {/* ════════════════════════════════════════
            BOTTOM ROW — Primary nav + Secondary links + Search (desktop only)
        ════════════════════════════════════════ */}
        <div className="hidden lg:block bg-transparent border-b border-transparent">
          <div className="max-w-screen-xl mx-auto px-6 lg:px-10 flex items-center justify-between h-12">
            <nav className="flex items-center gap-8" aria-label="Primary">
              {NAV_LINKS.map((link) =>
                link.children ? (
                  <div
                    key={link.path}
                    className="relative group"
                    onMouseEnter={() => setActiveCategory(MEGA_MENU_CATEGORIES[0]?.id)}
                  >
                    <NavLink
                      to={link.path}
                      className={({ isActive }) =>
                        `text-brand text-[15px] font-medium transition-all duration-200 inline-flex items-center gap-1
                        ${isActive ? "font-semibold underline underline-offset-4 decoration-2 decoration-brand" : "hover:underline underline-offset-4 decoration-2 decoration-brand"}`
                      }
                    >
                      {link.label}
                      <svg className="w-3 h-3 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </NavLink>
                    {/* ── Mega-menu panel ── */}
                    <div className="absolute left-1/2 -translate-x-1/2 top-full pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50 w-[680px]">
                      <div className="bg-white border border-gray-200 sm:rounded-xl shadow-2xl overflow-hidden">
                        <div className="flex">
                          <div className="w-52 py-5 border-r border-gray-200 shrink-0">
                            {MEGA_MENU_CATEGORIES.map((cat) => (
                              <Link
                                key={cat.id}
                                to={cat.path}
                                onMouseEnter={() => setActiveCategory(cat.id)}
                                className={`group/item flex items-center justify-between px-6 py-2.5 text-sm transition-all duration-150 ${
                                  activeCategory === cat.id
                                    ? "text-brand font-semibold bg-brand/5"
                                    : "text-brand/55 hover:text-brand hover:bg-brand/5"
                                }`}
                              >
                                <span>{cat.label}</span>
                                {activeCategory === cat.id ? (
                                  <span className="h-0.5 w-6 rounded-full bg-brand" />
                                ) : (
                                  <svg className="w-3 h-3 text-brand/25 group-hover/item:text-brand/40 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                                  </svg>
                                )}
                              </Link>
                            ))}
                          </div>
                          <div className="flex-1 py-5 px-8 min-h-[220px]">
                            {currentCat.subItems.length > 0 ? (
                              <ul className="space-y-2.5">
                                {currentCat.subItems.map((item) => (
                                  <li key={item.path}>
                                    <NavLink
                                      to={item.path}
                                      className={({ isActive }) =>
                                        `text-sm font-semibold transition-colors duration-150 ${
                                          isActive
                                            ? "text-brand font-semibold"
                                            : "text-brand/55 hover:text-brand"
                                        }`
                                      }
                                    >
                                      {item.label}
                                    </NavLink>
                                  </li>
                                ))}
                              </ul>
                            ) : (
                              <p className="text-sm text-brand/40">
                                Explore our complete range of products.
                              </p>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ) : (
                  <NavLink
                    key={link.path}
                    to={link.path}
                    className={linkClass}
                  >
                    {link.label}
                  </NavLink>
                )
              )}
            </nav>

            <div className="flex items-center gap-5">
              {!searchOpen ? (
                <>
                  {NAV_LINKS_RIGHT.map((link) =>
                    link.children ? (
                      <div key={link.path} className="relative group">
                        <NavLink
                          to={link.path}
                          className={rightLinkClass}
                        >
                          {link.label.trim()}
                          <svg className="w-3 h-3 mt-0.5 inline-block ml-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                          </svg>
                        </NavLink>
                        <div className="absolute left-1/2 -translate-x-1/2 top-full pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50 w-[220px]">
                          <div className="bg-white border border-gray-200 sm:rounded-xl shadow-2xl overflow-hidden py-2">
                            {link.children.map((child) => (
                              <NavLink
                                key={child.path}
                                to={child.path}
                                className={({ isActive }) =>
                                  `block px-5 py-2.5 text-sm font-medium transition-colors ${
                                    isActive
                                      ? "text-[#0057A0] bg-[#0057A0]/5 font-semibold"
                                      : "text-gray-600 hover:text-[#0057A0] hover:bg-gray-50"
                                  }`
                                }
                              >
                                {child.label}
                              </NavLink>
                            ))}
                          </div>
                        </div>
                      </div>
                    ) : (
                      <NavLink
                        key={link.path}
                        to={link.path}
                        className={rightLinkClass}
                      >
                        {link.label.trim()}
                      </NavLink>
                    )
                  )}
                  <button
                    aria-label="Search"
                    onClick={() => setSearchOpen(true)}
                    className="p-1.5 rounded-full text-brand border border-brand hover:opacity-60 transition-opacity"
                  >
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <circle cx="11" cy="11" r="8" />
                      <path d="m21 21-4.35-4.35" />
                    </svg>
                  </button>
                </>
              ) : (
                <div className="flex items-center gap-2 min-w-[320px]">
                  <div className="flex items-center gap-2 flex-1 bg-gray-100 rounded-full px-4 py-2">
                    <svg className="w-4 h-4 text-brand shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <circle cx="11" cy="11" r="8" />
                      <path d="m21 21-4.35-4.35" />
                    </svg>
                    <input
                      type="text"
                      placeholder="Search products..."
                      className="w-full bg-transparent border-none outline-none text-brand text-sm placeholder:text-brand/40"
                      autoFocus
                    />
                    <button
                      onClick={() => setSearchOpen(false)}
                      className="p-1 rounded-full hover:bg-gray-200 text-brand/60 hover:text-brand transition-colors"
                    >
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </header>

      {/* ════════════════════════════════════════
          MOBILE DRAWER
      ════════════════════════════════════════ */}
      <div
        className={`fixed inset-0 z-40 lg:hidden transition-all duration-300 ${
          mobileOpen ? "pointer-events-auto" : "pointer-events-none"
        }`}
      >
        <div
          onClick={() => setMobileOpen(false)}
          className={`absolute inset-0 bg-charcoal/40 transition-opacity duration-300 ${
            mobileOpen ? "opacity-100" : "opacity-0"
          }`}
        />
        <nav
          className={`absolute top-0 right-0 h-full w-72 bg-white shadow-2xl flex flex-col transition-transform duration-300 ${
            mobileOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex items-center justify-between px-5 py-4 border-b border-gray-200">
            <Link to="/" onClick={() => setMobileOpen(false)} className="flex items-center gap-2">
              <img src={logo} alt="Logo" className="h-9 w-auto object-contain" />
              <span className="text-brand text-xs font-bold whitespace-nowrap">
                Indian Soya &amp; Spice Industries
              </span>
            </Link>
            <button
              onClick={() => setMobileOpen(false)}
              className="p-1.5 rounded-full text-brand hover:opacity-60 transition-opacity"
              aria-label="Close menu"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12"/>
              </svg>
            </button>
          </div>

          <div className="flex-1 overflow-y-auto px-4 py-4">
            <p className="text-brand/40 text-xs tracking-widest uppercase mb-3 px-2">
              Main Menu
            </p>
            {NAV_LINKS.map((link) =>
              link.children ? (
                <div key={link.path}>
                  <div className="flex items-center border-b border-gray-100">
                    <NavLink
                      to={link.path}
                      onClick={() => setMobileOpen(false)}
                      className={({ isActive }) =>
                        `flex-1 py-3 px-2 text-brand font-medium text-base transition-colors hover:text-brand/70 ${
                          isActive ? "font-semibold" : ""
                        }`
                      }
                    >
                      {link.label}
                    </NavLink>
                    <button
                      onClick={() => toggleExpand(link.path)}
                      className="px-3 py-3 text-brand/30 hover:text-brand transition-colors"
                      aria-label={`Toggle ${link.label} submenu`}
                    >
                      <svg
                        className={`w-3.5 h-3.5 transition-transform duration-200 ${
                          expandedMenus[link.path] ? "rotate-90" : ""
                        }`}
                        fill="none" viewBox="0 0 24 24" stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7"/>
                      </svg>
                    </button>
                  </div>
                  <div
                    className={`overflow-hidden transition-all duration-300 ${
                      expandedMenus[link.path] ? "max-h-96" : "max-h-0"
                    }`}
                  >
                    <div className="pl-4 bg-brand/5 sm:rounded-b-lg">
                      {link.children.map((child) => (
                        <div key={child.path}>
                          <div className="flex items-center border-b border-gray-100/50">
                            <NavLink
                              to={child.path}
                              onClick={() => setMobileOpen(false)}
                              className={({ isActive }) =>
                                `flex-1 py-2.5 px-2 text-sm font-medium transition-colors ${
                                  isActive
                                    ? "text-brand font-semibold"
                                    : "text-brand/70 hover:text-brand"
                                }`
                              }
                            >
                              {child.label}
                            </NavLink>
                            {child.items && (
                              <button
                                onClick={() => toggleExpand(child.path)}
                                className="px-2 py-2.5 text-brand/30 hover:text-brand transition-colors"
                                aria-label={`Toggle ${child.label} submenu`}
                              >
                                <svg
                                  className={`w-3 h-3 transition-transform duration-200 ${
                                    expandedMenus[child.path] ? "rotate-90" : ""
                                  }`}
                                  fill="none" viewBox="0 0 24 24" stroke="currentColor"
                                >
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7"/>
                                </svg>
                              </button>
                            )}
                          </div>
                          {child.items && (
                            <div
                              className={`overflow-hidden transition-all duration-300 ${
                                expandedMenus[child.path] ? "max-h-96" : "max-h-0"
                              }`}
                            >
                              <div className="pl-4">
                                {child.items.map((item) => (
                                  <NavLink
                                    key={item.path}
                                    to={item.path}
                                    onClick={() => setMobileOpen(false)}
                                    className={({ isActive }) =>
                                      `block py-2.5 px-2 text-sm transition-colors border-b border-gray-100/30 ${
                                        isActive
                                          ? "text-brand font-semibold"
                                          : "text-brand/55 hover:text-brand"
                                      }`
                                    }
                                  >
                                    {item.label}
                                  </NavLink>
                                ))}
                              </div>
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                <NavLink
                  key={link.path}
                  to={link.path}
                  onClick={() => setMobileOpen(false)}
                  className={({ isActive }) =>
                    `flex items-center justify-between py-3 px-2 border-b border-gray-100 font-medium text-base transition-colors ${
                      isActive ? "text-brand font-semibold" : "text-brand/70 hover:text-brand"
                    }`
                  }
                >
                  {link.label}
                  <svg className="w-3.5 h-3.5 text-brand/30" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7"/>
                  </svg>
                </NavLink>
              )
            )}

            <p className="text-brand/40 text-xs tracking-widest uppercase mt-5 mb-3 px-2">
              Quick Links
            </p>
            {NAV_LINKS_RIGHT.map((link) =>
              link.children ? (
                <div key={link.path}>
                  <div className="flex items-center border-b border-gray-100">
                    <NavLink
                      to={link.path}
                      onClick={() => setMobileOpen(false)}
                      className={({ isActive }) =>
                        `flex-1 py-3 px-2 text-brand font-medium text-base transition-colors hover:text-brand/70 ${
                          isActive ? "font-semibold" : ""
                        }`
                      }
                    >
                      {link.label.trim()}
                    </NavLink>
                    <button
                      onClick={() => toggleExpand(link.path)}
                      className="px-2 py-2.5 text-brand/30 hover:text-brand transition-colors"
                      aria-label={`Toggle ${link.label} submenu`}
                    >
                      <svg
                        className={`w-3 h-3 transition-transform duration-200 ${
                          expandedMenus[link.path] ? "rotate-90" : ""
                        }`}
                        fill="none" viewBox="0 0 24 24" stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7"/>
                      </svg>
                    </button>
                  </div>
                  <div
                    className={`overflow-hidden transition-all duration-300 ${
                      expandedMenus[link.path] ? "max-h-96" : "max-h-0"
                    }`}
                  >
                    <div className="pl-4">
                      {link.children.map((child) => (
                        <NavLink
                          key={child.path}
                          to={child.path}
                          onClick={() => setMobileOpen(false)}
                          className={({ isActive }) =>
                            `block py-2.5 px-2 text-sm transition-colors border-b border-gray-100/30 ${
                              isActive
                                ? "text-brand font-semibold"
                                : "text-brand/55 hover:text-brand"
                            }`
                          }
                        >
                          {child.label}
                        </NavLink>
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                <NavLink
                  key={link.path}
                  to={link.path}
                  onClick={() => setMobileOpen(false)}
                  className={({ isActive }) =>
                    `flex items-center justify-between py-3 px-2 border-b border-gray-100 font-medium text-base transition-colors ${
                      isActive ? "text-brand font-semibold" : "text-brand/70 hover:text-brand"
                    }`
                  }
                >
                  {link.label.trim()}
                  <svg className="w-3.5 h-3.5 text-brand/30" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7"/>
                  </svg>
                </NavLink>
              )
            )}

            <div className="mt-6 px-2">
              <p className="text-brand/40 text-xs tracking-widest uppercase mb-3">Follow Us</p>
              <div className="flex items-center gap-3">
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className={`p-2 rounded-full ${iconClass}`}>
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter / X" className={`p-2 rounded-full ${iconClass}`}>
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                </a>
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className={`p-2 rounded-full ${iconClass}`}>
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                </a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className={`p-2 rounded-full ${iconClass}`}>
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          <div className="px-5 py-5 border-t border-gray-200">
            <p className="text-xs text-brand/40">{SITE_CONFIG.email}</p>
            <p className="text-xs text-brand/40 mt-0.5">{SITE_CONFIG.phone}</p>
          </div>
        </nav>
      </div>
    </>
  );
}
