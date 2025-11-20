import FeaturedProductsPreview from "./components/featuredProducts/FeaturedProductsPreview";
import HeroSection from "./components/heroSection/HeroSection";
import WhyChooseUsSection from "./components/whyChooseUs/WhyChooseUsSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <FeaturedProductsPreview />
      <WhyChooseUsSection />
    </>
  );
}
