import React from 'react';

export const Blog: React.FC = () => {
  return (
    <div className="min-h-screen bg-ivory pt-20">
      <div className="container mx-auto px-6 py-20">
        <div className="text-center">
          <h1 className="font-playfair text-6xl font-bold text-jet mb-6">
            Luxury Real Estate
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald to-champagne"> Insights</span>
          </h1>
          <p className="text-xl text-jet/70 max-w-3xl mx-auto">
            Market insights, lifestyle content, and luxury real estate trends coming soon. 
            Stay informed with the latest in luxury property markets.
          </p>
        </div>
      </div>
    </div>
  );
};