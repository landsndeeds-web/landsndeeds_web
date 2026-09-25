import { Link } from 'react-router-dom';
import { MapPin, Building, Trees, Hospital, CheckCircle2, ArrowRight, ShieldCheck } from 'lucide-react';
import prop1 from '../assets/Properties 1.webp';
import prop2 from '../assets/Properties 2.webp';
import prop3 from '../assets/Properties 3.webp';

const marqueeDeals = [
  {
    title: 'Suguna Grand',
    location: 'Avinashi Road, Coimbatore',
    category: 'Commercial',
    typeBadge: 'Commercial Landmark',
    icon: Building,
    image: prop1,
    description: 'High-visibility prime commercial development on Avinashi Road. Full legal title validation, ownership chain audit, and commercial clearance.',
    highlights: ['Avinashi Road Corridor', '100% Clear Title', 'Prime Commercial Asset'],
  },
  {
    title: 'Kongunad Multi Specialty Hospital',
    location: 'Coimbatore Metropolitan Belt',
    category: 'Commercial / Institutional',
    typeBadge: 'Healthcare Infrastructure',
    icon: Hospital,
    image: prop2,
    description: 'Extensive multi-tier title scrutiny and institutional zoning approval for a state-of-the-art multi-specialty healthcare campus.',
    highlights: ['Healthcare Compliance', 'Multi-Tier Title Audited', 'Statutory Approvals'],
  },
  {
    title: 'Premium Farmlands at Devarayapuram',
    location: 'Near Isha / Adiyogi, Coimbatore',
    category: 'Agri / Leisure',
    typeBadge: 'Agri & Agro-Estate',
    icon: Trees,
    image: prop3,
    description: 'Scenic fertile agro-parcels nestled against the Western Ghats foothills near Isha / Adiyogi. Clean revenue records, FMB survey, and Patta transfer.',
    highlights: ['Near Isha / Adiyogi', 'Abundant Water Table', 'Verified Revenue Title'],
  },
];

const HomeTrackRecord = () => {
  return (
    <section id="track-record" className="py-8 md:py-10 bg-white relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-4 mb-8 pb-4 border-b border-gray-200/60">
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
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
          {marqueeDeals.map((deal, idx) => {
            const Icon = deal.icon;
            return (
              <div
                key={idx}
                className="group bg-white rounded-2xl overflow-hidden border border-gray-200 shadow-sm hover:shadow-[0_8px_25px_-5px_rgba(29,53,87,0.15)] transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between"
              >
                <div>
                  {/* Image Container with Badge Overlay */}
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <img
                      src={deal.image}
                      alt={deal.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0D1B2A]/90 via-[#0D1B2A]/20 to-transparent pointer-events-none" />

                    {/* Category Pill */}
                    <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-md px-2.5 py-1 rounded-md text-[#1d3557] text-[9px] font-bold uppercase tracking-widest flex items-center gap-1.5 shadow-sm ring-1 ring-white/50">
                      <Icon size={12} className="text-[#c5a059]" />
                      <span>{deal.typeBadge}</span>
                    </div>

                    {/* Status Pill */}
                    <div className="absolute top-3 right-3 bg-[#10B981]/95 backdrop-blur-md px-2.5 py-1 rounded-md text-white text-[9px] font-bold uppercase tracking-widest shadow-sm ring-1 ring-[#10B981]/50">
                      Verified & Executed
                    </div>

                    {/* Location Title Over Image Bottom */}
                    <div className="absolute bottom-3 left-3 right-3 text-white transform translate-y-1 group-hover:translate-y-0 transition-transform duration-300">
                      <div className="flex items-center gap-1.5 text-[11px] text-white/95 font-semibold">
                        <MapPin size={12} className="text-[#c5a059] shrink-0" />
                        <span className="truncate">{deal.location}</span>
                      </div>
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="p-4 sm:p-5">
                    <h3 className="text-lg font-serif font-bold text-[#1d3557] mb-2 leading-snug group-hover:text-[#c5a059] transition-colors duration-200 line-clamp-1">
                      {deal.title}
                    </h3>
                    <p className="text-gray-500 text-xs sm:text-sm leading-relaxed font-normal mb-4 line-clamp-3">
                      {deal.description}
                    </p>

                    {/* Key Highlights */}
                    <div className="space-y-2 pt-3 border-t border-gray-100">
                      {deal.highlights.map((item, hIdx) => (
                        <div key={hIdx} className="flex items-start gap-2 text-xs text-gray-700 font-medium">
                          <CheckCircle2 size={13} className="text-[#10B981] shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Footer Action */}
                <div className="p-4 sm:p-5 pt-0 mt-1">
                  <Link
                    to="/properties"
                    className="w-full py-2.5 px-3 rounded-lg bg-gray-50 hover:bg-[#1d3557] text-[#1d3557] hover:text-white border border-gray-200 text-[11px] font-bold uppercase tracking-wider transition-all duration-300 flex items-center justify-center gap-1.5 group/btn shadow-sm hover:shadow-md"
                  >
                    <span>Explore Details</span>
                    <ArrowRight size={13} className="transition-transform group-hover/btn:translate-x-1" />
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
