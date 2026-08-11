import { motion } from 'framer-motion';
import { ShieldCheck, Award, MapPin } from 'lucide-react';

const AboutHero = () => {
  return (
    <section className="py-12 md:py-16 bg-gradient-to-r from-[#0D1B2A] via-[#1A335E] to-[#142646] text-white relative overflow-hidden">
      {/* Decorative glows */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#D6B97B]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-[#1A335E]/40 rounded-full blur-2xl pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-4">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#D6B97B]/20 border border-[#D6B97B]/40 text-[#D6B97B] text-xs font-bold uppercase tracking-widest"
          >
            <ShieldCheck size={14} />
            Trusted Property Platform in Tamil Nadu
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-6xl font-serif font-bold !text-white leading-tight"
          >
            About <span className="gold-gradient">Lands N Deeds</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="!text-gray-200 text-base md:text-xl max-w-2xl mx-auto leading-relaxed font-normal"
          >
            Unparalleled domain expertise in real estate transactions, property due diligence, legal verification, and land management across Tamil Nadu.
          </motion.p>

          {/* Quick stats pills */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-wrap items-center justify-center gap-3 pt-2"
          >
            <span className="px-4 py-2 rounded-full bg-white/10 text-white text-xs font-semibold border border-white/15 backdrop-blur-sm flex items-center gap-2">
              <Award size={14} className="text-[#D6B97B]" /> Ex-IAS, IRS & Revenue Experts
            </span>
            <span className="px-4 py-2 rounded-full bg-white/10 text-white text-xs font-semibold border border-white/15 backdrop-blur-sm flex items-center gap-2">
              <ShieldCheck size={14} className="text-[#D6B97B]" /> 100% Land Title Check
            </span>
            <span className="px-4 py-2 rounded-full bg-white/10 text-white text-xs font-semibold border border-white/15 backdrop-blur-sm flex items-center gap-2">
              <MapPin size={14} className="text-[#D6B97B]" /> Pan Tamil Nadu Network
            </span>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutHero;
