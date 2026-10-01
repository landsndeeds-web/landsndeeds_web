import { motion } from 'framer-motion';
import { Eye, Shield, Target, Award, Sparkles } from 'lucide-react';
import visionImage from '../assets/vision_image.webp';

const AboutVision = () => {
  const visionPillars = [
    {
      icon: Shield,
      title: "100% Legal Transparency",
      description: "Establishing an absolute benchmark for risk-free land title checks and authentic property documentation in Tamil Nadu."
    },
    {
      icon: Target,
      title: "Mitigating Transaction Risks",
      description: "Eliminating land disputes and fraud through systematic revenue record inspection and professional legal verification."
    },
    {
      icon: Award,
      title: "Empowering Buyers & Sellers",
      description: "Enabling clients to buy, sell, lease, or invest with complete confidence and true value for money."
    },
    {
      icon: Sparkles,
      title: "Domain Excellence",
      description: "Combining decades of experience from former IAS, IRS, DRO, and legal experts under one trusted platform."
    }
  ];

  return (
    <section id="our-vision" className="pt-8 pb-10 md:pt-10 md:pb-12 bg-white relative overflow-hidden border-b border-slate-200/80">
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column: Image with Floating Card */}
          <div className="lg:col-span-5 relative">
            <div className="aspect-[16/11] rounded-3xl overflow-hidden shadow-2xl border border-slate-200/80 group">
              <img
                src={visionImage}
                alt="Our Vision - Lands N Deeds"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0D1B2A]/70 via-transparent to-transparent" />
            </div>

            {/* Floating vision badge */}
            <div className="absolute -bottom-4 right-4 bg-[#0D1B2A] text-white p-4 rounded-2xl shadow-2xl border border-[#C5A059]/50 max-w-xs backdrop-blur-md">
              <div className="flex items-center gap-2 mb-1.5">
                <Eye size={17} className="text-[#E5C378]" />
                <span className="text-[#E5C378] font-['Plus_Jakarta_Sans',sans-serif] font-bold text-xs uppercase tracking-wider">Vision Statement</span>
              </div>
              <p className="text-slate-100 text-xs sm:text-[13px] leading-relaxed font-medium">
                "To be Tamil Nadu's most trusted, transparent, and legally sound property platform."
              </p>
            </div>
          </div>

          {/* Right Column: Vision Content */}
          <div className="lg:col-span-7 space-y-4">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-50 text-amber-900 border border-amber-200/80 font-extrabold tracking-wider uppercase text-xs shadow-xs">
              <Eye size={14} className="text-[#C5A059]" />
              Our Vision
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-['Plus_Jakarta_Sans',sans-serif] font-black text-[#0D1B2A] leading-tight tracking-tight">
              Pioneering Transparency &amp; Trust in <span className="bg-gradient-to-r from-[#B8860B] via-[#D4AF37] to-[#C5A059] bg-clip-text text-transparent">Real Estate</span>
            </h2>
            <p className="text-slate-600 leading-relaxed text-base sm:text-lg font-normal">
              Our vision is to revolutionize the property market across Tamil Nadu by creating a seamless, transparent, and completely verified platform where every buyer, seller, and investor can make real estate decisions with total peace of mind.
            </p>

            {/* Vision Pillars Grid */}
            <div className="grid sm:grid-cols-2 gap-4 pt-2">
              {visionPillars.map((pillar, index) => {
                const Icon = pillar.icon;
                return (
                  <div
                    key={index}
                    className="p-4 rounded-2xl bg-[#FAF8F2] border border-amber-200/60 hover:border-amber-400 hover:shadow-lg transition-all duration-300 space-y-2 group"
                  >
                    <div className="w-9 h-9 rounded-xl bg-[#1A335E] flex items-center justify-center text-[#E5C378] shadow-xs group-hover:scale-105 transition-transform">
                      <Icon size={18} />
                    </div>
                    <h3 className="font-['Plus_Jakarta_Sans',sans-serif] font-bold text-[#0D1B2A] text-sm sm:text-base">{pillar.title}</h3>
                    <p className="text-slate-600 text-xs sm:text-[13px] leading-relaxed">{pillar.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutVision;
