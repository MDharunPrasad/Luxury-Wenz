import React from 'react';
import { Star, Quote, CheckCircle } from 'lucide-react';

const testimonials = [
  {
    name: "Priya Sharma",
    role: "Software Engineer",
    location: "Mumbai",
    image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop",
    rating: 5,
    text: "Flaunt helped me find my dream apartment in Bandra. The team was professional, responsive, and made the entire process seamless. Highly recommended!",
    verified: true,
    propertyType: "3 BHK Apartment"
  },
  {
    name: "Rajesh Kumar",
    role: "Business Owner",
    location: "Bangalore",
    image: "https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop",
    rating: 5,
    text: "Excellent service and genuine listings. They understood my requirements perfectly and showed me properties that matched my budget and preferences exactly.",
    verified: true,
    propertyType: "Villa"
  },
  {
    name: "Anita Desai",
    role: "Marketing Director",
    location: "Pune",
    image: "https://images.pexels.com/photos/762020/pexels-photo-762020.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop",
    rating: 5,
    text: "Professional team with deep market knowledge. They guided me through every step of buying my first home. The documentation process was handled expertly.",
    verified: true,
    propertyType: "2 BHK Apartment"
  },
  {
    name: "Vikram Singh",
    role: "Investment Banker",
    location: "Gurgaon",
    image: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop",
    rating: 5,
    text: "Outstanding service! They helped me invest in multiple properties across Delhi NCR. Their market insights and negotiation skills saved me lakhs.",
    verified: true,
    propertyType: "Penthouse"
  },
  {
    name: "Meera Patel",
    role: "Doctor",
    location: "Ahmedabad",
    image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop",
    rating: 5,
    text: "Transparent dealings and honest advice. They showed me properties within my budget and helped negotiate the best price. Very satisfied with their service.",
    verified: true,
    propertyType: "Independent House"
  },
  {
    name: "Arjun Reddy",
    role: "Tech Entrepreneur",
    location: "Hyderabad",
    image: "https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop",
    rating: 5,
    text: "Quick and efficient service. Found my office space in just 2 weeks. The team understood my business requirements and delivered exactly what I needed.",
    verified: true,
    propertyType: "Commercial Space"
  }
];

export const TestimonialsSection: React.FC = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-neutral-900 to-neutral-800 text-white overflow-hidden relative">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }} />
      </div>

      <div className="container mx-auto px-6 relative">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="font-playfair text-4xl lg:text-5xl font-bold mb-6">
            What Our
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-emerald-300"> Clients Say</span>
          </h2>
          <p className="text-xl text-neutral-300 max-w-3xl mx-auto">
            Real experiences from satisfied clients who found their dream properties with us. 
            Join thousands of happy homeowners across India.
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
              <div className="p-8 rounded-3xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-500 hover:-translate-y-2 transform-gpu relative overflow-hidden h-full">
                {/* Quote Icon */}
                <div className="absolute top-6 right-6 opacity-20">
                  <Quote className="w-8 h-8 text-emerald-400" />
                </div>

                {/* Rating */}
                <div className="flex items-center space-x-2 mb-6">
                  <div className="flex space-x-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-emerald-400 fill-current" />
                    ))}
                  </div>
                  {testimonial.verified && (
                    <div className="flex items-center space-x-1 text-emerald-400">
                      <CheckCircle className="w-4 h-4" />
                      <span className="text-xs font-medium">Verified</span>
                    </div>
                  )}
                </div>

                {/* Testimonial Text */}
                <p className="text-neutral-200 text-lg leading-relaxed mb-6 italic">
                  "{testimonial.text}"
                </p>

                {/* Property Type */}
                <div className="mb-6">
                  <span className="inline-block px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 text-sm font-medium">
                    {testimonial.propertyType}
                  </span>
                </div>

                {/* Client Info */}
                <div className="flex items-center space-x-4 mt-auto">
                  <div className="relative">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-16 h-16 rounded-full object-cover ring-2 ring-emerald-400/30 group-hover:ring-emerald-400/60 transition-all duration-300"
                    />
                    <div className="absolute inset-0 rounded-full bg-gradient-to-br from-emerald-400/20 to-emerald-500/20 group-hover:from-emerald-400/40 group-hover:to-emerald-500/40 transition-all duration-300" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white text-lg group-hover:text-emerald-300 transition-colors duration-300">
                      {testimonial.name}
                    </h4>
                    <p className="text-neutral-400 text-sm">{testimonial.role}</p>
                    <p className="text-emerald-400 text-sm font-medium">{testimonial.location}</p>
                  </div>
                </div>

                {/* Decorative Line */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-emerald-500 to-emerald-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
              </div>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
          <div className="group cursor-pointer">
            <div className="text-4xl font-bold text-emerald-400 mb-2 group-hover:scale-110 transition-transform duration-300">500+</div>
            <div className="text-neutral-300 font-medium">Happy Clients</div>
          </div>
          <div className="group cursor-pointer">
            <div className="text-4xl font-bold text-emerald-400 mb-2 group-hover:scale-110 transition-transform duration-300">1000+</div>
            <div className="text-neutral-300 font-medium">Properties Sold</div>
          </div>
          <div className="group cursor-pointer">
            <div className="text-4xl font-bold text-emerald-400 mb-2 group-hover:scale-110 transition-transform duration-300">25+</div>
            <div className="text-neutral-300 font-medium">Cities Covered</div>
          </div>
          <div className="group cursor-pointer">
            <div className="text-4xl font-bold text-emerald-400 mb-2 group-hover:scale-110 transition-transform duration-300">98%</div>
            <div className="text-neutral-300 font-medium">Client Satisfaction</div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <div className="inline-flex flex-col items-center space-y-4">
            <h3 className="font-playfair text-3xl font-bold">
              Ready to Find Your Dream Home?
            </h3>
            <p className="text-neutral-300 max-w-md">
              Join our satisfied clients and experience premium property services.
            </p>
            <button className="px-8 py-4 rounded-full bg-gradient-to-r from-emerald-500 to-emerald-400 text-white font-semibold hover:shadow-2xl hover:scale-105 transition-all duration-300">
              Start Your Search
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};