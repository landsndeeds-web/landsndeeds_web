import { Star, Quote, CheckCircle } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    quote: "Professional guidance throughout the property purchase.",
    detail: "The due diligence team verified every Patta and Encumbrance Certificate before we paid the advance. Seamless and stress-free experience!",
    author: "R. Sundaram",
    location: "Coimbatore",
    role: "Verified Land Buyer",
    stars: 5
  },
  {
    id: 2,
    quote: "Transparent process and excellent support.",
    detail: "Sold our commercial site in Chennai within 3 weeks. Complete transparency on pricing with zero hidden commission hassle.",
    author: "Priya Ramesh",
    location: "Chennai",
    role: "Property Seller",
    stars: 5
  },
  {
    id: 3,
    quote: "Complete legal title verification with 100% peace of mind.",
    detail: "Their legal advisory team helped us detect a minor boundary mismatch in the FMB sketch prior to registration. Saved us millions!",
    author: "K. Venkatesh",
    location: "Hosur",
    role: "Industrial Land Investor",
    stars: 5
  }
];

const CustomerTestimonialsSection = () => {
  return (
    <section id="testimonials" className="py-12 md:py-14 bg-slate-50/70 relative">
      <div className="container mx-auto px-4 md:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-8 md:mb-10 space-y-2">
          <span className="text-[#D6B97B] font-bold tracking-[0.25em] uppercase text-xs block">
            Client Success Stories
          </span>
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-[#1A335E]">
            CUSTOMER TESTIMONIALS
          </h2>
          <p className="text-sm md:text-base text-gray-600">
            Hear from buyers, sellers, and investors who trusted Lands n Deeds with their property transactions.
          </p>
        </div>

        {/* Testimonials Cards Grid (Matching Wireframe Image 4) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t) => (
            <div
              key={t.id}
              className="p-8 rounded-3xl bg-white border-2 border-gray-200/80 hover:border-[#D6B97B] shadow-md hover:shadow-2xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between relative group"
            >
              <div className="space-y-4">
                {/* 5-Star Rating Row */}
                <div className="flex items-center gap-1 text-[#D6B97B]">
                  {[...Array(t.stars)].map((_, i) => (
                    <Star key={i} size={18} fill="currentColor" />
                  ))}
                </div>

                {/* Quote (Wireframe exact string match) */}
                <h3 className="text-lg font-serif font-bold text-[#1A335E] italic leading-snug group-hover:text-[#D6B97B] transition-colors">
                  "{t.quote}"
                </h3>

                <p className="text-xs text-gray-600 leading-relaxed font-medium">
                  {t.detail}
                </p>
              </div>

              {/* Author Footer */}
              <div className="pt-6 mt-6 border-t border-gray-100 flex items-center justify-between">
                <div>
                  <h4 className="font-serif font-bold text-sm text-[#1A335E]">{t.author}</h4>
                  <p className="text-[11px] text-gray-500 font-medium">{t.location} • {t.role}</p>
                </div>
                <div className="w-8 h-8 rounded-full bg-emerald-100/80 text-emerald-700 flex items-center justify-center border border-emerald-200">
                  <CheckCircle size={16} />
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default CustomerTestimonialsSection;
