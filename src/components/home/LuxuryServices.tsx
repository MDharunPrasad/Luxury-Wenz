import React from 'react';
import { Home, Key, TrendingUp, Shield, Users, Briefcase } from 'lucide-react';

const services = [
  {
    icon: Home,
    title: "Premium Sales",
    description: "Expert guidance through luxury property transactions with white-glove service and market insights.",
    gradient: "from-emerald to-emerald/80"
  },
  {
    icon: Key,
    title: "Exclusive Rentals",
    description: "Curated collection of luxury rentals in prime locations with concierge-level property management.",
    gradient: "from-champagne to-champagne/80"
  },
  {
    icon: TrendingUp,
    title: "Investment Advisory",
    description: "Strategic real estate investment guidance with comprehensive market analysis and ROI optimization.",
    gradient: "from-platinum to-platinum/80"
  },
  {
    icon: Shield,
    title: "Legal & Finance",
    description: "Complete legal and financial services for seamless transactions with trusted partner network.",
    gradient: "from-emerald/80 to-champagne/80"
  },
  {
    icon: Users,
    title: "Concierge Services",
    description: "Personalized lifestyle concierge services to enhance your luxury living experience.",
    gradient: "from-champagne/80 to-emerald/80"
  },
  {
    icon: Briefcase,
    title: "Portfolio Management",
    description: "Professional management of luxury real estate portfolios with performance tracking and optimization.",
    gradient: "from-platinum/80 to-emerald/80"
  }
];

export const LuxuryServices: React.FC = () => {
  return (
    <section className="py-20 bg-jet text-white overflow-hidden">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="font-playfair text-5xl lg:text-6xl font-bold mb-6">
            Luxury
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-champagne to-platinum"> Services</span>
          </h2>
          <p className="text-xl text-platinum/80 max-w-3xl mx-auto">
            Comprehensive luxury real estate services designed to exceed expectations 
            and deliver unparalleled results for our distinguished clientele.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            
            return (
              <div
                key={index}
                className="group cursor-pointer animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="relative p-8 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-500 hover:-translate-y-2 transform-gpu overflow-hidden">
                  {/* Background Gradient */}
                  <div className={`absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500 bg-gradient-to-br ${service.gradient}`} />
                  
                  {/* Icon */}
                  <div className="relative mb-6">
                    <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-br ${service.gradient} group-hover:scale-110 transition-transform duration-500`}>
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="relative">
                    <h3 className="font-playfair text-2xl font-bold mb-4 group-hover:text-champagne transition-colors duration-300">
                      {service.title}
                    </h3>
                    <p className="text-platinum/80 leading-relaxed">
                      {service.description}
                    </p>
                  </div>

                  {/* Hover Effect Lines */}
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-emerald to-champagne transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};