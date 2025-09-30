import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { 
  ArrowLeft, 
  Save, 
  Upload, 
  X, 
  Plus, 
  Trash2,
  MapPin,
  Home,
  Bed,
  Bath,
  Ruler,
  Car,
  DollarSign,
  Map,
  Calendar,
  Check
} from 'lucide-react';

// Sample property types and features - replace with your actual data
const propertyTypes = [
  'Apartment', 'House', 'Villa', 'Condo', 'Townhouse', 'Land', 'Commercial'
];

const propertyStatus = ['For Sale', 'For Rent', 'Sold', 'Pending', 'Draft'];

const amenities = [
  'Swimming Pool', 'Gym', 'Parking', 'Garden', 'Security', 'Elevator',
  'Air Conditioning', 'Heating', 'Balcony', 'Furnished', 'Pet Friendly'
];

const PropertyForm = () => {
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
    bedrooms: '',
    bathrooms: '',
    area: '',
    yearBuilt: new Date().getFullYear(),
    parkingSpaces: '0',
    featured: false,
    address: {
      street: '',
      city: '',
      state: '',
      zipCode: '',
      country: 'United States'
    },
    features: [] as string[],
    images: [] as File[],
    imagePreviews: [] as string[]
  });

  // Load property data if in edit mode
  useEffect(() => {
    if (isEditMode) {
      // Fetch property data from API
      // setFormData(fetchedData);
      console.log('Loading property data for ID:', id);
    }
  }, [id, isEditMode]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target as HTMLInputElement;
    
    if (name.includes('.')) {
      const [parent, child] = name.split('.');
      setFormData(prev => ({
        ...prev,
        [parent]: {
          ...prev[parent as keyof typeof prev],
          [child]: value
        }
      }));
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
      }));
    }
  };

  const handleFeatureToggle = (feature: string) => {
    setFormData(prev => ({
      ...prev,
      features: prev.features.includes(feature)
        ? prev.features.filter(f => f !== feature)
        : [...prev.features, feature]
    }));
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const files = Array.from(e.target.files);
      const newImages = [...formData.images];
      const newPreviews = [...formData.imagePreviews];
      
      files.forEach(file => {
        newImages.push(file);
        newPreviews.push(URL.createObjectURL(file));
      });
      
      setFormData(prev => ({
        ...prev,
        images: newImages,
        imagePreviews: newPreviews
      }));
    }
  };

  const removeImage = (index: number) => {
    const newImages = [...formData.images];
    const newPreviews = [...formData.imagePreviews];
    
    // Revoke the object URL to avoid memory leaks
    URL.revokeObjectURL(newPreviews[index]);
    
    newImages.splice(index, 1);
    newPreviews.splice(index, 1);
    
    setFormData(prev => ({
      ...prev,
      images: newImages,
      imagePreviews: newPreviews
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      // Create FormData for file uploads
      const formDataToSend = new FormData();
      
      // Append all form fields to FormData
      Object.entries(formData).forEach(([key, value]) => {
        if (key === 'images') {
          formData.images.forEach((file, index) => {
            formDataToSend.append(`images[${index}]`, file);
          });
        } else if (typeof value === 'object' && value !== null) {
          formDataToSend.append(key, JSON.stringify(value));
        } else {
          formDataToSend.append(key, value as string);
        }
      });
      
      // Replace with your API endpoint
      const endpoint = isEditMode 
        ? `/api/properties/${id}` 
        : '/api/properties';
      
      const method = isEditMode ? 'PUT' : 'POST';
      
      // const response = await fetch(endpoint, {
      //   method,
      //   body: formDataToSend,
      //   // Don't set Content-Type header - let the browser set it with the correct boundary
      //   headers: {
      //     'Accept': 'application/json',
      //     // 'Authorization': `Bearer ${token}` // Add your auth token if needed
      // }
      // });
      
      // if (!response.ok) throw new Error('Failed to save property');
      
      // const data = await response.json();
      console.log('Form submitted:', formData);
      
      // Navigate to properties list or edit page
      navigate('/admin/properties');
    } catch (error) {
      console.error('Error saving property:', error);
      // Handle error (show toast/notification)
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">
            {isEditMode ? 'Edit Property' : 'Add New Property'}
          </h1>
          <p className="mt-1 text-sm text-gray-500">
            {isEditMode 
              ? 'Update the property details below.' 
              : 'Fill in the details to add a new property listing.'}
          </p>
        </div>
        <div>
          <button
            type="button"
            onClick={() => navigate(-1)}
            className="inline-flex items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500"
          >
            <ArrowLeft className="-ml-1 mr-2 h-5 w-5" />
            Back
          </button>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-8 divide-y divide-gray-200">
        {/* Basic Information */}
        <div className="space-y-6 sm:space-y-5">
          <div>
            <h3 className="text-lg font-medium leading-6 text-gray-900">Basic Information</h3>
            <p className="mt-1 max-w-2xl text-sm text-gray-500">
              Basic details about the property.
            </p>
          </div>
          
          <div className="space-y-6 sm:space-y-5">
            <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
              <label htmlFor="title" className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">
                Property Title <span className="text-red-500">*</span>
              </label>
              <div className="mt-1 sm:mt-0 sm:col-span-2">
                <input
                  type="text"
                  name="title"
                  id="title"
                  required
                  value={formData.title}
                  onChange={handleChange}
                  className="max-w-lg block w-full shadow-sm focus:ring-emerald-500 focus:border-emerald-500 sm:max-w-xs sm:text-sm border-gray-300 rounded-md"
                />
              </div>
            </div>

            <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
              <label htmlFor="description" className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">
                Description <span className="text-red-500">*</span>
              </label>
              <div className="mt-1 sm:mt-0 sm:col-span-2">
                <textarea
                  id="description"
                  name="description"
                  rows={4}
                  required
                  value={formData.description}
                  onChange={handleChange}
                  className="max-w-lg shadow-sm block w-full focus:ring-emerald-500 focus:border-emerald-500 sm:text-sm border border-gray-300 rounded-md"
                />
                <p className="mt-2 text-sm text-gray-500">Write a detailed description of the property.</p>
              </div>
            </div>

            <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
              <label htmlFor="propertyType" className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">
                Property Type <span className="text-red-500">*</span>
              </label>
              <div className="mt-1 sm:mt-0 sm:col-span-2">
                <select
                  id="propertyType"
                  name="propertyType"
                  required
                  value={formData.propertyType}
                  onChange={handleChange}
                  className="max-w-lg block focus:ring-emerald-500 focus:border-emerald-500 w-full shadow-sm sm:max-w-xs sm:text-sm border-gray-300 rounded-md"
                >
                  <option value="">Select a type</option>
                  {propertyTypes.map(type => (
                    <option key={type} value={type}>
                      {type}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
              <label htmlFor="status" className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">
                Status <span className="text-red-500">*</span>
              </label>
              <div className="mt-1 sm:mt-0 sm:col-span-2">
                <select
                  id="status"
                  name="status"
                  required
                  value={formData.status}
                  onChange={handleChange}
                  className="max-w-lg block focus:ring-emerald-500 focus:border-emerald-500 w-full shadow-sm sm:max-w-xs sm:text-sm border-gray-300 rounded-md"
                >
                  {propertyStatus.map(status => (
                    <option key={status} value={status}>
                      {status}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        </div>

        {/* Pricing */}
        <div className="pt-8 space-y-6 sm:pt-10 sm:space-y-5">
          <div>
            <h3 className="text-lg font-medium leading-6 text-gray-900">Pricing</h3>
            <p className="mt-1 max-w-2xl text-sm text-gray-500">
              Set the price and any additional pricing information.
            </p>
          </div>
          <div className="space-y-6 sm:space-y-5">
            <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
              <label htmlFor="price" className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">
                Price <span className="text-red-500">*</span>
              </label>
              <div className="mt-1 sm:mt-0 sm:col-span-2">
                <div className="mt-1 relative rounded-md shadow-sm">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <DollarSign className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    type="number"
                    name="price"
                    id="price"
                    required
                    min="0"
                    step="0.01"
                    value={formData.price}
                    onChange={handleChange}
                    className="focus:ring-emerald-500 focus:border-emerald-500 block w-full pl-10 sm:text-sm border-gray-300 rounded-md"
                    placeholder="0.00"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Location */}
        <div className="pt-8 space-y-6 sm:pt-10 sm:space-y-5">
          <div>
            <h3 className="text-lg font-medium leading-6 text-gray-900">Location</h3>
            <p className="mt-1 max-w-2xl text-sm text-gray-500">
              Where is the property located?
            </p>
          </div>
          <div className="space-y-6 sm:space-y-5">
            <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
              <label htmlFor="location" className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">
                Location <span className="text-red-500">*</span>
              </label>
              <div className="mt-1 sm:mt-0 sm:col-span-2">
                <div className="mt-1 relative rounded-md shadow-sm">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <MapPin className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    type="text"
                    name="location"
                    id="location"
                    required
                    value={formData.location}
                    onChange={handleChange}
                    className="focus:ring-emerald-500 focus:border-emerald-500 block w-full pl-10 sm:text-sm border-gray-300 rounded-md"
                    placeholder="City, State, Country"
                  />
                </div>
              </div>
            </div>

            <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
              <label htmlFor="address.street" className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">
                Street Address <span className="text-red-500">*</span>
              </label>
              <div className="mt-1 sm:mt-0 sm:col-span-2">
                <input
                  type="text"
                  name="address.street"
                  id="address.street"
                  required
                  value={formData.address.street}
                  onChange={handleChange}
                  className="block max-w-lg w-full shadow-sm focus:ring-emerald-500 focus:border-emerald-500 sm:text-sm border-gray-300 rounded-md"
                />
              </div>
            </div>

            <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
              <label htmlFor="address.city" className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">
                City <span className="text-red-500">*</span>
              </label>
              <div className="mt-1 sm:mt-0 sm:col-span-2">
                <input
                  type="text"
                  name="address.city"
                  id="address.city"
                  required
                  value={formData.address.city}
                  onChange={handleChange}
                  className="max-w-lg block w-full shadow-sm focus:ring-emerald-500 focus:border-emerald-500 sm:max-w-xs sm:text-sm border-gray-300 rounded-md"
                />
              </div>
            </div>

            <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
              <label htmlFor="address.state" className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">
                State/Province <span className="text-red-500">*</span>
              </label>
              <div className="mt-1 sm:mt-0 sm:col-span-2">
                <input
                  type="text"
                  name="address.state"
                  id="address.state"
                  required
                  value={formData.address.state}
                  onChange={handleChange}
                  className="max-w-lg block w-full shadow-sm focus:ring-emerald-500 focus:border-emerald-500 sm:max-w-xs sm:text-sm border-gray-300 rounded-md"
                />
              </div>
            </div>

            <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
              <label htmlFor="address.zipCode" className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">
                ZIP/Postal Code <span className="text-red-500">*</span>
              </label>
              <div className="mt-1 sm:mt-0 sm:col-span-2">
                <input
                  type="text"
                  name="address.zipCode"
                  id="address.zipCode"
                  required
                  value={formData.address.zipCode}
                  onChange={handleChange}
                  className="max-w-lg block w-full shadow-sm focus:ring-emerald-500 focus:border-emerald-500 sm:max-w-xs sm:text-sm border-gray-300 rounded-md"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Property Details */}
        <div className="pt-8 space-y-6 sm:pt-10 sm:space-y-5">
          <div>
            <h3 className="text-lg font-medium leading-6 text-gray-900">Property Details</h3>
            <p className="mt-1 max-w-2xl text-sm text-gray-500">
              Detailed information about the property.
            </p>
          </div>
          <div className="space-y-6 sm:space-y-5">
            <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
              <label htmlFor="bedrooms" className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">
                Bedrooms <span className="text-red-500">*</span>
              </label>
              <div className="mt-1 sm:mt-0 sm:col-span-2">
                <div className="mt-1 relative rounded-md shadow-sm">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Bed className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    type="number"
                    name="bedrooms"
                    id="bedrooms"
                    required
                    min="0"
                    step="0.5"
                    value={formData.bedrooms}
                    onChange={handleChange}
                    className="focus:ring-emerald-500 focus:border-emerald-500 block w-full pl-10 sm:text-sm border-gray-300 rounded-md"
                    placeholder="0"
                  />
                </div>
              </div>
            </div>

            <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
              <label htmlFor="bathrooms" className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">
                Bathrooms <span className="text-red-500">*</span>
              </label>
              <div className="mt-1 sm:mt-0 sm:col-span-2">
                <div className="mt-1 relative rounded-md shadow-sm">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Bath className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    type="number"
                    name="bathrooms"
                    id="bathrooms"
                    required
                    min="0"
                    step="0.5"
                    value={formData.bathrooms}
                    onChange={handleChange}
                    className="focus:ring-emerald-500 focus:border-emerald-500 block w-full pl-10 sm:text-sm border-gray-300 rounded-md"
                    placeholder="0"
                  />
                </div>
              </div>
            </div>

            <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
              <label htmlFor="area" className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">
                Area (sq ft) <span className="text-red-500">*</span>
              </label>
              <div className="mt-1 sm:mt-0 sm:col-span-2">
                <div className="mt-1 relative rounded-md shadow-sm">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Ruler className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    type="number"
                    name="area"
                    id="area"
                    required
                    min="0"
                    value={formData.area}
                    onChange={handleChange}
                    className="focus:ring-emerald-500 focus:border-emerald-500 block w-full pl-10 sm:text-sm border-gray-300 rounded-md"
                    placeholder="0"
                  />
                </div>
              </div>
            </div>

            <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
              <label htmlFor="yearBuilt" className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">
                Year Built
              </label>
              <div className="mt-1 sm:mt-0 sm:col-span-2">
                <div className="mt-1 relative rounded-md shadow-sm">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Calendar className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    type="number"
                    name="yearBuilt"
                    id="yearBuilt"
                    min="1800"
                    max={new Date().getFullYear() + 1}
                    value={formData.yearBuilt}
                    onChange={handleChange}
                    className="focus:ring-emerald-500 focus:border-emerald-500 block w-full pl-10 sm:text-sm border-gray-300 rounded-md"
                  />
                </div>
              </div>
            </div>

            <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
              <label htmlFor="parkingSpaces" className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">
                Parking Spaces
              </label>
              <div className="mt-1 sm:mt-0 sm:col-span-2">
                <div className="mt-1 relative rounded-md shadow-sm">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Car className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    type="number"
                    name="parkingSpaces"
                    id="parkingSpaces"
                    min="0"
                    value={formData.parkingSpaces}
                    onChange={handleChange}
                    className="focus:ring-emerald-500 focus:border-emerald-500 block w-full pl-10 sm:text-sm border-gray-300 rounded-md"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Features & Amenities */}
        <div className="pt-8 space-y-6 sm:pt-10 sm:space-y-5">
          <div>
            <h3 className="text-lg font-medium leading-6 text-gray-900">Features & Amenities</h3>
            <p className="mt-1 max-w-2xl text-sm text-gray-500">
              Select the features and amenities that this property offers.
            </p>
          </div>
          <div className="space-y-6 sm:space-y-5">
            <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
              <label className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">
                Available Amenities
              </label>
              <div className="mt-2 sm:mt-0 sm:col-span-2">
                <div className="grid grid-cols-1 gap-2 sm:grid-cols-2 md:grid-cols-3">
                  {amenities.map((amenity) => (
                    <div key={amenity} className="relative flex items-start">
                      <div className="flex items-center h-5">
                        <input
                          id={`amenity-${amenity}`}
                          name="amenities"
                          type="checkbox"
                          checked={formData.features.includes(amenity)}
                          onChange={() => handleFeatureToggle(amenity)}
                          className="focus:ring-emerald-500 h-4 w-4 text-emerald-600 border-gray-300 rounded"
                        />
                      </div>
                      <div className="ml-3 text-sm">
                        <label htmlFor={`amenity-${amenity}`} className="font-medium text-gray-700">
                          {amenity}
                        </label>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Images */}
        <div className="pt-8 space-y-6 sm:pt-10 sm:space-y-5">
          <div>
            <h3 className="text-lg font-medium leading-6 text-gray-900">Images</h3>
            <p className="mt-1 max-w-2xl text-sm text-gray-500">
              Upload high-quality images of the property. The first image will be used as the main image.
            </p>
          </div>
          <div className="space-y-6 sm:space-y-5">
            <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
              <label htmlFor="property-images" className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">
                Property Images <span className="text-red-500">*</span>
              </label>
              <div className="mt-1 sm:mt-0 sm:col-span-2">
                <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                  <div className="space-y-1 text-center">
                    <div className="flex text-sm text-gray-600">
                      <label
                        htmlFor="property-images"
                        className="relative cursor-pointer bg-white rounded-md font-medium text-emerald-600 hover:text-emerald-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-emerald-500"
                      >
                        <span>Upload files</span>
                        <input
                          id="property-images"
                          name="property-images"
                          type="file"
                          className="sr-only"
                          multiple
                          accept="image/*"
                          onChange={handleImageUpload}
                        />
                      </label>
                      <p className="pl-1">or drag and drop</p>
                    </div>
                    <p className="text-xs text-gray-500">
                      PNG, JPG, GIF up to 10MB
                    </p>
                  </div>
                </div>
                
                {/* Image Previews */}
                {formData.imagePreviews.length > 0 && (
                  <div className="mt-4">
                    <h4 className="text-sm font-medium text-gray-700 mb-2">Uploaded Images ({formData.imagePreviews.length})</h4>
                    <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
                      {formData.imagePreviews.map((preview, index) => (
                        <div key={index} className="relative group">
                          <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-100">
                            <img
                              src={preview}
                              alt={`Property ${index + 1}`}
                              className="h-full w-full object-cover object-center"
                            />
                          </div>
                          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                            <button
                              type="button"
                              onClick={() => removeImage(index)}
                              className="p-1 rounded-full bg-red-500 text-white hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
                            >
                              <X className="h-4 w-4" />
                              <span className="sr-only">Remove image</span>
                            </button>
                          </div>
                          {index === 0 && (
                            <span className="absolute top-2 left-2 bg-emerald-500 text-white text-xs font-medium px-2 py-1 rounded">
                              Main
                            </span>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Featured Property */}
        <div className="pt-8 space-y-6 sm:pt-10 sm:space-y-5">
          <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
            <div>
              <h3 className="text-lg font-medium leading-6 text-gray-900">Featured Property</h3>
              <p className="mt-1 max-w-2xl text-sm text-gray-500">
                Feature this property on the homepage and other prominent areas.
              </p>
            </div>
            <div className="mt-4 sm:mt-0 sm:col-span-2">
              <div className="flex items-center h-5">
                <input
                  id="featured"
                  name="featured"
                  type="checkbox"
                  checked={formData.featured}
                  onChange={handleChange}
                  className="focus:ring-emerald-500 h-4 w-4 text-emerald-600 border-gray-300 rounded"
                />
                <label htmlFor="featured" className="ml-2 block text-sm text-gray-700">
                  Mark as featured
                </label>
              </div>
            </div>
          </div>
        </div>

        {/* Form Actions */}
        <div className="pt-5">
          <div className="flex justify-end space-x-3">
            <button
              type="button"
              onClick={() => navigate(-1)}
              className="bg-white py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-emerald-600 hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500"
            >
              <Save className="-ml-1 mr-2 h-5 w-5" />
              {isEditMode ? 'Update Property' : 'Save Property'}
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default PropertyForm;
