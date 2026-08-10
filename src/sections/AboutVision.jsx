import { motion } from 'framer-motion';
import { Eye, Star, Handshake } from 'lucide-react';

const pillars = [
  { icon: Eye,       label: 'Vision',        desc: 'Become Tamil Nadu\'s most trusted property guidance platform.' },
  { icon: Star,      label: 'Excellence',    desc: 'Delivering value beyond property transactions every time.' },
  { icon: Handshake, label: 'Relationships', desc: 'Long-term relationships built on transparency and professionalism.' },
];

const AboutVision = () => {
  return (
    <section className="py-24 luxury-gradient-bg relative overflow-hidden">
      {/* Decorative orbs */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-[#D6B97B]/5 blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-white/3 blur-[80px] pointer-events-none" />

      <div className="container mx-auto px-6 max-w-6xl relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left: Statement */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="space-y-8"
          >
            <div className="space-y-3">
              <span className="text-[#D6B97B] font-bold tracking-[0.3em] uppercase text-xs">Our Vision</span>
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-white leading-tight">
                Building Trust,{' '}
                <span className="gold-gradient">One Property</span>{' '}
                at a Time
              </h2>
            </div>
            <p className="text-white/65 text-lg leading-relaxed">
              Our vision is to become one of Tamil Nadu's most trusted property guidance platforms by helping
              individuals, families, and investors make informed real estate decisions with confidence.
            </p>
            <p className="text-white/65 text-base leading-relaxed">
              We strive to create long-term relationships through transparency, professionalism, and a commitment
              to delivering value beyond property transactions.
            </p>

            {/* Decorative quote bar */}
            <div className="border-l-4 border-[#D6B97B] pl-6 py-2">
              <p className="text-white/80 italic text-base">
                "Lands N Deeds is built on one simple belief — every property decision deserves trusted guidance."
              </p>
            </div>
          </motion.div>

          {/* Right: Pillar Cards */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="grid gap-5"
          >
            {pillars.map((item, i) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={i}
                  whileHover={{ scale: 1.02 }}
                  className="flex items-start gap-5 bg-white/5 backdrop-blur-sm border border-white/10 hover:border-[#D6B97B]/40 rounded-2xl p-6 transition-all duration-300 group"
                >
                  <div className="w-12 h-12 rounded-xl bg-[#D6B97B]/10 group-hover:bg-[#D6B97B] border border-[#D6B97B]/30 flex items-center justify-center shrink-0 transition-all duration-300">
                    <Icon size={22} className="text-[#D6B97B] group-hover:text-[#1A335E] transition-colors" />
                  </div>
                  <div className="space-y-1">
                    <h4 className="font-serif font-bold text-white text-base">{item.label}</h4>
                    <p className="text-white/55 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutVision;
