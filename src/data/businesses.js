import fmcgImage from "../assets/wholsale-banner.png";
import equipmentsImage from "../assets/banner-1.png";
import servicesImage from "../assets/tata-banner.jpg";

export const businesses = [
  {
    id: "fmcg",
    label: "FMCG",
    name: "FMCG",
    heading: "Indian Soya & Spice FMCG",
    paragraph:
      "Our FMCG division puts everyday essentials within easy reach of every Indian home. From the first cup of tea in the morning to trusted kitchen staples and personal care products, we craft each pack with a single belief — quality is not a choice, it is a responsibility.",
    image: fmcgImage,
    knowMore: "/businesses/equipments",
  },
  {
    id: "services",
    label: "Our Services",
    name: "Our Services",
    heading: "Services that go beyond products",
    paragraph:
      "Beyond manufacturing, we offer end-to-end services that support every step of the value chain — from sourcing and custom blending to packaging, private labelling and dependable distribution. Our teams work closely with partners to deliver consistent quality, on time, every time.",
    image: servicesImage,
  },
  {
    id: "equipments",
    label: "Equipments",
    name: "Equipments",
    heading: "Equipments",
    pageHeading: "Equipment & Accessories",
    paragraph:
      "From the kitchen to the workplace, our equipments division delivers dependable, thoughtfully engineered products built to last. Every unit is crafted with precision, safety and the same uncompromising quality that defines everything we make.",
    image: equipmentsImage,
  },
];
