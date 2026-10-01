import { Link } from 'react-router-dom';
import { MapPin, Building, Trees, Hospital, CheckCircle2, ArrowRight, ShieldCheck } from 'lucide-react';
import prop1 from '../assets/Properties 1.webp';
import prop2 from '../assets/Properties 2.webp';
import prop3 from '../assets/Properties 3.webp';

const marqueeDeals = [
  {
    title: 'Suguna Grand',
    location: 'Avinashi Road, Coimbatore',
    typeBadge: 'Commercial Landmark',
    icon: Building,
    image: prop1,
    description: 'High-visibility prime commercial development on Avinashi Road. Full legal title validation and ownership chain audit.',
    highlights: ['Avinashi Road Corridor', '100% Clear Title', 'Prime Commercial Asset'],
    strip: 'linear-gradient(90deg,#1d3557,#2a4a7f)',
    accentColor: '#1d3557',
    accentBg: 'rgba(29,53,87,0.08)',
    accentBorder: 'rgba(29,53,87,0.2)',
    cardBg: '#ffffff',
    tagColor: '#1d3557',
    tagBg: 'rgba(238,242,255,0.9)',
    tagBorder: 'rgba(29,53,87,0.2)',
  },
  {
    title: 'Kongunad Multi Specialty Hospital',
    location: 'Coimbatore Metropolitan Belt',
    typeBadge: 'Healthcare Infrastructure',
    icon: Hospital,
    image: prop2,
    description: 'Extensive multi-tier title scrutiny and institutional zoning approval for a state-of-the-art multi-specialty healthcare campus.',
    highlights: ['Healthcare Compliance', 'Multi-Tier Title Audited', 'Statutory Approvals'],
    strip: 'linear-gradient(90deg,#c5a059,#d4b06a)',
    accentColor: '#855306',
    accentBg: 'rgba(197,160,89,0.12)',
    accentBorder: 'rgba(197,160,89,0.3)',
    cardBg: '#ffffff',
    tagColor: '#855306',
    tagBg: 'rgba(254,243,199,0.85)',
    tagBorder: 'rgba(197,160,89,0.35)',
  },
  {
    title: 'Premium Farmlands at Devarayapuram',
    location: 'Near Isha / Adiyogi, Coimbatore',
    typeBadge: 'Agri & Agro-Estate',
    icon: Trees,
    image: prop3,
    description: 'Scenic fertile agro-parcels near Isha / Adiyogi. Clean revenue records, FMB survey, and verified Patta transfer.',
    highlights: ['Near Isha / Adiyogi', 'Abundant Water Table', 'Verified Revenue Title'],
    strip: 'linear-gradient(90deg,#0d7a55,#10B981)',
    accentColor: '#065f46',
    accentBg: 'rgba(13,122,85,0.08)',
    accentBorder: 'rgba(13,122,85,0.2)',
    cardBg: '#ffffff',
    tagColor: '#065f46',
    tagBg: 'rgba(236,253,245,0.9)',
    tagBorder: 'rgba(16,185,129,0.25)',
  },
];

