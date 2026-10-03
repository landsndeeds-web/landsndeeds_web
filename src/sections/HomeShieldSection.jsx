import { Link } from 'react-router-dom';
import { Scale, Map, Building2, FileText, ArrowRight, ShieldCheck, CheckCircle2 } from 'lucide-react';

const pillars = [
  {
    icon: Scale,
    title: 'Legal Excellence',
    description: 'Comprehensive document screening, ownership tracing, and ironclad legal opinions.',
    tags: ['Title Verification', 'Parent Deed Tracing', 'Legal Scrutiny'],
  },
  {
    icon: Map,
    title: 'Survey & Revenue',
    description: 'Advanced land record audits, accurate boundary verification, and title validation.',
    tags: ['Patta & Chitta Audits', 'FMB Boundary Check', 'Revenue Records'],
  },
  {
    icon: Building2,
    title: 'Town & Country Planning',
    description: 'Seamless navigation of local municipal approvals, zoning criteria, and regulatory clearances.',
    tags: ['DTCP / CMDA Approvals', 'Zoning Compliance', 'Municipal Clearances'],
  },
  {
    icon: FileText,
    title: 'Flawless Registration',
    description: 'End-to-end processing from initial document drafting right up to official sub-registrar filing.',
    tags: ['Custom Deed Drafting', 'Stamp Duty Valuation', 'Sub-Registrar Filing'],
  },
];

const HomeShieldSection = () => {
  return (
    <section id="the-360-shield" className="pt-8 pb-10 md:pt-10 md:pb-12 relative overflow-hidden bg-gradient-to-b from-[#FAF8F2] via-white to-slate-50/80 border-t border-slate-200/80">
      {/* Decorative glows matching About page */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#C5A059]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#1A335E]/05 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">

        {/* Section Header */}
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-4 mb-8 pb-5 border-b border-slate-200/80">
          <div className="max-w-2xl space-y-2.5">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-50 text-amber-900 border border-amber-200/80 font-extrabold tracking-wider uppercase text-xs shadow-xs">
              <ShieldCheck size={14} className="text-[#C5A059]" />
              The 360° Shield • Core Expertise
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-['Plus_Jakarta_Sans',sans-serif] font-black text-[#0D1B2A] tracking-tight leading-tight">
              Four Pillars of <span className="bg-gradient-to-r from-[#B8860B] via-[#D4AF37] to-[#C5A059] bg-clip-text text-transparent">Watertight Property Assurance</span>
            </h2>
            <p className="text-slate-600 text-sm md:text-base leading-relaxed font-normal">
              Our multidisciplinary methodology breaks down property security into four structured, audit-ready operational anchors.
            </p>
          </div>

          <Link
            to="/services"
            id="shield-explore-services-btn"
            className="inline-flex items-center gap-2 px-7 py-3.5 bg-gradient-to-r from-[#1A335E] via-[#0D1B2A] to-[#1A335E] hover:from-[#0D1B2A] hover:to-[#1A335E] text-white rounded-full font-bold uppercase tracking-wider text-xs sm:text-sm transition-all duration-300 shadow-xl shadow-[#1A335E]/25 hover:shadow-[#1A335E]/40 hover:-translate-y-0.5 group shrink-0 mt-4 md:mt-0"
          >
            <span>Explore All Services</span>
            <ArrowRight size={15} className="transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </div>

        {/* 4 Cards — matching AboutMission card style */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
          {pillars.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="bg-white p-5 sm:p-6 rounded-2xl border border-slate-200/90 shadow-sm hover:border-amber-400 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between group"
              >
                <div className="space-y-3">
                  {/* Icon — same as AboutMission: navy bg, gold icon */}
                  <div className="w-10 h-10 rounded-xl bg-[#1A335E] flex items-center justify-center text-[#E5C378] shadow-xs group-hover:scale-105 transition-transform">
                    <Icon size={19} />
                  </div>

                  <h3 className="font-['Plus_Jakarta_Sans',sans-serif] font-bold text-[#0D1B2A] text-sm md:text-base leading-snug">
                    {item.title}
                  </h3>

                  <p className="text-slate-600 text-xs sm:text-[13.5px] leading-relaxed">
                    {item.description}
                  </p>

                  {/* Tags — amber style */}
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {item.tags.map((tag, tIdx) => (
                      <span
                        key={tIdx}
                        className="px-2.5 py-1 rounded-lg text-[11px] font-bold tracking-wide border bg-amber-50 text-amber-900 border-amber-200/80 shadow-2xs"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Footer — same as AboutMission */}
                <div className="pt-3.5 mt-3.5 border-t border-slate-100 flex items-center gap-1.5 text-[#B8860B] text-xs font-bold uppercase tracking-wider">
                  <CheckCircle2 size={14} />
                  Guaranteed Assurance
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
