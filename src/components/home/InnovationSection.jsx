import { useEffect, useRef, useState } from "react";
import productImg from "../../assets/teafarming.png";

export default function InnovationSection() {
  const [visible, setVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          obs.disconnect();
        }
      },
      { threshold: 0.15 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <section className="bg-brand" ref={ref}>
      <div
        className="relative bg-brand"
        style={{ borderRadius: "0 0 0 80px" }}
      >
        <div className="pt-16 lg:pt-20 px-6 lg:px-12">
          <div
            className={`max-w-4xl transition-all duration-700 ${
              visible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
            }`}
          >
            <span className="font-body text-white/80 text-sm font-bold uppercase tracking-[0.15em]">
              Innovation
            </span>
            <h2 className="font-display text-white text-3xl lg:text-4xl font-bold leading-tight mt-4 max-w-3xl">
              Pioneering change, defining the future, delivering impact
            </h2>
          </div>
        </div>

        <div
          className={`mx-6 lg:mx-12 mt-10 lg:mt-14 transition-all duration-700 delay-200 ${
            visible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 sm:rounded-3xl overflow-hidden bg-[#F5F5F0] shadow-xl">
            <div className="p-8 lg:p-12 xl:p-14 flex flex-col justify-center">
              <h3 className="font-body text-brand text-2xl lg:text-3xl font-bold leading-snug">
                Science – Transforming our products
              </h3>
              <p className="font-body text-charcoal/70 text-base leading-relaxed mt-5 max-w-md">
                We invest in cutting-edge R&D to reinvent everyday essentials —
                from tea processing innovations to sustainable packaging
                solutions that reduce our environmental footprint without
                compromising quality.
              </p>
              <a
                href="/innovation"
                className="inline-block self-start mt-6 lg:mt-8 px-7 py-3 rounded-full bg-brand text-white font-body font-bold text-sm tracking-wide hover:brightness-110 transition-all duration-300"
              >
                Find out more
              </a>
            </div>

            <div className="h-64 md:h-full min-h-[280px]">
              <img
                src={productImg}
                alt="Product innovation"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        <div className="h-12 lg:h-16" />
      </div>
    </section>
  );
}
