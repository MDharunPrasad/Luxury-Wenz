import React from 'react';

export const Contact: React.FC = () => {
  return (
    <div className="min-h-screen bg-ivory pt-20">
      <div className="container mx-auto px-6 py-20">
        <div className="text-center">
          <h1 className="font-playfair text-6xl font-bold text-jet mb-6">
            Contact
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald to-champagne"> Us</span>
          </h1>
          <p className="text-xl text-jet/70 max-w-3xl mx-auto">
            Get in touch with our luxury real estate experts. We're here to help you with all your property needs.
          </p>
        </div>
      </div>
    </div>
  );
};