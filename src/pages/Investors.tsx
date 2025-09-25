import React from 'react';

export const Investors: React.FC = () => {
  return (
    <div className="min-h-screen bg-ivory pt-20">
      <div className="container mx-auto px-6 py-20">
        <div className="text-center">
          <h1 className="font-playfair text-6xl font-bold text-jet mb-6">
            Investment
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald to-champagne"> Opportunities</span>
          </h1>
          <p className="text-xl text-jet/70 max-w-3xl mx-auto">
            Luxury real estate investment insights and opportunities coming soon. 
            Strategic investment guidance for the discerning investor.
          </p>
        </div>
      </div>
    </div>
  );
};