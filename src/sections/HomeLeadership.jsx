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
    <section id="leadership-trust" className="py-8 md:py-10 relative overflow-hidden" style={{ background: 'linear-gradient(180deg,#fdf6e8 0%,#fef9f2 100%)', borderTop: '4px solid #c5a059' }}>
      {/* Decorative warm accents */}
      <div className="absolute inset-0 pointer-events-none opacity-40" style={{ backgroundImage: 'radial-gradient(circle at 85% 15%, rgba(197,160,89,0.08) 0%, transparent 50%), radial-gradient(circle at 15% 85%, rgba(29,53,87,0.05) 0%, transparent 50%)' }} />

      <div className="container mx-auto px-6 relative z-10">

        {/* Section Header */}
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-4 mb-6 pb-4" style={{ borderBottom: '1px solid rgba(197,160,89,0.25)' }}>
          <div className="max-w-2xl">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full font-bold tracking-widest uppercase text-[10px] mb-2.5" style={{ background: 'rgba(197,160,89,0.12)', color: '#b08a40', border: '1px solid rgba(197,160,89,0.3)' }}>
              <Award size={12} style={{ color: '#c5a059' }} />
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

        {/* 2 Leadership Cards — full container width */}
        <div className="grid lg:grid-cols-2 gap-4">
          {leaders.map((leader, idx) => {
            const { isGold } = leader;
            return (
              <div
                key={idx}
                className="group relative rounded-2xl overflow-hidden border shadow-sm hover:shadow-[0_10px_30px_-8px_rgba(29,53,87,0.18)] transition-all duration-300 hover:-translate-y-1 flex flex-col"
                style={{
                  borderColor: isGold ? 'rgba(197,160,89,0.25)' : 'rgba(29,53,87,0.12)',
                  background: isGold
                    ? 'linear-gradient(145deg,#fffdf7 0%,#fff 100%)'
                    : 'linear-gradient(145deg,#f6f8fb 0%,#fff 100%)',
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
                <div className="p-4 flex flex-col gap-3 flex-1">

                  {/* Header: Photo + Info side by side */}
                  <div className="flex items-start gap-3">
                    <div
                      className="relative w-16 h-16 rounded-xl overflow-hidden shrink-0 group-hover:scale-105 transition-transform duration-300"
                      style={{
                        border: `2px solid ${isGold ? 'rgba(197,160,89,0.4)' : 'rgba(29,53,87,0.2)'}`,
                        boxShadow: isGold
                          ? '0 4px 12px rgba(197,160,89,0.15)'
                          : '0 4px 12px rgba(29,53,87,0.12)',
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
                        className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full text-[9px] font-bold uppercase tracking-widest self-start"
                        style={{
                          background: isGold ? 'rgba(197,160,89,0.1)' : 'rgba(29,53,87,0.07)',
                          color: isGold ? '#b08a40' : '#1d3557',
                          border: `1px solid ${isGold ? 'rgba(197,160,89,0.3)' : 'rgba(29,53,87,0.15)'}`,
                        }}
                      >
                        <ShieldCheck size={10} />
                        {leader.credential}
                      </span>

                      <h3
                        className="text-base font-serif font-bold leading-snug transition-colors duration-200"
                        style={{ color: isGold ? '#c5a059' : '#1d3557' }}
                      >
                        {leader.name}
                      </h3>

                      <p className="text-[11px] font-bold" style={{ color: isGold ? '#b08a40' : 'rgba(29,53,87,0.8)' }}>
                        {leader.designation}
                      </p>

                      <p className="text-[10px] text-gray-400 font-medium leading-tight">
                        {leader.qualifications}
                      </p>
                    </div>
                  </div>

                  {/* Bio */}
                  <p className="text-gray-500 text-xs leading-relaxed">
                    {leader.bio}
                  </p>

                  {/* Divider */}
                  <div
                    className="h-px w-full"
                    style={{ background: isGold ? 'rgba(197,160,89,0.2)' : 'rgba(29,53,87,0.1)' }}
                  />

                  {/* Bullet Points */}
                  <div className="flex flex-col gap-1.5">
                    {leader.points.map((pt, pIdx) => (
                      <div key={pIdx} className="flex items-start gap-2 text-xs text-gray-700">
                        <div
                          className="w-4 h-4 rounded-full flex items-center justify-center shrink-0 mt-0.5"
                          style={{ background: isGold ? 'rgba(197,160,89,0.12)' : 'rgba(29,53,87,0.07)' }}
                        >
                          <CheckCircle2 size={10} style={{ color: isGold ? '#c5a059' : '#1d3557' }} />
                        </div>
                        <span className="font-medium leading-snug">{pt}</span>
                      </div>
                    ))}
                  </div>

                  {/* Footer Badge */}
                  <div
                    className="flex items-center justify-between text-[10px] font-bold rounded-xl px-3 py-2 mt-auto"
                    style={{
                      background: isGold ? 'rgba(197,160,89,0.07)' : 'rgba(29,53,87,0.05)',
                      border: `1px solid ${isGold ? 'rgba(197,160,89,0.2)' : 'rgba(29,53,87,0.1)'}`,
                    }}
                  >
                    <span style={{ color: isGold ? '#b08a40' : '#1d3557' }} className="tracking-wide">
                      {leader.badge}
                    </span>
                    <span
                      className="flex items-center gap-1 px-2 py-0.5 rounded-md"
                      style={{
                        background: isGold ? 'rgba(197,160,89,0.12)' : 'rgba(16,185,129,0.1)',
                        color: isGold ? '#c5a059' : '#10B981',
                      }}
                    >
                      <ShieldCheck size={11} />
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
