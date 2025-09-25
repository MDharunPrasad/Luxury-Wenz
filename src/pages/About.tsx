import React from 'react';

export const About: React.FC = () => {
  return (
    <div className="min-h-screen bg-ivory pt-20">
      <div className="container mx-auto px-6 py-20">
        <div className="text-center">
          <h1 className="font-playfair text-6xl font-bold text-jet mb-6">
            About
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald to-champagne"> Flaunt</span>
          </h1>
          <p className="text-xl text-jet/70 max-w-3xl mx-auto">
            Learn more about our luxury real estate expertise and commitment to exceptional service. 
            Discover the Flaunt difference in luxury property services.
          </p>
        </div>
      </div>
    </div>
  );
};