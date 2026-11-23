import { motion } from 'framer-motion';
import { Landmark, MapPin, CheckCircle, ArrowUpRight } from 'lucide-react';
import prop1 from '../assets/Properties 1.webp';
import prop2 from '../assets/Properties 2.webp';
import prop3 from '../assets/Properties 3.webp';
import prop4 from '../assets/Properties 4.webp';

const projects = [
  {
    id: 1,
    title: "DTCP Approved Residential Layouts",
    location: "Coimbatore & Tirupur Belt",
    extent: "50+ Acres Verified",
    category: "Residential Land Bank",
    image: prop1,
    status: "Executed & Verified",
    highlights: ["Clear Title Deeds", "100% EC & Patta verified", "Ready for Construction"]
  },
  {
    id: 2,
    title: "Industrial & Warehouse Land Bank",
    location: "Hosur SIPCOT & Highway Corridor",
    extent: "120+ Acres Commercial",
    category: "Industrial Land Bank",
    image: prop2,
    status: "Executed & Verified",
    highlights: ["Suitable for Warehouses", "Logistics & Factory Sheds", "Highway Frontage"]
  },
  {
    id: 3,
    title: "Fertile Agricultural & Farm Estates",
    location: "Pollachi & Erode Agricultural Zone",
    extent: "200+ Acres Farm Land",
    category: "Agricultural Land Bank",
    image: prop3,
    status: "Executed & Verified",
    highlights: ["Abundant Water Resource", "Coconut & Mango Farms", "Clean Revenue Titles"]
  },
  {
    id: 4,
    title: "High-Appreciation Investment Parcels",
    location: "Emerging Highway Corridors",
    extent: "80+ Acres Investment",
    category: "Strategic Land Bank",
    image: prop4,
    status: "Executed & Verified",
    highlights: ["Fast Growing Zone", "High ROI Potential", "Single-Owner Parcels"]
  }
];

const AboutLandBanks = () => {
  return (
    <section id="land-banks" className="py-8 md:py-10 bg-gradient-to-b from-[#0B1524] via-[#0F1E36] to-[#0A1322] text-white relative overflow-hidden font-['Plus_Jakarta_Sans',sans-serif]">
      {/* Background Subtle Gold Glow */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#D4AF37]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-6 md:mb-8 space-y-2 max-w-2xl mx-auto">
          <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#D4AF37]/15 text-[#F3DA90] border border-[#D4AF37]/30 font-extrabold tracking-wider uppercase text-xs">
            <Landmark size={14} className="text-[#F3DA90]" />
            Executed Projects &amp; Land Banks
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-white leading-tight">
            Our Land Banks &amp; <span className="bg-gradient-to-r from-[#F3DA90] via-[#E5C378] to-[#D4AF37] bg-clip-text text-transparent">Executed Projects</span>
          </h2>
          <p className="text-slate-300 text-sm md:text-base leading-relaxed font-normal">
            Strategic land holdings, verified layouts, and successfully executed property transactions handled with 100% legal precision across Tamil Nadu.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
          {projects.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35, delay: idx * 0.06 }}
              viewport={{ once: true }}
              className="group relative bg-[#102035]/80 backdrop-blur-md rounded-2xl border border-white/10 overflow-hidden hover:border-[#D4AF37]/80 hover:shadow-[0_12px_30px_rgba(212,175,55,0.15)] transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Image */}
                <div className="aspect-[16/10] overflow-hidden relative bg-slate-900">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0B1524] via-transparent to-transparent opacity-90" />
                  <span className="absolute top-2.5 left-2.5 px-2.5 py-0.5 rounded-md bg-gradient-to-r from-[#D4AF37] to-[#F3DA90] text-[#0D1B2A] text-[10px] font-black tracking-wider uppercase shadow-sm">
                    {project.status}
                  </span>
                </div>

                {/* Body */}
                <div className="p-4 space-y-2.5">
                  <span className="text-[#F3DA90] text-[11px] font-extrabold uppercase tracking-wider block">
                    {project.category}
                  </span>
                  <h3 className="text-sm md:text-base font-bold text-white group-hover:text-[#F3DA90] transition-colors leading-snug">
                    {project.title}
                  </h3>

                  <div className="flex items-center gap-1.5 text-slate-200 text-xs font-medium">
                    <MapPin size={13} className="text-[#F3DA90] shrink-0" />
                    <span>{project.location}</span>
                  </div>

                  <div className="pt-2 border-t border-white/10 space-y-1.5">
                    {project.highlights.map((h, i) => (
                      <div key={i} className="flex items-center gap-1.5 text-slate-300 text-xs">
                        <CheckCircle size={13} className="text-[#F3DA90] shrink-0" />
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Footer extent badge */}
              <div className="px-4 pb-3 pt-2.5 flex items-center justify-between border-t border-white/10 text-xs bg-black/10">
                <span className="text-[#E5C378] font-bold">{project.extent}</span>
                <ArrowUpRight size={15} className="text-[#F3DA90] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutLandBanks;
