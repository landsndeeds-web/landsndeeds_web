import { motion } from 'framer-motion';
import { Building2, Users, Target } from 'lucide-react';

const highlights = [
  { icon: Building2, label: 'Market Knowledge', desc: 'Deep insights into Tamil Nadu property markets' },
  { icon: Users,    label: 'Client-Centric',   desc: 'Understanding your goals before recommending solutions' },
  { icon: Target,   label: 'Transparent',       desc: 'Clear, honest communication at every stage' },
];

const AboutIntro = () => {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Decorative accent */}
      <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-transparent via-[#D6B97B]/50 to-transparent" />

      <div className="container mx-auto px-6 max-w-6xl">

        {/* Centered Header — matches other sections */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14 space-y-3"
        >
          <span className="text-[#D6B97B] font-bold tracking-[0.3em] uppercase text-xs">Who We Are</span>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-[#1A335E] leading-tight">
            More Than a{' '}
            <span className="gold-gradient">Property Platform</span>
          </h2>
        </motion.div>

        {/* Two-column body */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left: Text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="space-y-7"
          >
            <p className="text-gray-600 text-lg leading-relaxed">
              Lands N Deeds is a property guidance platform created to simplify real estate decisions.
              Instead of simply listing properties, we focus on understanding our clients' requirements and
              helping them find opportunities that match their location, budget, and long-term goals.
            </p>
            <p className="text-gray-600 text-base leading-relaxed">
              Our approach combines market knowledge, transparent communication, and professional guidance
              to create a smoother property experience for buyers, sellers, investors, and property owners.
            </p>

            {/* Accent line */}
            <div className="flex items-center gap-4 pt-2">
              <div className="w-12 h-[2px] bg-[#D6B97B]" />
              <span className="text-[#1A335E] font-semibold text-sm italic">
                "Every property decision deserves trusted guidance."
              </span>
            </div>
          </motion.div>

          {/* Right: Highlight Cards */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="grid gap-5"
          >
            {highlights.map((item, i) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={i}
                  whileHover={{ x: 6 }}
                  transition={{ duration: 0.25 }}
                  className="flex items-start gap-5 bg-gray-50 hover:bg-[#1A335E] group rounded-2xl p-6 border border-gray-100 hover:border-[#1A335E] transition-all duration-300 cursor-default"
                >
                  <div className="w-12 h-12 rounded-xl bg-[#1A335E] group-hover:bg-[#D6B97B] flex items-center justify-center shrink-0 transition-colors duration-300">
                    <Icon size={22} className="text-[#D6B97B] group-hover:text-[#1A335E] transition-colors" />
                  </div>
                  <div className="space-y-1">
                    <h4 className="font-serif font-bold text-[#1A335E] group-hover:!text-white transition-colors">{item.label}</h4>
                    <p className="text-gray-500 group-hover:text-white/70 text-sm leading-relaxed transition-colors">{item.desc}</p>
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

export default AboutIntro;
