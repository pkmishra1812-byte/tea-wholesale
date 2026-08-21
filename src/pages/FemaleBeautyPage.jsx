import PageHero from "../components/shared/PageHero";
import bannerImg from "../assets/banner-new-2.png";
import img1 from "../assets/banner-1.png";
import img2 from "../assets/banner-2.png";
import img3 from "../assets/banner-3.png";
import img4 from "../assets/banner-new-1.png";
import img5 from "../assets/banner-new-2.png";
import img6 from "../assets/banner-new-3.png";
import img7 from "../assets/banner-new-4.png";
import img8 from "../assets/teafarming.png";

const products = [
  { name: "Face Wash", desc: "Gentle daily cleanser that removes impurities while keeping skin soft and hydrated.", img: img1 },
  { name: "Face Cream", desc: "Nourishing moisturiser enriched with vitamins for radiant and smooth skin.", img: img2 },
  { name: "Sunscreen", desc: "Broad-spectrum SPF 50 protection that shields skin from harmful UV rays.", img: img3 },
  { name: "Body Lotion", desc: "Deeply hydrating body lotion with shea butter for silky, nourished skin.", img: img4 },
  { name: "Soap Bar", desc: "Handcrafted soap with natural oils — gentle cleansing with a lasting fragrance.", img: img5 },
  { name: "Shampoo", desc: "Sulphate-free shampoo infused with botanical extracts for healthy, shiny hair.", img: img6 },
  { name: "Lip Balm", desc: "Moisturising lip balm with natural waxes and vitamin E for soft lips.", img: img7 },
  { name: "Toner", desc: "Alcohol-free toner that balances pH levels and refines pores for a fresh complexion.", img: img8 },
  { name: "Night Cream", desc: "Rich overnight repair cream with retinol and peptides for rejuvenated morning skin.", img: img1 },
  { name: "Serum", desc: "Lightweight vitamin C serum that brightens skin tone and reduces dark spots.", img: img2 },
  { name: "Scrub", desc: "Gentle exfoliating scrub with walnut shell particles for smooth, renewed skin.", img: img3 },
  { name: "Face Mask", desc: "Kaolin clay face mask that deeply cleanses pores and absorbs excess oil.", img: img4 },
  { name: "Eye Cream", desc: "Hydrating under-eye cream that reduces dark circles and fine lines.", img: img5 },
  { name: "Body Wash", desc: "Moisturising body wash with coconut oil and aloe vera for soft, refreshed skin.", img: img6 },
  { name: "Conditioner", desc: "Nourishing conditioner with argan oil that detangles and adds shine to hair.", img: img7 },
  { name: "Hand Cream", desc: "Intensive hand cream with cocoa butter for soft, crack-free hands.", img: img8 },
];

const leafPattern = `url("data:image/svg+xml,%3Csvg width='220' height='220' viewBox='0 0 220 220' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' stroke='%23C8A24B' stroke-opacity='0.09' stroke-width='2'%3E%3Cpath d='M60 160 Q100 105 140 160 Q100 172 60 160Z'/%3E%3Cpath d='M60 160 Q100 105 140 160 Q100 172 60 160Z' transform='translate(0 50)'/%3E%3Cpath d='M110 30 Q140 60 110 92 Q80 60 110 30Z'/%3E%3Cpath d='M150 120 Q172 145 150 168 Q128 145 150 120Z'/%3E%3C/g%3E%3C/svg%3E")`;

export default function FemaleBeautyPage() {
  return (
    <>
      {/* Banner */}
      <div className="w-full relative">
        <img
          src={bannerImg}
          alt="Beauty Products — Female"
          className="w-full h-auto object-cover max-h-[400px] lg:max-h-[500px]"
        />
        <div className="absolute inset-0 bg-black/30" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
          <p className="font-body text-white/70 text-xs tracking-widest uppercase mb-3">
            Home / Our Offering / Beauty Products / Female
          </p>
          <h1 className="font-display text-white text-3xl sm:text-4xl lg:text-5xl font-bold">
            Beauty Products — Female
          </h1>
          <p className="font-body text-white/70 text-sm mt-3">
            Indian Soya &amp; Spice Industries
          </p>
        </div>
      </div>

      {/* Explore The Diversity style section */}
      <section
        className="py-16 lg:py-20"
        style={{ backgroundColor: "#FDF6EC", backgroundImage: leafPattern }}
      >
        <div className="max-w-screen-xl mx-auto px-6 lg:px-8">
          <h2 className="font-display text-black text-3xl lg:text-4xl font-bold text-center leading-tight mb-6">
            Explore The Diversity
          </h2>
          <p className="font-body text-charcoal/60 text-base max-w-2xl mb-10">
            Our women's beauty range combines gentle formulations with effective results. Every product is crafted to nurture and enhance your natural glow.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 lg:gap-3.5">
            {products.map((product) => (
              <div
                key={product.name}
                className="group relative aspect-[4/5] overflow-hidden"
              >
                <img
                  src={product.img}
                  alt={product.name}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                />
                <span className="absolute inset-0 bg-black/10 transition-colors duration-300 group-hover:bg-black/25" />
                <span className="absolute inset-0 flex items-center justify-center">
                  <span className="bg-white/95 text-charcoal font-display uppercase tracking-[0.15em] text-sm lg:text-base px-6 py-2.5 transition-transform duration-300 group-hover:scale-105">
                    {product.name}
                  </span>
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
