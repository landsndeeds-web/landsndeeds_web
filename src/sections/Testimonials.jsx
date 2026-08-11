import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import { Quote } from 'lucide-react';
import { testimonials } from '../data/content';
import 'swiper/css';
import 'swiper/css/pagination';

const Testimonials = () => {
  return (
    <section className="py-10 md:py-14 bg-slate-50 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-8 md:mb-10 space-y-2">
          <span className="inline-block px-3 py-1 rounded-full bg-[#1A335E]/5 text-[#D6B97B] font-bold tracking-widest uppercase text-xs">Client Testimonials</span>
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-[#1A335E]">
            Trusted by Property Buyers <span className="gold-gradient italic">& Owners</span>
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto text-sm md:text-base leading-relaxed">
            Every successful transaction begins with trust. Read experiences shared by buyers, sellers, and investors who chose Lands N Deeds.
          </p>
        </div>

        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={24}
          slidesPerView={1}
          breakpoints={{
            768: { slidesPerView: 2 },
          }}
          pagination={{ clickable: true }}
          autoplay={{ delay: 5000 }}
          className="testimonial-swiper pb-10"
        >
          {testimonials.map((t) => (
            <SwiperSlide key={t.id}>
              <div className="bg-white p-6 md:p-8 rounded-2xl h-full flex flex-col justify-between relative overflow-hidden group border border-gray-200/80 shadow-sm hover:shadow-md transition-all">
                <div className="absolute top-4 right-4 text-[#D6B97B]/20 group-hover:text-[#D6B97B]/40 transition-colors">
                  <Quote size={50} />
                </div>
                
                <div className="space-y-4 relative z-10">
                  <p className="text-base md:text-lg font-serif italic text-gray-800 leading-relaxed">
                    "{t.text}"
                  </p>
                  
                  <div className="flex items-center gap-3 pt-2">
                    <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-[#D6B97B]">
                      <img src={t.image} alt={t.name} className="w-full h-full object-cover" />
                    </div>
                    <div>
                      <h4 className="text-[#1A335E] font-bold text-sm md:text-base">{t.name}</h4>
                      <p className="text-[#D6B97B] text-[11px] font-bold uppercase tracking-wider">{t.role}</p>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* CTA */}
        <div className="mt-6 text-center">
          <a
            href="/contact"
            id="testimonials-view-btn"
            className="inline-flex items-center gap-2 px-8 py-3 border-2 border-[#1A335E] text-[#1A335E] hover:bg-[#1A335E] hover:text-white rounded-full font-bold uppercase tracking-widest text-xs transition-all duration-300 hover:scale-[1.02] no-underline"
          >
            View Testimonials
          </a>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
