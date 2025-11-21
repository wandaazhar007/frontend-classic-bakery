import CtaHomeSection from "./components/ctaHome/CtaHomeSection";
import FAQSection from "./components/faq/FAQSection";
import FeaturedProductsPreview from "./components/featuredProducts/FeaturedProductsPreview";
import HeroSection from "./components/heroSection/HeroSection";
import ReviewsSection from "./components/reviews/ReviewsSection";
// import WhyChooseUsSection from "./components/whyChooseUs/WhyChooseUsSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <FeaturedProductsPreview />
      {/* <WhyChooseUsSection /> */}
      <ReviewsSection />
      <CtaHomeSection />
      <FAQSection />
    </>
  );
}
