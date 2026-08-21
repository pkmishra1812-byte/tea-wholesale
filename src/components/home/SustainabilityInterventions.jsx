import { useEffect, useRef, useState } from "react";
import bannerNew1 from "../../assets/banner-new-1.png";
import bannerNew2 from "../../assets/banner-new-2.png";
import bannerNew3 from "../../assets/banner-new-3.png";

const interventionData = [
  {
    img: bannerNew1,
    heading: "Sustainable Supply Chain",
    subtitle: "Building a Resilient & Sustainable Supply Chain",
  },
  {
    img: bannerNew2,
    heading: "Brands with Purpose",
    subtitle: "Driving Change through Purpose-led Brands",
  },
  {
    img: bannerNew3,
    heading: "Talent",
    subtitle: "Creating a Workforce for Tomorrow",
  },
];

export default function SustainabilityInterventions() {
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
      { threshold: 0.1 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <section className="pt-10 lg:pt-14 pb-20 lg:pb-24 bg-white" ref={ref}>
      <div className="max-w-screen-xl mx-auto px-6 lg:px-8">
        <h2
          className={`font-display text-brand text-3xl lg:text-4xl leading-tight font-bold text-center mb-3 lg:mb-4 transition-all duration-700 ${
            visible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
        >
          Our Sustainability Interventions
        </h2>
        <p
          className={`font-body text-tea-800 text-sm lg:text-base tracking-wide text-center mb-12 lg:mb-16 transition-all duration-700 ${
            visible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
        >
          Rooted in Nature, Committed to future
        </p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {interventionData.map((card, i) => (
            <div
              key={card.heading}
               className={`group bg-white sm:rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 flex flex-col ${
                visible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-10 opacity-0"
              }`}
              style={{
                transitionDelay: `${i * 150}ms`,
                transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
              }}
            >
              <div className="aspect-[4/3] w-full overflow-hidden">
                <img
                  src={card.img}
                  alt={card.heading}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="flex flex-col flex-1 p-6 lg:p-8">
                <h3 className="font-body text-brand text-xl lg:text-2xl font-bold leading-tight mb-2">
                  {card.heading}
                </h3>
                <p className="font-body text-gray-500 text-sm lg:text-base mb-6">
                  {card.subtitle}
                </p>
                <div className="mt-auto">
                  <span className="inline-flex items-center gap-1.5 font-body text-sm font-bold text-brand group-hover:text-brand/80 transition-colors">
                    Know more
                    <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">→</span>
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
