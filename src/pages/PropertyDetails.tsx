import { useState } from 'react';
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
  Phone,
  Mail,
  Star,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';

const PropertyDetails = () => {
  const { id } = useParams();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % property.images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + property.images.length) % property.images.length);
  };

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
      'https://images.unsplash.com/photo-1600607687929-597b7d5f7c1a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80',
      'https://images.unsplash.com/photo-1600607688969-a5bfcd646154?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80',
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80'
    ],
    agent: {
      name: 'Sarah Johnson',
      title: 'Senior Real Estate Agent',
      phone: '(555) 123-4567',
      email: 'sarah.johnson@luxurywenz.com',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=634&q=80',
      rating: '5',
      propertiesSold: '42'
    }
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
              <div className="p-4">
                <div className="flex space-x-3 overflow-x-auto pb-2 -mx-4 px-4">
                  {property.images.map((img, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentImageIndex(index)}
                      className={`flex-shrink-0 w-24 h-20 rounded-lg overflow-hidden border-2 transition-all duration-200 transform hover:scale-105 ${index === currentImageIndex
                          ? 'border-emerald scale-105 shadow-md'
                          : 'border-gray-200 hover:border-emerald/50'
                        }`}
                    >
                      <div className="relative w-full h-full">
                        <img
                          src={img}
                          alt={`${property.title} ${index + 1}`}
                          className="w-full h-full object-cover"
                          onError={(e) => {
                            const target = e.target as HTMLImageElement;
                            target.onerror = null;
                            target.src = 'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80';
                          }}
                        />
                        {index === currentImageIndex && (
                          <div className="absolute inset-0 bg-emerald/20 mix-blend-overlay"></div>
                        )}
                      </div>
                    </button>
                  ))}
                </div>
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
              <p className="text-gray-700 mb-6 leading-relaxed">{property.description}</p>
              <p className="text-gray-600">This stunning property features floor-to-ceiling windows, a gourmet kitchen with high-end appliances, and a spacious master suite with a luxurious bathroom. The outdoor space includes a swimming pool, landscaped gardens, and multiple entertainment areas perfect for hosting gatherings.</p>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1 space-y-6">
            {/* Price Box */}
            <div className="bg-white rounded-xl shadow-md p-6">
              <div className="text-4xl font-bold text-gray-900 mb-2">{property.formattedPrice}</div>
              <div className="text-emerald-600 font-medium text-lg mb-4">For Sale</div>

              <div className="flex items-center space-x-4 mb-6">
                <div className="flex-1 border-t border-gray-200"></div>
                <span className="text-sm text-gray-500">or</span>
                <div className="flex-1 border-t border-gray-200"></div>
              </div>

              <div className="text-center">
                <div className="text-sm text-gray-500 mb-3">Est. Mortgage $9,000/mo</div>
                <button className="text-sm text-emerald-600 hover:underline">
                  Get Pre-Approved
                </button>
              </div>
            </div>

            {/* Contact Agent */}
            <div className="bg-white rounded-xl shadow-md p-6">
              <h3 className="text-xl font-semibold mb-4">Contact Agent</h3>

              {/* Agent Info */}
              <div className="flex items-center mb-6">
                <div className="relative w-16 h-16 rounded-full overflow-hidden mr-4 flex-shrink-0">
                  <img
                    src="/agent-sarah.jpg"
                    alt="Sarah Johnson"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.onerror = null;
                      target.src = 'https://randomuser.me/api/portraits/women/44.jpg';
                    }}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-semibold text-lg">Sarah Johnson</h4>
                  <p className="text-gray-600 text-sm">Real Estate Agent</p>
                  <div className="flex items-center mt-1">
                    <div className="flex text-amber-400">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Star
                          key={star}
                          className="w-4 h-4 fill-current"
                        />
                      ))}
                    </div>
                    <span className="text-sm text-gray-500 ml-1">(24 reviews)</span>
                  </div>
                </div>
              </div>

              {/* Contact  */}
              <div className="space-y-3">
                <a
                  href="tel:+1234567890"
                  className="flex items-center justify-center w-full bg-emerald-600 hover:bg-emerald-700 text-white font-medium py-3 px-4 rounded-lg transition-colors"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Call Sarah
                </a>
                <button className="w-full border border-gray-300 hover:bg-gray-50 text-gray-700 font-medium py-3 px-4 rounded-lg transition-colors">
                  Message
                </button>
              </div>

              {/* Contact Info */}
              <div className="mt-6 space-y-3 text-sm">
                <div className="flex items-center text-gray-600">
                  <Mail className="w-4 h-4 mr-2 text-emerald-600" />
                  <span>sarah.johnson@example.com</span>
                </div>
                <div className="flex items-center text-gray-600">
                  <Phone className="w-4 h-4 mr-2 text-emerald-600" />
                  <span>(555) 123-4567</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyDetails;
