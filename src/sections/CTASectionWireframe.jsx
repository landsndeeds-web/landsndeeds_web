import { Phone, MessageSquare, Send } from 'lucide-react';

const CTASectionWireframe = ({ onOpenEnquiry }) => {
  return (
    <section className="py-20 bg-[#1A335E] text-white relative overflow-hidden">
      {/* Background Graphic Accents */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#D6B97B]/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-4 md:px-8 relative z-10 text-center max-w-3xl space-y-6">
        
        {/* Wireframe Title */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-white tracking-tight">
          READY TO FIND YOUR PROPERTY?
        </h2>

        {/* Wireframe Subtitle */}
        <p className="text-base sm:text-lg md:text-xl text-gray-200 font-medium">
          Let our experts help you choose the right property.
        </p>

        {/* Wireframe Action Buttons: [Call Now] [WhatsApp] [Enquire] */}
        <div className="pt-4 flex flex-wrap justify-center gap-4">
          
          {/* Call Now */}
          <a
            href="tel:+919442630000"
            className="px-8 py-4 bg-white hover:bg-gray-100 text-[#1A335E] rounded-2xl font-bold uppercase tracking-widest text-xs transition-all duration-300 shadow-lg flex items-center gap-2 hover:scale-105"
          >
            <Phone size={16} className="text-[#1A335E]" />
            Call Now
          </a>

          {/* WhatsApp */}
          <a
            href="https://wa.me/919442630000?text=Hello%20Lands%20n%20Deeds%2C%20I%20would%20like%20expert%20assistance%20in%20choosing%20a%20property."
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 bg-emerald-600 hover:bg-emerald-700 text-white rounded-2xl font-bold uppercase tracking-widest text-xs transition-all duration-300 shadow-lg flex items-center gap-2 hover:scale-105"
          >
            <MessageSquare size={16} />
            WhatsApp
          </a>

          {/* Enquire */}
          <button
            onClick={() => onOpenEnquiry && onOpenEnquiry('Ready to Find Your Property')}
            className="px-8 py-4 bg-[#D6B97B] hover:bg-white text-[#0F0F0F] hover:text-[#1A335E] rounded-2xl font-bold uppercase tracking-widest text-xs transition-all duration-300 shadow-lg flex items-center gap-2 cursor-pointer hover:scale-105"
          >
            <Send size={16} />
            Enquire
          </button>

        </div>

      </div>
    </section>
  );
};

export default CTASectionWireframe;
