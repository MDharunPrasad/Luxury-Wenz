import React, { useState } from 'react';
import { Search, Filter, MapPin, DollarSign, Home, Bed, Bath, Square, Heart, Eye, SlidersHorizontal } from 'lucide-react';

const properties = [
  {
    id: 1,
    title: "Penthouse Paradise",
    location: "Manhattan, New York",
    price: "$12,500,000",
    image: "https://images.pexels.com/photos/1396132/pexels-photo-1396132.jpeg?auto=compress&cs=tinysrgb&w=600",
    beds: 4,
    baths: 3,
    sqft: "3,500",
    type: "Penthouse",
    features: ["City View", "Private Terrace", "Smart Home"]
  },
  {
    id: 2,
    title: "Coastal Villa Estate",
    location: "Malibu, California",
    price: "$8,750,000",
    image: "https://images.pexels.com/photos/1029599/pexels-photo-1029599.jpeg?auto=compress&cs=tinysrgb&w=600",
    beds: 6,
    baths: 5,
    sqft: "5,200",
    type: "Villa",
    features: ["Ocean View", "Private Beach", "Wine Cellar"]
  },
  {
    id: 3,
    title: "Modern Sky Residence",
    location: "Dubai Marina, UAE",
    price: "$3,200,000",
    image: "https://images.pexels.com/photos/439391/pexels-photo-439391.jpeg?auto=compress&cs=tinysrgb&w=600",
    beds: 3,
    baths: 2,
    sqft: "2,800",
    type: "Apartment",
    features: ["Marina View", "Pool Access", "Concierge"]
  },
  // Add more properties...
];

