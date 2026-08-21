// src/pages/WholesalePage.jsx
import { useState } from "react";
import WholesaleWhyChooseUs from "../components/shared/WholesaleWhyChooseUs";
import WholesaleProducts from "../components/shared/WholesaleProducts";
import wholesaleBanner from "../assets/wholsale-banner.png";

function StatCard({ value, label }) {
  return (
    <div className="flex flex-col items-center text-center px-6 py-8 border-r border-tea-100 last:border-r-0">
      <span className="font-display text-4xl lg:text-5xl font-bold text-brand tracking-tight">
        {value}
      </span>
      <span className="font-body text-sm text-charcoal/55 mt-2 tracking-wide uppercase">
        {label}
      </span>
    </div>
  );
}

export default function WholesalePage() {
  const stats = [
    { value: "2023",   label: "Founded" },
    { value: "3+",    label: "Years of Excellence" },
    { value: "40+",    label: "Garden Partners" },
    { value: "12K MT", label: "Annual Volume" },
  ];

  const [form, setForm] = useState({
    companyName: "",
    personName: "",
    state: "",
    city: "",
    district: "",
    address: "",
    pinCode: "",
    phone: "",
    storageArea: "",
    existingDistributorship: "",
    investment: "",
    commercialVehicles: "",
    brands: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <>
  
  

      <img
        src={wholesaleBanner}
        alt="Wholesale"
        className="w-full h-auto object-cover"
      />

      <WholesaleProducts />

      <WholesaleWhyChooseUs />

      {/* ── Stats Bar ── */}
      <section className="bg-white border-y border-tea-100">
        <div className="max-w-screen-xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4">
            {stats.map((s) => (
              <StatCard key={s.label} {...s} />
            ))}
          </div>
        </div>
      </section>

      {/* ── Become a Distributor Section ── */}
      <section className="bg-white py-16 lg:py-24">
        <div className="max-w-[1100px] mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-[38%_1fr] gap-10 lg:gap-12 items-stretch">

            {/* Left Column — Message + Registered Office */}
            <div className="flex flex-col sm:rounded-2xl overflow-hidden border border-gray-100 bg-white">
              {/* Leave us a message */}
              <div className="px-8 pt-10 pb-8">
                <h2 className="font-poppins text-[#0057A0] text-2xl lg:text-[28px] font-bold leading-snug mb-3">
                  Leave us a message
                </h2>
                <p className="font-poppins text-[#4a5568] text-sm leading-relaxed">
                  Your message will be sent to our teams , who will get back to you as soon as they can. Please be advised that weekends and public holidays might delay response time.
                </p>
              </div>

              {/* Registered Office */}
              <div className="px-8 py-10 flex-1 flex flex-col">
                <h3 className="font-poppins text-[#0057A0] text-lg font-bold mb-4">
                  Registered Office
                </h3>
                <p className="font-poppins text-[#4a5568] text-sm leading-relaxed mb-4">
                  Village - Bhatara Ghat, Tehasil - Bisfi,<br />
                  District - Madhubani, Bihar,<br />
                  Pin - 847122
                </p>
                <p className="font-poppins text-[#1a2942] text-sm leading-relaxed mb-1">
                  <span className="font-bold">Tel:</span> +91 9958666303
                </p>
                <p className="font-poppins text-[#1a2942] text-sm leading-relaxed mb-8">
                  <span className="font-bold">Email:</span> contactus@issiportal.in
                </p>

                <div className="space-y-5 mt-auto">
                  <div className="flex items-start gap-3.5">
                    <div className="w-8 h-8 sm:rounded flex items-center justify-center shrink-0" style={{ backgroundColor: "#0057A0" }}>
                      <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <p className="font-poppins text-[#1a2942] text-sm leading-relaxed pt-0.5">
                      <span className="font-bold">Tel:</span> +91 9958666303
                    </p>
                  </div>

                  <div className="flex items-start gap-3.5">
                    <div className="w-8 h-8 sm:rounded flex items-center justify-center shrink-0" style={{ backgroundColor: "#0057A0" }}>
                      <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <p className="font-poppins text-[#1a2942] text-sm leading-relaxed pt-0.5">
                      <span className="font-bold">Email:</span> contactus@issiportal.in
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column — Company Information Form */}
            <div className="sm:rounded-2xl p-8 sm:p-10 lg:p-12 border border-gray-100 bg-[#F1F1F1] flex flex-col">
              <h2 className="font-poppins text-[#0057A0] text-2xl font-bold mb-6">
                Company Information
              </h2>

              <form className="space-y-6 flex-1 flex flex-col" onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-8 flex-1">
                  {/* Row 1 */}
                  <div>
                    <label className="block font-poppins text-xs text-gray-500 mb-1.5">
                      Name Of The Company<span className="text-red-600">*</span>
                    </label>
                    <input type="text" name="companyName" value={form.companyName} onChange={handleChange}
                      className="w-full bg-transparent border-b border-gray-400 focus:border-[#8B1E2E] outline-none py-2 text-sm font-poppins text-[#1a2942]" />
                  </div>
                  <div>
                    <label className="block font-poppins text-xs text-gray-500 mb-1.5">
                      Name Of The Person/Proprietor<span className="text-red-600">*</span>
                    </label>
                    <input type="text" name="personName" value={form.personName} onChange={handleChange}
                      className="w-full bg-transparent border-b border-gray-400 focus:border-[#8B1E2E] outline-none py-2 text-sm font-poppins text-[#1a2942]" />
                  </div>

                  {/* Row 2 */}
                  <div>
                    <label className="block font-poppins text-xs text-gray-500 mb-1.5">
                      State<span className="text-red-600">*</span>
                    </label>
                    <input type="text" name="state" value={form.state} onChange={handleChange}
                      className="w-full bg-transparent border-b border-gray-400 focus:border-[#8B1E2E] outline-none py-2 text-sm font-poppins text-[#1a2942]" />
                  </div>
                  <div>
                    <label className="block font-poppins text-xs text-gray-500 mb-1.5">
                      City<span className="text-red-600">*</span>
                    </label>
                    <input type="text" name="city" value={form.city} onChange={handleChange}
                      className="w-full bg-transparent border-b border-gray-400 focus:border-[#8B1E2E] outline-none py-2 text-sm font-poppins text-[#1a2942]" />
                  </div>

                  {/* Row 3 */}
                  <div>
                    <label className="block font-poppins text-xs text-gray-500 mb-1.5">
                      District<span className="text-red-600">*</span>
                    </label>
                    <input type="text" name="district" value={form.district} onChange={handleChange}
                      className="w-full bg-transparent border-b border-gray-400 focus:border-[#8B1E2E] outline-none py-2 text-sm font-poppins text-[#1a2942]" />
                  </div>
                  <div>
                    <label className="block font-poppins text-xs text-gray-500 mb-1.5">
                      Address<span className="text-red-600">*</span>
                    </label>
                    <input type="text" name="address" value={form.address} onChange={handleChange}
                      className="w-full bg-transparent border-b border-gray-400 focus:border-[#8B1E2E] outline-none py-2 text-sm font-poppins text-[#1a2942]" />
                  </div>

                  {/* Row 4 */}
                  <div>
                    <label className="block font-poppins text-xs text-gray-500 mb-1.5">
                      Pin Code<span className="text-red-600">*</span>
                    </label>
                    <input type="text" name="pinCode" value={form.pinCode} onChange={handleChange}
                      className="w-full bg-transparent border-b border-gray-400 focus:border-[#8B1E2E] outline-none py-2 text-sm font-poppins text-[#1a2942]" />
                  </div>
                  <div>
                    <label className="block font-poppins text-xs text-gray-500 mb-1.5">
                      Phone<span className="text-red-600">*</span>
                    </label>
                    <input type="tel" name="phone" value={form.phone} onChange={handleChange}
                      className="w-full bg-transparent border-b border-gray-400 focus:border-[#8B1E2E] outline-none py-2 text-sm font-poppins text-[#1a2942]" />
                  </div>

                  {/* Row 5 */}
                  <div>
                    <label className="block font-poppins text-xs text-gray-500 mb-1.5">
                      Storage Area<span className="text-red-600">*</span>
                    </label>
                    <input type="text" name="storageArea" value={form.storageArea} onChange={handleChange}
                      className="w-full bg-transparent border-b border-gray-400 focus:border-[#8B1E2E] outline-none py-2 text-sm font-poppins text-[#1a2942]" />
                  </div>
                  <div>
                    <label className="block font-poppins text-xs text-gray-500 mb-1.5">
                      Existing Distributorship<span className="text-red-600">*</span>
                    </label>
                    <input type="text" name="existingDistributorship" value={form.existingDistributorship} onChange={handleChange}
                      className="w-full bg-transparent border-b border-gray-400 focus:border-[#8B1E2E] outline-none py-2 text-sm font-poppins text-[#1a2942]" />
                  </div>

                  {/* Row 6 */}
                  <div>
                    <label className="block font-poppins text-xs text-gray-500 mb-1.5">
                      Investment<span className="text-red-600">*</span>
                    </label>
                    <input type="text" name="investment" value={form.investment} onChange={handleChange}
                      className="w-full bg-transparent border-b border-gray-400 focus:border-[#8B1E2E] outline-none py-2 text-sm font-poppins text-[#1a2942]" />
                  </div>
                  <div>
                    <label className="block font-poppins text-xs text-gray-500 mb-1.5">
                      Commercial Vehicles<span className="text-red-600">*</span>
                    </label>
                    <input type="text" name="commercialVehicles" value={form.commercialVehicles} onChange={handleChange}
                      className="w-full bg-transparent border-b border-gray-400 focus:border-[#8B1E2E] outline-none py-2 text-sm font-poppins text-[#1a2942]" />
                  </div>

                  {/* Row 7 — Brands Dropdown */}
                  <div className="sm:col-span-2">
                    <label className="block font-poppins text-xs text-gray-500 mb-1.5">
                      Brand(s) Interested in
                    </label>
                    <div className="relative">
                      <select name="brands" value={form.brands} onChange={handleChange}
                        className="w-full bg-transparent border-b border-gray-400 focus:border-[#8B1E2E] outline-none py-2 text-sm font-poppins text-[#1a2942] appearance-none pr-8">
                        <option value="">Select a brand</option>
                        <option value="tea">Tea</option>
                        <option value="spices">Spices</option>
                        <option value="babyCare">Baby Care</option>
                        <option value="beauty">Beauty &amp; Wellbeing</option>
                      </select>
                      <svg className="absolute right-0 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500 pointer-events-none" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </div>
                </div>

                <button
                  type="submit"
                  className="self-start font-poppins text-sm font-semibold px-8 py-2.5 rounded-full border-2 transition-all duration-300 hover:text-white mt-auto"
                  style={{ borderColor: "#0057A0", color: "#0057A0" }}
                  onMouseEnter={(e) => { e.target.style.backgroundColor = "#0057A0"; e.target.style.color = "#fff"; }}
                  onMouseLeave={(e) => { e.target.style.backgroundColor = "transparent"; e.target.style.color = "#0057A0"; }}
                >
                  Submit
                </button>
              </form>
            </div>

          </div>
        </div>
      </section>

    </>
  );
}
