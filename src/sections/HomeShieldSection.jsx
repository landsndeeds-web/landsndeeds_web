import { Link } from 'react-router-dom';
import { Scale, Map, Building2, FileText, ArrowRight, ShieldCheck } from 'lucide-react';

const pillars = [
  {
    icon: Scale,
    symbol: '⚖️',
    title: 'Legal Excellence',
    description: 'Comprehensive document screening, ownership tracing, and ironclad legal opinions.',
    tags: ['Title Verification', 'Parent Deed Tracing', 'Legal Scrutiny'],
  },
  {
    icon: Map,
    symbol: '🗺️',
    title: 'Survey & Revenue',
    description: 'Advanced land record audits, accurate boundary verification, and title validation.',
    tags: ['Patta & Chitta Audits', 'FMB Boundary Check', 'Revenue Records'],
  },
  {
    icon: Building2,
    symbol: '🏗️',
    title: 'Town & Country Planning',
    description: 'Seamless navigation of local municipal approvals, zoning criteria, and regulatory clearances.',
    tags: ['DTCP / CMDA Approvals', 'Zoning Compliance', 'Municipal Clearances'],
  },
  {
    icon: FileText,
    symbol: '🖋️',
    title: 'Flawless Registration',
    description: 'End-to-end processing from initial document drafting right up to official sub-registrar filing.',
    tags: ['Custom Deed Drafting', 'Stamp Duty Valuation', 'Sub-Registrar Filing'],
  },
];

const HomeShieldSection = () => {
  return (
    <section id="the-360-shield" className="py-8 md:py-10 bg-[#fafbfc] relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-4 mb-8 pb-4 border-b border-gray-200/60">
          <div className="max-w-2xl">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1d3557]/5 text-[#1d3557] font-bold tracking-widest uppercase text-[10px] ring-1 ring-[#1d3557]/10 mb-2.5">
              <ShieldCheck size={12} className="text-[#c5a059]" />
              The 360° Shield • Core Expertise
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-3xl font-serif font-bold text-[#1d3557] leading-[1.2]">
              Four Pillars of Watertight Property Assurance
            </h2>
            <p className="text-gray-600 text-sm mt-2 leading-relaxed max-w-xl">
              Instead of a wall of text, our multidisciplinary methodology breaks down property security into four structured, audit-ready operational anchors.
            </p>
          </div>

          <Link
            to="/services"
            id="shield-explore-services-btn"
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-white hover:bg-gray-50 text-[#1d3557] rounded-full font-bold uppercase tracking-widest text-[11px] transition-all duration-300 shadow-sm hover:shadow-md ring-1 ring-gray-200 hover:-translate-y-0.5 group shrink-0 mt-4 md:mt-0"
          >
            <span>Explore All Services</span>
            <ArrowRight size={13} className="transition-transform duration-300 group-hover:translate-x-1 text-[#c5a059]" />
          </Link>
        </div>

        {/* 4 Interactive Cards Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-5">
          {pillars.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="group bg-white rounded-2xl p-5 border border-gray-200 shadow-sm hover:shadow-[0_8px_25px_-5px_rgba(29,53,87,0.1)] transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between relative overflow-hidden"
              >
                {/* Accent top border on hover */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#c5a059] to-[#1d3557] opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-t-2xl" />

                <div>
                  {/* Visual Anchor / Icon Header */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-xl bg-gray-50 ring-1 ring-gray-100 flex items-center justify-center text-xl group-hover:scale-105 group-hover:bg-[#1d3557]/5 group-hover:ring-[#1d3557]/20 transition-all duration-300">
                      <span role="img" aria-label={item.title}>{item.symbol}</span>
                    </div>
                    <div className="w-7 h-7 rounded-full bg-gray-50 ring-1 ring-gray-100 flex items-center justify-center group-hover:bg-white group-hover:shadow-sm transition-all duration-300">
                      <Icon size={12} className="text-[#1d3557]" />
                    </div>
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-base sm:text-lg font-serif font-bold text-[#1d3557] mb-2 leading-snug group-hover:text-[#c5a059] transition-colors duration-200">
                    {item.title}
                  </h3>
                  <p className="text-gray-500 text-xs sm:text-sm leading-relaxed font-normal mb-4">
                    {item.description}
                  </p>
                </div>

                {/* Badges / Micro-deliverables */}
                <div className="pt-3 border-t border-gray-100 flex flex-wrap gap-1.5">
                  {item.tags.map((tag, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-2 py-1 rounded-md bg-gray-50 text-[10px] font-bold text-[#1d3557]/80 group-hover:bg-[#1d3557]/5 group-hover:text-[#1d3557] transition-colors duration-200 border border-gray-100"
                    >
                      {tag}
                    </span>
                  ))}
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
