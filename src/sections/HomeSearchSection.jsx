import { Link } from 'react-router-dom';
import { ArrowRight, Building2, Home, Landmark, Trees, CheckCircle2, ShieldCheck } from 'lucide-react';

const quickLinks = [
  { label: 'Residential Plots & Villas', icon: Home, color: '#1A335E', bg: 'bg-blue-50/70 border-blue-100 hover:border-[#1A335E] text-[#1A335E]' },
  { label: 'Commercial Spaces', icon: Building2, color: '#B8922E', bg: 'bg-amber-50/70 border-amber-100 hover:border-[#D6B97B] text-[#B8922E]' },
  { label: 'Agricultural Lands', icon: Trees, color: '#0D5C3A', bg: 'bg-emerald-50/70 border-emerald-100 hover:border-[#10B981] text-[#0D5C3A]' },
  { label: 'Investment Properties', icon: Landmark, color: '#0D5C3A', bg: 'bg-emerald-50/70 border-emerald-100 hover:border-[#10B981] text-[#0D5C3A]' },
];

const HomeSearchSection = () => {
  return (
    <section id="explore-properties-cta" className="py-6 md:py-8 bg-slate-50 relative overflow-hidden">
      {/* Subtle warm & emerald ambient lighting */}
      <div className="absolute top-0 right-10 w-96 h-96 bg-[#D6B97B]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-96 h-96 bg-[#10B981]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="bg-white rounded-2xl md:rounded-3xl p-5 md:p-8 shadow-xl shadow-slate-200/60 border border-gray-200/80 relative overflow-hidden">
          
          {/* Top Tri-Color Accent Line */}
          <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#1A335E] via-[#D6B97B] to-[#10B981]" />

          <div className="flex flex-col lg:flex-row items-center justify-between gap-6 lg:gap-10">
            
            {/* Left Content */}
            <div className="space-y-3 text-center lg:text-left max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0D5C3A]/10 border border-[#0D5C3A]/25 text-[#0D5C3A] text-xs font-bold uppercase tracking-widest">
                <ShieldCheck size={14} className="text-[#0D5C3A]" />
                Verified & Legally Clear Listings
              </div>

              <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-[#1A335E] leading-tight">
                Find Your Ideal Property in <span className="gold-gradient">Tamil Nadu</span>
              </h2>

              <p className="text-gray-600 text-xs sm:text-sm md:text-base leading-relaxed font-normal">
                Discover handpicked residential plots, commercial properties, farmlands, and high-yield investment options with 100% transparent titles.
              </p>

              {/* Trust Badges */}
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2.5 pt-1 text-xs">
                <span className="flex items-center gap-1.5 font-medium bg-slate-50 px-2.5 py-1 rounded-lg border border-gray-200/70 text-gray-700">
                  <CheckCircle2 size={14} className="text-[#0D5C3A]" /> Verified Clear Titles
                </span>
                <span className="flex items-center gap-1.5 font-medium bg-slate-50 px-2.5 py-1 rounded-lg border border-gray-200/70 text-gray-700">
                  <CheckCircle2 size={14} className="text-[#B8922E]" /> Transparent Pricing
                </span>
                <span className="flex items-center gap-1.5 font-medium bg-slate-50 px-2.5 py-1 rounded-lg border border-gray-200/70 text-gray-700">
                  <CheckCircle2 size={14} className="text-[#0D5C3A]" /> Pan-Tamil Nadu Support
                </span>
              </div>
            </div>

            {/* Right Action Box */}
            <div className="w-full lg:w-auto flex flex-col items-center lg:items-end gap-4 shrink-0">
              <Link
                to="/properties"
                id="home-explore-properties-cta-btn"
                className="w-full sm:w-auto px-7 py-3.5 bg-gradient-to-r from-[#D6B97B] via-[#E8C97A] to-[#D6B97B] hover:brightness-105 text-[#0D1B2A] rounded-xl font-bold uppercase tracking-widest text-xs transition-all duration-300 flex items-center justify-center gap-2.5 shadow-lg shadow-[#D6B97B]/30 hover:scale-[1.02] active:scale-[0.98] group no-underline"
              >
                <span>Browse All Properties</span>
                <ArrowRight size={17} className="transition-transform duration-300 group-hover:translate-x-1 text-[#0D1B2A]" />
              </Link>

              {/* Quick Jump Category Chips */}
              <div className="flex flex-wrap justify-center lg:justify-end gap-2 max-w-md">
                {quickLinks.map((item, idx) => {
                  const Icon = item.icon;
                  return (
                    <Link
                      key={idx}
                      to="/properties"
                      className={`px-3 py-1.5 rounded-lg border text-xs font-semibold transition-all duration-200 flex items-center gap-1.5 no-underline shadow-2xs ${item.bg}`}
                    >
                      <Icon size={13} style={{ color: item.color }} />
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
