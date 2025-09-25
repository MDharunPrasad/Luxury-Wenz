import React, { useState } from 'react';
import { 
  Home, Users, MessageCircle, Plus, Edit, Trash2, 
  Eye, TrendingUp, DollarSign, Calendar, Search,
  Filter, MoreVertical, Star, Phone, Mail
} from 'lucide-react';

const mockProperties = [
  {
    id: 1,
    title: "Luxury Penthouse with City Views",
    location: "Bandra West, Mumbai",
    price: "₹12.5 Cr",
    type: "Penthouse",
    status: "Active",
    views: 245,
    inquiries: 12,
    image: "https://images.pexels.com/photos/1396132/pexels-photo-1396132.jpeg?auto=compress&cs=tinysrgb&w=300"
  },
  {
    id: 2,
    title: "Modern Villa with Private Pool",
    location: "Whitefield, Bangalore",
    price: "₹8.75 Cr",
    type: "Villa",
    status: "Active",
    views: 189,
    inquiries: 8,
    image: "https://images.pexels.com/photos/1029599/pexels-photo-1029599.jpeg?auto=compress&cs=tinysrgb&w=300"
  },
  {
    id: 3,
    title: "Contemporary Apartment",
    location: "Cyber City, Gurgaon",
    price: "₹3.2 Cr",
    type: "Apartment",
    status: "Sold",
    views: 156,
    inquiries: 15,
    image: "https://images.pexels.com/photos/439391/pexels-photo-439391.jpeg?auto=compress&cs=tinysrgb&w=300"
  }
];

const mockLeads = [
  {
    id: 1,
    name: "Rajesh Kumar",
    email: "rajesh@email.com",
    phone: "+91 98765 43210",
    property: "Luxury Penthouse with City Views",
    status: "New",
    date: "2024-01-15",
    budget: "₹10-15 Cr"
  },
  {
    id: 2,
    name: "Priya Sharma",
    email: "priya@email.com",
    phone: "+91 87654 32109",
    property: "Modern Villa with Private Pool",
    status: "Contacted",
    date: "2024-01-14",
    budget: "₹8-10 Cr"
  },
  {
    id: 3,
    name: "Vikram Singh",
    email: "vikram@email.com",
    phone: "+91 76543 21098",
    property: "Contemporary Apartment",
    status: "Qualified",
    date: "2024-01-13",
    budget: "₹3-5 Cr"
  }
];

