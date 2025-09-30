import React from 'react';
import { Footer } from '@/components/Footer';
import { Building, Star, Globe2, Home, MapPin, Users, Award, ChevronRight, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const stats = [
  { 
    value: '10,000+', 
    label: 'Luxury Properties', 
    icon: Home,
    description: 'Exclusive listings in the world\'s most prestigious locations'
  },
  { 
    value: '50+', 
    label: 'Prime Locations', 
    icon: MapPin,
    description: 'Global presence across the most sought-after destinations'
  },
  { 
    value: '5,000+', 
    label: 'Happy Clients', 
    icon: Users,
    description: 'Satisfied clients who trust us with their luxury real estate needs'
  },
  { 
    value: '25+', 
    label: 'Years Excellence', 
    icon: Award,
    description: 'Delivering exceptional service and expertise in the luxury market'
  },
];

const features = [
  {
    title: 'Luxury Expertise',
    description: 'Our team of specialists brings unparalleled knowledge of premium markets worldwide, combining global perspective with local insight.',
    icon: Building,
    image: 'https://images.unsplash.com/photo-1613977257363-707ba9348227?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80',
    color: 'from-emerald/10 to-emerald/5',
    buttonText: 'Our Properties',
    link: '/listings'
  },
  {
    title: 'White-Glove Service',
    description: 'Experience our signature concierge service that attends to every detail, ensuring a seamless and exceptional property journey.',
    icon: Star,
    image: 'https://images.unsplash.com/photo-1582719471384-894e6eef9c1f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80',
    color: 'from-amber-50 to-amber-100',
    buttonText: 'Our Services',
    link: '/services'
  },
  {
    title: 'Global Network',
    description: 'Access our exclusive portfolio of international properties and off-market opportunities through our global network.',
    icon: Globe2,
    image: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80',
    color: 'from-blue-50 to-blue-100',
    buttonText: 'Global Reach',
    link: '/international'
  },
];

const team = [
  {
    name: 'Alex Johnson',
    role: 'Founder & CEO',
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=800&auto=format&fit=crop&q=80',
    bio: 'With over 20 years in luxury real estate, Alex has redefined industry standards and built a global brand.',
    social: {
      twitter: '#',
      linkedin: '#',
      instagram: '#'
    }
  },
  {
    name: 'Sarah Williams',
    role: 'Head of Sales',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&auto=format&fit=crop&q=80',
    bio: 'Sarah leads our sales team with a focus on creating exceptional client experiences and closing high-value deals.',
    social: {
      twitter: '#',
      linkedin: '#',
      instagram: '#'
    }
  },
  {
    name: 'Michael Chen',
    role: 'Luxury Specialist',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&auto=format&fit=crop&q=80',
    bio: 'Michael brings a keen eye for architectural excellence and a deep understanding of global luxury markets.',
    social: {
      twitter: '#',
      linkedin: '#',
      instagram: '#'
    }
  },
];

export const About: React.FC = () => {
  return (
    <div className="min-h-screen bg-ivory">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div 
            className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1600585152220-90363fe7e115?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2940&q=80')] bg-cover bg-center"
            style={{
              filter: 'brightness(0.9) contrast(1.1)',
              transform: 'scale(1.1)',
              transformOrigin: 'center',
              willChange: 'transform',
              transition: 'transform 10s cubic-bezier(0.2, 0.96, 0.34, 0.97)'
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-jet/80 via-jet/60 to-jet/90" />
        </div>
        
        <div className="relative z-10 w-full max-w-7xl px-6 mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="mb-8"
          >
            <span className="inline-block px-4 py-2 text-sm font-medium text-emerald-300 bg-emerald-900/30 rounded-full border border-emerald-800/50 backdrop-blur-sm">
              Luxury Real Estate Since 1998
            </span>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold text-white mb-6 leading-tight"
            style={{
              textShadow: '0 4px 20px rgba(0,0,0,0.3)',
              fontWeight: 700,
              letterSpacing: '-0.025em'
            }}
          >
            Crafting Extraordinary
            <span className="block mt-2">Living Experiences</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto mt-8 font-light leading-relaxed"
            style={{
              textShadow: '0 2px 10px rgba(0,0,0,0.3)'
            }}
          >
            We don't just sell properties; we create timeless legacies and craft the perfect setting for life's most precious moments.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-12 flex flex-wrap justify-center gap-6"
          >
            <a 
              href="/listings" 
              className="group relative px-8 py-4 rounded-full bg-gradient-to-r from-emerald to-emerald-600 text-white font-semibold hover:shadow-2xl hover:shadow-emerald/30 transition-all duration-300 overflow-hidden"
            >
              <span className="relative z-10 flex items-center">
                Explore Our Portfolio
                <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
              </span>
              <span className="absolute inset-0 bg-gradient-to-r from-emerald-600 to-emerald-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
            </a>
            <a 
              href="/contact" 
              className="group relative px-8 py-4 rounded-full border-2 border-white/20 text-white font-semibold hover:bg-white/10 hover:border-white/40 transition-all duration-300 overflow-hidden"
            >
              <span className="relative z-10 flex items-center">
                Schedule a Consultation
                <ChevronRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
              </span>
              <span className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
            </a>
          </motion.div>
        </div>
        
        <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 z-20">
          <div className="animate-float">
            <div className="w-10 h-16 border-2 border-white/30 rounded-2xl flex justify-center">
              <div className="w-1 h-4 bg-white/80 rounded-full mt-2 animate-pulse" />
            </div>
            <div className="text-xs text-white/60 mt-2 text-center tracking-wider">SCROLL</div>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-1/4 -left-20 w-40 h-40 bg-emerald-400/10 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-1/4 -right-20 w-60 h-60 bg-amber-400/10 rounded-full filter blur-3xl"></div>
      </section>

      {/* Stats Section */}
      <section className="relative py-24 overflow-hidden bg-gradient-to-b from-white to-ivory/50">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/diagmonds.png')]" />
        </div>
        
        <div className="relative max-w-7xl mx-auto px-6 z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-jet mb-6">
              Our Impact in Numbers
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-emerald to-champagne mx-auto mb-6"></div>
            <p className="text-lg text-gray-600">
              For over two decades, we've been setting new standards in luxury real estate, delivering exceptional value to our clients worldwide.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const StatIcon = stat.icon;
              return (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ 
                    duration: 0.6, 
                    delay: index * 0.1,
                    type: "spring",
                    stiffness: 100
                  }}
                  whileHover={{ y: -10, boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)' }}
                  className="group relative bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
                >
                  {/* Animated background effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-emerald/5 to-champagne/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  <div className="relative z-10">
                    <div className="w-16 h-16 bg-gradient-to-br from-emerald to-champagne rounded-2xl flex items-center justify-center mb-6 mx-auto transform group-hover:rotate-6 transition-transform duration-300">
                      <StatIcon className="w-8 h-8 text-white" />
                    </div>
                    
                    <motion.div 
                      className="text-4xl font-bold text-jet mb-2 font-serif"
                      initial={{ scale: 0.9 }}
                      whileInView={{ scale: 1 }}
                      transition={{ delay: 0.2 + (index * 0.1) }}
                    >
                      {stat.value}
                    </motion.div>
                    
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">{stat.label}</h3>
                    <p className="text-gray-500 text-sm leading-relaxed">
                      {stat.description}
                    </p>
                    
                    <div className="mt-6 h-1 w-12 bg-gradient-to-r from-emerald to-champagne mx-auto transform group-hover:scale-125 transition-transform duration-300"></div>
                  </div>
                  
                  {/* Decorative corner */}
                  <div className="absolute top-0 right-0 w-16 h-16">
                    <div className="absolute top-0 right-0 w-0 h-0 border-t-[64px] border-r-[64px] border-t-emerald border-r-white opacity-10 group-hover:opacity-30 transition-opacity duration-300"></div>
                  </div>
                </motion.div>
              );
            })}
          </div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="mt-16 text-center"
          >
            <a 
              href="/about/company" 
              className="inline-flex items-center text-emerald-700 hover:text-emerald-800 font-medium group transition-colors duration-300"
            >
              Learn more about our journey
              <svg className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="relative py-24 bg-gradient-to-b from-ivory/50 to-white overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute inset-0">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-emerald-100/30 rounded-full filter blur-3xl"></div>
          <div className="absolute -bottom-20 -left-20 w-96 h-96 bg-champagne/20 rounded-full filter blur-3xl"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-6 z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto mb-20"
          >
            <span className="inline-block px-4 py-2 text-sm font-medium text-emerald-800 bg-emerald-100/50 rounded-full border border-emerald-200 mb-4">
              Our Promise to You
            </span>
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-jet mb-6 leading-tight">
              Redefining <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-champagne">Luxury</span> Living
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-emerald to-champagne mx-auto mb-8"></div>
            <p className="text-lg text-gray-600">
              We don't just sell properties; we craft extraordinary living experiences that exceed expectations and create lasting value for generations to come.
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const FeatureIcon = feature.icon;
              return (
                <motion.div 
                  key={feature.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ 
                    duration: 0.6, 
                    delay: index * 0.1,
                    type: "spring",
                    stiffness: 100
                  }}
                  whileHover={{ y: -10 }}
                  className="group relative bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500"
                >
                  <div className="relative h-64 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent z-10"></div>
                    <img 
                      src={feature.image}
                      alt={feature.title}
                      className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute bottom-0 left-0 right-0 p-6 z-20">
                      <div className={`w-14 h-14 rounded-xl ${feature.color} flex items-center justify-center shadow-lg mb-4 transform group-hover:rotate-6 transition-transform duration-300`}>
                        <FeatureIcon className="w-7 h-7 text-jet" />
                      </div>
                      <h3 className="text-2xl font-bold text-white mb-2">{feature.title}</h3>
                    </div>
                  </div>
                  
                  <div className="p-8">
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {feature.description}
                    </p>
                    <a 
                      href={feature.link}
                      className="inline-flex items-center text-emerald-600 hover:text-emerald-800 font-medium group transition-colors duration-300"
                    >
                      {feature.buttonText}
                      <svg className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </a>
                  </div>
                  
                  {/* Decorative corner */}
                  <div className="absolute bottom-0 right-0 w-16 h-16 overflow-hidden">
                    <div className="absolute bottom-0 right-0 w-0 h-0 border-b-[64px] border-r-[64px] border-b-emerald-100/30 border-r-transparent"></div>
                  </div>
                </motion.div>
              );
            })}
          </div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="mt-16 text-center"
          >
            <a 
              href="/services" 
              className="inline-flex items-center px-8 py-4 rounded-full bg-gradient-to-r from-emerald to-champagne text-white font-semibold hover:shadow-lg hover:shadow-emerald-200 transition-all duration-300 group"
            >
              Discover Our Services
              <svg className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
          </motion.div>
        </div>
      </section>

      {/* Team Section */}
      <section className="relative py-24 bg-gradient-to-b from-white to-ivory/30 overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 -right-40 w-96 h-96 bg-champagne/20 rounded-full filter blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-white to-transparent z-10"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-6 z-20">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-3xl mx-auto mb-20"
          >
            <span className="inline-block px-4 py-2 text-sm font-medium text-amber-800 bg-amber-100/50 rounded-full border border-amber-200 mb-4">
              Our Experts
            </span>
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-jet mb-6 leading-tight">
              Meet Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-champagne">Leadership</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-amber-400 to-champagne mx-auto mb-8"></div>
            <p className="text-lg text-gray-600">
              Our distinguished team of luxury real estate experts combines decades of experience with unparalleled market knowledge to deliver exceptional results.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {team.map((member, index) => (
              <motion.div 
                key={member.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ 
                  duration: 0.6, 
                  delay: index * 0.1,
                  type: "spring",
                  stiffness: 100
                }}
                className="group relative text-center"
              >
                <div className="relative overflow-hidden rounded-3xl mb-8 aspect-[3/4] shadow-2xl">
                  <div className="absolute inset-0 bg-gradient-to-t from-jet/90 via-transparent to-transparent z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-105"
                  />
                  
                  {/* Social links */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 z-20 opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                    <div className="flex justify-center space-x-3">
                      {Object.entries(member.social).map(([platform, url]) => (
                        <a 
                          key={platform}
                          href={url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-10 h-10 bg-white/90 rounded-full flex items-center justify-center text-jet hover:bg-white hover:text-amber-600 transition-colors duration-300 shadow-lg"
                          aria-label={platform}
                        >
                          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                            {platform === 'twitter' && (
                              <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                            )}
                            {platform === 'linkedin' && (
                              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                            )}
                            {platform === 'instagram' && (
                              <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                            )}
                          </svg>
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
                
                <div className="px-4">
                  <h3 className="text-2xl font-bold text-jet mb-1">{member.name}</h3>
                  <p className="text-amber-700 font-medium mb-4">{member.role}</p>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {member.bio}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="mt-16 text-center"
          >
            <a 
              href="/about/team" 
              className="inline-flex items-center px-8 py-4 rounded-full border-2 border-amber-500 text-amber-700 hover:bg-amber-50 font-semibold transition-colors duration-300 group"
            >
              View Full Team
              <svg className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-28 overflow-hidden bg-gradient-to-br from-jet to-jet/90">
        {/* Decorative elements */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/diagmonds.png')]" />
        </div>
        <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-emerald/20 to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-1/3 h-full bg-gradient-to-r from-champagne/20 to-transparent"></div>
        
        <div className="relative max-w-6xl mx-auto px-6 z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center lg:text-left"
            >
              <span className="inline-block px-4 py-2 text-sm font-medium text-emerald-200 bg-emerald-900/30 rounded-full border border-emerald-800/50 mb-6">
                Begin Your Journey
              </span>
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-6 leading-tight">
                Experience the <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 to-champagne">Luxury</span> Difference
              </h2>
              <p className="text-xl text-white/90 mb-8 max-w-xl mx-auto lg:mx-0">
                Let us transform your real estate aspirations into reality with our unparalleled expertise and personalized service.
              </p>
              
              <div className="flex flex-wrap justify-center lg:justify-start gap-4">
                <motion.a 
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                  href="/contact" 
                  className="px-8 py-4 rounded-full bg-gradient-to-r from-emerald-400 to-emerald-600 text-white font-semibold hover:shadow-xl hover:shadow-emerald-500/20 transition-all duration-300 flex items-center group"
                >
                  Schedule a Consultation
                  <svg className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </motion.a>
                <motion.a 
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                  href="/listings" 
                  className="px-8 py-4 rounded-full border-2 border-white/20 bg-white/5 text-white font-semibold hover:bg-white/10 hover:border-white/40 backdrop-blur-sm transition-all duration-300 flex items-center group"
                >
                  Explore Our Portfolio
                  <svg className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </motion.a>
              </div>
              
              <div className="mt-8 flex flex-wrap items-center justify-center lg:justify-start gap-4 text-sm text-white/70">
                <div className="flex items-center">
                  <div className="flex -space-x-2 mr-3">
                    {[1, 2, 3].map((i) => (
                      <div key={i} className="w-8 h-8 rounded-full border-2 border-white/20 overflow-hidden">
                        <img 
                          src={`https://randomuser.me/api/portraits/${i % 2 === 0 ? 'women' : 'men'}/${30 + i}.jpg`} 
                          alt="Client"
                          className="w-full h-full object-cover"
                        />
                      </div>
                    ))}
                  </div>
                  <span>Trusted by 5,000+ clients</span>
                </div>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: 30, rotate: 2 }}
              whileInView={{ opacity: 1, x: 0, rotate: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative hidden lg:block"
            >
              <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl transform rotate-1 group">
                <img 
                  src="https://images.unsplash.com/photo-1613490493576-7fde63acd811?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80" 
                  alt="Luxury Property"
                  className="w-full h-auto transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-jet/90 via-transparent to-transparent"></div>
                
                {/* Floating card */}
                <div className="absolute bottom-8 left-8 right-8 bg-white/90 backdrop-blur-sm p-6 rounded-xl shadow-lg max-w-xs">
                  <div className="flex items-center mb-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-emerald to-champagne rounded-lg flex items-center justify-center mr-3">
                      <Award className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <div className="text-sm text-gray-500">Award Winning</div>
                      <div className="font-semibold text-jet">Luxury Real Estate</div>
                    </div>
                  </div>
                  <p className="text-sm text-gray-600 mb-4">
                    Recognized for excellence in luxury property sales and client satisfaction.
                  </p>
                  <div className="flex items-center text-sm">
                    <div className="flex items-center text-amber-500 mr-4">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-current" />
                      ))}
                    </div>
                    <span className="text-gray-500">5.0 (1.2k+ reviews)</span>
                  </div>
                </div>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -top-6 -right-6 w-32 h-32 bg-emerald-500/10 rounded-full filter blur-xl"></div>
              <div className="absolute -bottom-6 -left-6 w-40 h-40 bg-champagne/10 rounded-full filter blur-xl"></div>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};