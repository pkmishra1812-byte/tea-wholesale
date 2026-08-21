export default function WholesaleWhyChooseUs() {
  return (
    <section className="bg-white py-20 lg:py-28 relative overflow-hidden">
      {/* Botanical branch accent — bottom-left */}
      <div className="absolute bottom-0 left-0 pointer-events-none select-none opacity-20">
        <svg width="220" height="280" viewBox="0 0 220 280" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M10 270 Q40 240 60 200 Q80 160 90 130 Q100 100 110 85 Q120 70 130 60" stroke="#7D5A4A" strokeWidth="1.5" fill="none" opacity="0.6" />
          <path d="M60 200 Q80 190 95 180 Q110 170 115 155" stroke="#7D5A4A" strokeWidth="1.2" fill="none" opacity="0.5" />
          <path d="M90 130 Q110 120 130 115 Q150 110 160 100" stroke="#7D5A4A" strokeWidth="1.2" fill="none" opacity="0.5" />
          <path d="M130 60 Q140 50 148 42 Q156 34 160 25" stroke="#7D5A4A" strokeWidth="1.2" fill="none" opacity="0.5" />
          <path d="M110 85 Q105 72 100 65 Q95 58 92 48" stroke="#7D5A4A" strokeWidth="1" fill="none" opacity="0.35" />
          <path d="M60 200 Q45 205 35 215 Q25 225 22 235" stroke="#7D5A4A" strokeWidth="1" fill="none" opacity="0.35" />
          <ellipse cx="160" cy="25" rx="5" ry="8" transform="rotate(-30 160 25)" stroke="#7D5A4A" strokeWidth="1" fill="none" opacity="0.5" />
          <ellipse cx="130" cy="60" rx="4" ry="7" transform="rotate(-40 130 60)" stroke="#7D5A4A" strokeWidth="1" fill="none" opacity="0.45" />
          <ellipse cx="92" cy="48" rx="3.5" ry="6" transform="rotate(-25 92 48)" stroke="#7D5A4A" strokeWidth="0.8" fill="none" opacity="0.35" />
          <path d="M115 155 Q118 145 122 140" stroke="#7D5A4A" strokeWidth="0.8" fill="none" opacity="0.35" />
          <ellipse cx="122" cy="140" rx="3" ry="5" transform="rotate(-20 122 140)" stroke="#7D5A4A" strokeWidth="0.8" fill="none" opacity="0.35" />
          <path d="M130 115 Q128 108 125 102" stroke="#7D5A4A" strokeWidth="0.8" fill="none" opacity="0.35" />
          <ellipse cx="125" cy="102" rx="3" ry="5" transform="rotate(10 125 102)" stroke="#7D5A4A" strokeWidth="0.8" fill="none" opacity="0.35" />
        </svg>
      </div>

      <div className="relative max-w-screen-xl mx-auto px-6 lg:px-16">
        {/* Heading */}
        <h2 className="text-center font-display text-brand text-3xl md:text-4xl lg:text-[42px] font-bold mb-5 tracking-tight">
          Why Choose Us
        </h2>

        <p className="text-center font-body text-[#1F3864]/55 text-[15px] md:text-base leading-[1.75] max-w-[900px] mx-auto mb-16 lg:mb-20">
          Our dedicated tea packaging arm, <strong className="text-[#1F3864]/75 font-semibold">Tea Plantations and Exports</strong>, stands as a beacon of growth in Eastern India&rsquo;s tea industry. Embodying our commitment to excellence, our teas graces tea enthusiasts with unparalleled richness and flavor.
        </p>

        {/* Feature row */}
        <div className="grid md:grid-cols-3 gap-12 md:gap-16 max-w-4xl mx-auto">
          {/* Organic Products */}
          <div className="text-center">
            <div className="w-[72px] h-[72px] mx-auto mb-6 flex items-center justify-center">
              <svg viewBox="0 0 64 64" fill="none" className="w-full h-full">
                <path d="M32 8 C20 8 12 18 12 28 C12 36 16 42 22 46 L22 56 L42 56 L42 46 C48 42 52 36 52 28 C52 18 44 8 32 8 Z" stroke="#7D9B6A" strokeWidth="1.6" fill="none" strokeLinejoin="round" />
                <path d="M22 46 L18 56 L46 56 L42 46" stroke="#7D9B6A" strokeWidth="1.6" fill="none" strokeLinejoin="round" />
                <path d="M38 28 L36 32 L30 30 L28 34" stroke="#7D9B6A" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                <path d="M24 38 Q28 34 32 38 Q36 34 40 38" stroke="#7D9B6A" strokeWidth="1.2" strokeLinecap="round" fill="none" />
                <path d="M26 42 Q30 38 34 42 Q38 38 42 42" stroke="#7D9B6A" strokeWidth="1.2" strokeLinecap="round" fill="none" />
              </svg>
            </div>
            <h3 className="font-display text-[#1A1A1A] text-lg md:text-xl font-bold">
              Organic Products
            </h3>
          </div>

          {/* Great Customer Service */}
          <div className="text-center">
            <div className="w-[72px] h-[72px] mx-auto mb-6 flex items-center justify-center">
              <svg viewBox="0 0 64 64" fill="none" className="w-full h-full">
                <path d="M20 28 C20 20 28 12 38 12 C48 12 56 20 56 28" stroke="#7D9B6A" strokeWidth="1.6" fill="none" strokeLinecap="round" />
                <path d="M56 28 L56 40 C56 44 52 46 48 46" stroke="#7D9B6A" strokeWidth="1.6" fill="none" strokeLinecap="round" />
                <path d="M48 46 C48 48 50 50 52 52 L56 52" stroke="#7D9B6A" strokeWidth="1.6" fill="none" strokeLinecap="round" />
                <path d="M8 28 C8 24 12 22 16 22 L16 34 C12 34 8 32 8 28 Z" stroke="#7D9B6A" strokeWidth="1.6" fill="none" strokeLinejoin="round" />
                <path d="M18 38 L22 44 L22 50" stroke="#7D9B6A" strokeWidth="1.6" strokeLinecap="round" fill="none" />
                <path d="M24 50 L32 46 L40 50" stroke="#7D9B6A" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                <path d="M28 38 L30 34 L34 36 L36 32" stroke="#7D9B6A" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                <path d="M44 38 L46 36 L48 38 L50 34" stroke="#7D9B6A" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
              </svg>
            </div>
            <h3 className="font-display text-[#1A1A1A] text-lg md:text-xl font-bold">
              Great Customer Service
            </h3>
          </div>

          {/* Natural Ingredients */}
          <div className="text-center">
            <div className="w-[72px] h-[72px] mx-auto mb-6 flex items-center justify-center">
              <svg viewBox="0 0 64 64" fill="none" className="w-full h-full">
                <circle cx="32" cy="32" r="24" stroke="#7D9B6A" strokeWidth="1.6" fill="none" />
                <path d="M32 16 C28 22 24 28 24 34 C24 40 28 44 32 44 C36 44 40 40 40 34 C40 28 36 22 32 16 Z" stroke="#7D9B6A" strokeWidth="1.6" fill="none" strokeLinejoin="round" />
                <path d="M32 22 L34 28 L40 30 L34 32 L32 38 L30 32 L24 30 L30 28 Z" stroke="#7D9B6A" strokeWidth="1.4" strokeLinejoin="round" fill="none" />
                <path d="M18 32 L24 32" stroke="#7D9B6A" strokeWidth="1.2" strokeLinecap="round" fill="none" />
                <path d="M40 32 L46 32" stroke="#7D9B6A" strokeWidth="1.2" strokeLinecap="round" fill="none" />
                <path d="M32 18 L32 14" stroke="#7D9B6A" strokeWidth="1.2" strokeLinecap="round" fill="none" />
                <path d="M32 50 L32 46" stroke="#7D9B6A" strokeWidth="1.2" strokeLinecap="round" fill="none" />
              </svg>
            </div>
            <h3 className="font-display text-[#1A1A1A] text-lg md:text-xl font-bold">
              Natural Ingredients
            </h3>
          </div>
        </div>
      </div>
    </section>
  );
}
