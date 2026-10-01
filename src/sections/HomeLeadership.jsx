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
    isGold: false,
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
    isGold: true,
  },
];

const HomeLeadership = () => {
  return (
    <section id="leadership-trust" className="py-10 md:py-14 relative overflow-hidden" style={{ background: 'linear-gradient(180deg,#fdf6e8 0%,#fef9f2 100%)', borderTop: '4px solid #c5a059' }}>
      {/* Decorative warm accents */}
      <div className="absolute inset-0 pointer-events-none opacity-40" style={{ backgroundImage: 'radial-gradient(circle at 85% 15%, rgba(197,160,89,0.08) 0%, transparent 50%), radial-gradient(circle at 15% 85%, rgba(29,53,87,0.05) 0%, transparent 50%)' }} />

      <div className="container mx-auto px-6 relative z-10">

        {/* Section Header */}
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-4 mb-8 pb-5" style={{ borderBottom: '1px solid rgba(197,160,89,0.3)' }}>
          <div className="max-w-2xl">
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full font-bold tracking-wider uppercase text-xs sm:text-[13px] mb-3" style={{ background: 'rgba(254,243,199,0.8)', color: '#855306', border: '1px solid rgba(197,160,89,0.4)' }}>
              <Award size={14} style={{ color: '#855306' }} />
              Leadership & Trust
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-[#0F2444] leading-tight">
              Guided by Public Service Experts
            </h2>
            <p className="text-slate-700 text-sm sm:text-base mt-2.5 leading-relaxed max-w-xl font-normal">
              Their historical government credentials serve as our strongest security badge, bridging executive administrative vigilance directly into private real estate transactions.
            </p>
          </div>

          <Link
            to="/about"
            id="leadership-view-team-btn"
            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-[#c5a059] to-[#d4b475] hover:from-[#b58f48] hover:to-[#c5a059] text-white rounded-full font-bold uppercase tracking-wider text-xs sm:text-sm transition-all duration-300 shadow-[0_4px_15px_rgba(197,160,89,0.3)] hover:-translate-y-0.5 group shrink-0 mt-4 md:mt-0"
          >
            <span>Meet Full Advisory Team</span>
            <ArrowRight size={15} className="transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </div>

        {/* 2 Leadership Cards — full container width */}
        <div className="grid lg:grid-cols-2 gap-6">
          {leaders.map((leader, idx) => {
            const { isGold } = leader;
            return (
              <div
                key={idx}
                className="group relative rounded-2xl overflow-hidden border shadow-sm hover:shadow-[0_12px_35px_-8px_rgba(29,53,87,0.18)] transition-all duration-300 hover:-translate-y-1 flex flex-col bg-white"
                style={{
                  borderColor: isGold ? 'rgba(197,160,89,0.35)' : 'rgba(29,53,87,0.18)',
                }}
              >
                {/* Always-visible colored top strip */}
                <div
                  className="h-1.5 w-full shrink-0"
                  style={{
                    background: isGold
                      ? 'linear-gradient(90deg,#c5a059,#d4b06a)'
                      : 'linear-gradient(90deg,#1d3557,#2a4a7f)',
                  }}
                />

                {/* Card Body */}
                <div className="p-5 sm:p-6 flex flex-col gap-4 flex-1">

                  {/* Header: Photo + Info side by side */}
                  <div className="flex items-start gap-4">
                    <div
                      className="relative w-18 h-18 sm:w-20 sm:h-20 rounded-2xl overflow-hidden shrink-0 group-hover:scale-105 transition-transform duration-300 shadow-md"
                      style={{
                        border: `2.5px solid ${isGold ? '#c5a059' : '#1d3557'}`,
                      }}
                    >
                      <img
                        src={leader.image}
                        alt={leader.name}
                        className="w-full h-full object-cover object-top"
                      />
                    </div>

                    <div className="flex flex-col gap-1 pt-0.5 min-w-0">
                      <span
                        className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider self-start shadow-xs"
                        style={{
                          background: isGold ? 'rgba(254,243,199,0.9)' : 'rgba(238,242,255,0.9)',
                          color: isGold ? '#855306' : '#1d3557',
                          border: `1px solid ${isGold ? 'rgba(197,160,89,0.4)' : 'rgba(29,53,87,0.2)'}`,
                        }}
                      >
                        <ShieldCheck size={12} />
                        {leader.credential}
                      </span>

                      <h3 className="text-lg sm:text-xl lg:text-2xl font-serif font-bold text-[#0F2444] leading-snug">
                        {leader.name}
                      </h3>

                      <p className="text-xs sm:text-sm font-bold" style={{ color: isGold ? '#855306' : '#1d3557' }}>
                        {leader.designation}
                      </p>

                      <p className="text-xs sm:text-[13px] text-slate-500 font-medium leading-tight">
                        {leader.qualifications}
                      </p>
                    </div>
                  </div>

                  {/* Bio */}
                  <p className="text-slate-700 text-sm sm:text-[14.5px] leading-relaxed">
                    {leader.bio}
                  </p>

                  {/* Divider */}
                  <div
                    className="h-px w-full"
                    style={{ background: isGold ? 'rgba(197,160,89,0.25)' : 'rgba(29,53,87,0.12)' }}
                  />

                  {/* Bullet Points */}
                  <div className="flex flex-col gap-2">
                    {leader.points.map((pt, pIdx) => (
                      <div key={pIdx} className="flex items-start gap-2.5 text-sm sm:text-[14px] text-slate-800">
                        <div
                          className="w-5 h-5 rounded-full flex items-center justify-center shrink-0 mt-0.5"
                          style={{ background: isGold ? 'rgba(254,243,199,0.9)' : 'rgba(238,242,255,0.9)' }}
                        >
                          <CheckCircle2 size={13} style={{ color: isGold ? '#855306' : '#1d3557' }} />
                        </div>
                        <span className="font-medium leading-snug">{pt}</span>
                      </div>
                    ))}
                  </div>

                  {/* Footer Badge */}
                  <div
                    className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs sm:text-sm font-bold rounded-xl px-4 py-2.5 mt-auto"
                    style={{
                      background: isGold ? 'rgba(254,243,199,0.6)' : 'rgba(238,242,255,0.6)',
                      border: `1px solid ${isGold ? 'rgba(197,160,89,0.3)' : 'rgba(29,53,87,0.15)'}`,
                    }}
                  >
                    <span style={{ color: isGold ? '#855306' : '#1d3557' }} className="tracking-wide">
                      {leader.badge}
                    </span>
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs font-bold bg-emerald-100 text-emerald-800 border border-emerald-200 self-start sm:self-auto">
                      <ShieldCheck size={13} />
                      100% Verified Authority
                    </span>
                  </div>

                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default HomeLeadership;
