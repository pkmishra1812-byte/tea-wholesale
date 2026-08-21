import { Link } from "react-router-dom";
import img1 from "../../assets/banner-1.png";
import img2 from "../../assets/banner-2.png";
import img3 from "../../assets/banner-3.png";
import img4 from "../../assets/banner-new-1.png";
import img5 from "../../assets/banner-new-2.png";
import img6 from "../../assets/banner-new-3.png";
import img7 from "../../assets/banner-new-4.png";
import img8 from "../../assets/teafarming.png";

const CATEGORIES = [
  { name: "Black Tea", img: img1 },
  { name: "Green Tea", img: img2 },
  { name: "White Tea", img: img3 },
  { name: "Oolong Tea", img: img4 },
  { name: "Masala Chai", img: img5 },
  { name: "Speciality Tea", img: img6 },
  { name: "Flavoured Tea", img: img7 },
  { name: "Artisanal Teas", img: img8 },
];

const leafPattern = `url("data:image/svg+xml,%3Csvg width='220' height='220' viewBox='0 0 220 220' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' stroke='%23C8A24B' stroke-opacity='0.09' stroke-width='2'%3E%3Cpath d='M60 160 Q100 105 140 160 Q100 172 60 160Z'/%3E%3Cpath d='M60 160 Q100 105 140 160 Q100 172 60 160Z' transform='translate(0 50)'/%3E%3Cpath d='M110 30 Q140 60 110 92 Q80 60 110 30Z'/%3E%3Cpath d='M150 120 Q172 145 150 168 Q128 145 150 120Z'/%3E%3C/g%3E%3C/svg%3E")`;

function CategoryShowcase() {
  return (
    <section
      className="pt-10 lg:pt-14 pb-20 lg:pb-28"
      style={{ backgroundColor: "#FDF6EC", backgroundImage: leafPattern }}
    >
      <div className="max-w-screen-xl mx-auto px-6 lg:px-8">
        <h2 className="font-display text-black text-3xl lg:text-4xl font-bold text-center leading-tight mb-10 lg:mb-12">
          Explore The Diversity
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 lg:gap-3.5">
          {CATEGORIES.map((cat) => (
            <Link
              key={cat.name}
              to="/our-offering/tea"
              className="group relative aspect-[4/5] overflow-hidden block"
            >
              <img
                src={cat.img}
                alt={cat.name}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
              />
              <span className="absolute inset-0 bg-black/10 transition-colors duration-300 group-hover:bg-black/25" />
              <span className="absolute inset-0 flex items-center justify-center">
                <span className="bg-white/95 text-charcoal font-display uppercase tracking-[0.15em] text-sm lg:text-base px-6 py-2.5 transition-transform duration-300 group-hover:scale-105">
                  {cat.name}
                </span>
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

export default CategoryShowcase;
