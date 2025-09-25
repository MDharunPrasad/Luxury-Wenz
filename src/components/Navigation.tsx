import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Home, Search, Info, MessageCircle, User, Building2 } from 'lucide-react';

export const Navigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { path: '/', label: 'Home', icon: Home },
    { path: '/listings', label: 'Properties', icon: Search },
    { path: '/about', label: 'About', icon: Info },
    { path: '/contact', label: 'Contact', icon: MessageCircle },
  ];

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-xl border-b border-neutral-200/50 shadow-lg' 
          : 'bg-transparent'
      }`}>
        <div className="container mx-auto px-4 lg:px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link to="/" className="group flex items-center space-x-3">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-emerald-600 to-emerald-800 flex items-center justify-center group-hover:scale-105 transition-transform duration-300 shadow-lg">
                <Building2 className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-playfair font-bold text-neutral-900">Flaunt</h1>
                <p className="text-xs text-emerald-600 font-semibold tracking-wide">LUXURY PROPERTIES</p>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-2">
              {navItems.map((item) => {
                const Icon = item.icon;
                const isActive = location.pathname === item.path;
                
                return (
                  <Link
                    key={item.path}
                    to={item.path}
                    className={`group relative flex items-center space-x-2 px-6 py-3 rounded-full transition-all duration-300 ${
                      isActive 
                        ? 'text-emerald-600 bg-emerald-50' 
                        : 'text-neutral-700 hover:text-emerald-600 hover:bg-neutral-50'
                    }`}
                  >
                    <Icon className="w-4 h-4" />
                    <span className="font-medium">{item.label}</span>
                    <div className={`absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-emerald-500 to-emerald-600 transform transition-transform duration-300 ${
                      isActive ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                    }`} />
                  </Link>
                );
              })}
              
              {/* Admin Login Button */}
              <Link
                to="/admin"
                className="flex items-center space-x-2 px-6 py-3 ml-4 rounded-full bg-gradient-to-r from-emerald-600 to-emerald-700 text-white font-medium hover:shadow-lg hover:scale-105 transition-all duration-300"
              >
                <User className="w-4 h-4" />
                <span>Admin</span>
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-3 rounded-full bg-white/90 backdrop-blur-md hover:bg-white transition-colors duration-300 shadow-lg"
            >
              {isOpen ? <X className="w-5 h-5 text-neutral-900" /> : <Menu className="w-5 h-5 text-neutral-900" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className={`lg:hidden transition-all duration-300 overflow-hidden ${
          isOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
        }`}>
          <div className="bg-white/95 backdrop-blur-xl border-t border-neutral-200/50">
            <div className="container mx-auto px-4 py-4">
              <div className="space-y-2">
                {navItems.map((item) => {
                  const Icon = item.icon;
                  const isActive = location.pathname === item.path;
                  
                  return (
                    <Link
                      key={item.path}
                      to={item.path}
                      onClick={() => setIsOpen(false)}
                      className={`flex items-center space-x-3 px-4 py-3 rounded-xl transition-all duration-300 ${
                        isActive 
                          ? 'text-emerald-600 bg-emerald-50' 
                          : 'text-neutral-700 hover:text-emerald-600 hover:bg-neutral-50'
                      }`}
                    >
                      <Icon className="w-5 h-5" />
                      <span className="font-medium">{item.label}</span>
                    </Link>
                  );
                })}
                
                <Link
                  to="/admin"
                  onClick={() => setIsOpen(false)}
                  className="flex items-center space-x-3 px-4 py-3 mt-4 rounded-xl bg-gradient-to-r from-emerald-600 to-emerald-700 text-white font-medium"
                >
                  <User className="w-5 h-5" />
                  <span>Admin Login</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Spacer */}
      <div className="h-20" />
    </>
  );
};