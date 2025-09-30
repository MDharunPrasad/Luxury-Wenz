import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { Home, DollarSign, Eye, Package, ArrowUpRight, Plus } from 'lucide-react';
import { Link } from 'react-router-dom';

const stats = [
  { name: 'Total Properties', value: '12', change: '+2', changeType: 'positive', icon: Home },
  { name: 'Total Revenue', value: '$2.4M', change: '+12%', changeType: 'positive', icon: DollarSign },
  { name: 'Total Views', value: '1,234', change: '+24%', changeType: 'positive', icon: Eye },
  { name: 'Active Listings', value: '8', change: '+3', changeType: 'positive', icon: Package },
];

const recentProperties = [
  { 
    id: 1, 
    name: 'Luxury Villa in Beverly Hills', 
    status: 'Active', 
    price: '$2,450,000', 
    date: '2023-10-15' 
  },
  { 
    id: 2, 
    name: 'Modern Downtown Apartment', 
    status: 'Active', 
    price: '$1,200,000', 
    date: '2023-10-10' 
  },
  { 
    id: 3, 
    name: 'Beachfront Property Malibu', 
    status: 'Draft', 
    price: '$3,500,000', 
    date: '2023-10-05' 
  },
];

const chartData = [
  { name: 'Jan', value: 4000 },
  { name: 'Feb', value: 3000 },
  { name: 'Mar', value: 5000 },
  { name: 'Apr', value: 2780 },
  { name: 'May', value: 1890 },
  { name: 'Jun', value: 2390 },
];

export default function Dashboard() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>
        <div className="flex items-center space-x-2 text-sm text-gray-500">
          <span>Last updated: {new Date().toLocaleDateString()}</span>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => (
          <div key={stat.name} className="bg-white overflow-hidden shadow rounded-lg">
            <div className="p-5">
              <div className="flex items-center">
                <div className="flex-shrink-0 bg-emerald-100 rounded-md p-3">
                  <stat.icon className="h-6 w-6 text-emerald-600" />
                </div>
                <div className="ml-5 w-0 flex-1">
                  <dl>
                    <dt className="text-sm font-medium text-gray-500 truncate">{stat.name}</dt>
                    <dd>
                      <div className="text-lg font-medium text-gray-900">{stat.value}</div>
                    </dd>
                  </dl>
                </div>
              </div>
            </div>
            <div className="bg-gray-50 px-5 py-3">
              <div className="text-sm">
                <span className={`font-medium ${stat.changeType === 'positive' ? 'text-emerald-600' : 'text-red-600'}`}>
                  {stat.change}
                </span>{' '}
                <span className="text-gray-500">from last month</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Charts and Recent Activity */}
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        {/* Revenue Chart */}
        <div className="bg-white shadow rounded-lg p-6 lg:col-span-2">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-medium text-gray-900">Revenue Overview</h2>
            <div className="flex items-center text-sm text-emerald-600 hover:text-emerald-700">
              <span>View all</span>
              <ArrowUpRight className="ml-1 h-4 w-4" />
            </div>
          </div>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={chartData}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="value" fill="#059669" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Recent Properties */}
        <div className="bg-white shadow rounded-lg overflow-hidden">
          <div className="px-6 py-5 border-b border-gray-200">
            <h2 className="text-lg font-medium text-gray-900">Recent Properties</h2>
          </div>
          <div className="divide-y divide-gray-200">
            {recentProperties.length > 0 ? (
              recentProperties.map((property) => (
                <div key={property.id} className="px-6 py-4 hover:bg-gray-50">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-emerald-600 truncate">{property.name}</p>
                      <p className="mt-1 text-sm text-gray-500">{property.price}</p>
                    </div>
                    <div className="ml-2 flex-shrink-0 flex">
                      <p className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                        property.status === 'Active' ? 'bg-green-100 text-green-800' : 
                        property.status === 'Pending' ? 'bg-yellow-100 text-yellow-800' :
                        'bg-gray-100 text-gray-800'
                      }`}>
                        {property.status}
                      </p>
                    </div>
                  </div>
                  <div className="mt-2 text-sm text-gray-500">
                    Added on {new Date(property.date).toLocaleDateString()}
                  </div>
                </div>
              ))
            ) : (
              <div className="px-6 py-8 text-center">
                <svg
                  className="mx-auto h-12 w-12 text-gray-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                  />
                </svg>
                <h3 className="mt-2 text-sm font-medium text-gray-900">No properties</h3>
                <p className="mt-1 text-sm text-gray-500">Get started by adding a new property.</p>
                <div className="mt-6">
                  <Link
                    to="/admin/properties/new"
                    className="inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-emerald-600 hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500"
                  >
                    <Plus className="-ml-1 mr-2 h-5 w-5" />
                    New Property
                  </Link>
                </div>
              </div>
            )}
          </div>
          <div className="bg-gray-50 px-6 py-4 text-right text-sm">
            <Link to="/admin/properties" className="font-medium text-emerald-600 hover:text-emerald-500">
              View all properties<span className="sr-only"> properties</span>
            </Link>
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="bg-white shadow rounded-lg overflow-hidden">
        <div className="px-6 py-5 border-b border-gray-200">
          <h2 className="text-lg font-medium text-gray-900">Quick Actions</h2>
        </div>
        <div className="bg-gray-50 px-6 py-4 grid grid-cols-1 gap-4 sm:grid-cols-3">
          <Link
            to="/admin/properties/new"
            className="inline-flex items-center justify-center px-4 py-3 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-emerald-600 hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500"
          >
            Add New Property
          </Link>
          <Link
            to="/admin/properties"
            className="inline-flex items-center justify-center px-4 py-3 border border-gray-300 text-sm font-medium rounded-md shadow-sm text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500"
          >
            Manage Properties
          </Link>
          <Link
            to="/admin/settings"
            className="inline-flex items-center justify-center px-4 py-3 border border-transparent text-sm font-medium rounded-md text-emerald-700 bg-emerald-100 hover:bg-emerald-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500"
          >
            System Settings
          </Link>
        </div>
      </div>
    </div>
  );
}
