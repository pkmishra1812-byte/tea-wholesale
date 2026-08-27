import BabyCareSubNav from "../components/shared/BabyCareSubNav";
import BabyCareNavBar from "../components/shared/BabyCareNavBar";
import BabyWashPromoBanner from "../components/shared/BabyWashPromoBanner";
import BabyOilPromoSection from "../components/shared/ProductPromoSection";
import productBanner from "../assets/banner-new-4.png";

export default function BabyCareProductPage() {
  return (
    <div className="bg-white">
      <BabyCareSubNav />
      <div className="w-full">
        <img
          src={productBanner}
          alt="Baby Care Product"
          className="w-full h-auto object-cover max-h-[400px] lg:max-h-[500px]"
        />
      </div>
      <BabyCareNavBar />
      <BabyWashPromoBanner />
      <BabyOilPromoSection />
    </div>
  );
}
