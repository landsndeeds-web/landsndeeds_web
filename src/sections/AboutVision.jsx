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
    <section id="our-vision" className="py-10 md:py-14 bg-white relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column: Image with Floating Card */}
          <div className="lg:col-span-5 relative">
            <div className="aspect-[16/11] rounded-2xl overflow-hidden shadow-xl border border-gray-100 group">
              <img
                src={visionImage}
                alt="Our Vision - Lands N Deeds"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1A335E]/60 via-transparent to-transparent" />
            </div>

            {/* Floating vision badge */}
            <div className="absolute -bottom-4 right-4 bg-[#1A335E] text-white p-3.5 rounded-xl shadow-xl border border-[#D6B97B]/40 max-w-xs">
              <div className="flex items-center gap-2 mb-1">
                <Eye size={16} className="text-[#D6B97B]" />
                <span className="text-[#D6B97B] font-serif font-bold text-xs uppercase tracking-wider">Vision Statement</span>
              </div>
              <p className="text-white/90 text-xs leading-relaxed font-medium">
                "To be Tamil Nadu's most trusted, transparent, and legally sound property platform."
              </p>
            </div>
          </div>

          {/* Right Column: Vision Content */}
          <div className="lg:col-span-7 space-y-3">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1A335E]/5 text-[#D6B97B] font-bold tracking-widest uppercase text-xs">
              <Eye size={14} />
              Our Vision
            </span>
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-[#1A335E] leading-tight">
              Pioneering Transparency &amp; Trust in <span className="gold-gradient">Real Estate</span>
            </h2>
            <p className="text-gray-600 leading-relaxed text-sm md:text-base font-normal">
              Our vision is to revolutionize the property market across Tamil Nadu by creating a seamless, transparent, and completely verified platform where every buyer, seller, and investor can make real estate decisions with total peace of mind.
            </p>

            {/* Vision Pillars Grid */}
            <div className="grid sm:grid-cols-2 gap-3.5 pt-2">
              {visionPillars.map((pillar, index) => {
                const Icon = pillar.icon;
                return (
                  <div
                    key={index}
                    className="p-3.5 rounded-xl bg-slate-50 border border-gray-200/70 hover:border-[#D6B97B] hover:shadow-md transition-all duration-300 space-y-1"
                  >
                    <div className="w-7 h-7 rounded-lg bg-[#1A335E]/10 flex items-center justify-center text-[#1A335E]">
                      <Icon size={15} />
                    </div>
                    <h3 className="font-serif font-bold text-[#1A335E] text-sm">{pillar.title}</h3>
                    <p className="text-gray-500 text-xs leading-relaxed">{pillar.description}</p>
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
