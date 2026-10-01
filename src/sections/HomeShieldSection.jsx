import { Link } from 'react-router-dom';
import { Scale, Map, Building2, FileText, ArrowRight, ShieldCheck } from 'lucide-react';

const pillars = [
  {
    icon: Scale,
    symbol: '⚖️',
    title: 'Legal Excellence',
    description: 'Comprehensive document screening, ownership tracing, and ironclad legal opinions.',
    tags: ['Title Verification', 'Parent Deed Tracing', 'Legal Scrutiny'],
    isGold: false,
  },
  {
    icon: Map,
    symbol: '🗺️',
    title: 'Survey & Revenue',
    description: 'Advanced land record audits, accurate boundary verification, and title validation.',
    tags: ['Patta & Chitta Audits', 'FMB Boundary Check', 'Revenue Records'],
    isGold: true,
  },
  {
    icon: Building2,
    symbol: '🏗️',
    title: 'Town & Country Planning',
    description: 'Seamless navigation of local municipal approvals, zoning criteria, and regulatory clearances.',
    tags: ['DTCP / CMDA Approvals', 'Zoning Compliance', 'Municipal Clearances'],
    isGold: false,
  },
  {
    icon: FileText,
    symbol: '🖋️',
    title: 'Flawless Registration',
    description: 'End-to-end processing from initial document drafting right up to official sub-registrar filing.',
    tags: ['Custom Deed Drafting', 'Stamp Duty Valuation', 'Sub-Registrar Filing'],
    isGold: true,
  },
];

const HomeShieldSection = () => {
  return (
    <section id="the-360-shield" className="py-10 md:py-14 relative overflow-hidden" style={{ background: 'linear-gradient(180deg,#eef4fb 0%,#f4f8fd 100%)', borderTop: '4px solid #1d3557' }}>
      {/* Decorative subtle pattern */}
      <div className="absolute inset-0 pointer-events-none opacity-30" style={{ backgroundImage: 'radial-gradient(circle at 80% 20%, rgba(29,53,87,0.06) 0%, transparent 50%), radial-gradient(circle at 20% 80%, rgba(197,160,89,0.06) 0%, transparent 50%)' }} />

      <div className="container mx-auto px-6 relative z-10">

        {/* Section Header */}
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-4 mb-8 pb-5 border-b border-[#1d3557]/15">
          <div className="max-w-2xl">
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#1d3557]/10 text-[#1d3557] font-bold tracking-wider uppercase text-xs sm:text-[13px] ring-1 ring-[#1d3557]/20 mb-3">
              <ShieldCheck size={14} className="text-[#c5a059]" />
              The 360° Shield • Core Expertise
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-[#0F2444] leading-tight">
              Four Pillars of Watertight Property Assurance
            </h2>
            <p className="text-slate-700 text-sm sm:text-base mt-2.5 leading-relaxed max-w-xl font-normal">
              Instead of a wall of text, our multidisciplinary methodology breaks down property security into four structured, audit-ready operational anchors.
            </p>
          </div>

          <Link
            to="/services"
            id="shield-explore-services-btn"
            className="inline-flex items-center gap-2 px-6 py-3 bg-[#1d3557] hover:bg-[#2a4a7f] text-white rounded-full font-bold uppercase tracking-wider text-xs sm:text-sm transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-0.5 group shrink-0 mt-4 md:mt-0"
          >
            <span>Explore All Services</span>
            <ArrowRight size={15} className="transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </div>

        {/* 4 Redesigned Cards Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {pillars.map((item, idx) => {
            const Icon = item.icon;
            const { isGold } = item;
            return (
              <div
                key={idx}
                className="group relative rounded-2xl overflow-hidden shadow-sm hover:shadow-[0_12px_35px_-8px_rgba(29,53,87,0.18)] transition-all duration-300 hover:-translate-y-1 flex flex-col bg-white"
                style={{
                  border: `1.5px solid ${isGold ? 'rgba(197,160,89,0.35)' : 'rgba(29,53,87,0.15)'}`,
                }}
              >
                {/* Colored top strip */}
                <div
                  className="h-1.5 w-full shrink-0"
                  style={{
                    background: isGold
                      ? 'linear-gradient(90deg,#c5a059,#d4b06a)'
                      : 'linear-gradient(90deg,#1d3557,#2a4a7f)',
                  }}
                />

                {/* Card Body */}
                <div className="p-5 sm:p-6 flex flex-col gap-3 flex-1">

                  {/* Icon row */}
                  <div className="flex items-center justify-between">
                    <div
                      className="w-11 h-11 rounded-xl flex items-center justify-center text-xl shrink-0 transition-all duration-300 group-hover:scale-105 shadow-sm"
                      style={{ background: isGold ? 'rgba(197,160,89,0.15)' : 'rgba(29,53,87,0.09)' }}
                    >
                      <span role="img" aria-label={item.title}>{item.symbol}</span>
                    </div>
                    <div
                      className="w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300"
                      style={{ background: isGold ? 'rgba(197,160,89,0.12)' : 'rgba(29,53,87,0.08)' }}
                    >
                      <Icon size={15} style={{ color: isGold ? '#855306' : '#1d3557' }} />
                    </div>
                  </div>

                  {/* Title - Bold, deep, crystal clear on white */}
                  <h3 className="text-base sm:text-lg font-serif font-bold text-[#0F2444] leading-snug">
                    {item.title}
                  </h3>

                  {/* Description - Larger, darker slate text for maximum readability */}
                  <p className="text-slate-600 text-sm sm:text-[14px] leading-relaxed">
                    {item.description}
                  </p>

                  {/* Divider */}
                  <div
                    className="h-px w-full mt-auto pt-1"
                    style={{ background: isGold ? 'rgba(197,160,89,0.25)' : 'rgba(29,53,87,0.1)' }}
                  />

                  {/* Tags - Bigger text, clear borders and high contrast */}
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {item.tags.map((tag, tIdx) => (
                      <span
                        key={tIdx}
                        className="px-2.5 py-1 rounded-md text-[11px] sm:text-xs font-semibold tracking-wide border shadow-xs"
                        style={{
                          background: isGold ? 'rgba(254,243,199,0.6)' : 'rgba(238,242,255,0.7)',
                          color: isGold ? '#855306' : '#1d3557',
                          borderColor: isGold ? 'rgba(197,160,89,0.4)' : 'rgba(29,53,87,0.2)',
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
