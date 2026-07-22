import { CheckCircle2, ShieldCheck, FileCheck, Users, Headphones, BadgeCheck, Scale } from 'lucide-react';
import rathnaImg from '../assets/Rathna_Sabapathy.webp';

const whyChooseItems = [
  {
    title: 'Verified Property Listings',
    desc: 'Every property undergoes strict physical inspection and title check before listing.',
    icon: ShieldCheck
  },
  {
    title: 'Transparent Buying Process',
    desc: 'No hidden charges, direct owner negotiations, and clear legal documentation.',
    icon: FileCheck
  },
  {
    title: 'Professional Property Guidance',
    desc: 'Advised by seasoned real estate, land valuation, and revenue law experts.',
    icon: Scale
  },
  {
    title: 'Buy • Sell • Lease Support',
    desc: 'End-to-end management for buying, selling, leasing residential & commercial lands.',
    icon: Users
  },
  {
    title: 'Investment Consultation',
    desc: 'Strategic property growth advisory backed by eminent former revenue & registration officials.',
    icon: BadgeCheck
  },
  {
    title: 'Documentation Assistance',
    desc: 'Hassle-free support for Patta transfer, Chitta, FMB sketch, and EC verification.',
    icon: Headphones
  }
];

const WhyChooseUs = ({ onOpenEnquiry }) => {
  return (
    <section id="why-choose-us" className="py-20 bg-gray-50 relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <span className="text-[#D6B97B] font-bold tracking-[0.25em] uppercase text-xs block">
            Unmatched Expertise & Assurance
          </span>
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-[#1A335E]">
            WHY CHOOSE LANDS N DEEDS
          </h2>
          <p className="text-sm md:text-base text-gray-600">
            We simplify and secure your real estate journey with absolute reliability, legal assurance, and domain authority.
          </p>
        </div>

        {/* Feature Grid (Wireframe Checklist Items) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {whyChooseItems.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
              >
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-2xl bg-[#1A335E]/5 text-[#1A335E] group-hover:bg-[#1A335E] group-hover:text-white transition-colors flex items-center justify-center">
                    <Icon size={24} />
                  </div>
                  <div>
                    <h3 className="text-lg font-serif font-bold text-[#1A335E] flex items-center gap-2">
                      <CheckCircle2 size={18} className="text-[#D6B97B] shrink-0" />
                      {item.title}
                    </h3>
                    <p className="text-xs text-gray-500 mt-2 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Founder & Domain Authority Banner */}
        <div className="bg-[#1A335E] text-white rounded-3xl p-8 md:p-12 relative overflow-hidden shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            
            <div className="lg:col-span-3 flex justify-center">
              <div className="w-32 h-32 md:w-40 md:h-40 rounded-full border-4 border-[#D6B97B] overflow-hidden shadow-xl">
                <img src={rathnaImg} alt="Mr. V. Rathna Sabapathy" className="w-full h-full object-cover" />
              </div>
            </div>

            <div className="lg:col-span-9 space-y-4 text-center lg:text-left">
              <span className="text-[#D6B97B] font-bold text-xs uppercase tracking-widest block">
                Leadership & Domain Excellence
              </span>
              <h3 className="text-2xl md:text-3xl font-serif font-bold text-white">
                Backed by Eminent Revenue & Registration Experts
              </h3>
              <p className="text-sm text-gray-200 leading-relaxed max-w-3xl">
                "Our unique expertise ensures formidable assurance in every immovable property transaction across Tamil Nadu. Backed by former IAS, IRS officers, and high-ranking revenue and registration officials, we mitigate all risks involved in real estate dealings."
              </p>

              <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-white/10">
                <div>
                  <h4 className="font-serif font-bold text-white text-base">MR. V. RATHNA SABAPATHY</h4>
                  <p className="text-[11px] text-[#D6B97B] font-semibold">
                    B.Sc., B.Ed., MBA., LL.B., MBL., ADNEC., FOUNDER
                  </p>
                </div>

                <button
                  onClick={() => onOpenEnquiry && onOpenEnquiry('Consultation with Founder')}
                  className="px-6 py-3 bg-[#D6B97B] hover:bg-white text-[#0F0F0F] rounded-xl font-bold uppercase tracking-widest text-xs transition-all cursor-pointer shrink-0"
                >
                  Book Executive Advisory
                </button>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default WhyChooseUs;
