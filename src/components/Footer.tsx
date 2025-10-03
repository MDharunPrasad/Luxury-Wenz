import React from 'react';
import { Building, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin, ArrowRight, Star, Award, Users, Globe } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-gradient-to-br from-jet via-[#1e305e] to-jet text-white overflow-hidden">
      {/* Luxury Pattern Overlay */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="relative z-10">
        {/* Main Footer Content */}
        <div className="container mx-auto px-4 sm:px-6 pt-12 pb-16">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
            {/* Brand Section */}
            <div className="lg:col-span-1">
              <div className="flex items-start space-x-4 mb-6">
                <div className="w-12 h-12 rounded-full bg-gradient-to-r from-emerald to-champagne flex items-center justify-center">
                  <Building className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-playfair font-bold text-2xl text-white">Wenzhomes</h3>
                  <p className="text-champagne font-medium">Luxury Real Estate</p>
                </div>
              </div>
              <p className="text-platinum/80 text-sm leading-relaxed mb-6">
                Your gateway to the world's most prestigious properties. We deliver exceptional luxury real estate experiences with unmatched expertise and personalized service.
              </p>

              {/* Social Media */}
              <div className="flex space-x-4">
                <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-emerald hover:scale-110 transition-all duration-300">
                  <Facebook className="w-5 h-5" />
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-emerald hover:scale-110 transition-all duration-300">
                  <Twitter className="w-5 h-5" />
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-emerald hover:scale-110 transition-all duration-300">
                  <Instagram className="w-5 h-5" />
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-emerald hover:scale-110 transition-all duration-300">
                  <Linkedin className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-playfair font-bold text-xl text-white mb-6">Quick Links</h4>
              <div className="space-y-3">
                <a href="/" className="flex items-center text-platinum/80 hover:text-champagne transition-colors duration-300 group">
                  <ArrowRight className="w-4 h-4 mr-2 group-hover:translate-x-1 transition-transform duration-300" />
                  Home
                </a>
                <a href="/listings" className="flex items-center text-platinum/80 hover:text-champagne transition-colors duration-300 group">
                  <ArrowRight className="w-4 h-4 mr-2 group-hover:translate-x-1 transition-transform duration-300" />
                  Luxury Properties
                </a>
                <a href="/about" className="flex items-center text-platinum/80 hover:text-champagne transition-colors duration-300 group">
                  <ArrowRight className="w-4 h-4 mr-2 group-hover:translate-x-1 transition-transform duration-300" />
                  About Us
                </a>
                <a href="/contact" className="flex items-center text-platinum/80 hover:text-champagne transition-colors duration-300 group">
                  <ArrowRight className="w-4 h-4 mr-2 group-hover:translate-x-1 transition-transform duration-300" />
                  Contact
                </a>
                <a href="/blog" className="flex items-center text-platinum/80 hover:text-champagne transition-colors duration-300 group">
                  <ArrowRight className="w-4 h-4 mr-2 group-hover:translate-x-1 transition-transform duration-300" />
                  Blog
                </a>
              </div>
            </div>

            {/* Services */}
            <div>
              <h4 className="font-playfair font-bold text-xl text-white mb-6">Our Services</h4>
              <div className="space-y-3">
                <div className="text-platinum/80 hover:text-champagne transition-colors duration-300 flex items-center group cursor-pointer">
                  <Star className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform duration-300" />
                  Premium Sales
                </div>
                <div className="text-platinum/80 hover:text-champagne transition-colors duration-300 flex items-center group cursor-pointer">
                  <Star className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform duration-300" />
                  Exclusive Rentals
                </div>
                <div className="text-platinum/80 hover:text-champagne transition-colors duration-300 flex items-center group cursor-pointer">
                  <Star className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform duration-300" />
                  Investment Advisory
                </div>
                <div className="text-platinum/80 hover:text-champagne transition-colors duration-300 flex items-center group cursor-pointer">
                  <Star className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform duration-300" />
                  Concierge Services
                </div>
                <div className="text-platinum/80 hover:text-champagne transition-colors duration-300 flex items-center group cursor-pointer">
                  <Star className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform duration-300" />
                  Portfolio Management
                </div>
              </div>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="font-playfair font-bold text-xl text-white mb-6">Contact Info</h4>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <MapPin className="w-5 h-5 text-champagne mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-platinum/80 text-sm">123 Luxury Avenue</p>
                    <p className="text-platinum/80 text-sm">Manhattan, NY 10001</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-champagne" />
                  <a href="tel:+15551234567" className="text-platinum/80 hover:text-champagne transition-colors duration-300">
                    +1 (555) 123-4567
                  </a>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-champagne" />
                  <a href="mailto:info@wenzhomes.com" className="text-platinum/80 hover:text-champagne transition-colors duration-300">
                    info@wenzhomes.com
                  </a>
                </div>
                <div className="flex items-center space-x-3">
                  <Globe className="w-5 h-5 text-champagne" />
                  <span className="text-platinum/80 text-sm">24/7 Global Service</span>
                </div>
              </div>
            </div>
          </div>

          {/* Awards & Recognition */}
          <div className="mt-16 pt-8 border-t border-white/20">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div className="flex flex-col items-center">
                <Award className="w-8 h-8 text-champagne mb-3" />
                <h5 className="font-semibold text-white mb-2">Luxury Real Estate Award</h5>
                <p className="text-platinum/80 text-sm">Best Luxury Agency 2024</p>
              </div>
              <div className="flex flex-col items-center">
                <Users className="w-8 h-8 text-champagne mb-3" />
                <h5 className="font-semibold text-white mb-2">500+ Happy Clients</h5>
                <p className="text-platinum/80 text-sm">Satisfied Customers Worldwide</p>
              </div>
              <div className="flex flex-col items-center">
                <Star className="w-8 h-8 text-champagne mb-3" />
                <h5 className="font-semibold text-white mb-2">5-Star Rated Service</h5>
                <p className="text-platinum/80 text-sm">Excellence in Every Transaction</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="bg-jet/50 border-t border-white/10">
          <div className="container mx-auto px-4 sm:px-6 py-6">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <div className="text-platinum/80 text-sm">
                © {new Date().getFullYear()} Wenzhomes. All rights reserved. | Luxury Real Estate Excellence
              </div>
              <div className="flex space-x-6 text-sm">
                <a href="#" className="text-platinum/80 hover:text-champagne transition-colors duration-300">Privacy Policy</a>
                <a href="#" className="text-platinum/80 hover:text-champagne transition-colors duration-300">Terms of Service</a>
                <a href="#" className="text-platinum/80 hover:text-champagne transition-colors duration-300">Cookie Policy</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};


