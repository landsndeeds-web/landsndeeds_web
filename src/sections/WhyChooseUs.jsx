import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, Star, CheckCircle2, ArrowRight } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import property5 from '../assets/property5.webp';

gsap.registerPlugin(ScrollTrigger);

const advantages = [
  '100% Verified & Title-Clear Listings',
  'In-Depth Tamil Nadu Real Estate Expertise',
  'End-to-End Legal & Registration Support',
  'Transparent & Dedicated Advisory',
];

const WhyChooseUs = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.advantage-fade-in',
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
    <section ref={sectionRef} id="why-choose-us" className="py-12 md:py-16 bg-slate-50 relative overflow-hidden">
      {/* Decorative subtle background glow */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#D6B97B]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Image */}
          <div className="lg:col-span-5 relative aspect-[16/11] w-full rounded-2xl overflow-hidden shadow-xl group border border-gray-100 advantage-fade-in">
            <img
              src={property5}
              alt="Why Choose Lands N Deeds"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#1A335E]/70 via-transparent to-transparent" />
            
            {/* Floating badge */}
            <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md rounded-xl p-3.5 shadow-lg border border-white/50">
              <p className="text-[#1A335E] font-serif font-bold text-xs md:text-sm">
                Trusted by buyers, sellers & investors across Tamil Nadu
              </p>
              <div className="flex items-center gap-1.5 mt-1.5">
                {[1, 2, 3, 4, 5].map((i) => (
                  <Star key={i} size={11} className="text-[#D6B97B] fill-[#D6B97B]" />
                ))}
                <span className="text-gray-500 text-[11px] font-semibold ml-1">Verified Client Ratings</span>
              </div>
            </div>
          </div>

          {/* Right Column: Simplified Content */}
          <div className="lg:col-span-7 space-y-5 advantage-fade-in">
            <span className="inline-block px-3 py-1 rounded-full bg-[#D6B97B]/15 text-[#B8922E] font-bold tracking-widest uppercase text-xs">
              The Lands N Deeds Advantage
            </span>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-[#1A335E] leading-tight">
              Why Buyers, Sellers & Investors Choose <span className="gold-gradient">Lands N Deeds</span>
            </h2>

            <p className="text-gray-600 leading-relaxed text-sm md:text-base font-normal">
              Finding the right property is more than just comparing prices. We prioritize clarity, legal transparency, and end-to-end guidance so every client can invest and transact with complete peace of mind.
            </p>

            {/* Key Advantages Grid */}
            <div className="grid sm:grid-cols-2 gap-3 pt-2">
              {advantages.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center gap-2.5 p-3 rounded-xl bg-white border border-gray-200/80 shadow-sm"
                >
                  <CheckCircle2 size={18} className="text-[#D6B97B] shrink-0" />
                  <span className="text-xs md:text-sm font-medium text-[#1A335E]">
                    {item}
                  </span>
                </div>
              ))}
            </div>

            {/* CTA Link */}
            <div className="pt-2 flex items-center gap-4">
              <Link
                to="/about"
                id="why-choose-us-learn-more"
                className="inline-flex items-center gap-2 text-xs md:text-sm font-bold text-[#1A335E] hover:text-[#D6B97B] transition-colors uppercase tracking-wider group no-underline"
              >
                <span>Learn more about our advisory approach</span>
                <ArrowRight size={14} className="transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
