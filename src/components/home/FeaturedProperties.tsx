import React from 'react';
import { Bed, Bath, Square, MapPin, Heart, Eye, ArrowRight, Car, Wifi, Shield } from 'lucide-react';
import { Link } from 'react-router-dom';

const featuredProperties = [
  {
    id: 1,
    title: "Luxury Penthouse with City Views",
    location: "Bandra West, Mumbai",
    price: "₹12.5 Cr",
    originalPrice: "₹14 Cr",
    image: "https://images.pexels.com/photos/1396132/pexels-photo-1396132.jpeg?auto=compress&cs=tinysrgb&w=800",
    beds: 4,
    baths: 3,
    sqft: "3,500",
    type: "Penthouse",
    features: ["City View", "Private Terrace", "Smart Home"],
    amenities: ["Parking", "WiFi", "Security"],
    isNew: true,
    discount: "11% Off"
  },
  {
    id: 2,
    title: "Modern Villa with Private Pool",
    location: "Whitefield, Bangalore",
    price: "₹8.75 Cr",
    image: "https://images.pexels.com/photos/1029599/pexels-photo-1029599.jpeg?auto=compress&cs=tinysrgb&w=800",
    beds: 5,
    baths: 4,
    sqft: "4,200",
    type: "Villa",
    features: ["Private Pool", "Garden", "Gym"],
    amenities: ["Parking", "WiFi", "Security"],
    isNew: false
  },
  {
    id: 3,
    title: "Contemporary Apartment",
    location: "Cyber City, Gurgaon",
    price: "₹3.2 Cr",
    image: "https://images.pexels.com/photos/439391/pexels-photo-439391.jpeg?auto=compress&cs=tinysrgb&w=800",
    beds: 3,
    baths: 2,
    sqft: "2,100",
    type: "Apartment",
    features: ["Balcony", "Modular Kitchen", "AC"],
    amenities: ["Parking", "WiFi", "Security"],
    isNew: true
  },
  {
    id: 4,
    title: "Elegant Townhouse",
    location: "Koramangala, Bangalore",
    price: "₹6.8 Cr",
    image: "https://images.pexels.com/photos/206172/pexels-photo-206172.jpeg?auto=compress&cs=tinysrgb&w=800",
    beds: 4,
    baths: 3,
    sqft: "3,200",
    type: "Townhouse",
    features: ["Terrace", "Study Room", "Servant Quarter"],
    amenities: ["Parking", "WiFi", "Security"],
    isNew: false
  },
  {
    id: 5,
    title: "Waterfront Luxury Apartment",
    location: "Marine Drive, Mumbai",
    price: "₹15.5 Cr",
    image: "https://images.pexels.com/photos/1115804/pexels-photo-1115804.jpeg?auto=compress&cs=tinysrgb&w=800",
    beds: 3,
    baths: 3,
    sqft: "2,800",
    type: "Apartment",
    features: ["Sea View", "Premium Finishes", "Concierge"],
    amenities: ["Parking", "WiFi", "Security"],
    isNew: true
  },
  {
    id: 6,
    title: "Modern Family Home",
    location: "DLF Phase 2, Gurgaon",
    price: "₹9.2 Cr",
    image: "https://images.pexels.com/photos/1732414/pexels-photo-1732414.jpeg?auto=compress&cs=tinysrgb&w=800",
    beds: 4,
    baths: 4,
    sqft: "3,800",
    type: "Independent House",
    features: ["Garden", "Parking", "Solar Panels"],
    amenities: ["Parking", "WiFi", "Security"],
    isNew: false
  }
];

export const FeaturedProperties: React.FC = () => {
  const getAmenityIcon = (amenity: string) => {
    switch (amenity) {
      case 'Parking': return Car;
      case 'WiFi': return Wifi;
      case 'Security': return Shield;
      default: return Shield;
    }
  };

  return (
    <section className="py-20 bg-gradient-to-b from-neutral-50 to-white">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="font-playfair text-4xl lg:text-5xl font-bold text-neutral-900 mb-6">
            Featured
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-emerald-500"> Properties</span>
          </h2>
          <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
            Handpicked premium properties in prime locations across major cities. 
            Find your perfect home from our exclusive collection.
          </p>
        </div>

        {/* Properties Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProperties.map((property, index) => (
            <div
              key={property.id}
              className="group cursor-pointer animate-fade-in-up transform hover:scale-105 transition-all duration-500"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-neutral-100">
                {/* Property Image */}
                <div className="relative overflow-hidden">
                  <img
                    src={property.image}
                    alt={property.title}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700"
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
                    {property.discount && (
                      <div className="px-3 py-1 rounded-full bg-red-500 text-white font-semibold text-sm shadow-lg">
                        {property.discount}
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
                      {property.originalPrice && (
                        <div className="text-sm text-neutral-500 line-through">{property.originalPrice}</div>
                      )}
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

                  {/* Amenities */}
                  <div className="flex items-center justify-between mb-4">
                    {property.amenities.slice(0, 3).map((amenity, i) => {
                      const Icon = getAmenityIcon(amenity);
                      return (
                        <div key={i} className="flex items-center space-x-1 text-neutral-500">
                          <Icon className="w-4 h-4" />
                          <span className="text-xs">{amenity}</span>
                        </div>
                      );
                    })}
                  </div>

                  {/* Action Button */}
                  <Link
                    to={`/property/${property.id}`}
                    className="w-full flex items-center justify-center space-x-2 py-3 rounded-2xl bg-gradient-to-r from-emerald-600 to-emerald-500 text-white font-semibold hover:shadow-lg transition-all duration-300 group/btn"
                  >
                    <span>View Details</span>
                    <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-300" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-16">
          <Link
            to="/listings"
            className="inline-flex items-center space-x-3 px-8 py-4 rounded-full bg-gradient-to-r from-emerald-600 to-emerald-500 text-white font-semibold text-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 group"
          >
            <span>View All Properties</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
          </Link>
        </div>
      </div>
    </section>
  );
};