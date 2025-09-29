import React from 'react';
import { Footer } from '@/components/Footer';
import { Building, Star, Globe2, Home, MapPin, Users, Award } from 'lucide-react';
import { motion } from 'framer-motion';

const stats = [
  { value: '10,000+', label: 'Luxury Properties', icon: Home },
  { value: '50+', label: 'Prime Locations', icon: MapPin },
  { value: '5,000+', label: 'Happy Clients', icon: Users },
  { value: '25+', label: 'Years Experience', icon: Award },
];

const features = [
  {
    title: 'Luxury Expertise',
    description: 'Specialists in premium markets with a global network and local insight.',
    icon: Building,
  },
  {
    title: 'White-Glove Service',
    description: 'Discreet, concierge-level support across the entire property journey.',
    icon: Star,
  },
  {
    title: 'Global Reach',
    description: 'Access to international buyers and exclusive off-market opportunities.',
    icon: Globe2,
  },
];

const team = [
  {
    name: 'Alex Johnson',
    role: 'Founder & CEO',
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&auto=format&fit=crop&q=80',
  },
  {
    name: 'Sarah Williams',
    role: 'Head of Sales',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&auto=format&fit=crop&q=80',
  },
  {
    name: 'Michael Chen',
    role: 'Luxury Specialist',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&auto=format&fit=crop&q=80',
  },
];

export const About: React.FC = () => {
  return (
    <div className="min-h-screen bg-ivory">
      {/* Hero Section with 3D Text */}
      <div className="relative h-[80vh] flex items-center justify-center overflow-hidden bg-gradient-to-b from-jet to-jet/90">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1600585152220-90363fe7e115?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2940&q=80')] bg-cover bg-center opacity-20" />
        </div>
        
        <div className="relative z-10 w-full max-w-7xl px-6 mx-auto text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-serif font-bold text-white mb-6"
          >
            About Us
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-platinum/90 max-w-3xl mx-auto mt-8 font-light"
          >
            Redefining luxury living through exceptional service and unparalleled properties in the world's most prestigious locations.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-12 flex flex-wrap justify-center gap-6"
          >
            <a 
              href="/listings" 
              className="px-8 py-4 rounded-full bg-gradient-to-r from-emerald to-champagne text-white font-semibold hover:shadow-2xl hover:scale-105 transition-all duration-300"
            >
              Explore Properties
            </a>
            <a 
              href="/contact" 
              className="px-8 py-4 rounded-full border-2 border-white/30 text-white font-semibold hover:bg-white/10 hover:border-white/50 transition-all duration-300"
            >
              Contact Our Team
            </a>
          </motion.div>
        </div>
        
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse" />
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div 
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center p-6 rounded-xl bg-ivory/50 hover:bg-ivory transition-colors duration-300"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-emerald to-champagne rounded-full flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-6 h-6 text-white" />
                </div>
                <div className="text-3xl font-bold text-jet mb-2">{stat.value}</div>
                <div className="text-gray-600">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-20 bg-ivory/50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-jet mb-6">
              Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald to-champagne">Commitment</span> to Excellence
            </h2>
            <p className="text-lg text-gray-600">
              We go above and beyond to deliver exceptional service and results for our clients, combining local expertise with global reach.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div 
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-emerald to-champagne rounded-lg flex items-center justify-center mb-6">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-jet mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-jet mb-6">
              Meet Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald to-champagne">Team</span>
            </h2>
            <p className="text-lg text-gray-600">
              Our team of experienced professionals brings together expertise in luxury real estate, marketing, and client service.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <motion.div 
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group text-center"
              >
                <div className="relative overflow-hidden rounded-2xl mb-6 aspect-square">
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-jet/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                    <div className="text-left">
                      <h4 className="text-white text-xl font-semibold">{member.name}</h4>
                      <p className="text-platinum/80">{member.role}</p>
                    </div>
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-jet">{member.name}</h3>
                <p className="text-gray-600">{member.role}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-20 bg-gradient-to-r from-emerald to-champagne text-white">
        <div className="max-w-4xl mx-auto text-center px-6">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">
            Ready to Find Your Dream Home?
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Let our team of experts guide you through the process of finding and acquiring your perfect property.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a 
              href="/contact" 
              className="px-8 py-4 rounded-full bg-white text-jet font-semibold hover:bg-gray-100 transition-colors duration-300"
            >
              Contact Us Today
            </a>
            <a 
              href="/listings" 
              className="px-8 py-4 rounded-full border-2 border-white text-white font-semibold hover:bg-white/10 transition-colors duration-300"
            >
              Browse Properties
            </a>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};