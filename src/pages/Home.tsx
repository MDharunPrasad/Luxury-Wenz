import React from 'react';
import { HeroSection } from '../components/home/HeroSection';
import { FeaturedProperties } from '../components/home/FeaturedProperties';
import { TestimonialsSection } from '../components/home/TestimonialsSection';

export const Home: React.FC = () => {
  return (
    <div className="overflow-hidden">
      <HeroSection />
      <FeaturedProperties />
      <TestimonialsSection />
    </div>
  );
};