export const AdminDashboard: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'overview' | 'properties' | 'leads'>('overview');
  const [showAddProperty, setShowAddProperty] = useState(false);

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Active': return 'bg-emerald-100 text-emerald-700';
      case 'Sold': return 'bg-blue-100 text-blue-700';
      case 'New': return 'bg-yellow-100 text-yellow-700';
      case 'Contacted': return 'bg-blue-100 text-blue-700';
      case 'Qualified': return 'bg-emerald-100 text-emerald-700';
      default: return 'bg-neutral-100 text-neutral-700';
    }
  };

  return (
    <div className="min-h-screen bg-neutral-50">
      {/* Header */}
      <div className="bg-white border-b border-neutral-200">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold text-neutral-900">Admin Dashboard</h1>
            <button
              onClick={() => setShowAddProperty(true)}
              className="flex items-center space-x-2 px-4 py-2 rounded-xl bg-gradient-to-r from-emerald-600 to-emerald-500 text-white font-medium hover:shadow-lg transition-all duration-300"
            >
              <Plus className="w-4 h-4" />
              <span>Add Property</span>
            </button>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 py-8">
        {/* Navigation Tabs */}
        <div className="flex space-x-1 mb-8 bg-white rounded-2xl p-1 shadow-sm border border-neutral-100 w-fit">
          <button
            onClick={() => setActiveTab('overview')}
            className={`flex items-center space-x-2 px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
              activeTab === 'overview'
                ? 'bg-emerald-600 text-white shadow-sm'
                : 'text-neutral-600 hover:text-emerald-600'
            }`}
          >
            <TrendingUp className="w-4 h-4" />
            <span>Overview</span>
          </button>
          <button
            onClick={() => setActiveTab('properties')}
            className={`flex items-center space-x-2 px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
              activeTab === 'properties'
                ? 'bg-emerald-600 text-white shadow-sm'
                : 'text-neutral-600 hover:text-emerald-600'
            }`}
          >
            <Home className="w-4 h-4" />
            <span>Properties</span>
          </button>
          <button
            onClick={() => setActiveTab('leads')}
            className={`flex items-center space-x-2 px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
              activeTab === 'leads'
                ? 'bg-emerald-600 text-white shadow-sm'
                : 'text-neutral-600 hover:text-emerald-600'
            }`}
          >
            <Users className="w-4 h-4" />
            <span>Leads</span>
          </button>
        </div>

        {/* Overview Tab */}
        {activeTab === 'overview' && (
          <div className="space-y-8">
            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white rounded-2xl p-6 shadow-sm border border-neutral-100">
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 bg-emerald-100 rounded-2xl flex items-center justify-center">
                    <Home className="w-6 h-6 text-emerald-600" />
                  </div>
                  <span className="text-emerald-600 text-sm font-medium">+12%</span>
                </div>
                <div className="text-2xl font-bold text-neutral-900 mb-1">24</div>
                <div className="text-neutral-600 text-sm">Active Properties</div>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-sm border border-neutral-100">
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-2xl flex items-center justify-center">
                    <Users className="w-6 h-6 text-blue-600" />
                  </div>
                  <span className="text-blue-600 text-sm font-medium">+8%</span>
                </div>
                <div className="text-2xl font-bold text-neutral-900 mb-1">156</div>
                <div className="text-neutral-600 text-sm">Total Leads</div>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-sm border border-neutral-100">
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 bg-yellow-100 rounded-2xl flex items-center justify-center">
                    <DollarSign className="w-6 h-6 text-yellow-600" />
                  </div>
                  <span className="text-yellow-600 text-sm font-medium">+15%</span>
                </div>
                <div className="text-2xl font-bold text-neutral-900 mb-1">₹45Cr</div>
                <div className="text-neutral-600 text-sm">Total Value</div>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-sm border border-neutral-100">
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 bg-purple-100 rounded-2xl flex items-center justify-center">
                    <MessageCircle className="w-6 h-6 text-purple-600" />
                  </div>
                  <span className="text-purple-600 text-sm font-medium">+5%</span>
                </div>
                <div className="text-2xl font-bold text-neutral-900 mb-1">89</div>
                <div className="text-neutral-600 text-sm">Inquiries</div>
              </div>
            </div>

            {/* Recent Activity */}
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-neutral-100">
              <h2 className="text-xl font-bold text-neutral-900 mb-6">Recent Activity</h2>
              <div className="space-y-4">
                <div className="flex items-center space-x-4 p-4 bg-neutral-50 rounded-xl">
                  <div className="w-10 h-10 bg-emerald-100 rounded-full flex items-center justify-center">
                    <Plus className="w-5 h-5 text-emerald-600" />
                  </div>
                  <div className="flex-1">
                    <p className="font-medium text-neutral-900">New property added</p>
                    <p className="text-sm text-neutral-600">Luxury Penthouse in Bandra West</p>
                  </div>
                  <span className="text-sm text-neutral-500">2 hours ago</span>
                </div>
                <div className="flex items-center space-x-4 p-4 bg-neutral-50 rounded-xl">
                  <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                    <Users className="w-5 h-5 text-blue-600" />
                  </div>
                  <div className="flex-1">
                    <p className="font-medium text-neutral-900">New lead received</p>
                    <p className="text-sm text-neutral-600">Rajesh Kumar interested in Villa</p>
                  </div>
                  <span className="text-sm text-neutral-500">4 hours ago</span>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Properties Tab */}
        {activeTab === 'properties' && (
          <div className="space-y-6">
            {/* Search and Filter */}
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="flex-1 relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-neutral-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search properties..."
                  className="w-full pl-12 pr-4 py-3 rounded-2xl border border-neutral-200 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                />
              </div>
              <button className="flex items-center space-x-2 px-6 py-3 rounded-2xl border border-neutral-200 hover:border-emerald-500 transition-colors duration-300">
                <Filter className="w-4 h-4" />
                <span>Filter</span>
              </button>
            </div>

            {/* Properties List */}
            <div className="bg-white rounded-2xl shadow-sm border border-neutral-100 overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-neutral-50 border-b border-neutral-200">
                    <tr>
                      <th className="text-left py-4 px-6 font-semibold text-neutral-900">Property</th>
                      <th className="text-left py-4 px-6 font-semibold text-neutral-900">Price</th>
                      <th className="text-left py-4 px-6 font-semibold text-neutral-900">Status</th>
                      <th className="text-left py-4 px-6 font-semibold text-neutral-900">Views</th>
                      <th className="text-left py-4 px-6 font-semibold text-neutral-900">Inquiries</th>
                      <th className="text-left py-4 px-6 font-semibold text-neutral-900">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {mockProperties.map((property) => (
                      <tr key={property.id} className="border-b border-neutral-100 hover:bg-neutral-50">
                        <td className="py-4 px-6">
                          <div className="flex items-center space-x-4">
                            <img
                              src={property.image}
                              alt={property.title}
                              className="w-16 h-16 rounded-xl object-cover"
                            />
                            <div>
                              <h3 className="font-semibold text-neutral-900">{property.title}</h3>
                              <p className="text-sm text-neutral-600">{property.location}</p>
                            </div>
                          </div>
                        </td>
                        <td className="py-4 px-6 font-semibold text-emerald-600">{property.price}</td>
                        <td className="py-4 px-6">
                          <span className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(property.status)}`}>
                            {property.status}
                          </span>
                        </td>
                        <td className="py-4 px-6 text-neutral-600">{property.views}</td>
                        <td className="py-4 px-6 text-neutral-600">{property.inquiries}</td>
                        <td className="py-4 px-6">
                          <div className="flex items-center space-x-2">
                            <button className="p-2 rounded-lg hover:bg-neutral-100 transition-colors duration-300">
                              <Eye className="w-4 h-4 text-neutral-600" />
                            </button>
                            <button className="p-2 rounded-lg hover:bg-neutral-100 transition-colors duration-300">
                              <Edit className="w-4 h-4 text-neutral-600" />
                            </button>
                            <button className="p-2 rounded-lg hover:bg-neutral-100 transition-colors duration-300">
                              <Trash2 className="w-4 h-4 text-red-600" />
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {/* Leads Tab */}
        {activeTab === 'leads' && (
          <div className="space-y-6">
            {/* Search and Filter */}
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="flex-1 relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-neutral-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search leads..."
                  className="w-full pl-12 pr-4 py-3 rounded-2xl border border-neutral-200 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                />
              </div>
              <button className="flex items-center space-x-2 px-6 py-3 rounded-2xl border border-neutral-200 hover:border-emerald-500 transition-colors duration-300">
                <Filter className="w-4 h-4" />
                <span>Filter</span>
              </button>
            </div>

            {/* Leads List */}
            <div className="bg-white rounded-2xl shadow-sm border border-neutral-100 overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-neutral-50 border-b border-neutral-200">
                    <tr>
                      <th className="text-left py-4 px-6 font-semibold text-neutral-900">Contact</th>
                      <th className="text-left py-4 px-6 font-semibold text-neutral-900">Property Interest</th>
                      <th className="text-left py-4 px-6 font-semibold text-neutral-900">Budget</th>
                      <th className="text-left py-4 px-6 font-semibold text-neutral-900">Status</th>
                      <th className="text-left py-4 px-6 font-semibold text-neutral-900">Date</th>
                      <th className="text-left py-4 px-6 font-semibold text-neutral-900">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {mockLeads.map((lead) => (
                      <tr key={lead.id} className="border-b border-neutral-100 hover:bg-neutral-50">
                        <td className="py-4 px-6">
                          <div>
                            <h3 className="font-semibold text-neutral-900">{lead.name}</h3>
                            <p className="text-sm text-neutral-600">{lead.email}</p>
                            <p className="text-sm text-neutral-600">{lead.phone}</p>
                          </div>
                        </td>
                        <td className="py-4 px-6">
                          <p className="text-sm text-neutral-900">{lead.property}</p>
                        </td>
                        <td className="py-4 px-6 font-semibold text-emerald-600">{lead.budget}</td>
                        <td className="py-4 px-6">
                          <span className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(lead.status)}`}>
                            {lead.status}
                          </span>
                        </td>
                        <td className="py-4 px-6 text-neutral-600">{lead.date}</td>
                        <td className="py-4 px-6">
                          <div className="flex items-center space-x-2">
                            <button className="p-2 rounded-lg hover:bg-neutral-100 transition-colors duration-300">
                              <Phone className="w-4 h-4 text-emerald-600" />
                            </button>
                            <button className="p-2 rounded-lg hover:bg-neutral-100 transition-colors duration-300">
                              <Mail className="w-4 h-4 text-blue-600" />
                            </button>
                            <button className="p-2 rounded-lg hover:bg-neutral-100 transition-colors duration-300">
                              <MoreVertical className="w-4 h-4 text-neutral-600" />
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Add Property Modal */}
      {showAddProperty && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-3xl p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-neutral-900">Add New Property</h2>
              <button
                onClick={() => setShowAddProperty(false)}
                className="p-2 rounded-full hover:bg-neutral-100 transition-colors duration-300"
              >
                <Plus className="w-6 h-6 text-neutral-600 rotate-45" />
              </button>
            </div>
            
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-neutral-700 mb-2">Property Title</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 rounded-xl border border-neutral-200 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                    placeholder="Enter property title"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-neutral-700 mb-2">Property Type</label>
                  <select className="w-full px-4 py-3 rounded-xl border border-neutral-200 focus:outline-none focus:ring-2 focus:ring-emerald-500">
                    <option>Select type</option>
                    <option>Apartment</option>
                    <option>Villa</option>
                    <option>Penthouse</option>
                    <option>Townhouse</option>
                  </select>
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-neutral-700 mb-2">Location</label>
                <input
                  type="text"
                  className="w-full px-4 py-3 rounded-xl border border-neutral-200 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                  placeholder="Enter property location"
                />
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <label className="block text-sm font-medium text-neutral-700 mb-2">Price</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 rounded-xl border border-neutral-200 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                    placeholder="₹ 0"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-neutral-700 mb-2">Bedrooms</label>
                  <input
                    type="number"
                    className="w-full px-4 py-3 rounded-xl border border-neutral-200 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                    placeholder="0"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-neutral-700 mb-2">Bathrooms</label>
                  <input
                    type="number"
                    className="w-full px-4 py-3 rounded-xl border border-neutral-200 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                    placeholder="0"
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-neutral-700 mb-2">Description</label>
                <textarea
                  rows={4}
                  className="w-full px-4 py-3 rounded-xl border border-neutral-200 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                  placeholder="Enter property description"
                />
              </div>
              
              <div className="flex gap-4">
                <button
                  type="button"
                  onClick={() => setShowAddProperty(false)}
                  className="flex-1 py-3 rounded-xl border border-neutral-200 text-neutral-700 font-medium hover:bg-neutral-50 transition-colors duration-300"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="flex-1 py-3 rounded-xl bg-gradient-to-r from-emerald-600 to-emerald-500 text-white font-medium hover:shadow-lg transition-all duration-300"
                >
                  Add Property
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};