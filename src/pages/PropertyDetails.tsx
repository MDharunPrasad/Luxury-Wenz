import React, { FC, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { 
  ArrowLeft, 
  Heart, 
  Share2, 
  MapPin, 
  Bed, 
  Bath, 
  Ruler, 
  Car,
  Mail,
  Phone,
  ChevronLeft,
  ChevronRight,
  Star
} from 'lucide-react';

const PropertyDetails: FC = () => {
  const { id } = useParams();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [inquiryForm, setInquiryForm] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  // Sample property data - replace with actual data from your API
  const property = {
    id: id || '1',
    title: 'Luxury Modern Villa',
    price: '2,450,000',
    formattedPrice: '$2,450,000',
    location: 'Beverly Hills, CA',
    bedrooms: 4,
    bathrooms: 3.5,
    area: '3,200 sqft',
    parking: '2 cars',
    description: 'Stunning modern villa with panoramic views, featuring an open floor plan, high-end finishes, and resort-style amenities.',
    images: [
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80',
      'https://images.unsplash.com/photo-1600566752225-207662756c00?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80',
      'https://images.unsplash.com/photo-1600607688969-a5bfcd646154?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80',
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80',
    ],
    agent: {
      name: 'Sarah Johnson',
      title: 'Senior Real Estate Agent',
      phone: '(555) 123-4567',
      email: 'sarah.johnson@luxurywenz.com',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=634&q=80',
      rating: '5.0',
      propertiesSold: 24
    }
  };

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % property.images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + property.images.length) % property.images.length);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setInquiryForm(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Inquiry submitted:', inquiryForm);
    alert('Thank you for your inquiry! We will contact you soon.');
    setInquiryForm({ name: '', email: '', phone: '', message: '' });
  };

  return (
    <div className="min-h-screen bg-ivory pt-20">
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <Link 
            to="/listings" 
            className="inline-flex items-center text-emerald hover:text-emerald/80 transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Listings
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-6">
            {/* Image Gallery */}
            <div className="relative bg-white rounded-xl shadow-md overflow-hidden">
              <div className="relative h-96 w-full bg-gray-100 flex items-center justify-center">
                <img
                  src={property.images[currentImageIndex]}
                  alt={property.title}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.onerror = null;
                    target.src = 'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80';
                  }}
                />
                
                {/* Navigation Arrows */}
                <button
                  onClick={prevImage}
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/80 backdrop-blur-sm rounded-full p-2 hover:bg-white transition-colors duration-300"
                >
                  <ChevronLeft className="w-6 h-6 text-gray-800" />
                </button>
                <button
                  onClick={nextImage}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/80 backdrop-blur-sm rounded-full p-2 hover:bg-white transition-colors duration-300"
                >
                  <ChevronRight className="w-6 h-6 text-gray-800" />
                </button>

                {/* Image Counter */}
                <div className="absolute bottom-4 left-4 bg-black/50 text-white px-3 py-1 rounded-full text-sm">
                  {currentImageIndex + 1} / {property.images.length}
                </div>

                {/* Action Buttons */}
                <div className="absolute top-4 right-4 flex space-x-2">
                  <button className="p-2 bg-white/80 backdrop-blur-sm rounded-full hover:bg-white transition-colors duration-300">
                    <Heart className="w-5 h-5 text-gray-800" />
                  </button>
                  <button className="p-2 bg-white/80 backdrop-blur-sm rounded-full hover:bg-white transition-colors duration-300">
                    <Share2 className="w-5 h-5 text-gray-800" />
                  </button>
                </div>
              </div>

              {/* Thumbnails */}
              <div className="flex p-4 space-x-2 overflow-x-auto">
                {property.images.map((img, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`flex-shrink-0 w-16 h-16 rounded-lg overflow-hidden border-2 ${
                      index === currentImageIndex ? 'border-emerald' : 'border-transparent'
                    }`}
                  >
                    <img
                      src={img}
                      alt={`${property.title} ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>

            {/* Property Details */}
            <div className="bg-white rounded-xl shadow-md p-6">
              <h1 className="text-3xl font-bold text-gray-900 mb-2">{property.title}</h1>
              <div className="flex items-center text-emerald-600 mb-6">
                <MapPin className="w-5 h-5 mr-1" />
                <span>{property.location}</span>
              </div>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <div className="text-gray-500 text-sm">Bedrooms</div>
                  <div className="flex items-center mt-1">
                    <Bed className="w-5 h-5 text-emerald-600 mr-2" />
                    <span className="font-semibold">{property.bedrooms}</span>
                  </div>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <div className="text-gray-500 text-sm">Bathrooms</div>
                  <div className="flex items-center mt-1">
                    <Bath className="w-5 h-5 text-emerald-600 mr-2" />
                    <span className="font-semibold">{property.bathrooms}</span>
                  </div>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <div className="text-gray-500 text-sm">Area</div>
                  <div className="flex items-center mt-1">
                    <Ruler className="w-5 h-5 text-emerald-600 mr-2" />
                    <span className="font-semibold">{property.area}</span>
                  </div>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <div className="text-gray-500 text-sm">Parking</div>
                  <div className="flex items-center mt-1">
                    <Car className="w-5 h-5 text-emerald-600 mr-2" />
                    <span className="font-semibold">{property.parking}</span>
                  </div>
                </div>
              </div>

              <h2 className="text-xl font-semibold mb-4">Description</h2>
              <p className="text-gray-600 mb-6">{property.description}</p>
              <p className="text-gray-600">This stunning property features floor-to-ceiling windows, a gourmet kitchen with high-end appliances, and a spacious master suite with a luxurious bathroom. The outdoor space includes a swimming pool, landscaped gardens, and multiple entertainment areas perfect for hosting gatherings.</p>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1 space-y-6">
            {/* Price Box */}
            <div className="bg-gradient-to-r from-emerald-600 to-emerald-500 text-white rounded-xl p-6 text-center shadow-lg">
              <div className="text-4xl font-bold mb-2 tracking-tight drop-shadow-md">{property.formattedPrice}</div>
              <div className="text-emerald-100 font-medium text-lg mb-4">For Sale</div>
              <button className="mt 2 w-full bg-white text-emerald-700 font-semibold py-3 px-6 rounded-lg hover:bg-opacity-90 transition-all transform hover:-translate-y-0.5 hover:shadow-md">
                Schedule a Tour
              </button>
            </div>

            {/* Contact Form */}
            <div className="bg-white rounded-xl shadow-md p-6">
              <h3 className="text-xl font-semibold mb-4">Contact Agent</h3>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={inquiryForm.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                    required
                  />
                </div>
                <div>
                  <input
                    type="email"
                    name="email"
                    placeholder="Email Address"
                    value={inquiryForm.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                    required
                  />
                </div>
                <div>
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Phone Number"
                    value={inquiryForm.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <textarea
                    name="message"
                    rows={4}
                    placeholder="Your Message"
                    value={inquiryForm.message}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-emerald-600 text-white font-semibold py-3 px-6 rounded-lg hover:bg-emerald-700 transition-colors"
                >
                  Send Message
                </button>
              </form>
            </div>

            {/* Agent Info */}
            <div className="bg-white rounded-xl shadow-md p-6">
              <h3 className="text-xl font-semibold mb-4">Listed By</h3>
              <div className="flex items-center space-x-4 mb-4">
                <img
                  src={property.agent.image}
                  alt={property.agent.name}
                  className="w-16 h-16 rounded-full object-cover border-2 border-emerald-100"
                />
                <div>
                  <h4 className="font-semibold text-gray-900">{property.agent.name}</h4>
                  <p className="text-sm text-gray-600">{property.agent.title}</p>
                  <div className="flex items-center mt-1">
                    <Star className="w-4 h-4 text-yellow-400 fill-current" />
                    <span className="text-sm text-gray-600 ml-1">{property.agent.rating} ({property.agent.propertiesSold} sold)</span>
                  </div>
                </div>
              </div>
              <div className="space-y-2">
                <a
                  href={`tel:${property.agent.phone}`}
                  className="flex items-center text-gray-700 hover:text-emerald-600 transition-colors"
                >
                  <Phone className="w-4 h-4 mr-2" />
                  {property.agent.phone}
                </a>
                <a
                  href={`mailto:${property.agent.email}`}
                  className="flex items-center text-gray-700 hover:text-emerald-600 transition-colors"
                >
                  <Mail className="w-4 h-4 mr-2" />
                  {property.agent.email}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyDetails;
