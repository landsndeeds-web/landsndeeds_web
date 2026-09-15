import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Star, CheckCircle2, ArrowRight, ShieldCheck } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import property5 from '../assets/property5.webp';

gsap.registerPlugin(ScrollTrigger);

const advantages = [
  { text: '100% Verified & Title-Clear Listings', iconColor: 'text-[#10B981]', border: 'hover:border-[#10B981]/50' },
  { text: 'In-Depth Tamil Nadu Real Estate Expertise', iconColor: 'text-[#D6B97B]', border: 'hover:border-[#D6B97B]/50' },
  { text: 'End-to-End Legal & Registration Support', iconColor: 'text-[#10B981]', border: 'hover:border-[#10B981]/50' },
  { text: 'Transparent Advisory & Zero Hidden Costs', iconColor: 'text-[#D6B97B]', border: 'hover:border-[#D6B97B]/50' },
];

const WhyChooseUs = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.advantage-fade-in',
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
    <section ref={sectionRef} id="why-choose-us" className="py-8 md:py-10 bg-slate-50 relative overflow-hidden">
      {/* Decorative subtle background glow */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-[#D6B97B]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#10B981]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-12 gap-6 lg:gap-10 items-center">
          
          {/* Left Column: Image with Compact Aspect Ratio */}
          <div className="lg:col-span-5 relative aspect-[16/10] w-full rounded-2xl overflow-hidden shadow-xl group border border-gray-100 advantage-fade-in">
            <img
              src={property5}
              alt="Why Choose Lands N Deeds"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0D1B2A]/80 via-transparent to-transparent" />
            
            {/* Floating Trust Badge */}
            <div className="absolute bottom-3 left-3 right-3 bg-white/95 backdrop-blur-md rounded-xl p-3 shadow-lg border border-white/60 flex items-center justify-between">
              <div>
                <p className="text-[#1A335E] font-serif font-bold text-xs">
                  Trusted Across Tamil Nadu
                </p>
                <div className="flex items-center gap-1 mt-0.5">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <Star key={i} size={10} className="text-[#D6B97B] fill-[#D6B97B]" />
                  ))}
                  <span className="text-gray-500 text-[10px] font-semibold ml-1">Verified Client Ratings</span>
                </div>
              </div>
              <div className="px-2.5 py-1 rounded-lg bg-[#0D5C3A]/10 text-[#0D5C3A] text-[11px] font-bold">
                100% Secure
              </div>
            </div>
          </div>

          {/* Right Column: Simplified Content */}
          <div className="lg:col-span-7 space-y-4 advantage-fade-in">
            <span className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-[#D6B97B]/15 text-[#B8922E] font-bold tracking-widest uppercase text-[11px]">
              <ShieldCheck size={12} className="text-[#0D5C3A]" />
              The Lands N Deeds Advantage
            </span>

            <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-[#1A335E] leading-tight">
              Why Buyers, Sellers & Investors Choose <span className="gold-gradient">Lands N Deeds</span>
            </h2>

            <p className="text-gray-600 leading-relaxed text-xs sm:text-sm font-normal">
              Finding the right property is more than just comparing prices. We prioritize clarity, legal transparency, and end-to-end guidance so every client can invest and transact with complete peace of mind.
            </p>

            {/* Key Advantages Grid */}
            <div className="grid sm:grid-cols-2 gap-2.5 pt-1">
              {advantages.map((item, index) => (
                <div
                  key={index}
                  className={`flex items-center gap-2.5 p-2.5 rounded-xl bg-white border border-gray-200/80 shadow-2xs transition-colors ${item.border}`}
                >
                  <CheckCircle2 size={16} className={`${item.iconColor} shrink-0`} />
                  <span className="text-xs font-semibold text-[#1A335E]">
                    {item.text}
                  </span>
                </div>
              ))}
            </div>

            {/* CTA Link */}
            <div className="pt-1 flex items-center gap-4">
              <Link
                to="/about"
                id="why-choose-us-learn-more"
                className="inline-flex items-center gap-2 text-xs font-bold text-[#1A335E] hover:text-[#B8922E] transition-colors uppercase tracking-wider group no-underline"
              >
                <span>Learn more about our advisory approach</span>
                <ArrowRight size={13} className="transition-transform duration-300 group-hover:translate-x-1 text-[#D6B97B]" />
              </Link>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
