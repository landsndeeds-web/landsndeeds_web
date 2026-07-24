import { Home, Building, Trees, Factory, Landmark, ArrowRight, Compass } from 'lucide-react';
import { Link } from 'react-router-dom';

const categories = [
  {
    id: 'apartments',
    title: 'Apartments',
    count: '120+ Listings',
    description: 'Modern luxury flats, penthouses & community apartments.',
    icon: Home,
    color: 'from-amber-500/10 to-amber-500/5',
    iconColor: 'text-amber-600'
  },
  {
    id: 'villas',
    title: 'Villas',
    count: '85+ Listings',
    description: 'Independent luxury houses, gated villas & farmhouses.',
    icon: Landmark,
    color: 'from-emerald-500/10 to-emerald-500/5',
    iconColor: 'text-emerald-600'
  },
  {
    id: 'lands',
    title: 'Lands / Plots',
    count: '210+ Listings',
    description: 'DTCP & RERA approved residential layouts & plot sites.',
    icon: Compass,
    color: 'from-blue-500/10 to-blue-500/5',
    iconColor: 'text-blue-600'
  },
  {
    id: 'commercial',
    title: 'Commercial',
    count: '64+ Listings',
    description: 'Retail shops, corporate offices & commercial spaces.',
    icon: Building,
    color: 'from-purple-500/10 to-purple-500/5',
    iconColor: 'text-purple-600'
  },
  {
    id: 'agricultural',
    title: 'Agricultural',
    count: '95+ Listings',
    description: 'Fertile farmland, coconut groves & agricultural land.',
    icon: Trees,
    color: 'from-green-500/10 to-green-500/5',
    iconColor: 'text-green-600'
  },
  {
    id: 'industrial',
    title: 'Industrial',
    count: '42+ Listings',
    description: 'SIPCOT plots, industrial warehouses & factory land.',
    icon: Factory,
    color: 'from-red-500/10 to-red-500/5',
    iconColor: 'text-red-600'
  }
];

const PropertyCategoriesSection = () => {
  return (
    <section className="py-12 md:py-14 bg-slate-50/70 relative">
      <div className="container mx-auto px-4 md:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-8 md:mb-10 space-y-2">
          <span className="text-[#D6B97B] font-bold tracking-[0.25em] uppercase text-xs block">
            Tailored Real Estate Solutions
          </span>
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-[#1A335E]">
            EXPLORE PROPERTY CATEGORIES
          </h2>
          <p className="text-sm md:text-base text-gray-600">
            Browse through verified property types across Tamil Nadu designed to suit every lifestyle & investment requirement.
          </p>
        </div>

        {/* Categories Grid (Wireframe 6 Card Layout) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((cat) => {
            const Icon = cat.icon;
            return (
              <Link
                key={cat.id}
                to={`/properties?type=${encodeURIComponent(cat.title)}`}
                className="group p-8 rounded-3xl bg-white border-2 border-gray-200/80 hover:border-[#D6B97B] shadow-md hover:shadow-2xl hover:-translate-y-1.5 transition-all duration-300 relative overflow-hidden flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <div className={`w-14 h-14 rounded-2xl bg-gray-50 border border-gray-100 shadow-sm flex items-center justify-center ${cat.iconColor} group-hover:scale-110 group-hover:bg-[#1A335E] group-hover:text-white transition-all`}>
                      <Icon size={28} />
                    </div>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-gray-600 bg-slate-100 border border-slate-200 px-3 py-1 rounded-full">
                      {cat.count}
                    </span>
                  </div>

                  <div>
                    <h3 className="text-xl font-serif font-bold text-[#1A335E] group-hover:text-[#D6B97B] transition-colors">
                      {cat.title}
                    </h3>
                    <p className="text-xs text-gray-500 mt-2 leading-relaxed font-medium">
                      {cat.description}
                    </p>
                  </div>
                </div>

                <div className="pt-6 mt-4 border-t border-gray-100 flex items-center justify-between text-xs font-bold text-[#1A335E] group-hover:text-[#D6B97B] transition-colors">
                  <span>Explore {cat.title}</span>
                  <ArrowRight size={14} className="group-hover:translate-x-1.5 transition-transform" />
                </div>
              </Link>
            );
          })}
        </div>

        {/* View All Categories CTA Button */}
        <div className="mt-8 md:mt-10 text-center">
          <Link
            to="/properties"
            className="inline-flex items-center gap-2 px-8 py-4 bg-[#1A335E] hover:bg-[#D6B97B] text-white hover:text-[#0F0F0F] rounded-2xl font-bold uppercase tracking-widest text-xs transition-all duration-300 shadow-lg shadow-[#1A335E]/20"
          >
            View All Categories
            <ArrowRight size={16} />
          </Link>
        </div>

      </div>
    </section>
  );
};

export default PropertyCategoriesSection;
