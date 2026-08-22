// src/pages/PoliciesPage.jsx
import { useState } from "react";
import bannerImg from "../assets/banner-new-1.png";

const sections = [
  {
    id: "privacy",
    title: "Privacy Policy",
    icon: "M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z",
    content: `At Indian Soya & Spice Industries, we respect your privacy and are committed to protecting your personal data. This policy explains how we collect, use, and safeguard your information when you visit our website or engage with our services.

We collect information you provide directly — such as your name, email address, phone number, and business details when you fill out forms, register for an account, or contact us. We also automatically collect certain technical data including IP address, browser type, and usage patterns through cookies and similar technologies.

Your data is used solely to process your enquiries, fulfil orders, improve our services, and send relevant communications with your consent. We never sell your personal information to third parties. We may share data with trusted service providers (e.g., logistics partners, payment processors) who are bound by strict confidentiality agreements.

You have the right to access, correct, or delete your personal data at any time. To exercise these rights or raise a concern, please contact us at contactus@issiportal.in. We retain your data only as long as necessary to fulfil the purposes outlined in this policy.

We use industry-standard security measures including SSL encryption, firewalls, and regular security audits to protect your data. However, no method of transmission over the Internet is 100% secure. By using our website, you acknowledge and agree to this Privacy Policy.`,
  },
  {
    id: "terms",
    title: "Terms of Service",
    icon: "M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25",
    content: `These Terms of Service govern your use of the Indian Soya & Spice Industries website and the purchase of products from us. By accessing our site or placing an order, you agree to be bound by these terms.

All orders are subject to availability and acceptance. We reserve the right to refuse or cancel any order at our discretion, including instances where product quantities are insufficient, pricing errors occur, or credit verification fails. Prices are quoted in Indian Rupees (INR) and are exclusive of applicable taxes and shipping charges.

Title and risk of loss pass to you upon delivery to the carrier. Claims for damaged or missing items must be reported within 48 hours of receipt. We are not liable for delays caused by force majeure events including natural disasters, strikes, or transportation disruptions.

All content on this website — including text, images, logos, and product descriptions — is the intellectual property of Indian Soya & Spice Industries and may not be reproduced without prior written consent. You agree not to use our site for any unlawful purpose or in violation of applicable laws.

We reserve the right to update these terms at any time. Changes will be posted on this page with an updated revision date. Continued use of our site after changes constitutes acceptance of the new terms.`,
  },
  {
    id: "shipping",
    title: "Shipping Policy",
    icon: "M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H18.75m-7.5-3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z",
    content: `Indian Soya & Spice Industries offers pan-India shipping through our network of trusted logistics partners. Orders are processed within 1–2 business days after payment confirmation.

Standard delivery timelines are 3–5 business days for most pin codes, and 5–7 business days for remote or north-eastern regions. Cold-chain delivery is available in 15 major metropolitan cities — additional transit time of 1–2 days may apply.

Shipping charges are calculated at checkout based on order weight, volume, and delivery location. Orders above ₹25,000 qualify for free standard shipping. Express shipping is available at an additional cost — please contact your account manager for a quote.

We take utmost care in packaging to ensure product integrity during transit. All shipments are insured against damage and theft. In the rare event of a damaged delivery, please document the issue with photographs and notify us within 48 hours at contactus@issiportal.in for a replacement or refund.

International shipping is currently available to select markets including the UAE, USA, UK, and Singapore. Duties, taxes, and customs fees are the responsibility of the buyer. Please contact our export team at contactus@issiportal.in for international shipping quotes and lead times.`,
  },
  {
    id: "returns",
    title: "Return & Refund Policy",
    icon: "M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182",
    content: `Your satisfaction is our priority. If you receive a product that does not meet our quality standards, we will gladly assist you with a return, replacement, or refund.

To be eligible for a return, products must be reported within 7 days of delivery and must be in their original, unopened packaging. We reserve the right to inspect returned goods before processing any refund. Perishable items such as tea and spices that have been opened cannot be returned due to hygiene and safety regulations.

To initiate a return, please contact our support team at contactus@issiportal.in with your order number, product details, and reason for return. We will provide a return authorization number and shipping instructions. Return shipping costs are borne by Indian Soya & Spice Industries in cases of defective or incorrect shipments.

Refunds are processed within 7–10 business days after we receive and inspect the returned goods. The refund will be credited to your original payment method. For wholesale accounts, refunds may be issued as account credit or adjusted against future invoices at your preference.

In cases where products are damaged during transit, we require photographic evidence within 48 hours of delivery to process a full refund or replacement. This policy applies to all retail and wholesale orders unless otherwise specified in your wholesale agreement.`,
  },
  {
    id: "cancellation",
    title: "Cancellation Policy",
    icon: "M6 18L18 6M6 6l12 12",
    content: `At Indian Soya & Spice Industries, we understand that plans can change. If you need to cancel an order, please contact us as soon as possible.

Orders can be cancelled within 24 hours of placement, provided they have not yet been dispatched. To cancel an order, please reach out to our support team at contactus@issiportal.in with your order number and reason for cancellation.

If your order has already been dispatched, cancellation may not be possible. In such cases, you may initiate a return once the product is delivered, subject to our Return & Refund Policy.

For wholesale and bulk orders, cancellation terms may vary based on the agreement signed at the time of order placement. Please refer to your specific wholesale contract for detailed cancellation terms.

Refunds for cancelled orders are processed within 5–7 business days and credited to the original payment method used during checkout.`,
  },
  {
    id: "grievance",
    title: "Grievance Redressal",
    icon: "M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 01-.825-.242m9.345-8.334a2.126 2.126 0 00-.476-.095 48.64 48.64 0 00-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0011.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155",
    content: `Indian Soya & Spice Industries is committed to resolving customer concerns promptly and fairly. If you have a grievance regarding our products, services, or any aspect of your experience, we encourage you to reach out to us.

You can submit your grievance by emailing us at contactus@issiportal.in or by calling us at +91 9958666303. Please include your order details, a clear description of the issue, and any supporting documentation.

Our grievance redressal team will acknowledge your complaint within 48 hours and work towards a resolution within 15 business days. For complex issues that require additional investigation, we will keep you informed of progress at regular intervals.

If you are not satisfied with the resolution provided, you may escalate the matter to our senior management by writing to grievance@issiportal.in. Escalated complaints are reviewed within 7 business days of receipt.

We value your feedback and use it continuously to improve our products and services. Every grievance is treated with confidentiality and seriousness.`,
  },
];

