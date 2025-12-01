import { Header } from '@/stories/Header';
import { ProductsIntroSection } from '@/stories/ProductsIntroSection';
import { ProductsNav } from '@/stories/ProductsNav';
import { ProductSuite } from '@/stories/ProductSuite';
import { CTASection } from '@/stories/CTASection';
import { Footer } from '@/stories/Footer';

export default function Products() {
  return (
    <div className="min-h-screen bg-white">
      <Header activeItem="products" />
      <ProductsIntroSection />
      <ProductsNav />
      <ProductSuite />
      <CTASection />
      <Footer />
    </div>
  );
}

