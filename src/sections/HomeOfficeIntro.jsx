import { Link } from 'react-router-dom';
import { MapPin, Building2, ShieldCheck, CheckCircle2, ArrowRight } from 'lucide-react';
import officeImg from '../assets/homeBanner2.webp';

const HomeOfficeIntro = () => {
  return (
    <section id="about-intro" className="pt-8 pb-5 md:pt-10 md:pb-7 bg-gradient-to-b from-white via-slate-50/60 to-white relative overflow-hidden">
      {/* Subtle Background Elements */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-80 h-80 rounded-full bg-blue-500/5 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 rounded-full bg-amber-500/5 blur-3xl pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-12 gap-6 lg:gap-10 items-center">
          
          {/* Left Column: Photo of Race Course Office */}
          <div className="lg:col-span-6 relative order-2 lg:order-1">
            <div className="relative aspect-[4/3] w-full rounded-3xl overflow-hidden shadow-2xl ring-1 ring-slate-200/80 group">
              <img
                src={officeImg}
                alt="Lands N Deeds Race Course Office, Coimbatore"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-in-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent pointer-events-none" />

              {/* Office Location Badge */}
              <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-6 bg-white/95 backdrop-blur-xl rounded-2xl p-4 sm:p-5 shadow-2xl ring-1 ring-white/80 flex items-center justify-between transform translate-y-2 group-hover:translate-y-0 transition-all duration-500">
                <div className="flex items-center gap-3.5">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-600 to-indigo-700 flex items-center justify-center shrink-0 shadow-md">
                    <MapPin size={22} className="text-white" />
                  </div>
                  <div>
                    <h4 className="font-['Outfit',sans-serif] font-bold text-slate-900 text-base sm:text-lg leading-tight">
                      Race Course Landmark
                    </h4>
                    <p className="text-slate-600 text-xs sm:text-sm font-medium mt-0.5">
                      Coimbatore • Corporate Office
                    </p>
                  </div>
                </div>
                <span className="hidden sm:inline-flex px-3.5 py-1.5 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold uppercase tracking-wider ring-1 ring-emerald-300 shadow-xs">
                  ● Open For Advisory
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Text Explaining What We Do */}
          <div className="lg:col-span-6 space-y-6 order-1 lg:order-2">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 text-blue-700 font-extrabold tracking-wider uppercase text-xs sm:text-[13px] ring-1 ring-blue-200/80 shadow-xs">
              <Building2 size={15} className="text-amber-500" />
              Who We Are & What We Do
            </span>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-['Outfit',sans-serif] font-black text-slate-900 leading-[1.12] tracking-tight">
              Bridging Real Estate Deals & <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-800 bg-clip-text text-transparent">Watertight Due Diligence</span>
            </h2>

            <p className="text-slate-700 text-base sm:text-lg leading-relaxed font-normal">
              Lands N Deeds is a premier real estate and property compliance firm operating across Coimbatore, Chennai, and Bengaluru. Directed by former senior government officials, we uniquely bridge the gap between real estate transactions and rigorous legal, survey, and revenue due diligence under a single roof. Our multidisciplinary team meticulously manages every phase of property ownership—ranging from elite residential layouts and farmlands to massive commercial joint ventures and institutional planning. By guaranteeing 360-degree document verification, RERA compliance, and flawless registration, we protect capital and deliver absolute peace of mind for every deal.
            </p>

            {/* Key Assurance Badges */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-1">
              <div className="flex items-center gap-3.5 p-4 rounded-2xl bg-white border border-slate-200/90 shadow-sm transition-all hover:shadow-md hover:border-blue-300">
                <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-700 flex items-center justify-center shrink-0 ring-1 ring-blue-100">
                  <ShieldCheck size={20} className="text-blue-600" />
                </div>
                <span className="text-sm sm:text-base font-bold text-slate-900">
                  360° Title & Document Scrutiny
                </span>
              </div>
              <div className="flex items-center gap-3.5 p-4 rounded-2xl bg-white border border-slate-200/90 shadow-sm transition-all hover:shadow-md hover:border-emerald-300">
                <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center shrink-0 ring-1 ring-emerald-100">
                  <CheckCircle2 size={20} className="text-emerald-600" />
                </div>
                <span className="text-sm sm:text-base font-bold text-slate-900">
                  Coimbatore · Chennai · Bengaluru
                </span>
              </div>
            </div>

            {/* Interactive CTA Button */}
            <div className="pt-2">
              <Link
                to="/about"
                id="home-about-explore-btn"
                className="inline-flex items-center gap-2.5 px-8 py-4 bg-gradient-to-r from-blue-700 via-blue-600 to-indigo-700 hover:from-blue-800 hover:to-indigo-800 text-white rounded-full font-bold uppercase tracking-wider text-xs sm:text-sm transition-all duration-300 shadow-xl shadow-blue-600/25 hover:shadow-blue-600/40 hover:-translate-y-0.5 group"
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
