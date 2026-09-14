import { useState } from 'react';
import { Search, MapPin, Home, DollarSign, Target, ArrowRight, Sparkles } from 'lucide-react';

const HomeSearchSection = () => {
  const [location, setLocation] = useState('');
  const [propertyType, setPropertyType] = useState('');
  const [budget, setBudget] = useState('');
  const [purpose, setPurpose] = useState('');

  const propertyTypes = [
    'Residential Plot', 'Apartment', 'Villa', 'Commercial Space',
    'Agricultural Land', 'Industrial Property', 'Rental Property'
  ];

  const budgetRanges = [
    'Under ₹10 Lakhs', '₹10–25 Lakhs', '₹25–50 Lakhs',
    '₹50 Lakhs–1 Crore', '₹1–5 Crores', 'Above ₹5 Crores'
  ];

  const purposes = ['Buy', 'Sell', 'Lease / Rent', 'Investment'];

  return (
    <section id="search-properties" className="py-8 md:py-12 bg-gradient-to-r from-[#0D1B2A] via-[#1A335E] to-[#142646] relative overflow-hidden text-white">
      {/* Decorative background glow */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#D6B97B]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-[#1A335E]/40 rounded-full blur-2xl pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Content */}
          <div className="lg:col-span-5 space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#D6B97B]/20 border border-[#D6B97B]/40 text-[#D6B97B] text-xs font-bold uppercase tracking-widest">
              <Sparkles size={13} />
              Smart Property Search
            </div>
            <h2 className="text-3xl md:text-5xl font-serif font-bold !text-white leading-tight">
              Search Properties <span className="gold-gradient">Your Way</span>
            </h2>
            <p className="!text-gray-200 leading-relaxed text-base font-normal">
              Find verified properties based on your preferred location, budget, property type, or investment purpose across Tamil Nadu.
            </p>

            <div className="flex flex-wrap gap-2 pt-1">
              {['Verified Listings', 'Expert Guidance', 'All Property Types', 'Across Tamil Nadu'].map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1.5 rounded-full text-xs font-semibold bg-white/10 !text-white border border-white/15 backdrop-blur-sm"
                >
                  ✓ {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Right: Search Form */}
          <div className="lg:col-span-7 bg-white/95 backdrop-blur-md rounded-2xl p-6 md:p-8 shadow-2xl border border-white/20">
            <h3 className="!text-[#1A335E] font-serif font-bold text-xl mb-4 border-b border-gray-100 pb-3">
              Find Your Ideal Property
            </h3>

            <div className="grid sm:grid-cols-2 gap-4">
              {/* Location */}
              <div className="relative">
                <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1">Location</label>
                <div className="relative">
                  <MapPin size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#D6B97B]" />
                  <input
                    type="text"
                    id="search-location"
                    placeholder="City, area or pin code..."
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    className="w-full pl-10 pr-3 py-3 rounded-xl border border-gray-200 focus:border-[#D6B97B] focus:ring-2 focus:ring-[#D6B97B]/20 outline-none text-gray-900 placeholder:text-gray-400 text-sm font-medium transition-all bg-gray-50/80 focus:bg-white"
                  />
                </div>
              </div>

              {/* Property Type */}
              <div className="relative">
                <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1">Property Type</label>
                <div className="relative">
                  <Home size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#D6B97B] pointer-events-none" />
                  <select
                    id="search-property-type"
                    value={propertyType}
                    onChange={(e) => setPropertyType(e.target.value)}
                    className="w-full pl-10 pr-3 py-3 rounded-xl border border-gray-200 focus:border-[#D6B97B] focus:ring-2 focus:ring-[#D6B97B]/20 outline-none text-gray-900 text-sm font-medium transition-all appearance-none bg-gray-50/80 focus:bg-white cursor-pointer"
                  >
                    <option value="">Select Property Type</option>
                    {propertyTypes.map((t) => (
                      <option key={t} value={t}>{t}</option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Budget */}
              <div className="relative">
                <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1">Budget</label>
                <div className="relative">
                  <DollarSign size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#D6B97B] pointer-events-none" />
                  <select
                    id="search-budget"
                    value={budget}
                    onChange={(e) => setBudget(e.target.value)}
                    className="w-full pl-10 pr-3 py-3 rounded-xl border border-gray-200 focus:border-[#D6B97B] focus:ring-2 focus:ring-[#D6B97B]/20 outline-none text-gray-900 text-sm font-medium transition-all appearance-none bg-gray-50/80 focus:bg-white cursor-pointer"
                  >
                    <option value="">Select Budget Range</option>
                    {budgetRanges.map((b) => (
                      <option key={b} value={b}>{b}</option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Purpose */}
              <div className="relative">
                <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1">Purpose</label>
                <div className="relative">
                  <Target size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#D6B97B] pointer-events-none" />
                  <select
                    id="search-purpose"
                    value={purpose}
                    onChange={(e) => setPurpose(e.target.value)}
                    className="w-full pl-10 pr-3 py-3 rounded-xl border border-gray-200 focus:border-[#D6B97B] focus:ring-2 focus:ring-[#D6B97B]/20 outline-none text-gray-900 text-sm font-medium transition-all appearance-none bg-gray-50/80 focus:bg-white cursor-pointer"
                  >
                    <option value="">Select Purpose</option>
                    {purposes.map((p) => (
                      <option key={p} value={p}>{p}</option>
                    ))}
                  </select>
                </div>
              </div>
            </div>

            <div className="mt-5 flex flex-col sm:flex-row items-center justify-between gap-4 pt-2">
              <a
                href="/properties"
                id="search-submit-btn"
                className="w-full sm:w-auto px-8 py-3.5 bg-gradient-to-r from-[#D6B97B] to-[#C6A56A] hover:from-[#E8C97A] hover:to-[#D6B97B] text-[#0D1B2A] rounded-xl font-bold uppercase tracking-widest text-xs transition-all duration-300 flex items-center justify-center gap-2 shadow-lg shadow-[#D6B97B]/20 no-underline hover:scale-[1.02]"
              >
                <Search size={16} />
                Search Properties
                <ArrowRight size={16} />
              </a>

              <p className="text-gray-500 text-xs">
                Need guidance?{' '}
                <a href="/contact" className="text-[#1A335E] font-bold hover:text-[#D6B97B] underline">
                  Contact our team
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeSearchSection;

