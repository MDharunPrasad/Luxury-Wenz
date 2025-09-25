import React, { useState } from 'react';
import { Search, MapPin, DollarSign, Home, Key, ArrowRight, Filter, Bed, Bath, Square } from 'lucide-react';

export const HeroSection: React.FC = () => {
  const [searchType, setSearchType] = useState('buy');
  const [location, setLocation] = useState('');
  const [priceRange, setPriceRange] = useState('');
  const [propertyType, setPropertyType] = useState('');
  const [bedrooms, setBedrooms] = useState('');
  const [showAdvanced, setShowAdvanced] = useState(false);

  const handleSearch = () => {
    console.log('Searching:', { searchType, location, priceRange, propertyType, bedrooms });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.pexels.com/photos/1396132/pexels-photo-1396132.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop"
          alt="Luxury Property"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-neutral-900/60 via-neutral-900/40 to-neutral-900/70" />
      </div>

      {/* Content */}
      <div className="relative z-20 container mx-auto px-6 text-center">
        <div className="animate-fade-in-up">
          <h1 className="font-playfair text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            Discover Your
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-emerald-300 to-emerald-500">
              Dream Property
            </span>
          </h1>
          <p className="text-xl lg:text-2xl text-neutral-200 mb-12 max-w-3xl mx-auto font-light">
            Explore premium properties in prime locations. Find your perfect home 
            with our curated collection of luxury real estate.
          </p>

          {/* Enhanced Search Bar */}
          <div className="max-w-5xl mx-auto">
            <div className="bg-white/10 backdrop-blur-xl rounded-3xl p-8 border border-white/20 shadow-2xl">
              {/* Search Type Selector */}
              <div className="flex justify-center mb-8">
                <div className="bg-white/20 backdrop-blur-sm rounded-full p-1 inline-flex space-x-1">
                  {[
                    { value: 'buy', label: 'Buy', icon: Home },
                    { value: 'rent', label: 'Rent', icon: Key },
                  ].map((type) => {
                    const Icon = type.icon;
                    return (
                      <button
                        key={type.value}
                        onClick={() => setSearchType(type.value)}
                        className={`flex items-center space-x-2 px-8 py-4 rounded-full font-semibold transition-all duration-300 ${
                          searchType === type.value
                            ? 'bg-gradient-to-r from-emerald-500 to-emerald-600 text-white shadow-lg'
                            : 'text-white hover:bg-white/10'
                        }`}
                      >
                        <Icon className="w-5 h-5" />
                        <span>{type.label}</span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Main Search Fields */}
              <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 mb-6">
                <div className="lg:col-span-2 relative">
                  <MapPin className="absolute left-4 top-1/2 transform -translate-y-1/2 text-emerald-400 w-5 h-5" />
                  <input
                    type="text"
                    placeholder="Enter location, city, or area"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    className="w-full pl-12 pr-4 py-4 rounded-2xl bg-white/10 border border-white/30 text-white placeholder-neutral-300 focus:outline-none focus:ring-2 focus:ring-emerald-400/50 focus:border-emerald-400/50 transition-all duration-300"
                  />
                </div>

                <div className="relative">
                  <DollarSign className="absolute left-4 top-1/2 transform -translate-y-1/2 text-emerald-400 w-5 h-5" />
                  <select
                    value={priceRange}
                    onChange={(e) => setPriceRange(e.target.value)}
                    className="w-full pl-12 pr-4 py-4 rounded-2xl bg-white/10 border border-white/30 text-white focus:outline-none focus:ring-2 focus:ring-emerald-400/50 appearance-none"
                  >
                    <option value="" className="text-neutral-900">Price Range</option>
                    <option value="0-500k" className="text-neutral-900">Under ₹50L</option>
                    <option value="500k-1m" className="text-neutral-900">₹50L - ₹1Cr</option>
                    <option value="1m-2m" className="text-neutral-900">₹1Cr - ₹2Cr</option>
                    <option value="2m-5m" className="text-neutral-900">₹2Cr - ₹5Cr</option>
                    <option value="5m+" className="text-neutral-900">₹5Cr+</option>
                  </select>
                </div>

                <button
                  onClick={handleSearch}
                  className="group flex items-center justify-center space-x-3 px-8 py-4 rounded-2xl bg-gradient-to-r from-emerald-500 to-emerald-600 text-white font-semibold hover:shadow-2xl hover:scale-105 transition-all duration-300"
                >
                  <Search className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
                  <span>Search</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                </button>
              </div>

              {/* Advanced Filters Toggle */}
              <div className="flex items-center justify-between mb-4">
                <button
                  onClick={() => setShowAdvanced(!showAdvanced)}
                  className="flex items-center space-x-2 text-neutral-300 hover:text-white transition-colors duration-300"
                >
                  <Filter className="w-4 h-4" />
                  <span className="text-sm font-medium">Advanced Filters</span>
                </button>
                <div className="text-neutral-400 text-sm">
                  1000+ Premium Properties Available
                </div>
              </div>

              {/* Advanced Filters */}
              {showAdvanced && (
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-6 border-t border-white/20 animate-fade-in-up">
                  <div className="relative">
                    <Home className="absolute left-4 top-1/2 transform -translate-y-1/2 text-emerald-400 w-4 h-4" />
                    <select
                      value={propertyType}
                      onChange={(e) => setPropertyType(e.target.value)}
                      className="w-full pl-12 pr-4 py-3 rounded-xl bg-white/10 border border-white/30 text-white focus:outline-none focus:ring-2 focus:ring-emerald-400/50 appearance-none"
                    >
                      <option value="" className="text-neutral-900">Property Type</option>
                      <option value="apartment" className="text-neutral-900">Apartment</option>
                      <option value="villa" className="text-neutral-900">Villa</option>
                      <option value="penthouse" className="text-neutral-900">Penthouse</option>
                      <option value="townhouse" className="text-neutral-900">Townhouse</option>
                    </select>
                  </div>

                  <div className="relative">
                    <Bed className="absolute left-4 top-1/2 transform -translate-y-1/2 text-emerald-400 w-4 h-4" />
                    <select
                      value={bedrooms}
                      onChange={(e) => setBedrooms(e.target.value)}
                      className="w-full pl-12 pr-4 py-3 rounded-xl bg-white/10 border border-white/30 text-white focus:outline-none focus:ring-2 focus:ring-emerald-400/50 appearance-none"
                    >
                      <option value="" className="text-neutral-900">Bedrooms</option>
                      <option value="1" className="text-neutral-900">1 BHK</option>
                      <option value="2" className="text-neutral-900">2 BHK</option>
                      <option value="3" className="text-neutral-900">3 BHK</option>
                      <option value="4" className="text-neutral-900">4+ BHK</option>
                    </select>
                  </div>

                  <div className="relative">
                    <Square className="absolute left-4 top-1/2 transform -translate-y-1/2 text-emerald-400 w-4 h-4" />
                    <select className="w-full pl-12 pr-4 py-3 rounded-xl bg-white/10 border border-white/30 text-white focus:outline-none focus:ring-2 focus:ring-emerald-400/50 appearance-none">
                      <option value="" className="text-neutral-900">Area Range</option>
                      <option value="500-1000" className="text-neutral-900">500-1000 sq ft</option>
                      <option value="1000-2000" className="text-neutral-900">1000-2000 sq ft</option>
                      <option value="2000-3000" className="text-neutral-900">2000-3000 sq ft</option>
                      <option value="3000+" className="text-neutral-900">3000+ sq ft</option>
                    </select>
                  </div>
                </div>
              )}

              {/* Quick Stats */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center mt-8 pt-8 border-t border-white/20">
                <div className="group cursor-pointer">
                  <div className="text-3xl font-bold text-emerald-400 group-hover:scale-110 transition-transform duration-300">1000+</div>
                  <div className="text-neutral-300 font-medium">Premium Properties</div>
                </div>
                <div className="group cursor-pointer">
                  <div className="text-3xl font-bold text-emerald-400 group-hover:scale-110 transition-transform duration-300">25+</div>
                  <div className="text-neutral-300 font-medium">Prime Locations</div>
                </div>
                <div className="group cursor-pointer">
                  <div className="text-3xl font-bold text-emerald-400 group-hover:scale-110 transition-transform duration-300">500+</div>
                  <div className="text-neutral-300 font-medium">Happy Clients</div>
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