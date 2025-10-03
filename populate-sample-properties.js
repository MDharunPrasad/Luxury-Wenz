// Sample properties to populate the admin panel
const sampleProperties = [
  {
    id: 1,
    title: "Luxury Penthouse with City Views",
    description:
      "Stunning penthouse with panoramic views, premium finishes, and a private terrace in the heart of Manhattan.",
    propertyType: "Penthouse",
    status: "Active",
    price: "2500000",
    location: "Manhattan, NY",
    bedrooms: 3,
    bathrooms: 3,
    area: "2,500 sq ft",
    yearBuilt: 2020,
    parking: 2,
    featured: true,
    selectedAmenities: [
      "Swimming Pool",
      "Gym",
      "Security",
      "Elevator",
      "Air Conditioning",
      "City View",
      "Terrace",
    ],
    thumbnail:
      "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=1600",
    images: [
      "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=1600",
      "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=1600",
      "https://images.unsplash.com/photo-1502005229762-cf1b2da7c52f?w=1600",
    ],
  },
  {
    id: 2,
    title: "Modern Villa with Private Pool",
    description:
      "Architect-designed villa featuring open spaces, smart home automation, and resort-style outdoor living.",
    propertyType: "Villa",
    status: "Active",
    price: "4200000",
    location: "Beverly Hills, CA",
    bedrooms: 5,
    bathrooms: 4,
    area: "4,200 sq ft",
    yearBuilt: 2019,
    parking: 3,
    featured: true,
    selectedAmenities: [
      "Swimming Pool",
      "Garden",
      "Security",
      "Air Conditioning",
      "Heating",
      "Furnished",
    ],
    thumbnail:
      "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=1600",
    images: [
      "https://images.unsplash.com/photo-1505691938895-1758d7feb511?w=1600",
      "https://images.unsplash.com/photo-1560185127-6ed189bf02f4?w=1600",
      "https://images.unsplash.com/photo-1572120360610-d971b9d7767c?w=1600",
    ],
  },
  {
    id: 3,
    title: "Historic Townhouse",
    description:
      "Beautifully renovated historic townhouse with modern amenities while preserving original character.",
    propertyType: "Townhouse",
    status: "Active",
    price: "1800000",
    location: "Brooklyn, NY",
    bedrooms: 4,
    bathrooms: 3,
    area: "2,800 sq ft",
    yearBuilt: 1920,
    parking: 1,
    featured: false,
    selectedAmenities: ["Garden", "Fireplace", "Parking", "Furnished"],
    thumbnail:
      "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=1600",
    images: [
      "https://images.unsplash.com/photo-1523217582562-09d0def993a6?w=1600",
      "https://images.unsplash.com/photo-1502005229762-cf1b2da7c52f?w=1600",
      "https://images.unsplash.com/photo-1475855581698-2815c6a5b02e?w=1600",
    ],
  },
  {
    id: 4,
    title: "Beachfront Condo",
    description:
      "Luxurious beachfront condominium with panoramic ocean views and direct beach access.",
    propertyType: "Condo",
    status: "Active",
    price: "1200000",
    location: "Miami, FL",
    bedrooms: 2,
    bathrooms: 2,
    area: "1,500 sq ft",
    yearBuilt: 2018,
    parking: 1,
    featured: true,
    selectedAmenities: [
      "Swimming Pool",
      "Gym",
      "Security",
      "Ocean View",
      "Balcony",
    ],
    thumbnail:
      "https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=1600",
    images: [
      "https://images.unsplash.com/photo-1501183638710-841dd1904471?w=1600",
      "https://images.unsplash.com/photo-1472120360610-d971b9d7767c?w=1600",
    ],
  },
  {
    id: 5,
    title: "Alpine Chalet Retreat",
    description:
      "Luxury mountain chalet with stunning alpine views, perfect for year-round relaxation.",
    propertyType: "House",
    status: "Active",
    price: "3300000",
    location: "Aspen, CO",
    bedrooms: 4,
    bathrooms: 4,
    area: "3,100 sq ft",
    yearBuilt: 2021,
    parking: 2,
    featured: false,
    selectedAmenities: ["Fireplace", "Heating", "Parking", "Furnished"],
    thumbnail:
      "https://images.unsplash.com/photo-1475855581698-2815c6a5b02e?w=1600",
    images: [
      "https://images.unsplash.com/photo-1507089947368-19c1da9775ae?w=1600",
      "https://images.unsplash.com/photo-1502005229762-cf1b2da7c52f?w=1600",
    ],
  },
];

// Function to populate localStorage
function populateAdminProperties() {
  localStorage.setItem("admin_properties", JSON.stringify(sampleProperties));
  console.log("Sample properties added to admin panel!");
  console.log("Refresh the admin properties page to see them.");
}

// Call the function
populateAdminProperties();
