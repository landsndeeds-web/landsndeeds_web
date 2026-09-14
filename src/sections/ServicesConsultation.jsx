import { motion } from 'framer-motion';
import { Headphones, Users, Award, ShieldAlert, Video, Calendar, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const consultationPillars = [
  {
    icon: Award,
    title: "Senior IAS / IRS / DRO Expert Guidance",
    desc: "Direct advisory from retired high-ranking Revenue Officers and former District Revenue Officers (DRO) on land policies, guidelines, and revenue procedures."
  },
  {
    icon: ShieldAlert,
    title: "Property Valuation & Risk Assessment",
    desc: "Unbiased assessment of land pricing, guideline rates, upcoming infrastructure corridors, and potential transaction risks."
  },
  {
    icon: Video,
    title: "Confidential Deal Rooms & Video Sessions",
    desc: "Structured in-person negotiations at our Coimbatore office or secure encrypted video conferences for NRIs and remote clients."
  },
  {
    icon: Users,
    title: "Buyer, Seller & Investor Matchmaking",
    desc: "Transparent consultation connecting genuine land buyers with verified land owners without undisclosed middlemen fees."
  }
];

const ServicesConsultation = () => {
  return (
    <section id="consultation" className="py-12 md:py-18 bg-slate-50 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-10 space-y-3">
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1A335E]/5 text-[#D6B97B] font-bold tracking-widest uppercase text-xs">
            <Headphones size={14} />
            Professional Advisory Services
          </span>
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-[#1A335E]">
            Expert <span className="gold-gradient">Consultation</span>
          </h2>
          <p className="text-gray-600 text-sm md:text-base leading-relaxed font-normal">
            Gain clarity before making high-value property decisions. Our consultation services bring decades of administrative, legal, and financial expertise directly to your fingertips.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {consultationPillars.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                viewport={{ once: true }}
                className="bg-white p-5 rounded-xl border border-gray-200/80 shadow-sm hover:border-[#D6B97B] hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="w-10 h-10 rounded-xl bg-[#1A335E]/10 flex items-center justify-center text-[#1A335E]">
                    <Icon size={20} />
                  </div>
                  <h3 className="font-serif font-bold text-[#1A335E] text-base leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-gray-500 text-xs md:text-sm leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-gray-100 flex items-center justify-between">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#D6B97B]">
                    Professional Advisory
                  </span>
                  <Calendar size={14} className="text-gray-400" />
                </div>
              </motion.div>
            );
          })}
        </div>

        <div className="text-center mt-10">
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-[#1A335E] text-[#D6B97B] font-bold text-xs uppercase tracking-widest hover:bg-[#0D1B2A] transition-all shadow-md"
          >
            <span>Book Consultation Session</span>
            <ArrowRight size={14} />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServicesConsultation;
