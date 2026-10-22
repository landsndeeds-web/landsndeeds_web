import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  ShieldCheck,
  Building2,
  CheckCircle2,
  ArrowRight,
  Sparkles,
  Award,
  BadgeCheck,
  Layers
} from 'lucide-react';

// Client Categories
const categories = ['All Sectors', 'Corporate & Infra', 'Healthcare & Institutions', 'Real Estate & Developers', 'Agro & Industrial'];

// Client Logos Data (4 placeholder clients ready for future live logos)
const clients = [
  {
    name: 'Apex Infrastructure',
    sector: 'Corporate & Infra',
    subtitle: 'Industrial Corridors & SEZ Parks',
    type: 'Enterprise Client',
    // Custom SVG Placeholder
    icon: (
      <svg className="w-9 h-9" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="40" height="40" rx="10" fill="#1A335E" />
        <path d="M20 9L29 25H11L20 9Z" stroke="#E5C378" strokeWidth="2.5" strokeLinejoin="round" />
        <path d="M20 16L24.5 24H15.5L20 16Z" fill="#E5C378" />
        <circle cx="20" cy="30" r="2" fill="#E5C378" />
      </svg>
    ),
    color: '#1A335E',
    accentBg: '#EFF3FA',
  },
  {
    name: 'Kongunad Healthcare',
    sector: 'Healthcare & Institutions',
    subtitle: 'Multi-Specialty Hospital Campus',
    type: 'Healthcare Conglomerate',
    icon: (
      <svg className="w-9 h-9" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="40" height="40" rx="10" fill="#0D5C75" />
        <path d="M20 10V30M10 20H30" stroke="#5EEAD4" strokeWidth="3" strokeLinecap="round" />
        <circle cx="20" cy="20" r="13" stroke="#FFFFFF" strokeWidth="1.5" strokeDasharray="3 3" />
      </svg>
    ),
    color: '#0D5C75',
    accentBg: '#F0FDFA',
  },
  {
    name: 'Zenith Realty Group',
    sector: 'Real Estate & Developers',
    subtitle: 'Premium Commercial & Residential',
    type: 'Urban Developer',
    icon: (
      <svg className="w-9 h-9" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="40" height="40" rx="10" fill="#0F172A" />
        <path d="M12 12H28L12 28H28" stroke="#F59E0B" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="12" cy="12" r="2" fill="#FBBF24" />
        <circle cx="28" cy="28" r="2" fill="#FBBF24" />
      </svg>
    ),
    color: '#D97706',
    accentBg: '#FEF3C7',
  },
  {
    name: 'Southern Agro Holdings',
    sector: 'Agro & Industrial',
    subtitle: 'Agro-Estates & Commercial Farms',
    type: 'Agri-Business Asset',
    icon: (
      <svg className="w-9 h-9" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="40" height="40" rx="10" fill="#14532D" />
        <path d="M20 30V15C20 15 15 10 10 15C10 20 15 25 20 25C25 25 30 20 30 15C30 10 25 15 25 15" stroke="#86EFAC" strokeWidth="2" strokeLinecap="round" />
        <circle cx="20" cy="11" r="2" fill="#4ADE80" />
      </svg>
    ),
    color: '#16A34A',
    accentBg: '#DCFCE7',
  },
];

const stats = [
  { value: '500+', label: 'Verified Transactions Handled', icon: BadgeCheck },
  { value: '₹1,200+ Cr', label: 'Commercial Asset Value Diligenced', icon: Award },
  { value: '100%', label: 'Dispute-Free Legal Record', icon: ShieldCheck },
  { value: '40+', label: 'Corporate & Institutional Clients', icon: Building2 },
];

