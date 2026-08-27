// src/pages/CareersPage.jsx
import { useEffect, useRef } from "react";
import bannerImg from "../assets/banner-1.png";
import teafarmingImg from "../assets/teafarming.png";
import careersImg from "../assets/carrers image.png";

export default function CareersPage() {
  const gridRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const cards = entry.target.querySelectorAll("[data-grid-card]");
            cards.forEach((card, i) => {
              setTimeout(() => {
                card.classList.add("grid-card-visible");
              }, i * 150);
            });
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );
    if (gridRef.current) observer.observe(gridRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <>
      {/* ── Hero Banner Section ── */}
      <section className="relative w-full h-[320px] sm:h-[400px] lg:h-[480px] overflow-hidden">
        <img
          src={bannerImg}
          alt="Career at ISSI"
          className="absolute left-0 top-[30px] w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-transparent" />
        <div className="relative z-10 h-full flex flex-col justify-start items-start px-8 sm:px-12 lg:px-20 pt-16 lg:pt-24">
          <h1 className="font-display text-white text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-4">
            Career
          </h1>
          <p className="font-poppins text-white/80 text-sm sm:text-base max-w-xl leading-relaxed">
            Join our team and be a part of something extraordinary. We are always looking for talented individuals who share our passion for quality and innovation.
          </p>
        </div>
      </section>

      {/* ── About Section ── */}
      <section className="pt-6 lg:pt-10 pb-10 lg:pb-14"
        style={{ backgroundColor: "#FDF6EC" }}>
        <div className="relative z-10 max-w-screen-xl mx-auto px-6 lg:px-8 pt-4 lg:pt-8 space-y-6">
          <p className="font-body text-gray-600 leading-relaxed lg:text-lg">
            Our tagline "Growing While Empowering" encapsulates our approach to grow while uplifting and supporting our employees, partners, and communities. This approach recognizes that the growth and success of our organization are closely linked to the well-being and empowerment of the people and communities we serve. We aim to create an inclusive environment that encourages the development and growth of our employees and partners, and we actively work towards creating a positive impact on society.
          </p>

          <p className="font-body text-gray-600 leading-relaxed lg:text-lg">
            Are you looking for quality, trust, and innovation in FMCG, Beauty &amp; Wellbeing, and Baby Care? Look no further than ISSI! With a strong presence across India and a commitment to quality and excellence, we are a trusted name in FMCG foods, beauty &amp; wellbeing, and baby care products, along with related accessories and machinery.
          </p>

          <p className="font-body text-gray-600 leading-relaxed lg:text-lg">
            At ISSI, we don't just sell products — we build partnerships. We manufacture and supply a wide range of FMCG food products, beauty &amp; wellness essentials, and baby care items, backed by reliable accessories and machinery to keep your business running smoothly.
          </p>

          <p className="font-body text-gray-600 leading-relaxed lg:text-lg">
            We are also proud to support the next generation of entrepreneurs. Through our startup growth support services, we help new businesses get their products packaged and launched under their own brand name — turning ideas into market-ready products. Our end-to-end assistance includes all documentation and registration services, so you can focus on growing your brand while we handle the paperwork.
          </p>

          <p className="font-body text-gray-600 leading-relaxed lg:text-lg">
            From raw goods and packing materials to the machinery needed to bring your products to life, we provide everything a business needs to start, scale, and succeed — all under one roof.
          </p>

          <p className="font-body text-gray-600 leading-relaxed lg:text-lg">
            We believe in promoting a culture of trust, quality, and long-term partnership, and are committed to supporting businesses of every size — from established brands to first-time entrepreneurs. We welcome partners and clients from all backgrounds who share our vision of growth through empowerment.
          </p>
        </div>
      </section>

      {/* ── What Do We Look For Section ── */}
      <section className="py-16 lg:py-24" style={{ backgroundColor: "#FDF6EC" }}>
        <div className="max-w-screen-xl mx-auto px-6 lg:px-8">
          <h2 className="font-poppins text-3xl sm:text-4xl lg:text-[42px] font-bold leading-tight mb-12 lg:mb-16"
            style={{ color: "#0057A0" }}>
            What do we look for?
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {/* Card 1: Integrity */}
            <div className="sm:sm:rounded-2xl p-8 lg:p-10 flex flex-col items-center text-center" style={{ backgroundColor: "#0057A0" }}>
              <svg className="w-16 h-16 lg:w-[70px] lg:h-[70px] mb-5" viewBox="0 0 64 64" fill="none" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <defs>
                  <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#4ADE80" />
                    <stop offset="100%" stopColor="#FBBF24" />
                  </linearGradient>
                </defs>
                <path stroke="url(#grad1)" d="M12 32h8l4-8 8 16 4-8h8" />
                <path stroke="url(#grad1)" d="M20 20c-2-4 0-8 4-8s6 4 4 8" />
                <path stroke="url(#grad1)" d="M44 20c2-4 0-8-4-8s-6 4-4 8" />
                <path stroke="url(#grad1)" d="M18 32c0 0-6 2-8 6s2 8 6 6" />
                <path stroke="url(#grad1)" d="M46 32c0 0 6 2 8 6s-2 8-6 6" />
              </svg>
              <span className="font-poppins text-white font-bold text-base lg:text-lg">Integrity</span>
            </div>

            {/* Card 2: Intellectual Rigour */}
            <div className="sm:rounded-2xl p-8 lg:p-10 flex flex-col items-center text-center" style={{ backgroundColor: "#0057A0" }}>
              <svg className="w-16 h-16 lg:w-[70px] lg:h-[70px] mb-5" viewBox="0 0 64 64" fill="none" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <defs>
                  <linearGradient id="grad2" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#4ADE80" />
                    <stop offset="100%" stopColor="#FBBF24" />
                  </linearGradient>
                </defs>
                <path stroke="url(#grad2)" d="M32 10c-10 0-16 8-16 16 0 6 3 10 6 14h20c3-4 6-8 6-14 0-8-6-16-16-16z" />
                <path stroke="url(#grad2)" d="M24 42v4c0 2 4 4 8 4s8-2 8-4v-4" />
                <path stroke="url(#grad2)" d="M32 6v4M22 14l-3-3M42 14l3-3M16 28h4M44 28h4" />
                <circle stroke="url(#grad2)" cx="32" cy="26" r="3" />
              </svg>
              <span className="font-poppins text-white font-bold text-base lg:text-lg">Intellectual Rigour</span>
            </div>

            {/* Card 3: A 'Will Do' Attitude */}
            <div className="sm:rounded-2xl p-8 lg:p-10 flex flex-col items-center text-center" style={{ backgroundColor: "#0057A0" }}>
              <svg className="w-16 h-16 lg:w-[70px] lg:h-[70px] mb-5" viewBox="0 0 64 64" fill="none" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <defs>
                  <linearGradient id="grad3" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#4ADE80" />
                    <stop offset="100%" stopColor="#FBBF24" />
                  </linearGradient>
                </defs>
                <path stroke="url(#grad3)" d="M32 12l4 8 8 2-6 6 2 8-8-4-8 4 2-8-6-6 8-2z" />
                <path stroke="url(#grad3)" d="M20 44c0-6 5-10 12-10s12 4 12 10" />
                <path stroke="url(#grad3)" d="M12 36l4-2M52 36l-4-2M32 4v4M8 20l3 2M56 20l-3 2" />
              </svg>
              <span className="font-poppins text-white font-bold text-base lg:text-lg">A 'Will Do' Attitude</span>
            </div>

            {/* Card 4: Creativity */}
            <div className="sm:rounded-2xl p-8 lg:p-10 flex flex-col items-center text-center" style={{ backgroundColor: "#0057A0" }}>
              <svg className="w-16 h-16 lg:w-[70px] lg:h-[70px] mb-5" viewBox="0 0 64 64" fill="none" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <defs>
                  <linearGradient id="grad4" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#4ADE80" />
                    <stop offset="100%" stopColor="#FBBF24" />
                  </linearGradient>
                </defs>
                <path stroke="url(#grad4)" d="M32 6c-2 0-4 2-4 4v14c0 2 2 4 4 4s4-2 4-4V10c0-2-2-4-4-4z" />
                <path stroke="url(#grad4)" d="M20 30c0 6 5 10 12 10s12-4 12-10" />
                <path stroke="url(#grad4)" d="M24 40v6c0 2 4 4 8 4s8-2 8-4v-6" />
                <path stroke="url(#grad4)" d="M18 14l3 3M46 14l-3 3M14 26h4M46 26h4" />
                <circle stroke="url(#grad4)" cx="32" cy="6" r="3" />
              </svg>
              <span className="font-poppins text-white font-bold text-base lg:text-lg">Creativity</span>
            </div>

            {/* Card 5: Ability to Think Strategically */}
            <div className="sm:rounded-2xl p-8 lg:p-10 flex flex-col items-center text-center" style={{ backgroundColor: "#0057A0" }}>
              <svg className="w-16 h-16 lg:w-[70px] lg:h-[70px] mb-5" viewBox="0 0 64 64" fill="none" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <defs>
                  <linearGradient id="grad5" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#4ADE80" />
                    <stop offset="100%" stopColor="#FBBF24" />
                  </linearGradient>
                </defs>
                <path stroke="url(#grad5)" d="M32 8c-12 0-20 10-20 22s8 22 20 22 20-10 20-22S44 8 32 8z" />
                <path stroke="url(#grad5)" d="M24 26h16M24 34h10" />
                <circle stroke="url(#grad5)" cx="32" cy="18" r="4" />
                <path stroke="url(#grad5)" d="M28 18l2 2 4-4" />
              </svg>
              <span className="font-poppins text-white font-bold text-base lg:text-lg">Ability to Think Strategically</span>
            </div>

            {/* Card 6: High Energy */}
            <div className="sm:rounded-2xl p-8 lg:p-10 flex flex-col items-center text-center" style={{ backgroundColor: "#0057A0" }}>
              <svg className="w-16 h-16 lg:w-[70px] lg:h-[70px] mb-5" viewBox="0 0 64 64" fill="none" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <defs>
                  <linearGradient id="grad6" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#4ADE80" />
                    <stop offset="100%" stopColor="#FBBF24" />
                  </linearGradient>
                </defs>
                <path stroke="url(#grad6)" d="M32 4v16M32 20l-8 16h12l-4 20" />
                <path stroke="url(#grad6)" d="M18 12l4-4M46 12l-4-4M10 30l6-2M54 30l-6-2M14 44l5-4M50 44l-5-4" />
              </svg>
              <span className="font-poppins text-white font-bold text-base lg:text-lg">High Energy</span>
            </div>
          </div>
        </div>
      </section>

      {/* ── Current Openings Section ── */}
      <section className="py-16 lg:py-24" style={{ backgroundColor: "#3A3634" }}>
        <div className="max-w-screen-xl mx-auto px-6 lg:px-8">
          <h2 className="font-display text-white text-3xl sm:text-4xl lg:text-[42px] font-bold leading-tight mb-4">
            Current Openings
          </h2>
          <p className="font-poppins text-white font-bold text-sm sm:text-base leading-relaxed mb-12 lg:mb-16 max-w-2xl">
            ISSI extends an opportunity to all the creative minds to redefine their career path with more freedom.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-12 lg:mb-16">
            {/* Card 1 */}
            <div className="border border-white/40 sm:rounded-lg p-6 lg:p-8 flex flex-col justify-between min-h-[220px]">
              <h3 className="font-display text-white text-lg lg:text-xl font-semibold leading-snug">
                Senior Sales Manager – Networking &amp; Enterprise Solution
              </h3>
              <div>
                <p className="font-poppins text-white font-bold text-sm mb-4">Madhubani, Bihar</p>
                <button className="w-full font-poppins text-white font-bold text-sm py-2.5 sm:rounded-md transition-all duration-300 hover:opacity-90"
                  style={{ backgroundColor: "#0057A0" }}>
                  View and Apply
                </button>
              </div>
            </div>

            {/* Card 2 */}
            <div className="border border-white/40 sm:rounded-lg p-6 lg:p-8 flex flex-col justify-between min-h-[220px]">
              <h3 className="font-display text-white text-lg lg:text-xl font-semibold leading-snug">
                RM (Relationship Manager)
              </h3>
              <div>
                <p className="font-poppins text-white font-bold text-sm mb-4">Madhubani, Bihar</p>
                <button className="w-full font-poppins text-white font-bold text-sm py-2.5 sm:rounded-md transition-all duration-300 hover:opacity-90"
                  style={{ backgroundColor: "#0057A0" }}>
                  View and Apply
                </button>
              </div>
            </div>

            {/* Card 3 */}
            <div className="border border-white/40 sm:rounded-lg p-6 lg:p-8 flex flex-col justify-between min-h-[220px]">
              <h3 className="font-display text-white text-lg lg:text-xl font-semibold leading-snug">
                ASM (Area Sales Manager)
              </h3>
              <div>
                <p className="font-poppins text-white font-bold text-sm mb-4">Madhubani, Bihar</p>
                <button className="w-full font-poppins text-white font-bold text-sm py-2.5 sm:rounded-md transition-all duration-300 hover:opacity-90"
                  style={{ backgroundColor: "#0057A0" }}>
                  View and Apply
                </button>
              </div>
            </div>
          </div>

          <div className="text-center">
            <button className="font-poppins text-white font-bold text-sm tracking-wide px-10 py-3 sm:rounded-md transition-all duration-300 hover:opacity-90"
              style={{ backgroundColor: "#0057A0" }}>
              Explore more jobs
            </button>
          </div>
        </div>
      </section>

      {/* ── CTA Banner Section ── */}
      <section className="py-5 lg:py-6" style={{ backgroundColor: "#0057A0" }}>
        <div className="max-w-screen-xl mx-auto px-6 lg:px-8 flex flex-col items-center text-center">
          <h2 className="font-poppins text-white text-lg sm:text-xl lg:text-xl font-medium leading-snug mb-1.5">
            If you don't find your preferred job, then
          </h2>
          <p className="font-poppins text-white font-bold text-xs sm:text-sm leading-relaxed mb-4">
            Upload your resume and we'll match you with relevant opportunities
          </p>
          <button className="font-poppins text-[#1A1A2E] font-bold text-xs sm:text-sm px-6 py-2 bg-white rounded-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5">
            Upload your resume
          </button>
        </div>
      </section>

      {/* ── Two Column Careers Section ── */}
      <section className="bg-white py-16 lg:py-24">
        <div className="max-w-screen-xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">

            {/* Column 1 */}
            <div>
              <h2 className="font-display text-black text-3xl lg:text-4xl font-bold leading-tight text-center mb-5">
                Where passion meets profession
              </h2>
              <div className="sm:rounded-lg overflow-hidden mb-5">
                <img
                  src={teafarmingImg}
                  alt="Professional explaining at trade show"
                  className="w-full aspect-video object-cover"
                />
              </div>
              <p className="font-body text-[#1a2942]/75 text-[15px] leading-[1.75]">
                A fulfilling career is about more than just a paycheck — it's about pursuing your purpose. When passion drives your work, it fuels creativity, innovation, and meaningful impact. Whether you're just starting out or bringing years of experience, we invite you to explore career opportunities at ISSI — where passion meets profession.
              </p>
            </div>

            {/* Column 2 */}
            <div>
              <h2 className="font-display text-black text-2xl lg:text-3xl font-bold leading-tight text-center mb-5 whitespace-nowrap">
                Join a world of endless possibilities
              </h2>
              <div className="sm:rounded-lg overflow-hidden mb-5">
                <img
                  src={teafarmingImg}
                  alt="Person presenting to group"
                  className="w-full aspect-video object-cover"
                />
              </div>
              <p className="font-body text-[#1a2942]/75 text-[15px] leading-[1.75]">
                ISSI is a leader in developing cutting-edge communication technologies — from fiber optics and 5G solutions to advanced networking infrastructure. With diverse career paths spanning R&amp;D, sales &amp; marketing, and operations, there's a place for every talent. Whether you're a seasoned professional or a newcomer eager to learn, explore the endless possibilities with ISSI and shape the future of connectivity.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* ── Life at ISSI Section ── */}
      <section className="flex flex-col lg:flex-row h-auto lg:h-[400px]">
        {/* Left Panel */}
        <div className="w-full lg:w-[35%] flex flex-col justify-center px-8 sm:px-12 lg:px-[40px] py-12 lg:py-0"
          style={{ backgroundColor: "#3A3A3A" }}>
          <h2 className="font-poppins text-white text-2xl sm:text-[28px] font-bold leading-snug mb-5">
            Life at ISSI
          </h2>
          <p className="font-body text-white/70 text-sm leading-[1.7] mb-8 max-w-md">
            We are a dynamic, fast-growing organization committed to helping our employees achieve their career goals. Our core values of dreaming, developing, delivering, and driving shape everything we do — creating a culture where innovation thrives and every team member is empowered to make an impact.
          </p>
          <button
            className="inline-block self-start font-poppins text-white font-semibold text-sm px-6 py-2.5 rounded transition-all duration-300 hover:opacity-90"
            style={{ backgroundColor: "#0057A0" }}
          >
            Explore
          </button>
        </div>

        {/* Right Panel */}
        <div className="w-full lg:w-[65%] h-[280px] lg:h-full">
          <img
            src={teafarmingImg}
            alt="Life at ISSI - Team"
            className="w-full h-full object-cover"
          />
        </div>
      </section>

      {/* ── Corporate Culture Section ── */}
      <section className="bg-white py-16 lg:py-24">
        <div className="max-w-[1060px] mx-auto px-6 lg:px-8">
          <h2 className="font-poppins text-[#1a2942] text-2xl sm:text-3xl lg:text-[32px] font-normal leading-snug mb-8">
            ISSI - A culture of excellence
          </h2>

          <div className="space-y-6 mb-10 lg:mb-12">
            <p className="font-body text-[#1a2942]/75 text-[15px] leading-[1.7]">
              Strong corporate culture is the foundation of any successful organization. At ISSI, our core values — integrity, understanding, excellence, unity, and responsibility — are the cornerstone of everything we do. These values guide our decisions, shape our relationships, and drive our commitment to making a meaningful difference in the lives of our employees, partners, and the communities we serve.
            </p>

            <p className="font-body text-[#1a2942]/75 text-[15px] leading-[1.7]">
              We are a diverse and inclusive organization that embraces the unique perspectives and experiences of every employee. This commitment to diversity is reflected in our policies, practices, and programs, which are designed to create a welcoming and supportive work environment where everyone can thrive and contribute their best.
            </p>

            <p className="font-body text-[#1a2942]/75 text-[15px] leading-[1.7]">
              We are deeply committed to responsible business practices, upholding the highest standards of integrity, transparency, and accountability. Our customer-first mindset, culture of innovation, and entrepreneurial spirit ensure that we continuously adapt and evolve to meet the changing needs of our stakeholders while maintaining the highest ethical standards.
            </p>

            <p className="font-body text-[#1a2942]/75 text-[15px] leading-[1.7]">
              Our dedication to delivering high-quality products and services is matched by our dynamic, results-oriented approach. Driven by a passion for excellence, we consistently strive to create value for our stakeholders — whether through the development of new products, expansion into new markets, or investment in community development. This is achieved with agility, dedication, and an unwavering focus on results.
            </p>
          </div>

          <style>{`
            .grid-card {
              opacity: 0;
              transform: translateY(28px);
              transition: opacity 0.6s ease, transform 0.6s ease;
            }
            .grid-card-visible {
              opacity: 1;
              transform: translateY(0);
            }
            .grid-card:hover .grid-card-img {
              transform: scale(1.05);
            }
            .grid-card:hover .grid-card-overlay {
              opacity: 0.55;
            }
            .grid-card:hover .grid-card-label {
              transform: translateY(-4px);
            }
          `}</style>
          <div ref={gridRef} className="grid grid-cols-1 sm:grid-cols-2">
            {/* Dream */}
            <div data-grid-card className="grid-card relative overflow-hidden aspect-[16/10] sm:aspect-[16/9] cursor-pointer">
              <img src={teafarmingImg} alt="Dream" className="grid-card-img absolute inset-0 w-full h-full object-cover transition-transform duration-[0.4s] ease-out" />
              <div className="grid-card-overlay absolute inset-0 bg-gradient-to-t from-black/60 to-transparent transition-opacity duration-[0.4s] opacity-40" />
              <span className="grid-card-label absolute bottom-[20px] left-[20px] font-poppins text-white font-bold text-[22px] lg:text-[26px] transition-all duration-[0.4s]">
                Dream
              </span>
            </div>

            {/* Develop */}
            <div data-grid-card className="grid-card relative overflow-hidden aspect-[16/10] sm:aspect-[16/9] cursor-pointer">
              <img src={teafarmingImg} alt="Develop" className="grid-card-img absolute inset-0 w-full h-full object-cover transition-transform duration-[0.4s] ease-out" />
              <div className="grid-card-overlay absolute inset-0 bg-gradient-to-t from-black/60 to-transparent transition-opacity duration-[0.4s] opacity-40" />
              <span className="grid-card-label absolute bottom-[20px] left-[20px] font-poppins text-white font-bold text-[22px] lg:text-[26px] transition-all duration-[0.4s]">
                Develop
              </span>
            </div>

            {/* Deliver */}
            <div data-grid-card className="grid-card relative overflow-hidden aspect-[16/10] sm:aspect-[16/9] cursor-pointer">
              <img src={teafarmingImg} alt="Deliver" className="grid-card-img absolute inset-0 w-full h-full object-cover transition-transform duration-[0.4s] ease-out" />
              <div className="grid-card-overlay absolute inset-0 bg-gradient-to-t from-black/60 to-transparent transition-opacity duration-[0.4s] opacity-40" />
              <span className="grid-card-label absolute bottom-[20px] left-[20px] font-poppins text-white font-bold text-[22px] lg:text-[26px] transition-all duration-[0.4s]">
                Deliver
              </span>
            </div>

            {/* Drive */}
            <div data-grid-card className="grid-card relative overflow-hidden aspect-[16/10] sm:aspect-[16/9] cursor-pointer">
              <img src={teafarmingImg} alt="Drive" className="grid-card-img absolute inset-0 w-full h-full object-cover transition-transform duration-[0.4s] ease-out" />
              <div className="grid-card-overlay absolute inset-0 bg-gradient-to-t from-black/60 to-transparent transition-opacity duration-[0.4s] opacity-40" />
              <span className="grid-card-label absolute bottom-[20px] left-[20px] font-poppins text-white font-bold text-[22px] lg:text-[26px] transition-all duration-[0.4s]">
                Drive
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Careers Image */}
      <div className="w-full">
        <img
          src={careersImg}
          alt="Careers at Indian Soya & Spice Industries"
          className="w-full h-auto object-cover max-h-[500px]"
        />
      </div>

    </>
  );
}

