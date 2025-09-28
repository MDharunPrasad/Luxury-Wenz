import React, { useMemo, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { 
  ArrowLeft, 
  Heart, 
  Share2, 
  MapPin, 
  Home, 
  Car, 
  Bath, 
  Bed, 
  Ruler, 
  Calendar,
  Star,
  Phone,
  Mail,
  MessageCircle,
  ChevronLeft,
  ChevronRight,
  Play
} from 'lucide-react';

import { properties } from '../data/properties';

export const PropertyDetails: React.FC = () => {
  const { id } = useParams();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isInquiryOpen, setIsInquiryOpen] = useState(false);
  const [inquiryForm, setInquiryForm] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const property = useMemo(() => {
    const numericId = Number(id);
    return properties.find((p) => p.id === numericId) ?? properties[0];
  }, [id]);

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % property.images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + property.images.length) % property.images.length);
  };

  const handleInquirySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Inquiry submitted:', inquiryForm);
    setIsInquiryOpen(false);
    setInquiryForm({ name: '', email: '', phone: '', message: '' });
  };

  return (
    <div className="min-h-screen bg-ivory pt-20">
      <div className="container mx-auto px-4 sm:px-6 py-8">
        {/* Back Button */}
        <Link 
          to="/listings" 
          className="inline-flex items-center space-x-2 text-emerald hover:text-champagne transition-colors duration-300 mb-6"
        >
          <ArrowLeft className="w-5 h-5" />
          <span>Back to Listings</span>
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Image Gallery */}
            <div className="relative mb-8">
              <div className="relative h-64 sm:h-80 lg:h-96 xl:h-[500px] rounded-2xl overflow-hidden">
                <img
                  src={property.images[currentImageIndex]}
                  alt={property.title}
                  className="w-full h-full object-cover"
                />
                
                {/* Navigation Arrows */}
                <button
                  onClick={prevImage}
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/80 backdrop-blur-sm rounded-full p-2 hover:bg-white transition-colors duration-300"
                >
                  <ChevronLeft className="w-6 h-6 text-jet" />
                </button>
                <button
                  onClick={nextImage}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/80 backdrop-blur-sm rounded-full p-2 hover:bg-white transition-colors duration-300"
                >
                  <ChevronRight className="w-6 h-6 text-jet" />
                </button>

                {/* Image Counter */}
                <div className="absolute bottom-4 left-4 bg-black/50 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm">
                  {currentImageIndex + 1} / {property.images.length}
                </div>

                {/* Action Buttons */}
                <div className="absolute top-4 right-4 flex space-x-2">
                  <button className="p-2 bg-white/80 backdrop-blur-sm rounded-full hover:bg-white transition-colors duration-300">
                    <Heart className="w-5 h-5 text-jet" />
                  </button>
                  <button className="p-2 bg-white/80 backdrop-blur-sm rounded-full hover:bg-white transition-colors duration-300">
                    <Share2 className="w-5 h-5 text-jet" />
                  </button>
                </div>
              </div>

              {/* Thumbnail Gallery */}
              <div className="flex space-x-2 mt-4 overflow-x-auto pb-2">
                {property.images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden border-2 transition-all duration-300 ${
                      index === currentImageIndex 
                        ? 'border-emerald' 
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                  >
                    <img
                      src={image}
                      alt={`${property.title} ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>

            {/* Property Title & Price */}
            <div className="mb-8">
              <div className="flex items-center justify-between mb-4">
                <h1 className="text-2xl sm:text-3xl lg:text-4xl font-playfair font-bold text-jet">
                  {property.title}
                </h1>
                <div className="text-right">
                  <div className="text-3xl font-bold text-emerald">{property.price}</div>
                  <div className="text-sm text-gray-600">{property.type}</div>
                </div>
              </div>

              <div className="flex items-center text-gray-600 mb-4">
                <MapPin className="w-5 h-5 mr-2" />
                <span>{property.location}</span>
              </div>

              {/* Property Specs */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
                <div className="flex items-center space-x-2 p-4 bg-white/50 rounded-xl">
                  <Bed className="w-5 h-5 text-emerald" />
                  <div>
                    <div className="font-semibold text-jet">{property.bedrooms}</div>
                    <div className="text-sm text-gray-600">Bedrooms</div>
                  </div>
                </div>
                <div className="flex items-center space-x-2 p-4 bg-white/50 rounded-xl">
                  <Bath className="w-5 h-5 text-emerald" />
                  <div>
                    <div className="font-semibold text-jet">{property.bathrooms}</div>
                    <div className="text-sm text-gray-600">Bathrooms</div>
                  </div>
                </div>
                <div className="flex items-center space-x-2 p-4 bg-white/50 rounded-xl">
                  <Ruler className="w-5 h-5 text-emerald" />
                  <div>
                    <div className="font-semibold text-jet">{property.area}</div>
                    <div className="text-sm text-gray-600">Area</div>
                  </div>
                </div>
                <div className="flex items-center space-x-2 p-4 bg-white/50 rounded-xl">
                  <Car className="w-5 h-5 text-emerald" />
                  <div>
                    <div className="font-semibold text-jet">{property.parking ?? '—'}</div>
                    <div className="text-sm text-gray-600">Parking</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Description */}
            <div className="mb-8">
              <h2 className="text-2xl font-playfair font-bold text-jet mb-4">Description</h2>
              <p className="text-gray-700 leading-relaxed mb-6">{property.description}</p>
              
              <h3 className="text-xl font-playfair font-bold text-jet mb-4">Key Features</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {(property.tags ?? []).map((feature, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-emerald rounded-full"></div>
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            {/* Agent Info */}
            <div className="bg-white/80 backdrop-blur-md rounded-2xl shadow-xl border border-white/20 p-6 mb-6">
              <h3 className="text-xl font-playfair font-bold text-jet mb-4">Agent Information</h3>
              
              <div className="flex items-center space-x-4 mb-4">
                <img
                  src={property.agent?.image}
                  alt={property.agent?.name ?? 'Agent'}
                  className="w-16 h-16 rounded-full object-cover"
                />
                <div>
                  <h4 className="font-semibold text-jet">{property.agent?.name}</h4>
                  <p className="text-sm text-gray-600">{property.agent?.title}</p>
                  <div className="flex items-center space-x-1">
                    <Star className="w-4 h-4 text-yellow-400 fill-current" />
                    <span className="text-sm text-gray-600">{property.agent?.rating}</span>
                    <span className="text-sm text-gray-600">({property.agent?.propertiesSold} sold)</span>
                  </div>
                </div>
              </div>

              <div className="space-y-3">
                <a
                  href={`tel:${property.agent?.phone ?? ''}`}
                  className="flex items-center space-x-3 w-full p-3 bg-emerald/10 rounded-xl hover:bg-emerald/20 transition-colors duration-300"
                >
                  <Phone className="w-5 h-5 text-emerald" />
                  <span className="text-jet">{property.agent?.phone}</span>
                </a>
                <a
                  href={`mailto:${property.agent?.email ?? ''}`}
                  className="flex items-center space-x-3 w-full p-3 bg-emerald/10 rounded-xl hover:bg-emerald/20 transition-colors duration-300"
                >
                  <Mail className="w-5 h-5 text-emerald" />
                  <span className="text-jet">{property.agent?.email}</span>
                </a>
              </div>
            </div>

            {/* Inquiry Form */}
            <div className="bg-white/80 backdrop-blur-md rounded-2xl shadow-xl border border-white/20 p-6">
              <h3 className="text-xl font-playfair font-bold text-jet mb-4">Send Inquiry</h3>
              
              <form onSubmit={handleInquirySubmit} className="space-y-4">
                <div>
                  <input
                    type="text"
                    placeholder="Your Name"
                    value={inquiryForm.name}
                    onChange={(e) => setInquiryForm({...inquiryForm, name: e.target.value})}
                    required
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-emerald focus:ring-2 focus:ring-emerald/20 transition-all duration-300"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    placeholder="Email Address"
                    value={inquiryForm.email}
                    onChange={(e) => setInquiryForm({...inquiryForm, email: e.target.value})}
                    required
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-emerald focus:ring-2 focus:ring-emerald/20 transition-all duration-300"
                  />
                </div>
                <div>
                  <input
                    type="tel"
                    placeholder="Phone Number"
                    value={inquiryForm.phone}
                    onChange={(e) => setInquiryForm({...inquiryForm, phone: e.target.value})}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-emerald focus:ring-2 focus:ring-emerald/20 transition-all duration-300"
                  />
                </div>
                <div>
                  <textarea
                    placeholder="Your Message"
                    value={inquiryForm.message}
                    onChange={(e) => setInquiryForm({...inquiryForm, message: e.target.value})}
                    rows={4}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-emerald focus:ring-2 focus:ring-emerald/20 transition-all duration-300 resize-none"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-emerald to-champagne text-white font-semibold py-3 px-6 rounded-xl hover:shadow-lg hover:scale-105 transition-all duration-300"
                >
                  Send Inquiry
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
