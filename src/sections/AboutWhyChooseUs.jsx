import { motion } from 'framer-motion';
import { ShieldCheck, Award, Handshake, FileText, TrendingUp, HeadphonesIcon, HelpCircle } from 'lucide-react';

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
    <section id="why-choose-landsndeeds" className="py-10 md:py-14 bg-white relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-8 md:mb-10 space-y-2 max-w-2xl mx-auto">
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1A335E]/5 text-[#D6B97B] font-bold tracking-widest uppercase text-xs">
            <HelpCircle size={14} />
            Why Choose Us
          </span>
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-[#1A335E]">
            Why Buyers, Sellers &amp; Investors Choose <span className="gold-gradient">Lands N Deeds</span>
          </h2>
          <p className="text-gray-600 text-sm md:text-base leading-relaxed font-normal">
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
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                viewport={{ once: true }}
                className="group relative bg-slate-50 p-5 rounded-xl border border-gray-200/80 hover:border-[#D6B97B] hover:shadow-md transition-all duration-300 overflow-hidden"
              >
                {/* Accent top line */}
                <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-[#D6B97B] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-t-xl" />

                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-lg bg-[#1A335E]/10 flex items-center justify-center text-[#1A335E] group-hover:bg-[#1A335E] group-hover:text-[#D6B97B] transition-all duration-300 shrink-0">
                    <Icon size={18} />
                  </div>
                  <div>
                    <h3 className="text-[#1A335E] font-serif font-bold text-sm md:text-base mb-1 group-hover:text-[#D6B97B] transition-colors duration-300">
                      ✓ {item.title}
                    </h3>
                    <p className="text-gray-600 text-xs md:text-sm leading-relaxed">{item.description}</p>
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
