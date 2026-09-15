import { Link } from 'react-router-dom';
import { ArrowRight, Building2, Home, Landmark, Sparkles, Trees, CheckCircle2 } from 'lucide-react';

const quickLinks = [
  { label: 'Residential Plots & Villas', icon: Home },
  { label: 'Commercial Spaces', icon: Building2 },
  { label: 'Agricultural Lands', icon: Trees },
  { label: 'Investment Properties', icon: Landmark },
];

const HomeSearchSection = () => {
  return (
    <section id="explore-properties-cta" className="py-10 md:py-14 bg-gradient-to-r from-[#0D1B2A] via-[#1A335E] to-[#142646] relative overflow-hidden text-white">
      {/* Decorative background glow */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#D6B97B]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#1A335E]/50 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="bg-white/[0.04] border border-white/10 backdrop-blur-md rounded-2xl md:rounded-3xl p-6 md:p-10 shadow-2xl relative overflow-hidden">
          
          {/* Subtle top gold accent glow */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-[2px] bg-gradient-to-r from-transparent via-[#D6B97B] to-transparent" />

          <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12">
            
            {/* Left Content */}
            <div className="space-y-4 text-center lg:text-left max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#D6B97B]/15 border border-[#D6B97B]/30 text-[#D6B97B] text-xs font-bold uppercase tracking-widest">
                <Sparkles size={13} className="text-[#D6B97B]" />
                Explore Verified Listings
              </div>

              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif font-bold !text-white leading-tight">
                Find Your Ideal Property in <span className="gold-gradient">Tamil Nadu</span>
              </h2>

              <p className="!text-gray-300 text-sm md:text-base leading-relaxed">
                Discover verified residential plots, commercial properties, farmlands, and high-yield investment options with transparent titles and expert support.
              </p>

              {/* Trust badges */}
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-1 text-xs text-gray-300">
                <span className="flex items-center gap-1.5 font-medium">
                  <CheckCircle2 size={15} className="text-[#D6B97B]" /> Verified Clear Titles
                </span>
                <span className="flex items-center gap-1.5 font-medium">
                  <CheckCircle2 size={15} className="text-[#D6B97B]" /> Transparent Pricing
                </span>
                <span className="flex items-center gap-1.5 font-medium">
                  <CheckCircle2 size={15} className="text-[#D6B97B]" /> Pan-Tamil Nadu Presence
                </span>
              </div>
            </div>

            {/* Right Action Box */}
            <div className="w-full lg:w-auto flex flex-col items-center lg:items-end gap-5 shrink-0">
              <Link
                to="/properties"
                id="home-explore-properties-cta-btn"
                className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-[#D6B97B] to-[#C6A56A] hover:from-[#E8C97A] hover:to-[#D6B97B] text-[#0D1B2A] rounded-xl font-bold uppercase tracking-widest text-xs md:text-sm transition-all duration-300 flex items-center justify-center gap-3 shadow-xl shadow-[#D6B97B]/20 hover:scale-[1.03] active:scale-[0.98] group no-underline"
              >
                <span>Browse All Properties</span>
                <ArrowRight size={18} className="transition-transform duration-300 group-hover:translate-x-1" />
              </Link>

              {/* Quick Jump Category Chips */}
              <div className="flex flex-wrap justify-center lg:justify-end gap-2 max-w-md">
                {quickLinks.map((item, idx) => {
                  const Icon = item.icon;
                  return (
                    <Link
                      key={idx}
                      to="/properties"
                      className="px-3 py-1.5 rounded-lg bg-white/5 hover:bg-[#D6B97B]/20 border border-white/10 hover:border-[#D6B97B]/40 text-gray-300 hover:text-white text-xs font-medium transition-all duration-200 flex items-center gap-1.5 no-underline"
                    >
                      <Icon size={13} className="text-[#D6B97B]" />
                      <span>{item.label}</span>
                    </Link>
                  );
                })}
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeSearchSection;
