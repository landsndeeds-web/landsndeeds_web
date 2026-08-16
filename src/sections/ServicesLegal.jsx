import { motion } from 'framer-motion';
import { Scale, FileText, ShieldCheck, FileCheck, CheckCircle2, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import legalImg from '../assets/vision_image.webp';

const legalServicesList = [
  {
    icon: FileText,
    title: "30+ Years Title Search & Legal Opinion",
    desc: "In-depth tracing of ownership history, parent deed verification, and comprehensive legal search reports prepared by senior Advocates."
  },
  {
    icon: Scale,
    title: "Document Drafting & Vetting",
    desc: "Meticulous drafting and verification of Sale Deeds, Lease Agreements, Power of Attorney, Settlement Deeds, and Joint Venture contracts."
  },
  {
    icon: ShieldCheck,
    title: "Revenue & Patta Validation",
    desc: "Cross-checking Patta, Chitta, Adangal, FMB Sketches, and Town Survey Land Records (TSLR) with Tamil Nadu Revenue Department registers."
  },
  {
    icon: FileCheck,
    title: "Litigation & Court Stay Inspection",
    desc: "Thorough verification with civil courts and sub-registrar offices to ensure zero pending litigation, mortgages, or court attachments."
  }
];

const ServicesLegal = () => {
  return (
    <section id="property-legal-services" className="py-12 md:py-18 bg-white relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Side: Content */}
          <div className="lg:col-span-7 space-y-4">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1A335E]/5 text-[#D6B97B] font-bold tracking-widest uppercase text-xs">
              <Scale size={14} />
              Legal Verification &amp; Advisory
            </span>
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-[#1A335E] leading-tight">
              Property - <span className="gold-gradient">Legal Services</span>
            </h2>
            <p className="text-gray-600 leading-relaxed text-sm md:text-base font-normal">
              Navigating property law requires absolute precision. Our legal team, guided by senior Advocates and legal specialists, delivers watertight legal opinions, title checks, and document drafting to safeguard your investments across Tamil Nadu.
            </p>

            {/* Feature Cards Grid */}
            <div className="grid sm:grid-cols-2 gap-4 pt-2">
              {legalServicesList.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: idx * 0.08 }}
                    viewport={{ once: true }}
                    className="p-4 rounded-xl bg-slate-50 border border-gray-200/80 hover:border-[#D6B97B] hover:shadow-md transition-all duration-300 space-y-1.5"
                  >
                    <div className="w-8 h-8 rounded-lg bg-[#1A335E]/10 flex items-center justify-center text-[#1A335E]">
                      <Icon size={17} />
                    </div>
                    <h3 className="font-serif font-bold text-[#1A335E] text-sm md:text-base">{item.title}</h3>
                    <p className="text-gray-500 text-xs md:text-sm leading-relaxed">{item.desc}</p>
                  </motion.div>
                );
              })}
            </div>

            <div className="pt-2">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#1A335E] text-[#D6B97B] font-bold text-xs uppercase tracking-widest hover:bg-[#0D1B2A] transition-all"
              >
                <span>Request Legal Opinion</span>
                <ArrowRight size={14} />
              </Link>
            </div>
          </div>

          {/* Right Side: Visual Image & Floating Card */}
          <div className="lg:col-span-5 relative">
            <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-xl border border-gray-100 group">
              <img
                src={legalImg}
                alt="Property Legal Services - Lands N Deeds"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1A335E]/70 via-transparent to-transparent" />
            </div>

            {/* Floating Badge */}
            <div className="absolute -bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md p-4 rounded-xl shadow-xl border border-gray-200">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#D6B97B]/20 flex items-center justify-center text-[#1A335E] shrink-0">
                  <CheckCircle2 size={20} className="text-[#D6B97B]" />
                </div>
                <div>
                  <h4 className="font-serif font-bold text-[#1A335E] text-xs uppercase tracking-wider">100% Legal Safeguard</h4>
                  <p className="text-gray-600 text-xs mt-0.5">
                    Verified by practicing High Court Advocates and domain legal experts.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesLegal;
