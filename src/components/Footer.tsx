import React from 'react';
import { Building2, Phone, Mail, MapPin, Facebook, Twitter, Instagram, Linkedin, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-neutral-900 text-white">
      <div className="container mx-auto px-6">
        {/* Main Footer Content */}
        <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-emerald-500 to-emerald-600 flex items-center justify-center">
                <Building2 className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-playfair font-bold">Flaunt</h3>
                <p className="text-xs text-emerald-400 font-semibold tracking-wide">LUXURY PROPERTIES</p>
              </div>
            </div>
            <p className="text-neutral-400 mb-6 leading-relaxed">
              Your trusted partner in finding premium properties across India's major cities. 
              We specialize in luxury residential and commercial real estate.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="p-3 rounded-full bg-neutral-800 hover:bg-emerald-600 transition-colors duration-300">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="p-3 rounded-full bg-neutral-800 hover:bg-emerald-600 transition-colors duration-300">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="p-3 rounded-full bg-neutral-800 hover:bg-emerald-600 transition-colors duration-300">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="p-3 rounded-full bg-neutral-800 hover:bg-emerald-600 transition-colors duration-300">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-white">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-neutral-400 hover:text-emerald-400 transition-colors duration-300 flex items-center group">
                  <ArrowRight className="w-4 h-4 mr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  Home
                </Link>
              </li>
              <li>
                <Link to="/listings" className="text-neutral-400 hover:text-emerald-400 transition-colors duration-300 flex items-center group">
                  <ArrowRight className="w-4 h-4 mr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  Properties
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-neutral-400 hover:text-emerald-400 transition-colors duration-300 flex items-center group">
                  <ArrowRight className="w-4 h-4 mr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-neutral-400 hover:text-emerald-400 transition-colors duration-300 flex items-center group">
                  <ArrowRight className="w-4 h-4 mr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Property Types */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-white">Property Types</h4>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-neutral-400 hover:text-emerald-400 transition-colors duration-300 flex items-center group">
                  <ArrowRight className="w-4 h-4 mr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  Apartments
                </a>
              </li>
              <li>
                <a href="#" className="text-neutral-400 hover:text-emerald-400 transition-colors duration-300 flex items-center group">
                  <ArrowRight className="w-4 h-4 mr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  Villas
                </a>
              </li>
              <li>
                <a href="#" className="text-neutral-400 hover:text-emerald-400 transition-colors duration-300 flex items-center group">
                  <ArrowRight className="w-4 h-4 mr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  Penthouses
                </a>
              </li>
              <li>
                <a href="#" className="text-neutral-400 hover:text-emerald-400 transition-colors duration-300 flex items-center group">
                  <ArrowRight className="w-4 h-4 mr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  Commercial
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-white">Contact Info</h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-emerald-400 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-neutral-400">
                    123 Business District,<br />
                    Mumbai, Maharashtra 400001
                  </p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-emerald-400 flex-shrink-0" />
                <a href="tel:+919876543210" className="text-neutral-400 hover:text-emerald-400 transition-colors duration-300">
                  +91 98765 43210
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-emerald-400 flex-shrink-0" />
                <a href="mailto:info@flauntproperties.com" className="text-neutral-400 hover:text-emerald-400 transition-colors duration-300">
                  info@flauntproperties.com
                </a>
              </div>
            </div>

            {/* Newsletter */}
            <div className="mt-8">
              <h5 className="text-white font-semibold mb-3">Newsletter</h5>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Your email"
                  className="flex-1 px-4 py-2 rounded-l-lg bg-neutral-800 border border-neutral-700 text-white placeholder-neutral-500 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                />
                <button className="px-4 py-2 rounded-r-lg bg-gradient-to-r from-emerald-600 to-emerald-500 text-white hover:shadow-lg transition-all duration-300">
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="py-8 border-t border-neutral-800">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-neutral-400 text-sm">
              © 2024 Flaunt Properties. All rights reserved.
            </div>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-neutral-400 hover:text-emerald-400 transition-colors duration-300">
                Privacy Policy
              </a>
              <a href="#" className="text-neutral-400 hover:text-emerald-400 transition-colors duration-300">
                Terms of Service
              </a>
              <a href="#" className="text-neutral-400 hover:text-emerald-400 transition-colors duration-300">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};