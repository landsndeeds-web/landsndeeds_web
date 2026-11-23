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
    strip: 'linear-gradient(90deg, #1A335E, #2C5282)',
    accentColor: '#1A335E',
    accentBg: '#EFF3FA',
    accentBorder: '#C5D3E8',
    tagColor: '#1A335E',
    tagBg: '#EFF3FA',
    tagBorder: '#C5D3E8',
  },
  {
    title: 'Kongunad Multi Specialty Hospital',
    location: 'Coimbatore Metropolitan Belt',
    typeBadge: 'Healthcare Infrastructure',
    icon: Hospital,
    image: prop2,
    description: 'Extensive multi-tier title scrutiny and institutional zoning approval for a state-of-the-art multi-specialty healthcare campus.',
    highlights: ['Healthcare Compliance', 'Multi-Tier Title Audited', 'Statutory Approvals'],
    strip: 'linear-gradient(90deg, #D4AF37, #C5A059)',
    accentColor: '#B8860B',
    accentBg: '#FEF9E7',
    accentBorder: '#F0D88A',
    tagColor: '#7D5A0E',
    tagBg: '#FEF9E7',
    tagBorder: '#F0D88A',
  },
  {
    title: 'Premium Farmlands at Devarayapuram',
    location: 'Near Isha / Adiyogi, Coimbatore',
    typeBadge: 'Agri & Agro-Estate',
    icon: Trees,
    image: prop3,
    description: 'Scenic fertile agro-parcels near Isha / Adiyogi. Clean revenue records, FMB survey, and verified Patta transfer.',
    highlights: ['Near Isha / Adiyogi', 'Abundant Water Table', 'Verified Revenue Title'],
    strip: 'linear-gradient(90deg, #10B981, #34D399)',
    accentColor: '#059669',
    accentBg: '#ECFDF5',
    accentBorder: '#A7F3D0',
    tagColor: '#065F46',
    tagBg: '#ECFDF5',
    tagBorder: '#A7F3D0',
  },
];

const HomeTrackRecord = () => {
  return (
    <section id="track-record" className="pt-6 pb-8 md:pt-8 md:pb-10 relative overflow-hidden bg-gradient-to-b from-white via-amber-50/20 to-slate-50/60 border-t border-slate-200/80">
      {/* Warm subtle background accents */}
      <div className="absolute top-0 right-0 w-80 h-80 rounded-full pointer-events-none" style={{ background: 'radial-gradient(circle,rgba(245,158,11,0.08) 0%,transparent 70%)', transform: 'translate(20%,-20%)' }} />
      <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full pointer-events-none" style={{ background: 'radial-gradient(circle,rgba(37,99,235,0.06) 0%,transparent 70%)', transform: 'translate(-20%,20%)' }} />
      <div className="container mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-4 mb-6 pb-4 border-b border-slate-200/80">
          <div className="max-w-2xl">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-50 text-amber-900 font-extrabold tracking-wider uppercase text-xs sm:text-[13px] ring-1 ring-amber-200/80 shadow-xs mb-2">
              <ShieldCheck size={15} className="text-amber-600" />
              Proven Marquee Transactions
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-['Plus_Jakarta_Sans',sans-serif] font-black text-[#0D1B2A] leading-tight tracking-tight">
              Track Record <span className="bg-gradient-to-r from-[#B8860B] via-[#D4AF37] to-[#C5A059] bg-clip-text text-transparent">Showcase</span>
            </h2>
            <p className="text-slate-600 text-base sm:text-lg mt-2 leading-relaxed max-w-xl font-normal">
              A curated showcase of our marquee commercial landmarks, healthcare infrastructure, and prime agricultural corridors executed with absolute legal certainty.
            </p>
          </div>

          <Link
            to="/properties"
            id="track-record-view-all-btn"
            className="inline-flex items-center gap-2 px-7 py-3.5 bg-gradient-to-r from-[#1A335E] via-[#0D1B2A] to-[#1A335E] hover:from-[#0D1B2A] hover:to-[#1A335E] text-white rounded-full font-bold uppercase tracking-wider text-xs sm:text-sm transition-all duration-300 shadow-xl shadow-[#1A335E]/25 hover:shadow-[#1A335E]/40 hover:-translate-y-0.5 group shrink-0 mt-4 md:mt-0"
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
                className="group relative rounded-3xl overflow-hidden border shadow-sm hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.12)] transition-all duration-300 hover:-translate-y-1.5 flex flex-col bg-white"
                style={{ borderColor: deal.accentBorder }}
              >
                {/* Image */}
                <div className="relative overflow-hidden" style={{ aspectRatio: '16/9' }}>
                  <img
                    src={deal.image}
                    alt={deal.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/30 to-transparent pointer-events-none" />

                  {/* Category pill */}
                  <div
                    className="absolute top-3.5 left-3.5 px-3 py-1.5 rounded-lg text-xs font-bold uppercase tracking-wider flex items-center gap-1.5 shadow-md backdrop-blur-md bg-white/95"
                    style={{ color: deal.accentColor }}
                  >
                    <Icon size={14} style={{ color: deal.accentColor }} />
                    <span>{deal.typeBadge}</span>
                  </div>

                  {/* Verified pill */}
                  <div className="absolute top-3.5 right-3.5 bg-emerald-600 px-3 py-1.5 rounded-lg text-white text-xs font-bold uppercase tracking-wider shadow-md flex items-center gap-1">
                    <span>✓</span> Verified
                  </div>

                  {/* Location overlay */}
                  <div className="absolute bottom-3.5 left-3.5 right-3.5">
                    <div className="inline-flex items-center gap-1.5 text-xs sm:text-[13px] text-white font-medium bg-slate-950/60 backdrop-blur-md px-3 py-1.5 rounded-xl border border-white/20">
                      <MapPin size={13} className="shrink-0 text-amber-300" />
                      <span className="truncate">{deal.location}</span>
                    </div>
                  </div>
                </div>

                {/* Accent strip below image */}
                <div className="h-2 w-full shrink-0" style={{ background: deal.strip }} />

                {/* Body */}
                <div className="p-6 flex flex-col gap-3.5 flex-1">
                  <h3 className="text-lg sm:text-xl font-['Plus_Jakarta_Sans',sans-serif] font-bold text-slate-900 leading-snug line-clamp-1 transition-colors duration-200 group-hover:text-[#B8860B]">
                    {deal.title}
                  </h3>

                  <p className="text-slate-600 text-sm sm:text-[14.5px] leading-relaxed line-clamp-2">
                    {deal.description}
                  </p>

                  {/* Divider */}
                  <div className="h-px w-full my-1 bg-slate-100" />

                  {/* Highlights as inline tags */}
                  <div className="flex flex-wrap gap-1.5">
                    {deal.highlights.map((item, hIdx) => (
                      <span
                        key={hIdx}
                        className="inline-flex items-center gap-1 px-3 py-1 rounded-lg text-xs font-bold tracking-wide border shadow-2xs"
                        style={{
                          background: deal.tagBg,
                          color: deal.tagColor,
                          borderColor: deal.tagBorder,
                        }}
                      >
                        <CheckCircle2 size={12} />
                        {item}
                      </span>
                    ))}
                  </div>

                  {/* CTA */}
                  <Link
                    to="/properties"
                    className="mt-auto flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-xs sm:text-sm font-bold uppercase tracking-wider transition-all duration-300 group/btn border shadow-xs"
                    style={{
                      background: deal.accentBg,
                      color: deal.accentColor,
                      borderColor: deal.accentBorder,
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
                    <ArrowRight size={15} className="transition-transform group-hover/btn:translate-x-1" />
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