const HomeTrackRecord = () => {
  return (
    <section id="track-record" className="py-10 md:py-14 relative overflow-hidden" style={{ background: 'linear-gradient(160deg,#fdf8f0 0%,#fefcf8 100%)' }}>
      {/* Warm subtle background accents */}
      <div className="absolute top-0 right-0 w-80 h-80 rounded-full pointer-events-none" style={{ background: 'radial-gradient(circle,rgba(197,160,89,0.1) 0%,transparent 70%)', transform: 'translate(20%,-20%)' }} />
      <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full pointer-events-none" style={{ background: 'radial-gradient(circle,rgba(29,53,87,0.05) 0%,transparent 70%)', transform: 'translate(-20%,20%)' }} />
      <div className="container mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-4 mb-8 pb-5" style={{ borderBottom: '1px solid rgba(197,160,89,0.3)' }}>
          <div className="max-w-2xl">
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#1d3557]/8 text-[#1d3557] font-bold tracking-wider uppercase text-xs sm:text-[13px] ring-1 ring-[#1d3557]/15 mb-3">
              <ShieldCheck size={14} className="text-[#c5a059]" />
              Proven Marquee Transactions
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-[#0F2444] leading-tight">
              Track Record Showcase
            </h2>
            <p className="text-slate-700 text-sm sm:text-base mt-2.5 leading-relaxed max-w-xl font-normal">
              A curated showcase of our marquee commercial landmarks, healthcare infrastructure, and prime agricultural corridors executed with absolute legal certainty.
            </p>
          </div>

          <Link
            to="/properties"
            id="track-record-view-all-btn"
            className="inline-flex items-center gap-2 px-6 py-3 bg-[#1d3557] hover:bg-[#2a4d7c] text-white rounded-full font-bold uppercase tracking-wider text-xs sm:text-sm transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-0.5 group shrink-0 mt-4 md:mt-0"
          >
            <span>View All Listings</span>
            <ArrowRight size={15} className="transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </div>

        {/* 3-Column Deals Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {marqueeDeals.map((deal, idx) => {
            const Icon = deal.icon;
            return (
              <div
                key={idx}
                className="group relative rounded-2xl overflow-hidden border shadow-sm hover:shadow-[0_12px_35px_-8px_rgba(29,53,87,0.18)] transition-all duration-300 hover:-translate-y-1 flex flex-col bg-white"
                style={{ borderColor: deal.accentBorder }}
              >
                {/* Image */}
                <div className="relative overflow-hidden" style={{ aspectRatio: '16/9' }}>
                  <img
                    src={deal.image}
                    alt={deal.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0D1B2A]/90 via-[#0D1B2A]/30 to-transparent pointer-events-none" />

                  {/* Category pill */}
                  <div
                    className="absolute top-3 left-3 px-2.5 py-1 rounded-md text-xs font-bold uppercase tracking-wider flex items-center gap-1.5 shadow-md backdrop-blur-md bg-white/95"
                    style={{ color: deal.accentColor }}
                  >
                    <Icon size={13} style={{ color: deal.accentColor }} />
                    <span>{deal.typeBadge}</span>
                  </div>

                  {/* Verified pill */}
                  <div className="absolute top-3 right-3 bg-emerald-600 px-2.5 py-1 rounded-md text-white text-xs font-bold uppercase tracking-wider shadow-md flex items-center gap-1">
                    <span>✓</span> Verified
                  </div>

                  {/* Location overlay */}
                  <div className="absolute bottom-3 left-3 right-3">
                    <div className="inline-flex items-center gap-1.5 text-xs sm:text-[13px] text-white font-semibold bg-black/40 backdrop-blur-xs px-2.5 py-1 rounded-md">
                      <MapPin size={13} className="shrink-0 text-amber-300" />
                      <span className="truncate">{deal.location}</span>
                    </div>
                  </div>
                </div>

                {/* Accent strip below image */}
                <div className="h-1.5 w-full shrink-0" style={{ background: deal.strip }} />

                {/* Body */}
                <div className="p-5 flex flex-col gap-3 flex-1">
                  <h3 className="text-base sm:text-lg lg:text-xl font-serif font-bold text-[#0F2444] leading-snug line-clamp-1 transition-colors duration-200 group-hover:text-[#1d3557]">
                    {deal.title}
                  </h3>

                  <p className="text-slate-600 text-sm sm:text-[14px] leading-relaxed line-clamp-2">
                    {deal.description}
                  </p>

                  {/* Divider */}
                  <div className="h-px w-full my-1" style={{ background: deal.accentBorder }} />

                  {/* Highlights as inline tags */}
                  <div className="flex flex-wrap gap-1.5">
                    {deal.highlights.map((item, hIdx) => (
                      <span
                        key={hIdx}
                        className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md text-[11px] sm:text-xs font-semibold tracking-wide border shadow-2xs"
                        style={{
                          background: deal.tagBg,
                          color: deal.tagColor,
                          borderColor: deal.tagBorder,
                        }}
                      >
                        <CheckCircle2 size={11} />
                        {item}
                      </span>
                    ))}
                  </div>

                  {/* CTA */}
                  <Link
                    to="/properties"
                    className="mt-auto flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl text-xs sm:text-sm font-bold uppercase tracking-wider transition-all duration-300 group/btn"
                    style={{
                      background: deal.accentBg,
                      color: deal.accentColor,
                      border: `1.5px solid ${deal.accentBorder}`,
                    }}
                    onMouseEnter={e => {
                      e.currentTarget.style.background = deal.accentColor;
                      e.currentTarget.style.color = '#fff';
                    }}
                    onMouseLeave={e => {
                      e.currentTarget.style.background = deal.accentBg;
                      e.currentTarget.style.color = deal.accentColor;
                    }}
                  >
                    <span>Explore Details</span>
                    <ArrowRight size={14} className="transition-transform group-hover/btn:translate-x-1" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default HomeTrackRecord;
