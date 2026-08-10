import { motion } from 'framer-motion';

const milestones = [
  {
    year: 'Founded',
    title: 'The Beginning',
    desc: 'Lands N Deeds was established with the vision of creating a reliable platform where people can confidently buy, sell, lease, and invest in property.',
  },
  {
    year: 'Growth',
    title: 'Expanding Our Network',
    desc: 'We expanded our network, strengthened professional relationships, and brought together eminent revenue, legal, and real estate experts.',
  },
  {
    year: 'Today',
    title: 'A Trusted Platform',
    desc: 'Today we continue to build a platform where trust, transparency, and customer satisfaction remain at the heart of everything we do.',
  },
];

const AboutStory = () => {
  return (
    <section className="py-24 bg-[#F8F6F2] relative overflow-hidden">
      {/* Background pattern */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle, #1A335E 1px, transparent 1px)`,
          backgroundSize: '40px 40px',
        }}
      />

      <div className="container mx-auto px-6 max-w-6xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20 space-y-3"
        >
          <span className="text-[#D6B97B] font-bold tracking-[0.3em] uppercase text-xs">Our Story</span>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-[#1A335E]">
            Built on Trust.{' '}
            <span className="gold-gradient">Growing with Purpose.</span>
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto text-base leading-relaxed pt-1">
            Every successful property decision starts with the right guidance.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Central line */}
          <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-[#D6B97B]/0 via-[#D6B97B]/60 to-[#D6B97B]/0 hidden md:block" />

          <div className="space-y-10 md:space-y-0">
            {milestones.map((item, i) => {
              const isLeft = i % 2 === 0;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: isLeft ? -40 : 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.15 }}
                  className={`relative flex items-center md:gap-12 ${isLeft ? 'md:flex-row' : 'md:flex-row-reverse'} flex-col gap-6 mb-10`}
                >
                  {/* Card */}
                  <div className="md:w-[calc(50%-3rem)] w-full">
                    <div className={`bg-white rounded-3xl p-8 shadow-lg border border-gray-100 hover:border-[#D6B97B]/40 hover:shadow-xl transition-all duration-300 ${isLeft ? 'md:text-right' : 'md:text-left'} text-left`}>
                      <div className={`inline-flex items-center gap-2 bg-[#1A335E]/5 border border-[#1A335E]/10 rounded-full px-4 py-1.5 mb-4 ${isLeft ? 'md:float-right md:clear-both' : ''}`}>
                        <span className="text-[#D6B97B] font-bold text-xs uppercase tracking-widest">{item.year}</span>
                      </div>
                      <div className={isLeft ? 'md:clear-both' : ''}>
                        <h3 className="font-serif font-bold text-[#1A335E] text-xl mb-2">{item.title}</h3>
                        <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
                      </div>
                    </div>
                  </div>

                  {/* Center dot */}
                  <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-12 h-12 rounded-full bg-white border-4 border-[#D6B97B] shadow-lg items-center justify-center z-10">
                    <div className="w-3 h-3 rounded-full bg-[#D6B97B]" />
                  </div>

                  {/* Spacer for opposite side */}
                  <div className="hidden md:block md:w-[calc(50%-3rem)]" />
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutStory;
