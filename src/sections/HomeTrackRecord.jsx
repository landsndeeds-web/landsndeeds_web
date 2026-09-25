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
    accentBg: 'rgba(29,53,87,0.07)',
    accentBorder: 'rgba(29,53,87,0.12)',
    cardBg: 'linear-gradient(160deg,#f6f8fb 0%,#fff 100%)',
    tagColor: '#1d3557',
    tagBg: 'rgba(29,53,87,0.08)',
    tagBorder: 'rgba(29,53,87,0.15)',
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
    accentColor: '#c5a059',
    accentBg: 'rgba(197,160,89,0.1)',
    accentBorder: 'rgba(197,160,89,0.25)',
    cardBg: 'linear-gradient(160deg,#fffdf7 0%,#fff 100%)',
    tagColor: '#b08a40',
    tagBg: 'rgba(197,160,89,0.08)',
    tagBorder: 'rgba(197,160,89,0.2)',
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
    accentColor: '#0d7a55',
    accentBg: 'rgba(13,122,85,0.07)',
    accentBorder: 'rgba(13,122,85,0.15)',
    cardBg: 'linear-gradient(160deg,#f4fbf8 0%,#fff 100%)',
    tagColor: '#0d7a55',
    tagBg: 'rgba(13,122,85,0.07)',
    tagBorder: 'rgba(13,122,85,0.15)',
  },
];

const HomeTrackRecord = () => {
  return (
    <section id="track-record" className="py-8 md:py-10 bg-white relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-4 mb-6 pb-4 border-b border-gray-200/60">
          <div className="max-w-2xl">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1d3557]/5 text-[#1d3557] font-bold tracking-widest uppercase text-[10px] ring-1 ring-[#1d3557]/10 mb-2.5">
              <ShieldCheck size={12} className="text-[#c5a059]" />
              Proven Marquee Transactions
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-3xl font-serif font-bold text-[#1d3557] leading-[1.2]">
              Track Record Showcase
            </h2>
            <p className="text-gray-600 text-sm mt-2 leading-relaxed max-w-xl">
              A curated showcase of our marquee commercial landmarks, healthcare infrastructure, and prime agricultural corridors executed with absolute legal certainty.
            </p>
          </div>

          <Link
            to="/properties"
            id="track-record-view-all-btn"
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#1d3557] hover:bg-[#2a4d7c] text-white rounded-full font-bold uppercase tracking-widest text-[11px] transition-all duration-300 shadow-sm hover:shadow-md hover:-translate-y-0.5 group shrink-0 mt-4 md:mt-0"
          >
            <span>View All Listings</span>
            <ArrowRight size={13} className="transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </div>

        {/* 3-Column Deals Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {marqueeDeals.map((deal, idx) => {
            const Icon = deal.icon;
            return (
              <div
                key={idx}
                className="group relative rounded-2xl overflow-hidden border shadow-sm hover:shadow-[0_10px_30px_-8px_rgba(29,53,87,0.18)] transition-all duration-300 hover:-translate-y-1 flex flex-col"
                style={{ borderColor: deal.accentBorder, background: deal.cardBg }}
              >
                {/* Image */}
                <div className="relative overflow-hidden" style={{ aspectRatio: '16/9' }}>
                  <img
                    src={deal.image}
                    alt={deal.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0D1B2A]/85 via-[#0D1B2A]/20 to-transparent pointer-events-none" />

                  {/* Category pill */}
                  <div
                    className="absolute top-2.5 left-2.5 px-2 py-0.5 rounded-md text-[9px] font-bold uppercase tracking-widest flex items-center gap-1 shadow-sm backdrop-blur-md"
                    style={{ background: 'rgba(255,255,255,0.93)', color: deal.accentColor }}
                  >
                    <Icon size={11} style={{ color: deal.accentColor }} />
                    <span>{deal.typeBadge}</span>
                  </div>

                  {/* Verified pill */}
                  <div className="absolute top-2.5 right-2.5 bg-[#10B981] px-2 py-0.5 rounded-md text-white text-[9px] font-bold uppercase tracking-widest shadow-sm">
                    ✓ Verified
                  </div>

                  {/* Location overlay */}
                  <div className="absolute bottom-2.5 left-2.5 right-2.5">
                    <div className="flex items-center gap-1.5 text-[11px] text-white/95 font-semibold">
                      <MapPin size={11} className="shrink-0" style={{ color: deal.accentColor === '#1d3557' ? '#c5a059' : '#fff' }} />
                      <span className="truncate drop-shadow">{deal.location}</span>
                    </div>
                  </div>
                </div>

                {/* Accent strip below image */}
                <div className="h-1 w-full shrink-0" style={{ background: deal.strip }} />

                {/* Body */}
                <div className="p-3 flex flex-col gap-2 flex-1">
                  <h3
                    className="text-[15px] font-serif font-bold leading-snug line-clamp-1 transition-colors duration-200"
                    style={{ color: deal.accentColor }}
                  >
                    {deal.title}
                  </h3>

                  <p className="text-gray-500 text-xs leading-relaxed line-clamp-2">
                    {deal.description}
                  </p>

                  {/* Divider */}
                  <div className="h-px w-full" style={{ background: deal.accentBorder }} />

                  {/* Highlights as inline tags */}
                  <div className="flex flex-wrap gap-1.5">
                    {deal.highlights.map((item, hIdx) => (
                      <span
                        key={hIdx}
                        className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md text-[9px] font-bold uppercase tracking-wide border"
                        style={{
                          background: deal.tagBg,
                          color: deal.tagColor,
                          borderColor: deal.tagBorder,
                        }}
                      >
                        <CheckCircle2 size={9} />
                        {item}
                      </span>
                    ))}
                  </div>

                  {/* CTA */}
                  <Link
                    to="/properties"
                    className="mt-auto flex items-center justify-center gap-1.5 py-2 px-3 rounded-lg text-[10px] font-bold uppercase tracking-wider transition-all duration-300 group/btn"
                    style={{
                      background: deal.accentBg,
                      color: deal.accentColor,
                      border: `1px solid ${deal.accentBorder}`,
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
                    <ArrowRight size={12} className="transition-transform group-hover/btn:translate-x-1" />
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
