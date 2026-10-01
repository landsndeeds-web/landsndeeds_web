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
    themeGradient: 'linear-gradient(90deg, #2563EB, #38BDF8)',
    accentBg: '#EFF6FF',
    accentColor: '#1D4ED8',
    borderColor: '#BFDBFE',
    tagBg: '#EFF6FF',
    tagColor: '#1E40AF',
    tagBorder: '#BFDBFE',
    photoRing: '#2563EB',
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
    themeGradient: 'linear-gradient(90deg, #F59E0B, #FBBF24)',
    accentBg: '#FEF3C7',
    accentColor: '#D97706',
    borderColor: '#FDE68A',
    tagBg: '#FEF3C7',
    tagColor: '#92400E',
    tagBorder: '#FDE68A',
    photoRing: '#F59E0B',
  },
];

const HomeLeadership = () => {
  return (
    <section id="leadership-trust" className="pt-6 pb-8 md:pt-8 md:pb-10 relative overflow-hidden bg-gradient-to-b from-slate-50/70 via-white to-blue-50/20 border-t border-slate-200/80">
      {/* Decorative warm accents */}
      <div className="absolute inset-0 pointer-events-none opacity-40" style={{ backgroundImage: 'radial-gradient(circle at 85% 15%, rgba(37,99,235,0.06) 0%, transparent 50%), radial-gradient(circle at 15% 85%, rgba(245,158,11,0.06) 0%, transparent 50%)' }} />

      <div className="container mx-auto px-6 relative z-10">

        {/* Section Header */}
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-4 mb-6 pb-4 border-b border-slate-200/80">
          <div className="max-w-2xl">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 text-blue-700 font-extrabold tracking-wider uppercase text-xs sm:text-[13px] ring-1 ring-blue-200/80 shadow-xs mb-2">
              <Award size={15} className="text-amber-500" />
              Leadership & Trust
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-['Outfit',sans-serif] font-black text-slate-900 leading-tight tracking-tight">
              Guided by <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-800 bg-clip-text text-transparent">Public Service Experts</span>
            </h2>
            <p className="text-slate-600 text-base sm:text-lg mt-2 leading-relaxed max-w-xl font-normal">
              Their historical government credentials serve as our strongest security badge, bridging executive administrative vigilance directly into private real estate transactions.
            </p>
          </div>

          <Link
            to="/about"
            id="leadership-view-team-btn"
            className="inline-flex items-center gap-2 px-7 py-3.5 bg-gradient-to-r from-blue-700 via-blue-600 to-indigo-700 hover:from-blue-800 hover:to-indigo-800 text-white rounded-full font-bold uppercase tracking-wider text-xs sm:text-sm transition-all duration-300 shadow-xl shadow-blue-600/25 hover:shadow-blue-600/40 hover:-translate-y-0.5 group shrink-0 mt-4 md:mt-0"
          >
            <span>Meet Full Advisory Team</span>
            <ArrowRight size={15} className="transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </div>

        {/* 2 Leadership Cards — full container width */}
        <div className="grid lg:grid-cols-2 gap-8">
          {leaders.map((leader, idx) => {
            return (
              <div
                key={idx}
                className="group relative rounded-3xl overflow-hidden border shadow-sm hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.12)] transition-all duration-300 hover:-translate-y-1.5 flex flex-col bg-white"
                style={{ borderColor: leader.borderColor }}
              >
                {/* Always-visible colored top strip */}
                <div
                  className="h-2 w-full shrink-0"
                  style={{ background: leader.themeGradient }}
                />

                {/* Card Body */}
                <div className="p-6 sm:p-8 flex flex-col gap-5 flex-1">

                  {/* Header: Photo + Info side by side */}
                  <div className="flex items-start gap-5">
                    <div
                      className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-2xl overflow-hidden shrink-0 group-hover:scale-105 transition-transform duration-300 shadow-md ring-2 ring-offset-2"
                      style={{ ringColor: leader.photoRing }}
                    >
                      <img
                        src={leader.image}
                        alt={leader.name}
                        className="w-full h-full object-cover object-top"
                      />
                    </div>

                    <div className="flex flex-col gap-1 pt-0.5 min-w-0">
                      <span
                        className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider self-start shadow-xs border"
                        style={{
                          background: leader.tagBg,
                          color: leader.tagColor,
                          borderColor: leader.tagBorder,
                        }}
                      >
                        <ShieldCheck size={13} />
                        {leader.credential}
                      </span>

                      <h3 className="text-xl sm:text-2xl lg:text-3xl font-['Outfit',sans-serif] font-black text-slate-900 leading-snug">
                        {leader.name}
                      </h3>

                      <p className="text-sm sm:text-base font-bold" style={{ color: leader.accentColor }}>
                        {leader.designation}
                      </p>

                      <p className="text-xs sm:text-[13px] text-slate-500 font-medium leading-tight">
                        {leader.qualifications}
                      </p>
                    </div>
                  </div>

                  {/* Bio */}
                  <p className="text-slate-600 text-sm sm:text-[15px] leading-relaxed">
                    {leader.bio}
                  </p>

                  {/* Divider */}
                  <div className="h-px w-full bg-slate-100" />

                  {/* Bullet Points */}
                  <div className="flex flex-col gap-2.5">
                    {leader.points.map((pt, pIdx) => (
                      <div key={pIdx} className="flex items-start gap-3 text-sm sm:text-[14.5px] text-slate-800">
                        <div
                          className="w-5 h-5 rounded-full flex items-center justify-center shrink-0 mt-0.5 shadow-2xs"
                          style={{ background: leader.tagBg }}
                        >
                          <CheckCircle2 size={14} style={{ color: leader.accentColor }} />
                        </div>
                        <span className="font-medium leading-snug">{pt}</span>
                      </div>
                    ))}
                  </div>

                  {/* Footer Badge */}
                  <div
                    className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs sm:text-sm font-bold rounded-2xl px-5 py-3 mt-auto border"
                    style={{
                      background: leader.accentBg,
                      borderColor: leader.borderColor,
                    }}
                  >
                    <span style={{ color: leader.tagColor }} className="tracking-wide">
                      {leader.badge}
                    </span>
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-bold bg-emerald-600 text-white shadow-xs self-start sm:self-auto">
                      <ShieldCheck size={14} />
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
