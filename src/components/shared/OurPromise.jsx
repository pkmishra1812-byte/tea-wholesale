import React from "react";

const OLIVE = "#7C8A45";

const promises = [
  {
    title: "Pure & Premium Tea Leaves",
    icon: (
      <svg viewBox="0 0 48 48" className="w-14 h-14" fill={OLIVE}>
        <path d="M44 4 C24 6 10 18 8 38 C28 42 44 30 44 4 Z" />
        <path d="M12 38 L36 10" stroke="#FDF6EC" strokeWidth="2.4" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "Ethically Sourced & Expertly Blended",
    icon: (
      <svg viewBox="0 0 48 48" className="w-14 h-14" fill={OLIVE}>
        <rect x="15" y="20" width="18" height="18" rx="4" />
        <rect x="13" y="14" width="22" height="7" rx="2" />
        <rect x="19" y="9" width="10" height="5" rx="1.5" />
      </svg>
    ),
  },
  {
    title: "Consistent Taste, Every Time",
    icon: (
      <svg viewBox="0 0 48 48" className="w-14 h-14" fill={OLIVE}>
        <path d="M10 24 C10 15 38 15 38 24 C38 33 33 36 24 36 C15 36 10 33 10 24 Z" />
        <path d="M10 22 L38 22 L38 19 Q24 12 10 19 Z" />
        <circle cx="24" cy="10" r="2.5" />
        <path d="M38 24 L45 27 Q47 30 45 31 L38 31 Z" />
        <path d="M10 24 C4 24 4 30 10 30 Z" />
        <path d="M18 40 h20 a7 7 0 0 0 0 -14 h-20 v14 Z" />
        <path d="M14 44 h28" stroke={OLIVE} strokeWidth="3" strokeLinecap="round" fill="none" />
      </svg>
    ),
  },
  {
    title: "Delivered Fresh To Your Doorstep",
    icon: (
      <svg viewBox="0 0 48 48" className="w-14 h-14" fill={OLIVE}>
        <path d="M10 14 h28 v24 a4 4 0 0 1 -4 4 H14 a4 4 0 0 1 -4 -4 Z" />
        <path d="M10 19 h28" stroke="#FDF6EC" strokeWidth="2.6" />
        <path d="M24 14 v28" stroke="#FDF6EC" strokeWidth="2.6" />
        <path d="M34 4 a5 5 0 0 0 -3 9 l-1 3 l3 -1 a5 5 0 1 0 1 -11 Z" fill={OLIVE} />
      </svg>
    ),
  },
];

function OurPromise() {
  return (
    <section
      className="relative pt-10 lg:pt-14 pb-10 lg:pb-14 overflow-hidden"
      style={{ backgroundColor: "#FDF6EC" }}
    >
      <div className="relative z-10 max-w-screen-xl mx-auto px-6 lg:px-8">
        <h2 className="font-display text-black text-3xl lg:text-4xl font-bold leading-tight text-center mb-10 lg:mb-12">
          Our Promise
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-6 lg:divide-x lg:divide-[#CDD5A8]">
          {promises.map((p) => (
            <div
              key={p.title}
              className="flex flex-col items-center text-center px-2 lg:px-6 transition-transform duration-300 hover:-translate-y-1"
            >
              <div className="mb-6">{p.icon}</div>
              <h3 className="font-display text-black text-lg lg:text-xl font-bold leading-snug">
                {p.title}
              </h3>
            </div>
          ))}
        </div>

        <p className="font-accent text-[#7A8CA0] text-lg lg:text-xl leading-relaxed text-center max-w-3xl mx-auto mt-14 lg:mt-16">
          We&rsquo;re here to be part of your everyday moments — morning routines,
          evening breaks, heartfelt conversations, or quiet reflections. With each
          cup, we hope to add a little joy, a little warmth, and a lot of flavor
          to your life.
        </p>
      </div>
    </section>
  );
}

export default OurPromise;
