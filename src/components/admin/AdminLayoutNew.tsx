import { ReactNode, useState } from 'react';
import { Link, Outlet, useLocation, useNavigate } from 'react-router-dom';
import { 
  Home as HomeIcon,
  LogOut, 
  Menu, 
  X,
  Package,
  PlusCircle
} from 'lucide-react';

interface AdminLayoutProps {
  children?: ReactNode;
}

const navItems = [
  { name: 'Properties', path: '/admin/properties', icon: Package },
  { name: 'Add New Property', path: '/admin/properties/new', icon: PlusCircle },
];

const bottomNavItems = [
  { name: 'Go to Home', path: '/', icon: HomeIcon },
];

const AdminLayout = ({ children }: AdminLayoutProps) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('admin_token');
    navigate('/admin/login');
  };

  return (
    <div className="flex h-screen bg-gradient-to-br from-platinum to-ivory">
      {/* Mobile sidebar */}
      <div className="md:hidden">
        <div className={`fixed inset-0 z-40 ${sidebarOpen ? 'block' : 'hidden'}`}>
          <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm" onClick={() => setSidebarOpen(false)}></div>
          <div className="fixed inset-y-0 left-0 flex w-72 flex-col bg-white shadow-2xl">
            <div className="flex h-20 flex-shrink-0 items-center px-6 bg-gradient-to-r from-emerald to-emerald/90">
              <div className="flex items-center">
                <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center mr-3">
                  <Package className="w-6 h-6 text-emerald" />
                </div>
                <div>
                  <h1 className="text-xl font-bold text-white font-playfair">Luxury Wenz</h1>
                  <p className="text-white/80 text-sm">Admin Portal</p>
                </div>
              </div>
              <button
                type="button"
                className="ml-auto rounded-xl p-2 text-white hover:bg-white/20 focus:outline-none transition-colors"
                onClick={() => setSidebarOpen(false)}
              >
                <X className="h-6 w-6" />
              </button>
            </div>
            <nav className="flex-1 px-4 py-6 space-y-2">
              {navItems.map((item) => {
                const Icon = item.icon;
                const isActive = location.pathname === item.path;
                return (
                  <Link
                    key={item.name}
                    to={item.path}
                    className={`flex items-center px-4 py-3 text-sm font-medium rounded-xl transition-all duration-200 ${
                      isActive
                        ? 'bg-gradient-to-r from-emerald to-emerald/90 text-white shadow-lg shadow-emerald/25'
                        : 'text-gray-700 hover:bg-champagne/10 hover:text-emerald'
                    }`}
                    onClick={() => setSidebarOpen(false)}
                  >
                    <Icon className={`mr-3 h-5 w-5 ${isActive ? 'text-white' : 'text-gray-500'}`} />
                    {item.name}
                  </Link>
                );
              })}
            </nav>
            <div className="border-t border-gray-200 p-4 space-y-2">
              {bottomNavItems.map((item) => {
                const Icon = item.icon;
                return (
                  <Link
                    key={item.name}
                    to={item.path}
                    className="flex items-center px-4 py-3 text-sm font-medium text-gray-700 hover:bg-champagne/10 hover:text-emerald rounded-xl transition-all duration-200"
                  >
                    <Icon className="mr-3 h-5 w-5 text-gray-500" />
                    {item.name}
                  </Link>
                );
              })}
              <button
                onClick={handleLogout}
                className="flex w-full items-center px-4 py-3 text-sm font-medium text-red-700 hover:bg-red-50 hover:text-red-900 rounded-xl transition-all duration-200"
              >
                <LogOut className="mr-3 h-5 w-5 text-red-500" />
                Logout
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Desktop sidebar */}
      <div className="hidden md:flex md:w-72 md:flex-col md:fixed md:inset-y-0">
        <div className="flex flex-col flex-1 min-h-0 bg-white shadow-xl">
          <div className="flex h-20 flex-shrink-0 items-center px-6 bg-gradient-to-r from-emerald to-emerald/90">
            <div className="flex items-center">
              <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center mr-3">
                <Package className="w-6 h-6 text-emerald" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-white font-playfair">Luxury Wenz</h1>
                <p className="text-white/80 text-sm">Admin Portal</p>
              </div>
            </div>
          </div>
          <nav className="flex-1 px-4 py-6 space-y-2 bg-white overflow-y-auto">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = location.pathname === item.path;
              return (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`flex items-center px-4 py-3 text-sm font-medium rounded-xl transition-all duration-200 ${
                    isActive
                      ? 'bg-gradient-to-r from-emerald to-emerald/90 text-white shadow-lg shadow-emerald/25'
                      : 'text-gray-700 hover:bg-champagne/10 hover:text-emerald'
                  }`}
                >
                  <Icon className={`mr-3 h-5 w-5 ${isActive ? 'text-white' : 'text-gray-500'}`} />
                  {item.name}
                </Link>
              );
            })}
          </nav>
          <div className="border-t border-gray-200 p-4 space-y-2 bg-white">
            {bottomNavItems.map((item) => {
              const Icon = item.icon;
              return (
                <Link
                  key={item.name}
                  to={item.path}
                  className="flex items-center px-4 py-3 text-sm font-medium text-gray-700 hover:bg-champagne/10 hover:text-emerald rounded-xl transition-all duration-200"
                >
                  <Icon className="mr-3 h-5 w-5 text-gray-500" />
                  {item.name}
                </Link>
              );
            })}
            <button
              onClick={handleLogout}
              className="flex w-full items-center px-4 py-3 text-sm font-medium text-red-700 hover:bg-red-50 hover:text-red-900 rounded-xl transition-all duration-200"
            >
              <LogOut className="mr-3 h-5 w-5 text-red-500" />
              Logout
            </button>
          </div>
        </div>
      </div>

      {/* Main content */}
      <div className="flex flex-1 flex-col md:ml-72">
        {/* Mobile header */}
        <div className="md:hidden flex items-center justify-between h-16 px-4 bg-white shadow-sm border-b border-gray-200">
          <button
            type="button"
            className="rounded-xl p-2 text-gray-600 hover:bg-gray-100 focus:outline-none transition-colors"
            onClick={() => setSidebarOpen(true)}
          >
            <Menu className="h-6 w-6" />
          </button>
          <div className="flex items-center">
            <div className="w-8 h-8 bg-gradient-to-r from-emerald to-emerald/90 rounded-lg flex items-center justify-center mr-2">
              <Package className="w-5 h-5 text-white" />
            </div>
            <h1 className="text-lg font-bold text-gray-900 font-playfair">Admin</h1>
          </div>
          <div className="w-10"></div>
        </div>

        {/* Page content */}
        <main className="flex-1 overflow-y-auto bg-gradient-to-br from-platinum to-ivory min-h-screen">
          <div className="p-6">
            {children || <Outlet />}
          </div>
        </main>
      </div>
    </div>
  );
};

export default AdminLayout;