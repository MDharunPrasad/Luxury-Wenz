import React, { useState } from 'react';
import { Search, Filter, MapPin, DollarSign, Home, Bed, Bath, Square, Heart, Eye, SlidersHorizontal, Grid, List } from 'lucide-react';
import { Link } from 'react-router-dom';

const properties = [
  {
    id: 1,
    title: "Luxury Penthouse with City Views",
    location: "Bandra West, Mumbai",
    price: "₹12.5 Cr",
    image: "https://images.pexels.com/photos/1396132/pexels-photo-1396132.jpeg?auto=compress&cs=tinysrgb&w=600",
    beds: 4,
    baths: 3,
    sqft: "3,500",
    type: "Penthouse",
    features: ["City View", "Private Terrace", "Smart Home"],
    isNew: true
  },
  {
    id: 2,
    title: "Modern Villa with Private Pool",
    location: "Whitefield, Bangalore",
    price: "₹8.75 Cr",
    image: "https://images.pexels.com/photos/1029599/pexels-photo-1029599.jpeg?auto=compress&cs=tinysrgb&w=600",
    beds: 5,
    baths: 4,
    sqft: "4,200",
    type: "Villa",
    features: ["Private Pool", "Garden", "Gym"],
    isNew: false
  },
  {
    id: 3,
    title: "Contemporary Apartment",
    location: "Cyber City, Gurgaon",
    price: "₹3.2 Cr",
    image: "https://images.pexels.com/photos/439391/pexels-photo-439391.jpeg?auto=compress&cs=tinysrgb&w=600",
    beds: 3,
    baths: 2,
    sqft: "2,100",
    type: "Apartment",
    features: ["Balcony", "Modular Kitchen", "AC"],
    isNew: true
  },
  {
    id: 4,
    title: "Elegant Townhouse",
    location: "Koramangala, Bangalore",
    price: "₹6.8 Cr",
    image: "https://images.pexels.com/photos/206172/pexels-photo-206172.jpeg?auto=compress&cs=tinysrgb&w=600",
    beds: 4,
    baths: 3,
    sqft: "3,200",
    type: "Townhouse",
    features: ["Terrace", "Study Room", "Servant Quarter"],
    isNew: false
  },
  {
    id: 5,
    title: "Waterfront Luxury Apartment",
    location: "Marine Drive, Mumbai",
    price: "₹15.5 Cr",
    image: "https://images.pexels.com/photos/1115804/pexels-photo-1115804.jpeg?auto=compress&cs=tinysrgb&w=600",
    beds: 3,
    baths: 3,
    sqft: "2,800",
    type: "Apartment",
    features: ["Sea View", "Premium Finishes", "Concierge"],
    isNew: true
  },
  {
    id: 6,
    title: "Modern Family Home",
    location: "DLF Phase 2, Gurgaon",
    price: "₹9.2 Cr",
    image: "https://images.pexels.com/photos/1732414/pexels-photo-1732414.jpeg?auto=compress&cs=tinysrgb&w=600",
    beds: 4,
    baths: 4,
    sqft: "3,800",
    type: "Independent House",
    features: ["Garden", "Parking", "Solar Panels"],
    isNew: false
  }
];

