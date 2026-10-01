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
    <section id="our-mission" className="pt-8 pb-10 md:pt-10 md:pb-12 bg-gradient-to-b from-[#FAF8F2] via-white to-slate-50/80 relative overflow-hidden border-b border-slate-200/80">
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-2xl mx-auto text-center mb-8 md:mb-10 space-y-2.5">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-50 text-amber-900 border border-amber-200/80 font-extrabold tracking-wider uppercase text-xs shadow-xs">
            <Target size={14} className="text-[#C5A059]" />
            Our Mission
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-['Plus_Jakarta_Sans',sans-serif] font-black text-[#0D1B2A] tracking-tight leading-tight">
            Our Core Mission &amp; <span className="bg-gradient-to-r from-[#B8860B] via-[#D4AF37] to-[#C5A059] bg-clip-text text-transparent">Commitment</span>
          </h2>
          <p className="text-slate-600 text-sm md:text-base leading-relaxed font-normal">
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
                className="bg-white p-5 sm:p-6 rounded-2xl border border-slate-200/90 shadow-sm hover:border-amber-400 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between group"
              >
                <div className="space-y-3">
                  <div className="w-10 h-10 rounded-xl bg-[#1A335E] flex items-center justify-center text-[#E5C378] shadow-xs group-hover:scale-105 transition-transform">
                    <Icon size={19} />
                  </div>
                  <h3 className="font-['Plus_Jakarta_Sans',sans-serif] font-bold text-[#0D1B2A] text-sm md:text-base leading-snug">
                    {goal.title}
                  </h3>
                  <p className="text-slate-600 text-xs sm:text-[13.5px] leading-relaxed">
                    {goal.desc}
                  </p>
                </div>
                <div className="pt-3.5 mt-3.5 border-t border-slate-100 flex items-center gap-1.5 text-[#B8860B] text-xs font-bold uppercase tracking-wider">
                  <CheckCircle2 size={14} />
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
