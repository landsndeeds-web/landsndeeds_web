import { Link } from 'react-router-dom';
import { MapPin, Building2, ShieldCheck, CheckCircle2, ArrowRight } from 'lucide-react';
import officeImg from '../assets/homeBanner2.webp';

const HomeOfficeIntro = () => {
  return (
    <section id="about-intro" className="py-10 md:py-12 bg-white relative overflow-hidden">
      {/* Subtle Background Elements */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-72 h-72 rounded-full bg-[#1d3557]/5 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-72 h-72 rounded-full bg-[#c5a059]/5 blur-3xl pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          
          {/* Left Column: Photo of Race Course Office */}
          <div className="lg:col-span-6 relative order-2 lg:order-1">
            <div className="relative aspect-[4/3] w-full rounded-[2rem] overflow-hidden shadow-2xl ring-1 ring-gray-200/50 group">
              <img
                src={officeImg}
                alt="Lands N Deeds Race Course Office, Coimbatore"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-in-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0D1B2A]/80 via-[#0D1B2A]/20 to-transparent pointer-events-none" />

              {/* Office Location Badge */}
              <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-6 bg-white/95 backdrop-blur-xl rounded-2xl p-4 shadow-xl ring-1 ring-white/60 flex items-center justify-between transform translate-y-2 group-hover:translate-y-0 transition-all duration-500">
                <div className="flex items-center gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#1d3557] to-[#2a4d7c] flex items-center justify-center shrink-0 shadow-md">
                    <MapPin size={18} className="text-white" />
                  </div>
                  <div>
                    <h4 className="font-serif font-bold text-[#1d3557] text-sm leading-tight">
                      Race Course Landmark
                    </h4>
                    <p className="text-gray-500 text-xs font-medium mt-0.5">
                      Coimbatore • Corporate Office
                    </p>
                  </div>
                </div>
                <span className="hidden sm:inline-flex px-3 py-1.5 rounded-lg bg-[#10B981]/10 text-[#0D5C3A] text-[10px] font-bold uppercase tracking-widest ring-1 ring-[#10B981]/20">
                  Open For Advisory
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Text Explaining What We Do */}
          <div className="lg:col-span-6 space-y-5 order-1 lg:order-2">
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#1d3557]/5 text-[#1d3557] font-bold tracking-widest uppercase text-xs ring-1 ring-[#1d3557]/10">
              <Building2 size={14} className="text-[#c5a059]" />
              Who We Are & What We Do
            </span>

            <h2 className="text-3xl sm:text-4xl lg:text-4xl xl:text-5xl font-serif font-bold text-[#1d3557] leading-[1.15]">
              Bridging Real Estate Deals & Watertight Due Diligence
            </h2>

            <p className="text-gray-600 text-sm sm:text-base leading-relaxed font-normal">
              Lands N Deeds is a premier real estate and property compliance firm operating across Coimbatore, Chennai, and Bengaluru. Directed by former senior government officials, we uniquely bridge the gap between real estate transactions and rigorous legal, survey, and revenue due diligence under a single roof. Our multidisciplinary team meticulously manages every phase of property ownership—ranging from elite residential layouts and farmlands to massive commercial joint ventures and institutional planning. By guaranteeing 360-degree document verification, RERA compliance, and flawless registration, we protect capital and deliver absolute peace of mind for every deal.
            </p>

            {/* Key Assurance Badges */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              <div className="flex items-center gap-3 p-3 rounded-2xl bg-gray-50/80 ring-1 ring-gray-100 transition-all hover:bg-white hover:shadow-md">
                <div className="w-8 h-8 rounded-full bg-[#1d3557]/10 flex items-center justify-center shrink-0">
                  <ShieldCheck size={16} className="text-[#1d3557]" />
                </div>
                <span className="text-sm font-bold text-[#1d3557]">
                  360° Title & Document Scrutiny
                </span>
              </div>
              <div className="flex items-center gap-3 p-3 rounded-2xl bg-gray-50/80 ring-1 ring-gray-100 transition-all hover:bg-white hover:shadow-md">
                <div className="w-8 h-8 rounded-full bg-[#1d3557]/10 flex items-center justify-center shrink-0">
                  <CheckCircle2 size={16} className="text-[#1d3557]" />
                </div>
                <span className="text-sm font-bold text-[#1d3557]">
                  Coimbatore · Chennai · Bengaluru
                </span>
              </div>
            </div>

            {/* Interactive CTA Button */}
            <div className="pt-4">
              <Link
                to="/about"
                id="home-about-explore-btn"
                className="inline-flex items-center gap-2.5 px-7 py-3.5 bg-gradient-to-r from-[#c5a059] to-[#d4b475] hover:from-[#b58f48] hover:to-[#c5a059] text-white rounded-full font-bold uppercase tracking-widest text-xs transition-all duration-300 shadow-[0_8px_20px_rgba(197,160,89,0.3)] hover:shadow-[0_12px_25px_rgba(197,160,89,0.4)] hover:-translate-y-0.5 group"
              >
                <span>Learn More About Us</span>
                <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1.5" />
              </Link>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default HomeOfficeIntro;
