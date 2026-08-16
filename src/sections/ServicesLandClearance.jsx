import { motion } from 'framer-motion';
import { Building2, ShieldCheck, FileCheck, Award, CheckCircle2, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const clearanceApprovals = [
  {
    icon: Building2,
    title: "DTCP & CMDA Layout Approvals",
    desc: "End-to-end processing for layout sanctions, master plan land compliance, road width norms, and OSR (Open Space Reservation) land filings."
  },
  {
    icon: FileCheck,
    title: "Land Use Reclassification (CLU)",
    desc: "Assisting land owners with Change of Land Use (CLU) from agricultural to residential, commercial, or industrial classification with Directorate of Town & Country Planning."
  },
  {
    icon: ShieldCheck,
    title: "Government NOC Clearances",
    desc: "Securing mandatory No Objection Certificates (NOC) from TNPCB (Pollution Control Board), PWD (Water Resources), Highways, Fire & Rescue, and Revenue departments."
  },
  {
    icon: Award,
    title: "Building Plan Sanctions & RERA Registration",
    desc: "Facilitating local authority building plan approvals, structural sanctions, and RERA project registrations for residential and commercial ventures."
  }
];

const ServicesLandClearance = () => {
  return (
    <section id="land-clearance-and-approvals" className="py-12 md:py-18 bg-white relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-12 space-y-3">
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1A335E]/5 text-[#D6B97B] font-bold tracking-widest uppercase text-xs">
            <Building2 size={14} />
            Regulatory Approvals &amp; Clearances
          </span>
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-[#1A335E]">
            Land Clearance and <span className="gold-gradient">Approvals</span>
          </h2>
          <p className="text-gray-600 text-sm md:text-base leading-relaxed font-normal">
            Obtaining statutory government approvals can be complex. We liaise with planning authorities, revenue departments, and municipal corporations across Tamil Nadu to secure timely land clearances and approvals.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {clearanceApprovals.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                viewport={{ once: true }}
                className="bg-slate-50 p-6 rounded-xl border border-gray-200/80 hover:border-[#D6B97B] hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
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

                <div className="pt-4 mt-4 border-t border-gray-200/60 flex items-center gap-1.5 text-[#D6B97B] text-[11px] font-bold uppercase tracking-wider">
                  <CheckCircle2 size={13} />
                  Statutory Clearance
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
            <span>Request Land Clearance Support</span>
            <ArrowRight size={14} />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServicesLandClearance;
