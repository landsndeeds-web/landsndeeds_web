import { motion } from 'framer-motion';
import { Target, FileCheck, ShieldAlert, CheckCircle2, Compass } from 'lucide-react';

const AboutMission = () => {
  const missionGoals = [
    {
      icon: FileCheck,
      title: "Comprehensive Document Verification",
      desc: "Checking title deeds, encumbrance certificates (EC), Patta, Chitta, Adangal, and parent documents with revenue authorities."
    },
    {
      icon: ShieldAlert,
      title: "Risk Mitigation & Dispute Clearance",
      desc: "Identifying potential litigation risks, boundary overlaps, or encumbrances before any financial commitments are made."
    },
    {
      icon: Compass,
      title: "End-to-End Client Guidance",
      desc: "Guiding buyers, sellers, and lessees seamlessly through search, due diligence, agreement drafting, and final registration."
    },
    {
      icon: CheckCircle2,
      title: "Fair Value & Ethical Practices",
      desc: "Promoting ethical pricing, transparent commission structures, and unbiased property assessment across Tamil Nadu."
    }
  ];

  return (
    <section id="our-mission" className="py-10 md:py-14 bg-slate-50 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-2xl mx-auto text-center mb-8 md:mb-10 space-y-2">
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1A335E]/5 text-[#D6B97B] font-bold tracking-widest uppercase text-xs">
            <Target size={14} />
            Our Mission
          </span>
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-[#1A335E]">
            Our Core Mission &amp; <span className="gold-gradient">Commitment</span>
          </h2>
          <p className="text-gray-600 text-sm md:text-base leading-relaxed font-normal">
            To simplify, secure, and streamline every real estate deal through meticulous due diligence, legal precision, and uncompromised customer-first service.
          </p>
        </div>

        {/* Mission Pillars Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
          {missionGoals.map((goal, index) => {
            const Icon = goal.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                viewport={{ once: true }}
                className="bg-white p-5 rounded-xl border border-gray-200/80 shadow-sm hover:border-[#D6B97B] hover:shadow-md transition-all duration-300 flex flex-col justify-between"
              >
                <div className="space-y-2.5">
                  <div className="w-9 h-9 rounded-lg bg-[#1A335E]/5 flex items-center justify-center text-[#1A335E]">
                    <Icon size={18} />
                  </div>
                  <h3 className="font-serif font-bold text-[#1A335E] text-sm md:text-base leading-snug">
                    {goal.title}
                  </h3>
                  <p className="text-gray-500 text-xs md:text-sm leading-relaxed">
                    {goal.desc}
                  </p>
                </div>
                <div className="pt-3 mt-3 border-t border-gray-100 flex items-center gap-1.5 text-[#D6B97B] text-[11px] font-bold uppercase tracking-wider">
                  <CheckCircle2 size={13} />
                  Guaranteed Assurance
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default AboutMission;
