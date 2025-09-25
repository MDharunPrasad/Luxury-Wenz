import React, { useState } from 'react';
import { Search, MapPin, DollarSign, Home, Key, ArrowRight } from 'lucide-react';

export const HeroSection: React.FC = () => {
  const [searchType, setSearchType] = useState('buy');
  const [location, setLocation] = useState('');
  const [budget, setBudget] = useState('');

  const handleSearch = () => {
    console.log('Searching:', { searchType, location, budget });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Video/Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.pexels.com/photos/280222/pexels-photo-280222.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop"
          alt="Luxury Property"
          className="w-full h-full object-cover scale-110 animate-slow-zoom"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-jet/70 via-jet/50 to-jet/80" />
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 z-10">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-champagne/30 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${3 + Math.random() * 4}s`
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-20 container mx-auto px-6 text-center">
        <div className="animate-fade-in-up">
          <h1 className="font-playfair text-6xl lg:text-8xl font-bold text-white mb-6 leading-tight">
            Luxury Beyond
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-champagne via-platinum to-emerald">
              Imagination
            </span>
          </h1>
          <p className="text-xl lg:text-2xl text-platinum/90 mb-12 max-w-3xl mx-auto font-light">
            Discover extraordinary properties in the world's most prestigious locations. 
            Your dream home awaits in our curated collection of luxury real estate.
          </p>

          {/* Floating Glass Search Bar */}
          <div className="max-w-4xl mx-auto">
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 shadow-2xl hover:shadow-3xl transition-all duration-500 hover:bg-white/15 group">
              {/* Search Type Selector */}
              <div className="flex justify-center mb-8">
                <div className="bg-white/20 backdrop-blur-sm rounded-full p-1 inline-flex space-x-1">
                  {[
                    { value: 'buy', label: 'Buy', icon: Home },
                    { value: 'rent', label: 'Rent', icon: Key },
                    { value: 'sell', label: 'Sell', icon: DollarSign },
                  ].map((type) => {
                    const Icon = type.icon;
                    return (
                      <button
                        key={type.value}
                        onClick={() => setSearchType(type.value)}
                        className={`flex items-center space-x-2 px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                          searchType === type.value
                            ? 'bg-gradient-to-r from-emerald to-champagne text-white shadow-lg'
                            : 'text-white hover:bg-white/10'
                        }`}
                      >
                        <Icon className="w-4 h-4" />
                        <span>{type.label}</span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Search Fields */}
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mb-8">
                <div className="relative">
                  <MapPin className="absolute left-4 top-1/2 transform -translate-y-1/2 text-champagne w-5 h-5" />
                  <input
                    type="text"
                    placeholder="Location (City, Neighborhood)"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    className="w-full pl-12 pr-4 py-4 rounded-xl bg-white/10 border border-white/30 text-white placeholder-platinum/70 focus:outline-none focus:ring-2 focus:ring-emerald/50 focus:border-emerald/50 transition-all duration-300"
                  />
                </div>

                <div className="relative">
                  <DollarSign className="absolute left-4 top-1/2 transform -translate-y-1/2 text-champagne w-5 h-5" />
                  <select
                    value={budget}
                    onChange={(e) => setBudget(e.target.value)}
                    className="w-full pl-12 pr-4 py-4 rounded-xl bg-white/10 border border-white/30 text-white focus:outline-none focus:ring-2 focus:ring-emerald/50 focus:border-emerald/50 transition-all duration-300 appearance-none"
                  >
                    <option value="" className="text-jet">Budget Range</option>
                    <option value="500k-1m" className="text-jet">$500K - $1M</option>
                    <option value="1m-2m" className="text-jet">$1M - $2M</option>
                    <option value="2m-5m" className="text-jet">$2M - $5M</option>
                    <option value="5m+" className="text-jet">$5M+</option>
                  </select>
                </div>

                <button
                  onClick={handleSearch}
                  className="group flex items-center justify-center space-x-2 px-8 py-4 rounded-xl bg-gradient-to-r from-emerald to-champagne text-white font-semibold hover:shadow-2xl hover:scale-105 transition-all duration-300"
                >
                  <Search className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
                  <span>Search Luxury</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                </button>
              </div>

              {/* Quick Stats */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
                <div className="group cursor-pointer">
                  <div className="text-3xl font-bold text-champagne group-hover:scale-110 transition-transform duration-300">10,000+</div>
                  <div className="text-platinum/80 font-medium">Luxury Properties</div>
                </div>
                <div className="group cursor-pointer">
                  <div className="text-3xl font-bold text-champagne group-hover:scale-110 transition-transform duration-300">50+</div>
                  <div className="text-platinum/80 font-medium">Prime Locations</div>
                </div>
                <div className="group cursor-pointer">
                  <div className="text-3xl font-bold text-champagne group-hover:scale-110 transition-transform duration-300">$50B+</div>
                  <div className="text-platinum/80 font-medium">Properties Sold</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
};