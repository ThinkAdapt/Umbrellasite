"use client";

import { useState } from 'react';
import { Header } from '@/stories/Header';
import { ProductsIntroSection } from '@/stories/ProductsIntroSection';
import { ProductsNav } from '@/stories/ProductsNav';
import { ProductSuite } from '@/stories/ProductSuite';
import { CTASection } from '@/stories/CTASection';
import { Footer } from '@/stories/Footer';
import { ContactModal } from '@/stories/ContactModal';

export default function Products() {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  const contactModalContent = {
    heading: "Get in Touch",
    description: "We'd love to hear from you. Fill out the form below and we'll get back to you as soon as possible.",
    points: [
      "Customized demo for your team",
      "Quick response within 24 hours"
    ],
    submitLabel: "Get Started"
  };

  return (
    <div className="min-h-screen bg-white">
      <Header activeItem="products" onContactUsClick={() => setIsContactModalOpen(true)} />
      <ProductsIntroSection />
      <ProductsNav />
      <ProductSuite />
      <CTASection onRequestDemoClick={() => setIsContactModalOpen(true)} />
      <Footer />
      <ContactModal
        open={isContactModalOpen}
        onClose={() => setIsContactModalOpen(false)}
        content={contactModalContent}
      />
    </div>
  );
}

