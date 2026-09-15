import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, FileCheck, Compass, Users, ArrowRight, ArrowUpRight, Sparkles } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const keyServices = [
  {
    icon: ShieldCheck,
    title: '360° Legal Due Diligence',
    description: 'Comprehensive title deed scrutiny, encumbrance checks, and legal clearance by senior legal advocates.',
    color: '#0D5C3A',
    bg: '#ECFDF5',
    border: 'hover:border-[#10B981]',
  },
  {
    icon: FileCheck,
    title: 'Registration & Deeds',
    description: 'End-to-end guidance with sale deed drafting, stamp duty valuation, and Sub-Registrar office processing.',
    color: '#B8922E',
    bg: '#FDF8EE',
    border: 'hover:border-[#D6B97B]',
  },
  {
    icon: Compass,
    title: 'Digital Survey & Approvals',
    description: 'High-precision digital boundary survey, DTCP & CMDA layout clearances, and patta/chitta transfers.',
    color: '#0D5C3A',
    bg: '#ECFDF5',
    border: 'hover:border-[#10B981]',
  },
  {
    icon: Users,
    title: 'Strategic Consultation',
    description: 'Tailored property advisory for buyers, sellers, and investors backed by decades of Tamil Nadu market expertise.',
    color: '#1A335E',
    bg: '#EEF2FF',
    border: 'hover:border-[#1A335E]',
  },
];

const PropertyServices = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.service-item',
        { y: 20, opacity: 0 },
        {
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 85%',
          },
          y: 0,
          opacity: 1,
          duration: 0.5,
          stagger: 0.08,
          ease: 'power2.out',
        }
      );
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="property-services" className="py-8 md:py-10 bg-white relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        
        {/* Section Header - Compact */}
        <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4 mb-6 md:mb-8 pb-3 border-b border-gray-100">
          <div>
            <span className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-[#1A335E]/5 text-[#1A335E] font-bold tracking-widest uppercase text-[11px] mb-1.5">
              <Sparkles size={11} className="text-[#D6B97B]" />
              Professional Real Estate Services
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-[#1A335E]">
              End-to-End Property <span className="gold-gradient">Solutions</span>
            </h2>
          </div>
          <Link
            to="/services"
            id="home-explore-services-btn"
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#1A335E] hover:bg-[#D6B97B] text-white hover:text-[#0D1B2A] rounded-full font-bold uppercase tracking-widest text-[11px] transition-all duration-300 shadow-sm hover:scale-105 no-underline group shrink-0"
          >
            <span>Explore All Services</span>
            <ArrowRight size={13} className="transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </div>

        {/* 4 Key Services Grid - Compact */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {keyServices.map((svc, i) => {
            const Icon = svc.icon;
            return (
              <Link
                key={i}
                to="/services"
                className={`service-item group bg-slate-50/70 hover:bg-white rounded-2xl p-5 border border-gray-200/80 shadow-2xs ${svc.border} hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5 flex flex-col justify-between no-underline`}
              >
                <div>
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center mb-3 transition-all duration-300 group-hover:scale-105 shadow-2xs"
                    style={{ backgroundColor: svc.bg }}
                  >
                    <Icon size={19} style={{ color: svc.color }} />
                  </div>
                  <h3 className="text-[#1A335E] font-serif font-bold text-base mb-1.5 group-hover:text-[#B8922E] transition-colors duration-300">
                    {svc.title}
                  </h3>
                  <p className="text-gray-500 text-xs leading-relaxed">
                    {svc.description}
                  </p>
                </div>

                <div className="pt-3 mt-3 border-t border-gray-200/50 flex items-center gap-1 text-[11px] font-bold text-[#1A335E] group-hover:text-[#D6B97B] transition-colors">
                  <span>Learn more</span>
                  <ArrowUpRight size={13} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default PropertyServices;
