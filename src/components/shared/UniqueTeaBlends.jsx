import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useCurrency } from "../../context/CurrencyContext";
import img1 from "../../assets/banner-1.png";
import img2 from "../../assets/banner-2.png";
import img3 from "../../assets/banner-3.png";
import img4 from "../../assets/banner-new-1.png";
import img5 from "../../assets/banner-new-2.png";
import img6 from "../../assets/banner-new-3.png";
import img7 from "../../assets/banner-new-4.png";
import img8 from "../../assets/teafarming.png";

const COLLECTIONS = [
  {
    id: "primum",
    name: "Primum",
    products: [
      { name: "Nidhi CTC Tea – 1 kg Zipper", tag: "Pouches Nidhi Gold", price: "490.00", img: img1 },
      { name: "Handsome X Cardamom Chai – 1 kg", tag: "Pouches Cardamom", price: "520.00", img: img4 },
      { name: "Nidhi Masala Chai – 1 kg", tag: "Pouches Masala", price: "540.00", img: img5 },
      { name: "Next Level Assam Black Tea – 1 kg", tag: "Pouches Assam", price: "480.00", img: img2 },
      { name: "Golden Leaf Darjeeling – 500 g", tag: "Pouches Darjeeling", price: "650.00", img: img8 },
      { name: "Nidhi CTC Tea – 500 g Zipper", tag: "Pouches Nidhi Gold", price: "260.00", img: img3 },
    ],
  },
  {
    id: "eliche",
    name: "Eliche",
    products: [
      { name: "Nidhi Premium Black Tea – 500 g", tag: "Pouches Black", price: "360.00", img: img3 },
      { name: "Handsome X Ginger Chai – 1 kg", tag: "Pouches Ginger", price: "510.00", img: img4 },
      { name: "Next Level Green Tea – 250 g", tag: "Pouches Green", price: "285.00", img: img2 },
      { name: "Nidhi Oolong Tea – 200 g", tag: "Pouches Oolong", price: "430.00", img: img6 },
      { name: "Golden Leaf Golden Tips – 100 g", tag: "Pouches Premium", price: "720.00", img: img7 },
      { name: "Next Level Jasmine Green Tea – 250 g", tag: "Pouches Green", price: "340.00", img: img5 },
    ],
  },
  {
    id: "tappri-special",
    name: "Tappri Special",
    products: [
      { name: "Nidhi Earl Grey – 250 g", tag: "Pouches Earl Grey", price: "380.00", img: img2 },
      { name: "Next Level White Tea – 100 g", tag: "Pouches White", price: "410.00", img: img6 },
      { name: "Nidhi Herbal Tea – 200 g", tag: "Pouches Herbal", price: "320.00", img: img7 },
    ],
  },
];

const leafPattern = `url("data:image/svg+xml,%3Csvg width='220' height='220' viewBox='0 0 220 220' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' stroke='%23C8A24B' stroke-opacity='0.09' stroke-width='2'%3E%3Cpath d='M60 160 Q100 105 140 160 Q100 172 60 160Z'/%3E%3Cpath d='M60 160 Q100 105 140 160 Q100 172 60 160Z' transform='translate(0 50)'/%3E%3Cpath d='M110 30 Q140 60 110 92 Q80 60 110 30Z'/%3E%3Cpath d='M150 120 Q172 145 150 168 Q128 145 150 120Z'/%3E%3C/g%3E%3C/svg%3E")`;

function ProductCard({ product, index, revealed }) {
  const { formatPrice } = useCurrency();
  return (
    <Link
      to="/our-offering/tea"
      className={`group opacity-0 translate-y-8 transition-all duration-700 ease-out hover:-translate-y-1 ${
        revealed ? "opacity-100 translate-y-0" : ""
      }`}
      style={{ transitionDelay: revealed ? `${index * 90}ms` : "0ms" }}
    >
      <div className="relative aspect-square sm:rounded-xl overflow-hidden bg-[#EAF0DE]">
        <svg
          className="absolute inset-0 w-full h-full text-[#A8Bf7E] opacity-40"
          viewBox="0 0 200 200"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path d="M60 150 Q100 95 140 150 Q100 162 60 150Z" />
          <path d="M100 40 Q130 70 100 100 Q70 70 100 40Z" />
          <path d="M70 80 Q60 60 72 48" />
          <path d="M130 70 Q140 55 133 42" />
        </svg>
        <img
          src={product.img}
          alt={product.name}
          className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-110"
        />
      </div>
      <div className="pt-4">
        <h3 className="font-display text-charcoal text-base lg:text-lg font-bold leading-snug transition-colors duration-300 group-hover:text-brand">
          {product.name}
        </h3>
        <p className="font-body text-sm text-gray-400 mt-1">{product.tag}</p>
        <p className="font-body text-base font-bold text-[#A03028] mt-2">
          {formatPrice(product.price)}
        </p>
      </div>
    </Link>
  );
}

export default function UniqueTeaBlends() {
  const [activeId, setActiveId] = useState(COLLECTIONS[0].id);
  const [revealed, setRevealed] = useState(false);

  const active = COLLECTIONS.find((c) => c.id === activeId) || COLLECTIONS[0];

  useEffect(() => {
    setRevealed(false);
    const t = setTimeout(() => setRevealed(true), 40);
    return () => clearTimeout(t);
  }, [activeId]);

  return (
    <section
      className="py-16 lg:py-24"
      style={{ backgroundColor: "#FDF6EC", backgroundImage: leafPattern }}
    >
      <div className="max-w-screen-xl mx-auto px-6 lg:px-8">
        <h2 className="font-display text-black text-3xl lg:text-4xl font-bold leading-tight text-center mb-10 lg:mb-12">
          Our Unique Tea Blends
        </h2>

        {/* Collection tabs */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-12">
          {COLLECTIONS.map((c) => (
            <button
              key={c.id}
              onClick={() => setActiveId(c.id)}
              className={`px-6 py-2.5 rounded-full font-body text-sm lg:text-base font-semibold tracking-wide border transition-all duration-300 ${
                c.id === activeId
                  ? "bg-brand text-white border-brand shadow-lg"
                  : "bg-white text-charcoal border-charcoal/20 hover:border-brand hover:text-brand"
              }`}
            >
              {c.name}
            </button>
          ))}
        </div>

        <div key={active.id} className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-5 lg:gap-6">
          {active.products.map((product, idx) => (
            <ProductCard key={product.name} product={product} index={idx} revealed={revealed} />
          ))}
        </div>
      </div>
    </section>
  );
}
