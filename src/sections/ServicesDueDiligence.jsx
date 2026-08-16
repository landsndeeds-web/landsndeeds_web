import { motion } from 'framer-motion';
import { ShieldCheck, Search, CheckCircle, Compass, FileSearch, ArrowRight, UserCheck } from 'lucide-react';
import { Link } from 'react-router-dom';

const dueDiligenceSteps = [
  {
    icon: Search,
    title: "1. Encumbrance & SRO Historical Search",
    desc: "Extraction and analysis of Encumbrance Certificates (EC) for 30 to 50 years to verify unbroken ownership transfers, existing mortgages, or claims."
  },
  {
    icon: Compass,
    title: "2. Physical Ground & Boundary Verification",
    desc: "On-ground site visit to verify physical possession, boundary extents, road accessibility, layout alignments, and encroachment risks."
  },
  {
    icon: FileSearch,
    title: "3. Revenue Department Document Audit",
    desc: "Verification of Patta, Chitta, A-Register, Town Survey records (TSLR), FMB sketches, and Revenue Inspector reports."
  },
  {
    icon: UserCheck,
    title: "4. Parties & Power of Attorney Audit",
    desc: "Authenticating seller identity, verifying validity of Power of Attorney documents, legal heir certificates, and seller authorization."
  }
];

const ServicesDueDiligence = () => {
  return (
    <section id="360-degree-due-diligence" className="py-14 md:py-20 bg-slate-900 text-white relative overflow-hidden">
      {/* Background Accent Glow */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#D6B97B]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-12 space-y-3">
          <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#D6B97B]/20 text-[#D6B97B] font-bold tracking-widest uppercase text-xs">
            <ShieldCheck size={14} />
            Full Spectrum Risk Elimination
          </span>
          <h2 className="text-3xl md:text-5xl font-serif font-bold !text-white leading-tight">
            360 Degree <span className="gold-gradient">Due Diligence</span>
          </h2>
          <p className="!text-gray-300 text-sm md:text-base leading-relaxed font-normal">
            Our signature 360° due diligence protocol inspects every legal, physical, revenue, and historical facet of an immovable property so you buy or invest with zero financial risk.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {dueDiligenceSteps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                viewport={{ once: true }}
                className="bg-white/5 backdrop-blur-sm p-6 rounded-2xl border border-white/10 hover:border-[#D6B97B] hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
              >
                <div className="space-y-4">
                  <div className="w-11 h-11 rounded-xl bg-[#D6B97B]/10 flex items-center justify-center text-[#D6B97B] group-hover:bg-[#D6B97B] group-hover:text-[#0D1B2A] transition-colors">
                    <Icon size={22} />
                  </div>
                  <h3 className="font-serif font-bold !text-white text-base md:text-lg leading-snug group-hover:!text-[#D6B97B] transition-colors">
                    {step.title}
                  </h3>
                  <p className="!text-gray-300 text-xs md:text-sm leading-relaxed">
                    {step.desc}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-white/10 flex items-center gap-1.5 text-[#D6B97B] text-[11px] font-bold uppercase tracking-wider">
                  <CheckCircle size={13} />
                  100% Risk Verification
                </div>
              </motion.div>
            );
          })}
        </div>

        <div className="text-center mt-10">
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-[#D6B97B] text-[#0D1B2A] font-bold text-xs uppercase tracking-widest hover:bg-white transition-all shadow-lg"
          >
            <span>Order 360° Due Diligence Report</span>
            <ArrowRight size={14} />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServicesDueDiligence;
