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
    <section id="infrastructure" className="py-10 md:py-14 bg-white relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left: Content */}
          <div className="lg:col-span-7 space-y-3">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1A335E]/5 text-[#D6B97B] font-bold tracking-widest uppercase text-xs">
              <Building2 size={14} />
              Our Infrastructure
            </span>
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-[#1A335E] leading-tight">
              State-of-the-Art <span className="gold-gradient">Infrastructure</span>
            </h2>
            <p className="text-gray-600 leading-relaxed text-sm md:text-base font-normal">
              Our robust physical and digital infrastructure enables us to deliver seamless, secure, and professional property services across Tamil Nadu.
            </p>

            {/* Features List */}
            <div className="grid sm:grid-cols-2 gap-3.5 pt-2">
              {infraFeatures.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <div
                    key={idx}
                    className="p-3.5 rounded-xl bg-slate-50 border border-gray-200/70 hover:border-[#D6B97B] hover:shadow-md transition-all duration-300 space-y-1"
                  >
                    <div className="w-7 h-7 rounded-lg bg-[#1A335E]/10 flex items-center justify-center text-[#1A335E]">
                      <Icon size={15} />
                    </div>
                    <h3 className="font-serif font-bold text-[#1A335E] text-sm">{item.title}</h3>
                    <p className="text-gray-500 text-xs leading-relaxed">{item.description}</p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right: Image Card */}
          <div className="lg:col-span-5 relative">
            <div className="aspect-[16/11] rounded-2xl overflow-hidden shadow-xl border border-gray-100 group">
              <img
                src={infraImage}
                alt="Lands N Deeds Infrastructure"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1A335E]/70 via-transparent to-transparent" />
            </div>

            {/* Floating Location Card */}
            <div className="absolute -bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md p-3.5 rounded-xl shadow-xl border border-gray-200 text-gray-800">
              <div className="flex items-start gap-2.5">
                <MapPin size={16} className="text-[#D6B97B] shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-serif font-bold text-[#1A335E] text-xs uppercase tracking-wider">Head Office Location</h4>
                  <p className="text-gray-600 text-xs mt-0.5 leading-normal">
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
