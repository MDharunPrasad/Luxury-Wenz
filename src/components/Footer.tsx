import React from 'react';
import { Building, Mail, Phone, MapPin } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="mt-16 bg-white/80 backdrop-blur-md border-t border-white/20">
      <div className="container mx-auto px-4 sm:px-6 py-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex items-start space-x-3">
            <div className="w-10 h-10 rounded-full bg-gradient-to-r from-emerald to-champagne flex items-center justify-center">
              <Building className="w-5 h-5 text-white" />
            </div>
            <div>
              <h3 className="font-playfair font-bold text-xl text-jet">Wenzhomes</h3>
              <p className="text-gray-600 mt-1">Luxury Real Estate</p>
            </div>
          </div>
          <div className="space-y-2">
            <div className="flex items-center space-x-2 text-gray-700">
              <MapPin className="w-4 h-4" />
              <span>123 Luxury Avenue, Manhattan, NY</span>
            </div>
            <div className="flex items-center space-x-2 text-gray-700">
              <Phone className="w-4 h-4" />
              <span>+1 (555) 123-4567</span>
            </div>
            <div className="flex items-center space-x-2 text-gray-700">
              <Mail className="w-4 h-4" />
              <span>info@wenzhomes.com</span>
            </div>
          </div>
          <div className="text-gray-600 md:text-right">
            <p>© {new Date().getFullYear()} Wenzhomes. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};


