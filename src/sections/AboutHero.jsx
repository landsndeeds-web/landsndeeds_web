import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, MapPin } from 'lucide-react';

const AboutHero = () => {
  return (
    <section className="relative min-h-[92vh] flex items-center overflow-hidden bg-gradient-to-br from-[#1A2E50] via-[#1E3A6A] to-[#243B5A]">
      {/* Mid-dark background orbs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[-10%] right-[-5%] w-[700px] h-[700px] rounded-full bg-[#D6B97B]/12 blur-[130px]" />
        <div className="absolute bottom-[-10%] left-[-5%] w-[500px] h-[500px] rounded-full bg-[#0D1B32]/80 blur-[110px]" />
        {/* Subtle grid lines */}
        <div
          className="absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage: `linear-gradient(#D6B97B 1px, transparent 1px), linear-gradient(90deg, #D6B97B 1px, transparent 1px)`,
            backgroundSize: '80px 80px',
          }}
        />
      </div>

      {/* Decorative Floating Rings */}
      <div className="absolute top-1/2 right-12 -translate-y-1/2 pointer-events-none hidden lg:block">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 40, repeat: Infinity, ease: 'linear' }}
          className="w-[480px] h-[480px] rounded-full border border-[#D6B97B]/15"
        />
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
          className="absolute top-12 left-12 right-12 bottom-12 rounded-full border border-[#D6B97B]/25"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-48 h-48 rounded-full bg-white/5 backdrop-blur-sm border border-[#D6B97B]/25 flex flex-col items-center justify-center gap-2 shadow-2xl">
            <span className="text-[#D6B97B] text-4xl font-serif font-bold">10+</span>
            <span className="text-white/50 text-xs uppercase tracking-widest text-center">Years of<br />Trust</span>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl space-y-8 py-24">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 bg-white/10 border border-[#D6B97B]/30 rounded-full px-5 py-2"
          >
            <MapPin size={14} className="text-[#D6B97B]" />
            <span className="text-[#D6B97B] font-bold tracking-[0.25em] uppercase text-xs">
              Tamil Nadu's Trusted Property Platform
            </span>
          </motion.div>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.7 }}
            className="text-5xl md:text-7xl font-serif font-bold text-white leading-[1.1]"
          >
            About{' '}
            <span className="gold-gradient">Lands N Deeds</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25, duration: 0.7 }}
            className="text-white/75 text-xl md:text-2xl font-light leading-relaxed max-w-2xl"
          >
            Your Trusted Property Guide for Smarter Real Estate Decisions
          </motion.p>

          {/* Body */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.7 }}
            className="text-white/55 text-base md:text-lg leading-relaxed max-w-2xl"
          >
            Buying, selling, leasing, or investing in property is a significant decision. At Lands N Deeds, we believe every property journey should begin with clarity, confidence, and trusted guidance. We connect people with verified property opportunities while providing professional support at every stage of the process.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.55, duration: 0.6 }}
            className="flex flex-wrap gap-4 pt-2"
          >
            <Link
              to="/properties"
              className="group inline-flex items-center gap-3 bg-[#D6B97B] hover:bg-[#E8C97A] text-[#0F0F0F] px-8 py-4 rounded-full font-bold uppercase tracking-widest text-xs transition-all duration-300 shadow-lg shadow-[#D6B97B]/20"
            >
              Explore Properties
              <ArrowRight size={16} className="group-hover:translate-x-1.5 transition-transform" />
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center gap-3 bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 text-white px-8 py-4 rounded-full font-bold uppercase tracking-widest text-xs transition-all duration-300"
            >
              Contact Our Team
            </Link>
          </motion.div>

          {/* Stats Row */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.7 }}
            className="flex flex-wrap gap-8 pt-4 border-t border-white/10 mt-4"
          >
            {[
              { value: '500+', label: 'Properties Listed' },
              { value: '1000+', label: 'Happy Clients' },
              { value: '10+', label: 'Expert Advisors' },
            ].map((stat, i) => (
              <div key={i} className="space-y-1">
                <p className="text-[#D6B97B] text-2xl font-serif font-bold">{stat.value}</p>
                <p className="text-white/45 text-xs uppercase tracking-widest">{stat.label}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutHero;
