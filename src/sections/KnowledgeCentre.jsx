import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, FileText, TrendingUp, Scale, ArrowRight, Sparkles } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const topics = [
  { label: 'Title Verification Guides', icon: BookOpen, accent: 'border-blue-100 text-[#1A335E]' },
  { label: 'Sale Deed, EC & Patta Laws', icon: FileText, accent: 'border-amber-100 text-[#B8922E]' },
  { label: 'Market Investment Trends', icon: TrendingUp, accent: 'border-emerald-100 text-[#0D5C3A]' },
  { label: 'Stamp Duty & Registration', icon: Scale, accent: 'border-blue-100 text-[#1A335E]' },
];

const KnowledgeCentre = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.knowledge-fade-in',
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
    <section ref={sectionRef} id="knowledge-centre" className="py-8 md:py-10 bg-slate-50 relative overflow-hidden">
      {/* Decorative background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#D6B97B]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="bg-gradient-to-br from-[#1A335E]/8 via-[#D6B97B]/10 to-[#0D5C3A]/10 border border-[#1A335E]/10 rounded-2xl md:rounded-3xl p-6 md:p-8 shadow-sm relative overflow-hidden">
          
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
            
            {/* Left Column */}
            <div className="space-y-3 text-center lg:text-left max-w-2xl knowledge-fade-in">
              <span className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-[#1A335E]/10 text-[#1A335E] font-bold tracking-widest uppercase text-[11px]">
                <Sparkles size={11} className="text-[#D6B97B]" />
                Legal & Real Estate Insights
              </span>

              <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-[#1A335E] leading-tight">
                Property Knowledge <span className="gold-gradient">Centre</span>
              </h2>

              <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                Make confident property decisions with practical guides, legal document breakdowns, emerging zone updates, and advisory insights prepared by our legal and real estate specialists.
              </p>

              {/* Topic Chips */}
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2 pt-1">
                {topics.map((t, idx) => {
                  const Icon = t.icon;
                  return (
                    <span
                      key={idx}
                      className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-white border ${t.accent} text-xs font-semibold shadow-2xs`}
                    >
                      <Icon size={12} className="text-[#D6B97B]" />
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
                className="inline-flex items-center gap-2 px-7 py-3 bg-[#1A335E] hover:bg-[#D6B97B] text-white hover:text-[#0D1B2A] rounded-full font-bold uppercase tracking-widest text-xs transition-all duration-300 shadow-md hover:scale-105 no-underline group"
              >
                <span>Explore All Articles</span>
                <ArrowRight size={14} className="transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default KnowledgeCentre;
