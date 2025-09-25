import React from 'react';
import { HeroSection } from '../components/home/HeroSection';
import { FeaturedProperties } from '../components/home/FeaturedProperties';
import { LuxuryServices } from '../components/home/LuxuryServices';
import { MarketInsights } from '../components/home/MarketInsights';
import { TestimonialsSection } from '../components/home/TestimonialsSection';

export const Home: React.FC = () => {
  return (
    <div className="overflow-hidden">
      <HeroSection />
      <FeaturedProperties />
      <LuxuryServices />
      <MarketInsights />
      <TestimonialsSection />
    </div>
  );
};