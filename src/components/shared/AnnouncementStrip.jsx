// src/components/shared/AnnouncementStrip.jsx
import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";

const GOLD = "#D4A32C";
const LOOP_SECONDS = 40;
const NUDGE_PX = 240;
const GLIDE_MS = 550;

const SPARKLE_PATH =
  "M12 0c1.2 6.5 5.5 10.8 12 12-6.5 1.2-10.8 5.5-12 12-1.2-6.5-5.5-10.8-12-12C6.5 10.8 10.8 6.5 12 0Z";
const LEAF_PATHS = [
  "M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z",
  "M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12",
];

function Sparkle({ delay = 0 }) {
  return (
    <svg className="issi-sparkle" viewBox="0 0 24 24" aria-hidden="true" style={{ animationDelay: `${delay}ms` }}>
      <path fill="currentColor" d={SPARKLE_PATH} />
    </svg>
  );
}

function Leaf() {
  return (
    <svg
      className="issi-leaf"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {LEAF_PATHS.map((d) => (
        <path key={d} d={d} />
      ))}
    </svg>
  );
}

function ArrowRight() {
  return (
    <svg className="issi-arrow-move" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M5 12h14" />
      <path d="m12 5 7 7-7 7" />
    </svg>
  );
}

const DEFAULT_CELLS = [
  { type: "text", icon: "sparkle", label: "Premium Quality, Trusted Since 2023" },
  { type: "text", icon: "leaf", label: "Everyday Essentials, Crafted for Every Indian Home" },
  { type: "tags", tags: ["FMCG", "Spices", "Personal Care", "Business Solutions"] },
  { type: "cta", label: "Partner With ISSI", to: "/contact" },
];

const WHOLESALE_CELLS = [
  { type: "text", icon: "sparkle", label: "Premium Quality at True Wholesale Prices" },
  { type: "text", icon: "leaf", label: "A Unique Range Sourced Directly from Origin" },
  { type: "tags", tags: ["Tea", "Spices", "Soya", "Oils & Grains", "Beauty", "Baby Care"] },
  { type: "text", icon: "sparkle", label: "Bulk Supply. Private Label. Pan-India Delivery." },
  { type: "cta", label: "Become a Distributor", to: "/contact" },
];

function StripGroup({ hidden, cells }) {
  return (
    <div className="issi-group" aria-hidden={hidden || undefined}>
      {cells.map((cell, i) => {
        if (cell.type === "cta") {
          return (
            <Link
              key={i}
              to={cell.to}
              className="issi-cell issi-cell--gold"
              tabIndex={hidden ? -1 : undefined}
            >
              <Sparkle />
              <span className="issi-label">{cell.label}</span>
              <ArrowRight />
              <Sparkle delay={600} />
            </Link>
          );
        }
        if (cell.type === "tags") {
          return (
            <span key={i} className="issi-cell">
              {cell.tags.map((tag, j) => (
                <span key={tag} className="flex items-center">
                  {j > 0 && <span className="issi-dot" />}
                  <span>{tag}</span>
                </span>
              ))}
            </span>
          );
        }
        return (
          <span key={i} className="issi-cell">
            {cell.icon === "leaf" ? <Leaf /> : <Sparkle />}
            <span>{cell.label}</span>
          </span>
        );
      })}
    </div>
  );
}

function currentX(el) {
  const t = getComputedStyle(el).transform;
  if (!t || t === "none") return 0;
  try {
    return new DOMMatrixReadOnly(t).m41;
  } catch {
    const m = t.match(/matrix.*\((.+)\)/);
    return m ? parseFloat(m[1].split(",")[4]) || 0 : 0;
  }
}

