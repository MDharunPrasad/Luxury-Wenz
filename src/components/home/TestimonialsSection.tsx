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
    <section className="py-20 bg-jet text-white overflow-hidden relative">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }} />
      </div>

      <div className="container mx-auto px-6 relative">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="font-playfair text-5xl lg:text-6xl font-bold mb-6">
            Client
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-champagne to-platinum"> Testimonials</span>
          </h2>
          <p className="text-xl text-platinum/80 max-w-3xl mx-auto">
            Hear from our distinguished clients about their luxury real estate experiences 
            and why they choose Flaunt for their most important property decisions.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="group animate-fade-in-up"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="p-8 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-500 hover:-translate-y-2 transform-gpu relative overflow-hidden">
                {/* Quote Icon */}
                <div className="absolute top-6 right-6 opacity-20">
                  <Quote className="w-8 h-8 text-champagne" />
                </div>

                {/* Rating */}
                <div className="flex space-x-1 mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-champagne fill-current" />
                  ))}
                </div>

                {/* Testimonial Text */}
                <p className="text-platinum/90 text-lg leading-relaxed mb-8 italic">
                  "{testimonial.text}"
                </p>

                {/* Client Info */}
                <div className="flex items-center space-x-4">
                  <div className="relative">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-16 h-16 rounded-full object-cover ring-2 ring-champagne/30 group-hover:ring-champagne/60 transition-all duration-300"
                    />
                    <div className="absolute inset-0 rounded-full bg-gradient-to-br from-emerald/20 to-champagne/20 group-hover:from-emerald/40 group-hover:to-champagne/40 transition-all duration-300" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white text-lg group-hover:text-champagne transition-colors duration-300">
                      {testimonial.name}
                    </h4>
                    <p className="text-platinum/70 text-sm">{testimonial.role}</p>
                    <p className="text-emerald text-sm font-medium">{testimonial.location}</p>
                  </div>
                </div>

                {/* Decorative Line */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-emerald to-champagne transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <div className="inline-flex flex-col items-center space-y-4">
            <h3 className="font-playfair text-3xl font-bold">
              Join Our Distinguished Clientele
            </h3>
            <p className="text-platinum/80 max-w-md">
              Experience the same level of exceptional service and luxury real estate expertise.
            </p>
            <button className="px-8 py-4 rounded-full bg-gradient-to-r from-emerald to-champagne text-white font-semibold hover:shadow-2xl hover:scale-105 transition-all duration-300">
              Start Your Journey
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};