import { useState, FormEvent } from 'react';
import { Search, MapPin, Home, DollarSign, ChevronDown } from 'lucide-react';

interface ISearchParams {
  location: string;
  propertyType: string;
  maxPrice: string;
}

const HeroSection = () => {
  const [searchParams, setSearchParams] = useState<ISearchParams>({
    location: '',
    propertyType: '',
    maxPrice: ''
  });
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState<Array<{field: string; message: string}>>([]);

  console.log('Current searchParams:', searchParams); // Debug log

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const target = e.target as HTMLInputElement | HTMLSelectElement;
    const { name, value } = target;
    
    console.log(`Field changed - ${name}:`, value);
    
    setSearchParams(prev => ({
      ...prev,
      [name]: value
    }));
    
    setErrors(prev => prev.filter(e => e.field !== name));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setErrors([]);
    
    try {
      // Validate form
      const newErrors: Array<{field: string; message: string}> = [];
      if (!searchParams.location) {
        newErrors.push({ field: 'location', message: 'Location is required' });
      }
      
      if (newErrors.length > 0) {
        setErrors(newErrors);
        return;
      }
      
      // Construct search URL with query parameters
      const params = new URLSearchParams();
      if (searchParams.location) params.append('location', searchParams.location);
      if (searchParams.propertyType) params.append('type', searchParams.propertyType);
      if (searchParams.maxPrice) params.append('max_price', searchParams.maxPrice);
      
      // Navigate to listings page with search parameters
      window.location.href = `/listings?${params.toString()}`;
      
    } catch (error) {
      console.error('Search error:', error);
      setErrors([{ field: 'general', message: 'An error occurred during search' }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="relative overflow-hidden min-h-[80vh] flex items-center" style={{
      position: 'relative',
      zIndex: 1,
      background: 'linear-gradient(0deg, rgba(0,0,0,0.3) 0%, rgba(0,0,0,0.1) 100%)'
    }}>
      {/* Background Image with Parallax Effect */}
      <div className="absolute inset-0 z-1">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url(/images/hero-bg.jpg)',
            backgroundColor: '#2D2D2D',
            transform: 'translateZ(0)', // Force hardware acceleration
            willChange: 'transform' // Optimize for animations
          }}
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black/40" />
      </div>
      {/* Content Container */}
      <div className="relative z-10 w-full py-20 lg:py-28">
        <div className="container mx-auto px-4">
          {/* Hero Content */}
          <div className="max-w-4xl mx-auto text-center mb-12 lg:mb-16">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              <span className="text-white drop-shadow-xl">Luxury Living,</span>
              <br className="hidden sm:block" />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-champagne to-gold">
                Perfected
              </span>
            </h1>
            <p className="text-xl md:text-2xl font-light text-platinum/95 max-w-2xl mx-auto mb-8 tracking-wide leading-relaxed">
              Discover Your Dream Home Amongst the World's Most Prestigious Properties
            </p>
          </div>

          {/* Search Form */}
          <div className="max-w-6xl mx-auto px-4 relative z-10">
            <div className="backdrop-blur-lg bg-white/10 backdrop-saturate-150 rounded-2xl border border-white/20 shadow-2xl overflow-hidden transition-all duration-500 hover:shadow-2xl hover:bg-white/15 hover:border-white/30 transform hover:-translate-y-1">
              <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 p-6">
                {/* Location */}
                  {/* Location Input */}
                  <div className="relative group">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                      <MapPin className="h-5 w-5 text-champagne/90 group-hover:text-champagne transition-colors" />
                    </div>
                    <input
                      id="location-input"
                      type="text"
                      name="location"
                      value={searchParams.location}
                      onChange={handleInputChange}
                      placeholder="Enter location"
                      aria-label="Location"
                      aria-invalid={errors.some(e => e.field === 'location')}
                      className={`w-full pl-11 pr-4 py-3.5 text-base rounded-xl bg-white/20 backdrop-blur-sm border-2 ${
                        errors.some(e => e.field === 'location') 
                          ? 'border-red-500' 
                          : 'border-white/30 focus:ring-2 focus:ring-champagne/70 focus:border-champagne/70 hover:border-champagne/50'
                      } text-white placeholder-white/70 focus:outline-none transition-all duration-300`}
                    />
                  </div>
                
                {/* Property Type */}
                  {/* Property Type Dropdown */}
                  <div className="relative group">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                      <Home className="h-5 w-5 text-champagne/90 group-hover:text-champagne transition-colors" />
                    </div>
                    <select
                      id="property-type-select"
                      name="propertyType"
                      value={searchParams.propertyType}
                      onChange={handleInputChange}
                      className="w-full pl-11 pr-10 py-3.5 text-base rounded-xl bg-white/20 backdrop-blur-sm border-2 border-white/30 text-white focus:outline-none focus:ring-2 focus:ring-champagne/70 focus:border-champagne/70 appearance-none transition-all cursor-pointer hover:border-champagne/50"
                      style={{ WebkitAppearance: 'none' }}
                    >
                      <option value="" className="bg-gray-800 text-white">Property Type</option>
                      <option value="villa" className="bg-gray-800 text-white">Villa</option>
                      <option value="apartment" className="bg-gray-800 text-white">Apartment</option>
                      <option value="penthouse" className="bg-gray-800 text-white">Penthouse</option>
                      <option value="mansion" className="bg-gray-800 text-white">Mansion</option>
                    </select>
                    <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-white/50 pointer-events-none" />
                  </div>
                
                {/* Price Range */}
                  {/* Price Range Dropdown */}
                  <div className="relative group">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                      <DollarSign className="h-5 w-5 text-champagne/90 group-hover:text-champagne transition-colors" />
                    </div>
                    <select
                      id="max-price-select"
                      name="maxPrice"
                      value={searchParams.maxPrice}
                      onChange={handleInputChange}
                      className="w-full pl-11 pr-10 py-3.5 text-base rounded-xl bg-white/20 backdrop-blur-sm border-2 border-white/30 text-white focus:outline-none focus:ring-2 focus:ring-champagne/70 focus:border-champagne/70 appearance-none transition-all cursor-pointer hover:border-champagne/50"
                      style={{ WebkitAppearance: 'none' }}
                    >
                      <option value="" className="bg-gray-800 text-white">Max Price</option>
                      <option value="1000000" className="bg-gray-800 text-white">Up to $1M</option>
                      <option value="2500000" className="bg-gray-800 text-white">Up to $2.5M</option>
                      <option value="5000000" className="bg-gray-800 text-white">Up to $5M</option>
                      <option value="10000000" className="bg-gray-800 text-white">$10M+</option>
                    </select>
                    <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-white/50 pointer-events-none" />
                  </div>
                  {/* Search Button */}
                  <button
                    type="submit"
                    disabled={isLoading}
                    className={`relative w-full md:w-auto flex items-center justify-center gap-3 px-8 py-4 bg-gradient-to-r from-[#D4AF37] to-[#C5A74A] hover:from-[#C5A74A] hover:to-[#B59D42] text-white text-base font-semibold rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-[#C5A74A]/20 ${
                      isLoading 
                        ? 'opacity-80 cursor-not-allowed' 
                        : 'hover:scale-[1.02] active:scale-[0.98] transform'
                    } overflow-hidden group`}
                    aria-busy={isLoading}
                  >
                    {/* Animated background effect */}
                    <span className="absolute inset-0 bg-white/10 group-hover:bg-white/20 transition-all duration-300 opacity-0 group-hover:opacity-100"></span>
                    
                    {/* Button content */}
                    <span className="relative z-10 flex items-center justify-center gap-2">
                      {isLoading ? (
                        <>
                          <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          <span className="text-lg font-medium">Searching...</span>
                        </>
                      ) : (
                        <>
                          <Search className="w-5 h-5" />
                          <span className="text-lg font-medium">Find Properties</span>
                        </>
                      )}
                    </span>
                  </button>
                </div>
                
                {/* Error messages */}
                <div className="px-6 pb-4 -mt-2">
                  {errors.some(e => e.field === 'location') && (
                    <p className="text-red-400 text-sm font-medium">
                      {errors.find(e => e.field === 'location')?.message}
                    </p>
                  )}
                  {errors.some(e => e.field === 'general') && (
                    <p className="text-red-400 text-sm">
                      {errors.find(e => e.field === 'general')?.message}
                    </p>
                  )}
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
