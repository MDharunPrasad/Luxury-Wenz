import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, Filter, MapPin, Home, DollarSign, Star } from 'lucide-react';
import { Property } from '../data/properties';
import { propertiesUpdated } from '../data/properties-updated';

export const Listings: React.FC = () => {
  const [filters, setFilters] = useState({
    location: '',
    type: '',
    priceRange: '',
    search: ''
  });
  const [visibleProperties, setVisibleProperties] = useState(6);
  const propertiesPerLoad = 6;
  
  // Use the updated properties with local images
  const [properties] = useState<Property[]>(propertiesUpdated);
  
  // Function to load more properties
  const loadMoreProperties = () => {
    setVisibleProperties(prev => prev + propertiesPerLoad);
  };

  const handleFilterChange = (key: string, value: string) => {
    setFilters(prev => ({ ...prev, [key]: value }));
  };

  const filteredProperties = properties.filter(property => {
    return (
      (filters.location === '' || property.location.toLowerCase().includes(filters.location.toLowerCase())) &&
      (filters.type === '' || property.type.toLowerCase() === filters.type.toLowerCase()) &&
      (filters.search === '' || property.title.toLowerCase().includes(filters.search.toLowerCase()))
    );
  });

  return (
    <div className="min-h-screen bg-ivory pt-20">
      <div className="container mx-auto px-4 sm:px-6 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-playfair font-bold text-jet mb-4">
            Luxury Properties
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover exceptional properties in the world's most prestigious locations
          </p>
        </div>

        {/* Filters */}
        <div className="bg-white/80 backdrop-blur-md rounded-2xl shadow-xl border border-white/20 p-4 sm:p-6 mb-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {/* Search */}
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search properties..."
                value={filters.search}
                onChange={(e) => handleFilterChange('search', e.target.value)}
                className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 focus:border-emerald focus:ring-2 focus:ring-emerald/20 transition-all duration-300"
              />
            </div>

            {/* Location */}
            <div className="relative">
              <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <select
                value={filters.location}
                onChange={(e) => handleFilterChange('location', e.target.value)}
                className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 focus:border-emerald focus:ring-2 focus:ring-emerald/20 transition-all duration-300 appearance-none bg-white"
              >
                <option value="">All Locations</option>
                <option value="manhattan">Manhattan, NY</option>
                <option value="beverly hills">Beverly Hills, CA</option>
                <option value="brooklyn">Brooklyn, NY</option>
                <option value="miami">Miami, FL</option>
              </select>
            </div>

            {/* Property Type */}
            <div className="relative">
              <Home className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <select
                value={filters.type}
                onChange={(e) => handleFilterChange('type', e.target.value)}
                className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 focus:border-emerald focus:ring-2 focus:ring-emerald/20 transition-all duration-300 appearance-none bg-white"
              >
                <option value="">All Types</option>
                <option value="apartment">Apartment</option>
                <option value="villa">Villa</option>
                <option value="townhouse">Townhouse</option>
                <option value="condo">Condo</option>
              </select>
            </div>

            {/* Price Range */}
            <div className="relative">
              <DollarSign className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <select
                value={filters.priceRange}
                onChange={(e) => handleFilterChange('priceRange', e.target.value)}
                className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 focus:border-emerald focus:ring-2 focus:ring-emerald/20 transition-all duration-300 appearance-none bg-white"
              >
                <option value="">All Prices</option>
                <option value="0-1000000">Under $1M</option>
                <option value="1000000-2000000">$1M - $2M</option>
                <option value="2000000-5000000">$2M - $5M</option>
                <option value="5000000+">$5M+</option>
              </select>
            </div>
          </div>
        </div>

        {/* Results Count */}
        <div className="flex items-center justify-between mb-6">
          <p className="text-gray-600">
            Showing {filteredProperties.length} properties
          </p>
          <div className="flex items-center space-x-2">
            <Filter className="w-4 h-4 text-gray-400" />
            <span className="text-sm text-gray-600">Sort by: Featured</span>
          </div>
        </div>
        {/* Properties Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {filteredProperties.slice(0, visibleProperties).map((property) => (
            <div key={property.id} className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden">
              {/* Property Image */}
              <div className="relative h-48 md:h-64 overflow-hidden rounded-t-xl bg-gray-100">
                <img
                  src={property.images?.[0] || '/images/placeholder-property.jpg'}
                  alt={property.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.onerror = null;
                    target.src = '/images/placeholder-property.jpg';
                  }}
                />
                {property.featured && (
                  <div className="absolute top-4 left-4 bg-[#D4AF37] text-white px-3 py-1 rounded-full text-sm font-medium">
                    Featured
                  </div>
                )}
              </div>

              {/* Property Details */}
              <div className="p-5 sm:p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-emerald font-semibold text-xs uppercase tracking-wider">
                    {property.type}
                  </span>
                  <div className="flex items-center space-x-1 bg-gray-50 px-2 py-1 rounded-md">
                    <Star className="w-3.5 h-3.5 text-yellow-400 fill-current" />
                    <span className="text-xs font-medium text-gray-600">
                      {property.rating}
                    </span>
                  </div>
                </div>

                <h3 className="text-lg sm:text-xl font-playfair font-bold text-jet mb-2 group-hover:text-emerald transition-colors duration-300">
                  {property.title}
                </h3>

                <div className="flex items-start text-gray-600 mb-3">
                  <MapPin className="w-4 h-4 mt-0.5 mr-1.5 flex-shrink-0 text-emerald/80" />
                  <span className="text-sm text-gray-600 leading-tight">{property.location}</span>
                </div>
                
                {/* Description */}
                {property.description && (
                  <p className="text-sm text-gray-600 mb-4 line-clamp-2">
                    {property.description}
                  </p>
                )}

                <div className="grid grid-cols-3 gap-2 text-center text-sm text-gray-600 mb-5 bg-gray-50 rounded-lg p-2">
                  <div className="flex flex-col items-center">
                    <span className="font-medium text-jet">{property.bedrooms}</span>
                    <span className="text-xs text-gray-500">Beds</span>
                  </div>
                  <div className="flex flex-col items-center border-x border-gray-200">
                    <span className="font-medium text-jet">{property.bathrooms}</span>
                    <span className="text-xs text-gray-500">Baths</span>
                  </div>
                  <div className="flex flex-col items-center">
                    <span className="font-medium text-jet">{property.area}</span>
                    <span className="text-xs text-gray-500">Sq Ft</span>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                  <div>
                    <span className="block text-xs text-gray-500">Price</span>
                    <span className="text-xl font-bold text-jet">
                      {property.price.includes('$') ? property.price : `$${parseInt(property.price).toLocaleString()}`}
                    </span>
                  </div>
                  <Link
                    to={`/property/${property.id}`}
                    className="w-full sm:w-auto text-center bg-[#D4AF37] text-white px-5 py-2.5 rounded-xl hover:shadow-lg hover:shadow-[#D4AF37]/30 hover:scale-[1.02] active:scale-95 transition-all duration-300 text-sm font-medium"
                  >
                    View Details
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Load More */}
        {visibleProperties < filteredProperties.length && (
          <div className="text-center mt-12">
            <button 
              onClick={loadMoreProperties}
              className="bg-white/80 backdrop-blur-md text-jet font-semibold px-8 py-3 rounded-xl hover:bg-white hover:shadow-lg transition-all duration-300 border border-white/20 hover:border-emerald/50 hover:text-emerald"
            >
              Load More Properties
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