export const Buy: React.FC = () => {
  const [searchFilters, setSearchFilters] = useState({
    location: '',
    priceMin: '',
    priceMax: '',
    propertyType: '',
    beds: '',
    baths: ''
  });
  
  const [showFilters, setShowFilters] = useState(false);

  return (
    <div className="min-h-screen bg-ivory">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-emerald via-emerald/90 to-champagne text-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h1 className="font-playfair text-5xl lg:text-6xl font-bold mb-6">
              Luxury Properties
              <span className="block text-champagne">For Sale</span>
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Discover exceptional properties in the world's most prestigious locations. 
              Your perfect luxury home awaits.
            </p>
          </div>

          {/* Search Bar */}
          <div className="max-w-6xl mx-auto">
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
              <div className="grid grid-cols-1 lg:grid-cols-5 gap-4 mb-4">
                <div className="lg:col-span-2">
                  <div className="relative">
                    <MapPin className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white/70 w-5 h-5" />
                    <input
                      type="text"
                      placeholder="Location, City, or Neighborhood"
                      value={searchFilters.location}
                      onChange={(e) => setSearchFilters({...searchFilters, location: e.target.value})}
                      className="w-full pl-12 pr-4 py-4 rounded-xl bg-white/10 border border-white/30 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-champagne/50"
                    />
                  </div>
                </div>
                
                <div>
                  <select
                    value={searchFilters.propertyType}
                    onChange={(e) => setSearchFilters({...searchFilters, propertyType: e.target.value})}
                    className="w-full px-4 py-4 rounded-xl bg-white/10 border border-white/30 text-white focus:outline-none focus:ring-2 focus:ring-champagne/50"
                  >
                    <option value="" className="text-jet">Property Type</option>
                    <option value="penthouse" className="text-jet">Penthouse</option>
                    <option value="villa" className="text-jet">Villa</option>
                    <option value="apartment" className="text-jet">Apartment</option>
                    <option value="mansion" className="text-jet">Mansion</option>
                  </select>
                </div>

                <div className="flex gap-2">
                  <input
                    type="text"
                    placeholder="Min Price"
                    value={searchFilters.priceMin}
                    onChange={(e) => setSearchFilters({...searchFilters, priceMin: e.target.value})}
                    className="flex-1 px-4 py-4 rounded-xl bg-white/10 border border-white/30 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-champagne/50"
                  />
                  <input
                    type="text"
                    placeholder="Max Price"
                    value={searchFilters.priceMax}
                    onChange={(e) => setSearchFilters({...searchFilters, priceMax: e.target.value})}
                    className="flex-1 px-4 py-4 rounded-xl bg-white/10 border border-white/30 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-champagne/50"
                  />
                </div>

                <button className="flex items-center justify-center space-x-2 px-6 py-4 rounded-xl bg-gradient-to-r from-champagne to-emerald text-white font-semibold hover:shadow-lg transition-all duration-300">
                  <Search className="w-5 h-5" />
                  <span>Search</span>
                </button>
              </div>

              <div className="flex items-center justify-between">
                <div className="text-white/80 text-sm">
                  {properties.length} luxury properties found
                </div>
                <button
                  onClick={() => setShowFilters(!showFilters)}
                  className="flex items-center space-x-2 text-white/80 hover:text-white transition-colors duration-300"
                >
                  <SlidersHorizontal className="w-4 h-4" />
                  <span>Advanced Filters</span>
                </button>
              </div>

              {/* Advanced Filters */}
              {showFilters && (
                <div className="mt-6 pt-6 border-t border-white/20">
                  <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                    <select
                      value={searchFilters.beds}
                      onChange={(e) => setSearchFilters({...searchFilters, beds: e.target.value})}
                      className="px-4 py-3 rounded-xl bg-white/10 border border-white/30 text-white focus:outline-none focus:ring-2 focus:ring-champagne/50"
                    >
                      <option value="" className="text-jet">Bedrooms</option>
                      <option value="1" className="text-jet">1+</option>
                      <option value="2" className="text-jet">2+</option>
                      <option value="3" className="text-jet">3+</option>
                      <option value="4" className="text-jet">4+</option>
                      <option value="5" className="text-jet">5+</option>
                    </select>

                    <select
                      value={searchFilters.baths}
                      onChange={(e) => setSearchFilters({...searchFilters, baths: e.target.value})}
                      className="px-4 py-3 rounded-xl bg-white/10 border border-white/30 text-white focus:outline-none focus:ring-2 focus:ring-champagne/50"
                    >
                      <option value="" className="text-jet">Bathrooms</option>
                      <option value="1" className="text-jet">1+</option>
                      <option value="2" className="text-jet">2+</option>
                      <option value="3" className="text-jet">3+</option>
                      <option value="4" className="text-jet">4+</option>
                    </select>

                    <select className="px-4 py-3 rounded-xl bg-white/10 border border-white/30 text-white focus:outline-none focus:ring-2 focus:ring-champagne/50">
                      <option value="" className="text-jet">Amenities</option>
                      <option value="pool" className="text-jet">Swimming Pool</option>
                      <option value="gym" className="text-jet">Private Gym</option>
                      <option value="spa" className="text-jet">Spa/Wellness</option>
                      <option value="garage" className="text-jet">Private Garage</option>
                    </select>

                    <select className="px-4 py-3 rounded-xl bg-white/10 border border-white/30 text-white focus:outline-none focus:ring-2 focus:ring-champagne/50">
                      <option value="" className="text-jet">Sort By</option>
                      <option value="price-high" className="text-jet">Price: High to Low</option>
                      <option value="price-low" className="text-jet">Price: Low to High</option>
                      <option value="newest" className="text-jet">Newest Listed</option>
                      <option value="size" className="text-jet">Largest First</option>
                    </select>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Properties Grid */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {properties.map((property, index) => (
              <div
                key={property.id}
                className="group cursor-pointer animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 transform-gpu">
                  {/* Property Image */}
                  <div className="relative overflow-hidden">
                    <img
                      src={property.image}
                      alt={property.title}
                      className="w-full h-72 object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    
                    {/* Property Type Badge */}
                    <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-white/90 backdrop-blur-sm text-emerald font-medium text-sm">
                      {property.type}
                    </div>
                    
                    {/* Action Buttons */}
                    <div className="absolute top-4 right-4 flex space-x-2 opacity-0 group-hover:opacity-100 transition-all duration-300">
                      <button className="p-2 rounded-full bg-white/90 backdrop-blur-sm hover:bg-white transition-colors duration-300">
                        <Heart className="w-4 h-4 text-emerald" />
                      </button>
                      <button className="p-2 rounded-full bg-white/90 backdrop-blur-sm hover:bg-white transition-colors duration-300">
                        <Eye className="w-4 h-4 text-emerald" />
                      </button>
                    </div>

                    {/* Price Tag */}
                    <div className="absolute bottom-4 left-4 px-4 py-2 rounded-full bg-gradient-to-r from-emerald to-champagne text-white font-bold">
                      {property.price}
                    </div>
                  </div>

                  {/* Property Details */}
                  <div className="p-6">
                    <div className="flex items-center text-emerald/80 text-sm mb-2">
                      <MapPin className="w-4 h-4 mr-1" />
                      {property.location}
                    </div>
                    
                    <h3 className="font-playfair text-2xl font-bold text-jet mb-4">
                      {property.title}
                    </h3>

                    {/* Property Stats */}
                    <div className="flex items-center justify-between text-jet/60 mb-4">
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
                      {property.features.map((feature, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 rounded-full bg-emerald/10 text-emerald text-xs font-medium"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>

                    {/* Action Buttons */}
                    <div className="flex gap-3">
                      <button className="flex-1 py-3 rounded-xl bg-gradient-to-r from-emerald to-champagne text-white font-medium hover:shadow-lg transition-all duration-300">
                        View Details
                      </button>
                      <button className="px-6 py-3 rounded-xl border-2 border-emerald text-emerald font-medium hover:bg-emerald hover:text-white transition-all duration-300">
                        Schedule Tour
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Load More */}
          <div className="text-center mt-12">
            <button className="px-8 py-4 rounded-full bg-gradient-to-r from-emerald to-champagne text-white font-semibold hover:shadow-lg transition-all duration-300">
              Load More Properties
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};