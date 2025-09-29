import React from 'react';
import { Bed, Bath, Square, MapPin, Heart, Eye, ArrowRight } from 'lucide-react';

const featuredProperties = [
  {
    id: 1,
    title: "Penthouse Paradise",
    location: "Manhattan, New York",
    price: "$12,500,000",
    image: "https://images.pexels.com/photos/1396132/pexels-photo-1396132.jpeg?auto=compress&cs=tinysrgb&w=800",
    beds: 4,
    baths: 3,
    sqft: "3,500",
    type: "Penthouse"
  },
  {
    id: 2,
    title: "Coastal Villa Estate",
    location: "Malibu, California",
    price: "$8,750,000",
    image: "https://images.pexels.com/photos/1029599/pexels-photo-1029599.jpeg?auto=compress&cs=tinysrgb&w=800",
    beds: 6,
    baths: 5,
    sqft: "5,200",
    type: "Villa"
  },
  {
    id: 3,
    title: "Modern Sky Residence",
    location: "Dubai Marina, UAE",
    price: "$3,200,000",
    image: "https://images.pexels.com/photos/439391/pexels-photo-439391.jpeg?auto=compress&cs=tinysrgb&w=800",
    beds: 3,
    baths: 2,
    sqft: "2,800",
    type: "Apartment"
  },
  {
    id: 4,
    title: "Historic Mansion",
    location: "London, UK",
    price: "$15,000,000",
    image: "https://images.pexels.com/photos/206172/pexels-photo-206172.jpeg?auto=compress&cs=tinysrgb&w=800",
    beds: 8,
    baths: 7,
    sqft: "8,500",
    type: "Mansion"
  },
  {
    id: 5,
    title: "Luxury Waterfront",
    location: "Miami Beach, Florida",
    price: "$6,900,000",
    image: "https://images.pexels.com/photos/1115804/pexels-photo-1115804.jpeg?auto=compress&cs=tinysrgb&w=800",
    beds: 5,
    baths: 4,
    sqft: "4,200",
    type: "Condo"
  },
  {
    id: 6,
    title: "Mountain Retreat",
    location: "Aspen, Colorado",
    price: "$9,500,000",
    image: "https://images.pexels.com/photos/1732414/pexels-photo-1732414.jpeg?auto=compress&cs=tinysrgb&w=800",
    beds: 7,
    baths: 6,
    sqft: "6,800",
    type: "Chalet"
  }
];

export const FeaturedProperties: React.FC = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-ivory to-platinum/30">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="font-playfair text-5xl lg:text-6xl font-bold text-jet mb-6">
            Exquisite
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald to-champagne"> Properties</span>
          </h2>
          <p className="text-xl text-jet/70 max-w-3xl mx-auto">
            Handpicked collection of the world's most prestigious properties, 
            each offering unparalleled luxury and sophistication.
          </p>
        </div>

        {/* Properties Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProperties.map((property, index) => (
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
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  
                  {/* Image Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-jet/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  {/* Property Type Badge */}
                  <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-white/90 backdrop-blur-sm text-emerald font-medium text-sm">
                    {property.type}
                  </div>
                  
                  {/* Action Buttons */}
                  <div className="absolute top-4 right-4 flex space-x-2 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
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
                  
                  <h3 className="font-playfair text-2xl font-bold text-jet mb-4 group-hover:text-emerald transition-colors duration-300">
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

                  {/* View Details Button */}
                  <button className="w-full flex items-center justify-center space-x-2 py-3 rounded-xl border-2 border-emerald text-emerald font-medium hover:bg-emerald hover:text-white transition-all duration-300 group/btn">
                    <span>View Details</span>
                    <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-300" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-16">
          <a 
            href="/listings"
            className="inline-flex items-center space-x-3 px-8 py-4 rounded-full bg-gradient-to-r from-emerald to-champagne text-white font-semibold text-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 group"
          >
            <span>Explore All Properties</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
          </a>
        </div>
      </div>
    </section>
  );
};