import React from 'react';
import { TrendingUp, TrendingDown, DollarSign, BarChart3, Globe, Award } from 'lucide-react';

const marketData = [
  {
    location: "Manhattan",
    change: "+12.5%",
    trend: "up",
    price: "$2.8M",
    volume: "1,247 sales"
  },
  {
    location: "Dubai Marina",
    change: "+8.3%",
    trend: "up",
    price: "$1.2M",
    volume: "892 sales"
  },
  {
    location: "London West End",
    change: "-2.1%",
    trend: "down",
    price: "$3.5M",
    volume: "634 sales"
  },
  {
    location: "Beverly Hills",
    change: "+15.7%",
    trend: "up",
    price: "$4.2M",
    volume: "423 sales"
  }
];

const achievements = [
  {
    icon: Award,
    value: "50+",
    label: "Industry Awards",
    description: "Recognized excellence in luxury real estate"
  },
  {
    icon: Globe,
    value: "25",
    label: "Global Cities",
    description: "Premium locations worldwide"
  },
  {
    icon: DollarSign,
    value: "$10B+",
    label: "Transaction Volume",
    description: "Annual luxury property sales"
  },
  {
    icon: BarChart3,
    value: "98%",
    label: "Client Satisfaction",
    description: "Exceptional service delivery"
  }
];

export const MarketInsights: React.FC = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-platinum/30 to-ivory">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="font-playfair text-5xl lg:text-6xl font-bold text-jet mb-6">
            Market
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald to-champagne"> Insights</span>
          </h2>
          <p className="text-xl text-jet/70 max-w-3xl mx-auto">
            Stay ahead with real-time luxury real estate market data, 
            trends, and insights from the world's premier locations.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Market Data */}
          <div className="animate-fade-in-up">
            <h3 className="font-playfair text-3xl font-bold text-jet mb-8">Live Market Data</h3>
            <div className="space-y-4">
              {marketData.map((market, index) => (
                <div
                  key={index}
                  className="p-6 rounded-2xl bg-white/50 backdrop-blur-sm border border-white/30 hover:bg-white/70 hover:shadow-lg transition-all duration-300 group cursor-pointer"
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-semibold text-jet text-lg mb-1">{market.location}</h4>
                      <p className="text-jet/60 text-sm">{market.volume}</p>
                    </div>
                    <div className="text-right">
                      <div className="flex items-center space-x-2 mb-1">
                        {market.trend === 'up' ? (
                          <TrendingUp className="w-5 h-5 text-emerald" />
                        ) : (
                          <TrendingDown className="w-5 h-5 text-red-500" />
                        )}
                        <span className={`font-bold ${
                          market.trend === 'up' ? 'text-emerald' : 'text-red-500'
                        }`}>
                          {market.change}
                        </span>
                      </div>
                      <p className="text-jet font-bold text-lg">{market.price}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 p-6 rounded-2xl bg-gradient-to-r from-emerald/10 to-champagne/10 border border-emerald/20">
              <div className="flex items-center space-x-3 mb-4">
                <BarChart3 className="w-6 h-6 text-emerald" />
                <h4 className="font-semibold text-jet text-lg">Market Analysis</h4>
              </div>
              <p className="text-jet/70 mb-4">
                Luxury real estate markets are showing strong resilience with prime locations 
                experiencing continued appreciation despite global economic uncertainties.
              </p>
              <button className="text-emerald font-semibold hover:underline">
                View Full Market Report →
              </button>
            </div>
          </div>

          {/* Achievements */}
          <div className="animate-fade-in-up" style={{ animationDelay: '200ms' }}>
            <h3 className="font-playfair text-3xl font-bold text-jet mb-8">Our Achievements</h3>
            <div className="grid grid-cols-2 gap-6">
              {achievements.map((achievement, index) => {
                const Icon = achievement.icon;
                
                return (
                  <div
                    key={index}
                    className="group cursor-pointer"
                  >
                    <div className="p-6 rounded-2xl bg-white/50 backdrop-blur-sm border border-white/30 hover:bg-white/70 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 text-center">
                      <div className="inline-flex p-3 rounded-full bg-gradient-to-r from-emerald to-champagne mb-4 group-hover:scale-110 transition-transform duration-300">
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <div className="text-3xl font-bold text-jet mb-2 group-hover:text-emerald transition-colors duration-300">
                        {achievement.value}
                      </div>
                      <div className="font-semibold text-jet mb-2">
                        {achievement.label}
                      </div>
                      <div className="text-sm text-jet/60">
                        {achievement.description}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Newsletter Signup */}
            <div className="mt-8 p-6 rounded-2xl bg-jet text-white">
              <h4 className="font-playfair text-2xl font-bold mb-4">Market Newsletter</h4>
              <p className="text-platinum/80 mb-6">
                Get weekly luxury real estate market insights delivered to your inbox.
              </p>
              <div className="flex gap-3">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="flex-1 px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-platinum/60 focus:outline-none focus:ring-2 focus:ring-champagne/50"
                />
                <button className="px-6 py-3 rounded-xl bg-gradient-to-r from-emerald to-champagne text-white font-semibold hover:shadow-lg transition-all duration-300">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};