import { Header } from '@/stories/Header';
import { HeroSection } from '@/stories/HeroSection';
import { TrustedBy } from '@/stories/TrustedBy';
import { FeaturesSection } from '@/stories/FeaturesSection';
import { ProductsSection } from '@/stories/ProductsSection';
import { ProductsIntroSection } from '@/stories/ProductsIntroSection';
import { ProductsNav } from '@/stories/ProductsNav';
import { ProductSuite } from '@/stories/ProductSuite';
import { CTASection } from '@/stories/CTASection';
import { Footer } from '@/stories/Footer';

export default function Overview() {
  return (
    <div className="min-h-screen bg-white">
      <Header activeItem="overview" />
      <HeroSection />
      <FeaturesSection />
      <ProductsSection />
      <ProductsIntroSection />
      <ProductsNav />
      <ProductSuite />
      <CTASection />
      <Footer />
    </div>
  );
}

