import { useState } from 'react';
import { MapPin, Home as HomeIcon, Maximize2, ChevronLeft, ChevronRight, Eye, Send, ShieldCheck } from 'lucide-react';
import { Link } from 'react-router-dom';

// Import property assets
import prop1 from '../assets/property1.webp';
import prop2 from '../assets/property2.webp';
import prop3 from '../assets/property3.webp';
import prop5 from '../assets/property5.webp';
import prop6 from '../assets/property6.webp';
import prop7 from '../assets/property7.webp';

const featuredListings = [
  {
    id: 1,
    title: 'Premium Apartment near Avinashi Road',
    location: 'Coimbatore',
    bhk: '2 & 3 BHK',
    area: '950–1,450 Sq.ft',
    price: '₹58 Lakhs',
    priceText: 'Starting from ₹58 Lakhs',
    image: prop1,
    type: 'Apartment',
    tag: 'DTCP Approved'
  },
  {
    id: 2,
    title: 'Gated Luxury Villa in Saravanampatti',
    location: 'Coimbatore',
    bhk: '3 & 4 BHK',
    area: '2,200–3,100 Sq.ft',
    price: '₹1.25 Crore',
    priceText: 'Starting from ₹1.25 Cr',
    image: prop2,
    type: 'Villa',
    tag: 'RERA Registered'
  },
  {
    id: 3,
    title: 'Industrial Warehouse & Farmland Plot',
    location: 'Hosur, Krishnagiri',
    bhk: 'Industrial Zone',
    area: '12,000 Sq.ft',
    price: '₹2.80 Crore',
    priceText: 'Starting from ₹2.80 Cr',
    image: prop3,
    type: 'Industrial',
    tag: 'Clear Title Deed'
  },
  {
    id: 4,
    title: 'DTCP Approved Residential Plot',
    location: 'Sowripalayam, Coimbatore',
    bhk: 'Residential Plot',
    area: '2,400 Sq.ft',
    price: '₹45 Lakhs',
    priceText: 'Starting from ₹45 Lakhs',
    image: prop5,
    type: 'Land',
    tag: 'Patta Available'
  },
  {
    id: 5,
    title: 'Prime Commercial Office Building',
    location: 'Anna Nagar, Chennai',
    bhk: 'Commercial Space',
    area: '4,500 Sq.ft',
    price: '₹3.50 Crore',
    priceText: 'Starting from ₹3.50 Cr',
    image: prop6,
    type: 'Commercial',
    tag: 'High ROI'
  },
  {
    id: 6,
    title: 'Organic Agricultural Farmland',
    location: 'Pollachi, Tamil Nadu',
    bhk: 'Agri Land',
    area: '3.5 Acres',
    price: '₹65 Lakhs',
    priceText: 'Starting from ₹65 Lakhs',
    image: prop7,
    type: 'Agricultural',
    tag: 'Water Source Included'
  }
];

