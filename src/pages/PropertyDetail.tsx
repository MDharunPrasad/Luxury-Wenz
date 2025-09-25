import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { 
  MapPin, Bed, Bath, Square, Car, Wifi, Shield, 
  Heart, Share2, Phone, Mail, Calendar, 
  ChevronLeft, ChevronRight, Star, CheckCircle 
} from 'lucide-react';

const propertyData = {
  id: 1,
  title: "Luxury Penthouse with City Views",
  location: "Bandra West, Mumbai",
  price: "₹12.5 Cr",
  originalPrice: "₹14 Cr",
  images: [
    "https://images.pexels.com/photos/1396132/pexels-photo-1396132.jpeg?auto=compress&cs=tinysrgb&w=1200",
    "https://images.pexels.com/photos/1029599/pexels-photo-1029599.jpeg?auto=compress&cs=tinysrgb&w=1200",
    "https://images.pexels.com/photos/439391/pexels-photo-439391.jpeg?auto=compress&cs=tinysrgb&w=1200",
    "https://images.pexels.com/photos/206172/pexels-photo-206172.jpeg?auto=compress&cs=tinysrgb&w=1200"
  ],
  beds: 4,
  baths: 3,
  sqft: "3,500",
  type: "Penthouse",
  description: "Experience luxury living at its finest in this stunning penthouse located in the heart of Bandra West. This meticulously designed 4-bedroom residence offers breathtaking city views, premium finishes, and world-class amenities. The open-plan living spaces are perfect for entertaining, while the private terrace provides a serene escape from the bustling city below.",
  features: [
    "Panoramic City Views",
    "Private Terrace",
    "Smart Home Technology",
    "Premium Marble Flooring",
    "Modular Kitchen",
    "Master Suite with Walk-in Closet",
    "Home Theater Room",
    "Wine Cellar"
  ],
  amenities: [
    "24/7 Security",
    "Swimming Pool",
    "Fitness Center",
    "Concierge Service",
    "Valet Parking",
    "Business Center",
    "Spa & Wellness",
    "Rooftop Garden"
  ],
  agent: {
    name: "Priya Sharma",
    image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop",
    phone: "+91 98765 43210",
    email: "priya@flauntproperties.com",
    rating: 4.9,
    reviews: 127
  }
};

