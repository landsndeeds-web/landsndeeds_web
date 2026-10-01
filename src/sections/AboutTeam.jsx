import { motion } from 'framer-motion';
import { UserCheck, ShieldCheck } from 'lucide-react';

// Import Team Images
import rathna from '../assets/Rathna_Sabapathy.webp';
import narayana from '../assets/Narayana Moorthy.webp';
import sindhu from '../assets/Sindhu.webp';
import rajendran from '../assets/Rajendran.webp';
import ravichandran from '../assets/Ravichandran.webp';
import sivakumar from '../assets/Sivakumar.webp';
import sriYalini from '../assets/Sri Yalini.webp';
import karthik from '../assets/Karthik.webp';
import roshini from '../assets/Roshini.webp';
import divya from '../assets/Divya.webp';

const AboutTeam = () => {
  const team = [
    { 
      name: "MR. V. RATHNA SABAPATHY", 
      title: "Founder & Managing Director",
      qualification: "B.Sc., B.Ed., MBA., LL.B., MBL., ADNEC.", 
      image: rathna,
      badge: "FOUNDER"
    },
    { 
      name: "MR. NARAYANA MOORTHY", 
      title: "Revenue Specialist",
      qualification: "Former District Revenue Officer (DRO)", 
      image: narayana,
      badge: "REVENUE"
    },
    { 
      name: "MR. RAJENDRAN", 
      title: "Finance & Taxation Expert",
      qualification: "Former IRS Officer – Finance Specialist", 
      image: rajendran,
      badge: "FINANCE"
    },
    { 
      name: "MR. RAVICHANDRAN", 
      title: "Due Diligence Officer",
      qualification: "Additional SP (Retd.) – Verification", 
      image: ravichandran,
      badge: "VERIFICATION"
    },
    { 
      name: "MR. SIVAKUMAR", 
      title: "Land Record Specialist",
      qualification: "Former Tahsildar – Revenue Expert", 
      image: sivakumar,
      badge: "LAND RECORDS"
    },
    { 
      name: "MRS. SINDHU ARUNKUMAR", 
      title: "Legal Specialist",
      qualification: "BE., LL.B. – Legal & Documentation", 
      image: sindhu,
      badge: "LEGAL"
    },
    { 
      name: "MS. V. SRI YALINI", 
      title: "Advocate & Legal Advisor",
      qualification: "B.A. LL.B, LL.M (UK) – Advocate", 
      image: sriYalini,
      badge: "LEGAL"
    },
    { 
      name: "MR. P. P. KARTHIK", 
      title: "Land Transaction Expert",
      qualification: "B.Com., MBA., LL.B., CS Specialist", 
      image: karthik,
      badge: "TRANSACTIONS"
    },
    { 
      name: "MS. S. ROSHNI", 
      title: "Advocate",
      qualification: "B.A. LL.B Advocate – Due Diligence", 
      image: roshini,
      badge: "ADVOCATE"
    },
    { 
      name: "MRS. DIVYA PREETHA", 
      title: "IT & Network Manager",
      qualification: "M.Sc. CS – IT & Network Management", 
      image: divya,
      badge: "IT & TECH"
    },
  ];

  return (
    <section id="about-team" className="pt-8 pb-10 md:pt-10 md:pb-12 bg-gradient-to-b from-[#FAF8F2] via-white to-slate-50/80 relative overflow-hidden border-b border-slate-200/80">
      {/* Decorative Glow */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#C5A059]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-8 space-y-2.5 max-w-2xl mx-auto">
          <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-amber-50 text-amber-900 border border-amber-200/80 font-extrabold tracking-wider uppercase text-xs shadow-xs">
            <UserCheck size={14} className="text-[#C5A059]" />
            Our Leadership &amp; Experts
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-['Plus_Jakarta_Sans',sans-serif] font-black text-[#0D1B2A] tracking-tight leading-tight">
            Our Eminent <span className="bg-gradient-to-r from-[#B8860B] via-[#D4AF37] to-[#C5A059] bg-clip-text text-transparent">Team Members</span>
          </h2>
          <p className="text-slate-600 text-sm md:text-base leading-relaxed font-normal">
            Former IAS, IRS officers, DROs, Tahsildars, and Advocates bringing legal authority and risk mitigation to every deal.
          </p>
        </div>

        {/* Compact Team Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-5">
          {team.map((member, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: (i % 5) * 0.05 }}
              viewport={{ once: true }}
              className="group relative bg-white rounded-2xl border border-slate-200/90 p-3.5 shadow-sm hover:border-amber-400 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between overflow-hidden"
            >
              {/* Top Accent Line */}
              <div className="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-[#1A335E] via-[#C5A059] to-[#1A335E] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <div>
                {/* Photo Container */}
                <div className="aspect-[4/3.8] rounded-xl overflow-hidden relative bg-slate-100 mb-3 border border-slate-100 group-hover:border-amber-200 transition-colors">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <span className="absolute top-2 right-2 px-2 py-0.5 rounded-md bg-[#0D1B2A] text-[#E5C378] text-[9.5px] font-black tracking-wider uppercase shadow-md border border-[#C5A059]/30">
                    {member.badge}
                  </span>
                </div>

                {/* Text Info */}
                <div className="space-y-1">
                  <h3 className="text-xs sm:text-sm md:text-[14.5px] font-['Plus_Jakarta_Sans',sans-serif] font-extrabold text-[#0D1B2A] group-hover:text-blue-700 transition-colors leading-snug line-clamp-1">
                    {member.name}
                  </h3>
                  <p className="text-[#B8860B] text-[11px] font-bold uppercase tracking-wider line-clamp-1">
                    {member.title}
                  </p>
                </div>
              </div>

              {/* Qualification */}
              <p className="text-slate-600 text-xs font-medium leading-tight pt-2.5 mt-2.5 border-t border-slate-100 line-clamp-2">
                {member.qualification}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutTeam;
