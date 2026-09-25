import { Link } from 'react-router-dom';
import { Award, ShieldCheck, CheckCircle2, ArrowRight } from 'lucide-react';
import rathnaImg from '../assets/Rathna_Sabapathy.webp';
import narayanaImg from '../assets/Narayana Moorthy.webp';

const leaders = [
  {
    name: 'Mr. V. Rathna Sabapathy',
    designation: 'Founder & Managing Director',
    credential: 'Fmr. Superintendent of Police',
    qualifications: 'B.Sc., B.Ed., MBA., LL.B., MBL., ADNEC.',
    badge: 'Law Enforcement & Governance',
    image: rathnaImg,
    bio: 'Brings over three decades of distinguished public service and law enforcement vigilance. His legal acumen and administrative command ensure watertight risk prevention and dispute-free property transfers.',
    points: [
      'Former Superintendent of Police with exemplary service record',
      'Advanced legal foundation: LL.B. & Master of Business Laws (MBL)',
      'Specialist in high-value asset security & dispute mitigation',
    ],
  },
  {
    name: 'Mr. Narayana Moorthy',
    designation: 'Revenue Specialist & Senior Advisor',
    credential: 'Fmr. District Revenue Officer (DRO)',
    qualifications: 'Former DRO – Tamil Nadu Revenue Department',
    badge: 'Revenue Administration & Title Audit',
    image: narayanaImg,
    bio: 'Commands unmatched authority over Tamil Nadu land administration and revenue jurisprudence. Decades of presiding as District Revenue Officer guarantee authentic Patta, TSLR, and revenue verification.',
    points: [
      'Former District Revenue Officer (DRO) with supreme title oversight',
      'Mastery of Patta, Chitta, Adangal, and TSLR land registers',
      'Authoritative vetting for zero revenue encumbrance or government claims',
    ],
  },
];

const HomeLeadership = () => {
  return (
    <section id="leadership-trust" className="py-8 md:py-10 bg-[#fafbfc] relative overflow-hidden">
      {/* Decorative blurred accents */}
      <div className="absolute top-0 left-0 -ml-20 -mt-20 w-64 h-64 rounded-full bg-[#1d3557]/5 blur-[80px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 -mr-20 -mb-20 w-64 h-64 rounded-full bg-[#c5a059]/10 blur-[80px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-4 mb-8 pb-4 border-b border-gray-200/60">
          <div className="max-w-2xl">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1d3557]/5 text-[#1d3557] font-bold tracking-widest uppercase text-[10px] ring-1 ring-[#1d3557]/10 mb-2.5">
              <Award size={12} className="text-[#c5a059]" />
              Leadership & Trust
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-3xl font-serif font-bold text-[#1d3557] leading-[1.2]">
              Guided by Public Service Experts
            </h2>
            <p className="text-gray-600 text-sm mt-2 leading-relaxed max-w-xl">
              Their historical government credentials serve as our strongest security badge, bridging executive administrative vigilance directly into private real estate transactions.
            </p>
          </div>

          <Link
            to="/about"
            id="leadership-view-team-btn"
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-[#c5a059] to-[#d4b475] hover:from-[#b58f48] hover:to-[#c5a059] text-white rounded-full font-bold uppercase tracking-widest text-[11px] transition-all duration-300 shadow-[0_4px_15px_rgba(197,160,89,0.3)] hover:-translate-y-0.5 group shrink-0 mt-4 md:mt-0"
          >
            <span>Meet Full Advisory Team</span>
            <ArrowRight size={13} className="transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </div>

        {/* 2 Leadership Cards in a Clean Row */}
        <div className="grid lg:grid-cols-2 gap-5 max-w-5xl mx-auto">
          {leaders.map((leader, idx) => (
            <div
              key={idx}
              className="group bg-white rounded-2xl p-5 sm:p-6 border border-gray-200 shadow-sm hover:shadow-[0_8px_25px_-5px_rgba(29,53,87,0.1)] transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between relative overflow-hidden"
            >
              {/* Highlight bar on hover */}
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-[#1d3557] to-[#c5a059] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <div>
                {/* Header with Photo & Credential Badge */}
                <div className="flex flex-col sm:flex-row items-start gap-4 mb-5">
                  <div className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-xl overflow-hidden border-2 border-white shadow-md shrink-0 bg-gray-50 transform group-hover:scale-105 transition-transform duration-300">
                    <img
                      src={leader.image}
                      alt={leader.name}
                      className="w-full h-full object-cover object-top"
                    />
                  </div>

                  <div className="space-y-1 pt-0.5">
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#10B981]/10 text-[#0D5C3A] text-[9px] font-bold uppercase tracking-widest ring-1 ring-[#10B981]/20 mb-1">
                      <ShieldCheck size={11} />
                      {leader.credential}
                    </span>

                    <h3 className="text-lg sm:text-xl font-serif font-bold text-[#1d3557] leading-snug group-hover:text-[#c5a059] transition-colors duration-200">
                      {leader.name}
                    </h3>

                    <p className="text-xs font-bold text-[#1d3557]/80">
                      {leader.designation}
                    </p>

                    <p className="text-[11px] text-gray-500 font-medium pt-0.5">
                      {leader.qualifications}
                    </p>
                  </div>
                </div>

                {/* Bio text */}
                <p className="text-gray-600 text-xs sm:text-sm leading-relaxed mb-4">
                  {leader.bio}
                </p>

                {/* Bullet Points */}
                <div className="space-y-2 pt-4 border-t border-gray-100">
                  {leader.points.map((pt, pIdx) => (
                    <div key={pIdx} className="flex items-start gap-2.5 text-xs text-gray-700">
                      <div className="w-4 h-4 rounded-full bg-[#10B981]/10 flex items-center justify-center shrink-0 mt-0.5">
                        <CheckCircle2 size={11} className="text-[#10B981]" />
                      </div>
                      <span className="font-medium">{pt}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Verified Government Badge Footer */}
              <div className="mt-6 pt-3 border-t border-gray-100 flex items-center justify-between text-[11px] text-[#1d3557] font-bold bg-gray-50/80 -mx-5 -mb-5 px-5 py-3 sm:-mx-6 sm:-mb-6 sm:px-6 sm:py-3.5 rounded-b-2xl">
                <span className="tracking-wide">{leader.badge}</span>
                <span className="text-[#10B981] flex items-center gap-1 bg-[#10B981]/10 px-2 py-1 rounded-md">
                  <ShieldCheck size={12} />
                  100% Verified Authority
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default HomeLeadership;
