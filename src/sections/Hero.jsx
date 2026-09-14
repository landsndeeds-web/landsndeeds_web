import { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';

// Import images for slideshow
import prop2 from '../assets/property2.webp';
import prop3 from '../assets/property3.webp';
import prop6 from '../assets/property6.webp';
import prop7 from '../assets/property7.webp';

const Hero = () => {
  const containerRef = useRef(null);
  const textContainerRef = useRef(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const slides = [
    {
      image: prop3,
      tagline: "Verified Properties Across Tamil Nadu",
      headline: "Find the Right Property with Confidence",
      subtext: "Whether you're buying, selling, leasing, or investing, Lands N Deeds helps you discover verified properties with expert guidance and a transparent process across Tamil Nadu."
    },
    {
      image: prop2,
      tagline: "Expert Property Consultation",
      headline: "Find the Right Property with Confidence",
      subtext: "Whether you're buying, selling, leasing, or investing, Lands N Deeds helps you discover verified properties with expert guidance and a transparent process across Tamil Nadu."
    },
    {
      image: prop6,
      tagline: "Buy · Sell · Lease · Invest",
      headline: "Find the Right Property with Confidence",
      subtext: "Whether you're buying, selling, leasing, or investing, Lands N Deeds helps you discover verified properties with expert guidance and a transparent process across Tamil Nadu."
    },
    {
      image: prop7,
      tagline: "Transparent Property Platform",
      headline: "Find the Right Property with Confidence",
      subtext: "Whether you're buying, selling, leasing, or investing, Lands N Deeds helps you discover verified properties with expert guidance and a transparent process across Tamil Nadu."
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
    <section ref={containerRef} className="relative min-h-[85vh] lg:min-h-[90vh] w-full overflow-hidden flex items-center bg-white pt-24 pb-10">
      {/* Background Slideshow */}
      <div className="absolute inset-0 z-0">
        {slides.map((slide, i) => (
          <div 
            key={i}
            className={`hero-bg absolute inset-0 w-full h-full bg-cover bg-center transition-opacity duration-1500 ease-in-out ${i === currentImageIndex ? 'opacity-100' : 'opacity-0'}`}
            style={{ backgroundImage: `url(${slide.image})` }}
          />
        ))}
        {/* Brand Gradient Overlays */}
        <div className="absolute inset-0 luxury-gradient-bg opacity-70 mix-blend-multiply z-[1]" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1A335E]/80 via-transparent to-transparent z-[1]" />
      </div>

      <div ref={textContainerRef} className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl">
          <div className="overflow-hidden mb-3">
            <span className="reveal-tagline block text-[#D6B97B] font-bold tracking-[0.3em] uppercase text-xs md:text-sm">
              {currentSlide.tagline}
            </span>
          </div>
          
          <div className="overflow-hidden mb-4">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold !text-white leading-tight">
              {currentSlide.headline.split(' ').map((word, i) => (
                <span key={i} className="inline-block overflow-hidden mr-[0.2em] last:mr-0">
                  <span className={`reveal-word inline-block ${word === 'Confidence' ? 'gold-gradient' : ''}`}>
                    {word}
                  </span>
                </span>
              ))}
            </h1>
          </div>
          
          <div className="overflow-hidden mb-8">
            <p className="reveal-subtext text-base md:text-lg lg:text-xl text-white/90 max-w-2xl leading-relaxed font-normal">
              {currentSlide.subtext}
            </p>
          </div>

          <div className="flex flex-wrap gap-4">
            <a
              href="/properties"
              id="hero-explore-properties-btn"
              className="reveal-btn px-8 py-3.5 bg-gradient-to-r from-[#D6B97B] to-[#C6A56A] hover:from-[#E8C97A] hover:to-[#D6B97B] text-[#0D1B2A] rounded-full font-bold hover:bg-white transition-all transform hover:scale-105 uppercase tracking-widest text-xs inline-flex items-center gap-2 no-underline shadow-lg shadow-[#D6B97B]/20"
            >
              🔍 Explore Properties
            </a>
            <a
              href="/contact"
              id="hero-post-property-btn"
              className="reveal-btn px-8 py-3.5 border border-white/60 text-white rounded-full font-bold hover:bg-white/20 transition-all uppercase tracking-widest text-xs backdrop-blur-sm inline-flex items-center gap-2 no-underline"
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
