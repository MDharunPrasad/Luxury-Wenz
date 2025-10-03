import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Search, Plus, Edit, Trash2, MapPin, Bed, Bath, Ruler } from 'lucide-react';
import { motion } from 'framer-motion';
import toast from 'react-hot-toast';

// Property interface
interface Property {
  id: string;
  title: string;
  type: string;
  status: string;
  price: number;
  location: string;
  bedrooms: number;
  bathrooms: number;
  area: string;
  featured: boolean;
  thumbnail: string;
  images: string[];
  yearBuilt: number;
  parking: number;
  description: string;
  selectedAmenities: string[];
  createdAt: string;
}

const PropertiesNew = () => {
  const [properties, setProperties] = useState<Property[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');
  const [typeFilter, setTypeFilter] = useState('all');
  const [deleteConfirm, setDeleteConfirm] = useState<{ show: boolean; propertyId: string | null }>({
    show: false,
    propertyId: null,
  });

  // Load properties from localStorage on component mount
  useEffect(() => {
    const savedProperties = localStorage.getItem('admin_properties');
    const dataVersion = localStorage.getItem('admin_properties_version');
    
    // Force refresh if no version or old version
    if (savedProperties && dataVersion === '2.0') {
      const loadedProperties = JSON.parse(savedProperties);
      console.log('Loaded properties from localStorage:', loadedProperties);
      setProperties(loadedProperties);
    } else {
      // Clear old data and create new sample properties
      localStorage.removeItem('admin_properties');
      // Add sample properties when localStorage is empty
      const sampleProperties: Property[] = [
        {
          id: "1",
          title: "Luxury Penthouse with City Views",
          description: "Stunning penthouse with panoramic views, premium finishes, and a private terrace in the heart of Manhattan.",
          type: "Penthouse",
          status: "Active",
          price: 2500000,
          location: "Manhattan, NY",
          bedrooms: 3,
          bathrooms: 3,
          area: "2,500 sq ft",
          yearBuilt: 2020,
          parking: 2,
          featured: true,
          selectedAmenities: ["Swimming Pool", "Gym", "Security", "Elevator", "Air Conditioning", "City View", "Terrace"],
          thumbnail: "https://images.pexels.com/photos/1396132/pexels-photo-1396132.jpeg?auto=compress&cs=tinysrgb&w=800",
          images: [
            "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=1600",
            "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=1600",
            "https://images.unsplash.com/photo-1502005229762-cf1b2da7c52f?w=1600"
          ],
          createdAt: new Date().toISOString()
        },
        {
          id: "2",
          title: "Modern Villa with Private Pool",
          description: "Architect-designed villa featuring open spaces, smart home automation, and resort-style outdoor living.",
          type: "Villa",
          status: "Active",
          price: 4200000,
          location: "Beverly Hills, CA",
          bedrooms: 5,
          bathrooms: 4,
          area: "4,200 sq ft",
          yearBuilt: 2019,
          parking: 3,
          featured: true,
          selectedAmenities: ["Swimming Pool", "Garden", "Security", "Air Conditioning", "Heating", "Furnished"],
          thumbnail: "https://images.pexels.com/photos/1029599/pexels-photo-1029599.jpeg?auto=compress&cs=tinysrgb&w=800",
          images: [
            "https://images.unsplash.com/photo-1505691938895-1758d7feb511?w=1600",
            "https://images.unsplash.com/photo-1560185127-6ed189bf02f4?w=1600",
            "https://images.unsplash.com/photo-1572120360610-d971b9d7767c?w=1600"
          ],
          createdAt: new Date().toISOString()
        },
        {
          id: "3",
          title: "Historic Townhouse",
          description: "Beautifully renovated historic townhouse with modern amenities while preserving original character.",
          type: "Townhouse",
          status: "Active",
          price: 1800000,
          location: "Brooklyn, NY",
          bedrooms: 4,
          bathrooms: 3,
          area: "2,800 sq ft",
          yearBuilt: 1920,
          parking: 1,
          featured: false,
          selectedAmenities: ["Garden", "Fireplace", "Parking", "Furnished"],
          thumbnail: "https://images.pexels.com/photos/439391/pexels-photo-439391.jpeg?auto=compress&cs=tinysrgb&w=800",
          images: [
            "https://images.unsplash.com/photo-1523217582562-09d0def993a6?w=1600",
            "https://images.unsplash.com/photo-1502005229762-cf1b2da7c52f?w=1600",
            "https://images.unsplash.com/photo-1475855581698-2815c6a5b02e?w=1600"
          ],
          createdAt: new Date().toISOString()
        },
        {
          id: "4",
          title: "Beachfront Condo",
          description: "Luxurious beachfront condominium with panoramic ocean views and direct beach access.",
          type: "Condo",
          status: "Active",
          price: 1200000,
          location: "Miami, FL",
          bedrooms: 2,
          bathrooms: 2,
          area: "1,500 sq ft",
          yearBuilt: 2018,
          parking: 1,
          featured: true,
          selectedAmenities: ["Swimming Pool", "Gym", "Security", "Ocean View", "Balcony"],
          thumbnail: "https://images.pexels.com/photos/206172/pexels-photo-206172.jpeg?auto=compress&cs=tinysrgb&w=800",
          images: [
            "https://images.unsplash.com/photo-1501183638710-841dd1904471?w=1600",
            "https://images.unsplash.com/photo-1472120360610-d971b9d7767c?w=1600"
          ],
          createdAt: new Date().toISOString()
        },
        {
          id: "5",
          title: "Alpine Chalet Retreat",
          description: "Luxury mountain chalet with stunning alpine views, perfect for year-round relaxation.",
          type: "House",
          status: "Active",
          price: 3300000,
          location: "Aspen, CO",
          bedrooms: 4,
          bathrooms: 4,
          area: "3,100 sq ft",
          yearBuilt: 2021,
          parking: 2,
          featured: false,
          selectedAmenities: ["Fireplace", "Heating", "Parking", "Furnished"],
          thumbnail: "https://images.pexels.com/photos/1029599/pexels-photo-1029599.jpeg?auto=compress&cs=tinysrgb&w=800",
          images: [
            "https://images.unsplash.com/photo-1507089947368-19c1da9775ae?w=1600",
            "https://images.unsplash.com/photo-1502005229762-cf1b2da7c52f?w=1600"
          ],
          createdAt: new Date().toISOString()
        }
      ];
      
      localStorage.setItem('admin_properties', JSON.stringify(sampleProperties));
      localStorage.setItem('admin_properties_version', '2.0');
      setProperties(sampleProperties);
    }
  }, []);

  // Handle property deletion
  const handleDeleteProperty = (propertyId: string) => {
    setDeleteConfirm({ show: true, propertyId });
  };

  const confirmDelete = () => {
    if (deleteConfirm.propertyId) {
      const updatedProperties = properties.filter(p => p.id !== deleteConfirm.propertyId);
      setProperties(updatedProperties);
      localStorage.setItem('admin_properties', JSON.stringify(updatedProperties));
      toast.success('Property deleted successfully');
    }
    setDeleteConfirm({ show: false, propertyId: null });
  };

  const cancelDelete = () => {
    setDeleteConfirm({ show: false, propertyId: null });
  };

  // Status colors for badges
  const statusColors: Record<string, string> = {
    Active: 'bg-emerald-100 text-emerald-800 border-emerald-200',
    Draft: 'bg-amber-100 text-amber-800 border-amber-200',
    Sold: 'bg-gray-100 text-gray-800 border-gray-200',
    Pending: 'bg-blue-100 text-blue-800 border-blue-200',
  };

  // Filter properties based on search and filters
  const filteredProperties = properties.filter(property => {
    const matchesSearch = property.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         property.location.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = statusFilter === 'all' || property.status === statusFilter;
    const matchesType = typeFilter === 'all' || property.type === typeFilter;
    
    return matchesSearch && matchesStatus && matchesType;
  });

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-jet font-playfair">Properties</h1>
          <p className="text-gray-600 mt-1">Manage your luxury property listings</p>
        </div>
        <Link
          to="/admin/properties/new"
          className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-emerald to-emerald/90 text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-emerald/25 transition-all duration-200"
        >
          <Plus className="w-5 h-5 mr-2" />
          Add New Property
        </Link>
      </div>

      {/* Filters */}
      <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search properties..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-emerald/50 focus:border-emerald transition-all duration-200"
            />
          </div>
          
          <select
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
            className="px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-emerald/50 focus:border-emerald transition-all duration-200"
          >
            <option value="all">All Status</option>
            <option value="Active">Active</option>
            <option value="Draft">Draft</option>
            <option value="Pending">Pending</option>
            <option value="Sold">Sold</option>
          </select>

          <select
            value={typeFilter}
            onChange={(e) => setTypeFilter(e.target.value)}
            className="px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-emerald/50 focus:border-emerald transition-all duration-200"
          >
            <option value="all">All Types</option>
            <option value="Apartment">Apartment</option>
            <option value="House">House</option>
            <option value="Villa">Villa</option>
            <option value="Condo">Condo</option>
            <option value="Townhouse">Townhouse</option>
            <option value="Penthouse">Penthouse</option>
            <option value="Mansion">Mansion</option>
          </select>
        </div>
      </div>

      {/* Properties List */}
      {filteredProperties.length === 0 ? (
        <div className="bg-white rounded-2xl p-12 shadow-lg border border-gray-100 text-center">
          <div className="w-16 h-16 bg-gray-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
            <Search className="w-8 h-8 text-gray-400" />
          </div>
          <h3 className="text-xl font-semibold text-gray-900 mb-2">No properties found</h3>
          <p className="text-gray-600 mb-6">
            {properties.length === 0 
              ? "You haven't added any properties yet. Start by creating your first property listing."
              : "No properties match your current filters. Try adjusting your search criteria."
            }
          </p>
          <Link
            to="/admin/properties/new"
            className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-emerald to-emerald/90 text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-emerald/25 transition-all duration-200"
          >
            <Plus className="w-5 h-5 mr-2" />
            Add New Property
          </Link>
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
          {filteredProperties.map((property, index) => (
            <motion.div
              key={property.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-xl transition-all duration-300"
            >
              {/* Property Image */}
              <div className="relative h-48 bg-gray-200">
                {property.thumbnail ? (
                  <img
                    src={property.thumbnail}
                    alt={property.title}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      console.error('Image failed to load:', property.thumbnail);
                      // Use a fallback placeholder image
                      e.currentTarget.src = 'https://via.placeholder.com/400x300/e5e7eb/9ca3af?text=Property+Image';
                    }}
                    onLoad={() => {
                      console.log('Image loaded successfully:', property.thumbnail);
                    }}
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center bg-gray-100">
                    <span className="text-gray-400">No Image</span>
                  </div>
                )}
                
                {/* Featured Badge */}
                {property.featured && (
                  <div className="absolute top-3 left-3">
                    <span className="px-3 py-1 bg-champagne text-white text-xs font-semibold rounded-full">
                      Featured
                    </span>
                  </div>
                )}
                
                {/* Status Badge */}
                <div className="absolute top-3 right-3">
                  <span className={`px-3 py-1 text-xs font-semibold rounded-full border ${statusColors[property.status] || 'bg-gray-100 text-gray-800 border-gray-200'}`}>
                    {property.status}
                  </span>
                </div>
              </div>

              {/* Property Details */}
              <div className="p-6">
                <div className="mb-4">
                  <h3 className="text-xl font-bold text-jet mb-2 line-clamp-2">{property.title}</h3>
                  <div className="flex items-center text-gray-600 mb-2">
                    <MapPin className="w-4 h-4 mr-1" />
                    <span className="text-sm">{property.location}</span>
                  </div>
                  <div className="text-2xl font-bold text-champagne">
                    ${property.price.toLocaleString()}
                  </div>
                </div>

                {/* Property Stats */}
                <div className="grid grid-cols-3 gap-4 mb-6 text-sm text-gray-600">
                  <div className="flex items-center">
                    <Bed className="w-4 h-4 mr-1" />
                    <span>{property.bedrooms}</span>
                  </div>
                  <div className="flex items-center">
                    <Bath className="w-4 h-4 mr-1" />
                    <span>{property.bathrooms}</span>
                  </div>
                  <div className="flex items-center">
                    <Ruler className="w-4 h-4 mr-1" />
                    <span>{property.area} sq ft</span>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex items-center space-x-3">
                  <Link
                    to={`/admin/properties/${property.id}/edit`}
                    className="flex-1 inline-flex items-center justify-center px-4 py-2 bg-emerald/10 text-emerald font-medium rounded-lg hover:bg-emerald/20 transition-colors"
                  >
                    <Edit className="w-4 h-4 mr-1" />
                    Edit
                  </Link>
                  <button
                    onClick={() => handleDeleteProperty(property.id)}
                    className="flex-1 inline-flex items-center justify-center px-4 py-2 bg-red-50 text-red-600 font-medium rounded-lg hover:bg-red-100 transition-colors"
                  >
                    <Trash2 className="w-4 h-4 mr-1" />
                    Delete
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      )}

      {/* Delete Confirmation Modal */}
      {deleteConfirm.show && (
        <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm flex items-center justify-center z-50">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white rounded-2xl p-6 max-w-md w-full mx-4 shadow-2xl"
          >
            <div className="text-center">
              <div className="w-16 h-16 bg-red-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Trash2 className="w-8 h-8 text-red-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Delete Property</h3>
              <p className="text-gray-600 mb-6">
                Are you sure you want to delete this property? This action cannot be undone.
              </p>
              <div className="flex items-center space-x-3">
                <button
                  onClick={cancelDelete}
                  className="flex-1 px-4 py-3 border border-gray-300 text-gray-700 rounded-xl hover:bg-gray-50 transition-colors font-medium"
                >
                  Cancel
                </button>
                <button
                  onClick={confirmDelete}
                  className="flex-1 px-4 py-3 bg-red-600 text-white rounded-xl hover:bg-red-700 transition-colors font-medium"
                >
                  Delete
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </div>
  );
};

export default PropertiesNew;