import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, FileSearch, TrendingUp, Scale, ArrowUpRight } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const articles = [
  {
    id: 1,
    icon: BookOpen,
    category: "Buyer's Guide",
    title: 'How to Verify a Property Before Buying',
    excerpt: 'A step-by-step guide to checking title deeds, encumbrance certificates, and legal clearances before any purchase.',
    readTime: '5 min read',
  },
  {
    id: 2,
    icon: FileSearch,
    category: 'Legal Docs',
    title: 'Understanding Sale Deed, EC & Patta in Tamil Nadu',
    excerpt: 'Plain-language explanations of the key property documents you need for a safe and legal transaction.',
    readTime: '7 min read',
  },
  {
    id: 3,
    icon: TrendingUp,
    category: 'Investment Tips',
    title: 'Top Emerging Property Investment Zones in Tamil Nadu 2025',
    excerpt: 'Discover high-growth corridors and undervalued areas with strong appreciation potential for investors.',
    readTime: '6 min read',
  },
  {
    id: 4,
    icon: Scale,
    category: 'Legal Updates',
    title: 'Property Registration Rules & Stamp Duty in Tamil Nadu',
    excerpt: 'Stay updated on the latest regulations, applicable stamp duty rates, and registration procedures.',
    readTime: '4 min read',
  },
];

const KnowledgeCentre = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.article-card',
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
    <section ref={sectionRef} id="knowledge-centre" className="py-10 md:py-14 bg-white relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-end gap-4 mb-8 md:mb-10">
          <div className="space-y-2">
            <span className="inline-block px-3 py-1 rounded-full bg-[#1A335E]/5 text-[#D6B97B] font-bold tracking-widest uppercase text-xs">
              Expert Insights
            </span>
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-[#1A335E]">
              Property Knowledge <span className="gold-gradient">Centre</span>
            </h2>
          </div>
          <p className="text-gray-500 max-w-md md:text-right hidden md:block text-sm leading-relaxed">
            Make better property decisions with practical guides, legal document explanations, investment tips, and real estate updates prepared by our experts.
          </p>
        </div>

        {/* Articles Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {articles.map((article) => {
            const Icon = article.icon;
            return (
              <div
                key={article.id}
                className="article-card group relative bg-white rounded-xl border border-gray-200/80 p-5 hover:border-[#D6B97B] hover:shadow-lg transition-all duration-300 hover:-translate-y-1 overflow-hidden cursor-pointer flex flex-col justify-between"
              >
                <div>
                  {/* Top accent */}
                  <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-[#D6B97B] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-t-xl" />

                  {/* Icon */}
                  <div className="w-10 h-10 rounded-lg bg-[#1A335E]/5 flex items-center justify-center mb-3 group-hover:bg-[#1A335E] transition-colors duration-300">
                    <Icon size={18} className="text-[#1A335E] group-hover:text-[#D6B97B] transition-colors duration-300" />
                  </div>

                  {/* Category badge */}
                  <span className="inline-block px-2.5 py-0.5 rounded-full bg-[#D6B97B]/15 text-[#B8922E] text-[10px] font-bold uppercase tracking-wider mb-2">
                    {article.category}
                  </span>

                  {/* Title */}
                  <h3 className="text-[#1A335E] font-serif font-bold text-sm md:text-base leading-snug mb-2 group-hover:text-[#D6B97B] transition-colors duration-300">
                    {article.title}
                  </h3>

                  {/* Excerpt */}
                  <p className="text-gray-500 text-xs leading-relaxed mb-4">
                    {article.excerpt}
                  </p>
                </div>

                {/* Footer */}
                <div className="flex items-center justify-between pt-3 border-t border-gray-100">
                  <span className="text-gray-400 text-[10px] uppercase tracking-wider font-semibold">
                    {article.readTime}
                  </span>
                  <ArrowUpRight size={14} className="text-gray-400 group-hover:text-[#D6B97B] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="mt-8 text-center">
          <Link
            to="/blogs"
            id="knowledge-centre-explore-btn"
            className="inline-flex items-center gap-2 px-8 py-3 border-2 border-[#1A335E] text-[#1A335E] hover:bg-[#1A335E] hover:text-white rounded-full font-bold uppercase tracking-widest text-xs transition-all duration-300 hover:scale-[1.02] no-underline"
          >
            Explore All Articles
            <ArrowUpRight size={15} />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default KnowledgeCentre;
