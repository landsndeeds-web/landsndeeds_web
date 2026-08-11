import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Search, TrendingUp, Home, FileText, BarChart2, Headphones, ArrowUpRight } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    id: 1,
    icon: Search,
    title: 'Buy Property',
    description:
      'Find verified residential, commercial, and agricultural properties across Tamil Nadu. We guide you from search to registration.',
    link: '/properties',
    cta: 'Browse Listings',
    color: '#1A335E',
    bg: '#EEF2FF',
  },
  {
    id: 2,
    icon: TrendingUp,
    title: 'Sell Property',
    description:
      'List your property with us and connect with genuine buyers. We handle marketing, verification, and documentation support.',
    link: '/contact',
    cta: 'List Your Property',
    color: '#D6B97B',
    bg: '#FDF8EE',
  },
  {
    id: 3,
    icon: Home,
    title: 'Lease Property',
    description:
      'Whether you want to lease out your property or find a rental, we connect landlords and tenants efficiently.',
    link: '/contact',
    cta: 'Find Lease Options',
    color: '#16a34a',
    bg: '#F0FDF4',
  },
  {
    id: 4,
    icon: Headphones,
    title: 'Property Consultation',
    description:
      'Get one-on-one expert advice from our consultants on property selection, valuation, and market trends.',
    link: '/contact',
    cta: 'Book Consultation',
    color: '#7c3aed',
    bg: '#F5F3FF',
  },
  {
    id: 5,
    icon: BarChart2,
    title: 'Investment Guidance',
    description:
      'Identify high-return investment opportunities with our market analysis, emerging zone reports, and ROI projections.',
    link: '/contact',
    cta: 'Explore Investment',
    color: '#dc2626',
    bg: '#FFF1F2',
  },
  {
    id: 6,
    icon: FileText,
    title: 'Documentation Support',
    description:
      'We assist with title deeds, encumbrance certificates, sale agreements, registration, and all legal documentation.',
    link: '/services',
    cta: 'Get Support',
    color: '#0891b2',
    bg: '#ECFEFF',
  },
];

const PropertyServices = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.service-card',
        { y: 30, opacity: 0 },
        {
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 85%',
          },
          y: 0,
          opacity: 1,
          duration: 0.6,
          stagger: 0.08,
          ease: 'power2.out',
        }
      );
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="property-services" className="py-10 md:py-14 bg-slate-50 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#1A335E]/3 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-8 md:mb-10 space-y-2">
          <span className="inline-block px-3 py-1 rounded-full bg-[#1A335E]/5 text-[#D6B97B] font-bold tracking-widest uppercase text-xs">
            Our Services
          </span>
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-[#1A335E]">
            Complete Property <span className="gold-gradient">Solutions</span>
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto text-sm md:text-base leading-relaxed">
            From finding your ideal property to selling or leasing existing assets, Lands N Deeds offers services designed to simplify every stage of your property journey.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((svc) => {
            const Icon = svc.icon;
            return (
              <div
                key={svc.id}
                className="service-card group relative bg-white rounded-xl border border-gray-200/80 p-6 hover:border-[#D6B97B] hover:shadow-lg transition-all duration-300 hover:-translate-y-1 overflow-hidden"
              >
                {/* Top accent bar */}
                <div
                  className="absolute top-0 left-0 w-full h-[3px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-t-xl"
                  style={{ background: `linear-gradient(90deg, transparent, ${svc.color}, transparent)` }}
                />

                {/* Icon */}
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 transition-all duration-300 group-hover:scale-105"
                  style={{ backgroundColor: svc.bg }}
                >
                  <Icon size={22} style={{ color: svc.color }} />
                </div>

                {/* Content */}
                <h3 className="text-[#1A335E] font-serif font-bold text-lg mb-2 group-hover:text-[#D6B97B] transition-colors duration-300">
                  {svc.title}
                </h3>
                <p className="text-gray-500 text-xs md:text-sm leading-relaxed mb-4">
                  {svc.description}
                </p>

                {/* CTA Link */}
                <Link
                  to={svc.link}
                  className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#1A335E] hover:text-[#D6B97B] transition-colors duration-300 group/link no-underline"
                >
                  {svc.cta}
                  <ArrowUpRight size={14} className="group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default PropertyServices;
