import React, { useState, useEffect, useRef } from 'react';
import { Footer } from '../components/Footer';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  CheckCircle,
  MessageCircle,
  Star,
  ChevronRight,
  ArrowRight
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const contactInfo = [
  {
    icon: <MapPin className="w-6 h-6" />,
    title: 'Visit Our Office',
    description: '123 Luxury Avenue, Beverly Hills, CA 90210',
    link: '#map',
    linkText: 'View on Map',
    color: 'from-amber-50 to-amber-100/80',
    gradient: 'bg-gradient-to-br from-amber-500 to-amber-600',
    hover: 'hover:shadow-amber-200/50'
  },
  {
    icon: <Phone className="w-6 h-6" />,
    title: 'Call Us',
    description: '+1 (310) 555-0123',
    link: 'tel:+13105550123',
    linkText: 'Call Now',
    color: 'from-blue-50 to-blue-100/80',
    gradient: 'bg-gradient-to-br from-blue-500 to-blue-600',
    hover: 'hover:shadow-blue-200/50'
  },
  {
    icon: <Mail className="w-6 h-6" />,
    title: 'Email Us',
    description: 'info@luxurywenz.com',
    link: 'mailto:info@luxurywenz.com',
    linkText: 'Send Email',
    color: 'from-emerald-50 to-emerald-100/80',
    gradient: 'bg-gradient-to-br from-emerald-500 to-emerald-600',
    hover: 'hover:shadow-emerald-200/50'
  },
  {
    icon: <Clock className="w-6 h-6" />,
    title: 'Working Hours',
    description: 'Mon - Fri: 9:00 AM - 6:00 PM\nSat: 10:00 AM - 4:00 PM',
    link: '#contact-form',
    linkText: 'Book Appointment',
    color: 'from-purple-50 to-purple-100/80',
    gradient: 'bg-gradient-to-br from-purple-500 to-purple-600',
    hover: 'hover:shadow-purple-200/50'
  }
];

const testimonials = [
  {
    id: 1,
    quote: "The team at Luxury Wenz made our dream home a reality. Their attention to detail and personalized service was exceptional. We couldn't be happier with our new property!",
    author: "Michael & Sarah Johnson",
    role: "Home Buyers",
    rating: 5,
    image: "https://images.unsplash.com/photo-1552058544-f2b08422138a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=798&q=80"
  },
  {
    id: 2,
    quote: "Professional, knowledgeable, and truly dedicated to finding the perfect property. The entire process was seamless from start to finish.",
    author: "David Chen",
    role: "Real Estate Investor",
    rating: 5,
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
  },
  {
    id: 3,
    quote: "Exceptional service! They understood exactly what we were looking for and found us our dream home within a week. Highly recommend!",
    author: "Emily Rodriguez",
    role: "First-time Home Buyer",
    rating: 5,
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
  },
  {
    id: 4,
    quote: "The Luxury Wenz team went above and beyond to help us sell our property above market value. Their marketing strategy was outstanding.",
    author: "Robert Kim",
    role: "Property Seller",
    rating: 5,
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
  },
  {
    id: 5,
    quote: "As an international investor, I was impressed by their market knowledge and attention to detail. They made the entire process smooth and stress-free.",
    author: "Sophia Chen",
    role: "International Investor",
    rating: 5,
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80"
  }
];

