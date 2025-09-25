import React from 'react';

export const Rent: React.FC = () => {
  return (
    <div className="min-h-screen bg-ivory pt-20">
      <div className="container mx-auto px-6 py-20">
        <div className="text-center">
          <h1 className="font-playfair text-6xl font-bold text-jet mb-6">
            Luxury
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald to-champagne"> Rentals</span>
          </h1>
          <p className="text-xl text-jet/70 max-w-3xl mx-auto">
            Premium rental properties coming soon. Experience luxury living with our curated collection of rental homes.
          </p>
        </div>
      </div>
    </div>
  );
};