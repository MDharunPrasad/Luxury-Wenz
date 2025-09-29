import { useState, FormEvent, ChangeEvent } from 'react';
import { Search, MapPin, Home as HomeIcon, ChevronDown, DollarSign, Bed, Bath, Ruler, ChevronRight } from 'lucide-react';

interface ISearchParams {
  location: string;
  propertyType: string;
  minPrice: string;
  maxPrice: string;
  bedrooms: string;
  bathrooms: string;
  area: string;
}

type SearchError = {
  field: keyof ISearchParams | 'general';
  message: string;
};

const HeroSection = (): JSX.Element => {
  const [isSearchOpen, setIsSearchOpen] = useState<boolean>(true);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [errors, setErrors] = useState<SearchError[]>([]);
  const [searchParams, setSearchParams] = useState<ISearchParams>({
    location: '',
    propertyType: '',
    minPrice: '',
    maxPrice: '',
    bedrooms: '',
    bathrooms: '',
    area: ''
  });

  const validateForm = (): boolean => {
    const newErrors: SearchError[] = [];
    
    if (!searchParams.location.trim()) {
      newErrors.push({ field: 'location', message: 'Please enter a location' });
    }
    
    if (searchParams.minPrice && searchParams.maxPrice && 
        parseInt(searchParams.minPrice) > parseInt(searchParams.maxPrice)) {
      newErrors.push({ 
        field: 'maxPrice', 
        message: 'Maximum price must be greater than minimum price' 
      });
    }
    
    setErrors(newErrors);
    return newErrors.length === 0;
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setSearchParams(prev => ({ ...prev, [name]: value }));
    
    // Clear error for this field if it exists
    if (errors.some(error => error.field === name)) {
      setErrors(prev => prev.filter(error => error.field !== name));
    }
  };

  const handleSearch = async (e: FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) return;
    
    setIsLoading(true);
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Here you would typically make an API call
      console.log('Searching with params:', searchParams);
      
      // For demo purposes, we'll show a success message
      alert(`Searching for properties in ${searchParams.location}...`);
      
    } catch (error) {
      console.error('Search failed:', error);
      setErrors([{ 
        field: 'general', 
        message: 'An error occurred during search. Please try again.' 
      }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="relative overflow-hidden min-h-screen" style={{
      backgroundImage: 'url(/images/hero-bg.jpg?t=' + new Date().getTime() + ')',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      backgroundColor: '#2D2D2D' // Fallback color
    }}>
      {/* Dark overlay without blur */}
      <div className="absolute inset-0 bg-black/40"></div>
      {/* Content Container */}
      <div className="relative pt-32 pb-16 md:pt-40 md:pb-24 h-full">
        {/* Hero Content */}
        <div className="container mx-auto px-4 text-center text-white">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            <span className="text-champagne">
              Luxury Living,<br/>
              Perfected
            </span>
          </h1>
          <p className="text-2xl md:text-3xl font-light text-platinum/90 max-w-3xl mx-auto mb-12 tracking-wide">
            Where Elegance Meets Extraordinary Living Spaces
          </p>
        </div>

        {/* Search Bar */}
        <div className="container mx-auto px-4 mt-12">
          <div className="backdrop-blur-lg bg-white/10 rounded-2xl border border-white/20 shadow-2xl overflow-hidden transition-all duration-300 hover:bg-white/20 hover:shadow-xl transform hover:-translate-y-1">
            {/* Search Tabs */}
            <div className="flex border-b border-white/10">
              <button 
                className={`px-6 py-4 font-medium text-sm uppercase tracking-wider transition-colors ${isSearchOpen ? 'text-champagne border-b-2 border-champagne' : 'text-platinum/70 hover:text-white hover:border-white/20'}`}
                onClick={() => setIsSearchOpen(true)}
              >
                Search Properties
              </button>
              <button 
                className={`px-6 py-4 font-medium text-sm uppercase tracking-wider transition-colors ${!isSearchOpen ? 'text-champagne border-b-2 border-champagne' : 'text-platinum/70 hover:text-white'}`}
                onClick={() => setIsSearchOpen(false)}
              >
                Advanced Search
              </button>
            </div>
            
            {/* Search Form */}
            <form onSubmit={handleSearch} className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                {/* Location */}
                <div className="relative group">
                  <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-champagne/80 group-hover:text-champagne transition-colors" />
                  <input
                    type="text"
                    name="location"
                    value={searchParams.location}
                    onChange={handleInputChange}
                    placeholder="Location"
                    aria-label="Location"
                    aria-invalid={errors.some(e => e.field === 'location')}
                    className={`w-full pl-12 pr-4 py-3 rounded-lg bg-white/20 backdrop-blur-sm border ${
                      errors.some(e => e.field === 'location') 
                        ? 'border-red-500' 
                        : 'border-white/30 focus:ring-2 focus:ring-champagne/70 focus:border-champagne/70'
                    } text-white placeholder-white/70 focus:outline-none transition-all shadow-sm`}
                  />
                  {errors.some(e => e.field === 'location') && (
                    <p className="mt-1 text-sm text-red-400">
                      {errors.find(e => e.field === 'location')?.message}
                    </p>
                  )}
                </div>
                
                {/* Property Type */}
                <div className="relative group">
                  <HomeIcon className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-champagne/80 group-hover:text-champagne transition-colors" />
                  <select
                    name="propertyType"
                    value={searchParams.propertyType}
                    onChange={handleInputChange}
                    className="w-full pl-12 pr-10 py-3 rounded-lg bg-white/20 backdrop-blur-sm border border-white/30 text-white focus:outline-none focus:ring-2 focus:ring-champagne/70 focus:border-champagne/70 appearance-none transition-all shadow-sm"
                  >
                    <option value="">Property Type</option>
                    <option value="villa">Villa</option>
                    <option value="apartment">Apartment</option>
                    <option value="penthouse">Penthouse</option>
                    <option value="mansion">Mansion</option>
                  </select>
                  <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-platinum/50" />
                </div>
                
                {/* Price Range */}
                <div className="relative group">
                  <DollarSign className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-champagne/80 group-hover:text-champagne transition-colors" />
                  <select
                    name="maxPrice"
                    value={searchParams.maxPrice}
                    onChange={handleInputChange}
                    className="w-full pl-12 pr-10 py-3 rounded-lg bg-white/20 backdrop-blur-sm border border-white/30 text-white focus:outline-none focus:ring-2 focus:ring-champagne/70 focus:border-champagne/70 appearance-none transition-all shadow-sm"
                  >
                    <option value="">Max Price</option>
                    <option value="1000000">$1,000,000</option>
                    <option value="2500000">$2,500,000</option>
                    <option value="5000000">$5,000,000</option>
                    <option value="10000000">$10,000,000+</option>
                  </select>
                  <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-platinum/50" />
                </div>
                
                {/* Search Button */}
                <button
                  type="submit"
                  disabled={isLoading}
                  className={`flex items-center justify-center gap-2 px-6 py-3.5 bg-champagne/90 backdrop-blur-sm hover:bg-champagne text-jet font-semibold rounded-lg transition-all transform hover:scale-[1.02] active:scale-95 shadow-lg ${
                    isLoading 
                      ? 'opacity-70 cursor-not-allowed' 
                      : 'hover:shadow-xl'
                  }`}
                  aria-busy={isLoading}
                >
                  {isLoading ? (
                    <>
                      <svg className="animate-spin -ml-1 mr-2 h-5 w-5 text-jet" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      <span>Searching...</span>
                    </>
                  ) : (
                    <>
                      <Search className="w-5 h-5" />
                      <span>Search</span>
                    </>
                  )}
                </button>
              </div>
              
              {/* Advanced Search Fields */}
              <div className={`grid grid-cols-1 md:grid-cols-4 gap-4 mt-4 transition-all duration-300 ease-in-out overflow-hidden ${isSearchOpen ? 'max-h-0 opacity-0' : 'max-h-60 opacity-100'}`}>
                <div className="relative group">
                  <Bed className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-champagne/80 group-hover:text-champagne transition-colors" />
                  <select
                    name="bedrooms"
                    value={searchParams.bedrooms}
                    onChange={handleInputChange}
                    className="w-full pl-12 pr-10 py-3 rounded-lg bg-white/20 backdrop-blur-sm border border-white/30 text-white focus:outline-none focus:ring-2 focus:ring-champagne/70 focus:border-champagne/70 appearance-none transition-all shadow-sm"
                  >
                    <option value="">Bedrooms</option>
                    <option value="1">1+</option>
                    <option value="2">2+</option>
                    <option value="3">3+</option>
                    <option value="4">4+</option>
                    <option value="5">5+</option>
                  </select>
                  <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-platinum/50" />
                </div>
                
                <div className="relative group">
                  <Bath className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-champagne/80 group-hover:text-champagne transition-colors" />
                  <select
                    name="bathrooms"
                    value={searchParams.bathrooms}
                    onChange={handleInputChange}
                    className="w-full pl-12 pr-10 py-3 rounded-lg bg-white/20 backdrop-blur-sm border border-white/30 text-white focus:outline-none focus:ring-2 focus:ring-champagne/70 focus:border-champagne/70 appearance-none transition-all shadow-sm"
                  >
                    <option value="">Bathrooms</option>
                    <option value="1">1+</option>
                    <option value="2">2+</option>
                    <option value="3">3+</option>
                    <option value="4">4+</option>
                  </select>
                  <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-platinum/50" />
                </div>
                
                <div className="relative group">
                  <Ruler className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-champagne/80 group-hover:text-champagne transition-colors" />
                  <input
                    type="text"
                    name="area"
                    value={searchParams.area}
                    onChange={handleInputChange}
                    placeholder="Min. Area (sq ft)"
                    className="w-full pl-12 pr-4 py-3 rounded-lg bg-white/20 backdrop-blur-sm border border-white/30 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-champagne/70 focus:border-champagne/70 transition-all shadow-sm"
                  />
                </div>
                
                <button
                  type="button"
                  className="flex items-center justify-center gap-2 px-6 py-3 bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white border border-white/30 rounded-lg font-medium transition-all hover:shadow-lg"
                >
                  <span>More Filters</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
