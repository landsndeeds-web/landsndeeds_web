import { Link } from 'react-router-dom';
import { Scale, Map, Building2, FileText, ArrowRight, ShieldCheck } from 'lucide-react';

const pillars = [
  {
    icon: Scale,
    symbol: '⚖️',
    title: 'Legal Excellence',
    description: 'Comprehensive document screening, ownership tracing, and ironclad legal opinions.',
    tags: ['Title Verification', 'Parent Deed Tracing', 'Legal Scrutiny'],
    themeGradient: 'linear-gradient(90deg, #2563EB, #38BDF8)',
    accentBg: 'rgba(37,99,235,0.08)',
    accentIconColor: '#2563EB',
    tagBg: '#EFF6FF',
    tagColor: '#1E40AF',
    tagBorder: '#BFDBFE',
    cardBorder: 'rgba(37,99,235,0.2)',
  },
  {
    icon: Map,
    symbol: '🗺️',
    title: 'Survey & Revenue',
    description: 'Advanced land record audits, accurate boundary verification, and title validation.',
    tags: ['Patta & Chitta Audits', 'FMB Boundary Check', 'Revenue Records'],
    themeGradient: 'linear-gradient(90deg, #F59E0B, #FBBF24)',
    accentBg: 'rgba(245,158,11,0.1)',
    accentIconColor: '#D97706',
    tagBg: '#FEF3C7',
    tagColor: '#92400E',
    tagBorder: '#FDE68A',
    cardBorder: 'rgba(245,158,11,0.3)',
  },
  {
    icon: Building2,
    symbol: '🏗️',
    title: 'Town & Country Planning',
    description: 'Seamless navigation of local municipal approvals, zoning criteria, and regulatory clearances.',
    tags: ['DTCP / CMDA Approvals', 'Zoning Compliance', 'Municipal Clearances'],
    themeGradient: 'linear-gradient(90deg, #6366F1, #818CF8)',
    accentBg: 'rgba(99,102,241,0.08)',
    accentIconColor: '#4F46E5',
    tagBg: '#EEF2FF',
    tagColor: '#3730A3',
    tagBorder: '#C7D2FE',
    cardBorder: 'rgba(99,102,241,0.2)',
  },
  {
    icon: FileText,
    symbol: '🖋️',
    title: 'Flawless Registration',
    description: 'End-to-end processing from initial document drafting right up to official sub-registrar filing.',
    tags: ['Custom Deed Drafting', 'Stamp Duty Valuation', 'Sub-Registrar Filing'],
    themeGradient: 'linear-gradient(90deg, #10B981, #34D399)',
    accentBg: 'rgba(16,185,129,0.08)',
    accentIconColor: '#059669',
    tagBg: '#ECFDF5',
    tagColor: '#065F46',
    tagBorder: '#A7F3D0',
    cardBorder: 'rgba(16,185,129,0.25)',
  },
];

const HomeShieldSection = () => {
  return (
    <section id="the-360-shield" className="pt-6 pb-8 md:pt-8 md:pb-10 relative overflow-hidden bg-gradient-to-b from-slate-50/70 via-white to-blue-50/20 border-t border-slate-200/80">
      {/* Decorative subtle pattern */}
      <div className="absolute inset-0 pointer-events-none opacity-40" style={{ backgroundImage: 'radial-gradient(circle at 80% 20%, rgba(37,99,235,0.06) 0%, transparent 50%), radial-gradient(circle at 20% 80%, rgba(245,158,11,0.06) 0%, transparent 50%)' }} />

      <div className="container mx-auto px-6 relative z-10">

        {/* Section Header */}
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-4 mb-6 pb-4 border-b border-slate-200/80">
          <div className="max-w-2xl">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 text-blue-700 font-extrabold tracking-wider uppercase text-xs sm:text-[13px] ring-1 ring-blue-200/80 shadow-xs mb-2">
              <ShieldCheck size={15} className="text-amber-500" />
              The 360° Shield • Core Expertise
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-['Outfit',sans-serif] font-black text-slate-900 leading-tight tracking-tight">
              Four Pillars of <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-800 bg-clip-text text-transparent">Watertight Property Assurance</span>
            </h2>
            <p className="text-slate-600 text-base sm:text-lg mt-2 leading-relaxed max-w-xl font-normal">
              Instead of a wall of text, our multidisciplinary methodology breaks down property security into four structured, audit-ready operational anchors.
            </p>
          </div>

          <Link
            to="/services"
            id="shield-explore-services-btn"
            className="inline-flex items-center gap-2 px-7 py-3.5 bg-gradient-to-r from-blue-700 via-blue-600 to-indigo-700 hover:from-blue-800 hover:to-indigo-800 text-white rounded-full font-bold uppercase tracking-wider text-xs sm:text-sm transition-all duration-300 shadow-xl shadow-blue-600/25 hover:shadow-blue-600/40 hover:-translate-y-0.5 group shrink-0 mt-4 md:mt-0"
          >
            <span>Explore All Services</span>
            <ArrowRight size={15} className="transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </div>

        {/* 4 Redesigned Cards Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="group relative rounded-3xl overflow-hidden shadow-sm hover:shadow-[0_20px_40px_-15px_rgba(37,99,235,0.15)] transition-all duration-300 hover:-translate-y-1.5 flex flex-col bg-white border"
                style={{ borderColor: item.cardBorder }}
              >
                {/* Colored top strip */}
                <div
                  className="h-2 w-full shrink-0"
                  style={{ background: item.themeGradient }}
                />

                {/* Card Body */}
                <div className="p-6 flex flex-col gap-3.5 flex-1">

                  {/* Icon row */}
                  <div className="flex items-center justify-between">
                    <div
                      className="w-12 h-12 rounded-2xl flex items-center justify-center text-2xl shrink-0 transition-all duration-300 group-hover:scale-110 shadow-xs"
                      style={{ background: item.accentBg }}
                    >
                      <span role="img" aria-label={item.title}>{item.symbol}</span>
                    </div>
                    <div
                      className="w-9 h-9 rounded-xl flex items-center justify-center transition-all duration-300 ring-1"
                      style={{ background: item.accentBg, color: item.accentIconColor, borderColor: item.tagBorder }}
                    >
                      <Icon size={18} />
                    </div>
                  </div>

                  {/* Title - Modern Outfit, bold, deep */}
                  <h3 className="text-lg sm:text-xl font-['Outfit',sans-serif] font-bold text-slate-900 leading-snug group-hover:text-blue-600 transition-colors">
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p className="text-slate-600 text-sm sm:text-[14.5px] leading-relaxed">
                    {item.description}
                  </p>

                  {/* Divider */}
                  <div className="h-px w-full mt-auto pt-1 bg-slate-100" />

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {item.tags.map((tag, tIdx) => (
                      <span
                        key={tIdx}
                        className="px-3 py-1 rounded-lg text-xs font-bold tracking-wide border shadow-2xs transition-all hover:scale-105"
                        style={{
                          background: item.tagBg,
                          color: item.tagColor,
                          borderColor: item.tagBorder,
                        }}
                      >
                        {tag}
                      </span>
                    ))}
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

export default HomeShieldSection;
