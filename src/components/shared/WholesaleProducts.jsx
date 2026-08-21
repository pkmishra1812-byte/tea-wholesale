import { Link } from "react-router-dom";
import teaImg from "../../assets/banner-1.png";
import spiceImg from "../../assets/banner-new-2.png";
import soyaImg from "../../assets/banner-new-3.png";
import oilImg from "../../assets/banner-new-4.png";
import grainsImg from "../../assets/banner-3.png";
import babyImg from "../../assets/kickstar-banner.png";
import beautyImg from "../../assets/bioqt-banner.png";

const products = [
  {
    title: "Tea",
    desc: "From the garden to your cup — premium green, black, and herbal teas sourced from the finest estates across India. Every leaf is handpicked, graded, and packed to preserve its natural aroma and flavour.",
    image: teaImg,
    link: "/our-offering/tea",
  },
  {
    title: "Spices",
    desc: "Our spice range spans whole, ground, and blended varieties — from the bold warmth of Assam turmeric to the floral notes of Munnar cardamom. Sourced directly from growers for unmatched freshness.",
    image: spiceImg,
    link: "/our-offering/kitchen-products/spices",
  },
  {
    title: "Soya",
    desc: "High-quality soya products rich in protein — ideal for wholesalers, food manufacturers, and the health-conscious market. Processed under strict quality controls to ensure purity and nutrition.",
    image: soyaImg,
    link: "/our-offering/kitchen-products/soya",
  },
  {
    title: "Cooking Oils",
    desc: "Pure and refined cooking oils processed under strict quality standards — consistent purity, neutral flavour, and high smoke point for bulk supply to hotels, restaurants, and packaged food producers.",
    image: oilImg,
    link: "/our-offering/kitchen-products/oil",
  },
  {
    title: "Grains",
    desc: "Premium-grade rice, pulses, and cereals sourced from trusted farms and processed to meet bulk supply standards — consistent quality, authentic origin, and dependable delivery for your business.",
    image: grainsImg,
    link: "/our-offering/kitchen-products/grains",
  },
  {
    title: "Baby Care",
    desc: "Gentle care for your little ones. Our baby care range is crafted with natural ingredients, ensuring safety and nourishment for delicate skin.",
    image: babyImg,
    link: "/our-offering/baby-care",
  },
  {
    title: "Beauty & Wellbeing",
    desc: "Care that begins with gentleness and ends with confidence — bathing bars, body care, skincare, and wellness essentials developed with dermatologist-grade care and the highest standards of safety.",
    image: beautyImg,
    link: "/our-offering/beauty-products",
  },
];

export default function WholesaleProducts() {
  return (
    <section className="bg-white py-20 lg:py-28">
      <div className="max-w-screen-xl mx-auto px-6 lg:px-16">
        {/* ── Heading ── */}
        <div className="text-center mb-14 lg:mb-16">
          <h2 className="font-display text-brand text-3xl md:text-4xl lg:text-[42px] font-bold tracking-tight">
            Our Products
          </h2>
          <p className="font-body text-[#1F3864]/55 text-[15px] md:text-base leading-[1.75] max-w-[720px] mx-auto mt-5">
            From everyday kitchen staples to premium wellness essentials, every category we supply is built on rigorous quality standards — ready for retail, wholesale, and bulk orders across India.
          </p>
        </div>

        {/* ── Product grid ── */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 lg:gap-7">
          {products.map((p) => (
            <Link
              key={p.title}
              to={p.link}
              className="group flex flex-col bg-white sm:rounded-2xl overflow-hidden border border-tea-100/80 shadow-sm hover:shadow-xl hover:shadow-[#A02020]/10 hover:-translate-y-1.5 transition-all duration-300"
            >
              <div className="relative overflow-hidden aspect-[4/3]">
                <img
                  src={p.image}
                  alt={p.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent" />
              </div>
              <div className="flex flex-col flex-1 p-5">
                <h3 className="font-display text-brand text-lg lg:text-xl font-bold tracking-tight">
                  {p.title}
                </h3>
                <p className="font-body text-[#1F3864]/55 text-sm leading-relaxed mt-2 flex-1">
                  {p.desc}
                </p>
                <span className="inline-flex items-center gap-1.5 text-brand font-body font-semibold text-sm tracking-wide mt-4 group-hover:gap-3 transition-all duration-300">
                  Know more
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
