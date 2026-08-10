import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Phone } from 'lucide-react';

const AboutCTA = () => {
  return (
    <section className="py-24 px-6 bg-white">
      <div className="container mx-auto max-w-7xl">
        <div className="relative rounded-[40px] overflow-hidden">
          {/* Background */}
          <div className="absolute inset-0 z-0">
            <div className="w-full h-full bg-gradient-to-br from-[#1A335E] via-[#112244] to-[#0D1B38]" />
            {/* Gold orb */}
            <div className="absolute top-[-20%] right-[-5%] w-[600px] h-[600px] rounded-full bg-[#D6B97B]/10 blur-[100px] pointer-events-none" />
            {/* Grid lines */}
            <div
              className="absolute inset-0 opacity-[0.04]"
              style={{
                backgroundImage: `linear-gradient(#D6B97B 1px, transparent 1px), linear-gradient(90deg, #D6B97B 1px, transparent 1px)`,
                backgroundSize: '60px 60px',
              }}
            />
          </div>

          {/* Decorative ring */}
          <div className="absolute top-1/2 right-12 -translate-y-1/2 w-[420px] h-[420px] border border-[#D6B97B]/10 rounded-full pointer-events-none hidden lg:block" />
          <div className="absolute top-1/2 right-12 -translate-y-1/2 w-[260px] h-[260px] border border-[#D6B97B]/20 rounded-full pointer-events-none hidden lg:block" />

          {/* Content */}
          <div className="relative z-10 p-12 md:p-20">
            <div className="max-w-2xl space-y-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="space-y-3"
              >
                <span className="text-[#D6B97B] font-bold tracking-[0.3em] uppercase text-xs">
                  Get Started
                </span>
                <h2 className="text-4xl md:text-6xl font-serif font-bold text-white leading-tight">
                  Let's Find the Right{' '}
                  <span className="gold-gradient">Property Together</span>
                </h2>
              </motion.div>

              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="text-white/65 text-lg leading-relaxed"
              >
                Whether you're buying, selling, leasing, or investing, our team is here to guide you
                with confidence and clarity. Every property journey deserves the right start.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.35, duration: 0.6 }}
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
                  className="group inline-flex items-center gap-3 bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 text-white px-8 py-4 rounded-full font-bold uppercase tracking-widest text-xs transition-all duration-300"
                >
                  <Phone size={14} />
                  Speak to an Expert
                </Link>
              </motion.div>

              {/* Internal links row */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5, duration: 0.6 }}
                className="flex flex-wrap gap-x-6 gap-y-2 pt-4 border-t border-white/10"
              >
                {[
                  { label: 'Buy Property',       to: '/properties' },
                  { label: 'Sell Property',       to: '/services'   },
                  { label: 'Lease Property',      to: '/services'   },
                  { label: 'Property Services',   to: '/services'   },
                  { label: 'Knowledge Centre',    to: '/blogs'      },
                  { label: 'Post Property',       to: '/contact'    },
                ].map((link, i) => (
                  <Link
                    key={i}
                    to={link.to}
                    className="text-white/40 hover:text-[#D6B97B] text-xs uppercase tracking-wider transition-colors duration-200 flex items-center gap-1.5 group"
                  >
                    <span className="w-1 h-1 rounded-full bg-[#D6B97B]/40 group-hover:bg-[#D6B97B] transition-colors" />
                    {link.label}
                  </Link>
                ))}
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutCTA;
