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
    description: 'Comprehensive title deed scrutiny, encumbrance checks, and legal clearance backed by senior advocates.',
    color: '#1A335E',
    bg: '#EEF2FF',
  },
  {
    icon: FileCheck,
    title: 'Registration & Documentation',
    description: 'End-to-end assistance with sale deeds, stamp duty calculations, and sub-registrar office registration.',
    color: '#D6B97B',
    bg: '#FDF8EE',
  },
  {
    icon: Compass,
    title: 'Digital Survey & Land Approvals',
    description: 'Accurate boundary digital surveys, DTCP/CMDA layout approvals, and patta/chitta transfers.',
    color: '#16a34a',
    bg: '#F0FDF4',
  },
  {
    icon: Users,
    title: 'Expert Property Consultation',
    description: 'Strategic advisory for buyers, sellers, and investors with in-depth Tamil Nadu real estate market insights.',
    color: '#7c3aed',
    bg: '#F5F3FF',
  },
];

const PropertyServices = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.service-item',
        { y: 25, opacity: 0 },
        {
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 80%',
          },
          y: 0,
          opacity: 1,
          duration: 0.6,
          stagger: 0.1,
          ease: 'power2.out',
        }
      );
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="property-services" className="py-12 md:py-16 bg-slate-50 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#1A335E]/3 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 space-y-3">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#1A335E]/5 text-[#D6B97B] font-bold tracking-widest uppercase text-xs">
            <Sparkles size={12} className="text-[#D6B97B]" />
            Our Comprehensive Solutions
          </span>
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-[#1A335E]">
            End-to-End Property <span className="gold-gradient">Services</span>
          </h2>
          <p className="text-gray-600 text-sm md:text-base leading-relaxed">
            From legal verification and digital survey to registration and property advisory, Lands N Deeds handles every aspect of your real estate journey with complete transparency.
          </p>
        </div>

        {/* 4 Key Services Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-10">
          {keyServices.map((svc, i) => {
            const Icon = svc.icon;
            return (
              <div
                key={i}
                className="service-item group bg-white rounded-2xl p-6 border border-gray-200/80 shadow-sm hover:border-[#D6B97B] hover:shadow-lg transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between"
              >
                <div>
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 transition-all duration-300 group-hover:scale-105"
                    style={{ backgroundColor: svc.bg }}
                  >
                    <Icon size={22} style={{ color: svc.color }} />
                  </div>
                  <h3 className="text-[#1A335E] font-serif font-bold text-base md:text-lg mb-2 group-hover:text-[#D6B97B] transition-colors duration-300">
                    {svc.title}
                  </h3>
                  <p className="text-gray-500 text-xs md:text-sm leading-relaxed">
                    {svc.description}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-gray-100 flex items-center gap-1 text-xs font-bold text-[#1A335E] group-hover:text-[#D6B97B] transition-colors">
                  <span>View Details</span>
                  <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </div>
              </div>
            );
          })}
        </div>

        {/* Link to Services Page */}
        <div className="text-center pt-2">
          <Link
            to="/services"
            id="home-explore-services-btn"
            className="inline-flex items-center gap-2.5 px-8 py-3.5 bg-[#1A335E] hover:bg-[#D6B97B] text-white hover:text-[#0D1B2A] rounded-full font-bold uppercase tracking-widest text-xs transition-all duration-300 shadow-md hover:scale-105 no-underline group"
          >
            <span>Explore All Services & Full Process</span>
            <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default PropertyServices;
