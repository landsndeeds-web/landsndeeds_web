import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, FileText, TrendingUp, Scale, ArrowRight, Sparkles } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const topics = [
  { label: 'Title Verification Guides', icon: BookOpen },
  { label: 'Sale Deed, EC & Patta Laws', icon: FileText },
  { label: 'Market Investment Trends', icon: TrendingUp },
  { label: 'Stamp Duty & Registration Rules', icon: Scale },
];

const KnowledgeCentre = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.knowledge-fade-in',
        { y: 25, opacity: 0 },
        {
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 85%',
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
    <section ref={sectionRef} id="knowledge-centre" className="py-12 md:py-16 bg-white relative overflow-hidden">
      {/* Decorative background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#D6B97B]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="bg-gradient-to-br from-[#1A335E]/5 via-[#D6B97B]/10 to-transparent border border-[#1A335E]/10 rounded-2xl md:rounded-3xl p-8 md:p-12 shadow-sm relative overflow-hidden">
          
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            
            {/* Left Column */}
            <div className="space-y-4 text-center lg:text-left max-w-2xl knowledge-fade-in">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#1A335E]/10 text-[#1A335E] font-bold tracking-widest uppercase text-xs">
                <Sparkles size={12} className="text-[#D6B97B]" />
                Expert Real Estate Insights
              </span>

              <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-[#1A335E] leading-tight">
                Property Knowledge <span className="gold-gradient">Centre</span>
              </h2>

              <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                Make confident property decisions with practical guides, legal document breakdowns, emerging zone updates, and advisory insights prepared by our legal and real estate specialists.
              </p>

              {/* Topic chips */}
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2 pt-2">
                {topics.map((t, idx) => {
                  const Icon = t.icon;
                  return (
                    <span
                      key={idx}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white border border-gray-200/80 text-gray-700 text-xs font-medium shadow-2xs"
                    >
                      <Icon size={13} className="text-[#D6B97B]" />
                      {t.label}
                    </span>
                  );
                })}
              </div>
            </div>

            {/* Right Column: CTA */}
            <div className="shrink-0 knowledge-fade-in">
              <Link
                to="/blogs"
                id="knowledge-centre-explore-btn"
                className="inline-flex items-center gap-2.5 px-8 py-4 bg-[#1A335E] hover:bg-[#D6B97B] text-white hover:text-[#0D1B2A] rounded-full font-bold uppercase tracking-widest text-xs md:text-sm transition-all duration-300 shadow-md hover:scale-105 no-underline group"
              >
                <span>Explore All Articles & Guides</span>
                <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default KnowledgeCentre;
