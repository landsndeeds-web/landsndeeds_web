import { useEffect, useRef } from 'react';
import { ShieldCheck, Star, Handshake, FileText, TrendingUp, HeadphonesIcon, FileCheck, Scale, Users, BadgeCheck, Headphones } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import property5 from '../assets/property5.webp';

const whyChooseItems = [
  {
    title: 'Verified Property Listings',
    desc: 'Every property undergoes strict physical inspection and title check before listing.',
    icon: ShieldCheck
  },
  {
    title: 'Transparent Buying Process',
    desc: 'No hidden charges, direct owner negotiations, and clear legal documentation.',
    icon: FileCheck
  },
  {
    title: 'Professional Property Guidance',
    desc: 'Advised by seasoned real estate, land valuation, and revenue law experts.',
    icon: Scale
  },
  {
    title: 'Buy • Sell • Lease Support',
    desc: 'End-to-end management for buying, selling, leasing residential & commercial lands.',
    icon: Users
  },
  {
    title: 'Investment Consultation',
    desc: 'Strategic property growth advisory backed by eminent former revenue & registration officials.',
    icon: BadgeCheck
  },
  {
    title: 'Documentation Assistance',
    desc: 'Hassle-free support for Patta transfer, Chitta, FMB sketch, and EC verification.',
    icon: Headphones
  }
];

gsap.registerPlugin(ScrollTrigger);

const whyPoints = [
  {
    icon: ShieldCheck,
    title: 'Verified Property Listings',
    description: 'Every listing is checked and verified for authenticity and legal clarity.',
  },
  {
    icon: Star,
    title: 'Professional Guidance',
    description: 'Expert consultants with in-depth knowledge of Tamil Nadu real estate.',
  },
  {
    icon: Handshake,
    title: 'Buying, Selling & Leasing Support',
    description: 'End-to-end assistance for all types of property transactions.',
  },
  {
    icon: FileText,
    title: 'Property Documentation Assistance',
    description: 'Help with legal documents, title deeds, and registration processes.',
  },
  {
    icon: TrendingUp,
    title: 'Investment Consultation',
    description: 'Strategic guidance to maximize returns on your property investments.',
  },
  {
    icon: HeadphonesIcon,
    title: 'End-to-End Customer Support',
    description: 'We stay with you from property search to successful transaction closure.',
  },
];

const WhyChooseUs = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.why-card', 
        { y: 30, opacity: 0 },
        {
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 80%',
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
    <section ref={sectionRef} id="why-choose-us" className="py-10 md:py-14 bg-slate-50 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#D6B97B]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-10 items-center mb-8 md:mb-10">
          {/* Image */}
          <div className="lg:col-span-5 relative aspect-[16/11] w-full rounded-2xl overflow-hidden shadow-xl group order-2 lg:order-1 border border-gray-100">
            <img
              src={property5}
              alt="Why Choose Lands N Deeds"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#1A335E]/70 via-transparent to-transparent" />
            {/* Floating badge */}
            <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md rounded-xl p-3.5 shadow-lg border border-white/50">
              <p className="text-[#1A335E] font-serif font-bold text-xs md:text-sm">Trusted by buyers, sellers & investors across Tamil Nadu</p>
              <div className="flex items-center gap-1.5 mt-1.5">
                {[1,2,3,4,5].map(i => (
                  <Star key={i} size={11} className="text-[#D6B97B] fill-[#D6B97B]" />
                ))}
                <span className="text-gray-500 text-[11px] font-semibold ml-1">Verified Client Ratings</span>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="lg:col-span-7 space-y-4 order-1 lg:order-2">
            <span className="inline-block px-3 py-1 rounded-full bg-[#D6B97B]/15 text-[#B8922E] font-bold tracking-widest uppercase text-xs">
              The Lands N Deeds Advantage
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-[#1A335E] leading-tight">
              Why Buyers, Sellers & Investors Choose{' '}
              <span className="gold-gradient">Lands N Deeds</span>
            </h2>
            <p className="text-gray-600 leading-relaxed text-base font-normal">
              Finding the right property is more than just comparing prices. We focus on clarity, transparency, and professional guidance to help every client make confident real estate decisions.
            </p>
            <div className="pt-3 border-t border-gray-200/80">
              <p className="text-gray-500 italic text-xs md:text-sm leading-relaxed">
                At Lands N Deeds, we prioritise quality and legal transparency. Your real estate journey will be seamless, secure, and stress-free.
              </p>
            </div>
          </div>
        </div>

        {/* 6-Card Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
          {whyPoints.map((point, i) => {
            const Icon = point.icon;
            return (
              <div
                key={i}
                className="why-card group relative bg-white p-5 md:p-6 rounded-xl border border-gray-200/70 shadow-sm hover:border-[#D6B97B] hover:shadow-lg transition-all duration-300 hover:-translate-y-1 overflow-hidden"
              >
                {/* Top glow line */}
                <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-[#D6B97B] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-t-xl" />

                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-lg bg-[#1A335E]/5 flex items-center justify-center text-[#1A335E] group-hover:bg-[#1A335E] group-hover:text-[#D6B97B] transition-all duration-300 shrink-0">
                    <Icon size={18} />
                  </div>
                  <div>
                    <h3 className="text-[#1A335E] font-serif font-bold text-sm md:text-base mb-1 group-hover:text-[#D6B97B] transition-colors duration-300">
                      ✓ {point.title}
                    </h3>
                    <p className="text-gray-500 text-xs md:text-sm leading-relaxed">{point.description}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