export default function AnnouncementStrip({ variant = "default" }) {
  const cells = variant === "wholesale" ? WHOLESALE_CELLS : DEFAULT_CELLS;
  const trackRef = useRef(null);
  const rootRef = useRef(null);
  const halfRef = useRef(1);
  const glideCleanupRef = useRef(null);

  useEffect(() => {
    const track = trackRef.current;
    const measure = () => {
      if (track) halfRef.current = Math.max(1, track.scrollWidth / 2);
    };
    measure();
    const ro = "ResizeObserver" in window ? new ResizeObserver(measure) : null;
    if (ro) ro.observe(track);
    return () => {
      if (glideCleanupRef.current) glideCleanupRef.current();
      if (ro) ro.disconnect();
    };
  }, []);

  const glide = (dir) => {
    const track = trackRef.current;
    if (!track) return;
    if (glideCleanupRef.current) glideCleanupRef.current();

    const half = halfRef.current;
    const startX = currentX(track);
    track.style.animation = "none";

    const norm = (((startX + dir * NUDGE_PX) % half) + half) % half;
    const target = norm - half;

    track.style.transition = "none";
    track.style.transform = `translate3d(${startX}px,0,0)`;
    void track.offsetWidth;
    track.style.transition = `transform ${GLIDE_MS}ms cubic-bezier(0.22, 1, 0.36, 1)`;
    track.style.transform = `translate3d(${target}px,0,0)`;

    let tid = null;
    const finish = () => {
      if (tid) clearTimeout(tid);
      track.removeEventListener("transitionend", onEnd);
      glideCleanupRef.current = null;
      track.style.transition = "";
      track.style.transform = "";
      track.style.animation = "";
      track.style.animationDelay = `${(-(norm / half) * LOOP_SECONDS).toFixed(4)}s`;
    };
    const onEnd = (e) => {
      if (e.target !== track || e.propertyName !== "transform") return;
      finish();
    };
    tid = setTimeout(finish, GLIDE_MS + 80);
    track.addEventListener("transitionend", onEnd);
    glideCleanupRef.current = () => {
      if (tid) clearTimeout(tid);
      track.removeEventListener("transitionend", onEnd);
    };
  };

  return (
    <section ref={rootRef} className="issi-strip" role="region" aria-label="ISSI highlights">
      <style>{`
        .issi-strip {
          position: relative;
          z-index: 20;
          width: 100%;
          height: 36px;
          overflow: hidden;
          background: #0A1F44;
        }
        @media (min-width: 640px) {
          .issi-strip { height: 40px; }
        }
        .issi-strip__viewport {
          position: absolute;
          inset: 0;
          overflow: hidden;
          -webkit-mask-image: linear-gradient(to right, transparent 0, #000 48px, #000 calc(100% - 48px), transparent 100%);
                  mask-image: linear-gradient(to right, transparent 0, #000 48px, #000 calc(100% - 48px), transparent 100%);
        }
        .issi-track {
          display: flex;
          align-items: center;
          height: 100%;
          width: max-content;
          will-change: transform;
          backface-visibility: hidden;
          animation: issi-strip-marquee ${LOOP_SECONDS}s linear infinite;
        }
        .issi-strip:hover .issi-track,
        .issi-strip:focus-within .issi-track {
          animation-play-state: paused;
        }
        @keyframes issi-strip-marquee {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }
        .issi-group {
          display: flex;
          align-items: center;
          height: 100%;
          flex-shrink: 0;
        }
        .issi-cell {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0 1.25rem;
          white-space: nowrap;
          font-family: "Segoe UI", system-ui, -apple-system, Roboto, Arial, sans-serif;
          font-size: 12px;
          font-weight: 500;
          letter-spacing: 0.02em;
          color: #ffffff;
          text-decoration: none;
        }
        @media (min-width: 640px) {
          .issi-cell { gap: 0.6rem; padding: 0 1.75rem; font-size: 13px; }
        }
        .issi-cell--gold,
        .issi-cell--gold .issi-sparkle,
        .issi-cell--gold .issi-arrow-move,
        .issi-leaf {
          color: ${GOLD};
        }
        .issi-cell--gold { gap: 6px; font-weight: 600; }
        a.issi-cell:hover .issi-label { text-decoration: underline; text-underline-offset: 4px; }
        .issi-arrow-move { transition: transform 0.3s ease; }
        a.issi-cell:hover .issi-arrow-move { transform: translateX(3px); }
        .issi-dot {
          height: 4px;
          width: 4px;
          flex-shrink: 0;
          border-radius: 9999px;
          background: ${GOLD};
          margin: 0 12px;
        }
        @media (min-width: 640px) {
          .issi-dot { margin: 0 14px; }
        }
        .issi-sparkle {
          height: 12px;
          width: 12px;
          flex-shrink: 0;
          color: ${GOLD};
          animation: issi-twinkle 2.6s ease-in-out infinite;
        }
        @keyframes issi-twinkle {
          0%, 100% { opacity: 0.35; transform: scale(0.8) rotate(-8deg); }
          50%      { opacity: 1;    transform: scale(1.1) rotate(10deg); }
        }
        .issi-leaf {
          height: 16px;
          width: 16px;
          flex-shrink: 0;
        }
        .issi-navbtn {
          position: absolute;
          top: 50%;
          z-index: 10;
          transform: translateY(-50%);
          display: grid;
          place-items: center;
          padding: 6px;
          border: 0;
          border-radius: 9999px;
          background: transparent;
          color: #ffffff;
          cursor: pointer;
          transition: background-color 0.3s ease, color 0.3s ease;
        }
        .issi-navbtn:hover { background: rgba(255, 255, 255, 0.12); color: #e3b341; }
        .issi-navbtn:focus-visible { outline: 2px solid rgba(212, 163, 44, 0.7); outline-offset: 2px; }
        .issi-navbtn--left { left: 4px; }
        .issi-navbtn--right { right: 4px; }
        .issi-navbtn svg { display: block; }
        @media (prefers-reduced-motion: reduce) {
          .issi-track, .issi-sparkle { animation: none !important; }
        }
      `}</style>

      <div className="issi-strip__viewport">
        <div ref={trackRef} className="issi-track">
          <StripGroup cells={cells} />
          <StripGroup hidden cells={cells} />
        </div>
      </div>

      <button type="button" className="issi-navbtn issi-navbtn--left" onClick={() => glide(1)} aria-label="Scroll highlights backward">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="m15 18-6-6 6-6" />
        </svg>
      </button>
      <button type="button" className="issi-navbtn issi-navbtn--right" onClick={() => glide(-1)} aria-label="Scroll highlights forward">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="m9 18 6-6-6-6" />
        </svg>
      </button>
    </section>
  );
}
