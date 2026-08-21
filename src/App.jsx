// src/App.jsx
import { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CurrencyProvider } from "./context/CurrencyContext";
import Layout from "./components/layout/Layout";

const HomePage = lazy(() => import("./pages/HomePage"));
const OurCompanyPage = lazy(() => import("./pages/OurCompanyPage"));
const BusinessPortfolioPage = lazy(() => import("./pages/BusinessPortfolioPage"));
const VisionMissionValuesPage = lazy(() => import("./pages/VisionMissionValuesPage"));
const OurVisionPage = lazy(() => import("./pages/OurVisionPage"));
const HistoryEvolutionPage = lazy(() => import("./pages/HistoryEvolutionPage"));
const SustainabilityPage = lazy(() => import("./pages/SustainabilityPage"));
const InnovationPage = lazy(() => import("./pages/InnovationPage"));
const NewsCenterPage = lazy(() => import("./pages/NewsCenterPage"));
const ISSINewsPage = lazy(() => import("./pages/ISSINewsPage"));
const EverydayUpdatesPage = lazy(() => import("./pages/EverydayUpdatesPage"));
const OurOfferingPage = lazy(() => import("./pages/OurOfferingPage"));
const TeaPage = lazy(() => import("./pages/TeaPage"));
const TeaMachineryPage = lazy(() => import("./pages/TeaMachineryPage"));
const SpicesPage = lazy(() => import("./pages/SpicesPage"));
const BabyCarePage = lazy(() => import("./pages/BabyCarePage"));
const BabyCareProductPage = lazy(() => import("./pages/BabyCareProductPage"));
const BabyCareAccessoriesPage = lazy(() => import("./pages/BabyCareAccessoriesPage"));
const KitchenProductsPage = lazy(() => import("./pages/KitchenProductsPage"));
const SoyaPage = lazy(() => import("./pages/SoyaPage"));
const OilPage = lazy(() => import("./pages/OilPage"));
const GrainsPage = lazy(() => import("./pages/GrainsPage"));
const BeautyProductsPage = lazy(() => import("./pages/BeautyProductsPage"));
const FemaleBeautyPage = lazy(() => import("./pages/FemaleBeautyPage"));
const MaleBeautyPage = lazy(() => import("./pages/MaleBeautyPage"));
const WholeSpicesPage = lazy(() => import("./pages/WholeSpicesPage"));
const GroundSpicesPage = lazy(() => import("./pages/GroundSpicesPage"));
const SpiceBlendsPage = lazy(() => import("./pages/SpiceBlendsPage"));
const BabyMassageOilPage = lazy(() => import("./pages/BabyMassageOilPage"));
const BabyPowderPage = lazy(() => import("./pages/BabyPowderPage"));
const BabyWashPage = lazy(() => import("./pages/BabyWashPage"));
const WholesalePage = lazy(() => import("./pages/WholesalePage"));
const BlogPage = lazy(() => import("./pages/BlogPage"));
const NewsPage = lazy(() => import("./pages/NewsPage"));
const CareersPage = lazy(() => import("./pages/CareersPage"));
const ContactPage = lazy(() => import("./pages/ContactPage"));
const PoliciesPage = lazy(() => import("./pages/PoliciesPage"));
const FAQPage = lazy(() => import("./pages/FAQPage"));
const NotFoundPage = lazy(() => import("./pages/NotFoundPage"));

function Loader() {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-cream">
      <div className="w-10 h-10 border-4 border-brand/20 border-t-brand rounded-full animate-spin" />
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <CurrencyProvider>
        <Suspense fallback={<Loader />}>
          <Routes>
            <Route element={<Layout />}>
              <Route path="/" element={<HomePage />} />
              <Route path="/our-company" element={<OurCompanyPage />} />
              <Route path="/businesses/:businessId" element={<BusinessPortfolioPage />} />
              <Route path="/our-company/history-evolution" element={<HistoryEvolutionPage />} />
              <Route path="/vision-mission-values" element={<VisionMissionValuesPage />} />
              <Route path="/our-vision-mission-values" element={<OurVisionPage />} />
              <Route path="/sustainability" element={<SustainabilityPage />} />
              <Route path="/innovation" element={<InnovationPage />} />
              <Route path="/media-center/news-center" element={<NewsCenterPage />} />
              <Route path="/media-center/issi-news" element={<ISSINewsPage />} />
              <Route path="/media-center/everyday-updates" element={<EverydayUpdatesPage />} />
              <Route path="/our-offering" element={<OurOfferingPage />} />
              <Route path="/our-offering/tea" element={<TeaPage />} />
              <Route path="/our-offering/tea-machinery" element={<TeaMachineryPage />} />
              <Route path="/our-offering/kitchen-products" element={<KitchenProductsPage />} />
              <Route path="/our-offering/kitchen-products/spices" element={<SpicesPage />} />
              <Route path="/our-offering/kitchen-products/soya" element={<SoyaPage />} />
              <Route path="/our-offering/kitchen-products/oil" element={<OilPage />} />
              <Route path="/our-offering/kitchen-products/grains" element={<GrainsPage />} />
              <Route path="/our-offering/baby-care" element={<BabyCarePage />} />
              <Route path="/our-offering/baby-care/product" element={<BabyCareProductPage />} />
              <Route path="/our-offering/baby-care/accessories" element={<BabyCareAccessoriesPage />} />
              <Route path="/our-offering/baby-care/product/massage-oil" element={<BabyMassageOilPage />} />
              <Route path="/our-offering/baby-care/product/baby-powder" element={<BabyPowderPage />} />
              <Route path="/our-offering/baby-care/product/baby-wash" element={<BabyWashPage />} />
              <Route path="/our-offering/beauty-products" element={<BeautyProductsPage />} />
              <Route path="/our-offering/beauty-products/female" element={<FemaleBeautyPage />} />
              <Route path="/our-offering/beauty-products/male" element={<MaleBeautyPage />} />
              <Route path="/our-offering/spices/whole-spices" element={<WholeSpicesPage />} />
              <Route path="/our-offering/spices/ground-spices" element={<GroundSpicesPage />} />
              <Route path="/our-offering/spices/spice-blends" element={<SpiceBlendsPage />} />
              <Route path="/wholesale" element={<WholesalePage />} />
              <Route path="/blog" element={<BlogPage />} />
              <Route path="/news" element={<NewsPage />} />
              <Route path="/careers" element={<CareersPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/policies" element={<PoliciesPage />} />
              <Route path="/faq" element={<FAQPage />} />
              <Route path="*" element={<NotFoundPage />} />
            </Route>
          </Routes>
        </Suspense>
      </CurrencyProvider>
    </BrowserRouter>
  );
}