export const PropertyDetail: React.FC = () => {
  const { id } = useParams();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [showContactForm, setShowContactForm] = useState(false);

  const nextImage = () => {
    setCurrentImageIndex((prev) => 
      prev === propertyData.images.length - 1 ? 0 : prev + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => 
      prev === 0 ? propertyData.images.length - 1 : prev - 1
    );
  };

  return (
    <div className="min-h-screen bg-neutral-50">
      {/* Image Gallery */}
      <section className="relative h-96 lg:h-[500px] overflow-hidden">
        <img
          src={propertyData.images[currentImageIndex]}
          alt={propertyData.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/50 to-transparent" />
        
        {/* Navigation Buttons */}
        <button
          onClick={prevImage}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 p-3 rounded-full bg-white/20 backdrop-blur-sm hover:bg-white/30 transition-colors duration-300"
        >
          <ChevronLeft className="w-6 h-6 text-white" />
        </button>
        <button
          onClick={nextImage}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 p-3 rounded-full bg-white/20 backdrop-blur-sm hover:bg-white/30 transition-colors duration-300"
        >
          <ChevronRight className="w-6 h-6 text-white" />
        </button>

        {/* Image Indicators */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {propertyData.images.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentImageIndex(index)}
              className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                index === currentImageIndex ? 'bg-white' : 'bg-white/50'
              }`}
            />
          ))}
        </div>

        {/* Action Buttons */}
        <div className="absolute top-4 right-4 flex space-x-2">
          <button className="p-3 rounded-full bg-white/20 backdrop-blur-sm hover:bg-white/30 transition-colors duration-300">
            <Heart className="w-5 h-5 text-white" />
          </button>
          <button className="p-3 rounded-full bg-white/20 backdrop-blur-sm hover:bg-white/30 transition-colors duration-300">
            <Share2 className="w-5 h-5 text-white" />
          </button>
        </div>
      </section>

      {/* Property Details */}
      <section className="py-12">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2">
              {/* Header */}
              <div className="mb-8">
                <div className="flex items-center text-emerald-600 text-sm mb-2">
                  <MapPin className="w-4 h-4 mr-1" />
                  {propertyData.location}
                </div>
                <h1 className="font-playfair text-3xl lg:text-4xl font-bold text-neutral-900 mb-4">
                  {propertyData.title}
                </h1>
                <div className="flex items-center space-x-4">
                  <div className="text-3xl font-bold text-emerald-600">{propertyData.price}</div>
                  {propertyData.originalPrice && (
                    <div className="text-xl text-neutral-500 line-through">{propertyData.originalPrice}</div>
                  )}
                  <div className="px-3 py-1 rounded-full bg-emerald-100 text-emerald-600 font-semibold text-sm">
                    {propertyData.type}
                  </div>
                </div>
              </div>

              {/* Property Stats */}
              <div className="grid grid-cols-4 gap-6 mb-8 p-6 bg-white rounded-2xl shadow-sm border border-neutral-100">
                <div className="text-center">
                  <Bed className="w-8 h-8 text-emerald-600 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-neutral-900">{propertyData.beds}</div>
                  <div className="text-sm text-neutral-600">Bedrooms</div>
                </div>
                <div className="text-center">
                  <Bath className="w-8 h-8 text-emerald-600 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-neutral-900">{propertyData.baths}</div>
                  <div className="text-sm text-neutral-600">Bathrooms</div>
                </div>
                <div className="text-center">
                  <Square className="w-8 h-8 text-emerald-600 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-neutral-900">{propertyData.sqft}</div>
                  <div className="text-sm text-neutral-600">Sq Ft</div>
                </div>
                <div className="text-center">
                  <Car className="w-8 h-8 text-emerald-600 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-neutral-900">2</div>
                  <div className="text-sm text-neutral-600">Parking</div>
                </div>
              </div>

              {/* Description */}
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-neutral-900 mb-4">Description</h2>
                <p className="text-neutral-700 leading-relaxed">{propertyData.description}</p>
              </div>

              {/* Features */}
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-neutral-900 mb-4">Key Features</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {propertyData.features.map((feature, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-emerald-600 flex-shrink-0" />
                      <span className="text-neutral-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Amenities */}
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-neutral-900 mb-4">Building Amenities</h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {propertyData.amenities.map((amenity, index) => (
                    <div key={index} className="p-4 bg-white rounded-xl border border-neutral-100 text-center">
                      <div className="w-8 h-8 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-2">
                        <Shield className="w-4 h-4 text-emerald-600" />
                      </div>
                      <div className="text-sm font-medium text-neutral-700">{amenity}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              {/* Agent Card */}
              <div className="bg-white rounded-2xl p-6 shadow-sm border border-neutral-100 mb-6 sticky top-24">
                <div className="text-center mb-6">
                  <img
                    src={propertyData.agent.image}
                    alt={propertyData.agent.name}
                    className="w-20 h-20 rounded-full mx-auto mb-4 object-cover"
                  />
                  <h3 className="text-xl font-bold text-neutral-900 mb-1">{propertyData.agent.name}</h3>
                  <div className="flex items-center justify-center space-x-1 mb-2">
                    <Star className="w-4 h-4 text-yellow-400 fill-current" />
                    <span className="text-sm font-medium text-neutral-700">{propertyData.agent.rating}</span>
                    <span className="text-sm text-neutral-500">({propertyData.agent.reviews} reviews)</span>
                  </div>
                  <p className="text-sm text-neutral-600">Property Specialist</p>
                </div>

                <div className="space-y-3 mb-6">
                  <a
                    href={`tel:${propertyData.agent.phone}`}
                    className="flex items-center justify-center space-x-2 w-full py-3 rounded-xl bg-gradient-to-r from-emerald-600 to-emerald-500 text-white font-semibold hover:shadow-lg transition-all duration-300"
                  >
                    <Phone className="w-4 h-4" />
                    <span>Call Now</span>
                  </a>
                  <a
                    href={`mailto:${propertyData.agent.email}`}
                    className="flex items-center justify-center space-x-2 w-full py-3 rounded-xl border-2 border-emerald-600 text-emerald-600 font-semibold hover:bg-emerald-600 hover:text-white transition-all duration-300"
                  >
                    <Mail className="w-4 h-4" />
                    <span>Send Email</span>
                  </a>
                  <button
                    onClick={() => setShowContactForm(!showContactForm)}
                    className="flex items-center justify-center space-x-2 w-full py-3 rounded-xl bg-neutral-100 text-neutral-700 font-semibold hover:bg-neutral-200 transition-all duration-300"
                  >
                    <Calendar className="w-4 h-4" />
                    <span>Schedule Visit</span>
                  </button>
                </div>

                {/* Contact Form */}
                {showContactForm && (
                  <div className="border-t border-neutral-200 pt-6">
                    <h4 className="font-semibold text-neutral-900 mb-4">Schedule a Visit</h4>
                    <form className="space-y-4">
                      <input
                        type="text"
                        placeholder="Your Name"
                        className="w-full px-4 py-3 rounded-xl border border-neutral-200 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                      />
                      <input
                        type="email"
                        placeholder="Your Email"
                        className="w-full px-4 py-3 rounded-xl border border-neutral-200 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                      />
                      <input
                        type="tel"
                        placeholder="Your Phone"
                        className="w-full px-4 py-3 rounded-xl border border-neutral-200 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                      />
                      <input
                        type="date"
                        className="w-full px-4 py-3 rounded-xl border border-neutral-200 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                      />
                      <textarea
                        placeholder="Message (optional)"
                        rows={3}
                        className="w-full px-4 py-3 rounded-xl border border-neutral-200 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                      />
                      <button
                        type="submit"
                        className="w-full py-3 rounded-xl bg-gradient-to-r from-emerald-600 to-emerald-500 text-white font-semibold hover:shadow-lg transition-all duration-300"
                      >
                        Submit Request
                      </button>
                    </form>
                  </div>
                )}
              </div>

              {/* Mortgage Calculator */}
              <div className="bg-white rounded-2xl p-6 shadow-sm border border-neutral-100">
                <h3 className="text-lg font-bold text-neutral-900 mb-4">Mortgage Calculator</h3>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-neutral-700 mb-2">Loan Amount</label>
                    <input
                      type="text"
                      defaultValue="₹10,00,00,000"
                      className="w-full px-4 py-3 rounded-xl border border-neutral-200 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-neutral-700 mb-2">Interest Rate (%)</label>
                    <input
                      type="text"
                      defaultValue="8.5"
                      className="w-full px-4 py-3 rounded-xl border border-neutral-200 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-neutral-700 mb-2">Loan Term (Years)</label>
                    <input
                      type="text"
                      defaultValue="20"
                      className="w-full px-4 py-3 rounded-xl border border-neutral-200 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                    />
                  </div>
                  <button className="w-full py-3 rounded-xl bg-neutral-100 text-neutral-700 font-semibold hover:bg-neutral-200 transition-all duration-300">
                    Calculate EMI
                  </button>
                  <div className="text-center pt-4 border-t border-neutral-200">
                    <div className="text-sm text-neutral-600">Monthly EMI</div>
                    <div className="text-2xl font-bold text-emerald-600">₹86,782</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};