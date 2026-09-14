import { motion } from 'framer-motion';
import { Map, Layers, Compass, Ruler, FileText, CheckCircle2, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import surveyImg from '../assets/quality_establishment.webp';

const surveyFeatures = [
  {
    icon: Compass,
    title: "DGPS & Total Station Survey",
    desc: "Utilizing high-precision Differential GPS (DGPS) and Total Station laser tools to record millimeter-accurate boundary points."
  },
  {
    icon: Map,
    title: "Government FMB Sketch Correlation",
    desc: "Cross-matching physical ground coordinates with official Government FMB (Field Measurement Book) sketches and Village Maps."
  },
  {
    icon: Layers,
    title: "Plot & Layout Boundary Demarcation",
    desc: "Demarcating individual plot boundaries, road widths, corner stones, and setback lines for layouts and industrial land parcels."
  },
  {
    icon: FileText,
    title: "Digital CAD & GIS Survey Reports",
    desc: "Delivering digital CAD drawings, geo-referenced GIS map overlays, and authenticated land survey certificates."
  }
];

const ServicesDigitalSurvey = () => {
  return (
    <section id="digital-survey" className="py-12 md:py-18 bg-slate-50 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column: Visual Image */}
          <div className="lg:col-span-5 relative order-2 lg:order-1">
            <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-xl border border-gray-100 group">
              <img
                src={surveyImg}
                alt="Digital Survey Services - Lands N Deeds"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1A335E]/70 via-transparent to-transparent" />
            </div>

            {/* Floating Badge */}
            <div className="absolute -bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md p-4 rounded-xl shadow-xl border border-gray-200">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#1A335E]/10 flex items-center justify-center text-[#1A335E] shrink-0">
                  <Ruler size={20} className="text-[#D6B97B]" />
                </div>
                <div>
                  <h4 className="font-serif font-bold text-[#1A335E] text-xs uppercase tracking-wider">Precision Boundary Mapping</h4>
                  <p className="text-gray-600 text-xs mt-0.5">
                    Eliminate boundary disputes with millimeter DGPS accuracy.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Content */}
          <div className="lg:col-span-7 space-y-4 order-1 lg:order-2">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1A335E]/5 text-[#D6B97B] font-bold tracking-widest uppercase text-xs">
              <Map size={14} />
              Precision Measurement &amp; Mapping
            </span>
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-[#1A335E] leading-tight">
              Digital <span className="gold-gradient">Survey</span>
            </h2>
            <p className="text-gray-600 leading-relaxed text-sm md:text-base font-normal">
              Accurate land boundaries are the bedrock of safe real estate transactions. Our digital land survey unit uses advanced DGPS technology, Total Station systems, and GIS mapping to define exact land extents across Tamil Nadu.
            </p>

            {/* Feature List Grid */}
            <div className="grid sm:grid-cols-2 gap-4 pt-2">
              {surveyFeatures.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: idx * 0.08 }}
                    viewport={{ once: true }}
                    className="p-4 rounded-xl bg-white border border-gray-200/80 hover:border-[#D6B97B] hover:shadow-md transition-all duration-300 space-y-1.5"
                  >
                    <div className="w-8 h-8 rounded-lg bg-[#1A335E]/10 flex items-center justify-center text-[#1A335E]">
                      <Icon size={17} />
                    </div>
                    <h3 className="font-serif font-bold text-[#1A335E] text-sm md:text-base">{item.title}</h3>
                    <p className="text-gray-500 text-xs md:text-sm leading-relaxed">{item.desc}</p>
                  </motion.div>
                );
              })}
            </div>

            <div className="pt-2">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#1A335E] text-[#D6B97B] font-bold text-xs uppercase tracking-widest hover:bg-[#0D1B2A] transition-all"
              >
                <span>Book Digital Land Survey</span>
                <ArrowRight size={14} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesDigitalSurvey;
