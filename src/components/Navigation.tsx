import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Home, Search, Info, MessageCircle, User, Building } from 'lucide-react';

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
    { path: '/listings', label: 'Listings', icon: Search },
    { path: '/about', label: 'About', icon: Info },
    { path: '/contact', label: 'Contact', icon: MessageCircle },
  ];

  const handleAdminClick = () => {
    const isAuthenticated = localStorage.getItem('admin_token') !== null;
    if (isAuthenticated) {
      window.location.href = '/admin';
    } else {
      window.location.href = '/admin/login';
    }
  };

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled 
          ? 'bg-[#1e305e]/95 backdrop-blur-md border-b border-white/20' 
          : 'bg-[#1e305e]/90 backdrop-blur-md'
      }`}>
        <div className="container mx-auto px-4 sm:px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link to="/" className="group flex items-center space-x-3">
              <div className="w-10 h-10 rounded-full bg-gradient-to-r from-emerald to-champagne flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <Building className="w-5 h-5 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-playfair font-bold text-white">Wenzhomes</h1>
                <p className="text-xs text-champagne font-medium">Luxury Real Estate</p>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              {navItems.slice(0, -1).map((item) => {
                const Icon = item.icon;
                const isActive = location.pathname === item.path;
                
                return (
                  <Link
                    key={item.path}
                    to={item.path}
                    className={`group relative flex items-center space-x-2 px-4 py-2 rounded-full transition-all duration-300 ${
                      isActive
                        ? 'text-champagne bg-white/10'
                        : 'text-white/80 hover:text-champagne hover:bg-white/5'
                    }`}
                  >
                    <Icon className="w-4 h-4" />
                    <span className="font-medium">{item.label}</span>
                  </Link>
                );
              })}
              
              {/* Admin Button */}
              <button
                onClick={handleAdminClick}
                className="flex items-center space-x-2 px-6 py-3 rounded-full bg-gradient-to-r from-emerald to-champagne text-white font-medium hover:shadow-lg hover:scale-105 transition-all duration-300"
              >
                <User className="w-4 h-4" />
                <span>Admin</span>
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2 rounded-full backdrop-blur-md hover:bg-white/20 transition-colors duration-300 bg-white/10"
            >
              {isOpen ? <X className="w-6 h-6 text-white" /> : <Menu className="w-6 h-6 text-white" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className={`lg:hidden transition-all duration-300 overflow-hidden ${
          isOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
        }`}>
          <div className="bg-[#1e305e]/95 backdrop-blur-md border-t border-white/20">
            <div className="container mx-auto px-4 sm:px-6 py-4">
              <div className="space-y-2">
                {navItems.map((item) => {
                  const Icon = item.icon;
                  const isActive = location.pathname === item.path;
                  
                  return (
                    <Link
                      key={item.path}
                      to={item.path}
                      onClick={() => setIsOpen(false)}
                      className={`flex items-center space-x-3 px-4 py-3 rounded-lg transition-all duration-300 ${
                        isActive 
                          ? 'text-champagne bg-white/20' 
                          : 'text-white hover:text-champagne hover:bg-white/10'
                      }`}
                    >
                      <Icon className="w-5 h-5" />
                      <span className="font-medium">{item.label}</span>
                    </Link>
                  );
                })}
                
                {/* Mobile Admin Button */}
                <button
                  onClick={() => {
                    handleAdminClick();
                    setIsOpen(false);
                  }}
                  className="flex items-center space-x-3 px-4 py-3 rounded-lg bg-gradient-to-r from-emerald to-champagne text-white font-medium hover:shadow-lg transition-all duration-300 w-full"
                >
                  <User className="w-5 h-5" />
                  <span>Admin</span>
                </button>
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