import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Building2, Home, Trees, Warehouse, KeyRound, TrendingUp, ArrowUpRight } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const categories = [
  {
    id: 1,
    icon: Home,
    title: 'Residential Properties',
    description: 'Apartments, Individual Villas & Gated Plots',
    tags: ['Apartments', 'Villas', 'Approved Plots'],
    color: '#1A335E',
    lightColor: '#EEF2FF',
    accentBorder: 'hover:border-[#1A335E]',
    badgeBg: 'bg-blue-50 text-[#1A335E]',
  },
  {
    id: 2,
    icon: Building2,
    title: 'Commercial Spaces',
    description: 'Retail Shops, Corporate Offices & Showrooms',
    tags: ['Retail Shops', 'Office Space', 'Showrooms'],
    color: '#B8922E',
    lightColor: '#FDF8EE',
    accentBorder: 'hover:border-[#D6B97B]',
    badgeBg: 'bg-amber-50 text-[#B8922E]',
  },
  {
    id: 3,
    icon: Trees,
    title: 'Agricultural Land',
    description: 'Fertile Farmlands, Coconut & Mango Groves',
    tags: ['Farm Lands', 'Coconut Groves', 'Estate Land'],
    color: '#0D5C3A',
    lightColor: '#ECFDF5',
    accentBorder: 'hover:border-[#10B981]',
    badgeBg: 'bg-emerald-50 text-[#0D5C3A]',
  },
  {
    id: 4,
    icon: KeyRound,
    title: 'Rental & Lease Assets',
    description: 'Residential Homes & Commercial Rentals',
    tags: ['Long-Term Lease', 'Offices', 'Warehouses'],
    color: '#1A335E',
    lightColor: '#EEF2FF',
    accentBorder: 'hover:border-[#1A335E]',
    badgeBg: 'bg-blue-50 text-[#1A335E]',
  },
  {
    id: 5,
    icon: TrendingUp,
    title: 'High-Yield Investments',
    description: 'DTCP/CMDA Layouts in Rapid Growth Corridors',
    tags: ['Emerging Corridors', 'DTCP Plots', 'ROI Focus'],
    color: '#B8922E',
    lightColor: '#FDF8EE',
    accentBorder: 'hover:border-[#D6B97B]',
    badgeBg: 'bg-amber-50 text-[#B8922E]',
  },
  {
    id: 6,
    icon: Warehouse,
    title: 'Industrial & Warehouses',
    description: 'SIPCOT Plots, Factory Sheds & Logistics Hubs',
    tags: ['SIPCOT Lands', 'Factory Sheds', 'Logistics'],
    color: '#0D5C3A',
    lightColor: '#ECFDF5',
    accentBorder: 'hover:border-[#10B981]',
    badgeBg: 'bg-emerald-50 text-[#0D5C3A]',
  },
];

const PropertyCategories = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.category-card',
        { y: 25, opacity: 0 },
        {
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 85%',
          },
          y: 0,
          opacity: 1,
          duration: 0.5,
          stagger: 0.06,
          ease: 'power2.out',
        }
      );
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="property-categories" className="py-8 md:py-10 bg-white relative overflow-hidden">
      {/* Subtle background decoration */}
      <div className="absolute inset-0 opacity-[0.015]" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%231A335E' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")" }} />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header - Compact Spacing */}
        <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4 mb-6 md:mb-8 pb-3 border-b border-gray-100">
          <div>
            <span className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-[#1A335E]/5 text-[#1A335E] font-bold tracking-widest uppercase text-[11px] mb-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#D6B97B]" />
              Portfolio Overview
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-[#1A335E]">
              Explore Property <span className="gold-gradient">Categories</span>
            </h2>
          </div>
          <Link
            to="/properties"
            className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#1A335E] hover:text-[#D6B97B] transition-colors shrink-0 no-underline group"
          >
            <span>View All Categories</span>
            <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform text-[#D6B97B]" />
          </Link>
        </div>

        {/* Categories Grid - Compact, Rich, Unified Palette */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
          {categories.map((cat) => {
            const Icon = cat.icon;
            return (
              <Link
                key={cat.id}
                to="/properties"
                className={`category-card group relative bg-slate-50/70 hover:bg-white rounded-2xl border border-gray-200/80 p-5 ${cat.accentBorder} hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5 overflow-hidden block no-underline`}
              >
                {/* Top accent line */}
                <div
                  className="absolute top-0 left-0 w-full h-[3px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-t-2xl"
                  style={{ background: `linear-gradient(90deg, transparent, ${cat.color}, transparent)` }}
                />

                <div className="flex items-start justify-between mb-3">
                  {/* Icon */}
                  <div
                    className="w-11 h-11 rounded-xl flex items-center justify-center transition-transform duration-300 group-hover:scale-105 shadow-2xs"
                    style={{ backgroundColor: cat.lightColor }}
                  >
                    <Icon size={20} style={{ color: cat.color }} />
                  </div>

                  {/* Arrow Indicator */}
                  <div className="w-7 h-7 rounded-full bg-white flex items-center justify-center border border-gray-100 shadow-2xs group-hover:bg-[#1A335E] group-hover:text-white transition-all">
                    <ArrowUpRight size={13} className="text-gray-400 group-hover:text-[#D6B97B] transition-colors" />
                  </div>
                </div>

                {/* Text */}
                <h3 className="text-[#1A335E] font-serif font-bold text-base mb-1 group-hover:text-[#B8922E] transition-colors duration-300">
                  {cat.title}
                </h3>
                <p className="text-gray-500 text-xs mb-3 leading-relaxed">{cat.description}</p>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 pt-2 border-t border-gray-200/50">
                  {cat.tags.map((tag) => (
                    <span
                      key={tag}
                      className={`px-2 py-0.5 rounded-md text-[10px] font-semibold ${cat.badgeBg} border border-transparent`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default PropertyCategories;
