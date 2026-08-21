// src/pages/FAQPage.jsx
import { useState } from "react";
import PageHero from "../components/shared/PageHero";

const faqs = [
  {
    q: "How do I place a wholesale order?",
    a: "You can place a wholesale order by contacting our sales team via the Contact Us form, calling us directly, or emailing your account manager. Once your account is set up, you'll also have access to our B2B ordering portal for real-time inventory and easy reordering.",
  },
  {
    q: "What is the minimum order quantity (MOQ)?",
    a: "Our MOQ varies by product category. For tea, it starts at 25 kg per SKU. For spices, the MOQ is 10 kg per SKU. Baby care products have a minimum of 50 units per SKU. We offer flexibility for trial orders and sample packs — just ask your account manager.",
  },
  {
    q: "Do you offer samples before I commit to a bulk order?",
    a: "Yes, we provide sample packs for all our products at a nominal cost. The sample fee is fully refundable or adjustable against your first bulk order. Sample requests are typically dispatched within 2–3 business days.",
  },
  {
    q: "What are your payment terms?",
    a: "We accept bank transfers, UPI, and cheques. For first-time wholesale buyers, 100% advance payment is required. Repeat customers with a established payment history may qualify for credit terms (typically 15–30 days) subject to credit assessment.",
  },
  {
    q: "How long does delivery take?",
    a: "Standard pan-India delivery takes 3–5 business days from dispatch. Remote and north-eastern regions may take 5–7 business days. Cold-chain deliveries to 15 metro cities may add 1–2 days. Express shipping is available on request.",
  },
  {
    q: "What is your return policy for wholesale orders?",
    a: "Defective or incorrect shipments are replaced or refunded within 7 business days of our quality check. Claims must be reported within 48 hours of delivery with supporting photographs. Opened or used products cannot be returned due to hygiene regulations.",
  },
  {
    q: "Are your products certified?",
    a: "Yes. We are FSSAI licensed, ISO 22000:2018 certified, and APEDA registered. Select tea grades carry GI tags (Darjeeling & Assam Orthodox). Our products undergo regular third-party lab testing for pesticide residue, heavy metals, and microbial contamination.",
  },
  {
    q: "Do you offer private labelling or custom packaging?",
    a: "Absolutely. We offer private labelling and custom packaging solutions for B2B partners with minimum volume commitments. Our team will work with you to develop custom blends, pack sizes, and branding that aligns with your market positioning.",
  },
  {
    q: "Can I export your products internationally?",
    a: "Yes, we export to select markets including the UAE, USA, UK, and Singapore. We handle all export documentation, including phytosanitary certificates and country-specific compliance. Contact our exports team at exports@goldenleaftea.com for a quote.",
  },
  {
    q: "How can I track my order?",
    a: "Once your order is dispatched, you'll receive a tracking number via email and SMS. You can also track your shipment in real time through our B2B portal. For any delivery concerns, your account manager is available 6 AM to 10 PM daily.",
  },
];

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (i) => setOpenIndex(openIndex === i ? null : i);

  return (
    <>
      <PageHero
        title="FAQ"
        subtitle=""
        breadcrumb="Home / FAQ"
      />

      <section className="bg-cream py-20 lg:py-28">
        <div className="max-w-screen-xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="font-body text-xs tracking-widest uppercase text-tea-600 mb-3">
              Got Questions?
            </p>
            <h2 className="font-display text-tea-800 text-3xl lg:text-4xl font-bold">
              Frequently Asked Questions
            </h2>
            <p className="font-body text-charcoal/55 text-base mt-4 max-w-xl mx-auto">
              Everything you need to know about ordering, shipping, wholesale partnerships, and
              more. Can't find what you're looking for? Reach out to our team.
            </p>
          </div>

          <div className="max-w-2xl mx-auto space-y-3">
            {faqs.map((faq, i) => (
              <div
                key={i}
                className="bg-white border border-tea-100 sm:rounded-xl overflow-hidden transition-shadow duration-300 hover:shadow-sm"
              >
                <button
                  onClick={() => toggle(i)}
                  className="w-full flex items-center justify-between gap-4 text-left px-6 py-5"
                >
                  <span className="font-display text-tea-800 text-base font-semibold leading-snug pr-4">
                    {faq.q}
                  </span>
                  <span
                    className={`shrink-0 text-tea-600 text-xl transition-transform duration-300 ${
                      openIndex === i ? "rotate-45" : ""
                    }`}
                  >
                    +
                  </span>
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    openIndex === i ? "max-h-80 opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  <p className="font-body text-charcoal/60 text-sm leading-relaxed px-6 pb-5">
                    {faq.a}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
