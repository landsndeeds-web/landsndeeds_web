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

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(".property-card",
        { y: 30, opacity: 0 },
        {
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 80%",
          },
          y: 0,
          opacity: 1,
          duration: 0.7,
          stagger: 0.15,
          ease: "power2.out"
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} id="properties" className="py-10 md:py-14 bg-white relative">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end gap-4 mb-8 md:mb-10">
          <div className="space-y-2">
            <span className="inline-block px-3 py-1 rounded-full bg-[#1A335E]/5 text-[#D6B97B] font-bold tracking-widest uppercase text-xs">Curated Selection</span>
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-[#1A335E]">
              Featured <span className="gold-gradient">Properties</span>
            </h2>
          </div>
          <p className="text-gray-500 max-w-md md:text-right hidden md:block text-sm leading-relaxed">
            Discover carefully selected properties in well-connected locations across Tamil Nadu. Explore options that suit your budget, lifestyle, or investment goals.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {properties.map((property) => (
            <div 
              key={property.id} 
              className="property-card group cursor-pointer relative overflow-hidden rounded-2xl shadow-md border border-gray-100 hover:shadow-xl transition-all duration-300"
            >
              {/* Image Container */}
              <div className="aspect-[16/10] overflow-hidden relative">
                <img 
                  src={propertyImages[property.image]} 
                  alt={property.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-[#D6B97B] text-[#0F0F0F] font-bold text-xs rounded-md shadow-md uppercase tracking-wider">
                    Verified
                  </span>
                </div>
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <h3 className="!text-white text-xl md:text-2xl font-serif font-bold mb-1">
                    {property.title}
                  </h3>
                  <p className="text-white/80 text-xs md:text-sm font-medium">{property.location}</p>
                </div>
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

        <div className="mt-8 flex justify-center">
          <Link to="/properties" className="px-8 py-3 border-2 border-[#1A335E] text-[#1A335E] hover:bg-[#1A335E] hover:text-white rounded-full font-bold uppercase tracking-widest text-xs transition-all duration-300 flex items-center gap-2 no-underline shadow-sm">
            View All Properties
            <ArrowUpRight size={15} />
          </Link>
        </div>

      </div>
    </section>
  );
};

export default FeaturedProperties;
