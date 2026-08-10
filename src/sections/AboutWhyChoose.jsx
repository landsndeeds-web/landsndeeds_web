import { motion } from 'framer-motion';
import {
  ShieldCheck, Lightbulb, MessageCircle, Heart,
  BarChart2, Users
} from 'lucide-react';

const reasons = [
  {
    icon: ShieldCheck,
    title: 'Verified Property Opportunities',
    desc: 'Every property opportunity is carefully reviewed for authenticity before being presented to our clients.',
    number: '01',
  },
  {
    icon: Lightbulb,
    title: 'Professional Property Guidance',
    desc: 'Advised by seasoned real estate professionals, legal experts, and former revenue officials.',
    number: '02',
  },
  {
    icon: MessageCircle,
    title: 'Transparent Communication',
    desc: 'No hidden agendas. We keep you fully informed with clear, honest information at every step.',
    number: '03',
  },
  {
    icon: Heart,
    title: 'Customer-Centric Approach',
    desc: 'We listen first. Every recommendation is aligned with your unique requirements and goals.',
    number: '04',
  },
  {
    icon: Users,
    title: 'Support for Buyers, Sellers & Investors',
    desc: 'Comprehensive end-to-end support no matter what side of the transaction you are on.',
    number: '05',
  },
  {
    icon: BarChart2,
    title: 'Knowledge-Driven Decisions',
    desc: 'Market insights and property trends that empower you to make smarter, more confident decisions.',
    number: '06',
  },
];

const AboutWhyChoose = () => {
  return (
    <section className="py-24 bg-[#F8F6F2] relative overflow-hidden">
      {/* Accent orb */}
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full bg-[#D6B97B]/6 blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 space-y-3"
        >
          <span className="text-[#D6B97B] font-bold tracking-[0.3em] uppercase text-xs">Why Choose Us</span>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-[#1A335E]">
            Why People Choose{' '}
            <span className="gold-gradient">Lands N Deeds?</span>
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto text-base leading-relaxed pt-1">
            Choosing the right property is about more than finding a good location or price. It requires the right
            information, professional support, and a transparent process. At Lands N Deeds, we make every
            property decision simpler and more reliable.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
          {reasons.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.55 }}
                whileHover={{ y: -6 }}
                className="bg-white rounded-3xl p-8 border border-gray-100 hover:border-[#D6B97B]/40 shadow-md hover:shadow-2xl hover:shadow-[#D6B97B]/10 transition-all duration-300 group relative overflow-hidden"
              >
                {/* Number watermark */}
                <span className="absolute top-5 right-6 text-5xl font-bold text-gray-50 group-hover:text-[#D6B97B]/8 transition-colors select-none pointer-events-none font-serif">
                  {item.number}
                </span>

                <div className="space-y-4 relative z-10">
                  <div className="w-13 h-13 w-14 h-14 rounded-2xl bg-[#1A335E]/5 group-hover:bg-[#1A335E] border border-[#1A335E]/10 flex items-center justify-center transition-all duration-300">
                    <Icon size={24} className="text-[#1A335E] group-hover:text-[#D6B97B] transition-colors" />
                  </div>
                  <h3 className="font-serif font-bold text-[#1A335E] text-lg leading-tight group-hover:text-[#D6B97B] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                {/* Bottom line */}
                <div className="absolute bottom-0 left-0 w-0 h-1 bg-[#D6B97B] group-hover:w-full transition-all duration-500 rounded-b-3xl" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default AboutWhyChoose;
