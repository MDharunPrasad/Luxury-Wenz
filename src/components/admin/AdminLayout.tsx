import { ReactNode, useState } from 'react';
import { Link, Outlet, useLocation, useNavigate } from 'react-router-dom';
import { 
  LayoutDashboard, 
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
  { name: 'Dashboard', path: '/admin', icon: LayoutDashboard },
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
    <div className="flex h-screen bg-gray-50">
      {/* Mobile sidebar */}
      <div className="md:hidden">
        <div className={`fixed inset-0 z-40 ${sidebarOpen ? 'block' : 'hidden'}`}>
          <div className="fixed inset-0 bg-gray-600 bg-opacity-75" onClick={() => setSidebarOpen(false)}></div>
          <div className="fixed inset-y-0 left-0 flex w-64 flex-col bg-white">
            <div className="flex h-16 flex-shrink-0 items-center px-4 bg-amber-600">
              <h1 className="text-xl font-bold text-white">Admin Panel</h1>
              <button
                type="button"
                className="ml-auto rounded-md p-2 text-white hover:bg-amber-700 focus:outline-none"
                onClick={() => setSidebarOpen(false)}
              >
                <X className="h-6 w-6" />
              </button>
            </div>
            <div className="flex flex-1 flex-col overflow-y-auto">
              <nav className="flex-1 space-y-1 px-2 py-4">
                {navItems.map((item) => (
                  <Link
                    key={item.name}
                    to={item.path}
                    className={`group flex items-center px-2 py-2 text-sm font-medium rounded-md ${
                      location.pathname === item.path
                        ? 'bg-amber-100 text-amber-900'
                        : 'text-gray-600 hover:bg-gray-100 hover:text-gray-900'
                    }`}
                  >
                    <item.icon
                      className={`mr-3 h-5 w-5 flex-shrink-0 ${
                        location.pathname === item.path ? 'text-amber-500' : 'text-gray-400 group-hover:text-gray-500'
                      }`}
                      aria-hidden="true"
                    />
                    {item.name}
                  </Link>
                ))}
              </nav>
              <div className="flex flex-shrink-0 border-t border-gray-200 p-4">
                <button
                  onClick={handleLogout}
                  className="group flex w-full items-center rounded-md px-2 py-2 text-sm font-medium text-gray-600 hover:bg-gray-100 hover:text-gray-900"
                >
                  <LogOut className="mr-3 h-5 w-5 text-gray-400 group-hover:text-gray-500" />
                  Logout
                </button>
              </div>
              <div className="border-t border-gray-200 p-4">
                {bottomNavItems.map((item) => (
                  <Link
                    key={item.name}
                    to={item.path}
                    className="group flex items-center rounded-md px-2 py-2 text-sm font-medium text-gray-600 hover:bg-gray-100 hover:text-gray-900"
                  >
                    <item.icon className="mr-3 h-5 w-5 text-gray-400 group-hover:text-gray-500" />
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Desktop sidebar */}
      <div className="hidden md:fixed md:inset-y-0 md:flex md:w-64 md:flex-col">
        <div className="flex min-h-0 flex-1 flex-col border-r border-gray-200 bg-white">
          <div className="flex h-16 flex-shrink-0 items-center px-4 bg-amber-600">
            <h1 className="text-xl font-bold text-white">Admin Panel</h1>
          </div>
          <div className="flex flex-1 flex-col overflow-y-auto">
            <nav className="flex-1 space-y-1 px-2 py-4">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`group flex items-center px-2 py-2 text-sm font-medium rounded-md ${
                    location.pathname === item.path
                      ? 'bg-amber-100 text-amber-900'
                      : 'text-gray-600 hover:bg-gray-100 hover:text-gray-900'
                  }`}
                >
                  <item.icon
                    className={`mr-3 h-5 w-5 flex-shrink-0 ${
                      location.pathname === item.path ? 'text-amber-500' : 'text-gray-400 group-hover:text-gray-500'
                    }`}
                    aria-hidden="true"
                  />
                  {item.name}
                </Link>
              ))}
            </nav>
            <div className="flex flex-shrink-0 border-t border-gray-200 p-4">
              <button
                onClick={handleLogout}
                className="group flex w-full items-center rounded-md px-2 py-2 text-sm font-medium text-gray-600 hover:bg-gray-100 hover:text-gray-900"
              >
                <LogOut className="mr-3 h-5 w-5 text-gray-400 group-hover:text-gray-500" />
                Logout
              </button>
            </div>
            <div className="border-t border-gray-200 p-4">
              {bottomNavItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className="group flex items-center rounded-md px-2 py-2 text-sm font-medium text-gray-600 hover:bg-gray-100 hover:text-gray-900"
                >
                  <item.icon className="mr-3 h-5 w-5 text-gray-400 group-hover:text-gray-500" />
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-1 flex-col md:pl-64">
        <div className="sticky top-0 z-10 flex h-16 flex-shrink-0 bg-white shadow">
          <button
            type="button"
            className="border-r border-gray-200 px-4 text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-amber-500 md:hidden"
            onClick={() => setSidebarOpen(true)}
          >
            <span className="sr-only">Open sidebar</span>
            <Menu className="h-6 w-6" aria-hidden="true" />
          </button>
          <div className="flex flex-1 justify-between px-4">
            <div className="flex flex-1">
              <h2 className="text-xl font-semibold text-gray-900 my-auto">
                {navItems.find((item) => item.path === location.pathname)?.name || 'Dashboard'}
              </h2>
            </div>
          </div>
        </div>

        <main className="flex-1 overflow-y-auto p-6 bg-gray-50">
          {children || <Outlet />}
        </main>
      </div>
    </div>
  );
};

export default AdminLayout;
