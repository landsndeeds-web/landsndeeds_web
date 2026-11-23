import { motion } from 'framer-motion';
import { ShieldCheck, Award, Handshake, FileText, TrendingUp, HeadphonesIcon, HelpCircle, CheckCircle2 } from 'lucide-react';

const reasons = [
  {
    icon: Award,
    title: "Eminent Panel of Experts",
    description: "Guided by former IAS, IRS officers, District Revenue Officers (DRO), Tahsildars, and senior Advocates bringing unmatched authority."
  },
  {
    icon: ShieldCheck,
    title: "100% Verified Property Listings",
    description: "Every property listed undergoing rigorous land due diligence, Patta/EC checks, and title verification to ensure zero risk."
  },
  {
    icon: Handshake,
    title: "Complete Buying, Selling & Leasing Support",
    description: "Assisting clients across all property types — residential, commercial, agricultural, and industrial — from search to final deal."
  },
  {
    icon: FileText,
    title: "Comprehensive Documentation Assistance",
    description: "Drafting sale agreements, verifying encumbrance certificates, checking parent deeds, and guiding smooth registrar office execution."
  },
  {
    icon: TrendingUp,
    title: "Strategic Investment Consultation",
    description: "Helping investors identify high-appreciation corridors and land banks with solid long-term returns across Tamil Nadu."
  },
  {
    icon: HeadphonesIcon,
    title: "End-to-End Customer Support",
    description: "Dedicated personal assistance, transparent communication, and secured in-person or video negotiation meetings."
  }
];

const AboutWhyChooseUs = () => {
  return (
    <section id="why-choose-landsndeeds" className="py-8 md:py-10 bg-[#FAF8F3] relative overflow-hidden font-['Plus_Jakarta_Sans',sans-serif]">
      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-6 md:mb-8 space-y-2 max-w-2xl mx-auto">
          <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#FAF3E0] text-[#8C6B1C] border border-[#EADBB6] font-extrabold tracking-wider uppercase text-xs">
            <HelpCircle size={14} className="text-[#8C6B1C]" />
            Why Choose Us
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-[#0D1B2A] leading-tight">
            Why Buyers, Sellers &amp; Investors Choose <span className="bg-gradient-to-r from-[#0D1B2A] via-[#1A335E] to-[#B8860B] bg-clip-text text-transparent">Lands N Deeds</span>
          </h2>
          <p className="text-slate-600 text-sm md:text-base leading-relaxed font-normal">
            Finding the right property is more than comparing prices. We focus on absolute clarity, legal safety, and professional guidance to help every client make confident real estate decisions.
          </p>
        </div>

        {/* 6 Grid Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
          {reasons.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.35, delay: idx * 0.05 }}
                viewport={{ once: true }}
                className="group relative bg-white p-5 sm:p-6 rounded-2xl border border-[#E9E2D0] hover:border-[#D4AF37] hover:shadow-[0_10px_30px_rgba(26,51,94,0.08)] transition-all duration-300 overflow-hidden"
              >
                {/* Accent top line */}
                <div className="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#0D1B2A] to-[#1A335E] flex items-center justify-center text-[#F3DA90] group-hover:from-[#1A335E] group-hover:to-[#D4AF37] group-hover:text-white transition-all duration-300 shrink-0 shadow-sm">
                    <Icon size={20} />
                  </div>
                  <div>
                    <h3 className="text-[#0D1B2A] font-extrabold text-base md:text-lg mb-1.5 group-hover:text-[#9A7318] transition-colors duration-300 flex items-center gap-1.5">
                      <CheckCircle2 size={16} className="text-[#B8860B] shrink-0" />
                      {item.title}
                    </h3>
                    <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">{item.description}</p>
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

export default AboutWhyChooseUs;
