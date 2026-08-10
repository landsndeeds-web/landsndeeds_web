import { motion } from 'framer-motion';
import { Lock, Eye, Award, UserCheck, BookOpen } from 'lucide-react';

const values = [
  {
    icon: Lock,
    title: 'Trust',
    desc: 'Building long-term relationships through honesty and reliability.',
    color: 'from-blue-500/10 to-blue-600/5',
    iconColor: 'text-blue-600',
    borderColor: 'hover:border-blue-200',
  },
  {
    icon: Eye,
    title: 'Transparency',
    desc: 'Providing clear information to help clients make informed decisions.',
    color: 'from-amber-500/10 to-amber-600/5',
    iconColor: 'text-amber-600',
    borderColor: 'hover:border-amber-200',
  },
  {
    icon: Award,
    title: 'Professionalism',
    desc: 'Delivering every service with commitment, responsibility, and care.',
    color: 'from-[#1A335E]/10 to-[#1A335E]/5',
    iconColor: 'text-[#1A335E]',
    borderColor: 'hover:border-[#1A335E]/20',
  },
  {
    icon: UserCheck,
    title: 'Customer First',
    desc: "Understanding every client's unique requirement before recommending solutions.",
    color: 'from-green-500/10 to-green-600/5',
    iconColor: 'text-green-600',
    borderColor: 'hover:border-green-200',
  },
  {
    icon: BookOpen,
    title: 'Continuous Learning',
    desc: 'Keeping up with market trends and property insights to provide better guidance.',
    color: 'from-purple-500/10 to-purple-600/5',
    iconColor: 'text-purple-600',
    borderColor: 'hover:border-purple-200',
  },
];

const AboutValues = () => {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-6 max-w-7xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 space-y-3"
        >
          <span className="text-[#D6B97B] font-bold tracking-[0.3em] uppercase text-xs">Our Values</span>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-[#1A335E]">
            What We{' '}
            <span className="gold-gradient">Stand For</span>
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto text-base leading-relaxed pt-1">
            Our values shape every interaction, every recommendation, and every service we deliver.
          </p>
        </motion.div>

        {/* Values — centered last row */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
          {values.map((val, i) => {
            const Icon = val.icon;
            const isLast = i === values.length - 1;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.55 }}
                whileHover={{ y: -5, scale: 1.01 }}
                className={`bg-gradient-to-br ${val.color} rounded-3xl p-8 border border-gray-100 ${val.borderColor} shadow-sm hover:shadow-xl transition-all duration-300 group ${isLast ? 'md:col-span-1 lg:col-start-2' : ''}`}
              >
                <div className="space-y-4">
                  {/* Icon */}
                  <div className="w-14 h-14 rounded-2xl bg-white shadow-md flex items-center justify-center">
                    <Icon size={26} className={val.iconColor} />
                  </div>

                  {/* Content */}
                  <div>
                    <h3 className="font-serif font-bold text-[#1A335E] text-xl mb-2 group-hover:text-[#D6B97B] transition-colors">
                      {val.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{val.desc}</p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default AboutValues;