export const Listings: React.FC = () => {
  const [searchFilters, setSearchFilters] = useState({
    location: '',
    priceMin: '',
    priceMax: '',
    propertyType: '',
    beds: '',
    baths: ''
  });
  
  const [showFilters, setShowFilters] = useState(false);
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

  return (
    <div className="min-h-screen bg-neutral-50">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-emerald-600 via-emerald-500 to-emerald-600 text-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h1 className="font-playfair text-4xl lg:text-5xl font-bold mb-6">
              Premium Properties
              <span className="block text-emerald-200">For You</span>
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Discover exceptional properties in prime locations across India's major cities. 
              Your perfect home awaits in our curated collection.
            </p>
          </div>

          {/* Search Bar */}
          <div className="max-w-6xl mx-auto">
            <div className="bg-white/10 backdrop-blur-xl rounded-3xl p-6 border border-white/20">
              <div className="grid grid-cols-1 lg:grid-cols-5 gap-4 mb-4">
                <div className="lg:col-span-2">
                  <div className="relative">
                    <MapPin className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white/70 w-5 h-5" />
                    <input
                      type="text"
                      placeholder="Location, City, or Area"
                      value={searchFilters.location}
                      onChange={(e) => setSearchFilters({...searchFilters, location: e.target.value})}
                      className="w-full pl-12 pr-4 py-4 rounded-2xl bg-white/10 border border-white/30 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-emerald-300/50"
                    />
                  </div>
                </div>
                
                <div>
                  <select
                    value={searchFilters.propertyType}
                    onChange={(e) => setSearchFilters({...searchFilters, propertyType: e.target.value})}
                    className="w-full px-4 py-4 rounded-2xl bg-white/10 border border-white/30 text-white focus:outline-none focus:ring-2 focus:ring-emerald-300/50"
                  >
                    <option value="" className="text-neutral-900">Property Type</option>
                    <option value="apartment" className="text-neutral-900">Apartment</option>
                    <option value="villa" className="text-neutral-900">Villa</option>
                    <option value="penthouse" className="text-neutral-900">Penthouse</option>
                    <option value="townhouse" className="text-neutral-900">Townhouse</option>
                  </select>
                </div>

                <div className="flex gap-2">
                  <input
                    type="text"
                    placeholder="Min Price"
                    value={searchFilters.priceMin}
                    onChange={(e) => setSearchFilters({...searchFilters, priceMin: e.target.value})}
                    className="flex-1 px-4 py-4 rounded-2xl bg-white/10 border border-white/30 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-emerald-300/50"
                  />
                  <input
                    type="text"
                    placeholder="Max Price"
                    value={searchFilters.priceMax}
                    onChange={(e) => setSearchFilters({...searchFilters, priceMax: e.target.value})}
                    className="flex-1 px-4 py-4 rounded-2xl bg-white/10 border border-white/30 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-emerald-300/50"
                  />
                </div>

                <button className="flex items-center justify-center space-x-2 px-6 py-4 rounded-2xl bg-gradient-to-r from-emerald-700 to-emerald-600 text-white font-semibold hover:shadow-lg transition-all duration-300">
                  <Search className="w-5 h-5" />
                  <span>Search</span>
                </button>
              </div>

              <div className="flex items-center justify-between">
                <div className="text-white/80 text-sm">
                  {properties.length} properties found
                </div>
                <button
                  onClick={() => setShowFilters(!showFilters)}
                  className="flex items-center space-x-2 text-white/80 hover:text-white transition-colors duration-300"
                >
                  <SlidersHorizontal className="w-4 h-4" />
                  <span>More Filters</span>
                </button>
              </div>

              {/* Advanced Filters */}
              {showFilters && (
                <div className="mt-6 pt-6 border-t border-white/20">
                  <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                    <select
                      value={searchFilters.beds}
                      onChange={(e) => setSearchFilters({...searchFilters, beds: e.target.value})}
                      className="px-4 py-3 rounded-xl bg-white/10 border border-white/30 text-white focus:outline-none focus:ring-2 focus:ring-emerald-300/50"
                    >
                      <option value="" className="text-neutral-900">Bedrooms</option>
                      <option value="1" className="text-neutral-900">1 BHK</option>
                      <option value="2" className="text-neutral-900">2 BHK</option>
                      <option value="3" className="text-neutral-900">3 BHK</option>
                      <option value="4" className="text-neutral-900">4+ BHK</option>
                    </select>

                    <select
                      value={searchFilters.baths}
                      onChange={(e) => setSearchFilters({...searchFilters, baths: e.target.value})}
                      className="px-4 py-3 rounded-xl bg-white/10 border border-white/30 text-white focus:outline-none focus:ring-2 focus:ring-emerald-300/50"
                    >
                      <option value="" className="text-neutral-900">Bathrooms</option>
                      <option value="1" className="text-neutral-900">1+</option>
                      <option value="2" className="text-neutral-900">2+</option>
                      <option value="3" className="text-neutral-900">3+</option>
                      <option value="4" className="text-neutral-900">4+</option>
                    </select>

                    <select className="px-4 py-3 rounded-xl bg-white/10 border border-white/30 text-white focus:outline-none focus:ring-2 focus:ring-emerald-300/50">
                      <option value="" className="text-neutral-900">Amenities</option>
                      <option value="pool" className="text-neutral-900">Swimming Pool</option>
                      <option value="gym" className="text-neutral-900">Gym</option>
                      <option value="parking" className="text-neutral-900">Parking</option>
                      <option value="security" className="text-neutral-900">Security</option>
                    </select>

                    <select className="px-4 py-3 rounded-xl bg-white/10 border border-white/30 text-white focus:outline-none focus:ring-2 focus:ring-emerald-300/50">
                      <option value="" className="text-neutral-900">Sort By</option>
                      <option value="price-high" className="text-neutral-900">Price: High to Low</option>
                      <option value="price-low" className="text-neutral-900">Price: Low to High</option>
                      <option value="newest" className="text-neutral-900">Newest Listed</option>
                      <option value="size" className="text-neutral-900">Largest First</option>
                    </select>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Properties Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          {/* View Toggle */}
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-bold text-neutral-900">Available Properties</h2>
            <div className="flex items-center space-x-2 bg-white rounded-lg p-1 shadow-sm border border-neutral-200">
              <button
                onClick={() => setViewMode('grid')}
                className={`p-2 rounded-md transition-colors duration-300 ${
                  viewMode === 'grid' ? 'bg-emerald-600 text-white' : 'text-neutral-600 hover:text-emerald-600'
                }`}
              >
                <Grid className="w-4 h-4" />
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`p-2 rounded-md transition-colors duration-300 ${
                  viewMode === 'list' ? 'bg-emerald-600 text-white' : 'text-neutral-600 hover:text-emerald-600'
                }`}
              >
                <List className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Properties Grid */}
          <div className={`grid gap-8 ${viewMode === 'grid' ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3' : 'grid-cols-1'}`}>
            {properties.map((property, index) => (
              <div
                key={property.id}
                className="group cursor-pointer animate-fade-in-up bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-neutral-100"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Property Image */}
                <div className="relative overflow-hidden">
                  <img
                    src={property.image}
                    alt={property.title}
                    className={`w-full object-cover group-hover:scale-110 transition-transform duration-700 ${
                      viewMode === 'grid' ? 'h-64' : 'h-48'
                    }`}
                  />
                  
                  {/* Badges */}
                  <div className="absolute top-4 left-4 flex flex-col space-y-2">
                    <div className="px-3 py-1 rounded-full bg-white/95 backdrop-blur-sm text-emerald-600 font-semibold text-sm shadow-lg">
                      {property.type}
                    </div>
                    {property.isNew && (
                      <div className="px-3 py-1 rounded-full bg-emerald-500 text-white font-semibold text-sm shadow-lg">
                        New
                      </div>
                    )}
                  </div>
                  
                  {/* Action Buttons */}
                  <div className="absolute top-4 right-4 flex space-x-2 opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <button className="p-3 rounded-full bg-white/95 backdrop-blur-sm hover:bg-white transition-colors duration-300 shadow-lg">
                      <Heart className="w-4 h-4 text-emerald-600" />
                    </button>
                    <button className="p-3 rounded-full bg-white/95 backdrop-blur-sm hover:bg-white transition-colors duration-300 shadow-lg">
                      <Eye className="w-4 h-4 text-emerald-600" />
                    </button>
                  </div>

                  {/* Price Tag */}
                  <div className="absolute bottom-4 left-4">
                    <div className="bg-white/95 backdrop-blur-sm rounded-2xl px-4 py-2 shadow-lg">
                      <div className="font-bold text-emerald-600 text-lg">{property.price}</div>
                    </div>
                  </div>
                </div>

                {/* Property Details */}
                <div className="p-6">
                  <div className="flex items-center text-emerald-600 text-sm mb-2">
                    <MapPin className="w-4 h-4 mr-1" />
                    {property.location}
                  </div>
                  
                  <h3 className="font-playfair text-xl font-bold text-neutral-900 mb-4 group-hover:text-emerald-600 transition-colors duration-300">
                    {property.title}
                  </h3>

                  {/* Property Stats */}
                  <div className="flex items-center justify-between text-neutral-600 mb-4 pb-4 border-b border-neutral-100">
                    <div className="flex items-center space-x-1">
                      <Bed className="w-4 h-4" />
                      <span className="text-sm font-medium">{property.beds}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Bath className="w-4 h-4" />
                      <span className="text-sm font-medium">{property.baths}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Square className="w-4 h-4" />
                      <span className="text-sm font-medium">{property.sqft} sq ft</span>
                    </div>
                  </div>

                  {/* Features */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {property.features.slice(0, 3).map((feature, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 rounded-full bg-emerald-50 text-emerald-600 text-xs font-medium"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-3">
                    <Link
                      to={`/property/${property.id}`}
                      className="flex-1 py-3 text-center rounded-2xl bg-gradient-to-r from-emerald-600 to-emerald-500 text-white font-medium hover:shadow-lg transition-all duration-300"
                    >
                      View Details
                    </Link>
                    <button className="px-6 py-3 rounded-2xl border-2 border-emerald-600 text-emerald-600 font-medium hover:bg-emerald-600 hover:text-white transition-all duration-300">
                      Contact
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Load More */}
          <div className="text-center mt-12">
            <button className="px-8 py-4 rounded-full bg-gradient-to-r from-emerald-600 to-emerald-500 text-white font-semibold hover:shadow-lg transition-all duration-300">
              Load More Properties
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};