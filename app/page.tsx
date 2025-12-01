import { Header } from '@/stories/Header';
import { HeroSection } from '@/stories/HeroSection';
import { TrustedBy } from '@/stories/TrustedBy';
import { FeaturesSection } from '@/stories/FeaturesSection';
import { ProductsSection } from '@/stories/ProductsSection';

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header activeItem="products" />
      <HeroSection />
      <TrustedBy />
      <FeaturesSection />
      <ProductsSection />
    </div>
  );
}
