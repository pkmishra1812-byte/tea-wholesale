import OfferingHeroBanner from "../components/shared/OfferingHeroBanner";
import UniqueTeaBlends from "../components/shared/UniqueTeaBlends";
import BrandStory from "../components/shared/BrandStory";
import BestSellerSection from "../components/shared/BestSellerSection";
import CategoryShowcase from "../components/shared/CategoryShowcase";
import OurPromise from "../components/shared/OurPromise";
import ExploreCategories from "../components/shared/ExploreCategories";
import TeaSubNav from "../components/shared/TeaSubNav";
import banner1 from "../assets/banner-1.png";
import banner2 from "../assets/banner-2.png";
import banner3 from "../assets/banner-3.png";

const bannerSlides = [
  { id: 1, image: banner1, label: "tea" },
  { id: 2, image: banner2, label: "tea" },
  { id: 3, image: banner3, label: "tea" },
];

export default function TeaPage() {
  return (
    <>
      <OfferingHeroBanner
        slides={bannerSlides}
        title="Our Tea Collection"
        subtitle="Handpicked leaves from India's finest estates — green, white, black and more, delivered with excellence."
        showText={false}
        short
      />
      <TeaSubNav />
      <UniqueTeaBlends />
      <BrandStory />
      <OurPromise />
      <BestSellerSection />
      <CategoryShowcase />

      {/* ── Explore Categories Carousel ── */}
      <ExploreCategories />
    </>
  );
}