export default function PoliciesPage() {
  const [activeTab, setActiveTab] = useState(sections[0].id);

  const activeSection = sections.find((s) => s.id === activeTab);

  return (
    <>
      {/* ── Hero Banner Section ── */}
      <section className="relative w-full h-[320px] sm:h-[400px] lg:h-[480px] overflow-hidden">
        <img
          src={bannerImg}
          alt="Policies"
          className="absolute left-0 top-[30px] w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0d1b4c]/85 via-[#0d1b4c]/60 to-[#1a3a6e]/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0d1b4c]/50 to-transparent" />
        <div className="relative z-10 h-full flex flex-col justify-center items-center text-center px-8 sm:px-12 lg:px-20 pt-16 lg:pt-24">
          <span className="font-poppins text-xs sm:text-sm tracking-[0.35em] uppercase font-semibold mb-4 text-[#A4C639]">
            Legal & Compliance
          </span>
          <h1 className="font-display text-white text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-5 drop-shadow-2xl">
            Our Policies
          </h1>
        </div>
      </section>

      {/* ── Policies Content Section ── */}
      <section className="relative py-16 lg:py-24" style={{ backgroundColor: "#F8F9FC" }}>
        <div className="max-w-screen-xl mx-auto px-6 lg:px-8">
          <div className="bg-white sm:rounded-3xl shadow-[0_20px_80px_rgba(13,27,76,0.08)] overflow-hidden border border-gray-100/50">
            <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr]">

              {/* ── Left Sidebar ── */}
              <div className="relative bg-[#0057A0] p-6 lg:p-8 overflow-hidden">
                {/* Decorative circles */}
                <div className="absolute -top-20 -left-20 w-40 h-40 bg-[#A4C639]/10 rounded-full blur-3xl" />
                <div className="absolute -bottom-20 -right-20 w-40 h-40 bg-[#A4C639]/10 rounded-full blur-3xl" />

                <div className="relative">
                  <div className="mb-8">
                    <h3 className="font-poppins text-white text-xl lg:text-2xl font-bold mb-1">
                      Navigate Policies
                    </h3>
                  </div>
                  <div className="flex flex-row lg:flex-col gap-3 lg:gap-2 overflow-x-auto lg:overflow-visible pb-2 lg:pb-0">
                    {sections.map((section) => (
                      <button
                        key={section.id}
                        onClick={() => setActiveTab(section.id)}
                        className={`shrink-0 text-left px-5 py-4 sm:rounded-xl font-poppins font-semibold text-sm transition-all duration-300 flex items-center gap-3 ${
                          activeTab === section.id
                            ? "bg-white text-[#0057A0] shadow-lg shadow-white/20"
                            : "text-white/60 hover:bg-white/10 hover:text-white"
                        }`}
                      >
                        <svg className="w-5 h-5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={activeTab === section.id ? 2 : 1.5}>
                          <path strokeLinecap="round" strokeLinejoin="round" d={section.icon} />
                        </svg>
                        {section.title}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* ── Right Content ── */}
              <div className="p-8 lg:p-12 min-h-[500px]">
                {/* Active policy header */}
                <div className="flex items-start gap-5 mb-8 pb-8 border-b border-gray-100">
                  <div className="w-14 h-14 sm:rounded-2xl bg-[#0057A0] flex items-center justify-center shadow-lg shadow-[#0057A0]/15 shrink-0">
                    <svg className="w-7 h-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d={activeSection.icon} />
                    </svg>
                  </div>
                  <div>
                    <h2 className="font-display text-[#1a2942] text-2xl lg:text-3xl font-bold mb-2">
                      {activeSection.title}
                    </h2>
                    <div className="flex items-center gap-2 text-xs font-poppins text-gray-400">
                      <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      Last updated: January 2026
                    </div>
                  </div>
                </div>

                {/* Content paragraphs */}
                <div className="space-y-6">
                  {activeSection.content.split("\n\n").map((para, i) => (
                    <div key={i} className="flex gap-4">
                      <div className="w-2 h-2 rounded-full bg-[#0057A0] mt-2.5 shrink-0 shadow-sm shadow-[#0057A0]/30" />
                      <p className="font-body text-[#444] text-[15px] leading-[1.85]">
                        {para}
                      </p>
                    </div>
                  ))}
                </div>

                {/* Contact CTA */}
                <div className="mt-10 p-6 sm:rounded-2xl bg-gradient-to-r from-[#0d1b4c]/5 to-[#1a3a6e]/5 border border-[#0d1b4c]/10">
                  <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                    <div className="w-10 h-10 sm:rounded-xl bg-[#0057A0] flex items-center justify-center shrink-0">
                      <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                      </svg>
                    </div>
                    <div>
                      <p className="font-poppins text-[#0057A0] text-sm font-semibold">Have questions about our policies?</p>
                      <p className="font-body text-gray-500 text-sm mt-1">WhatsApp at <span className="text-[#0057A0] font-semibold">+91 9958666303</span></p>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>
    </>
  );
}
