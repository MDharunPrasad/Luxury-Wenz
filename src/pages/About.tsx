import React from 'react';
import { Footer } from '../components/Footer';
import { Building, Star, Users, Globe2 } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <div className="min-h-screen bg-ivory pt-20">
      <div className="container mx-auto px-4 sm:px-6 py-16">
        <div className="text-center mb-12">
          <h1 className="font-playfair text-4xl sm:text-5xl lg:text-6xl font-bold text-jet mb-6">
            About <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald to-champagne">Wenzhomes</span>
          </h1>
          <p className="text-lg text-jet/70 max-w-3xl mx-auto">
            We curate, market, and sell extraordinary properties worldwide. Our team blends white-glove service with
            data-driven strategy to deliver exceptional outcomes for buyers, sellers, and investors.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="p-6 rounded-2xl bg-white/80 border border-white/20 shadow">
            <Building className="w-8 h-8 text-emerald mb-3" />
            <h3 className="text-xl font-semibold text-jet mb-2">Luxury Expertise</h3>
            <p className="text-gray-700">Specialists in premium markets with a global network and local insight.</p>
          </div>
          <div className="p-6 rounded-2xl bg-white/80 border border-white/20 shadow">
            <Star className="w-8 h-8 text-emerald mb-3" />
            <h3 className="text-xl font-semibold text-jet mb-2">White-Glove Service</h3>
            <p className="text-gray-700">Discreet, concierge-level support across the entire property journey.</p>
          </div>
          <div className="p-6 rounded-2xl bg-white/80 border border-white/20 shadow">
            <Globe2 className="w-8 h-8 text-emerald mb-3" />
            <h3 className="text-xl font-semibold text-jet mb-2">Global Reach</h3>
            <p className="text-gray-700">Access to international buyers and exclusive off-market opportunities.</p>
          </div>
        </div>

        <div className="bg-gradient-to-r from-emerald to-champagne rounded-2xl p-8 text-white text-center">
          <h2 className="text-2xl font-playfair font-bold mb-4">Meet Our Team</h2>
          <p className="opacity-90 max-w-3xl mx-auto">
            Led by seasoned advisors and marketers, the Wenzhomes team brings a modern approach to luxury real estate
            through storytelling, design, and technology.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};