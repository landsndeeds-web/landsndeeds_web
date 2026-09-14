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
    <section id="about-team" className="py-10 md:py-14 bg-slate-50 relative overflow-hidden">
      {/* Decorative Glow */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#D6B97B]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-8 space-y-2 max-w-2xl mx-auto">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#1A335E]/5 text-[#D6B97B] font-bold tracking-widest uppercase text-xs">
            <UserCheck size={14} />
            Our Leadership &amp; Experts
          </span>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#1A335E]">
            Our Eminent <span className="gold-gradient">Team Members</span>
          </h2>
          <p className="text-gray-500 text-xs md:text-sm leading-relaxed font-normal">
            Former IAS, IRS officers, DROs, Tahsildars, and Advocates bringing legal authority and risk mitigation to every deal.
          </p>
        </div>

        {/* Compact Team Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3.5 md:gap-4">
          {team.map((member, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: (i % 5) * 0.05 }}
              viewport={{ once: true }}
              className="group relative bg-white rounded-xl border border-gray-200/80 p-3 shadow-sm hover:border-[#D6B97B] hover:shadow-md transition-all duration-300 flex flex-col justify-between overflow-hidden"
            >
              {/* Top Accent Line */}
              <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-[#D6B97B] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-t-xl" />

              <div>
                {/* Photo Container */}
                <div className="aspect-[4/3.8] rounded-lg overflow-hidden relative bg-slate-100 mb-2.5">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <span className="absolute top-2 right-2 px-1.5 py-0.5 rounded bg-[#1A335E] text-[#D6B97B] text-[9px] font-extrabold tracking-wider uppercase shadow">
                    {member.badge}
                  </span>
                </div>

                {/* Text Info */}
                <div className="space-y-1">
                  <h3 className="text-xs md:text-sm font-serif font-bold text-[#1A335E] group-hover:text-[#D6B97B] transition-colors leading-snug line-clamp-1">
                    {member.name}
                  </h3>
                  <p className="text-[#D6B97B] text-[10px] font-bold uppercase tracking-wider line-clamp-1">
                    {member.title}
                  </p>
                </div>
              </div>

              {/* Qualification */}
              <p className="text-gray-400 text-[10px] leading-tight pt-2 mt-2 border-t border-gray-100 line-clamp-2">
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
