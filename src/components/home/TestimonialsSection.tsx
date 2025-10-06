import React from 'react';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: "Sarah Mitchell",
    role: "Real Estate Investor",
    location: "New York",
    image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop",
    rating: 5,
    text: "Flaunt exceeded every expectation. Their team's expertise in luxury markets is unmatched, and they found me the perfect penthouse in Manhattan. The service was absolutely exceptional."
  },
  {
    name: "Marcus Thompson",
    role: "Tech Entrepreneur",
    location: "San Francisco",
    image: "https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop",
    rating: 5,
    text: "From the initial consultation to closing, Flaunt delivered white-glove service. They understood my vision for a smart home and found properties that perfectly matched my tech-forward lifestyle."
  },
  {
    name: "Elena Rodriguez",
    role: "Investment Banker",
    location: "London",
    image: "https://images.pexels.com/photos/762020/pexels-photo-762020.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop",
    rating: 5,
    text: "The market insights and investment analysis provided by Flaunt were incredibly detailed. They helped me build a diverse luxury real estate portfolio across three continents."
  }
];

export const TestimonialsSection: React.FC = () => {
  return (
    <section className="py-20 bg-white text-black overflow-hidden relative">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-0 pointer-events-none" />

      <div className="container mx-auto px-6 relative">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="font-playfair text-5xl lg:text-6xl font-bold mb-6">
            Client
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-champagne to-gold"> Testimonials</span>
          </h2>
          <p className="text-xl text-neutral-700 max-w-3xl mx-auto">
            Hear from our distinguished clients about their luxury real estate experiences 
            and why they choose Flaunt for their most important property decisions.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="group animate-fade-in-up h-full"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="h-full flex flex-col p-8 rounded-2xl bg-[#1e305e] border border-blue-900 hover:bg-blue-800 hover:border-gold/60 transition-all duration-500 hover:-translate-y-2 transform-gpu relative overflow-hidden shadow-md" style={{ minHeight: '400px' }}>
                {/* Quote Icon */}
                <div className="absolute top-6 right-6 opacity-20">
                  <Quote className="w-8 h-8 text-gold" />
                </div>

                {/* Rating */}
                <div className="flex space-x-1 mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-gold fill-current" />
                  ))}
                </div>

                {/* Testimonial Text */}
                <p className="text-white text-lg leading-relaxed mb-8 italic flex-grow">
                  "{testimonial.text}"
                </p>

                {/* Client Info */}
                <div className="flex items-center space-x-4 mt-auto">
                  <div className="relative">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-16 h-16 rounded-full object-cover ring-2 ring-gold/30 group-hover:ring-gold/60 transition-all duration-300"
                    />
                    <div className="absolute inset-0 rounded-full bg-[#D4AF37]/10 group-hover:bg-[#D4AF37]/20 transition-all duration-300" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white text-lg group-hover:text-gold transition-colors duration-300">
                      {testimonial.name}
                    </h4>
                    <p className="text-blue-200 text-sm">{testimonial.role}</p>
                    <p className="text-gold text-sm font-medium">{testimonial.location}</p>
                  </div>
                </div>

                {/* Decorative Line */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-champagne to-gold transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <div className="inline-flex flex-col items-center space-y-4">
            <h3 className="font-playfair text-3xl font-bold text-black">
              Join Our Distinguished Clientele
            </h3>
            <p className="text-neutral-700 max-w-md">
              Experience the same level of exceptional service and luxury real estate expertise.
            </p>
            <button className="px-8 py-4 rounded-full bg-gold text-white font-semibold hover:shadow-2xl hover:scale-105 transition-all duration-300">
              Start Your Journey
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};