import { useState } from 'react';
import { BookOpen, FileText, Map, ShieldAlert, TrendingUp, HelpCircle, ChevronRight, X, ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const knowledgeItems = [
  {
    id: 'buying-guides',
    title: 'Property Buying Guides',
    subtitle: 'Step-by-Step Purchasing Checklist',
    summary: 'Comprehensive guide covering verification, agreement drafting, registration fees, and post-purchase steps in Tamil Nadu.',
    icon: BookOpen,
    badge: 'Essential Guide'
  },
  {
    id: 'patta',
    title: 'Patta (Land Ownership Certificate)',
    subtitle: 'Government Revenue Record',
    summary: 'Learn how to verify Patta online via Tamil Nadu e-Services, check Patta transfer eligibility, and avoid land fraud.',
    icon: FileText,
    badge: 'TN Revenue'
  },
  {
    id: 'chitta',
    title: 'Chitta (Land Classification)',
    subtitle: 'Nanjai / Punjai Land Record',
    summary: 'Understand land classification (Wetland vs Dryland), ownership details, and how Chitta relates to Patta records.',
    icon: FileText,
    badge: 'Land Title'
  },
  {
    id: 'fmb',
    title: 'FMB Sketch (Field Measurement Book)',
    subtitle: 'Survey Boundary Map',
    summary: 'How to read survey numbers, sub-divisions, site dimensions, and boundary measurements using official FMB sketches.',
    icon: Map,
    badge: 'Survey Map'
  },
  {
    id: 'ec',
    title: 'Encumbrance Certificate (EC)',
    subtitle: 'Transaction & Mortgage History',
    summary: 'Crucial verification document showing encumbrance status, prior legal mortgages, and 13 to 30 year transaction histories.',
    icon: ShieldAlert,
    badge: 'Legal Clearance'
  },
  {
    id: 'investment-tips',
    title: 'Real Estate Investment Tips',
    subtitle: 'High Growth Regions in TN',
    summary: 'Strategic real estate advice on high-yield commercial hubs, DTCP layout growths, industrial corridors, and land appreciation.',
    icon: TrendingUp,
    badge: 'High ROI'
  }
];

const KnowledgeCentreSection = () => {
  const [selectedTopic, setSelectedTopic] = useState(null);

  return (
    <section id="knowledge-centre" className="py-20 bg-gray-50/70 relative">
      <div className="container mx-auto px-4 md:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <span className="text-[#D6B97B] font-bold tracking-[0.25em] uppercase text-xs block">
            Tamil Nadu Real Estate Guidance
          </span>
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-[#1A335E]">
            PROPERTY KNOWLEDGE CENTRE
          </h2>
          <p className="text-sm md:text-base text-gray-600">
            Empower your land purchase decisions with official revenue guidance on Patta, Chitta, FMB sketches, and legal due diligence.
          </p>
        </div>

        {/* Knowledge Topics Grid (Wireframe Images 3 & 4) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {knowledgeItems.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.id}
                onClick={() => setSelectedTopic(item)}
                className="group p-8 rounded-3xl bg-white border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <div className="w-12 h-12 rounded-2xl bg-[#D6B97B]/15 text-[#1A335E] group-hover:bg-[#1A335E] group-hover:text-[#D6B97B] transition-colors flex items-center justify-center">
                      <Icon size={24} />
                    </div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-gray-500 bg-gray-100 px-3 py-1 rounded-full">
                      {item.badge}
                    </span>
                  </div>

                  <div>
                    <h3 className="text-xl font-serif font-bold text-[#1A335E] group-hover:text-[#D6B97B] transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-xs font-semibold text-[#D6B97B] mt-0.5">
                      {item.subtitle}
                    </p>
                    <p className="text-xs text-gray-500 mt-2 leading-relaxed font-medium">
                      {item.summary}
                    </p>
                  </div>
                </div>

                <div className="pt-6 mt-4 border-t border-gray-100 flex items-center justify-between text-xs font-bold text-[#1A335E] group-hover:text-[#D6B97B]">
                  <span>Read Guide</span>
                  <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            );
          })}
        </div>

        {/* Explore Knowledge Centre Button (Wireframe Image 4 CTA) */}
        <div className="mt-14 text-center">
          <Link
            to="/blogs"
            className="inline-flex items-center gap-2 px-8 py-4 bg-[#1A335E] hover:bg-[#D6B97B] text-white hover:text-[#0F0F0F] rounded-2xl font-bold uppercase tracking-widest text-xs transition-all duration-300 shadow-lg shadow-[#1A335E]/20"
          >
            Explore Knowledge Centre
            <ArrowUpRight size={16} />
          </Link>
        </div>

        {/* Topic Reader Modal */}
        {selectedTopic && (
          <div className="fixed inset-0 z-[200] flex items-center justify-center p-4 bg-black/60 backdrop-blur-md">
            <div className="bg-white w-full max-w-xl rounded-3xl p-8 shadow-2xl relative space-y-4">
              <button
                onClick={() => setSelectedTopic(null)}
                className="absolute top-5 right-5 w-9 h-9 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-[#1A335E] hover:text-white transition-colors cursor-pointer"
              >
                <X size={20} />
              </button>

              <span className="text-xs font-bold uppercase tracking-widest text-[#D6B97B] block">
                {selectedTopic.badge}
              </span>
              <h3 className="text-2xl font-serif font-bold text-[#1A335E]">
                {selectedTopic.title}
              </h3>
              <p className="text-sm font-semibold text-gray-600">
                {selectedTopic.subtitle}
              </p>
              
              <div className="p-4 bg-gray-50 rounded-2xl border border-gray-200/80 text-xs text-gray-700 leading-relaxed space-y-2">
                <p>{selectedTopic.summary}</p>
                <p className="font-semibold text-[#1A335E]">
                  Our expert team performs thorough verification of {selectedTopic.title} records with official revenue departments across Tamil Nadu.
                </p>
              </div>

              <div className="pt-2 flex justify-end gap-3">
                <button
                  onClick={() => setSelectedTopic(null)}
                  className="px-5 py-2.5 bg-gray-100 hover:bg-gray-200 text-gray-800 rounded-xl font-bold text-xs uppercase tracking-wider cursor-pointer"
                >
                  Close
                </button>
                <Link
                  to="/blogs"
                  onClick={() => setSelectedTopic(null)}
                  className="px-5 py-2.5 bg-[#1A335E] hover:bg-[#D6B97B] text-white hover:text-[#0F0F0F] rounded-xl font-bold text-xs uppercase tracking-wider transition-colors"
                >
                  View All Knowledge Resources
                </Link>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};

export default KnowledgeCentreSection;
