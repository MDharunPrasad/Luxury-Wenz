import React from 'react';

export const Dashboard: React.FC = () => {
  return (
    <div className="min-h-screen bg-ivory pt-20">
      <div className="container mx-auto px-6 py-20">
        <div className="text-center">
          <h1 className="font-playfair text-6xl font-bold text-jet mb-6">
            Your Luxury
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald to-champagne"> Dashboard</span>
          </h1>
          <p className="text-xl text-jet/70 max-w-3xl mx-auto">
            Personalized dashboard for saved properties, searches, and investment tracking coming soon. 
            Manage your luxury real estate portfolio with ease.
          </p>
        </div>
      </div>
    </div>
  );
};