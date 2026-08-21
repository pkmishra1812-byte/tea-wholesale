import { useRef, useState } from "react";
import brandVideo from "../../assets/bioqt-vb.mp4";

const RED = "#A03028";

const leafPattern = `url("data:image/svg+xml,%3Csvg width='220' height='220' viewBox='0 0 220 220' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' stroke='%23C8A24B' stroke-opacity='0.09' stroke-width='2'%3E%3Cpath d='M60 160 Q100 105 140 160 Q100 172 60 160Z'/%3E%3Cpath d='M60 160 Q100 105 140 160 Q100 172 60 160Z' transform='translate(0 50)'/%3E%3Cpath d='M110 30 Q140 60 110 92 Q80 60 110 30Z'/%3E%3Cpath d='M150 120 Q172 145 150 168 Q128 145 150 120Z'/%3E%3C/g%3E%3C/svg%3E")`;

function BrandStory() {
  const videoRef = useRef(null);
  const [playing, setPlaying] = useState(false);

  const togglePlay = () => {
    const v = videoRef.current;
    if (!v) return;
    if (v.paused) {
      v.play();
      setPlaying(true);
    } else {
      v.pause();
      setPlaying(false);
    }
  };

  return (
    <section
      className="pt-6 lg:pt-10 pb-10 lg:pb-14"
      style={{ backgroundColor: "#FDF6EC", backgroundImage: leafPattern }}
    >
      <div className="relative z-10 max-w-screen-xl mx-auto px-6 lg:px-8 pt-4 lg:pt-8">
        {/* Heading */}
        <h2 className="font-display text-black text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
          Every Tea Has A Story
        </h2>

        {/* Paragraph */}
        <p className="font-body text-gray-600 leading-relaxed mt-6 w-full lg:text-lg">
          For over three decades, Next Level Tea has carried the flavour of India's
          finest estates to every home — a legacy of handpicked leaves, time-honoured
          craft and an uncompromising commitment to quality in every single cup.
        </p>

        {/* Video */}
        <div
          className="relative aspect-video w-full lg:w-[80%] mx-auto sm:rounded-2xl overflow-hidden bg-black mt-12 lg:mt-16 shadow-2xl cursor-pointer"
          onClick={togglePlay}
        >
          <video
            ref={videoRef}
            src={brandVideo}
            className="absolute inset-0 w-full h-full object-cover"
            playsInline
          />
          {!playing && (
            <div className="absolute inset-0 flex items-center justify-center bg-black/30 transition-opacity duration-300">
              <span className="w-20 h-20 lg:w-24 lg:h-24 rounded-full bg-white/95 flex items-center justify-center shadow-xl transition-transform duration-300 hover:scale-110">
                <svg viewBox="0 0 24 24" className="w-8 h-8 lg:w-9 lg:h-9 ml-1" fill={RED}>
                  <path d="M8 5v14l11-7z" />
                </svg>
              </span>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

export default BrandStory;
