import { useEffect, useRef, useState } from "react";
import teafarming from "../../assets/teafarming.png";

function useInView(threshold = 0.15) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          obs.disconnect();
        }
      },
      { threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);

  return [ref, inView];
}

const pillars = [
  { label: "Personal Care", desc: "for women and men, designed for confidence in every daily routine." },
  { label: "Child Care Essentials", desc: "crafted to the highest standards of safety, gentleness, and trust." },
  { label: "Tea & Coffee", desc: "the first taste of every morning, made memorable." },
  { label: "Kitchen & Grocery Staples", desc: "every kitchen essential, under one trusted roof." },
];

const SectionHeading = ({ children }) => (
  <h3 className="font-display text-[#1A2456] text-lg lg:text-[22px] font-semibold tracking-tight mb-3">
    {children}
  </h3>
);

export default function BusinessAtGlance() {
  const [sectionRef, sectionInView] = useInView(0.1);

  const reveal = (shown, delay) => ({
    opacity: shown ? 1 : 0,
    transform: shown ? "translateY(0)" : "translateY(26px)",
    transition:
      "opacity 900ms cubic-bezier(0.22,1,0.36,1), transform 900ms cubic-bezier(0.22,1,0.36,1)",
    transitionDelay: `${delay}ms`,
  });

  return (
    <section className="relative overflow-hidden bg-[#F7F7F8] py-20 lg:py-28">
      <style>{`
        .about-scroll {
          scroll-behavior: smooth;
          overscroll-behavior: contain;
          scrollbar-width: thin;
          scrollbar-color: rgba(26,36,86,0.25) transparent;
        }
        .about-scroll::-webkit-scrollbar { width: 8px; }
        .about-scroll::-webkit-scrollbar-track { background: transparent; }
        .about-scroll::-webkit-scrollbar-thumb {
          background: rgba(26,36,86,0.25);
          border-radius: 999px;
        }
        .about-scroll::-webkit-scrollbar-thumb:hover { background: rgba(26,36,86,0.4); }
      `}</style>

      <div className="max-w-screen-xl mx-auto px-6 lg:px-8" ref={sectionRef}>
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-12 items-stretch">
          {/* ── Left: white card with fixed height + scrollable content ── */}
          <div
            className="bg-white sm:rounded-[24px] shadow-[0_30px_60px_rgba(26,36,86,0.10)] p-8 sm:p-12 lg:p-14 flex flex-col lg:h-[560px]"
            style={reveal(sectionInView, 0)}
          >
            <span className="inline-block font-body text-xs lg:text-sm tracking-[0.25em] uppercase text-[#1A2456] font-bold mb-4">
              About Us
            </span>
            <h2 className="font-display text-[#1A2456] text-3xl sm:text-4xl lg:text-[42px] font-bold mb-6 tracking-tight leading-tight">
              Every Home Has a Story. <span className="font-accent italic font-light">Ours Begins There.</span>
            </h2>

            {/* fade masks */}
            <div className="relative flex-1 min-h-0">
              <div className="pointer-events-none absolute top-0 left-0 right-0 h-8 z-10 bg-gradient-to-b from-white to-transparent" />
              <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-8 z-10 bg-gradient-to-t from-white to-transparent" />

              {/* scrollable body */}
              <div className="about-scroll h-[400px] lg:h-full overflow-y-auto pr-4">
                <div className="pr-1 space-y-5">
                  <p className="font-body text-[#5A6478] text-[15px] leading-[1.7] tracking-wide">
                    Indian Soya &amp; Spice Industries is more than a company — it is a promise that quietly resides in your kitchen pantry, in the products you trust for your children, and on your bathroom shelf. Behind every product lies a single conviction: quality is not a choice, it is a responsibility.
                  </p>
                  <p className="font-body text-[#5A6478] text-[15px] leading-[1.7] tracking-wide">
                    In just three years, we have risen to become one of India&rsquo;s Top FMCG companies — a journey that was never easy, but always clear in purpose. Our foundation rests on one simple yet powerful belief: everyday essentials deserve the same care, craftsmanship, and quality as luxury goods.
                  </p>
                  <p className="font-body text-[#5A6478] text-[15px] leading-[1.7] tracking-wide">
                    This growth is no accident. It is the outcome of one unwavering principle: never compromise on quality, never take trust for granted. Behind every batch, every pack, every launch lies a single question — is this good enough for our own home? Only when the answer is yes does a product make its way into yours.
                  </p>
                  <p className="font-body text-[#5A6478] text-[15px] leading-[1.7] tracking-wide">
                    Today, millions of Indian families place their trust in us, often without even realising it — from the first sip of morning tea, to the gentlest care for their children, to the everyday essentials that stock every kitchen. That trust is our greatest asset, and preserving it is our greatest responsibility.
                  </p>

                  <div>
                    <SectionHeading>What We Do — Touching Every Corner of Indian Life</SectionHeading>
                    <p className="font-body text-[#5A6478] text-[15px] leading-[1.7] tracking-wide mb-3">
                      India is a nation of extraordinary diversity — language, culture, taste, and need shift from state to state. Yet certain things remain constant in every home: the desire for trust, the expectation of quality, and the priority of caring for one&rsquo;s own. This belief forms the foundation of our four core business pillars:
                    </p>
                    <ul className="space-y-2">
                      {pillars.map((pillar) => (
                        <li key={pillar.label} className="flex gap-3">
                          <span className="mt-[7px] w-1.5 h-1.5 shrink-0 rounded-full bg-[#1A2456]" />
                          <p className="font-body text-[#5A6478] text-[15px] leading-[1.7] tracking-wide">
                            <strong className="text-[#1A2456] font-semibold">{pillar.label}</strong> — {pillar.desc}
                          </p>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <SectionHeading>One Brand, One Promise — Per Category</SectionHeading>
                    <p className="font-body text-[#5A6478] text-[15px] leading-[1.7] tracking-wide mb-4">
                      Each of our categories is led by a dedicated, purpose-built brand — a brand that stands not merely as a name, but as a distinct identity and a distinct promise. Every brand is shaped through stringent quality standards, modern manufacturing processes, and rigorous quality checks before it earns its place on the national stage.
                    </p>
                    <p className="font-body text-[#5A6478] text-[15px] leading-[1.7] tracking-wide">
                      Our teams prioritise excellence at every stage — from research and development, to production, packaging, and distribution. We believe genuine trust is not built through grand claims, but through consistent, dependable experience — the same quality, the same taste, the same trust, every single time you choose us.
                    </p>
                  </div>

                  <div>
                    <SectionHeading>Our Philosophy</SectionHeading>
                    <p className="font-body text-[#5A6478] text-[15px] leading-[1.7] tracking-wide mb-4">
                      We do not merely seek market share — we seek a place in the heart of every Indian home. We believe a truly premium brand is not one that reaches only the privileged few, but one that delivers uncompromising quality to every class, every city, and every village.
                    </p>
                    <p className="font-body text-[#5A6478] text-[15px] leading-[1.7] tracking-wide">
                      This belief drives us forward — bold ambition, grounded thinking, and the same integrity in every product that we would want for our own families.
                    </p>
                  </div>

                  <div>
                    <SectionHeading>Our Promise</SectionHeading>
                    <p className="font-body text-[#5A6478] text-[15px] leading-[1.7] tracking-wide mb-4">
                      We don&rsquo;t just manufacture products — we package trust into every pack, every bottle, every box. Because true premium is not defined by exclusivity. It is defined by consistency, care, and quality that reaches every home, every single day, without compromise.
                    </p>
                    <p className="font-body text-[#5A6478] text-[15px] leading-[1.7] tracking-wide mb-4">
                      The distance we&rsquo;ve covered is only the beginning of a far greater journey — and we invite you, our customers, to be part of it.
                    </p>
                    <p className="font-body text-[#1A2456] font-semibold text-[15px] leading-[1.7] tracking-wide">
                      Indian Soya &amp; Spice Industries — <em>Where Trust Is Manufactured, Not Just Promised.</em>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* ── Right: tilted image (same size as text card) ── */}
          <div
            className="relative lg:h-full lg:-ml-[10%]"
            style={reveal(sectionInView, 150)}
          >
            <div className="lg:h-full rotate-[3deg] sm:rounded-[18px] overflow-hidden shadow-[0_30px_60px_rgba(26,36,86,0.20)]">
              <img
                src={teafarming}
                alt="Tea farming"
                className="w-full aspect-[4/5] lg:aspect-auto lg:h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
