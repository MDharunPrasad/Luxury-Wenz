import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, Plus, Edit, Trash2, Eye, MapPin, Bed, Bath, Ruler } from 'lucide-react';
import { motion } from 'framer-motion';

// Sample properties data based on your website's structure
const properties = [
  {
    id: 1,
    title: 'Luxury Penthouse with City Views',
    type: 'Apartment',
    status: 'Active',
    price: 2500000,
    location: 'Manhattan, NY',
    bedrooms: 3,
    bathrooms: 3,
    area: '2,500',
    featured: true,
    images: ['https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=1600'],
    yearBuilt: 2020,
    parking: 2,
  },
  {
    id: 2,
    title: 'Modern Villa with Ocean Views',
    type: 'Villa',
    status: 'Active',
    price: 4200000,
    location: 'Malibu, CA',
    bedrooms: 5,
    bathrooms: 4,
    area: '4,200',
    featured: true,
    images: ['https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1600'],
    yearBuilt: 2021,
    parking: 3,
  },
  {
    id: 3,
    title: 'Contemporary Downtown Condo',
    type: 'Condo',
    status: 'Draft',
    price: 1800000,
    location: 'Beverly Hills, CA',
    bedrooms: 2,
    bathrooms: 2,
    area: '1,800',
    featured: false,
    images: ['https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=1600'],
    yearBuilt: 2022,
    parking: 2,
  },
];

const statusColors = {
  Active: 'bg-emerald-100 text-emerald-800 border-emerald-200',
  Draft: 'bg-amber-100 text-amber-800 border-amber-200',
  Sold: 'bg-gray-100 text-gray-800 border-gray-200',
  Pending: 'bg-blue-100 text-blue-800 border-blue-200',
};

const Properties = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterStatus, setFilterStatus] = useState('All');
  const [filterType, setFilterType] = useState('All');

  const filteredProperties = properties.filter(property => {
    const matchesSearch = property.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         property.location.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = filterStatus === 'All' || property.status === filterStatus;
    const matchesType = filterType === 'All' || property.type === filterType;
    
    return matchesSearch && matchesStatus && matchesType;
  });

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(price);
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 font-playfair">Properties</h1>
          <p className="text-gray-600 mt-1">Manage your luxury property listings</p>
        </div>
        <Link
          to="/admin/properties/new"
          className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-amber-500 to-amber-600 text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-amber-500/25 transition-all duration-200 hover:scale-105"
        >
          <Plus className="w-5 h-5 mr-2" />
          Add New Property
        </Link>
      </div>

      {/* Filters */}
      <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {/* Search */}
          <div className="md:col-span-2">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search properties..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-all duration-200"
              />
            </div>
          </div>

          {/* Status Filter */}
          <div>
            <select
              value={filterStatus}
              onChange={(e) => setFilterStatus(e.target.value)}
              className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-all duration-200"
            >
              <option value="All">All Status</option>
              <option value="Active">Active</option>
              <option value="Draft">Draft</option>
              <option value="Sold">Sold</option>
              <option value="Pending">Pending</option>
            </select>
          </div>

          {/* Type Filter */}
          <div>
            <select
              value={filterType}
              onChange={(e) => setFilterType(e.target.value)}
              className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-all duration-200"
            >
              <option value="All">All Types</option>
              <option value="Apartment">Apartment</option>
              <option value="Villa">Villa</option>
              <option value="Condo">Condo</option>
              <option value="House">House</option>
              <option value="Townhouse">Townhouse</option>
            </select>
          </div>
        </div>
      </div>

      {/* Properties Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
        {filteredProperties.map((property, index) => (
          <motion.div
            key={property.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-xl transition-all duration-300 hover:scale-105"
          >
            {/* Property Image */}
            <div className="relative h-48 overflow-hidden">
              <img 
                src={property.images[0]} 
                alt={property.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute top-4 left-4 flex gap-2">
                <span className={`px-3 py-1 text-xs font-medium rounded-full border ${statusColors[property.status as keyof typeof statusColors]}`}>
                  {property.status}
                </span>
                {property.featured && (
                  <span className="px-3 py-1 text-xs font-medium rounded-full bg-amber-100 text-amber-800 border border-amber-200">
                    Featured
                  </span>
                )}
              </div>
              <div className="absolute top-4 right-4">
                <span className="px-3 py-1 text-xs font-medium rounded-full bg-white/90 backdrop-blur-sm text-gray-800">
                  {property.type}
                </span>
              </div>
            </div>

            {/* Property Details */}
            <div className="p-6">
              <div className="flex items-start justify-between mb-3">
                <h3 className="text-lg font-bold text-gray-900 line-clamp-2">{property.title}</h3>
              </div>

              <div className="flex items-center text-gray-600 mb-3">
                <MapPin className="w-4 h-4 mr-1" />
                <span className="text-sm">{property.location}</span>
              </div>

              <div className="text-2xl font-bold text-amber-600 mb-4">
                {formatPrice(property.price)}
              </div>

              {/* Property Features */}
              <div className="grid grid-cols-3 gap-3 mb-6">
                <div className="flex items-center text-gray-600">
                  <Bed className="w-4 h-4 mr-1" />
                  <span className="text-sm">{property.bedrooms}</span>
                </div>
                <div className="flex items-center text-gray-600">
                  <Bath className="w-4 h-4 mr-1" />
                  <span className="text-sm">{property.bathrooms}</span>
                </div>
                <div className="flex items-center text-gray-600">
                  <Ruler className="w-4 h-4 mr-1" />
                  <span className="text-sm">{property.area} sq ft</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                <Link
                  to={`/admin/properties/${property.id}`}
                  className="flex items-center px-3 py-2 text-sm font-medium text-amber-600 hover:bg-amber-50 rounded-lg transition-colors"
                >
                  <Eye className="w-4 h-4 mr-1" />
                  View
                </Link>
                <Link
                  to={`/admin/properties/${property.id}/edit`}
                  className="flex items-center px-3 py-2 text-sm font-medium text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
                >
                  <Edit className="w-4 h-4 mr-1" />
                  Edit
                </Link>
                <button className="flex items-center px-3 py-2 text-sm font-medium text-red-600 hover:bg-red-50 rounded-lg transition-colors">
                  <Trash2 className="w-4 h-4 mr-1" />
                  Delete
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Empty State */}
      {filteredProperties.length === 0 && (
        <div className="text-center py-12">
          <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <Search className="w-12 h-12 text-gray-400" />
          </div>
          <h3 className="text-lg font-medium text-gray-900 mb-2">No properties found</h3>
          <p className="text-gray-600 mb-6">Try adjusting your search criteria or add a new property.</p>
          <Link
            to="/admin/properties/new"
            className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-amber-500 to-amber-600 text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-amber-500/25 transition-all duration-200"
          >
            <Plus className="w-5 h-5 mr-2" />
            Add Your First Property
          </Link>
        </div>
      )}
    </div>
  );
};

export default Properties;