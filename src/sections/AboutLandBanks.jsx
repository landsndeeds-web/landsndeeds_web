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
    <section id="land-banks" className="py-10 md:py-14 bg-slate-900 text-white relative overflow-hidden">
      {/* Background Accent */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-[#D6B97B]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-8 md:mb-10 space-y-2 max-w-2xl mx-auto">
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#D6B97B]/20 text-[#D6B97B] font-bold tracking-widest uppercase text-xs">
            <Landmark size={14} />
            Executed Projects &amp; Land Banks
          </span>
          <h2 className="text-3xl md:text-5xl font-serif font-bold !text-white leading-tight">
            Our Land Banks &amp; <span className="gold-gradient">Executed Projects</span>
          </h2>
          <p className="!text-gray-300 text-sm md:text-base leading-relaxed font-normal">
            Strategic land holdings, verified layouts, and successfully executed property transactions handled with 100% legal precision across Tamil Nadu.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
          {projects.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
              viewport={{ once: true }}
              className="group relative bg-white/5 rounded-xl border border-white/10 overflow-hidden hover:border-[#D6B97B] hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Image */}
                <div className="aspect-[16/10] overflow-hidden relative bg-slate-800">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-80" />
                  <span className="absolute top-2.5 left-2.5 px-2 py-0.5 rounded bg-[#D6B97B] text-[#0D1B2A] text-[9px] font-extrabold tracking-wider uppercase">
                    {project.status}
                  </span>
                </div>

                {/* Body */}
                <div className="p-4 space-y-2">
                  <span className="text-[#D6B97B] text-[10px] font-bold uppercase tracking-wider block">
                    {project.category}
                  </span>
                  <h3 className="text-sm md:text-base font-serif font-bold !text-white group-hover:!text-[#D6B97B] transition-colors leading-snug">
                    {project.title}
                  </h3>

                  <div className="flex items-center gap-1.5 text-gray-300 text-xs font-medium">
                    <MapPin size={13} className="text-[#D6B97B] shrink-0" />
                    <span>{project.location}</span>
                  </div>

                  <div className="pt-2 border-t border-white/10 space-y-1">
                    {project.highlights.map((h, i) => (
                      <div key={i} className="flex items-center gap-1.5 text-gray-400 text-xs">
                        <CheckCircle size={12} className="text-[#D6B97B] shrink-0" />
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Footer extent badge */}
              <div className="px-4 pb-3 pt-2 flex items-center justify-between border-t border-white/10 text-xs">
                <span className="text-gray-400 font-semibold">{project.extent}</span>
                <ArrowUpRight size={14} className="text-[#D6B97B] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutLandBanks;
