import { Link } from 'react-router-dom';
import { ArrowRight, Phone, CheckCircle2, Sparkles } from 'lucide-react';
import prop7 from '../assets/property7.webp';

const HomeFinalCTA = () => {
  return (
    <section id="home-final-cta" className="py-5 md:py-6 px-4 sm:px-6 bg-slate-50 relative overflow-hidden">
      {/* Decorative ambient lighting */}
      <div className="absolute top-0 right-10 w-80 h-80 bg-[#D6B97B]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-80 h-80 bg-[#10B981]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto relative z-10">
        <div className="relative rounded-2xl overflow-hidden group shadow-lg shadow-slate-200/60 border border-gray-200/80 bg-white">
          
          {/* Subtle Background Property Image with Bright Luminous Overlay */}
          <div className="absolute inset-0 z-0">
            <img
              src={prop7}
              alt="Property in Tamil Nadu"
              className="w-full h-full object-cover opacity-15 group-hover:scale-105 transition-transform duration-[3s] ease-out"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-white via-white/95 to-[#ECFDF5]/80" />
          </div>

          {/* Top Tri-Color Accent Line */}
          <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#1A335E] via-[#D6B97B] to-[#10B981] z-10" />

          {/* 2-Column Balanced Compact Layout */}
          <div className="relative z-10 p-5 sm:p-7 md:p-8 flex flex-col lg:flex-row items-center justify-between gap-6 lg:gap-10">
            
            {/* Left Column: Heading & Copy */}
            <div className="space-y-2 text-center lg:text-left max-w-xl">
              <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#0D5C3A]/10 border border-[#0D5C3A]/25 text-[#0D5C3A] text-[10px] sm:text-[11px] font-bold uppercase tracking-widest">
                <Sparkles size={11} className="text-[#D6B97B]" />
                Start Your Property Journey
              </span>

              <h2 className="text-xl sm:text-2xl md:text-3xl font-serif font-bold text-[#1A335E] leading-tight">
                Looking for the <span className="gold-gradient">Right Property?</span>
              </h2>

              <p className="text-gray-600 text-xs sm:text-sm leading-relaxed font-normal">
                Our legal and real estate consultants are ready to assist you with verified listings, 360° due diligence, and hassle-free registration across Tamil Nadu.
              </p>
            </div>

            {/* Right Column: Actions & Trust Badges */}
            <div className="w-full lg:w-auto flex flex-col items-center lg:items-end gap-3 shrink-0">
              
              {/* Action Buttons Row */}
              <div className="flex flex-wrap items-center justify-center lg:justify-end gap-2.5 w-full sm:w-auto">
                <Link
                  to="/contact"
                  id="final-cta-enquire-btn"
                  className="px-6 py-2.5 bg-gradient-to-r from-[#D6B97B] via-[#E8C97A] to-[#D6B97B] hover:brightness-105 text-[#0D1B2A] rounded-xl font-bold text-xs uppercase tracking-widest transition-all duration-300 flex items-center gap-2 shadow-md shadow-[#D6B97B]/25 hover:scale-105 active:scale-95 no-underline"
                >
                  <span>Enquire Now</span>
                  <ArrowRight size={14} />
                </Link>
                <Link
                  to="/contact"
                  id="final-cta-contact-btn"
                  className="px-6 py-2.5 border-2 border-[#1A335E] text-[#1A335E] hover:bg-[#1A335E] hover:text-white rounded-xl font-bold text-xs uppercase tracking-widest transition-all flex items-center gap-2 no-underline"
                >
                  <Phone size={13} />
                  <span>Contact Our Team</span>
                </Link>
              </div>

              {/* Trust Badges - 2x2 compact grid on the right */}
              <div className="grid grid-cols-2 gap-2 text-[11px] text-gray-700 w-full sm:w-auto">
                <div className="flex items-center gap-1.5 bg-slate-50/80 px-2.5 py-1 rounded-lg border border-gray-200/70">
                  <CheckCircle2 size={12} className="text-[#0D5C3A] shrink-0" />
                  <span className="font-medium whitespace-nowrap">Verified Clear Titles</span>
                </div>
                <div className="flex items-center gap-1.5 bg-slate-50/80 px-2.5 py-1 rounded-lg border border-gray-200/70">
                  <CheckCircle2 size={12} className="text-[#B8922E] shrink-0" />
                  <span className="font-medium whitespace-nowrap">Expert Guidance</span>
                </div>
                <div className="flex items-center gap-1.5 bg-slate-50/80 px-2.5 py-1 rounded-lg border border-gray-200/70">
                  <CheckCircle2 size={12} className="text-[#0D5C3A] shrink-0" />
                  <span className="font-medium whitespace-nowrap">Pan-Tamil Nadu</span>
                </div>
                <div className="flex items-center gap-1.5 bg-slate-50/80 px-2.5 py-1 rounded-lg border border-gray-200/70">
                  <CheckCircle2 size={12} className="text-[#B8922E] shrink-0" />
                  <span className="font-medium whitespace-nowrap">Free Consultation</span>
                </div>
              </div>

            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeFinalCTA;
