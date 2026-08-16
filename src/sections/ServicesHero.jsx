import { motion } from 'framer-motion';

const servicesNav = [
  { name: 'Property - Legal Services', href: '#property-legal-services' },
  { name: 'Consultation', href: '#consultation' },
  { name: '360 Degree Due Diligence', href: '#360-degree-due-diligence' },
  { name: 'End to End - Registration process', href: '#end-to-end-registration-process' },
  { name: 'Digital Survey', href: '#digital-survey' },
  { name: 'Land Clearance and Approvals', href: '#land-clearance-and-approvals' },
];

const ServicesHero = () => {
  return (
    <section className="py-14 md:py-20 luxury-gradient-bg relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-5">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-[#D6B97B] font-bold tracking-[0.3em] uppercase text-xs"
          >
            Lands N Deeds Services
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-serif font-bold gold-gradient pb-2"
          >
            Our Core Services
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-gray-200 text-base md:text-xl max-w-2xl mx-auto leading-relaxed"
          >
            Comprehensive real estate, legal, due diligence, survey, and statutory approval solutions tailored for Tamil Nadu property transactions.
          </motion.p>

          {/* Quick Nav Badges for 6 Sections */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-wrap justify-center gap-2 pt-4"
          >
            {servicesNav.map((s, idx) => (
              <a
                key={idx}
                href={s.href}
                className="px-4 py-2 rounded-full bg-white/10 hover:bg-[#D6B97B] text-white hover:text-[#0D1B2A] border border-white/20 text-xs font-semibold transition-all duration-300 flex items-center gap-1.5 no-underline"
              >
                <span>{s.name}</span>
              </a>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ServicesHero;
