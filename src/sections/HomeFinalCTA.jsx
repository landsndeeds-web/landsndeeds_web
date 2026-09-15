import { Link } from 'react-router-dom';
import { ArrowRight, Phone, CheckCircle2 } from 'lucide-react';
import prop7 from '../assets/property7.webp';

const HomeFinalCTA = () => {
  return (
    <section id="home-final-cta" className="py-8 md:py-10 px-4 sm:px-6 bg-slate-50">
      <div className="container mx-auto">
        <div className="relative rounded-2xl md:rounded-3xl overflow-hidden group shadow-xl border border-gray-100">
          {/* Background Image */}
          <div className="absolute inset-0 z-0">
            <img
              src={prop7}
              alt="Property in Tamil Nadu"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-[3s] ease-out"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#0D1B2A]/95 via-[#1A335E]/90 to-[#0D5C3A]/70" />
          </div>

          <div className="relative z-10 p-6 sm:p-8 md:p-10 max-w-2xl space-y-4">
            {/* Tag */}
            <span className="inline-block px-3 py-0.5 rounded-full bg-[#D6B97B]/20 border border-[#D6B97B]/40 text-[#D6B97B] text-[11px] font-bold uppercase tracking-widest">
              Start Your Property Journey
            </span>

            {/* Heading */}
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold !text-white leading-tight">
              Looking for the{' '}
              <span className="gold-gradient">Right Property?</span>
            </h2>

            {/* Subtext */}
            <p className="!text-gray-200 text-xs sm:text-sm md:text-base leading-relaxed font-normal">
              Our team of legal and real estate specialists is ready to help you find, verify, and register properties that match your investment goals across Tamil Nadu.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap gap-3 pt-1">
              <Link
                to="/contact"
                id="final-cta-enquire-btn"
                className="px-7 py-3 bg-gradient-to-r from-[#D6B97B] via-[#E8C97A] to-[#D6B97B] hover:brightness-110 text-[#0D1B2A] rounded-full font-bold text-xs transition-all flex items-center gap-2 uppercase tracking-widest no-underline hover:scale-105 transform shadow-lg shadow-[#D6B97B]/25"
              >
                <span>Enquire Now</span>
                <ArrowRight size={15} />
              </Link>
              <Link
                to="/contact"
                id="final-cta-contact-btn"
                className="px-7 py-3 border border-white/50 text-white rounded-full font-bold text-xs hover:bg-white/10 hover:border-[#10B981] hover:text-[#10B981] transition-all flex items-center gap-2 uppercase tracking-widest backdrop-blur-sm no-underline"
              >
                <Phone size={14} />
                <span>Contact Our Team</span>
              </Link>
            </div>

            {/* Trust badges */}
            <div className="flex flex-wrap gap-3 pt-2 border-t border-white/15 text-xs text-white/90">
              {['Verified Clear Titles', 'Expert Real Estate Consultants', 'Pan Tamil Nadu Coverage', 'Free Initial Consultation'].map((badge, i) => (
                <div key={badge} className="flex items-center gap-1.5">
                  <CheckCircle2 size={14} className={i % 2 === 0 ? 'text-[#10B981]' : 'text-[#D6B97B]'} />
                  <span className="text-white/85 text-[11px] font-medium">{badge}</span>
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
