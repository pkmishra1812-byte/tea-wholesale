// src/pages/ContactPage.jsx
import { useState } from "react";
import bannerImg from "../assets/banner-new-1.png";
import FinalCTA from "../components/company/FinalCTA";

const contactInfo = [
  {
    label: "Registered Office",
    value: "Village - Bhatara Ghat, Tehshil - Bisfi, Dist. - Madhubani,\nBihar, Pin Code-847122",
  },
  {
    label: "GIVE US A CALL",
    value: "+91 9958666303",
  },
  {
    label: "EMAIL US",
    value: "contactus@issiportal.in",
  },
];

export default function ContactPage() {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    mobile: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <>
      {/* ── Hero Section ── */}
      <section className="relative w-full h-[320px] sm:h-[400px] lg:h-[480px] overflow-hidden">
        <img
          src={bannerImg}
          alt="Tea cups on rustic table"
          className="absolute left-0 top-[30px] w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-transparent" />
        <div className="relative z-10 h-full flex flex-col justify-start items-start px-8 sm:px-12 lg:px-20 pt-16 lg:pt-24">
          <h1 className="font-display text-white text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-4">
            Contact Us
          </h1>
          <p className="font-poppins text-white/80 text-sm sm:text-base max-w-xl leading-relaxed">
            We are always happy to hear from you. To send us your queries, feedback or suggestions, please fill in the form below and someone from the team will get in touch with you shortly.
          </p>
        </div>
      </section>

      {/* ── Get In Touch Section ── */}
      <section className="relative z-20 pb-20 lg:pb-28"
        style={{ backgroundColor: "#F5EFE6", position: "relative", top: "-35px" }}>
        <div className="max-w-screen-xl mx-auto px-6 lg:px-8">
          <div className="bg-white sm:rounded-2xl shadow-[0_8px_40px_rgba(0,0,0,0.08)] p-8 sm:p-10 lg:p-14">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">

              {/* ── Left Column: Info ── */}
              <div>
                <h2 className="font-display text-charcoal text-3xl lg:text-4xl font-bold leading-tight mb-10">
                  Get In Touch
                </h2>

                <div className="space-y-8">
                  {contactInfo.map((item) => (
                    <div key={item.label}>
                      <p className="font-body text-sm font-bold uppercase tracking-[0.15em] mb-2"
                        style={{ color: "#0057A0" }}>
                        {item.label}
                      </p>
                      <p className="font-body text-charcoal text-sm sm:text-base leading-relaxed whitespace-pre-line">
                        {item.value}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* ── Right Column: Form ── */}
              <div>
                <form className="space-y-5" onSubmit={handleSubmit}>
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <input
                        type="text"
                        name="firstName"
                        placeholder="First Name"
                        value={form.firstName}
                        onChange={handleChange}
                        className="w-full font-body text-sm text-charcoal sm:rounded-lg px-5 py-3.5 focus:outline-none focus:ring-2 focus:ring-[#C0392B]/40 placeholder:text-charcoal/35"
                        style={{
                          backgroundColor: "#FDF9F3",
                          border: "1px solid #E8E0D4",
                        }}
                      />
                    </div>
                    <div>
                      <input
                        type="text"
                        name="lastName"
                        placeholder="Last Name"
                        value={form.lastName}
                        onChange={handleChange}
                        className="w-full font-body text-sm text-charcoal sm:rounded-lg px-5 py-3.5 focus:outline-none focus:ring-2 focus:ring-[#C0392B]/40 placeholder:text-charcoal/35"
                        style={{
                          backgroundColor: "#FDF9F3",
                          border: "1px solid #E8E0D4",
                        }}
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <input
                        type="tel"
                        name="mobile"
                        placeholder="Mobile Number"
                        value={form.mobile}
                        onChange={handleChange}
                        className="w-full font-body text-sm text-charcoal sm:rounded-lg px-5 py-3.5 focus:outline-none focus:ring-2 focus:ring-[#C0392B]/40 placeholder:text-charcoal/35"
                        style={{
                          backgroundColor: "#FDF9F3",
                          border: "1px solid #E8E0D4",
                        }}
                      />
                    </div>
                    <div>
                      <input
                        type="email"
                        name="email"
                        placeholder="Email ID"
                        value={form.email}
                        onChange={handleChange}
                        className="w-full font-body text-sm text-charcoal sm:rounded-lg px-5 py-3.5 focus:outline-none focus:ring-2 focus:ring-[#C0392B]/40 placeholder:text-charcoal/35"
                        style={{
                          backgroundColor: "#FDF9F3",
                          border: "1px solid #E8E0D4",
                        }}
                      />
                    </div>
                  </div>

                  <div>
                    <textarea
                      name="message"
                      rows={5}
                      placeholder="Your Message"
                      value={form.message}
                      onChange={handleChange}
                      className="w-full font-body text-sm text-charcoal sm:rounded-lg px-5 py-3.5 focus:outline-none focus:ring-2 focus:ring-[#C0392B]/40 placeholder:text-charcoal/35 resize-y"
                      style={{
                        backgroundColor: "#FDF9F3",
                        border: "1px solid #E8E0D4",
                      }}
                    />
                  </div>

                  <button
                    type="submit"
                    className="font-poppins text-sm font-semibold tracking-wide text-white px-8 py-3.5 rounded-full transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5"
                    style={{ backgroundColor: "#0057A0" }}
                    onMouseEnter={(e) => (e.target.style.backgroundColor = "#004080")}
                    onMouseLeave={(e) => (e.target.style.backgroundColor = "#0057A0")}
                  >
                    Submit
                  </button>
                </form>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <FinalCTA />
    </>
  );
}
