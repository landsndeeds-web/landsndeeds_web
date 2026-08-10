import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  Home, TrendingUp, Key, Building2, Store, Leaf,
  BarChart2, MessageSquare, FileText, ArrowRight
} from 'lucide-react';

const services = [
  { icon: Home,         title: 'Property Buying Assistance',  desc: 'Find the right property matching your budget, location, and long-term goals.',          link: '/services' },
  { icon: TrendingUp,   title: 'Property Selling Support',    desc: 'Maximise the value of your property with our verified buyer network and guidance.',       link: '/services' },
  { icon: Key,          title: 'Property Leasing Solutions',  desc: 'Lease residential or commercial properties with transparent terms and expert support.',    link: '/services' },
  { icon: Building2,    title: 'Residential Properties',      desc: 'Houses, villas, apartments, and plots across prime locations in Tamil Nadu.',             link: '/properties' },
  { icon: Store,        title: 'Commercial Properties',       desc: 'Offices, shops, warehouses, and commercial spaces for business growth.',                   link: '/properties' },
  { icon: Leaf,         title: 'Agricultural Lands',          desc: 'Verified agricultural and farmland opportunities across Tamil Nadu.',                      link: '/properties' },
  { icon: BarChart2,    title: 'Investment Opportunities',    desc: 'Strategic property investment guidance backed by market knowledge and expert advisors.',    link: '/services' },
  { icon: MessageSquare,title: 'Property Consultation',       desc: 'One-on-one property guidance sessions tailored to your specific requirements.',            link: '/contact'   },
  { icon: FileText,     title: 'Documentation Guidance',      desc: 'Support with property documentation, verification, and legal paperwork.',                  link: '/services' },
];

const cardVariants = {
  hidden:  { opacity: 0, y: 25 },
  visible: (i) => ({ opacity: 1, y: 0, transition: { delay: i * 0.08, duration: 0.55 } }),
};

const AboutWhatWeDo = () => {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Subtle top/bottom gradients */}
      <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-[#F8F6F2] to-transparent pointer-events-none" />

      <div className="container mx-auto px-6 max-w-7xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 space-y-3"
        >
          <span className="text-[#D6B97B] font-bold tracking-[0.3em] uppercase text-xs">What We Do</span>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-[#1A335E]">
            Complete Property Solutions{' '}
            <span className="gold-gradient">Under One Platform</span>
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto text-base leading-relaxed pt-1">
            Whether you are searching for your first home, planning an investment, looking to sell a property,
            or exploring leasing opportunities — Lands N Deeds provides end-to-end support.
          </p>
        </motion.div>

        {/* Service Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {services.map((svc, i) => {
            const Icon = svc.icon;
            return (
              <motion.div
                key={i}
                custom={i}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="group relative bg-gray-50 hover:bg-[#1A335E] border border-gray-100 hover:border-[#1A335E] rounded-3xl p-7 transition-all duration-400 hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-[#1A335E]/10 cursor-default"
              >
                {/* Number badge */}
                <span className="absolute top-5 right-5 text-[10px] font-bold text-gray-200 group-hover:text-white/20 transition-colors font-mono">
                  0{i + 1}
                </span>

                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-2xl bg-[#1A335E]/5 group-hover:bg-[#D6B97B] flex items-center justify-center transition-all duration-300">
                    <Icon size={22} className="text-[#1A335E] group-hover:text-[#1A335E] transition-colors" />
                  </div>
                  <h3 className="font-serif font-bold text-[#1A335E] group-hover:!text-white text-base leading-tight transition-colors">
                    {svc.title}
                  </h3>
                  <p className="text-gray-500 group-hover:text-white/65 text-sm leading-relaxed transition-colors">
                    {svc.desc}
                  </p>
                </div>

                {/* Bottom accent line */}
                <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#D6B97B] group-hover:w-full transition-all duration-500 rounded-b-3xl" />
              </motion.div>
            );
          })}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Link
            to="/services"
            className="group inline-flex items-center gap-3 bg-[#1A335E] hover:bg-[#D6B97B] text-white hover:text-[#0F0F0F] px-10 py-4 rounded-full font-bold uppercase tracking-widest text-xs transition-all duration-300 shadow-lg shadow-[#1A335E]/15"
          >
            View Our Services
            <ArrowRight size={16} className="group-hover:translate-x-1.5 transition-transform" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutWhatWeDo;