const FeaturedProperties = ({ onOpenEnquiry }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? featuredListings.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === featuredListings.length - 1 ? 0 : prev + 1));
  };

  const currentProperty = featuredListings[currentIndex];

  return (
    <section id="featured-properties" className="py-20 bg-gray-50/70 relative">
      <div className="container mx-auto px-4 md:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-4">
          <div>
            <span className="text-[#D6B97B] font-bold tracking-[0.25em] uppercase text-xs block mb-1">
              Handpicked Verified Listings
            </span>
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-[#1A335E]">
              FEATURED PROPERTIES
            </h2>
          </div>

          {/* Slider Navigation Buttons */}
          <div className="flex items-center gap-3">
            <button
              onClick={prevSlide}
              aria-label="Previous property"
              className="w-12 h-12 rounded-full bg-white border border-gray-200 shadow-md flex items-center justify-center text-[#1A335E] hover:bg-[#1A335E] hover:text-white transition-all cursor-pointer"
            >
              <ChevronLeft size={22} />
            </button>
            <span className="text-sm font-bold text-[#1A335E]">
              {currentIndex + 1} / {featuredListings.length}
            </span>
            <button
              onClick={nextSlide}
              aria-label="Next property"
              className="w-12 h-12 rounded-full bg-white border border-gray-200 shadow-md flex items-center justify-center text-[#1A335E] hover:bg-[#1A335E] hover:text-white transition-all cursor-pointer"
            >
              <ChevronRight size={22} />
            </button>
          </div>
        </div>

        {/* Featured Property Hero Showcase Card (Wireframe Image 1 Design) */}
        <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100 transition-all duration-500 hover:shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12">
            
            {/* Property Image Container */}
            <div className="lg:col-span-7 relative min-h-[320px] md:min-h-[420px] overflow-hidden group">
              <img
                src={currentProperty.image}
                alt={currentProperty.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute top-4 left-4 bg-[#1A335E] text-white text-xs font-bold px-3 py-1.5 rounded-full uppercase tracking-wider shadow-md">
                {currentProperty.tag}
              </div>
              <div className="absolute top-4 right-4 bg-[#D6B97B] text-[#0F0F0F] text-xs font-bold px-3 py-1.5 rounded-full uppercase tracking-wider shadow-md">
                {currentProperty.type}
              </div>
            </div>

            {/* Property Info Content */}
            <div className="lg:col-span-5 p-6 md:p-10 flex flex-col justify-between space-y-6">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-emerald-700 bg-emerald-50 px-3 py-1 rounded-md inline-block mb-3 flex items-center gap-1.5 w-fit">
                  <ShieldCheck size={14} /> 100% Verified Title Deed
                </span>
                
                <h3 className="text-2xl md:text-3xl font-serif font-bold text-[#1A335E] leading-snug">
                  {currentProperty.title}
                </h3>
              </div>

              {/* Wireframe Specs Row: Location | BHK | Sq.ft */}
              <div className="grid grid-cols-3 gap-3 py-4 border-y border-gray-100 text-gray-700">
                <div className="space-y-1">
                  <span className="text-[11px] uppercase tracking-wider text-gray-400 font-bold block flex items-center gap-1">
                    <MapPin size={12} className="text-[#D6B97B]" /> Location
                  </span>
                  <span className="font-bold text-xs md:text-sm text-[#1A335E]">
                    {currentProperty.location}
                  </span>
                </div>

                <div className="space-y-1">
                  <span className="text-[11px] uppercase tracking-wider text-gray-400 font-bold block flex items-center gap-1">
                    <HomeIcon size={12} className="text-[#D6B97B]" /> Type/BHK
                  </span>
                  <span className="font-bold text-xs md:text-sm text-[#1A335E]">
                    {currentProperty.bhk}
                  </span>
                </div>

                <div className="space-y-1">
                  <span className="text-[11px] uppercase tracking-wider text-gray-400 font-bold block flex items-center gap-1">
                    <Maximize2 size={12} className="text-[#D6B97B]" /> Area
                  </span>
                  <span className="font-bold text-xs md:text-sm text-[#1A335E]">
                    {currentProperty.area}
                  </span>
                </div>
              </div>

              {/* Price Row */}
              <div>
                <span className="text-xs text-gray-500 font-medium block">Asking Price</span>
                <span className="text-2xl md:text-3xl font-extrabold text-[#1A335E]">
                  ₹ {currentProperty.priceText}
                </span>
              </div>

              {/* Wireframe Buttons: [View Details] [Enquire Now] */}
              <div className="grid grid-cols-2 gap-4 pt-2">
                <Link
                  to="/properties"
                  className="py-3.5 px-4 bg-gray-100 hover:bg-[#1A335E] text-[#1A335E] hover:text-white font-bold text-xs uppercase tracking-wider rounded-xl transition-all duration-300 flex items-center justify-center gap-1.5 text-center"
                >
                  <Eye size={15} />
                  View Details
                </Link>

                <button
                  onClick={() => onOpenEnquiry && onOpenEnquiry(`Enquiry for ${currentProperty.title}`)}
                  className="py-3.5 px-4 bg-[#D6B97B] hover:bg-[#1A335E] text-[#0F0F0F] hover:text-white font-bold text-xs uppercase tracking-wider rounded-xl transition-all duration-300 flex items-center justify-center gap-1.5 cursor-pointer shadow-md"
                >
                  <Send size={15} />
                  Enquire Now
                </button>
              </div>

            </div>

          </div>
        </div>

        {/* Card Slider Thumbnail Carousel Grid below */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 mt-8">
          {featuredListings.map((prop, idx) => (
            <button
              key={prop.id}
              onClick={() => setCurrentIndex(idx)}
              className={`p-2.5 rounded-2xl bg-white border text-left transition-all cursor-pointer ${
                currentIndex === idx
                  ? 'border-[#D6B97B] ring-2 ring-[#D6B97B]/40 shadow-lg scale-105'
                  : 'border-gray-200 hover:border-gray-300 opacity-80 hover:opacity-100'
              }`}
            >
              <div className="h-20 rounded-xl overflow-hidden mb-2">
                <img src={prop.image} alt={prop.title} className="w-full h-full object-cover" />
              </div>
              <p className="text-[11px] font-bold text-[#1A335E] truncate">{prop.title}</p>
              <p className="text-[10px] text-[#D6B97B] font-extrabold">{prop.price}</p>
            </button>
          ))}
        </div>

      </div>
    </section>
  );
};

export default FeaturedProperties;
