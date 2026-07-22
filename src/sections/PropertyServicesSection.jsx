import { ShoppingBag, Tag, Key, Calculator, FileCheck2, UserCheck, ArrowRight } from 'lucide-react';

const servicesList = [
  {
    id: 'buy',
    title: 'Buy Property',
    desc: 'Discover verified residential, commercial, industrial & agricultural lands with clear titles.',
    icon: ShoppingBag,
    badge: 'Popular'
  },
  {
    id: 'sell',
    title: 'Sell Property',
    desc: 'Reach genuine buyers across Tamil Nadu and get the best market value for your land or house.',
    icon: Tag,
    badge: 'Fast Closure'
  },
  {
    id: 'lease',
    title: 'Lease & Rent',
    desc: 'Hassle-free commercial, industrial warehouse, and long-term land leasing agreements.',
    icon: Key,
    badge: 'High Yield'
  },
  {
    id: 'valuation',
    title: 'Property Valuation',
    desc: 'Accurate market valuation reports certified by government-recognized real estate experts.',
    icon: Calculator,
    badge: 'Certified'
  },
  {
    id: 'legal',
    title: 'Legal Docs Verification',
    desc: 'Comprehensive due diligence, Patta check, Encumbrance Certificate & title search.',
    icon: FileCheck2,
    badge: 'Zero Risk'
  },
  {
    id: 'consultation',
    title: 'Real Estate Advisory',
    desc: '1-on-1 advisory with senior real estate & revenue law specialists for smart investments.',
    icon: UserCheck,
    badge: 'Expert Team'
  }
];

const PropertyServicesSection = ({ onOpenEnquiry }) => {
  return (
    <section id="property-services" className="py-20 bg-white relative">
      <div className="container mx-auto px-4 md:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <span className="text-[#D6B97B] font-bold tracking-[0.25em] uppercase text-xs block">
            End-to-End Real Estate Solutions
          </span>
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-[#1A335E]">
            PROPERTY SERVICES
          </h2>
          <p className="text-sm md:text-base text-gray-600">
            From search to final deed registration, our dedicated property team assists you at every step.
          </p>
        </div>

        {/* Services Grid (Matching Image 3 Wireframe) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {servicesList.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.id}
                onClick={() => onOpenEnquiry && onOpenEnquiry(service.title)}
                className="group p-8 rounded-3xl bg-gray-50/80 border border-gray-100 hover:border-[#D6B97B] hover:bg-white shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <div className="w-14 h-14 rounded-2xl bg-[#1A335E] text-white flex items-center justify-center group-hover:bg-[#D6B97B] group-hover:text-[#0F0F0F] transition-colors">
                      <Icon size={26} />
                    </div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-700 bg-emerald-100/70 px-3 py-1 rounded-full">
                      {service.badge}
                    </span>
                  </div>

                  <div>
                    <h3 className="text-xl font-serif font-bold text-[#1A335E] group-hover:text-[#D6B97B] transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-xs text-gray-500 mt-2 leading-relaxed font-medium">
                      {service.desc}
                    </p>
                  </div>
                </div>

                <div className="pt-6 mt-4 border-t border-gray-200/60 flex items-center justify-between text-xs font-bold text-[#1A335E] group-hover:text-[#D6B97B]">
                  <span>Request {service.title}</span>
                  <ArrowRight size={14} className="group-hover:translate-x-1.5 transition-transform" />
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default PropertyServicesSection;
