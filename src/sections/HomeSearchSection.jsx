import { Link } from 'react-router-dom';
import { ArrowRight, Building2, Home, Landmark, Sparkles, Trees, CheckCircle2, ShieldCheck } from 'lucide-react';

const quickLinks = [
  { label: 'Residential Plots & Villas', icon: Home, accent: 'border-amber-400/30 hover:border-amber-400 text-amber-200' },
  { label: 'Commercial Spaces', icon: Building2, accent: 'border-blue-400/30 hover:border-blue-400 text-blue-200' },
  { label: 'Agricultural Lands', icon: Trees, accent: 'border-emerald-400/30 hover:border-emerald-400 text-emerald-200' },
  { label: 'Investment Properties', icon: Landmark, accent: 'border-emerald-400/30 hover:border-emerald-400 text-emerald-200' },
];

const HomeSearchSection = () => {
  return (
    <section id="explore-properties-cta" className="py-6 md:py-8 bg-gradient-to-r from-[#0D1B2A] via-[#1A335E] to-[#0A2E23] relative overflow-hidden text-white">
      {/* Decorative background glows */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-[#D6B97B]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#10B981]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="bg-white/[0.05] border border-white/10 backdrop-blur-md rounded-2xl md:rounded-3xl p-5 md:p-8 shadow-2xl relative overflow-hidden">
          
          {/* Top Tri-Color Accent Line */}
          <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[#1A335E] via-[#D6B97B] to-[#10B981]" />

          <div className="flex flex-col lg:flex-row items-center justify-between gap-6 lg:gap-10">
            
            {/* Left Content */}
            <div className="space-y-3 text-center lg:text-left max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#10B981]/15 border border-[#10B981]/30 text-[#34D399] text-xs font-bold uppercase tracking-widest">
                <ShieldCheck size={14} className="text-[#34D399]" />
                Verified & Legally Clear Listings
              </div>

              <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold !text-white leading-tight">
                Find Your Ideal Property in <span className="gold-gradient">Tamil Nadu</span>
              </h2>

              <p className="!text-gray-200 text-xs sm:text-sm md:text-base leading-relaxed">
                Discover handpicked residential plots, commercial properties, farmlands, and high-yield investment options with 100% transparent titles.
              </p>

              {/* Trust Badges */}
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 pt-1 text-xs text-gray-200">
                <span className="flex items-center gap-1.5 font-medium bg-black/20 px-2.5 py-1 rounded-lg border border-white/10">
                  <CheckCircle2 size={14} className="text-[#10B981]" /> Verified Clear Titles
                </span>
                <span className="flex items-center gap-1.5 font-medium bg-black/20 px-2.5 py-1 rounded-lg border border-white/10">
                  <CheckCircle2 size={14} className="text-[#D6B97B]" /> Transparent Pricing
                </span>
                <span className="flex items-center gap-1.5 font-medium bg-black/20 px-2.5 py-1 rounded-lg border border-white/10">
                  <CheckCircle2 size={14} className="text-[#34D399]" /> Pan-Tamil Nadu Support
                </span>
              </div>
            </div>

            {/* Right Action Box */}
            <div className="w-full lg:w-auto flex flex-col items-center lg:items-end gap-4 shrink-0">
              <Link
                to="/properties"
                id="home-explore-properties-cta-btn"
                className="w-full sm:w-auto px-7 py-3.5 bg-gradient-to-r from-[#D6B97B] via-[#E8C97A] to-[#D6B97B] hover:brightness-110 text-[#0D1B2A] rounded-xl font-bold uppercase tracking-widest text-xs transition-all duration-300 flex items-center justify-center gap-2.5 shadow-xl shadow-[#D6B97B]/25 hover:scale-[1.03] active:scale-[0.98] group no-underline"
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
                      className={`px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/15 border text-xs font-medium transition-all duration-200 flex items-center gap-1.5 no-underline backdrop-blur-sm ${item.accent}`}
                    >
                      <Icon size={13} />
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