const HomeClientLogos = () => {
  const [selectedSector, setSelectedSector] = useState('All Sectors');

  const filteredClients = selectedSector === 'All Sectors'
    ? clients
    : clients.filter((c) => c.sector === selectedSector);

  return (
    <section id="proven-clients" className="pt-8 pb-12 md:pt-10 md:pb-16 relative overflow-hidden bg-gradient-to-b from-white via-amber-50/15 to-slate-50/70 border-t border-slate-200/80">
      {/* Subtle radial ambient lights */}
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full pointer-events-none" style={{ background: 'radial-gradient(circle, rgba(245,158,11,0.07) 0%, transparent 70%)', transform: 'translate(20%,-20%)' }} />
      <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full pointer-events-none" style={{ background: 'radial-gradient(circle, rgba(26,51,94,0.06) 0%, transparent 70%)', transform: 'translate(-20%,20%)' }} />

      <div className="container mx-auto px-6 relative z-10">

        {/* Section Header */}
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-4 mb-8 pb-5 border-b border-slate-200/80">
          <div className="max-w-2xl space-y-2">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-['Plus_Jakarta_Sans',sans-serif] font-black text-[#0D1B2A] leading-tight tracking-tight">
              Proven <span className="bg-gradient-to-r from-[#B8860B] via-[#D4AF37] to-[#C5A059] bg-clip-text text-transparent">Institutional Trust</span>
            </h2>
            <p className="text-xl sm:text-2xl font-bold text-[#1A335E] leading-snug">
              Trusted by <span className="bg-gradient-to-r from-[#B8860B] via-[#D4AF37] to-[#C5A059] bg-clip-text text-transparent">Leading Brands & Enterprises</span>
            </p>
            <p className="text-slate-600 text-base sm:text-lg leading-relaxed max-w-xl font-normal">
              Partnering with prominent conglomerates, healthcare networks, industrial developers, and institutional investors with absolute title integrity.
            </p>
          </div>

          <Link
            to="/contact"
            id="clients-partner-with-us-btn"
            className="inline-flex items-center gap-2 px-7 py-3.5 bg-gradient-to-r from-[#1A335E] via-[#0D1B2A] to-[#1A335E] hover:from-[#0D1B2A] hover:to-[#1A335E] text-white rounded-full font-bold uppercase tracking-wider text-xs sm:text-sm transition-all duration-300 shadow-xl shadow-[#1A335E]/25 hover:shadow-[#1A335E]/40 hover:-translate-y-0.5 group shrink-0 mt-2 md:mt-0"
          >
            <span>Partner With Us</span>
            <ArrowRight size={15} className="transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </div>

        {/* Sector Filter Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-3 mb-8 no-scrollbar">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedSector(cat)}
              className={`px-4 py-2 rounded-full text-xs sm:text-sm font-bold tracking-wide transition-all whitespace-nowrap cursor-pointer border ${
                selectedSector === cat
                  ? 'bg-[#0D1B2A] text-amber-300 border-[#0D1B2A] shadow-md scale-105'
                  : 'bg-white text-slate-600 border-slate-200 hover:bg-slate-50 hover:text-slate-900'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Logos Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
          {filteredClients.map((client, idx) => (
            <div
              key={idx}
              className="group relative bg-white rounded-2xl p-5 sm:p-6 border border-slate-200/90 shadow-sm hover:shadow-xl hover:border-amber-400/80 transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between"
            >
              {/* Subtle top indicator bar on hover */}
              <div
                className="absolute top-0 left-6 right-6 h-1 rounded-b-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{ background: client.color }}
              />

              <div>
                {/* Header: Logo Icon & Sector Badge */}
                <div className="flex items-start justify-between gap-3 mb-4">
                  <div className="p-2 rounded-xl bg-slate-50 border border-slate-100 group-hover:scale-110 group-hover:shadow-md transition-all duration-300">
                    {client.icon}
                  </div>
                  <span
                    className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider"
                    style={{ background: client.accentBg, color: client.color }}
                  >
                    <Sparkles size={11} />
                    {client.type}
                  </span>
                </div>

                {/* Company Name & Details */}
                <h3 className="text-base sm:text-lg font-['Plus_Jakarta_Sans',sans-serif] font-bold text-slate-900 group-hover:text-[#1A335E] transition-colors leading-snug">
                  {client.name}
                </h3>
                <p className="text-slate-500 text-xs sm:text-[13px] mt-1 line-clamp-1 font-medium">
                  {client.subtitle}
                </p>
              </div>

              {/* Verified Mandate Footer */}
              <div className="pt-3.5 mt-4 border-t border-slate-100 flex items-center justify-between text-xs">
                <span className="inline-flex items-center gap-1.5 text-emerald-700 font-bold tracking-wide">
                  <CheckCircle2 size={13} className="text-emerald-600" />
                  Due Diligence Verified
                </span>
                <span className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider">
                  TN Region
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Trust Metrics Bar */}
        <div className="mt-10 sm:mt-12 bg-gradient-to-r from-[#0D1B2A] via-[#1A335E] to-[#0D1B2A] rounded-3xl p-6 sm:p-8 text-white shadow-xl shadow-slate-950/10 border border-slate-700/50">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 divide-y lg:divide-y-0 lg:divide-x divide-white/10">
            {stats.map((stat, sIdx) => {
              const Icon = stat.icon;
              return (
                <div key={sIdx} className={`flex flex-col items-center text-center ${sIdx !== 0 ? 'pt-4 lg:pt-0 lg:pl-6' : ''}`}>
                  <div className="w-10 h-10 rounded-xl bg-amber-400/10 border border-amber-400/20 flex items-center justify-center text-[#FBBF24] mb-3">
                    <Icon size={20} />
                  </div>
                  <div className="text-2xl sm:text-3xl font-['Plus_Jakarta_Sans',sans-serif] font-black bg-gradient-to-r from-amber-300 via-yellow-200 to-amber-400 bg-clip-text text-transparent">
                    {stat.value}
                  </div>
                  <div className="text-xs sm:text-sm text-slate-300 mt-1 font-medium">
                    {stat.label}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};

export default HomeClientLogos;