const Contact: React.FC = () => {
  // Form state
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    propertyInterest: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate email sending
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      console.log('Contact form submitted:', formData);
    }, 2000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  // Testimonials carousel state
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const carouselRef = useRef<HTMLDivElement>(null);

  // Auto-rotate testimonials
  useEffect(() => {
    let interval: NodeJS.Timeout;
    
    if (isAutoPlaying) {
      interval = setInterval(() => {
        setActiveTestimonial(prev => (prev + 1) % testimonials.length);
      }, 8000);
    }
    
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isAutoPlaying]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 pt-20">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-gray-900 to-gray-800 text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80')] bg-cover bg-center opacity-20"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/30 to-black/70"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
          <div className="text-center max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-white/10 text-white/90 border border-white/20 backdrop-blur-sm mb-6">
                <MessageCircle className="w-4 h-4 mr-2" />
                We're Here to Help
              </span>
              <h1 className="font-playfair text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
                Let's Start Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 to-champagne">Luxury Journey</span>
              </h1>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-8">
                Our dedicated team is ready to assist you in finding your dream property or answering any questions you may have about our exclusive listings.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <motion.a
                  whileHover={{ scale: 1.03, boxShadow: '0 10px 25px -5px rgba(245, 158, 11, 0.3)' }}
                  whileTap={{ scale: 0.98 }}
                  href="#contact-form"
                  className="px-8 py-4 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 text-white font-semibold hover:shadow-xl transition-all duration-300 flex items-center group"
                >
                  Send Us a Message
                  <ArrowRight className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform" />
                </motion.a>
                <motion.a
                  whileHover={{ 
                    scale: 1.03,
                    backgroundColor: 'rgba(255, 255, 255, 0.1)',
                    borderColor: 'rgba(255, 255, 255, 0.4)'
                  }}
                  whileTap={{ scale: 0.98 }}
                  href="tel:+13105550123"
                  className="px-8 py-4 rounded-xl border-2 border-white/20 bg-white/5 text-white font-semibold hover:border-white/40 backdrop-blur-sm transition-all duration-300 flex items-center group"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  +1 (310) 555-0123
                </motion.a>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        {/* Contact Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {contactInfo.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`bg-gradient-to-br ${item.color} rounded-2xl p-6 shadow-lg border border-white/30 backdrop-blur-sm`}
            >
              <div className="w-12 h-12 rounded-xl bg-white/80 flex items-center justify-center shadow-sm mb-4">
                {item.icon}
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h3>
              <p className="text-gray-700 mb-4 whitespace-pre-line">{item.description}</p>
              <a 
                href={item.link} 
                className="inline-flex items-center text-sm font-medium text-amber-700 hover:text-amber-800 group transition-colors"
              >
                {item.linkText}
                <ChevronRight className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform" />
              </a>
            </motion.div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">

          {/* Contact Form */}
          <motion.div 
            id="contact-form"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2 bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden"
          >
            <div className="p-8 md:p-10">
              <div className="flex items-center mb-8">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 flex items-center justify-center text-white mr-4">
                  <MessageCircle className="w-6 h-6" />
                </div>
                <div>
                  <h2 className="text-2xl md:text-3xl font-playfair font-bold text-jet">Send us a Message</h2>
                  <p className="text-gray-600">We typically respond within 24 hours</p>
                </div>
              </div>
            
            {isSubmitted ? (
              <div className="text-center py-12 px-4">
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ type: 'spring', stiffness: 100 }}
                >
                  <div className="w-20 h-20 bg-gradient-to-r from-emerald-400 to-emerald-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <CheckCircle className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-jet mb-2">Message Sent Successfully!</h3>
                  <p className="text-gray-600 mb-8 max-w-md mx-auto">
                    Thank you for reaching out to us. Our team will review your message and get back to you within 24 hours.
                  </p>
                  <div className="flex flex-col sm:flex-row justify-center gap-4">
                    <motion.button
                      whileHover={{ scale: 1.03, boxShadow: '0 10px 25px -5px rgba(16, 185, 129, 0.3)' }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => {
                        setIsSubmitted(false);
                        setFormData({ name: '', email: '', phone: '', subject: '', message: '', propertyInterest: '' });
                      }}
                      className="px-6 py-3 rounded-xl bg-gradient-to-r from-emerald-500 to-emerald-600 text-white font-semibold hover:shadow-lg transition-all duration-300"
                    >
                      Send Another Message
                    </motion.button>
                    <motion.a
                      whileHover={{ 
                        scale: 1.03,
                        backgroundColor: 'rgba(0, 0, 0, 0.05)',
                        borderColor: 'rgba(0, 0, 0, 0.1)'
                      }}
                      whileTap={{ scale: 0.98 }}
                      href="/listings"
                      className="px-6 py-3 rounded-xl border-2 border-gray-200 bg-white text-gray-800 font-semibold hover:border-gray-300 transition-all duration-300"
                    >
                      Browse Properties
                    </motion.a>
                  </div>
                </motion.div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-jet mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-amber-500 focus:ring-2 focus:ring-amber-100 transition-all duration-300 bg-white/50 backdrop-blur-sm"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-jet mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-amber-500 focus:ring-2 focus:ring-amber-100 transition-all duration-300 bg-white/50 backdrop-blur-sm"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-jet mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-amber-500 focus:ring-2 focus:ring-amber-100 transition-all duration-300 bg-white/50 backdrop-blur-sm"
                      placeholder="+1 (555) 123-4567"
                    />
                  </div>
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-jet mb-2">
                      Subject *
                    </label>
                    <div className="relative">
                      <select
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 pr-10 rounded-xl border border-gray-200 focus:border-amber-500 focus:ring-2 focus:ring-amber-100 transition-all duration-300 appearance-none bg-white/50 backdrop-blur-sm"
                      >
                      <option value="">Select a subject</option>
                      <option value="buying">I'm interested in buying</option>
                      <option value="selling">I want to sell my property</option>
                      <option value="renting">I'm looking to rent</option>
                      <option value="investment">Investment opportunities</option>
                      <option value="general">General inquiry</option>
                      </select>
                      <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none">
                        <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <label htmlFor="propertyInterest" className="block text-sm font-medium text-jet mb-2">
                    Property Interest
                  </label>
                  <select
                    id="propertyInterest"
                    name="propertyInterest"
                    value={formData.propertyInterest}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-emerald focus:ring-2 focus:ring-emerald/20 transition-all duration-300 appearance-none bg-white"
                  >
                    <option value="">Select property type</option>
                    <option value="apartment">Luxury Apartment</option>
                    <option value="villa">Villa</option>
                    <option value="townhouse">Townhouse</option>
                    <option value="penthouse">Penthouse</option>
                    <option value="mansion">Mansion</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-jet mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-amber-500 focus:ring-2 focus:ring-amber-100 transition-all duration-300 resize-none bg-white/50 backdrop-blur-sm"
                    placeholder="Tell us about your requirements..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-amber-500 to-amber-600 text-white font-semibold py-4 px-6 rounded-xl hover:shadow-lg hover:shadow-amber-500/20 hover:scale-[1.02] transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed group"
                >
                  {isSubmitting ? (
                    <div className="flex items-center justify-center space-x-2">
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      <span>Processing...</span>
                    </div>
                  ) : (
                    <div className="flex items-center justify-center space-x-2 group-hover:space-x-3 transition-spacing duration-300">
                      <span>Send Message</span>
                      <ArrowRight className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" />
                    </div>
                  )}
                </button>
              </form>
            )}
            </div>
          </motion.div>

          {/* Contact Information & Map */}
          <div className="space-y-8">
            {/* Contact Info */}
            <div className="bg-white/80 backdrop-blur-md rounded-2xl shadow-xl border border-white/20 p-8">
              <h2 className="text-2xl font-playfair font-bold text-jet mb-6">Get in Touch</h2>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-emerald to-champagne rounded-full flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-jet mb-1">Office Address</h3>
                    <p className="text-gray-600">
                      123 Luxury Avenue<br />
                      Manhattan, NY 10001<br />
                      United States
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-emerald to-champagne rounded-full flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-jet mb-1">Phone</h3>
                    <p className="text-gray-600">+1 (555) 123-4567</p>
                    <p className="text-gray-600">+1 (555) 987-6543</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-emerald to-champagne rounded-full flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-jet mb-1">Email</h3>
                    <p className="text-gray-600">info@flaunt.com</p>
                    <p className="text-gray-600">sales@flaunt.com</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-emerald to-champagne rounded-full flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-jet mb-1">Business Hours</h3>
                    <p className="text-gray-600">Monday - Friday: 9:00 AM - 6:00 PM</p>
                    <p className="text-gray-600">Saturday: 10:00 AM - 4:00 PM</p>
                    <p className="text-gray-600">Sunday: By Appointment</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Map */}
            <div className="bg-white/80 backdrop-blur-md rounded-2xl shadow-xl border border-white/20 p-8">
              <h2 className="text-2xl font-playfair font-bold text-jet mb-6">Our Location</h2>
              <div className="h-64 bg-gray-200 rounded-xl flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="w-12 h-12 text-gray-400 mx-auto mb-2" />
                  <p className="text-gray-600">Interactive Map</p>
                  <p className="text-sm text-gray-500">Google Maps integration would go here</p>
                </div>
              </div>
            </div>

            {/* Quick Stats */}
            <div className="bg-gradient-to-r from-emerald to-champagne rounded-2xl p-8 text-white">
              <h2 className="text-2xl font-playfair font-bold mb-6">Why Choose Us?</h2>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold mb-1">500+</div>
                  <div className="text-sm opacity-90">Properties Sold</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold mb-1">4.9</div>
                  <div className="text-sm opacity-90">Client Rating</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold mb-1">15+</div>
                  <div className="text-sm opacity-90">Years Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold mb-1">24/7</div>
                  <div className="text-sm opacity-90">Support</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* CTA Banner */}
      <div className="bg-gradient-to-r from-gray-900 to-jet text-white py-16 mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-2xl md:text-3xl font-playfair font-bold mb-4">Ready to Find Your Dream Home?</h3>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Let our expert agents guide you through the process of finding your perfect property.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <motion.a
              whileHover={{ scale: 1.03, boxShadow: '0 10px 25px -5px rgba(245, 158, 11, 0.3)' }}
              whileTap={{ scale: 0.98 }}
              href="/listings"
              className="px-8 py-4 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 text-white font-semibold hover:shadow-xl transition-all duration-300 flex items-center group"
            >
              Browse Properties
              <ArrowRight className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform" />
            </motion.a>
            <motion.a
              whileHover={{ 
                scale: 1.03,
                backgroundColor: 'rgba(255, 255, 255, 0.1)',
                borderColor: 'rgba(255, 255, 255, 0.4)'
              }}
              whileTap={{ scale: 0.98 }}
              href="tel:+13105550123"
              className="px-8 py-4 rounded-xl border-2 border-white/20 bg-white/5 text-white font-semibold hover:border-white/40 backdrop-blur-sm transition-all duration-300 flex items-center group"
            >
              <Phone className="w-5 h-5 mr-2" />
              Call Us Now
            </motion.a>
          </div>
        </div>
      </div>
      
      {/* Testimonials Section */}
      <div className="py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-amber-100 text-amber-800 mb-4">
              <MessageCircle className="w-4 h-4 mr-2" />
              Client Testimonials
            </span>
            <h2 className="text-3xl md:text-4xl font-playfair font-bold text-gray-900 mb-4">
              What Our Clients Say
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Hear from our satisfied clients about their experience with our luxury real estate services.
            </p>
          </div>

          <div 
            className="relative max-w-5xl mx-auto"
            onMouseEnter={() => setIsAutoPlaying(false)}
            onMouseLeave={() => setIsAutoPlaying(true)}
          >
            {/* Carousel */}
            <div 
              ref={carouselRef}
              className="relative overflow-hidden rounded-2xl bg-white shadow-xl"
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTestimonial}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -50 }}
                  transition={{ duration: 0.5 }}
                  className="p-8 md:p-12"
                >
                  <div className="flex flex-col md:flex-row items-center">
                    <div className="w-full md:w-1/3 mb-8 md:mb-0 md:pr-8">
                      <div className="relative overflow-hidden rounded-xl aspect-square">
                        <img 
                          src={testimonials[activeTestimonial].image} 
                          alt={testimonials[activeTestimonial].author}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>
                    <div className="w-full md:w-2/3">
                      <div className="mb-6 text-amber-500 flex">
                        {[...Array(5)].map((_, i) => (
                          <Star 
                            key={i} 
                            className={`w-6 h-6 ${i < testimonials[activeTestimonial].rating ? 'fill-current' : 'text-gray-300'}`} 
                          />
                        ))}
                      </div>
                      <blockquote className="text-xl md:text-2xl font-playfair italic text-gray-800 mb-6">
                        "{testimonials[activeTestimonial].quote}"
                      </blockquote>
                      <div className="flex items-center">
                        <div>
                          <p className="font-semibold text-gray-900">{testimonials[activeTestimonial].author}</p>
                          <p className="text-gray-600">{testimonials[activeTestimonial].role}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Navigation Arrows */}
              <button 
                onClick={() => {
                  setIsAutoPlaying(false);
                  setActiveTestimonial(prev => (prev - 1 + testimonials.length) % testimonials.length);
                }}
                className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white shadow-lg flex items-center justify-center text-gray-700 hover:bg-gray-50 transition-colors z-10"
                aria-label="Previous testimonial"
              >
                <ChevronRight className="w-6 h-6 transform rotate-180" />
              </button>
              <button 
                onClick={() => {
                  setIsAutoPlaying(false);
                  setActiveTestimonial(prev => (prev + 1) % testimonials.length);
                }}
                className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white shadow-lg flex items-center justify-center text-gray-700 hover:bg-gray-50 transition-colors z-10"
                aria-label="Next testimonial"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>

            {/* Pagination Dots */}
            <div className="flex justify-center mt-8 space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setIsAutoPlaying(false);
                    setActiveTestimonial(index);
                  }}
                  className={`w-3 h-3 rounded-full transition-colors ${index === activeTestimonial ? 'bg-amber-600' : 'bg-gray-300'}`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Contact;