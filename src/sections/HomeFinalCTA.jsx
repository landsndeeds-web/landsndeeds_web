import { Link } from 'react-router-dom';
import { ArrowRight, Phone } from 'lucide-react';
import prop7 from '../assets/property7.webp';

const HomeFinalCTA = () => {
  return (
    <section id="home-final-cta" className="py-10 md:py-14 px-6 bg-slate-50">
      <div className="container mx-auto">
        <div className="relative rounded-3xl overflow-hidden group shadow-xl">
          {/* Background Image */}
          <div className="absolute inset-0 z-0">
            <img
              src={prop7}
              alt="Property in Tamil Nadu"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-[3s] ease-out"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#0D1B2A]/95 via-[#1A335E]/90 to-[#1A335E]/60" />
          </div>

          <div className="relative z-10 p-8 md:p-14 max-w-3xl space-y-6">
            {/* Tag */}
            <span className="inline-block px-3 py-1 rounded-full bg-[#D6B97B]/20 border border-[#D6B97B]/40 text-[#D6B97B] text-xs font-bold uppercase tracking-widest">
              Start Your Property Journey
            </span>

            {/* Heading */}
            <h2 className="text-3xl md:text-5xl font-serif font-bold !text-white leading-tight">
              Looking for the{' '}
              <span className="gold-gradient">Right Property?</span>
            </h2>

            {/* Subtext */}
            <p className="!text-gray-200 text-base md:text-lg max-w-xl leading-relaxed font-normal">
              Our team is ready to help you find properties that match your location, budget, and investment goals across Tamil Nadu.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4 pt-1">
              <Link
                to="/contact"
                id="final-cta-enquire-btn"
                className="px-8 py-3.5 bg-gradient-to-r from-[#D6B97B] to-[#C6A56A] hover:from-[#E8C97A] hover:to-[#D6B97B] text-[#0D1B2A] rounded-full font-bold text-xs md:text-sm transition-all flex items-center gap-2 uppercase tracking-widest no-underline hover:scale-105 transform shadow-lg shadow-[#D6B97B]/20"
              >
                🔍 Enquire Now
                <ArrowRight size={16} />
              </Link>
              <Link
                to="/contact"
                id="final-cta-contact-btn"
                className="px-8 py-3.5 border-2 border-white/50 text-white rounded-full font-bold text-xs md:text-sm hover:bg-white/10 transition-all flex items-center gap-2 uppercase tracking-widest backdrop-blur-sm no-underline"
              >
                <Phone size={15} />
                Contact Our Team
              </Link>
            </div>

            {/* Trust badges */}
            <div className="flex flex-wrap gap-4 pt-3 border-t border-white/15">
              {['Verified Listings', 'Expert Consultants', 'Pan Tamil Nadu Coverage', 'Free Initial Consultation'].map((badge) => (
                <div key={badge} className="flex items-center gap-2">
                  <div className="w-4 h-4 rounded-full bg-[#D6B97B] flex items-center justify-center">
                    <span className="text-[#0D1B2A] text-[9px] font-extrabold">✓</span>
                  </div>
                  <span className="text-white/80 text-xs font-semibold">{badge}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeFinalCTA;
