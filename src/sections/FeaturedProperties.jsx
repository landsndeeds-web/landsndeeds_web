import { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Bed, Bath, Move, ArrowUpRight } from 'lucide-react';
import { properties } from '../data/content';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import prop1 from '../assets/property1.webp';
import prop2 from '../assets/property2.webp';

gsap.registerPlugin(ScrollTrigger);

const FeaturedProperties = () => {
  const containerRef = useRef(null);
  
  const propertyImages = {
    property1: prop1,
    property2: prop2
  };

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(".property-card",
        { y: 30, opacity: 0 },
        {
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 80%",
          },
          y: 0,
          opacity: 1,
          duration: 0.7,
          stagger: 0.15,
          ease: "power2.out"
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} id="properties" className="py-10 md:py-14 bg-white relative">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end gap-4 mb-8 md:mb-10">
          <div className="space-y-2">
            <span className="inline-block px-3 py-1 rounded-full bg-[#1A335E]/5 text-[#D6B97B] font-bold tracking-widest uppercase text-xs">Curated Selection</span>
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-[#1A335E]">
              Featured <span className="gold-gradient">Properties</span>
            </h2>
          </div>
          <p className="text-gray-500 max-w-md md:text-right hidden md:block text-sm leading-relaxed">
            Discover carefully selected properties in well-connected locations across Tamil Nadu. Explore options that suit your budget, lifestyle, or investment goals.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {properties.map((property) => (
            <div 
              key={property.id} 
              className="property-card group cursor-pointer relative overflow-hidden rounded-2xl shadow-md border border-gray-100 hover:shadow-xl transition-all duration-300"
            >
              {/* Image Container */}
              <div className="aspect-[16/10] overflow-hidden relative">
                <img 
                  src={propertyImages[property.image]} 
                  alt={property.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-[#D6B97B] text-[#0F0F0F] font-bold text-xs rounded-md shadow-md uppercase tracking-wider">
                    Verified
                  </span>
                </div>
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <h3 className="!text-white text-xl md:text-2xl font-serif font-bold mb-1">
                    {property.title}
                  </h3>
                  <p className="text-white/80 text-xs md:text-sm font-medium">{property.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 flex justify-center">
          <Link to="/properties" className="px-8 py-3 border-2 border-[#1A335E] text-[#1A335E] hover:bg-[#1A335E] hover:text-white rounded-full font-bold uppercase tracking-widest text-xs transition-all duration-300 flex items-center gap-2 no-underline shadow-sm">
            View All Properties
            <ArrowUpRight size={15} />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProperties;
