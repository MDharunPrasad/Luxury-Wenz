import { useState, FormEvent, ChangeEvent } from 'react';
import { Search, MapPin, Home, DollarSign, ChevronDown } from 'lucide-react';

interface ISearchParams {
  location: string;
  propertyType: string;
  minPrice: string;
  maxPrice: string;
}

const HeroSection = () => {
  const [searchParams, setSearchParams] = useState<ISearchParams>({
    location: '',
    propertyType: '',
    minPrice: '',
    maxPrice: ''
  });
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState<Array<{field: string; message: string}>>([]);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setSearchParams(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear error for this field if it exists
    if (errors.some(e => e.field === name)) {
      setErrors(errors.filter(e => e.field !== name));
    }
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
      
      // Handle search logic here
      console.log('Searching with params:', searchParams);
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
    } catch (error) {
      console.error('Search error:', error);
      setErrors([{ field: 'general', message: 'An error occurred during search' }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="relative overflow-hidden min-h-[75vh] md:min-h-[85vh]" style={{
      backgroundImage: 'url(/images/hero-bg.jpg?t=' + new Date().getTime() + ')' ,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      backgroundColor: '#2D2D2D' // Fallback color
    }}>
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/40"></div>
      
      {/* Content Container */}
      <div className="relative pt-32 pb-24 md:pt-36 h-full flex flex-col">
        {/* Hero Content */}
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            <span className="text-white drop-shadow-lg">Luxury Living,</span>
            <br className="md:hidden" />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-champagne to-gold">
              Perfected
            </span>
          </h1>
          <p className="text-2xl md:text-3xl font-light text-platinum/90 max-w-3xl mx-auto mb-8 md:mb-12 tracking-wide">
            Where Elegance Meets Extraordinary Living Spaces
          </p>
        </div>

        <div className="container mx-auto px-4 mt-auto mb-24 max-w-6xl">
          <div className="backdrop-blur-lg bg-white/10 rounded-2xl border border-white/20 shadow-2xl overflow-hidden transition-all duration-300 hover:bg-white/20 hover:shadow-xl transform hover:-translate-y-1">
            <form onSubmit={handleSubmit}>
              <div className="flex flex-col sm:flex-row items-stretch gap-4 p-6">
                {/* Location */}
                <div className="relative group flex-1 min-w-[220px]">
                  <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-champagne/90 group-hover:text-champagne transition-colors" />
                  <input
                    type="text"
                    name="location"
                    value={searchParams.location}
                    onChange={handleInputChange}
                    placeholder="Location"
                    aria-label="Location"
                    aria-invalid={errors.some(e => e.field === 'location')}
                    className={`w-full pl-11 pr-4 py-3.5 text-base rounded-xl bg-white/20 backdrop-blur-sm border-2 ${
                      errors.some(e => e.field === 'location') 
                        ? 'border-red-500' 
                        : 'border-white/30 focus:ring-2 focus:ring-champagne/70 focus:border-champagne/70'
                    } text-white placeholder-white/70 focus:outline-none transition-all`}
                  />
                </div>
                
                {/* Property Type */}
                <div className="relative group flex-1 min-w-[200px]">
                  <Home className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-champagne/90 group-hover:text-champagne transition-colors" />
                  <select
                    name="propertyType"
                    value={searchParams.propertyType}
                    onChange={handleInputChange}
                    className="w-full pl-11 pr-9 py-3.5 text-base rounded-xl bg-white/20 backdrop-blur-sm border-2 border-white/30 text-white focus:outline-none focus:ring-2 focus:ring-champagne/70 focus:border-champagne/70 appearance-none transition-all"
                  >
                    <option value="">Property Type</option>
                    <option value="villa">Villa</option>
                    <option value="apartment">Apartment</option>
                    <option value="penthouse">Penthouse</option>
                    <option value="mansion">Mansion</option>
                  </select>
                  <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-platinum/50" />
                </div>
                
                {/* Price Range */}
                <div className="relative group flex-1 min-w-[150px]">
                  <DollarSign className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-champagne/90 group-hover:text-champagne transition-colors" />
                  <select
                    name="maxPrice"
                    value={searchParams.maxPrice}
                    onChange={handleInputChange}
                    className="w-full pl-11 pr-9 py-3.5 text-base rounded-xl bg-white/20 backdrop-blur-sm border-2 border-white/30 text-white focus:outline-none focus:ring-2 focus:ring-champagne/70 focus:border-champagne/70 appearance-none transition-all"
                  >
                    <option value="">Max Price</option>
                    <option value="1000000">$1M</option>
                    <option value="2500000">$2.5M</option>
                    <option value="5000000">$5M</option>
                    <option value="10000000">$10M+</option>
                  </select>
                  <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-platinum/50" />
                </div>
                {/* Search Button */}
                <button
                  type="submit"
                  disabled={isLoading}
                  className={`flex-shrink-0 w-full sm:w-auto flex items-center justify-center gap-3 px-8 py-4 bg-champagne/90 backdrop-blur-sm hover:bg-champagne text-jet text-base font-semibold rounded-xl transition-all hover:shadow-lg ${
                    isLoading 
                      ? 'opacity-70 cursor-not-allowed' 
                      : 'hover:scale-[1.02] active:scale-95'
                  }`}
                  aria-busy={isLoading}
                >
                  {isLoading ? (
                    <>
                      <svg className="animate-spin h-4 w-4 text-jet" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      <span>Searching...</span>
                    </>
                  ) : (
                    <>
                      <Search className="w-4 h-4 flex-shrink-0" />
                      <span>Search</span>
                    </>
                  )}
                </button>
              </div>
              
              {/* Error messages */}
              {errors.some(e => e.field === 'location') && (
                <div className="px-4 -mt-2 mb-1">
                  <p className="text-red-400 text-xs">
                    {errors.find(e => e.field === 'location')?.message}
                  </p>
                </div>
              )}
              {errors.some(e => e.field === 'general') && (
                <div className="px-4 pb-3 -mt-2">
                  <p className="text-red-400 text-xs">
                    {errors.find(e => e.field === 'general')?.message}
                  </p>
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
