import { Phone, MessageSquare, Send } from 'lucide-react';

const StickyMobileBar = ({ onOpenEnquiry }) => {
  return (
    <aside aria-label="Mobile Action Navigation" className="fixed bottom-0 left-0 right-0 z-[150] bg-white/95 backdrop-blur-md border-t border-gray-200 shadow-2xl py-3 px-4 md:hidden">
      <div className="grid grid-cols-3 gap-2 max-w-md mx-auto">
        {/* Call Now */}
        <a
          href="tel:+919442630000"
          className="flex flex-col items-center justify-center py-2 px-1 bg-[#1A335E] text-white rounded-xl font-bold text-xs shadow-sm active:scale-95 transition-transform"
        >
          <Phone size={18} className="mb-0.5" />
          <span>Call</span>
        </a>

        {/* WhatsApp */}
        <a
          href="https://wa.me/919442630000?text=Hello%20Lands%20n%20Deeds%2C%20I%20am%20interested%20in%20verified%20properties."
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center py-2 px-1 bg-emerald-600 text-white rounded-xl font-bold text-xs shadow-sm active:scale-95 transition-transform"
        >
          <MessageSquare size={18} className="mb-0.5" />
          <span>WhatsApp</span>
        </a>

        {/* Enquire */}
        <button
          onClick={() => onOpenEnquiry('General Enquiry')}
          className="flex flex-col items-center justify-center py-2 px-1 bg-[#D6B97B] text-[#0F0F0F] rounded-xl font-bold text-xs shadow-sm active:scale-95 transition-transform cursor-pointer"
        >
          <Send size={18} className="mb-0.5" />
          <span>Enquire</span>
        </button>
      </div>
    </aside>
  );
};

export default StickyMobileBar;
