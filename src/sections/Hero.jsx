import { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';

// Import images for slideshow
import homeBanner1 from '../assets/homeBanner1.webp';
import homeBanner2 from '../assets/homeBanner2.webp';

const Hero = () => {
  const containerRef = useRef(null);
  const textContainerRef = useRef(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const slides = [
    {
      image: homeBanner1,
      tagline: "Verified Properties Across Tamil Nadu",
      headline: "Trusted For Every Deal",
      subtext: "South India's premium real estate firm providing guaranteed due diligence, marketing, and registration under one single roof."
    },
    {
      image: homeBanner2,
      tagline: "Buy · Sell · Lease · Invest",
      headline: "Trusted For Every Deal",
      subtext: "South India's premium real estate firm providing guaranteed due diligence, marketing, and registration under one single roof."
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  // Animation for each slide change
  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline();

      tl.fromTo(".reveal-tagline",
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, ease: "power3.out" }
      )
        .fromTo(".reveal-word",
          { y: 60, skewY: 7, opacity: 0 },
          { y: 0, skewY: 0, opacity: 1, duration: 1.2, stagger: 0.1, ease: "power4.out" },
          "-=0.6"
        )
        .fromTo(".reveal-subtext",
          { y: 20, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.8, ease: "power3.out" },
          "-=0.8"
        )
        .fromTo(".reveal-btn",
          { y: 20, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.8, stagger: 0.2, ease: "power3.out" },
          "-=0.6"
        );
    }, textContainerRef);

    return () => ctx.revert();
  }, [currentImageIndex]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(".hero-bg",
        { scale: 1.2 },
        { scale: 1, duration: 2.5, ease: "power2.out" }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const currentSlide = slides[currentImageIndex];

  return (
    <section ref={containerRef} className="relative min-h-screen w-full overflow-hidden flex items-center bg-[#0D1B2A] pt-24 pb-12">
      {/* Background Slideshow */}
      <div className="absolute inset-0 z-0">
        {slides.map((slide, i) => (
          <div
            key={i}
            className={`hero-bg absolute inset-0 w-full h-full bg-cover bg-center transition-opacity duration-1500 ease-in-out ${i === currentImageIndex ? 'opacity-100' : 'opacity-0'}`}
            style={{ backgroundImage: `url(${slide.image})` }}
          />
        ))}
        {/* Balanced overlay: keeps the banner images clear and visible while ensuring sharp text contrast */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0D1B2A]/85 via-[#0D1B2A]/45 to-transparent z-[1]" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0D1B2A]/40 via-transparent to-black/15 z-[1]" />
      </div>

      <div ref={textContainerRef} className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl space-y-4 drop-shadow-[0_2px_10px_rgba(0,0,0,0.5)]">
          <div className="overflow-hidden">
            <div className="reveal-tagline inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#D6B97B]/20 border border-[#D6B97B]/40 text-[#D6B97B] font-bold tracking-[0.2em] uppercase text-xs">
              <span className="w-2 h-2 rounded-full bg-[#10B981] animate-pulse" />
              {currentSlide.tagline}
            </div>
          </div>

          <div className="overflow-hidden">
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-serif font-bold !text-white leading-tight">
              {currentSlide.headline.split(' ').map((word, i) => (
                <span key={i} className="inline-block overflow-hidden mr-[0.2em] last:mr-0">
                  <span className={`reveal-word inline-block ${word === 'Deal' || word === 'Confidence' ? 'gold-gradient' : ''}`}>
                    {word}
                  </span>
                </span>
              ))}
            </h1>
          </div>

          <div className="overflow-hidden">
            <p className="reveal-subtext text-sm md:text-base lg:text-lg text-white/90 max-w-2xl leading-relaxed font-normal">
              {currentSlide.subtext}
            </p>
          </div>

          <div className="flex flex-wrap gap-3 pt-2">
            <a
              href="/properties"
              id="hero-explore-properties-btn"
              className="reveal-btn px-7 py-3 bg-gradient-to-r from-[#D6B97B] to-[#C6A56A] hover:from-[#E8C97A] hover:to-[#D6B97B] text-[#0D1B2A] rounded-full font-bold transition-all transform hover:scale-105 uppercase tracking-widest text-xs inline-flex items-center gap-2 no-underline shadow-lg shadow-[#D6B97B]/25"
            >
              🔍 Explore Properties
            </a>
            <a
              href="/contact"
              id="hero-post-property-btn"
              className="reveal-btn px-7 py-3 border border-white/40 text-white hover:border-[#10B981] hover:text-[#10B981] rounded-full font-bold hover:bg-white/10 transition-all uppercase tracking-widest text-xs backdrop-blur-sm inline-flex items-center gap-2 no-underline"
            >
              📋 Post Property
            </a>
          </div>
        </div>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 flex gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrentImageIndex(i)}
            aria-label={`Go to slide ${i + 1}`}
            className={`h-1 rounded-full transition-all duration-500 cursor-pointer border-0 p-0 ${i === currentImageIndex ? 'w-8 bg-[#D6B97B]' : 'w-2 bg-white/40'}`}
          />
        ))}
      </div>
    </section>
  );
};

export default Hero;
