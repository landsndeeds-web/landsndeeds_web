import { motion } from 'framer-motion';
import { FileCheck, Landmark, CheckCircle2, Clock, Calculator, ArrowRight, Stamp } from 'lucide-react';
import { Link } from 'react-router-dom';

const registrationSteps = [
  {
    step: "Step 01",
    title: "Drafting & Stamp Duty Calculation",
    desc: "Drafting execution deeds (Sale, Lease, Gift, Partition) in accordance with Tamil Nadu Registration Act and calculating precise stamp duty & registration fees.",
    icon: Calculator
  },
  {
    step: "Step 02",
    title: "TNREGINET Token & Slot Booking",
    desc: "Uploading document details on the TNREGINET online portal, generating token numbers, and scheduling preferred time slots at the Sub-Registrar Office (SRO).",
    icon: Clock
  },
  {
    step: "Step 03",
    title: "SRO Physical Execution Support",
    desc: "Accompanying parties to the Sub-Registrar Office for biometric identification, photo capture, witness verification, and document registration execution.",
    icon: Stamp
  },
  {
    step: "Step 04",
    title: "Post-Registration Patta Transfer",
    desc: "Submitting registered deed details to the Revenue Department for expeditious Patta name transfer, Chitta update, and VAO record mutation.",
    icon: Landmark
  }
];

const ServicesRegistration = () => {
  return (
    <section id="end-to-end-registration-process" className="py-12 md:py-18 bg-white relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-12 space-y-3">
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1A335E]/5 text-[#D6B97B] font-bold tracking-widest uppercase text-xs">
            <FileCheck size={14} />
            Sub-Registrar Office Support
          </span>
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-[#1A335E]">
            End to End - <span className="gold-gradient">Registration Process</span>
          </h2>
          <p className="text-gray-600 text-sm md:text-base leading-relaxed font-normal">
            From final deed drafting to Sub-Registrar Office execution and Patta transfer, we manage every single step so your property registration is smooth, quick, and stress-free.
          </p>
        </div>

        {/* 4 Step Timeline Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {registrationSteps.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                viewport={{ once: true }}
                className="relative bg-slate-50 p-6 rounded-xl border border-gray-200/80 hover:border-[#D6B97B] hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
              >
                {/* Top Step Badge */}
                <div className="flex items-center justify-between mb-4">
                  <span className="px-2.5 py-0.5 rounded bg-[#1A335E] text-[#D6B97B] text-[10px] font-extrabold tracking-wider uppercase">
                    {item.step}
                  </span>
                  <div className="w-8 h-8 rounded-lg bg-[#1A335E]/10 flex items-center justify-center text-[#1A335E]">
                    <Icon size={16} />
                  </div>
                </div>

                <div className="space-y-2 mb-4">
                  <h3 className="font-serif font-bold text-[#1A335E] text-base leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-gray-500 text-xs md:text-sm leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                <div className="pt-3 border-t border-gray-200/60 flex items-center gap-1.5 text-[#D6B97B] text-[11px] font-bold uppercase tracking-wider">
                  <CheckCircle2 size={13} />
                  Seamless Execution
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
            <span>Get Registration Assistance</span>
            <ArrowRight size={14} />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServicesRegistration;
