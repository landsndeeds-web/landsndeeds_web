import { motion } from 'framer-motion';
import { ShieldCheck, Award, MapPin, Sparkles } from 'lucide-react';

const AboutHero = () => {
  return (
    <section className="py-12 md:py-16 bg-gradient-to-br from-[#0B1522] via-[#1A335E] to-[#0D1B2A] text-white relative overflow-hidden border-b border-[#C5A059]/20">
      {/* Decorative glows */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#C5A059]/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-4">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#C5A059]/15 border border-[#C5A059]/40 text-[#E5C378] text-xs font-bold uppercase tracking-wider shadow-sm"
          >
            <Sparkles size={14} className="text-[#C5A059]" />
            Trusted Property Platform in Tamil Nadu
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl font-['Plus_Jakarta_Sans',sans-serif] font-black !text-white leading-[1.12] tracking-tight"
          >
            About <span className="bg-gradient-to-r from-[#F3E5AB] via-[#E5C378] to-[#C5A059] bg-clip-text text-transparent">Lands N Deeds</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="!text-slate-100 text-base md:text-xl max-w-2xl mx-auto leading-relaxed font-normal"
          >
            Unparalleled domain expertise in real estate transactions, property due diligence, legal verification, and land management across Tamil Nadu.
          </motion.p>

          {/* Quick stats pills */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-wrap items-center justify-center gap-3 pt-3"
          >
            <span className="px-4 py-2 rounded-full bg-white/10 text-white text-xs sm:text-[13px] font-semibold border border-white/20 backdrop-blur-md flex items-center gap-2 shadow-xs">
              <Award size={15} className="text-[#E5C378]" /> Ex-IAS, IRS & Revenue Experts
            </span>
            <span className="px-4 py-2 rounded-full bg-white/10 text-white text-xs sm:text-[13px] font-semibold border border-white/20 backdrop-blur-md flex items-center gap-2 shadow-xs">
              <ShieldCheck size={15} className="text-[#E5C378]" /> 100% Land Title Check
            </span>
            <span className="px-4 py-2 rounded-full bg-white/10 text-white text-xs sm:text-[13px] font-semibold border border-white/20 backdrop-blur-md flex items-center gap-2 shadow-xs">
              <MapPin size={15} className="text-[#E5C378]" /> Pan Tamil Nadu Network
            </span>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutHero;
