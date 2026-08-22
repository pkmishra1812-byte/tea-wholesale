import { useEffect, useRef, useState } from "react";
import brandVideo from "../../assets/bioqt-vb.mp4";

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

export default function CompanyGlance() {
  const videoRef = useRef(null);
  const [playing, setPlaying] = useState(true);
  const [sectionRef, sectionInView] = useInView(0.1);

  const togglePlay = () => {
    const video = videoRef.current;
    if (!video) return;
    if (video.paused) {
      video.play();
      setPlaying(true);
    } else {
      video.pause();
      setPlaying(false);
    }
  };

  const reveal = (shown, delay) => ({
    opacity: shown ? 1 : 0,
    transform: shown ? "translateY(0)" : "translateY(32px)",
    transition:
      "opacity 900ms cubic-bezier(0.22,1,0.36,1), transform 900ms cubic-bezier(0.22,1,0.36,1)",
    transitionDelay: `${delay}ms`,
  });

  return (
    <section className="relative w-full overflow-hidden bg-gradient-to-r from-[#0A1A4A] via-[#16318A] to-[#2E5FE8]">
      {/* faint diagonal sheen */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "linear-gradient(115deg, rgba(255,255,255,0.06) 0%, transparent 40%)",
        }}
      />

      <div
        ref={sectionRef}
        className="relative w-full grid lg:grid-cols-[46%_54%] items-stretch"
      >
        {/* ── Image / Video (left, pill shape, bleeds off edges) ── */}
        <div
          className="relative mx-5 mt-6 lg:mx-0 lg:mt-0 h-[300px] sm:h-[380px] lg:h-full overflow-hidden sm:rounded-t-[28px] lg:rounded-t-none lg:rounded-tr-[999px] lg:rounded-br-[999px]"
          style={reveal(sectionInView, 0)}
        >
          <video
            ref={videoRef}
            src={brandVideo}
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
          />

          {/* play / pause control */}
          <button
            type="button"
            onClick={togglePlay}
            aria-label={playing ? "Pause video" : "Play video"}
            className="absolute bottom-5 left-5 lg:bottom-7 lg:left-7 w-11 h-11 lg:w-12 lg:h-12 sm:rounded-xl bg-[#0A1A4A] shadow-lg shadow-black/25 flex items-center justify-center text-white transition-all duration-300 hover:scale-110 hover:bg-[#2E5FE8]"
          >
            {playing ? (
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M6 5h4v14H6zM14 5h4v14h-4z" />
              </svg>
            ) : (
              <svg className="w-4 h-4 ml-0.5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z" />
              </svg>
            )}
          </button>
        </div>

        {/* ── Text content (right) ── */}
        <div
          className="flex items-center px-5 sm:px-10 pt-10 pb-16 lg:px-14 lg:py-20 xl:px-20 xl:py-24"
          style={reveal(sectionInView, 200)}
        >
          <div className="w-full max-w-2xl">
            <span className="inline-block font-body text-xs lg:text-sm tracking-[0.25em] uppercase text-[#9DB6FF] font-bold mb-5">
              At a Glance
            </span>

            <h2 className="font-display text-white text-4xl sm:text-[44px] lg:text-[48px] xl:text-[52px] font-bold leading-[1.08] tracking-tight mb-7">
              Our company at a glance — quality that a family can trust
            </h2>

            <p className="font-body text-white/85 text-base lg:text-lg leading-[1.7] tracking-wide max-w-[560px]">
              Indian Soya &amp; Spice Industries is more than a company — it is a
              promise that quietly resides in every Indian home. Built on a single
              conviction, we have risen to become one of India&rsquo;s Top FMCG
              companies, delivering everyday essentials with the same care,
              craftsmanship and quality as luxury goods.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
