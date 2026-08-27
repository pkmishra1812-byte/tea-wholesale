// src/components/layout/TopStrip.jsx

const ITEMS = [
  "Farm-to-Shelf Freshness",
  "Uncompromised Quality",
  "Pan-India Bulk Delivery",
  "Private Label Specialists",
  "FSSAI Certified Excellence",
  "Wholesale Prices That Win",
  "Trusted by 120+ Partners",
];

export default function TopStrip() {
  return (
    <div className="relative w-full overflow-hidden bg-brand select-none">
      <div className="topstrip-track flex w-max whitespace-nowrap">
        {[0, 1].map((dup) => (
          <div key={dup} aria-hidden={dup === 1} className="flex shrink-0">
            {ITEMS.map((t) => (
              <span
                key={`${dup}-${t}`}
                className="flex h-9 items-center px-5 font-body text-[11px] sm:text-xs font-semibold tracking-[0.18em] uppercase text-white"
              >
                {t}
                <span className="ml-9 inline-block w-1.5 h-1.5 rounded-full bg-[#D4A94C]/85" />
              </span>
            ))}
          </div>
        ))}
      </div>

      <style>{`
        @keyframes topstripMove {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }
        .topstrip-track { animation: topstripMove 28s linear infinite; will-change: transform; }
        .topstrip-track:hover { animation-play-state: paused; }

        @media (prefers-reduced-motion: reduce) {
          .topstrip-track { animation: none; }
        }
      `}</style>
    </div>
  );
}
