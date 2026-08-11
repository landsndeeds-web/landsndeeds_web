import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Building2, Home, Leaf, BarChart3, Warehouse, Users, TrendingUp, ArrowUpRight } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const categories = [
  {
    id: 1,
    icon: Home,
    title: 'Residential Properties',
    description: 'Apartments, Villas & Plots',
    tags: ['Apartments', 'Villas', 'Plots & Land'],
    color: '#1A335E',
    lightColor: '#EEF2FF',
  },
  {
    id: 2,
    icon: Building2,
    title: 'Commercial Spaces',
    description: 'Shops, Offices & Showrooms',
    tags: ['Retail Shops', 'Office Space', 'Showrooms'],
    color: '#D6B97B',
    lightColor: '#FDF8EE',
  },
  {
    id: 3,
    icon: Leaf,
    title: 'Agricultural Land',
    description: 'Farm & Cultivation Land',
    tags: ['Farm Land', 'Mango Groves', 'Coconut Groves'],
    color: '#16a34a',
    lightColor: '#F0FDF4',
  },
  {
    id: 4,
    icon: Users,
    title: 'Rental Properties',
    description: 'Residential & Commercial Rentals',
    tags: ['Apartments', 'Houses', 'Commercial Units'],
    color: '#7c3aed',
    lightColor: '#F5F3FF',
  },
  {
    id: 5,
    icon: TrendingUp,
    title: 'Investment Opportunities',
    description: 'High-Return Property Investments',
    tags: ['DTCP Plots', 'Emerging Areas', 'Long-Term Assets'],
    color: '#dc2626',
    lightColor: '#FFF1F2',
  },
  {
    id: 6,
    icon: Warehouse,
    title: 'Industrial Properties',
    description: 'Warehouses & Factory Spaces',
    tags: ['Warehouses', 'SIPCOT Plots', 'Factory Sheds'],
    color: '#0891b2',
    lightColor: '#ECFEFF',
  },
];

const PropertyCategories = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.category-card',
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
    <section ref={sectionRef} id="property-categories" className="py-10 md:py-14 bg-white relative overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-[0.02]" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%231A335E' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")" }} />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-8 md:mb-10 space-y-2">
          <span className="inline-block px-3 py-1 rounded-full bg-[#1A335E]/5 text-[#D6B97B] font-bold tracking-widest uppercase text-xs">
            Property Types
          </span>
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-[#1A335E]">
            Explore Property <span className="gold-gradient">Categories</span>
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto text-sm md:text-base leading-relaxed">
            Choose from a wide range of verified properties designed for different needs and budgets.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {categories.map((cat) => {
            const Icon = cat.icon;
            return (
              <div
                key={cat.id}
                className="category-card group relative bg-white rounded-xl border border-gray-200/80 p-6 hover:border-[#D6B97B] hover:shadow-lg transition-all duration-300 hover:-translate-y-1 overflow-hidden cursor-pointer"
              >
                {/* Top accent line */}
                <div className="absolute top-0 left-0 w-full h-[3px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-t-xl" style={{ background: `linear-gradient(90deg, transparent, ${cat.color}, transparent)` }} />

                {/* Icon */}
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-105"
                  style={{ backgroundColor: cat.lightColor }}
                >
                  <Icon size={22} style={{ color: cat.color }} />
                </div>

                {/* Text */}
                <h3 className="text-[#1A335E] font-serif font-bold text-base md:text-lg mb-1 group-hover:text-[#D6B97B] transition-colors duration-300">
                  {cat.title}
                </h3>
                <p className="text-gray-500 text-xs md:text-sm mb-3.5">{cat.description}</p>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5">
                  {cat.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 rounded-md text-[10px] font-semibold bg-gray-100/80 text-gray-600 border border-gray-200/60"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Arrow indicator */}
                <div className="absolute top-5 right-5 w-7 h-7 rounded-full bg-gray-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:bg-[#D6B97B]">
                  <ArrowUpRight size={14} className="text-gray-400 group-hover:text-white transition-colors" />
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="mt-8 text-center">
          <Link
            to="/properties"
            id="categories-view-all-btn"
            className="inline-flex items-center gap-2 px-8 py-3 bg-[#1A335E] hover:bg-[#D6B97B] text-white hover:text-[#0F0F0F] rounded-full font-bold uppercase tracking-widest text-xs transition-all duration-300 hover:scale-[1.02] shadow-md no-underline"
          >
            View All Properties
            <ArrowUpRight size={15} />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default PropertyCategories;
