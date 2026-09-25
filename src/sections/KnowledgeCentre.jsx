import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, FileText, TrendingUp, Scale, ArrowRight, Sparkles } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const topics = [
  { label: 'Title Verification Guides', icon: BookOpen, accent: 'border-blue-100 text-[#1d3557]' },
  { label: 'Sale Deed, EC & Patta Laws', icon: FileText, accent: 'border-gray-200 text-[#1d3557]' },
  { label: 'Market Investment Trends', icon: TrendingUp, accent: 'border-emerald-100 text-[#0D5C3A]' },
  { label: 'Stamp Duty & Registration', icon: Scale, accent: 'border-blue-100 text-[#1d3557]' },
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
    <section ref={sectionRef} id="knowledge-centre" className="py-8 md:py-10 relative overflow-hidden" style={{ background: 'linear-gradient(160deg,#fdf9f4 0%,#fafbfc 100%)' }}>
      {/* Decorative background glow */}
      <div className="absolute top-0 right-0 w-80 h-80 rounded-full pointer-events-none" style={{ background: 'radial-gradient(circle,rgba(197,160,89,0.08) 0%,transparent 70%)', transform: 'translate(20%,-20%)' }} />
      <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full pointer-events-none" style={{ background: 'radial-gradient(circle,rgba(29,53,87,0.04) 0%,transparent 70%)', transform: 'translate(-20%,20%)' }} />

      <div className="container mx-auto px-6 relative z-10">
        <div className="bg-white rounded-2xl md:rounded-3xl p-6 md:p-8 shadow-sm relative overflow-hidden" style={{ border: '1px solid rgba(197,160,89,0.2)' }}>

          <div className="flex flex-col lg:flex-row items-center justify-between gap-6">

            {/* Left Column */}
            <div className="space-y-3 text-center lg:text-left max-w-2xl knowledge-fade-in">
              <span className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full font-bold tracking-widest uppercase text-[11px]" style={{ background: 'rgba(197,160,89,0.12)', color: '#b08a40', border: '1px solid rgba(197,160,89,0.25)' }}>
                <Sparkles size={11} style={{ color: '#c5a059' }} />
                Legal & Real Estate Insights
              </span>

              <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-[#1d3557] leading-tight">
                Property Knowledge Centre
              </h2>

              <p className="text-gray-500 text-xs sm:text-sm leading-relaxed">
                Make confident property decisions with practical guides, legal document breakdowns, emerging zone updates, and advisory insights prepared by our legal and real estate specialists.
              </p>

              {/* Topic Chips */}
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2 pt-1">
                {topics.map((t, idx) => {
                  const Icon = t.icon;
                  return (
                    <span
                      key={idx}
                      className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-xs font-semibold"
                      style={{
                        background: idx % 2 === 0 ? 'rgba(29,53,87,0.05)' : 'rgba(197,160,89,0.08)',
                        color: idx % 2 === 0 ? '#1d3557' : '#b08a40',
                        border: `1px solid ${idx % 2 === 0 ? 'rgba(29,53,87,0.12)' : 'rgba(197,160,89,0.2)'}`,
                      }}
                    >
                      <Icon size={12} style={{ color: idx % 2 === 0 ? '#1d3557' : '#c5a059' }} />
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
                className="inline-flex items-center gap-2 px-7 py-3 rounded-full font-bold uppercase tracking-widest text-xs transition-all duration-300 hover:scale-105 no-underline group"
                style={{ background: 'linear-gradient(135deg,#c5a059,#d4b475)', color: '#fff', boxShadow: '0 6px 18px rgba(197,160,89,0.3)' }}
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
