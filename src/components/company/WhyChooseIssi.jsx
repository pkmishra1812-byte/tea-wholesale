// src/components/company/WhyChooseIssi.jsx
import Reveal from "./Reveal";

const REASONS = [
  {
    title: "Quality First",
    desc: "Every product is developed with consistency and care.",
    icon: <path strokeLinecap="round" strokeLinejoin="round" d="M12 3l7 3v5c0 4.6-3 8.4-7 10-4-1.6-7-5.4-7-10V6l7-3z" />,
  },
  {
    title: "Trusted Ingredients",
    desc: "Responsible sourcing and carefully selected ingredients.",
    icon: <path strokeLinecap="round" strokeLinejoin="round" d="M12 21v-8m0 0c0-3-2-5-5-5 0 3 2 5 5 5zm0 0c0-3 2-5 5-5 0 3-2 5-5 5zM4 21h16" />,
  },
  {
    title: "Strong Distribution",
    desc: "Reliable supply across markets and channels.",
    icon: <path strokeLinecap="round" strokeLinejoin="round" d="M9 20l-5.447-2.724A1 1 0 0 1 3 16.382V5.618a1 1 0 0 1 1.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0 0 21 18.382V7.618a1 1 0 0 0-.553-.894L15 4m0 13V4m0 0L9 7" />,
  },
  {
    title: "Customer Focus",
    desc: "Built around everyday consumer needs.",
    icon: <path strokeLinecap="round" strokeLinejoin="round" d="M14.828 14.828a4 4 0 0 1-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0z" />,
  },
];

export default function WhyChooseIssi() {
  return (
    <section className="bg-[#F7F9FC] py-4 lg:py-6">
      <div className="max-w-screen-xl mx-auto px-6 lg:px-8">
        <Reveal>
          <div className="bg-white sm:rounded-[28px] shadow-[0_20px_54px_rgba(0,31,63,0.08)] border border-gray-100 px-6 lg:px-10 py-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-y-4">
              {REASONS.map((r, i) => (
                <Reveal key={r.title} delay={i * 150} y={30}>
                  <div
                    className={`flex items-center gap-3 px-3 ${
                      i > 0 ? "lg:border-l lg:border-gray-200" : ""
                    } ${i % 2 === 1 ? "sm:border-l sm:border-gray-200 lg:border-l" : ""}`}
                  >
                    <span className="shrink-0 w-10 h-10 rounded-full bg-[#001F3F]/5 flex items-center justify-center transition-transform duration-300 hover:scale-105">
                      <svg className="w-5 h-5 text-[#001F3F]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                        {r.icon}
                      </svg>
                    </span>
                    <div className="text-left">
                      <h3 className="font-display text-[#001F3F] text-base font-bold leading-tight">
                        {r.title}
                      </h3>
                      <p className="mt-1 font-body text-[#687386] text-xs leading-relaxed">
                        {r.desc}
                      </p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
