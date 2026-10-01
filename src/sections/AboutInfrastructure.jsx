import { motion } from 'framer-motion';
import { Building2, MapPin, ShieldCheck, Laptop, Video, Network } from 'lucide-react';
import infraImage from '../assets/quality_establishment.webp';

const infraFeatures = [
  {
    icon: Building2,
    title: "Central Administrative Headquarters",
    description: "Located at No. 62, GV Residency, Sowripalayam, Coimbatore — a modern corporate office fully equipped for client consultation and operations."
  },
  {
    icon: ShieldCheck,
    title: "Dedicated Legal & Documentation Cell",
    description: "In-house wing staffed by senior Advocates and retired Revenue Officers to examine title deeds, encumbrances, and revenue documents."
  },
  {
    icon: Video,
    title: "Secure Deal & Video Conference Rooms",
    description: "Private, confidential meeting facilities and encrypted video consultation setups for smooth buyer-seller negotiations."
  },
  {
    icon: Laptop,
    title: "Digital Land Verification Tech",
    description: "Advanced digital infrastructure for online land record checking, FMB sketch verification, Patta transfers, and GIS mapping."
  },
  {
    icon: Network,
    title: "Pan-Tamil Nadu Field Network",
    description: "On-ground presence across all major districts in Tamil Nadu ensuring swift local verification and registrar office assistance."
  }
];

const AboutInfrastructure = () => {
  return (
    <section id="infrastructure" className="pt-8 pb-10 md:pt-10 md:pb-12 bg-white relative overflow-hidden border-b border-slate-200/80">
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left: Content */}
          <div className="lg:col-span-7 space-y-4">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-50 text-amber-900 border border-amber-200/80 font-extrabold tracking-wider uppercase text-xs shadow-xs">
              <Building2 size={14} className="text-[#C5A059]" />
              Our Infrastructure
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-['Plus_Jakarta_Sans',sans-serif] font-black text-[#0D1B2A] leading-tight tracking-tight">
              State-of-the-Art <span className="bg-gradient-to-r from-[#B8860B] via-[#D4AF37] to-[#C5A059] bg-clip-text text-transparent">Infrastructure</span>
            </h2>
            <p className="text-slate-600 leading-relaxed text-base sm:text-lg font-normal">
              Our robust physical and digital infrastructure enables us to deliver seamless, secure, and professional property services across Tamil Nadu.
            </p>

            {/* Features List */}
            <div className="grid sm:grid-cols-2 gap-4 pt-2">
              {infraFeatures.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <div
                    key={idx}
                    className="p-4 rounded-2xl bg-[#FAF8F2] border border-amber-200/60 hover:border-amber-400 hover:shadow-lg transition-all duration-300 space-y-2 group"
                  >
                    <div className="w-9 h-9 rounded-xl bg-[#1A335E] flex items-center justify-center text-[#E5C378] shadow-xs group-hover:scale-105 transition-transform">
                      <Icon size={18} />
                    </div>
                    <h3 className="font-['Plus_Jakarta_Sans',sans-serif] font-bold text-[#0D1B2A] text-sm sm:text-base">{item.title}</h3>
                    <p className="text-slate-600 text-xs sm:text-[13px] leading-relaxed">{item.description}</p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right: Image Card */}
          <div className="lg:col-span-5 relative">
            <div className="aspect-[16/11] rounded-3xl overflow-hidden shadow-2xl border border-slate-200/80 group">
              <img
                src={infraImage}
                alt="Lands N Deeds Infrastructure"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0D1B2A]/70 via-transparent to-transparent" />
            </div>

            {/* Floating Location Card */}
            <div className="absolute -bottom-4 left-4 right-4 bg-[#0D1B2A] text-white p-4 rounded-2xl shadow-2xl border border-[#C5A059]/40 backdrop-blur-md">
              <div className="flex items-start gap-3">
                <MapPin size={18} className="text-[#E5C378] shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-['Plus_Jakarta_Sans',sans-serif] font-bold text-[#E5C378] text-xs uppercase tracking-wider">Head Office Location</h4>
                  <p className="text-slate-100 text-xs sm:text-[13px] mt-1 leading-relaxed">
                    No: 62, GV Residency, Sowripalayam, Coimbatore - 641028, Tamil Nadu.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutInfrastructure;
