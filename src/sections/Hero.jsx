import { useState } from 'react';
import { Search, MapPin, Building2, Wallet, CheckCircle } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

// Import hero background imagery
import prop2 from '../assets/property2.webp';
import prop3 from '../assets/property3.webp';
import prop6 from '../assets/property6.webp';

const Hero = ({ onOpenEnquiry }) => {
  const navigate = useNavigate();
  const [location, setLocation] = useState('Coimbatore');
  const [propertyType, setPropertyType] = useState('Apartments');
  const [budget, setBudget] = useState('Under ₹50 Lakhs');

  const handleSearch = (e) => {
    e.preventDefault();
    navigate(`/properties?location=${encodeURIComponent(location)}&type=${encodeURIComponent(propertyType)}&budget=${encodeURIComponent(budget)}`);
  };

  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 bg-[#1A335E] text-white overflow-hidden">
      {/* Dynamic Background Overlay */}
      <div className="absolute inset-0 z-0 opacity-25 mix-blend-overlay pointer-events-none">
        <img
          src={prop3}
          alt="Tamil Nadu Real Estate Hero"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Decorative Blur Orbs */}
      <div className="absolute top-10 left-1/4 w-96 h-96 bg-[#D6B97B]/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          {/* Tagline Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-[#D6B97B] font-bold text-xs uppercase tracking-widest">
            <span className="w-2 h-2 rounded-full bg-[#D6B97B] animate-pulse" />
            Tamil Nadu's premier property platform
          </div>

          {/* Wireframe Headline */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold text-white tracking-tight leading-tight">
            FIND THE RIGHT PROPERTY <br className="hidden sm:block" />
            WITH <span className="gold-gradient">CONFIDENCE</span>
          </h1>

          {/* Wireframe Subhead */}
          <p className="text-base sm:text-lg md:text-xl text-gray-200 max-w-3xl mx-auto font-medium leading-relaxed">
            Buy <span className="text-[#D6B97B] font-bold">|</span> Sell <span className="text-[#D6B97B] font-bold">|</span> Lease <span className="text-[#D6B97B] font-bold">|</span> Invest in Verified Properties Across Tamil Nadu
          </p>

          {/* Wireframe Interactive Search Bar Container */}
          <div className="mt-8 bg-white/95 backdrop-blur-xl p-4 md:p-6 rounded-3xl shadow-2xl border border-white/40 text-gray-900">
            <form onSubmit={handleSearch} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 items-center">
              
              {/* Location Select */}
              <div className="space-y-1 text-left bg-gray-50/80 p-3 rounded-2xl border border-gray-100 hover:border-[#D6B97B] transition-colors">
                <label className="text-[11px] font-bold uppercase tracking-wider text-gray-500 flex items-center gap-1">
                  <MapPin size={13} className="text-[#D6B97B]" /> Location
                </label>
                <select
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  className="w-full bg-transparent font-bold text-sm text-[#1A335E] focus:outline-none cursor-pointer"
                >
                  <option value="All Tamil Nadu">All Tamil Nadu</option>
                  <option value="Coimbatore">Coimbatore</option>
                  <option value="Chennai">Chennai</option>
                  <option value="Madurai">Madurai</option>
                  <option value="Salem">Salem</option>
                  <option value="Trichy">Trichy</option>
                  <option value="Hosur">Hosur</option>
                  <option value="Erode">Erode</option>
                  <option value="Tiruppur">Tiruppur</option>
                </select>
              </div>

              {/* Property Type Select */}
              <div className="space-y-1 text-left bg-gray-50/80 p-3 rounded-2xl border border-gray-100 hover:border-[#D6B97B] transition-colors">
                <label className="text-[11px] font-bold uppercase tracking-wider text-gray-500 flex items-center gap-1">
                  <Building2 size={13} className="text-[#D6B97B]" /> Property Type
                </label>
                <select
                  value={propertyType}
                  onChange={(e) => setPropertyType(e.target.value)}
                  className="w-full bg-transparent font-bold text-sm text-[#1A335E] focus:outline-none cursor-pointer"
                >
                  <option value="All Types">All Types</option>
                  <option value="Apartments">Apartments</option>
                  <option value="Villas">Villas</option>
                  <option value="Lands">Lands / Plots</option>
                  <option value="Commercial">Commercial</option>
                  <option value="Agricultural">Agricultural</option>
                  <option value="Industrial">Industrial</option>
                </select>
              </div>

              {/* Budget Select */}
              <div className="space-y-1 text-left bg-gray-50/80 p-3 rounded-2xl border border-gray-100 hover:border-[#D6B97B] transition-colors">
                <label className="text-[11px] font-bold uppercase tracking-wider text-gray-500 flex items-center gap-1">
                  <Wallet size={13} className="text-[#D6B97B]" /> Budget Range
                </label>
                <select
                  value={budget}
                  onChange={(e) => setBudget(e.target.value)}
                  className="w-full bg-transparent font-bold text-sm text-[#1A335E] focus:outline-none cursor-pointer"
                >
                  <option value="Any Budget">Any Budget</option>
                  <option value="Under ₹25 Lakhs">Under ₹25 Lakhs</option>
                  <option value="₹25 L - ₹50 L">₹25 L - ₹50 Lakhs</option>
                  <option value="₹50 L - ₹1 Cr">₹50 L - ₹1 Crore</option>
                  <option value="Above ₹1 Cr">Above ₹1 Crore</option>
                </select>
              </div>

              {/* Search Submit Button */}
              <button
                type="submit"
                className="w-full py-4 bg-[#1A335E] hover:bg-[#D6B97B] text-white hover:text-[#0F0F0F] rounded-2xl font-bold uppercase tracking-widest text-xs transition-all duration-300 flex items-center justify-center gap-2 shadow-lg shadow-[#1A335E]/30 cursor-pointer"
              >
                <Search size={16} />
                Search Properties
              </button>

            </form>
          </div>

          {/* Wireframe Value Proposition Highlights (Checklist) */}
          <div className="pt-6 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
            <div className="flex items-center justify-center gap-2 text-xs md:text-sm font-semibold text-gray-200 bg-white/5 py-2.5 px-3 rounded-xl border border-white/10">
              <CheckCircle size={16} className="text-[#D6B97B] shrink-0" />
              <span>Verified Listings</span>
            </div>
            <div className="flex items-center justify-center gap-2 text-xs md:text-sm font-semibold text-gray-200 bg-white/5 py-2.5 px-3 rounded-xl border border-white/10">
              <CheckCircle size={16} className="text-[#D6B97B] shrink-0" />
              <span>Expert Guidance</span>
            </div>
            <div className="flex items-center justify-center gap-2 text-xs md:text-sm font-semibold text-gray-200 bg-white/5 py-2.5 px-3 rounded-xl border border-white/10">
              <CheckCircle size={16} className="text-[#D6B97B] shrink-0" />
              <span>Buy • Sell • Lease</span>
            </div>
            <div className="flex items-center justify-center gap-2 text-xs md:text-sm font-semibold text-gray-200 bg-white/5 py-2.5 px-3 rounded-xl border border-white/10">
              <CheckCircle size={16} className="text-[#D6B97B] shrink-0" />
              <span>Trusted Platform</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
