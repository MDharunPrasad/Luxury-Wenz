import React from 'react';

export const Sell: React.FC = () => {
  return (
    <div className="min-h-screen bg-ivory pt-20">
      <div className="container mx-auto px-6 py-20">
        <div className="text-center">
          <h1 className="font-playfair text-6xl font-bold text-jet mb-6">
            Sell Your
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald to-champagne"> Luxury Property</span>
          </h1>
          <p className="text-xl text-jet/70 max-w-3xl mx-auto">
            Professional property selling services coming soon. Let us help you achieve the best value for your luxury property.
          </p>
        </div>
      </div>
    </div>
  );
};