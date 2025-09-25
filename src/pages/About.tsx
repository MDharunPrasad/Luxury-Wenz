import React from 'react';
import { Award, Users, Home, TrendingUp, CheckCircle, Star } from 'lucide-react';

const stats = [
  { icon: Home, value: '1000+', label: 'Properties Sold' },
  { icon: Users, value: '500+', label: 'Happy Clients' },
  { icon: Award, value: '15+', label: 'Years Experience' },
  { icon: TrendingUp, value: '₹500Cr+', label: 'Transaction Value' }
];

const team = [
  {
    name: 'Rajesh Kumar',
    role: 'Founder & CEO',
    image: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop',
    experience: '15+ years',
    specialization: 'Luxury Properties'
  },
  {
    name: 'Priya Sharma',
    role: 'Head of Sales',
    image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop',
    experience: '12+ years',
    specialization: 'Residential Sales'
  },
  {
    name: 'Vikram Singh',
    role: 'Investment Advisor',
    image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop',
    experience: '10+ years',
    specialization: 'Commercial Properties'
  },
  {
    name: 'Anita Desai',
    role: 'Client Relations Manager',
    image: 'https://images.pexels.com/photos/762020/pexels-photo-762020.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop',
    experience: '8+ years',
    specialization: 'Customer Service'
  }
];

const values = [
  {
    icon: CheckCircle,
    title: 'Transparency',
    description: 'We believe in honest, transparent dealings with complete disclosure of all property details and pricing.'
  },
  {
    icon: Star,
    title: 'Excellence',
    description: 'We strive for excellence in every interaction, ensuring the highest standards of service quality.'
  },
  {
    icon: Users,
    title: 'Client-Centric',
    description: 'Our clients are at the heart of everything we do. We tailor our services to meet individual needs.'
  },
  {
    icon: TrendingUp,
    title: 'Innovation',
    description: 'We embrace technology and innovative solutions to make property transactions seamless and efficient.'
  }
];

export const About: React.FC = () => {
  return (
    <div className="min-h-screen bg-neutral-50">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-emerald-600 to-emerald-500 text-white">
        <div className="container mx-auto px-6 text-center">
          <h1 className="font-playfair text-4xl lg:text-5xl font-bold mb-6">
            About Flaunt Properties
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Your trusted partner in premium real estate across India's major cities. 
            We specialize in connecting discerning clients with exceptional properties.
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-playfair text-3xl lg:text-4xl font-bold text-neutral-900 mb-6">
                Our Story
              </h2>
              <p className="text-neutral-600 text-lg leading-relaxed mb-6">
                Founded in 2009, Flaunt Properties began with a simple vision: to revolutionize 
                the real estate experience in India by combining deep market expertise with 
                personalized service excellence.
              </p>
              <p className="text-neutral-600 text-lg leading-relaxed mb-6">
                Over the years, we've grown from a small team of passionate real estate 
                professionals to one of India's most trusted property consultancies, 
                serving clients across Mumbai, Delhi, Bangalore, Pune, and other major cities.
              </p>
              <p className="text-neutral-600 text-lg leading-relaxed">
                Today, we're proud to have facilitated over 1000 successful property 
                transactions, helping families find their dream homes and investors 
                build profitable portfolios.
              </p>
            </div>
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/1396132/pexels-photo-1396132.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Modern office building"
                className="rounded-3xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-lg">
                <div className="text-3xl font-bold text-emerald-600">15+</div>
                <div className="text-neutral-600 font-medium">Years of Excellence</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-playfair text-3xl lg:text-4xl font-bold text-neutral-900 mb-6">
              Our Achievements
            </h2>
            <p className="text-neutral-600 text-lg max-w-3xl mx-auto">
              Numbers that reflect our commitment to excellence and client satisfaction.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div key={index} className="text-center group">
                  <div className="w-16 h-16 bg-emerald-100 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-emerald-600 transition-colors duration-300">
                    <Icon className="w-8 h-8 text-emerald-600 group-hover:text-white transition-colors duration-300" />
                  </div>
                  <div className="text-4xl font-bold text-neutral-900 mb-2">{stat.value}</div>
                  <div className="text-neutral-600 font-medium">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-neutral-900 text-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-playfair text-3xl lg:text-4xl font-bold mb-6">
              Our Values
            </h2>
            <p className="text-neutral-300 text-lg max-w-3xl mx-auto">
              The principles that guide everything we do and shape our relationships with clients.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div key={index} className="text-center group">
                  <div className="w-16 h-16 bg-emerald-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-4 group-hover:text-emerald-400 transition-colors duration-300">
                    {value.title}
                  </h3>
                  <p className="text-neutral-300 leading-relaxed">
                    {value.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-playfair text-3xl lg:text-4xl font-bold text-neutral-900 mb-6">
              Meet Our Team
            </h2>
            <p className="text-neutral-600 text-lg max-w-3xl mx-auto">
              Our experienced professionals are dedicated to providing exceptional 
              service and expert guidance throughout your property journey.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div key={index} className="bg-white rounded-3xl p-6 shadow-lg border border-neutral-100 text-center group hover:-translate-y-2 transition-all duration-300">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-24 h-24 rounded-full mx-auto mb-4 object-cover ring-4 ring-emerald-100 group-hover:ring-emerald-600 transition-all duration-300"
                />
                <h3 className="text-xl font-bold text-neutral-900 mb-1 group-hover:text-emerald-600 transition-colors duration-300">
                  {member.name}
                </h3>
                <p className="text-emerald-600 font-semibold mb-2">{member.role}</p>
                <p className="text-sm text-neutral-600 mb-1">{member.experience}</p>
                <p className="text-sm text-neutral-500">{member.specialization}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-emerald-600 to-emerald-500 text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="font-playfair text-3xl lg:text-4xl font-bold mb-6">
            Ready to Find Your Dream Property?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
            Let our experienced team help you navigate the real estate market 
            and find the perfect property that meets your needs and budget.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 rounded-full bg-white text-emerald-600 font-semibold hover:shadow-2xl hover:scale-105 transition-all duration-300">
              View Properties
            </button>
            <button className="px-8 py-4 rounded-full border-2 border-white text-white font-semibold hover:bg-white hover:text-emerald-600 transition-all duration-300">
              Contact Us
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};