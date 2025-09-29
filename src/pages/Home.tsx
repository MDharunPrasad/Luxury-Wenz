import React from 'react';
import HeroSection from '../components/home/HeroSection';
import { FeaturedProperties } from '../components/home/FeaturedProperties';
import { LuxuryServices } from '../components/home/LuxuryServices';
// MarketInsights removed per request
import { TestimonialsSection } from '../components/home/TestimonialsSection';
import { Footer } from '../components/Footer';

export const Home: React.FC = () => {
  return (
    <div className="overflow-hidden">
      <HeroSection />
      <FeaturedProperties />
      <LuxuryServices />
      {/* MarketInsights removed */}
      <TestimonialsSection />
      <Footer />
    </div>
  );
};