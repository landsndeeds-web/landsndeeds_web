import { motion } from 'framer-motion';
import {
  ClipboardList, Search, MessageSquare, MapPin, FileText, CheckCircle2
} from 'lucide-react';

const steps = [
  {
    icon: ClipboardList,
    step: '01',
    title: 'Understand Your Requirement',
    desc: 'We begin by listening — understanding your property goals, budget, location preferences, and timeline.',
  },
  {
    icon: Search,
    step: '02',
    title: 'Shortlist Suitable Properties',
    desc: 'Using our verified network, we curate a list of properties that genuinely match your specific criteria.',
  },
  {
    icon: MessageSquare,
    step: '03',
    title: 'Property Guidance',
    desc: 'Our experts provide in-depth property advice, market insights, and transparent evaluation to support your decision.',
  },
  {
    icon: MapPin,
    step: '04',
    title: 'Site Visit Coordination',
    desc: 'We organise and accompany you on site visits, ensuring you have all the information you need on the ground.',
  },
  {
    icon: FileText,
    step: '05',
    title: 'Documentation Support',
    desc: 'We guide you through all property paperwork, verification, and legal documentation for a smooth process.',
  },
  {
    icon: CheckCircle2,
    step: '06',
    title: 'Decision & Assistance',
    desc: 'We support your final decision with post-sale or post-purchase assistance for a complete property journey.',
  },
];

const AboutHowWeWork = () => {
  return (
    <section className="py-24 bg-[#F8F6F2] relative overflow-hidden">
      {/* Subtle grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.025] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(#1A335E 1px, transparent 1px), linear-gradient(90deg, #1A335E 1px, transparent 1px)`,
          backgroundSize: '60px 60px',
        }}
      />

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 space-y-3"
        >
          <span className="text-[#D6B97B] font-bold tracking-[0.3em] uppercase text-xs">How We Work</span>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-[#1A335E]">
            A Simple &{' '}
            <span className="gold-gradient">Guided Property Journey</span>
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto text-base leading-relaxed pt-1">
            Every step is designed to make the property journey organised, transparent, and convenient.
          </p>
        </motion.div>

        {/* Step Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
          {steps.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.55 }}
                className="relative bg-white rounded-3xl p-8 border border-gray-100 hover:border-[#D6B97B]/40 shadow-md hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 group overflow-hidden"
              >
                {/* Connecting arrow (desktop only, not on last in each row) */}
                {i < steps.length - 1 && (i + 1) % 3 !== 0 && (
                  <div className="absolute -right-4 top-1/2 -translate-y-1/2 hidden lg:block z-20">
                    <div className="w-8 h-px bg-[#D6B97B]" />
                    <div className="absolute right-0 top-1/2 -translate-y-1/2 w-0 h-0 border-t-4 border-b-4 border-l-6 border-transparent border-l-[#D6B97B]" />
                  </div>
                )}

                {/* Step number background */}
                <div className="absolute -top-4 -right-4 text-[100px] font-bold text-gray-50 group-hover:text-[#D6B97B]/5 transition-colors select-none font-serif leading-none pointer-events-none">
                  {item.step}
                </div>

                <div className="space-y-5 relative z-10">
                  {/* Icon + Step badge */}
                  <div className="flex items-center justify-between">
                    <div className="w-14 h-14 rounded-2xl bg-[#1A335E]/5 group-hover:bg-[#1A335E] border border-[#1A335E]/10 flex items-center justify-center transition-all duration-300">
                      <Icon size={24} className="text-[#1A335E] group-hover:text-[#D6B97B] transition-colors" />
                    </div>
                    <span className="text-xs font-bold text-[#D6B97B] bg-[#D6B97B]/10 border border-[#D6B97B]/20 rounded-full px-3 py-1">
                      Step {item.step}
                    </span>
                  </div>

                  <h3 className="font-serif font-bold text-[#1A335E] text-lg leading-tight group-hover:text-[#D6B97B] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
                </div>

                {/* Bottom accent */}
                <div className="absolute bottom-0 left-0 w-0 h-1 bg-[#D6B97B] group-hover:w-full transition-all duration-500 rounded-b-3xl" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default AboutHowWeWork;
