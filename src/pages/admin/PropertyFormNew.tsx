import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { 
  ArrowLeft, 
  Save, 
  X, 
  Plus,
  MapPin,
  Home,
  Bed,
  Bath,
  Ruler,
  Car,
  Calendar,
  Tag,
  DollarSign,
  Camera,
  Sparkles
} from 'lucide-react';
import { motion } from 'framer-motion';

// Property types and features based on your website
const propertyTypes = [
  'Apartment', 'House', 'Villa', 'Condo', 'Townhouse', 'Penthouse', 'Mansion', 'Land'
];

const propertyStatus = ['Draft', 'Active', 'Pending', 'Sold'];

const amenities = [
  'Swimming Pool', 'Gym', 'Parking', 'Garden', 'Security', 'Elevator',
  'Air Conditioning', 'Heating', 'Balcony', 'Furnished', 'Pet Friendly',
  'Ocean View', 'City View', 'Terrace', 'Fireplace', 'Walk-in Closet'
];

const PropertyFormNew = () => {
  const { id } = useParams();
  const isEditMode = !!id;
  const navigate = useNavigate();
  
  // Form state
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    propertyType: '',
    status: 'Draft',
    price: '',
    location: '',
    bedrooms: 1,
    bathrooms: 1,
    area: '',
    yearBuilt: new Date().getFullYear(),
    parking: 0,
    featured: false,
    selectedAmenities: [] as string[],
    thumbnail: '',
    images: [] as string[],
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [thumbnailPreview, setThumbnailPreview] = useState('');
  const [imagesPreviews, setImagesPreviews] = useState<string[]>([]);

  // Handle thumbnail upload
  const handleThumbnailUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        const result = event.target?.result as string;
        setThumbnailPreview(result);
        setFormData(prev => ({
          ...prev,
          thumbnail: result
        }));
      };
      reader.readAsDataURL(file);
    }
  };

  // Handle multiple images upload
  const handleImagesUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || []);
    if (files.length > 4) {
      alert('You can only upload up to 4 additional images');
      return;
    }

    const newPreviews: string[] = [];
    const newImages: string[] = [];

    files.forEach(file => {
      const reader = new FileReader();
      reader.onload = (event) => {
        const result = event.target?.result as string;
        newPreviews.push(result);
        newImages.push(result);
        
        if (newPreviews.length === files.length) {
          setImagesPreviews(newPreviews);
          setFormData(prev => ({
            ...prev,
            images: newImages
          }));
        }
      };
      reader.readAsDataURL(file);
    });
  };

  // Form submission with localStorage
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Get existing properties from localStorage
      const existingProperties = JSON.parse(localStorage.getItem('admin_properties') || '[]');
      
      // Create property object
      const propertyData = {
        id: isEditMode ? id : Date.now().toString(),
        ...formData,
        price: parseInt(formData.price) || 0,
        createdAt: new Date().toISOString(),
      };

      let updatedProperties;
      if (isEditMode) {
        // Update existing property
        updatedProperties = existingProperties.map((p: any) => 
          p.id === id ? propertyData : p
        );
      } else {
        // Add new property
        updatedProperties = [...existingProperties, propertyData];
      }

      // Save to localStorage
      localStorage.setItem('admin_properties', JSON.stringify(updatedProperties));
      
      console.log('Property saved:', propertyData);
      
      // Simulate API delay
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      setIsSubmitting(false);
      navigate('/admin/properties');
    } catch (error) {
      console.error('Error saving property:', error);
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    
    if (type === 'checkbox') {
      const checked = (e.target as HTMLInputElement).checked;
      setFormData(prev => ({
        ...prev,
        [name]: checked
      }));
    } else if (type === 'number') {
      setFormData(prev => ({
        ...prev,
        [name]: parseInt(value) || 0
      }));
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: value
      }));
    }
  };

  const handleAmenityToggle = (amenity: string) => {
    setFormData(prev => ({
      ...prev,
      selectedAmenities: prev.selectedAmenities.includes(amenity)
        ? prev.selectedAmenities.filter(a => a !== amenity)
        : [...prev.selectedAmenities, amenity]
    }));
  };



  return (
    <div className="max-w-4xl mx-auto space-y-8">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <button
            onClick={() => navigate('/admin/properties')}
            className="p-2 rounded-xl bg-white border border-gray-200 text-gray-600 hover:bg-gray-50 transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
          </button>
          <div>
            <h1 className="text-3xl font-bold text-jet font-playfair">
              {isEditMode ? 'Edit Property' : 'Add New Property'}
            </h1>
            <p className="text-gray-600">Create a stunning property listing</p>
          </div>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-8">
        {/* Basic Information */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100"
        >
          <div className="flex items-center mb-6">
            <div className="w-10 h-10 bg-gradient-to-r from-emerald to-emerald/90 rounded-xl flex items-center justify-center mr-3">
              <Home className="w-6 h-6 text-white" />
            </div>
            <h2 className="text-xl font-bold text-jet">Basic Information</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Property Title *
              </label>
              <input
                type="text"
                name="title"
                value={formData.title}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-emerald/50 focus:border-emerald transition-all duration-200"
                placeholder="e.g., Luxury Penthouse with City Views"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Property Type *
              </label>
              <select
                name="propertyType"
                value={formData.propertyType}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-emerald/50 focus:border-emerald transition-all duration-200"
              >
                <option value="">Select Type</option>
                {propertyTypes.map(type => (
                  <option key={type} value={type}>{type}</option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Status
              </label>
              <select
                name="status"
                value={formData.status}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-emerald/50 focus:border-emerald transition-all duration-200"
              >
                {propertyStatus.map(status => (
                  <option key={status} value={status}>{status}</option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Price (USD) *
              </label>
              <div className="relative">
                <DollarSign className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="number"
                  name="price"
                  value={formData.price}
                  onChange={handleInputChange}
                  required
                  className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-emerald/50 focus:border-emerald transition-all duration-200"
                  placeholder="2500000"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Location *
              </label>
              <div className="relative">
                <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  name="location"
                  value={formData.location}
                  onChange={handleInputChange}
                  required
                  className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-emerald/50 focus:border-emerald transition-all duration-200"
                  placeholder="Manhattan, NY"
                />
              </div>
            </div>

            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Description
              </label>
              <textarea
                name="description"
                value={formData.description}
                onChange={handleInputChange}
                rows={4}
                className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-emerald/50 focus:border-emerald transition-all duration-200 resize-none"
                placeholder="Describe the property's unique features and amenities..."
              />
            </div>
          </div>
        </motion.div>

        {/* Property Details */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100"
        >
          <div className="flex items-center mb-6">
            <div className="w-10 h-10 bg-gradient-to-r from-champagne to-champagne/90 rounded-xl flex items-center justify-center mr-3">
              <Ruler className="w-6 h-6 text-white" />
            </div>
            <h2 className="text-xl font-bold text-jet">Property Details</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                <Bed className="w-4 h-4 inline mr-1" />
                Bedrooms
              </label>
              <input
                type="number"
                name="bedrooms"
                value={formData.bedrooms}
                onChange={handleInputChange}
                min="0"
                className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-emerald/50 focus:border-emerald transition-all duration-200"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                <Bath className="w-4 h-4 inline mr-1" />
                Bathrooms
              </label>
              <input
                type="number"
                name="bathrooms"
                value={formData.bathrooms}
                onChange={handleInputChange}
                min="0"
                step="0.5"
                className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-emerald/50 focus:border-emerald transition-all duration-200"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                <Ruler className="w-4 h-4 inline mr-1" />
                Area (sq ft)
              </label>
              <input
                type="text"
                name="area"
                value={formData.area}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-emerald/50 focus:border-emerald transition-all duration-200"
                placeholder="2,500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                <Car className="w-4 h-4 inline mr-1" />
                Parking Spaces
              </label>
              <input
                type="number"
                name="parking"
                value={formData.parking}
                onChange={handleInputChange}
                min="0"
                className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-emerald/50 focus:border-emerald transition-all duration-200"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                <Calendar className="w-4 h-4 inline mr-1" />
                Year Built
              </label>
              <input
                type="number"
                name="yearBuilt"
                value={formData.yearBuilt}
                onChange={handleInputChange}
                min="1900"
                max={new Date().getFullYear()}
                className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-emerald/50 focus:border-emerald transition-all duration-200"
              />
            </div>

            <div className="md:col-span-3">
              <label className="flex items-center space-x-3">
                <input
                  type="checkbox"
                  name="featured"
                  checked={formData.featured}
                  onChange={handleInputChange}
                  className="w-5 h-5 text-emerald bg-gray-100 border-gray-300 rounded focus:ring-emerald/50 focus:ring-2"
                />
                <span className="text-sm font-medium text-gray-700">Featured Property</span>
              </label>
            </div>
          </div>
        </motion.div>

        {/* Images */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100"
        >
          <div className="flex items-center mb-6">
            <div className="w-10 h-10 bg-gradient-to-r from-emerald/70 to-emerald rounded-xl flex items-center justify-center mr-3">
              <Camera className="w-6 h-6 text-white" />
            </div>
            <h2 className="text-xl font-bold text-jet">Property Images</h2>
          </div>

          <div className="space-y-6">
            {/* Thumbnail Upload */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-3">
                Main Thumbnail Image *
              </label>
              <div className="border-2 border-dashed border-gray-300 rounded-xl p-6 text-center">
                {thumbnailPreview ? (
                  <div className="relative">
                    <img
                      src={thumbnailPreview}
                      alt="Thumbnail preview"
                      className="w-full h-48 object-cover rounded-lg mb-4"
                    />
                    <button
                      type="button"
                      onClick={() => {
                        setThumbnailPreview('');
                        setFormData(prev => ({ ...prev, thumbnail: '' }));
                      }}
                      className="absolute top-2 right-2 bg-red-500 text-white rounded-full p-1 hover:bg-red-600"
                    >
                      <X className="w-4 h-4" />
                    </button>
                  </div>
                ) : (
                  <div>
                    <Camera className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                    <p className="text-gray-600 mb-4">Upload main property image</p>
                  </div>
                )}
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleThumbnailUpload}
                  className="hidden"
                  id="thumbnail-upload"
                />
                <label
                  htmlFor="thumbnail-upload"
                  className="inline-flex items-center px-4 py-2 bg-emerald text-white rounded-lg hover:bg-emerald/90 cursor-pointer transition-colors"
                >
                  <Plus className="w-4 h-4 mr-2" />
                  {thumbnailPreview ? 'Change Image' : 'Select Image'}
                </label>
              </div>
            </div>

            {/* Additional Images Upload */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-3">
                Additional Images (up to 4)
              </label>
              <div className="border-2 border-dashed border-gray-300 rounded-xl p-6 text-center">
                {imagesPreviews.length > 0 ? (
                  <div className="grid grid-cols-2 gap-4 mb-4">
                    {imagesPreviews.map((preview, index) => (
                      <div key={index} className="relative">
                        <img
                          src={preview}
                          alt={`Additional image ${index + 1}`}
                          className="w-full h-32 object-cover rounded-lg"
                        />
                        <button
                          type="button"
                          onClick={() => {
                            const newPreviews = imagesPreviews.filter((_, i) => i !== index);
                            const newImages = formData.images.filter((_, i) => i !== index);
                            setImagesPreviews(newPreviews);
                            setFormData(prev => ({ ...prev, images: newImages }));
                          }}
                          className="absolute top-2 right-2 bg-red-500 text-white rounded-full p-1 hover:bg-red-600"
                        >
                          <X className="w-3 h-3" />
                        </button>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div>
                    <Camera className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                    <p className="text-gray-600 mb-4">Upload additional property images</p>
                  </div>
                )}
                <input
                  type="file"
                  accept="image/*"
                  multiple
                  onChange={handleImagesUpload}
                  className="hidden"
                  id="images-upload"
                />
                <label
                  htmlFor="images-upload"
                  className="inline-flex items-center px-4 py-2 bg-emerald text-white rounded-lg hover:bg-emerald/90 cursor-pointer transition-colors"
                >
                  <Plus className="w-4 h-4 mr-2" />
                  {imagesPreviews.length > 0 ? 'Add More Images' : 'Select Images'}
                </label>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Amenities */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100"
        >
          <div className="flex items-center mb-6">
            <div className="w-10 h-10 bg-gradient-to-r from-emerald-500 to-emerald-600 rounded-xl flex items-center justify-center mr-3">
              <Tag className="w-6 h-6 text-white" />
            </div>
            <h2 className="text-xl font-bold text-gray-900">Amenities & Features</h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {amenities.map((amenity) => (
              <label key={amenity} className="flex items-center space-x-2 p-3 rounded-xl border border-gray-200 hover:bg-gray-50 cursor-pointer transition-colors">
                <input
                  type="checkbox"
                  checked={formData.selectedAmenities.includes(amenity)}
                  onChange={() => handleAmenityToggle(amenity)}
                  className="w-4 h-4 text-emerald bg-gray-100 border-gray-300 rounded focus:ring-emerald/50 focus:ring-2"
                />
                <span className="text-sm text-gray-700">{amenity}</span>
              </label>
            ))}
          </div>
        </motion.div>

        {/* Submit Button */}
        <div className="flex items-center justify-end space-x-4">
          <button
            type="button"
            onClick={() => navigate('/admin/properties')}
            className="px-6 py-3 border border-gray-300 text-gray-700 rounded-xl hover:bg-gray-50 transition-colors"
          >
            Cancel
          </button>
          <button
            type="submit"
            disabled={isSubmitting}
            className="px-8 py-3 bg-gradient-to-r from-emerald to-emerald/90 text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-emerald/25 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
          >
            {isSubmitting ? (
              <>
                <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                Saving...
              </>
            ) : (
              <>
                <Save className="w-5 h-5" />
                {isEditMode ? 'Update Property' : 'Create Property'}
              </>
            )}
          </button>
        </div>
      </form>
    </div>
  );
};

export default PropertyFormNew;