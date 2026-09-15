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
    tags: ['Apartments', 'Villas', 'Plots'],
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
    tags: ['Shops', 'Office Space', 'Showrooms'],
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
    tags: ['Farm Land', 'Coconut Groves', 'Estates'],
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
        { y: 20, opacity: 0 },
        {
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 85%',
          },
          y: 0,
          opacity: 1,
          duration: 0.45,
          stagger: 0.05,
          ease: 'power2.out',
        }
      );
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="property-categories" className="py-5 md:py-7 bg-white relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header - Compact */}
        <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-2 mb-4 pb-2 border-b border-gray-100">
          <div>
            <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#1A335E]/5 text-[#1A335E] font-bold tracking-widest uppercase text-[10px] mb-1">
              <span className="w-1.5 h-1.5 rounded-full bg-[#D6B97B]" />
              Portfolio Overview
            </span>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-serif font-bold text-[#1A335E]">
              Explore Property <span className="gold-gradient">Categories</span>
            </h2>
          </div>
          <Link
            to="/properties"
            className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#1A335E] hover:text-[#D6B97B] transition-colors shrink-0 no-underline group"
          >
            <span>View All Categories</span>
            <ArrowUpRight size={13} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform text-[#D6B97B]" />
          </Link>
        </div>

        {/* Categories Grid - Compact Height */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-3.5">
          {categories.map((cat) => {
            const Icon = cat.icon;
            return (
              <Link
                key={cat.id}
                to="/properties"
                className={`category-card group relative bg-slate-50/70 hover:bg-white rounded-xl border border-gray-200/80 p-3.5 sm:p-4 ${cat.accentBorder} hover:shadow-md transition-all duration-300 hover:-translate-y-0.5 overflow-hidden block no-underline`}
              >
                {/* Top accent line */}
                <div
                  className="absolute top-0 left-0 w-full h-[2.5px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-t-xl"
                  style={{ background: `linear-gradient(90deg, transparent, ${cat.color}, transparent)` }}
                />

                <div className="flex items-center justify-between mb-2">
                  {/* Icon */}
                  <div
                    className="w-9 h-9 rounded-lg flex items-center justify-center transition-transform duration-300 group-hover:scale-105 shadow-2xs"
                    style={{ backgroundColor: cat.lightColor }}
                  >
                    <Icon size={17} style={{ color: cat.color }} />
                  </div>

                  {/* Arrow Indicator */}
                  <div className="w-6 h-6 rounded-full bg-white flex items-center justify-center border border-gray-100 shadow-2xs group-hover:bg-[#1A335E] group-hover:text-white transition-all">
                    <ArrowUpRight size={11} className="text-gray-400 group-hover:text-[#D6B97B] transition-colors" />
                  </div>
                </div>

                {/* Text */}
                <h3 className="text-[#1A335E] font-serif font-bold text-sm sm:text-base mb-0.5 group-hover:text-[#B8922E] transition-colors duration-300">
                  {cat.title}
                </h3>
                <p className="text-gray-500 text-[11px] sm:text-xs mb-2 leading-snug">{cat.description}</p>

                {/* Tags */}
                <div className="flex flex-wrap gap-1 pt-1.5 border-t border-gray-200/50">
                  {cat.tags.map((tag) => (
                    <span
                      key={tag}
                      className={`px-1.5 py-0.5 rounded text-[9px] sm:text-[10px] font-semibold ${cat.badgeBg} border border-transparent`}
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
