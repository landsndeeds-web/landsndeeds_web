import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, FileText, TrendingUp, Scale, ArrowRight, Sparkles } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const topics = [
  { label: 'Title Verification Guides', icon: BookOpen, bg: '#EFF3FA', color: '#1A335E', border: '#C5D3E8', iconColor: '#1A335E' },
  { label: 'Sale Deed, EC & Patta Laws', icon: FileText, bg: '#FEF9E7', color: '#7D5A0E', border: '#F0D88A', iconColor: '#B8860B' },
  { label: 'Market Investment Trends', icon: TrendingUp, bg: '#FEF9E7', color: '#7D5A0E', border: '#F0D88A', iconColor: '#C5A059' },
  { label: 'Stamp Duty & Registration', icon: Scale, bg: '#EFF3FA', color: '#1A335E', border: '#C5D3E8', iconColor: '#1A335E' },
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
    <section ref={sectionRef} id="knowledge-centre" className="pt-6 pb-8 md:pt-8 md:pb-10 relative overflow-hidden bg-gradient-to-b from-[#FAF8F2] via-white to-slate-50/80 border-t border-slate-200/80">
      {/* Decorative background glow */}
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full pointer-events-none" style={{ background: 'radial-gradient(circle,rgba(197,160,89,0.08) 0%,transparent 70%)', transform: 'translate(20%,-20%)' }} />
      <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full pointer-events-none" style={{ background: 'radial-gradient(circle,rgba(26,51,94,0.06) 0%,transparent 70%)', transform: 'translate(-20%,20%)' }} />

      <div className="container mx-auto px-6 relative z-10">
        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-slate-200/90 relative overflow-hidden">

          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">

            {/* Left Column */}
            <div className="space-y-4 text-center lg:text-left max-w-2xl knowledge-fade-in">
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-50 text-amber-900 font-extrabold tracking-wider uppercase text-xs sm:text-[13px] border border-amber-200/80 shadow-xs">
                <Sparkles size={14} className="text-[#C5A059]" />
                Legal & Real Estate Insights
              </span>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-['Plus_Jakarta_Sans',sans-serif] font-black text-[#0D1B2A] leading-tight tracking-tight">
                Property Knowledge <span className="bg-gradient-to-r from-[#B8860B] via-[#D4AF37] to-[#C5A059] bg-clip-text text-transparent">Centre</span>
              </h2>

              <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
                Make confident property decisions with practical guides, legal document breakdowns, emerging zone updates, and advisory insights prepared by our legal and real estate specialists.
              </p>

              {/* Topic Chips */}
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 pt-2">
                {topics.map((t, idx) => {
                  const Icon = t.icon;
                  return (
                    <span
                      key={idx}
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-bold shadow-2xs border transition-all hover:scale-105"
                      style={{
                        background: t.bg,
                        color: t.color,
                        borderColor: t.border,
                      }}
                    >
                      <Icon size={16} style={{ color: t.iconColor }} />
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
                className="inline-flex items-center gap-2.5 px-8 py-4 rounded-full font-bold uppercase tracking-wider text-xs sm:text-sm transition-all duration-300 hover:scale-105 no-underline group shadow-xl shadow-[#1A335E]/25 bg-gradient-to-r from-[#1A335E] via-[#0D1B2A] to-[#1A335E] hover:from-[#0D1B2A] hover:to-[#1A335E] text-white"
              >
                <span>Explore All Articles</span>
                <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1.5" />
              </Link>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default KnowledgeCentre;
